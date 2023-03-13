import { forwardRef, ReactNode } from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { Except } from "type-fest";
import { texts } from "../constants/design";
import { isNotNullish } from "../utils/nullish";

const alignments = StyleSheet.create({
  center: { textAlign: "center" },
  left: { textAlign: "left" },
  right: { textAlign: "right" },
});

const variants = StyleSheet.create({
  h1: texts.h1,
  h2: texts.h2,
  h3: texts.h3,
  h4: texts.h4,
  h5: texts.h5,
  h6: texts.h6,
});

type HeadingAlign = keyof typeof alignments;
type HeadingVariant = keyof typeof variants;

type Props = Except<TextProps, "accessibilityRole"> & {
  align?: HeadingAlign;
  children: ReactNode;
  color?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6 | "none";
  variant?: HeadingVariant;
};

export const LakeHeading = forwardRef<Text, Props>(
  (
    { align = "left", children, color, level, style, variant = "h1", ...props }: Props,
    forwardedRef,
  ) => (
    <Text
      ref={forwardedRef}
      accessibilityRole={level === "none" ? undefined : "header"}
      accessibilityLevel={level === "none" ? undefined : level}
      style={[variants[variant], alignments[align], isNotNullish(color) && { color }, style]}
      {...props}
    >
      {children}
    </Text>
  ),
);
