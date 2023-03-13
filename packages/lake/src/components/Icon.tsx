import { memo } from "react";
import { AccessibilityProps, StyleProp, ViewProps, ViewStyle } from "react-native";
import { Path, Svg } from "./Svg";

import customIcons from "../icons/custom-icons.json";
import fluentIcons from "../icons/fluent-icons.json";

const paths = {
  ...fluentIcons,
  ...customIcons,
};

export type IconName = keyof typeof paths;

type Props = AccessibilityProps & {
  color?: string;
  focusable?: boolean;
  name: IconName;
  pointerEvents?: ViewProps["pointerEvents"];
  size: number;
  style?: StyleProp<ViewStyle>;
};

export const Icon = memo<Props>(
  ({ name, color = "currentColor", focusable, size, pointerEvents = "none", style, ...props }) => (
    <Svg
      focusable={focusable}
      pointerEvents={pointerEvents}
      viewBox="0 0 24 24"
      style={[{ height: size, width: size }, style]}
      {...props}
    >
      <Path d={paths[name]} fill={color} />
    </Svg>
  ),
);

Icon.displayName = "Icon";
