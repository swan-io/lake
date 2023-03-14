import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { Space } from "./Space";
import { colors } from "../constants/colors";
import { typography } from "../constants/typography";

const styles = StyleSheet.create({
  base: {
    ...typography.bodySmall,
    color: colors.red[100],
    lineHeight: typography.lineHeights.input,
    minHeight: 32,
    paddingHorizontal: 3, // borderRadius / 2
    paddingVertical: 4,
  },
});

type Props = {
  message?: string;
  style?: StyleProp<TextStyle>;
};

export const InputError = ({ message = "", style }: Props) =>
  message !== "" ? <Text style={[styles.base, style]}>{message}</Text> : <Space height={32} />;
