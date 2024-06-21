import { Ref, forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { useMergeRefs } from "../hooks/useMergeRefs";
import { ScrollEvent, ScrollViewBase } from "./ScrollViewBase";

const styles = StyleSheet.create({
  base: {
    WebkitOverflowScrolling: "touch",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 1,
    overflowX: "hidden",
    overflowY: "auto",
    transform: "translateZ(0)",
  },
  horizontal: {
    flexDirection: "row",
    overflowX: "auto",
    overflowY: "hidden",
  },
  contentHorizontal: {
    flexDirection: "row",
  },
});

export type ScrollViewRef = {
  scrollTo: (event: { x?: number; y?: number; animated?: boolean }) => void;
};

type Props = ViewProps & {
  contentContainerStyle?: StyleProp<ViewStyle>;
  horizontal?: boolean;
  onScroll?: (event: ScrollEvent) => void;
  scrollEventThrottle?: number;
};

export const ScrollView = forwardRef<ScrollViewRef, Props>(
  (
    {
      children,
      contentContainerStyle,
      horizontal = false,
      onScroll,
      scrollEventThrottle = 16,
      style,
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useRef<ScrollViewRef>(null);

    const scrollTo = useCallback<ScrollViewRef["scrollTo"]>(({ x = 0, y = 0, animated = true }) => {
      const element = ref.current as unknown as Element;

      if (element != null) {
        if (typeof element.scroll === "function") {
          element.scroll({ top: y, left: x, behavior: !animated ? "auto" : "smooth" });
        } else {
          element.scrollTop = y;
          element.scrollLeft = x;
        }
      }
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo }));

    return (
      <ScrollViewBase
        {...props}
        ref={useMergeRefs(ref, forwardedRef) as Ref<View>}
        onScroll={onScroll}
        scrollEventThrottle={scrollEventThrottle}
        style={[styles.base, horizontal && styles.horizontal, style]}
      >
        <View style={[horizontal && styles.contentHorizontal, contentContainerStyle]}>
          {children}
        </View>
      </ScrollViewBase>
    );
  },
);
