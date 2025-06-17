import { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { commonStyles } from "../constants/commonStyles";
import { colors } from "../constants/design";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { LakeText } from "./LakeText";
import { Pressable } from "./Pressable";

const HEIGHT = 26;
const BORDER_WIDTH = 1;

const styles = StyleSheet.create({
  switch: {
    userSelect: "none",
    flexDirection: "row",
    borderRadius: HEIGHT / 2,
    height: HEIGHT,
    transform: "translateZ(0px)",
    width: "min-content",
    borderColor: colors.gray[100],
    borderWidth: BORDER_WIDTH,
  },
  handle: {
    position: "absolute",
    width: HEIGHT,
    height: HEIGHT,
    top: -BORDER_WIDTH,
    borderRadius: HEIGHT / 2,
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
    borderWidth: BORDER_WIDTH,
  },
  switchItem: {
    paddingHorizontal: 8,
    height: HEIGHT - BORDER_WIDTH * 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

type Props = {
  value: boolean;
  disabled?: boolean;
  onToggle: (next: boolean) => void;
  mode?: "desktop" | "mobile";
  onLabel: string;
  offLabel: string;
};

/**
 * @deprecated
 */
export const Toggle = ({
  onToggle,
  value,
  disabled = false,
  mode = "desktop",
  onLabel,
  offLabel,
}: Props) => {
  const containerRef = useRef<View>(null);
  const onItemRef = useRef<Text>(null);
  const offItemRef = useRef<Text>(null);
  const [handleStyle, setHandleStyle] = useState<ViewStyle>();
  const isMobileMode = mode === "mobile";
  const onColor = value ? colors.positive[500] : colors.gray[500];
  const offColor = !value ? colors.negative[500] : colors.gray[500];

  const reajustLayout = useCallback(() => {
    (value ? onItemRef : offItemRef).current?.measureLayout(
      containerRef.current as unknown as number,
      (left, _, width) => {
        setHandleStyle(prev => ({
          transitionProperty: prev ? "width, transform" : "none",
          width: width + 2 * BORDER_WIDTH,
          transform: `translateX(${value ? -BORDER_WIDTH : left - 2 * BORDER_WIDTH}px)`,
        }));
      },
      () => {},
    );
  }, [value]);

  // biome-ignore lint/correctness/useExhaustiveDependencies(reajustLayout): _
  // biome-ignore lint/correctness/useExhaustiveDependencies(value): _
  // biome-ignore lint/correctness/useExhaustiveDependencies(isMobileMode): _
  // biome-ignore lint/correctness/useExhaustiveDependencies(onLabel): _
  // biome-ignore lint/correctness/useExhaustiveDependencies(offLabel): _
  useEffect(reajustLayout, [reajustLayout, value, isMobileMode, onLabel, offLabel]);

  return (
    <Pressable
      style={[styles.switch, disabled && commonStyles.disabled]}
      onPress={() => onToggle(!value)}
      aria-disabled={disabled}
      aria-checked={value}
      disabled={disabled}
      ref={containerRef}
      role="switch"
      onLayout={reajustLayout}
    >
      <View
        style={[
          styles.handle,
          handleStyle,
          {
            borderColor: value ? colors.positive[500] : colors.negative[500],
            backgroundColor: value ? colors.positive[50] : colors.negative[50],
          },
        ]}
      />

      <Box style={styles.switchItem} ref={onItemRef}>
        {isMobileMode ? (
          <Icon size={16} name="checkmark-circle-regular" color={onColor} />
        ) : (
          <LakeText variant="smallMedium" color={onColor}>
            {onLabel}
          </LakeText>
        )}
      </Box>

      <Box style={styles.switchItem} ref={offItemRef}>
        {isMobileMode ? (
          <Icon size={16} name="subtract-circle-regular" color={offColor} />
        ) : (
          <LakeText variant="smallMedium" color={offColor}>
            {offLabel}
          </LakeText>
        )}
      </Box>
    </Pressable>
  );
};
