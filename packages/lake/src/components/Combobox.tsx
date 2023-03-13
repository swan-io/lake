import {
  memo as reactMemo,
  ReactNode,
  ReactText,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import isEqual from "react-fast-compare";
import {
  ActivityIndicator,
  FlatList,
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  View,
  ViewStyle,
} from "react-native";
import { match } from "ts-pattern";
import { colors } from "../constants/colors";
import { spacings } from "../constants/design";
import { typography } from "../constants/typography";
import { useDisclosure } from "../hooks/useDisclosure";
import { useResponsive } from "../hooks/useResponsive";
import { isNotNullish, isNullish } from "../utils/nullish";
import { Icon, IconName } from "./Icon";
import { Input } from "./Input";
import { LakeTextInput } from "./LakeTextInput";
import { Popover, VIEWPORT_WIDTH_THRESHOLD } from "./Popover";

const ELEMENT_HEIGHT = 72;
const NB_SUGGESTION_DISPLAYED = 3.5;

const styles = StyleSheet.create({
  inputWithLeftIcon: {
    paddingLeft: 48,
  },
  icon: {
    position: "absolute",
    left: 16,
    top: 14,
  },
  iconWithLabel: {
    top: 42,
  },
  list: {
    maxHeight: ELEMENT_HEIGHT * NB_SUGGESTION_DISPLAYED,
  },
  loading: {
    height: ELEMENT_HEIGHT * NB_SUGGESTION_DISPLAYED,
    left: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flexShrink: 1,
    flexGrow: 1,
    height: ELEMENT_HEIGHT,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 0,
    transitionProperty: "background-color",
    transitionDuration: "200ms",
  },
  hoveredItem: {
    backgroundColor: colors.gray[3],
  },
  pressedItem: {
    backgroundColor: colors.gray[10],
  },
  itemText: {
    ...typography.bodyLarge,
  },
  mobileInput: {
    padding: spacings[16],
  },
});

const isReactText = (node: ReactNode): node is ReactText =>
  ["string", "number"].includes(typeof node);

const getItemLayout: (
  data: { value: string; disabled?: boolean }[] | null | undefined,
  index: number,
) => {
  length: number;
  offset: number;
  index: number;
} = (_data, index) => ({
  length: ELEMENT_HEIGHT,
  offset: ELEMENT_HEIGHT * index,
  index,
});

type Props<I extends { value: string; disabled?: boolean }> = {
  value: string;
  items: I[];
  ListFooterComponent?: ReactNode;
  onValueChange: (value: string) => void;
  onSelectItem: (value: I) => void;
  renderItem: (item: I) => ReactNode | null;
  size?: "large" | "small";
  icon?: IconName;
  label?: string;
  placeholder?: string;
  loading?: boolean;
  disabled?: boolean;
  error?: string;
  style?: StyleProp<ViewStyle>;
};

const memo: <P extends Record<string, unknown>>(
  Component: (props: P) => JSX.Element | null,
  propsAreEqual?: (prevProps: P, nextProps: P) => boolean,
) => (<I extends { value: string; disabled?: boolean }>(props: Props<I>) => JSX.Element | null) & {
  displayName?: string;
} = reactMemo;

export const Combobox = memo<Props<{ value: string; disabled?: boolean }>>(
  ({
    value,
    items,
    ListFooterComponent,
    onValueChange,
    onSelectItem,
    renderItem,
    size,
    icon,
    label,
    placeholder,
    loading = false,
    disabled = false,
    error,
    style,
  }) => {
    const isFirstRender = useRef(true);
    const ref = useRef<TextInput>(null);
    const mobileInputRef = useRef<TextInput>(null);
    const listRef = useRef<FlatList>(null);
    const [visible, { open, close }] = useDisclosure(false);
    const [focusedIndex, setFocusedIndex] = useState<number>();
    const { desktop } = useResponsive(VIEWPORT_WIDTH_THRESHOLD);

    const suggestionsId = useId();

    const handleFocus = useCallback(
      (event: NativeSyntheticEvent<React.FocusEvent>) => {
        if (!desktop) {
          event.preventDefault();
          open();
        } else {
          if (items.length > 0) {
            open();
          }
        }
      },
      [items, open, desktop],
    );

    const handleKeyPress = useCallback(
      (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        match(event.nativeEvent.key)
          .with("ArrowDown", () => {
            event.preventDefault();
            setFocusedIndex(prevIndex => {
              const nextIndex = isNotNullish(prevIndex) ? prevIndex + 1 : 0;
              const maxIndex = items.length - 1;
              return Math.min(nextIndex, maxIndex);
            });
          })
          .with("ArrowUp", () => {
            event.preventDefault();
            setFocusedIndex(prevIndex => {
              const maxIndex = items.length - 1;
              const previousIndex = isNotNullish(prevIndex) ? prevIndex - 1 : maxIndex;
              return Math.max(previousIndex, 0);
            });
          })
          .with("Escape", () => {
            event.preventDefault();
            close();
          })
          .with("Enter", () => {
            event.preventDefault();
            if (isNullish(focusedIndex)) {
              return;
            }
            const item = items[focusedIndex];
            if (item) {
              onSelectItem(item);
              close();
            }
          })
          .otherwise(() => {});
      },
      [items, focusedIndex, onSelectItem, close],
    );

    useEffect(() => {
      isFirstRender.current = false;
      return () => {
        isFirstRender.current = true;
      };
    }, []);

    // Auto open/close popover depending on value on items
    useEffect(() => {
      // avoid to open popover on first render
      if (isFirstRender.current) {
        return;
      }

      if (value.length > 0 && items.length > 0) {
        open();
      }
      // we want to run this effect only when items or value changed
    }, [items.length, value.length]); // eslint-disable-line react-hooks/exhaustive-deps

    // reset focused suggestion when the number of suggestions change
    useEffect(() => {
      setFocusedIndex(prevFocusedIndex => {
        const maxIndex = items.length - 1;

        if (isNotNullish(prevFocusedIndex) && prevFocusedIndex > maxIndex) {
          return maxIndex;
        }
        if (items.length === 0) {
          return undefined;
        }

        return prevFocusedIndex;
      });
    }, [items.length]);

    // scroll automatically in suggestion list if user use keyboard navigation
    useEffect(() => {
      if (isNotNullish(focusedIndex)) {
        const position = focusedIndex + 1 - NB_SUGGESTION_DISPLAYED;
        // avoid negative value for first indexes
        const index = Math.max(0, position);

        listRef.current?.scrollToIndex({
          animated: true,
          index,
        });
      }
    }, [focusedIndex]);

    useEffect(() => {
      if (visible) {
        mobileInputRef.current?.focus();
      }
    }, [visible]);

    return (
      <View style={style}>
        <Input
          ref={ref}
          accessibilityControls={visible ? suggestionsId : ""}
          accessibilityExpanded={visible}
          inputStyle={icon || loading ? styles.inputWithLeftIcon : undefined}
          returnKeyType="search"
          role="combobox"
          label={label}
          placeholder={placeholder}
          value={value}
          size={size}
          disabled={disabled}
          error={error}
          onValueChange={onValueChange}
          onFocus={handleFocus}
          onKeyPress={handleKeyPress}
        />

        {icon ? (
          <Icon
            name={icon}
            color={colors.gray[50]}
            size={20}
            style={[styles.icon, isNotNullish(label) && styles.iconWithLabel]}
          />
        ) : null}

        <Popover
          id={suggestionsId}
          role="listbox"
          matchReferenceWidth={true}
          onDismiss={close}
          referenceRef={ref}
          autoFocus={false}
          returnFocus={false}
          visible={visible && (!desktop || loading || items.length > 0)}
          underlay={false}
        >
          {!desktop && (
            <View style={styles.mobileInput}>
              <LakeTextInput
                ref={mobileInputRef}
                accessibilityControls={visible ? suggestionsId : ""}
                accessibilityExpanded={visible}
                returnKeyType="search"
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                error={error}
                onChangeText={onValueChange}
                onKeyPress={handleKeyPress}
              />
            </View>
          )}

          <View style={styles.list}>
            {loading ? (
              <View style={styles.loading}>
                <ActivityIndicator color={colors.gray[70]} size={20} />
              </View>
            ) : (
              <FlatList
                ref={listRef}
                keyExtractor={item => item.value}
                getItemLayout={getItemLayout}
                accessibilityRole="list"
                data={items}
                extraData={focusedIndex}
                renderItem={({ item, index }) => {
                  const rendered = renderItem(item);

                  return (
                    <Pressable
                      accessibilityRole="listitem"
                      disabled={item.disabled}
                      style={({ hovered, pressed, focused }) => [
                        styles.item,
                        (hovered || focused || index === focusedIndex) && styles.hoveredItem,
                        pressed && styles.pressedItem,
                      ]}
                      onPress={() => {
                        onSelectItem(item);
                        close();
                      }}
                    >
                      {isReactText(rendered) ? (
                        <Text numberOfLines={1} selectable={false} style={styles.itemText}>
                          {rendered}
                        </Text>
                      ) : (
                        rendered
                      )}
                    </Pressable>
                  );
                }}
              />
            )}

            {ListFooterComponent}
          </View>
        </Popover>
      </View>
    );
  },
  isEqual,
);
