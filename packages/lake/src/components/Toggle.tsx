import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors } from "../constants/design";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { LakeText } from "./LakeText";
import { Pressable } from "./Pressable";

const HEIGHT = 26;
const BORDER_WIDTH = 1;

const styles = StyleSheet.create({
  container: {
    display: "inline-block",
    userSelect: "none",
  },
  disabled: {
    cursor: "not-allowed",
    opacity: 0.3,
  },
  switch: {
    flexDirection: "row",
    borderRadius: HEIGHT / 2,
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

export const Toggle = ({
  onToggle,
  value,
  disabled = false,
  mode = "desktop",
  onLabel,
  offLabel,
}: Props) => {
  const containerRef = useRef<View | null>(null);
  const onItemRef = useRef<Text | null>(null);
  const offItemRef = useRef<Text | null>(null);
  const [handleStyle, setHandleStyle] = useState<ViewStyle>();
  const isMobile = mode === "mobile";

  useEffect(() => {
    (value ? onItemRef : offItemRef).current?.measureLayout(
      containerRef.current as unknown as number,
      (left, _, width) => {
        setHandleStyle(prev => ({
          transitionProperty: prev ? "all" : "none",
          width: width + 2 * BORDER_WIDTH,
          transform: `translateX(${
            value ? -BORDER_WIDTH : left - (isMobile ? 2 * BORDER_WIDTH : 0)
          }px)`,
        }));
      },
      () => {},
    );
  }, [value, isMobile, onLabel, offLabel]);

  return (
    <View style={[styles.container, disabled && styles.disabled]} ref={containerRef}>
      <Pressable
        role="switch"
        style={styles.switch}
        onPress={() => onToggle(!value)}
        disabled={disabled}
        aria-checked={value}
        aria-disabled={disabled}
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
          {isMobile ? (
            <Icon
              size={16}
              name="checkmark-circle-regular"
              color={value ? colors.positive[500] : colors.gray[500]}
            />
          ) : (
            <LakeText variant="smallMedium" color={value ? colors.positive[500] : colors.gray[500]}>
              {onLabel}
            </LakeText>
          )}
        </Box>

        <Box style={styles.switchItem} ref={offItemRef}>
          {isMobile ? (
            <Icon
              size={16}
              name="subtract-circle-regular"
              color={!value ? colors.negative[500] : colors.gray[500]}
            />
          ) : (
            <LakeText
              variant="smallMedium"
              color={!value ? colors.negative[500] : colors.gray[500]}
            >
              {offLabel}
            </LakeText>
          )}
        </Box>
      </Pressable>
    </View>
  );
};
