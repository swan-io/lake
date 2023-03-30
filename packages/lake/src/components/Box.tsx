import { forwardRef, ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from "react-native";

/* eslint-disable react-native/no-unused-styles */
const directionStyles = StyleSheet.create({
  columnReverse: { flexDirection: "column-reverse" },
  row: { flexDirection: "row" },
  rowReverse: { flexDirection: "row-reverse" },
});

const alignItemsStyles = StyleSheet.create({
  baseline: { alignItems: "baseline" },
  center: { alignItems: "center" },
  end: { alignItems: "flex-end" },
  start: { alignItems: "flex-start" },
});

const justifyContentStyles = StyleSheet.create({
  center: { justifyContent: "center" },
  end: { justifyContent: "flex-end" },
  start: { justifyContent: "flex-start" },
  spaceBetween: { justifyContent: "space-between" },
  spaceAround: { justifyContent: "space-around" },
  spaceEvenly: { justifyContent: "space-evenly" },
});
/* eslint-enable react-native/no-unused-styles */

type BoxDirection = keyof typeof directionStyles | "column";
type BoxAlignItems = keyof typeof alignItemsStyles | "stretch";
type BoxJustifyContent = keyof typeof justifyContentStyles | "normal";

export type BoxProps = ViewProps & {
  alignItems?: BoxAlignItems;
  children?: ReactNode;
  direction?: BoxDirection;
  justifyContent?: BoxJustifyContent;
  style?: StyleProp<ViewStyle>;
};

export const Box = forwardRef<View, BoxProps>(
  (
    // Default <View /> styles https://github.com/necolas/react-native-web/blob/0.19.1/packages/react-native-web/src/exports/View/index.js#L146
    { alignItems = "stretch", direction = "column", justifyContent = "normal", style, ...props },
    forwardedRef,
  ) => (
    <View
      ref={forwardedRef}
      {...props}
      style={[
        alignItems !== "stretch" && alignItemsStyles[alignItems],
        direction !== "column" && directionStyles[direction],
        justifyContent !== "normal" && justifyContentStyles[justifyContent],
        style,
      ]}
    />
  ),
);
