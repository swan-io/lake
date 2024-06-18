import { AsyncData, Result } from "@swan-io/boxed";
import {
  ForwardedRef,
  ReactNode,
  Ref,
  RefObject,
  forwardRef,
  useCallback,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from "react-native";
import { backgroundColor, colors, spacings } from "../constants/design";
import { useMergeRefs } from "../hooks/useMergeRefs";
import { getFocusableElements } from "../utils/a11y";
import { isNotEmpty } from "../utils/nullish";
import { Box } from "./Box";
import { FlatList } from "./FlatList";
import { Icon, IconName } from "./Icon";
import { LakeText } from "./LakeText";
import { LakeTextInput, LakeTextInputProps } from "./LakeTextInput";
import { LoadingView } from "./LoadingView";
import { Popover } from "./Popover";
import { Separator } from "./Separator";
import { Space } from "./Space";

const DEFAULT_ELEMENT_HEIGHT = 64;
const DEFAULT_NB_SUGGESTION_DISPLAYED = 3.5;

const styles = StyleSheet.create({
  list: {
    marginVertical: spacings[8],
  },
  flatList: {
    scrollBehavior: "smooth",
  },
  item: {
    flexShrink: 1,
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: spacings[24],
    paddingVertical: 0,
    transitionProperty: "background-color",
    transitionDuration: "200ms",
    outlineStyle: "none",
    justifyContents: "center",
  },
  hoveredItem: {
    backgroundColor: colors.gray[0],
  },
  focusedItem: {
    backgroundColor: colors.gray[0],
  },
  pressedItem: {
    backgroundColor: colors.gray[100],
  },
  itemText: {
    userSelect: "none",
  },
  loader: {
    padding: spacings[24],
  },
  listContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  loaderAdditional: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  loaderAdditionalUnderlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: backgroundColor.accented,
    opacity: 0.8,
  },
  emptyList: {
    height: 136,
  },
  emptyListText: {
    color: colors.gray.primary,
  },
  input: {
    width: 1,
    flexGrow: 1,
  },
});

export type LakeComboboxProps<I> = {
  inputRef?: RefObject<unknown>;
  value: string;
  items: AsyncData<Result<I[], unknown>>;
  itemHeight?: number;
  nbItemsDisplayed?: number;
  ListFooterComponent?: ReactNode;
  onChange?: LakeTextInputProps["onChange"];
  onValueChange: (value: string) => void;
  onSelectItem: (value: I) => void | Promise<unknown>;
  renderItem: (item: I) => ReactNode | null;
  keyExtractor: (item: I) => string;
  icon?: IconName;
  placeholder?: string;
  disabled?: boolean;
  emptyResultText: string;
  error?: string;
  hideErrors?: boolean;
  id?: string;
  readOnly?: boolean;
};

export type LakeComboboxRef = { close: () => void; open: () => void };

const LakeComboboxWithRef = <I,>(
  {
    inputRef,
    value,
    items,
    itemHeight = DEFAULT_ELEMENT_HEIGHT,
    nbItemsDisplayed = DEFAULT_NB_SUGGESTION_DISPLAYED,
    ListFooterComponent,
    onChange,
    onValueChange,
    onSelectItem,
    renderItem,
    keyExtractor,
    icon,
    placeholder,
    disabled = false,
    emptyResultText,
    readOnly,
    id,
    error,
    hideErrors,
  }: LakeComboboxProps<I>,
  forwardedRef: ForwardedRef<LakeComboboxRef>,
) => {
  const ref = useRef<TextInput>(null);

  const inputTextRef = useMergeRefs(ref, inputRef as RefObject<unknown>);

  const listContainerRef = useRef<View>(null);
  const blurTimeoutId = useRef<number | undefined>(undefined);
  const [isFetchingAdditionalInfo, setIsFetchingAdditionalInfo] = useState(false);

  // The Combobox has two distinct closed states: "closed" and "dismissed"
  // When it's "closed", it will open on input focus or text change
  // When it's "dismissed", it will NOT open on input focus, but will on text change
  const [state, setState] = useState<"opened" | "closed" | "dismissed">("closed");
  const open = useCallback(() => setState("opened"), []);
  const close = useCallback(() => setState("closed"), []);
  const dismiss = useCallback(() => setState("dismissed"), []);

  useImperativeHandle(forwardedRef, () => {
    return {
      open,
      close,
    };
  });

  const suggestionsId = useId();

  const handleKeyPress = useCallback((event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (event.nativeEvent.key === "ArrowDown") {
      const listElement = listContainerRef.current;

      if (listElement != null) {
        const element = listElement as unknown as Element;
        const focusableElements = getFocusableElements(element, false);
        focusableElements[0]?.focus();
        event.preventDefault();
      }
    }
  }, []);

  const handleListItemKeyPress = useCallback(
    (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
      if (event.nativeEvent.key === "ArrowDown" || event.nativeEvent.key === "ArrowUp") {
        const listElement = listContainerRef.current;

        if (listElement != null) {
          const element = listElement as unknown as Element;
          const target = event.currentTarget as unknown as HTMLElement;
          const focusableElements = getFocusableElements(element, false);
          const index = focusableElements.indexOf(target);
          const direction = event.nativeEvent.key === "ArrowDown" ? 1 : -1;

          if (index === -1) {
            return;
          }

          const nextIndex = index + direction;
          event.preventDefault();

          if (nextIndex === -1) {
            ref.current?.focus();
          } else {
            focusableElements[nextIndex === focusableElements.length ? 0 : nextIndex]?.focus();
          }
        }
      }
    },
    [],
  );

  const handleChangeText = useCallback(
    (value: string) => {
      onValueChange(value);
      setState(isNotEmpty(value) ? "opened" : "closed");
    },
    [onValueChange],
  );

  const handleFocus = useCallback(() => {
    if (isNotEmpty(value)) {
      window.clearTimeout(blurTimeoutId.current);

      blurTimeoutId.current = window.setTimeout(() => {
        setState(prevState => (prevState === "closed" ? "opened" : prevState));
      }, 100);
    }
  }, [value]);

  const handleBlur = useCallback(() => {
    window.clearTimeout(blurTimeoutId.current);

    blurTimeoutId.current = window.setTimeout(() => {
      setState("dismissed");
    }, 100);
  }, []);

  return (
    <View>
      <LakeTextInput
        containerRef={inputTextRef as Ref<View>}
        style={styles.input}
        ariaExpanded={state === "opened"}
        ariaControls={state === "opened" ? suggestionsId : ""}
        enterKeyHint="search"
        icon={icon}
        role="combobox"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        error={error}
        hideErrors={hideErrors}
        onChangeText={handleChangeText}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
        id={id}
        readOnly={readOnly}
      />

      <Popover
        id={suggestionsId}
        role="listbox"
        matchReferenceWidth={true}
        onEscapeKey={dismiss}
        referenceRef={ref}
        autoFocus={false}
        returnFocus={true}
        visible={state === "opened" && !items.isNotAsked()}
        underlay={false}
        forcedMode="Dropdown"
      >
        <View style={[styles.list, { maxHeight: itemHeight * nbItemsDisplayed }]}>
          {items.match({
            NotAsked: () => null,
            Loading: () => <LoadingView style={styles.loader} />,
            Done: items =>
              items.match({
                Error: _ => (
                  <Icon name="error-circle-regular" size={22} color={colors.negative[500]} />
                ),
                Ok: items => (
                  <View ref={listContainerRef} style={styles.listContainer}>
                    {items.length === 0 ? (
                      <Box justifyContent="center" alignItems="center" style={styles.emptyList}>
                        <Icon
                          name="clipboard-search-regular"
                          size={24}
                          color={colors.gray.primary}
                        />

                        <Space height={8} />
                        <Text style={styles.emptyListText}>{emptyResultText}</Text>
                      </Box>
                    ) : (
                      <FlatList
                        keyExtractor={keyExtractor}
                        itemHeight={DEFAULT_ELEMENT_HEIGHT}
                        role="list"
                        data={items}
                        style={styles.flatList}
                        ItemSeparatorComponent={Separator}
                        renderItem={({ item }) => {
                          const rendered = renderItem(item);

                          return (
                            <Pressable
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              role="listitem"
                              onKeyDown={handleListItemKeyPress}
                              style={({ hovered, pressed, focused }) => [
                                styles.item,
                                hovered && styles.hoveredItem,
                                focused && styles.focusedItem,
                                pressed && styles.pressedItem,
                                { height: itemHeight },
                              ]}
                              onPress={() => {
                                window.clearTimeout(blurTimeoutId.current);
                                setIsFetchingAdditionalInfo(true);

                                void Promise.resolve(onSelectItem(item)).finally(() => {
                                  setIsFetchingAdditionalInfo(false);
                                  dismiss();
                                });
                              }}
                            >
                              {typeof rendered === "string" || typeof rendered === "number" ? (
                                <LakeText numberOfLines={1} style={styles.itemText}>
                                  {rendered}
                                </LakeText>
                              ) : (
                                rendered
                              )}
                            </Pressable>
                          );
                        }}
                      />
                    )}

                    {ListFooterComponent}

                    {isFetchingAdditionalInfo ? (
                      <View style={styles.loaderAdditional}>
                        <View style={styles.loaderAdditionalUnderlay} />
                        <LoadingView />
                      </View>
                    ) : null}
                  </View>
                ),
              }),
          })}
        </View>
      </Popover>
    </View>
  );
};

export const LakeCombobox = forwardRef(LakeComboboxWithRef) as <I>(
  props: LakeComboboxProps<I> & { ref?: RefObject<LakeComboboxRef> },
) => ReturnType<typeof LakeComboboxWithRef>;
