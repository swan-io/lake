import { forwardRef, ReactNode } from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { texts } from "../constants/design";
import { isNotNullish } from "../utils/nullish";

const alignments = StyleSheet.create({
  center: { textAlign: "center" },
  left: { textAlign: "left" },
  right: { textAlign: "right" },
});

const variants = StyleSheet.create({
  semibold: texts.semibold,
  medium: texts.medium,
  regular: texts.regular,
  light: texts.light,
  smallSemibold: texts.smallSemibold,
  smallMedium: texts.smallMedium,
  smallRegular: texts.smallRegular,
});

type TextAlign = keyof typeof alignments;
export type TextVariant = keyof typeof variants;

type Props = TextProps & {
  align?: TextAlign;
  children: ReactNode;
  color?: string;
  variant?: TextVariant;
};

export const LakeText = forwardRef<Text, Props>(
  (
    { align = "left", children, color, style, variant = "regular", ...props }: Props,
    forwardedRef,
  ) => (
    <Text
      ref={forwardedRef}
      style={[variants[variant], alignments[align], isNotNullish(color) && { color }, style]}
      {...props}
    >
      {children}
    </Text>
  ),
);
