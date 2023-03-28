import { StyleSheet, View, ViewStyle } from "react-native";
import { isNotNullish } from "../utils/nullish";

export const spacingValues = [4, 8, 12, 16, 20, 24, 32, 40, 48, 72, 96] as const;
export type SpacingValue = (typeof spacingValues)[number];

const rawHeightStyles: { [key: number]: ViewStyle } = {};
const rawWidthStyles: { [key: number]: ViewStyle } = {};

spacingValues.forEach(value => {
  rawHeightStyles[value] = { height: value };
  rawWidthStyles[value] = { width: value };
});

const heightStyles = StyleSheet.create(rawHeightStyles);
const widthStyles = StyleSheet.create(rawWidthStyles);

const styles = StyleSheet.create({
  noShrink: {
    flexShrink: 0,
  },
});

type Props = {
  height?: SpacingValue;
  width?: SpacingValue;
  flexGrow?: number;
};

export const Space = ({ height, width, flexGrow }: Props) => (
  <View
    style={[
      styles.noShrink,
      isNotNullish(height) && heightStyles[height],
      isNotNullish(width) && widthStyles[width],
      { flexGrow },
    ]}
  />
);
