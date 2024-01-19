import { ChangeEvent, useCallback } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { commonStyles } from "../constants/commonStyles";

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
});

type Props = {
  min: number;
  max: number;
  value: number;
  step: number;
  disabled?: boolean;
  style?: ViewProps["style"];
  onChange: (value: number) => void;
};

export const LakeSlider = ({ min, max, value, step, disabled = false, style, onChange }: Props) => (
  <View style={[styles.container, style]}>
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      step={step}
      disabled={disabled}
      onChange={useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onChange(Number(event.target.value)),
        [onChange],
      )}
      style={{
        backgroundSize: `${((value - min) / (max - min)) * 100}% 100%`,
        ...(disabled ? commonStyles.disabled : {}),
      }}
    />
  </View>
);
