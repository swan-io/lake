import { Animated } from "react-native";
import { useLazyRef } from "./useLazyRef";

export const useAnimatedValue = (value: number) =>
  useLazyRef(() => new Animated.Value(value)).current;
