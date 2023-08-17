import { forwardRef, ReactNode } from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { Except } from "type-fest";
import { colors } from "../constants/colors";
import { typography } from "../constants/typography";

const baseStyle = {
  ...typography.interFont,
  color: colors.gray[100],
  fontWeight: typography.fontWeights.demi,
  lineHeight: typography.lineHeights.title,
};

/* eslint-disable react-native/no-unused-styles */
const alignments = StyleSheet.create({
  center: { textAlign: "center" },
  left: { textAlign: "left" },
  right: { textAlign: "right" },
});

const sizes = StyleSheet.create({
  40: { ...baseStyle, fontSize: 40 },
  32: { ...baseStyle, fontSize: 32 },
  28: { ...baseStyle, fontSize: 28 },
  24: { ...baseStyle, fontSize: 24 },
  20: { ...baseStyle, fontSize: 20 },
  16: { ...baseStyle, fontSize: 16 },
  /* eslint-enable react-native/no-unused-styles */
});

type HeadingAlign = keyof typeof alignments;
type HeadingSize = keyof typeof sizes;

export type HeadingProps = Except<TextProps, "role"> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  align?: HeadingAlign;
  size: HeadingSize;
  children: ReactNode;
};

export const Heading = forwardRef<Text, HeadingProps>(
  ({ children, align = "left", size, level, style, ...props }, forwardedRef) => (
    <Text
      ref={forwardedRef}
      role="heading"
      aria-level={level}
      style={[sizes[size], alignments[align], style]}
      {...props}
    >
      {children}
    </Text>
  ),
);
