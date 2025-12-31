import { memo } from "react";
import { StyleProp, StyleSheet, ViewStyle, WebAccessibilityProps } from "react-native";
import { Path, Svg } from "./Svg";

import customIcons from "../icons/custom-icons.json";
import fluentIcons from "../icons/fluent-icons.json";
// This files contains fluent icons which aren't available in 24x24 size
import fluentResizedIcons from "../icons/fluent-resized-icons.json";

const paths = {
  ...fluentResizedIcons,
  ...fluentIcons,
  ...customIcons,
};

const styles = StyleSheet.create({
  inert: {
    pointerEvents: "none",
  },
});

export type IconName = keyof typeof paths;

type Props = WebAccessibilityProps & {
  color?: string;
  name: IconName;
  size: number;
  style?: StyleProp<ViewStyle>;
};

export const Icon = memo<Props>(({ name, color = "currentColor", size, style, ...props }) => (
  <Svg viewBox="0 0 24 24" style={[styles.inert, { height: size, width: size }, style]} {...props}>
    <Path d={paths[name]} fill={color} />
  </Svg>
));

Icon.displayName = "Icon";
