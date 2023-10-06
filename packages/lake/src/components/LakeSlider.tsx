import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { commonStyles } from "../constants/commonStyles";
import { breakpoints } from "../constants/design";
import { Box } from "./Box";
import { LakeLabel } from "./LakeLabel";
import { LakeTextInput } from "./LakeTextInput";
import { ResponsiveContainer } from "./ResponsiveContainer";

export type SliderProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  disabled?: boolean;
  onChange: (value: number) => void;
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
  input: {
    maxWidth: 120,
    zIndex: 1,
    position: "relative",
  },
});

export const sliderBreakpoint = breakpoints.tiny;

export const LakeSlider = ({
  label,
  value,
  min,
  max,
  step,
  unit,
  disabled = false,
  onChange,
}: SliderProps) => {
  const [dirtyValue, setDirtyValue] = useState(String(value));

  useEffect(() => {
    setDirtyValue(String(value));
  }, [value]);

  const sanitizeInput = useCallback(() => {
    const cleanValue = Math.max(Math.min(Number(dirtyValue), max), min);
    setDirtyValue(String(cleanValue));
    onChange(cleanValue);
  }, [min, max, dirtyValue, onChange]);

  return (
    <ResponsiveContainer breakpoint={sliderBreakpoint} style={styles.container}>
      {({ large }) => (
        <>
          {large ? (
            <>
              <Box direction="row" justifyContent="end">
                <View>
                  <LakeTextInput
                    style={styles.input}
                    unit={unit}
                    value={dirtyValue}
                    onChangeText={setDirtyValue}
                    onBlur={sanitizeInput}
                    inputMode="decimal"
                    disabled={disabled}
                  />
                </View>
              </Box>

              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                disabled={disabled}
                onChange={event => onChange(Number(event.target.value))}
                style={{
                  backgroundSize: `${((value - min) / (max - min)) * 100}% 100%`,
                  ...(disabled ? commonStyles.disabled : {}),
                }}
              />
            </>
          ) : (
            <LakeLabel
              label={label}
              render={id => (
                <LakeTextInput
                  id={id}
                  unit={unit}
                  value={dirtyValue}
                  onChangeText={setDirtyValue}
                  onBlur={sanitizeInput}
                  inputMode="decimal"
                  disabled={disabled}
                />
              )}
            />
          )}
        </>
      )}
    </ResponsiveContainer>
  );
};
