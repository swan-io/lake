import { memo as reactMemo, ReactNode, ReactText, useMemo, useRef } from "react";
import isEqual from "react-fast-compare";
import { FlatList, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors } from "../constants/colors";
import { commonStyles } from "../constants/commonStyles";
import { typography } from "../constants/typography";
import { useBoolean } from "../hooks/useBoolean";
import { Fill } from "./Fill";
import { Icon } from "./Icon";
import { InputError } from "./InputError";
import { Label } from "./Label";
import { Popover } from "./Popover";
import { Space } from "./Space";

const ELEMENT_HEIGHT = 48;

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderColor: colors.gray[10],
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 1,
    height: 48,
    outlineStyle: "none",
    paddingHorizontal: 16,
    transitionDuration: "150ms",
    transitionProperty: ["border-color", "box-shadow"],
  },
  small: {
    height: 40,
  },
  focused: {
    borderColor: colors.gray[20],
    shadowColor: colors.gray[100],
    shadowOpacity: 0.12,
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 2,
  },
  hovered: {
    shadowColor: colors.gray[100],
    shadowOpacity: 0.06,
    shadowOffset: { height: 4, width: 0 },
    shadowRadius: 8,
  },
  disabled: {
    backgroundColor: colors.gray[3],
    borderColor: colors.gray[3],
    cursor: "not-allowed",
  },
  list: {
    maxHeight: ELEMENT_HEIGHT * 4.5,
    backgroundColor: colors.white,
    borderRadius: 4,

    shadowColor: colors.gray[100],
    shadowOpacity: 0.12,
    shadowOffset: { height: 6, width: 0 },
    shadowRadius: 24,
  },
  item: {
    alignItems: "center",
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 1,
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
});

type Props<V, I extends { value: V }> = {
  value: V;
  items: I[];
  onValueChange: (item: V) => void;
  renderItem: (item: I) => ReactNode | null;
  renderValue?: (item: I) => ReactNode | null;
  itemHeight?: number;
  describedBy?: string;
  size?: "large" | "small";
  label?: string | (() => ReactNode);
  info?: ReactNode;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  pickerStyle?: StyleProp<ViewStyle>;
  hideErrorMessage?: boolean;
};

const isReactText = (node: ReactNode): node is ReactText =>
  ["string", "number"].includes(typeof node);

const memo: <P extends Record<string, unknown>>(
  Component: (props: P) => JSX.Element | null,
  propsAreEqual?: (prevProps: P, nextProps: P) => boolean,
) => (<V, I extends { value: V }>(props: Props<V, I>) => JSX.Element | null) & {
  displayName?: string;
} = reactMemo;

export const Picker = memo<Props<string, { value: string }>>(
  ({
    value,
    items,
    onValueChange,
    renderItem,
    renderValue = renderItem,
    itemHeight = ELEMENT_HEIGHT,
    describedBy,
    size = "large",
    label = "",
    info = "",
    disabled = false,
    style,
    pickerStyle,
    hideErrorMessage = false,
  }) => {
    const buttonRef = useRef<View>(null);
    const [visible, setVisible] = useBoolean(false);
    const selectedItem = items.find(item => item.value === value);
    const selectedRendered = selectedItem ? renderValue(selectedItem) : undefined;

    const getItemLayout = useMemo(
      () => (data: { value: string }[] | null | undefined, index: number) => ({
        length: itemHeight,
        offset: itemHeight * index,
        index,
      }),
      [itemHeight],
    );

    return (
      <View style={style}>
        {typeof label === "function"
          ? label()
          : label !== "" && (
              <>
                <Label>{label}</Label>
                <Space height={8} />
              </>
            )}

        <Pressable
          ref={buttonRef}
          accessibilityRole="button"
          disabled={disabled}
          onPress={setVisible.toggle}
          style={({ hovered, focused }) => [
            styles.base,
            size === "small" && styles.small,
            pickerStyle,
            focused || visible ? styles.focused : hovered && styles.hovered,
            disabled && styles.disabled,
          ]}
        >
          {selectedItem ? (
            <View style={commonStyles.fill}>
              {isReactText(selectedRendered) ? (
                <Text numberOfLines={1} style={styles.itemText}>
                  {selectedRendered}
                </Text>
              ) : (
                selectedRendered
              )}
            </View>
          ) : (
            <Fill />
          )}

          {!disabled && (
            <>
              <Space height={8} />

              <Icon
                name={visible ? "chevron-up-filled" : "chevron-down-filled"}
                color={colors.gray[30]}
                size={18}
              />
            </>
          )}
        </Pressable>

        {info !== "" && (
          <>
            <Space height={8} />
            <View>{info}</View>
          </>
        )}

        {/* Used only to have layout consistency with `Input` component */}
        {!hideErrorMessage && <InputError />}

        <Popover
          referenceRef={buttonRef}
          matchReferenceWidth={true}
          describedBy={describedBy}
          visible={visible}
          onDismiss={setVisible.toggle}
        >
          <FlatList
            getItemLayout={getItemLayout}
            accessibilityRole="list"
            data={items}
            style={styles.list}
            keyExtractor={item => `option-${item.value}`}
            renderItem={({ item }) => {
              const selected = item.value === value;
              const rendered = renderItem(item);

              return (
                <Pressable
                  accessibilityRole="listitem"
                  accessibilitySelected={selected}
                  style={({ hovered, pressed }) => [
                    styles.item,
                    (hovered || selected) && styles.hoveredItem,
                    pressed && styles.pressedItem,
                    { height: itemHeight },
                  ]}
                  onPress={() => {
                    onValueChange(item.value);
                    setVisible.toggle();
                  }}
                >
                  {isReactText(rendered) ? (
                    <Text numberOfLines={1} style={styles.itemText}>
                      {rendered}
                    </Text>
                  ) : (
                    rendered
                  )}

                  {selected && (
                    <>
                      <Fill minWidth={16} />
                      <Icon name="checkmark-filled" color={colors.green[100]} size={20} />
                    </>
                  )}
                </Pressable>
              );
            }}
          />
        </Popover>
      </View>
    );
  },
  isEqual,
);

Picker.displayName = "Picker";
