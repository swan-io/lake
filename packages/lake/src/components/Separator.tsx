import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { colors } from "../constants/design";
import { isNotNullish } from "../utils/nullish";
import { SpacingValue } from "./Space";

const styles = StyleSheet.create({
  horizontal: {
    backgroundColor: colors.gray[100],
    width: 1,
    alignSelf: "stretch",
  },
  vertical: {
    backgroundColor: colors.gray[100],
    height: 1,
    alignSelf: "stretch",
  },
});

type Props = {
  horizontal?: boolean;
  space?: SpacingValue;
  style?: StyleProp<ViewStyle>;
};

export const Separator = ({ horizontal = false, space, style }: Props) => (
  <View
    accessibilityRole="none"
    style={
      horizontal
        ? [styles.horizontal, isNotNullish(space) && { marginHorizontal: space }, style]
        : [styles.vertical, isNotNullish(space) && { marginVertical: space }, style]
    }
  />
);
