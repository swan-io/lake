import { memo } from "react";
import { AccessibilityProps, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Path, Svg } from "./Svg";

import customIcons from "../icons/custom-icons.json";
import fluentIcons from "../icons/fluent-icons.json";

const paths = {
  ...fluentIcons,
  ...customIcons,
};

const styles = StyleSheet.create({
  inert: {
    pointerEvents: "none",
  },
});

export type IconName = keyof typeof paths;

type Props = AccessibilityProps & {
  color?: string;
  focusable?: boolean;
  name: IconName;
  size: number;
  style?: StyleProp<ViewStyle>;
};

export const Icon = memo<Props>(
  ({ name, color = "currentColor", focusable, size, style, ...props }) => (
    <Svg
      focusable={focusable}
      viewBox="0 0 24 24"
      style={[styles.inert, { height: size, width: size }, style]}
      {...props}
    >
      <Path d={paths[name]} fill={color} />
    </Svg>
  ),
);

Icon.displayName = "Icon";
