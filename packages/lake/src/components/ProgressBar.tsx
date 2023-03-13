import { useId } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { typography } from "../constants/typography";
import { useComputedColors } from "../hooks/useComputedColors";
import { interpolate } from "../utils/math";
import { Box } from "./Box";
import { Fill } from "./Fill";
import { Space } from "./Space";

const styles = StyleSheet.create({
  label: {
    ...typography.bodySmall,
    lineHeight: typography.lineHeights.title,
    color: colors.gray[50],
  },
  progressLabel: {
    ...typography.bodySmall,
    fontWeight: typography.fontWeights.demi,
    color: colors.gray[100],
    whiteSpace: "nowrap",
  },
  bar: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.gray[10],
  },
  progressBar: {
    height: "100%",
    borderRadius: 4,
  },
});

type Props = {
  color: string;
  label: string;
  progressLabel: string;
  minValue: number;
  maxValue: number;
  value: number;
};

export const ProgressBar = ({ color, label, progressLabel, minValue, maxValue, value }: Props) => {
  const computedColors = useComputedColors(color);
  const labelId = `label-${useId()}`;

  const percentage = interpolate({
    inputRange: [minValue, maxValue],
    outputRange: [0, 100],
    clamp: true,
  })(value);
  const fillWidth = `${Math.round(percentage)}%`;

  return (
    <View
      accessibilityRole="progressbar"
      accessibilityLabelledBy={labelId}
      accessibilityValueMin={minValue}
      accessibilityValueMax={maxValue}
      accessibilityValueNow={value}
      accessibilityValueText={progressLabel}
    >
      <Box direction="row" alignItems="center">
        <Text nativeID={labelId} style={styles.label}>
          {label}
        </Text>

        <Fill minWidth={16} />
        <Text style={styles.progressLabel}>{progressLabel}</Text>
      </Box>

      <Space height={8} />

      <View style={styles.bar}>
        <View
          style={[
            styles.progressBar,
            { backgroundColor: computedColors.progress, width: fillWidth },
          ]}
        />
      </View>
    </View>
  );
};
