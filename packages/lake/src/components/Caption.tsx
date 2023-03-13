import { forwardRef, ReactText } from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { typography } from "../constants/typography";

/* eslint-disable react-native/no-unused-styles */
const styles = StyleSheet.create({
  center: { ...typography.caption, textAlign: "center" },
  left: { ...typography.caption, textAlign: "left" },
  right: { ...typography.caption, textAlign: "right" },
});
/* eslint-enable react-native/no-unused-styles */

type CaptionAlign = keyof typeof styles;

type Props = TextProps & {
  align?: CaptionAlign;
  children: ReactText;
};

export const Caption = forwardRef<Text, Props>(
  ({ children, align = "left", style, ...props }, forwardedRef) => (
    <Text ref={forwardedRef} style={[styles[align], style]} {...props}>
      {children}
    </Text>
  ),
);
