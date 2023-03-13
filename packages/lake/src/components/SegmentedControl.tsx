import { memo as reactMemo, ReactNode, ReactText } from "react";
import isEqual from "react-fast-compare";
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors } from "../constants/colors";
import { typography } from "../constants/typography";
import { Fill } from "./Fill";
import { Icon } from "./Icon";
import { Label } from "./Label";
import { Space } from "./Space";

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray[10],
    borderRadius: 4,
    overflow: "hidden",
  },
  horizontalBase: {
    flexDirection: "row",
  },
  item: {
    alignItems: "center",
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 1,
    minHeight: 48,
    overflow: "hidden",
    paddingHorizontal: 16,
    transitionProperty: "background-color",
    transitionDuration: "200ms",
  },
  horizontalItem: {
    flexBasis: "0%",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: "center",
  },
  hoveredItem: {
    backgroundColor: colors.gray[3],
  },
  pressedItem: {
    backgroundColor: colors.gray[10],
  },
  rightBorder: {
    borderRightColor: colors.gray[10],
    borderRightWidth: 1,
  },
  bottomBorder: {
    borderBottomColor: colors.gray[10],
    borderBottomWidth: 1,
  },
  itemText: {
    ...typography.bodyLarge,
  },
});

type Props<V, I extends { value: V }> = {
  value: V;
  items: I[];
  onValueChange: (value: V) => void;
  renderItem: (item: I) => ReactNode | null;
  horizontal?: boolean;
  label: string;
  style?: StyleProp<ViewStyle>;
};

const isReactText = (node: ReactNode): node is ReactText =>
  ["string", "number"].includes(typeof node);

const memo: <P extends Record<string, unknown>>(
  Component: (props: P) => JSX.Element | null,
  propsAreEqual?: (prevProps: P, nextProps: P) => boolean,
) => (<V, I extends { value: V }>(props: Props<V, I>) => JSX.Element | null) & {
  displayName?: string;
} = reactMemo;

export const SegmentedControl = memo<Props<string, { value: string }>>(
  ({ items, horizontal = false, label, onValueChange, renderItem, style, value }) => {
    const lastIndex = items.length - 1;

    return (
      <View>
        <Label>{label}</Label>
        <Space height={8} />

        <View
          accessibilityRole="radiogroup"
          style={[styles.base, horizontal && styles.horizontalBase, style]}
        >
          {items.map((item, index) => {
            const selected = item.value === value;
            const rendered = renderItem(item);

            return (
              <Pressable
                key={`option-${item.value}`}
                accessibilitySelected={selected}
                accessibilityRole="radio"
                onPress={() => onValueChange(item.value)}
                style={({ hovered, pressed }) => [
                  styles.item,
                  horizontal && styles.horizontalItem,
                  (hovered || selected) && styles.hoveredItem,
                  pressed && styles.pressedItem,
                  index !== lastIndex && (horizontal ? styles.rightBorder : styles.bottomBorder),
                ]}
              >
                <>
                  {isReactText(rendered) ? (
                    <Text style={styles.itemText}>{rendered}</Text>
                  ) : (
                    rendered
                  )}

                  {!horizontal && selected ? (
                    <>
                      <Fill minWidth={16} />
                      <Icon name="checkmark-filled" color={colors.green[100]} size={20} />
                    </>
                  ) : null}
                </>
              </Pressable>
            );
          })}
        </View>
      </View>
    );
  },
  isEqual,
);

SegmentedControl.displayName = "SegmentedControl";
