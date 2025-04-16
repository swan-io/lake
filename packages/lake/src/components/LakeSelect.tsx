import { KeyboardEvent, ReactElement, ReactNode, Ref, useCallback, useRef } from "react";
import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { commonStyles } from "../constants/commonStyles";
import {
  ColorVariants,
  colors,
  invariantColors,
  radii,
  shadows,
  spacings,
  texts,
} from "../constants/design";
import { useDisclosure } from "../hooks/useDisclosure";
import { useMergeRefs } from "../hooks/useMergeRefs";
import { getFocusableElements } from "../utils/a11y";
import { isNotNullish, isNullishOrEmpty } from "../utils/nullish";
import { Box } from "./Box";
import { Fill } from "./Fill";
import { FlatList, FlatListRef } from "./FlatList";
import { Icon, IconName } from "./Icon";
import { LakeText } from "./LakeText";
import { LakeTooltip } from "./LakeTooltip";
import { Popover } from "./Popover";
import { Pressable } from "./Pressable";
import { Separator } from "./Separator";
import { Space } from "./Space";

const styles = StyleSheet.create({
  normal: {
    backgroundColor: colors.gray.contrast,
    borderColor: colors.gray[100],
    borderRadius: radii[6],
    borderWidth: 1,
    justifyContent: "center",
    minWidth: 100,
    paddingHorizontal: spacings[16],
    height: 40,
  },
  borderless: {
    justifyContent: "center",
    height: 40,
    paddingHorizontal: spacings[16],
    borderRadius: radii[6],
    transitionProperty: "background-color",
    transitionDuration: "150ms",
  },
  small: {
    paddingVertical: 5,
  },
  shadowed: {
    position: "absolute",
    opacity: 0,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    borderRadius: radii[6],
    boxShadow: shadows.tile,
    transitionDuration: "150ms",
    transitionProperty: "opacity",
  },
  hovered: {
    opacity: 1,
  },
  selectPlaceholder: texts.placeholder,
  selectSmallPlaceholder: texts.smallPlaceholder,
  selected: {
    color: colors.gray[800],
  },
  inputDisabled: {
    backgroundColor: colors.gray[50],
    borderColor: colors.gray[50],
    cursor: "not-allowed",
  },
  listContent: {
    paddingVertical: 12,
  },
  item: {
    display: "flex",
    paddingHorizontal: spacings[24],
    paddingVertical: spacings[8],
    flexDirection: "row",
    alignItems: "center",
  },
  itemHighlighted: {
    backgroundColor: colors.gray[50],
  },
  itemFocused: {
    boxShadow: `inset 0 0 0 1px ${colors.gray[500]}`,
    borderRadius: radii[4],
    outlineStyle: "none",
  },
  itemDisabled: {
    opacity: 0.5,
  },
  selectListTitle: {
    paddingHorizontal: spacings[24],
    paddingVertical: spacings[12],
  },
  inputBorderlessDisabled: {
    backgroundColor: invariantColors.transparent,
  },
  itemText: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  errorText: {
    paddingTop: spacings[4],
  },
  focusedInput: {
    borderColor: colors.gray[500],
    boxShadow: shadows.tile,
    outlineStyle: "none",
  },
  focusedWithoutShadow: {
    boxShadow: "none",
  },
  errorContainer: {
    borderColor: colors.negative[500],
  },
});

export type Item<V> = {
  name: string;
  value: V;
  icon?: ReactNode;
};

export type SelectProps<V> = {
  ref?: Ref<View>;
  placeholder?: string;
  items: Item<V>[];
  matchReferenceWidth?: boolean;
  mode?: "normal" | "borderless";
  title?: string;
  valueStyle?: StyleProp<TextStyle>;
  PopoverFooter?: ReactElement;
  size?: "small" | "large";
  icon?: IconName;
  color?: ColorVariants;
  disabled?: boolean;
  value?: V;
  onValueChange: (value: V) => void;
  disabledItems?: { value: V; message?: string }[];
  hideErrors?: boolean;
  id?: string;
  error?: string;
  readOnly?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const LakeSelect = <V,>({
  ref,
  title,
  items,
  valueStyle,
  size,
  color = "current",
  disabled = false,
  mode = "normal",
  placeholder,
  readOnly = false,
  id,
  matchReferenceWidth = true,
  value,
  error,
  hideErrors = false,
  icon,
  onValueChange,
  disabledItems = [],
  PopoverFooter,
  style,
}: SelectProps<V>) => {
  const inputRef = useRef<View>(null);
  const listRef = useRef<FlatListRef>(null);
  const typingTimeoutRef = useRef<number>(undefined);
  const currentlyTypedRef = useRef<string>(undefined);
  const listItemRefs = useRef<HTMLElement[]>(Array(items.length) as HTMLElement[]);

  const mergedRef = useMergeRefs(inputRef, ref);

  const [visible, { close, open }] = useDisclosure(false);

  const hasValue = isNotNullish(value);
  const isSmall = size === "small";
  const itemValue = items.find(i => i.value === value);

  const onKeyDown = useCallback(
    (event: NativeSyntheticEvent<React.KeyboardEvent>) => {
      // this made a search not visible for user as the native select component
      if (event.nativeEvent.key.length === 1) {
        event.nativeEvent.stopPropagation();

        const currentlyTyped = `${
          currentlyTypedRef.current ?? ""
        }${event.nativeEvent.key.toLowerCase()}`;

        currentlyTypedRef.current = currentlyTyped;

        const selectedIndex = items.findIndex(item =>
          item.name.toLowerCase().startsWith(currentlyTyped),
        );

        const selected = items[selectedIndex];

        if (selected != null) {
          if (visible) {
            if (listRef.current?.element != null) {
              listItemRefs.current[selectedIndex]?.focus();
            }
          } else {
            onValueChange(selected.value);
          }
        }
      }

      if (typingTimeoutRef.current != null) {
        window.clearTimeout(typingTimeoutRef.current);
      }

      typingTimeoutRef.current = window.setTimeout(() => {
        currentlyTypedRef.current = undefined;
      }, 300);
    },
    [items, onValueChange, visible],
  );

  const name = itemValue?.name ?? (value as unknown as string);

  return (
    <View style={commonStyles.fill}>
      <Pressable
        id={id}
        ref={mergedRef}
        aria-haspopup="listbox"
        role="button"
        aria-expanded={visible}
        disabled={readOnly || disabled}
        style={({ focused, hovered, pressed }) => [
          mode === "normal" ? styles.normal : styles.borderless,
          size === "small" && styles.small,
          (disabled || readOnly) && styles.inputDisabled,
          (visible || focused) && styles.focusedInput,
          mode === "borderless" && [
            {
              backgroundColor: pressed
                ? colors.gray[200]
                : hovered
                  ? colors.gray[100]
                  : invariantColors.transparent,
            },
            styles.focusedWithoutShadow,
          ],
          mode !== "borderless" && error != null && styles.errorContainer,
          (disabled || readOnly) && mode === "borderless" && styles.inputBorderlessDisabled,
          style,
        ]}
        onPress={open}
        onKeyDown={onKeyDown}
        aria-errormessage={error}
      >
        {({ hovered }) => (
          <>
            {mode === "normal" && <View style={[styles.shadowed, hovered && styles.hovered]} />}

            <Box direction="row" justifyContent="spaceBetween" alignItems="center">
              <Box direction="row" alignItems="center" style={commonStyles.fill}>
                {icon && (
                  <>
                    <Icon color={colors[color].primary} name={icon} size={isSmall ? 16 : 18} />
                    <Space width={8} />
                  </>
                )}

                {hasValue ? (
                  <Box direction="row" alignItems="center" style={commonStyles.fill}>
                    {isNotNullish(itemValue?.icon) && (
                      <>
                        {itemValue?.icon}

                        <Space width={12} />
                      </>
                    )}

                    <LakeText
                      color={colors.gray[900]}
                      variant={isSmall ? "smallRegular" : "regular"}
                      style={[styles.itemText, valueStyle]}
                    >
                      {name}
                    </LakeText>
                  </Box>
                ) : (
                  <LakeText
                    style={[
                      styles.itemText,
                      styles.selectPlaceholder,
                      isSmall && styles.selectSmallPlaceholder,
                    ]}
                  >
                    {placeholder ?? " "}
                  </LakeText>
                )}
              </Box>

              <Fill minWidth={8} />

              {!disabled && (
                <Icon
                  color={colors.gray[900]}
                  name={visible ? "chevron-up-filled" : "chevron-down-filled"}
                  size={16}
                />
              )}
            </Box>
          </>
        )}
      </Pressable>

      {!hideErrors && (
        <LakeText variant="smallRegular" color={colors.negative[500]} style={styles.errorText}>
          {error ?? " "}
        </LakeText>
      )}

      <Popover
        role="listbox"
        matchReferenceMinWidth={matchReferenceWidth}
        onDismiss={close}
        referenceRef={inputRef}
        returnFocus={true}
        visible={visible}
      >
        {isNotNullish(title) && (
          <>
            <LakeText variant="semibold" color={colors.gray[900]} style={styles.selectListTitle}>
              {title}
            </LakeText>

            <Separator />
          </>
        )}

        <FlatList
          role="list"
          data={items}
          ref={listRef}
          contentContainerStyle={styles.listContent}
          onKeyDown={(event: NativeSyntheticEvent<KeyboardEvent<HTMLDivElement>>) => {
            const { key } = event.nativeEvent;

            if (key === "ArrowDown" || key === "ArrowUp") {
              event.preventDefault();

              if (isNotNullish(event.currentTarget)) {
                const focusableElements = getFocusableElements(
                  event.currentTarget as unknown as HTMLDivElement,
                );

                const current = focusableElements.indexOf(event.target as unknown as HTMLElement);
                const nextIndex = key === "ArrowDown" ? current + 1 : current - 1;

                focusableElements[nextIndex]?.focus();
              }
            }
          }}
          keyExtractor={(_, index) => `select-item-${index}`}
          renderItem={({ item, index }) => {
            const isSelected = value === item.value;
            const disablement = disabledItems.find(({ value }) => value === item.value);

            return (
              <LakeTooltip
                placement="right"
                content={disablement?.message}
                disabled={isNullishOrEmpty(disablement?.message)}
              >
                <Pressable
                  ref={element => {
                    listItemRefs.current[index] = element as unknown as HTMLElement;
                  }}
                  onKeyDown={onKeyDown}
                  disabled={isNotNullish(disablement)}
                  style={({ hovered, focused }) => [
                    styles.item,
                    (hovered || isSelected) && styles.itemHighlighted,
                    focused && styles.itemFocused,
                    isNotNullish(disablement) && styles.itemDisabled,
                  ]}
                  role="option"
                  aria-selected={true}
                  onPress={() => {
                    onValueChange(item.value);
                    close();
                  }}
                >
                  {isNotNullish(item.icon) && (
                    <>
                      {item.icon}

                      <Space width={12} />
                    </>
                  )}

                  <LakeText
                    color={colors.gray[900]}
                    numberOfLines={1}
                    style={[styles.itemText, isSelected && styles.selected]}
                  >
                    {item.name}
                  </LakeText>

                  <Fill minWidth={12} />

                  {isSelected && (
                    <Icon color={colors.positive[500]} name="checkmark-filled" size={14} />
                  )}
                </Pressable>
              </LakeTooltip>
            );
          }}
        />

        {PopoverFooter}
      </Popover>
    </View>
  );
};
