import { MutableRefObject, useRef } from "react";
import { Animated } from "react-native";

const UNSET = Symbol("unset");

/**
 * @deprecated
 */
export const useAnimatedValue = (value: number): Animated.Value => {
  const ref = useRef<Animated.Value | typeof UNSET>(UNSET);

  if (ref.current === UNSET) {
    ref.current = new Animated.Value(value);
  }

  return (ref as MutableRefObject<Animated.Value>).current;
};
