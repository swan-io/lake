import { ColorValue, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { radii, spacings } from "../constants/design";

const styles = StyleSheet.create({
  tick: {
    width: spacings[8],
    height: spacings[8],
    borderRadius: radii[4],
  },
});

type Props = {
  style?: StyleProp<ViewStyle>;
  color: ColorValue;
};

export const Tick = ({ color, style }: Props) => (
  <View style={[styles.tick, { backgroundColor: color }, style]} />
);
