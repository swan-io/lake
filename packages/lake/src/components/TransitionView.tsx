import { ReactNode, useLayoutEffect, useReducer, useRef } from "react";
import { AnimationStyles, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { usePreviousValue } from "../hooks/usePreviousValue";
import { isNotNullish, isNullish } from "../utils/nullish";

type Props = {
  enter?: AnimationStyles;
  leave?: AnimationStyles;
  style?: StyleProp<ViewStyle>;
  children: ReactNode | null;
  onLeave?: () => void;
};

const styles = StyleSheet.create({
  base: {
    animationFillMode: "forwards",
  },
});

export const TransitionView = ({ enter, leave, style, children, onLeave }: Props) => {
  const viewRef = useRef<View>(null);
  const childrenForLeaveAnimationRef = useRef<ReactNode>(null);
  const [, forceUpdate] = useReducer(() => [], []);

  const previousChildren = usePreviousValue(children);

  if (isNullish(children) && isNotNullish(previousChildren) && isNotNullish(leave)) {
    childrenForLeaveAnimationRef.current = previousChildren;
  }

  // Cleanup in case children reappear before the animation has performed
  if (isNotNullish(children) && isNullish(previousChildren)) {
    childrenForLeaveAnimationRef.current = null;
  }

  useLayoutEffect(() => {
    if (isNullish(children) && isNotNullish(leave) && isNotNullish(viewRef.current)) {
      const element = viewRef.current as unknown as Element;

      const onAnimationEnd = () => {
        childrenForLeaveAnimationRef.current = null;
        forceUpdate();
        onLeave?.();
        element.removeEventListener("animationend", onAnimationEnd);
      };
      element.addEventListener("animationend", onAnimationEnd);

      return () => element.removeEventListener("animationend", onAnimationEnd);
    }
  }, [children, leave, onLeave]);

  const hasChildrenToDisplay =
    isNotNullish(children) || isNotNullish(childrenForLeaveAnimationRef.current);

  return hasChildrenToDisplay ? (
    <View
      ref={viewRef}
      style={[
        styles.base,
        style,
        enter,
        isNotNullish(childrenForLeaveAnimationRef.current) && leave,
      ]}
    >
      {children ?? childrenForLeaveAnimationRef.current}
    </View>
  ) : null;
};
