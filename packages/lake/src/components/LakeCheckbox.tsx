import { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ColorVariants, colors, radii } from "../constants/design";
import { LakeText } from "./LakeText";
import { Pressable } from "./Pressable";
import { Space } from "./Space";
import { Animate, Path, Svg } from "./Svg";

const SIZE = 16;
const RADIUS = 4;

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: RADIUS,
    borderWidth: 1,
    borderColor: colors.gray[500],
    alignItems: "center",
    justifyContent: "center",
  },
  mixed: {
    width: SIZE - 8,
    height: 2,
  },
  labelled: {
    flexDirection: "row",
    alignItems: "center",
  },
  disabled: {
    opacity: 0.5,
  },
  errorPill: {
    width: 5,
    height: 5,
    backgroundColor: colors.negative[500],
    borderRadius: radii[6],
  },
});

export type CheckboxProps = {
  value: boolean | "mixed";
  color?: ColorVariants;
  disabled?: boolean;
  isError?: boolean;
};

export const LakeCheckbox = ({
  value,
  color = "current",
  disabled = false,
  isError = false,
}: CheckboxProps) => {
  const isFirstRender = useRef(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (!isFirstRender.current) {
      setShouldAnimate(true);
    }
    isFirstRender.current = false;
  }, [value]);

  return (
    <View
      role="none"
      style={[
        styles.container,
        disabled && styles.disabled,
        value !== false && {
          backgroundColor: colors[color].primary,
          borderColor: colors[color].primary,
        },
        isError && { borderColor: colors.negative[500] },
      ]}
    >
      {value === true && (
        <Svg viewBox="0 0 16 16">
          <Path
            d="m3.5 7.5 2.8 3.4 5.6-6.7"
            stroke={colors[color].contrast}
            strokeWidth={1.5}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="20"
            strokeDashoffset={shouldAnimate ? "20" : "0"}
          >
            {shouldAnimate && (
              <Animate
                attributeName="stroke-dashoffset"
                values="20;0"
                dur="150ms"
                begin="150ms"
                fill="freeze"
              />
            )}
          </Path>
        </Svg>
      )}

      {value === "mixed" && (
        <View style={[styles.mixed, { backgroundColor: colors[color].contrast }]} />
      )}
    </View>
  );
};

export type LabelledCheckboxProps = CheckboxProps & {
  onValueChange: (value: boolean) => void;
  label: string;
  disabled?: boolean;
  isError?: boolean;
};

export const LakeLabelledCheckbox = ({
  value,
  color,
  label,
  onValueChange,
  disabled = false,
  isError = false,
}: LabelledCheckboxProps) => {
  return (
    <Pressable
      role="checkbox"
      aria-checked={value}
      style={styles.labelled}
      onPress={() => onValueChange(value === true ? false : true)}
      disabled={disabled}
    >
      <LakeCheckbox value={value} color={color} disabled={disabled} isError={isError} />
      <Space width={8} />

      <LakeText color={colors.gray[900]} userSelect="none">
        {label}
      </LakeText>

      {isError ? (
        <>
          <Space width={8} />
          <View style={styles.errorPill} />
        </>
      ) : null}
    </Pressable>
  );
};
