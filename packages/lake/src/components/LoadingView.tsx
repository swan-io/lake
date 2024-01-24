import { forwardRef } from "react";
import { ActivityIndicator, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { colors } from "../constants/design";

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: "center",
  },
  indicator: {
    opacity: 0,

    animationKeyframes: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },

    animationDuration: "250ms",
    animationFillMode: "forwards",
    animationTimingFunction: "ease",
  },
});

type Props = {
  color?: string;
  delay?: number;
  style?: StyleProp<ViewStyle>;
};

const isDev = process.env.NODE_ENV === "development";

export const LoadingView = forwardRef<View, Props>(
  ({ color = colors.gray[400], delay = isDev ? 0 : 1000, style }, forwardedRef) => (
    <View ref={forwardedRef} style={[styles.base, style]}>
      <ActivityIndicator
        size="small"
        color={color}
        style={[styles.indicator, delay > 0 && { animationDelay: delay.toString() + "ms" }]}
      />
    </View>
  ),
);
