import { forwardRef, memo, useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, View } from "react-native";
import { backgroundColor, colors, shadows } from "../constants/design";
import { useAnimatedValue } from "../hooks/useAnimatedValue";
import { interpolate } from "../utils/math";
import { Icon } from "./Icon";

const WIDTH = 36;
const BUTTON_SIZE = 16;
const PADDING = 2;

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.gray[300],
    borderRadius: 10,
    height: 20,
    width: WIDTH,
    boxSizing: "content-box",
    transitionProperty: "background-color",
    transitionDuration: "300ms",
    boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.2)",
  },
  active: {
    backgroundColor: colors.positive[500],
  },
  disabled: {
    opacity: 0.5,
  },
  opaque: {
    opacity: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: backgroundColor.accented,
    borderRadius: 8,
    boxShadow: shadows.tile,
    height: 16,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    top: PADDING,
    width: BUTTON_SIZE,
  },
  icon: {
    opacity: 0,
    transitionProperty: "opacity",
    transitionDuration: "300ms",
  },
  shadow: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    boxShadow: shadows.tile,
    opacity: 0,
    transitionProperty: "opacity",
    transitionDuration: "300ms",
  },
});

type Props = {
  value: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
};

export const Switch = memo(
  forwardRef<View, Props>(({ value, disabled = false, onValueChange }, ref) => {
    const animatedValue = value ? 1 : 0;
    const animation = useAnimatedValue(animatedValue);
    const buttonRef = useRef<View>(null);

    useEffect(() => {
      const interpolateValue = interpolate({
        inputRange: [0, 1],
        outputRange: [PADDING, WIDTH - BUTTON_SIZE - PADDING],
      });

      const id = animation.addListener(({ value }) => {
        if (buttonRef.current instanceof HTMLElement) {
          buttonRef.current.style.transform = `translateX(${interpolateValue(value)}px)`;
        }
      });

      return () => {
        animation.removeListener(id);
      };
    }, [animation]);

    useEffect(() => {
      Animated.spring(animation, {
        bounciness: 6,
        speed: 25,
        toValue: animatedValue,
        useNativeDriver: false,
      }).start();
    }, [animation, animatedValue]);

    return (
      <Pressable
        ref={ref}
        role="switch"
        aria-checked={value}
        disabled={disabled}
        onPress={() => onValueChange?.(!value)}
      >
        {({ hovered }) => (
          <>
            <View style={[styles.shadow, hovered && styles.opaque]} />

            <View style={[styles.base, value && styles.active, disabled && styles.disabled]}>
              <View ref={buttonRef} style={styles.button}>
                <Icon
                  color={colors.positive[400]}
                  name="checkmark-filled"
                  size={10}
                  style={[styles.icon, value && styles.opaque]}
                />
              </View>
            </View>
          </>
        )}
      </Pressable>
    );
  }),
);
