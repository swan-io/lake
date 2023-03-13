import { StyleSheet, View } from "react-native";
import { backgroundColor, colors, ColorVariants } from "../constants/design";

const OUTER_CIRCLE_SIZE = 16;
const INNER_CIRCLE_SIZE = 8;

const styles = StyleSheet.create({
  outerCircle: {
    backgroundColor: backgroundColor.accented,
    justifyContent: "center",
    alignItems: "center",
    height: OUTER_CIRCLE_SIZE,
    width: OUTER_CIRCLE_SIZE,
    borderRadius: OUTER_CIRCLE_SIZE / 2,
    borderWidth: 1,
    borderColor: colors.gray[500],
  },
  innerCircle: {
    justifyContent: "center",
    alignItems: "center",
    height: INNER_CIRCLE_SIZE,
    width: INNER_CIRCLE_SIZE,
    borderRadius: INNER_CIRCLE_SIZE / 2,
    transform: [{ scale: 0 }],
    transitionProperty: "transform",
    transitionDuration: "100ms",
  },
  innerCircleDisplay: {
    transform: [{ scale: 1 }],
  },
});

type Props = {
  value: boolean;
  disabled?: boolean;
  color?: ColorVariants;
};

export const LakeRadio = ({ value, disabled = false, color = "current" }: Props) => (
  <View
    style={[
      styles.outerCircle,
      value && { borderColor: colors[color].primary },
      disabled && {
        borderColor: colors.gray[300],
      },
    ]}
    accessibilityRole="none"
  >
    <View
      accessibilityHidden={!value}
      style={[
        styles.innerCircle,
        { backgroundColor: colors[color].primary },
        disabled && {
          backgroundColor: colors.gray[200],
        },
        value && styles.innerCircleDisplay,
      ]}
    />
  </View>
);
