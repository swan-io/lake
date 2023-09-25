import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors } from "../constants/design";
import { Icon } from "./Icon";
import { LakeText } from "./LakeText";
import { Pressable } from "./Pressable";

const HEIGHT = 26;
const BORDER_WIDTH = 1;

const styles = StyleSheet.create({
  container: {
    display: "inline-block",
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
    transitionProperty: "transform, width",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
    borderWidth: BORDER_WIDTH,
  },
  switchItem: {
    paddingHorizontal: 4,
    height: HEIGHT - BORDER_WIDTH * 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  switchItemOff: {
    color: colors.negative[500],
  },
  switchItemOn: {
    color: colors.positive[500],
  },
  desktopSwitchItem: {
    paddingHorizontal: 8,
    userSelect: "none",
  },
  desktopSwitchItemOff: {
    color: colors.negative[500],
  },
  desktopSwitchItemOn: {
    color: colors.positive[500],
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

        <LakeText style={[styles.switchItem, value && styles.switchItemOn]} ref={onItemRef}>
          {isMobile ? (
            <Icon name="checkmark-circle-regular" size={16} />
          ) : (
            <LakeText
              variant="smallMedium"
              style={[styles.desktopSwitchItem, value && styles.desktopSwitchItemOn]}
            >
              {onLabel}
            </LakeText>
          )}
        </LakeText>

        <LakeText style={[styles.switchItem, !value && styles.switchItemOff]} ref={offItemRef}>
          {isMobile ? (
            <Icon name="subtract-circle-regular" size={16} />
          ) : (
            <LakeText
              variant="smallMedium"
              style={[styles.desktopSwitchItem, !value && styles.desktopSwitchItemOff]}
            >
              {offLabel}
            </LakeText>
          )}
        </LakeText>
      </Pressable>
    </View>
  );
};
