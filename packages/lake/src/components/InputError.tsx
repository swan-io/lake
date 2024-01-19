import { StyleProp, StyleSheet, TextStyle } from "react-native";
import { colors, texts } from "../constants/design";
import { LakeText } from "./LakeText";
import { Space } from "./Space";

const styles = StyleSheet.create({
  base: {
    color: colors.negative[500],
    lineHeight: texts.h1.lineHeight,
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
  message !== "" ? (
    <LakeText variant="smallRegular" style={[styles.base, style]}>
      {message}
    </LakeText>
  ) : (
    <Space height={32} />
  );
