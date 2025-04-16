import { ReactNode, Ref } from "react";
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from "react-native";

const alignItemsStyles = StyleSheet.create({
  baseline: { alignItems: "baseline" },
  center: { alignItems: "center" },
  end: { alignItems: "flex-end" },
  start: { alignItems: "flex-start" },
});

const directionStyles = StyleSheet.create({
  columnReverse: { flexDirection: "column-reverse" },
  row: { flexDirection: "row" },
  rowReverse: { flexDirection: "row-reverse" },
});

const justifyContentStyles = StyleSheet.create({
  center: { justifyContent: "center" },
  end: { justifyContent: "flex-end" },
  start: { justifyContent: "flex-start" },
  spaceBetween: { justifyContent: "space-between" },
  spaceAround: { justifyContent: "space-around" },
  spaceEvenly: { justifyContent: "space-evenly" },
});

const wrapStyles = StyleSheet.create({
  wrap: { flexWrap: "wrap" },
  wrapReverse: { flexWrap: "wrap-reverse" },
});

const otherStyles = StyleSheet.create({
  grow1: { flexGrow: 1 },
  shrink1: { flexShrink: 1 },
});

type BoxAlignItems = keyof typeof alignItemsStyles | "stretch";
type BoxDirection = keyof typeof directionStyles | "column";
type BoxJustifyContent = keyof typeof justifyContentStyles | "normal";
type BoxWrap = keyof typeof wrapStyles | "nowrap";

export type BoxProps = ViewProps & {
  ref?: Ref<View>;
  alignItems?: BoxAlignItems;
  children?: ReactNode;
  direction?: BoxDirection;
  justifyContent?: BoxJustifyContent;
  wrap?: BoxWrap;
  grow?: number;
  shrink?: number;
  style?: StyleProp<ViewStyle>;
};

// Default <View /> styles https://github.com/necolas/react-native-web/blob/0.20.0/packages/react-native-web/src/exports/View/index.js#L149
export const Box = ({
  ref,
  alignItems = "stretch",
  direction = "column",
  justifyContent = "normal",
  wrap = "nowrap",
  grow = 0,
  shrink = 0,
  style,
  ...props
}: BoxProps) => (
  <View
    ref={ref}
    {...props}
    style={[
      alignItems !== "stretch" && alignItemsStyles[alignItems],
      direction !== "column" && directionStyles[direction],
      justifyContent !== "normal" && justifyContentStyles[justifyContent],
      wrap !== "nowrap" && wrapStyles[wrap],
      grow !== 0 && (grow === 1 ? otherStyles.grow1 : { flexGrow: grow }),
      shrink !== 0 && (shrink === 1 ? otherStyles.shrink1 : { flexShrink: shrink }),
      style,
    ]}
  />
);
