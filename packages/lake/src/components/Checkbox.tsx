import { forwardRef, memo, ReactNode, useId, useRef } from "react";
import {
  unstable_createElement as createElement,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../constants/colors";
import { typography } from "../constants/typography";
import { useNativeProp } from "../hooks/useNativeProp";
import { isNotNullish } from "../utils/nullish";
import { Icon } from "./Icon";
import { Pressable } from "./Pressable";
import { Space } from "./Space";

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    flexShrink: 1,
  },
  box: {
    alignItems: "center",
    borderColor: colors.gray[10],
    borderRadius: 4,
    borderWidth: 1,
    height: 20,
    justifyContent: "center",
    padding: 4,
    transitionDuration: "150ms",
    transitionProperty: "border-color",
    width: 20,
  },
  native: {
    ...StyleSheet.absoluteFillObject,
    appearance: "none",
    borderColor: colors.transparent,
    cursor: "inherit",
    height: "100%",
    margin: 0,
    padding: 0,
    width: "100%",
  },
  icon: {
    opacity: 0,

    animationKeyframes: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },

    animationDuration: "0.25s",
    animationFillMode: "forwards",
    animationTimingFunction: "ease",
  },
  hovered: {
    borderColor: colors.gray[30],
  },
  disabled: {
    cursor: "not-allowed",
    backgroundColor: colors.gray[3],
  },
  errored: {
    borderColor: colors.red[100],
  },
  label: {
    ...typography.bodyLarge,
    lineHeight: typography.lineHeights.title,
  },
});

type Props = {
  children?: ReactNode;
  disabled?: boolean;
  error?: string;
  style?: StyleProp<ViewStyle>;
  value: boolean;
  onValueChange?: (value: boolean) => void;
};

export const CheckBox = memo(
  forwardRef<View, Props>(
    ({ children, disabled = false, error = "", style, value, onValueChange }, forwardedRef) => {
      const ref = useRef<Text>(null);
      const id = useId();
      useNativeProp(ref, "for", id);

      return (
        <View style={[styles.base, style]}>
          <Pressable
            ref={forwardedRef}
            accessibilityRole="checkbox"
            tabIndex={-1}
            accessibilityChecked={value}
            accessibilityDisabled={disabled}
            style={({ hovered }) => [
              styles.box,
              disabled && styles.disabled,
              !disabled && error !== "" && styles.errored,
              !disabled && error === "" && hovered && styles.hovered,
            ]}
          >
            {createElement("input", {
              checked: value,
              disabled,
              id,
              style: styles.native,
              type: "checkbox",
              onChange: () => {
                !disabled && onValueChange?.(!value);
              },
            })}

            {value && (
              <Icon
                name="checkmark-filled"
                color={disabled ? colors.gray[50] : colors.green[100]}
                size={16}
                style={styles.icon}
              />
            )}
          </Pressable>

          {isNotNullish(children) && (
            <>
              <Space width={12} />

              <Text accessibilityRole="label" ref={ref} style={styles.label}>
                {children}
              </Text>
            </>
          )}
        </View>
      );
    },
  ),
);

CheckBox.displayName = "CheckBox";
