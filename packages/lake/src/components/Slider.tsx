import { memo, useEffect, useRef } from "react";
import { Animated, LayoutChangeEvent, PanResponder, StyleSheet, View } from "react-native";
import { match } from "ts-pattern";
import { colors } from "../constants/colors";
import { useAnimatedValue } from "../hooks/useAnimatedValue";
import { interpolate } from "../utils/math";

const BUTTON_SIZE = 20;

const styles = StyleSheet.create({
  container: {
    height: BUTTON_SIZE,
  },
  disabled: {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  bar: {
    ...StyleSheet.absoluteFillObject,
    height: 4,
    marginVertical: "auto",
    borderRadius: 2,
    backgroundColor: colors.gray[10],
    overflow: "hidden",
  },
  barFill: {
    ...StyleSheet.absoluteFillObject,
    transformOrigin: "0 0",
    backgroundColor: colors.gray[100],
  },
  button: {
    position: "absolute",
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    backgroundColor: colors.gray[100],
    borderRadius: BUTTON_SIZE / 2,
    marginLeft: -(BUTTON_SIZE / 2),
    willChange: "left", // because we animate left directly
  },
});

const computeValue = ({
  minimum,
  maximum,
  step,
  origin,
  position,
  width,
}: {
  minimum: number;
  maximum: number;
  step: number;
  origin: number;
  position: number;
  width: number;
}): number => {
  const value = interpolate({
    inputRange: [0, width],
    outputRange: [minimum, maximum],
    clamp: true,
  })(position - origin);

  // round value based on step size
  return Math.round(value / step) * step;
};

type Props = {
  value: number;
  step: number;
  minimum: number;
  maximum: number;
  disabled?: boolean;
  onValueChange?: (value: number) => void;
};

export const Slider = memo(
  ({ value, step, minimum, maximum, disabled = false, onValueChange }: Props) => {
    const disabledRef = useRef(disabled);
    const interacting = useRef(false);
    const left = useRef(0);
    const width = useRef(0);
    const valueAnim = useAnimatedValue(value);

    const barAnim = valueAnim.interpolate({
      inputRange: [minimum, maximum],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp",
    });

    // Update position on value change
    useEffect(() => {
      !interacting.current && valueAnim.setValue(value);
    }, [valueAnim, value]);

    // Update disabled ref for pan responder
    useEffect(() => {
      disabledRef.current = disabled;
    }, [disabled]);

    const handleLayout = ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
      left.current = layout.left ?? 0;
      width.current = layout.width;
    };

    const handleKeyDown = ({ nativeEvent }: { nativeEvent: React.KeyboardEvent }) => {
      if (!onValueChange || disabled) {
        return;
      }

      match(nativeEvent.key)
        .with("ArrowUp", "ArrowRight", () => onValueChange(Math.min(value + step, maximum)))
        .with("ArrowDown", "ArrowLeft", () => onValueChange(Math.max(value - step, minimum)))
        .otherwise(() => {});
    };

    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          interacting.current = true;
          document.body.style.userSelect = "none";
        },
        onPanResponderMove: event => {
          if (onValueChange && !disabledRef.current) {
            const nextValue = computeValue({
              minimum,
              maximum,
              step,
              position: event.nativeEvent.pageX,
              origin: left.current,
              width: width.current,
            });

            onValueChange(nextValue);
            valueAnim.setValue(nextValue);
          }
        },
        onPanResponderRelease: event => {
          interacting.current = false;
          document.body.style.userSelect = "";

          if (onValueChange && !disabledRef.current) {
            const nextValue = computeValue({
              minimum,
              maximum,
              step,
              position: event.nativeEvent.pageX,
              origin: left.current,
              width: width.current,
            });

            onValueChange(nextValue);
            valueAnim.setValue(nextValue);
          }
        },
      }),
    ).current;

    return (
      <View
        tabIndex={disabled ? -1 : 0}
        style={[styles.container, disabled && styles.disabled]}
        onLayout={handleLayout}
        onKeyDown={handleKeyDown}
        {...panResponder.panHandlers}
      >
        <View style={styles.bar}>
          <Animated.View style={[styles.barFill, { transform: [{ scaleX: barAnim }] }]} />
        </View>

        <Animated.View style={[styles.button, { left: barAnim }]} />
      </View>
    );
  },
);
