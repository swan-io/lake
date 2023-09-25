import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
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
    display: "inline-flex",
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
    height: HEIGHT - BORDER_WIDTH * 2,
    borderRadius: (HEIGHT - BORDER_WIDTH * 2) / 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  switchItemUnchecked: {
    color: colors.negative[500],
  },
  switchItemChecked: {
    color: colors.positive[500],
  },
  desktopSwitchItem: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  desktopSwitchItemUnchecked: {
    color: colors.negative[500],
  },
  desktopSwitchItemChecked: {
    color: colors.positive[500],
  },
});

type Props = {
  value: boolean;
  disabled?: boolean;
  onToggle: (next: boolean) => void;
  mode?: "desktop" | "mobile";
  labels: {
    true: string;
    false: string;
  };
};

export const Toggle = ({ onToggle, value, disabled = false, mode = "desktop", labels }: Props) => {
  const containerRef = useRef<View | null>(null);
  const checkedRef = useRef<Text | null>(null);
  const uncheckedRef = useRef<Text | null>(null);
  const [handlePosition, setHandlePosition] = useState({ width: 0, left: 0 });

  useEffect(() => {
    (value ? checkedRef : uncheckedRef).current?.measureLayout(
      containerRef.current as unknown as number,
      (left, _, width) => {
        setHandlePosition({ left, width });
      },
      () => {},
    );
  }, [value, mode, labels]);

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

            {
              transform: `translateX(${handlePosition.left - 2 * BORDER_WIDTH}px)`,
              width: handlePosition.width + 2 * BORDER_WIDTH,
              borderColor: value ? colors.positive[500] : colors.negative[500],
              backgroundColor: value ? colors.positive[50] : colors.negative[50],
            },
          ]}
        />

        <LakeText style={[styles.switchItem, value && styles.switchItemChecked]} ref={checkedRef}>
          {mode === "mobile" ? (
            <Icon
              style={{ width: HEIGHT - BORDER_WIDTH * 2 }}
              name="checkmark-circle-regular"
              size={16}
            />
          ) : (
            <LakeText style={[styles.desktopSwitchItem, value && styles.desktopSwitchItemChecked]}>
              {labels.true}
            </LakeText>
          )}
        </LakeText>

        <LakeText
          style={[styles.switchItem, !value && styles.switchItemUnchecked]}
          ref={uncheckedRef}
        >
          {mode === "mobile" ? (
            <Icon
              style={{ width: HEIGHT - BORDER_WIDTH * 2 }}
              name="subtract-circle-regular"
              size={16}
            />
          ) : (
            <LakeText
              style={[styles.desktopSwitchItem, !value && styles.desktopSwitchItemUnchecked]}
            >
              {labels.false}
            </LakeText>
          )}
        </LakeText>
      </Pressable>
    </View>
  );
};
