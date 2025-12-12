import { memo } from "react";
import { StyleProp, StyleSheet, ViewStyle, WebAccessibilityProps } from "react-native";
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

type PropsWithName = WebAccessibilityProps & {
  color?: string;
  name: IconName;
  svgPath?: never;
  size: number;
  style?: StyleProp<ViewStyle>;
};

type PropsWithPath = WebAccessibilityProps & {
  color?: string;
  name?: never;
  svgPath: string;
  size: number;
  style?: StyleProp<ViewStyle>;
};

type Props = PropsWithName | PropsWithPath;

export const Icon = memo<Props>(
  ({ name, svgPath, color = "currentColor", size, style, ...props }) => {
    const path = svgPath ?? (name ? paths[name] : undefined);

    if (!path) {
      throw new Error("Icon component requires either 'name' or 'svgPath' prop");
    }

    return (
      <Svg
        viewBox="0 0 24 24"
        style={[styles.inert, { height: size, width: size }, style]}
        {...props}
      >
        <Path d={path} fill={color} />
      </Svg>
    );
  },
);

Icon.displayName = "Icon";
