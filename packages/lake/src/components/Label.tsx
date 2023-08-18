import { ReactNode, useRef } from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { Except } from "type-fest";
import { colors } from "../constants/colors";
import { typography } from "../constants/typography";
import { useNativeProp } from "../hooks/useNativeProp";

const styles = StyleSheet.create({
  base: {
    ...typography.bodyLarge,
    color: colors.gray[60],
    lineHeight: typography.lineHeights.title,
    paddingHorizontal: 3, // borderRadius / 2
  },
});

export type LabelProps = Except<TextProps, "role"> & {
  children?: ReactNode;
  htmlFor?: string;
  id?: string;
};

export const Label = ({ htmlFor, id, style, ...props }: LabelProps) => {
  const ref = useRef<Text>(null);
  useNativeProp(ref, "for", htmlFor);

  return <Text ref={ref} id={id} role="label" style={[styles.base, style]} {...props} />;
};
