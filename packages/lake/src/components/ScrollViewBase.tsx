import { forwardRef, useCallback, useRef } from "react";
import { NativeSyntheticEvent, StyleSheet, View, ViewProps } from "react-native";
import { useMergeRefs } from "../hooks/useMergeRefs";

const styles = StyleSheet.create({
  hideScrollbar: {
    scrollbarWidth: "none",
  },
});

const normalizeScrollEvent = (event: NativeSyntheticEvent<React.UIEvent>) => {
  const target = event.target as unknown as HTMLElement;

  const contentOffset = {
    get x() {
      return target.scrollLeft;
    },
    get y() {
      return target.scrollTop;
    },
  };

  const contentSize = {
    get height() {
      return target.scrollHeight;
    },
    get width() {
      return target.scrollWidth;
    },
  };

  const layoutMeasurement = {
    get height() {
      return target.offsetHeight;
    },
    get width() {
      return target.offsetWidth;
    },
  };

  return {
    nativeEvent: { contentOffset, contentSize, layoutMeasurement },
    timeStamp: Date.now(),
  };
};

export type ScrollEvent = ReturnType<typeof normalizeScrollEvent>;

const shouldEmitScrollEvent = (lastTick: number, eventThrottle: number) => {
  const timeSinceLastTick = Date.now() - lastTick;
  return eventThrottle > 0 && timeSinceLastTick >= eventThrottle;
};

type Props = ViewProps & {
  onScroll?: (event: ScrollEvent) => void;
  scrollEventThrottle?: number;
  showsScrollIndicators?: boolean;
};

export const ScrollViewBase = forwardRef<View, Props>(
  (
    { onScroll, scrollEventThrottle = 0, showsScrollIndicators = true, style, ...viewProps },
    forwardedRef,
  ) => {
    const scrollState = useRef({ isScrolling: false, scrollLastTick: 0 });
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
    const scrollRef = useRef(null);
    const mergedRef = useMergeRefs(scrollRef, forwardedRef);

    const handleOnScroll = useCallback(
      (event: NativeSyntheticEvent<React.UIEvent>) => {
        event.stopPropagation();

        if (event.target === scrollRef.current) {
          event.persist();

          // A scroll happened, so the scroll resets the scrollend timeout.
          if (scrollTimeout.current != null) {
            clearTimeout(scrollTimeout.current);
          }

          scrollTimeout.current = setTimeout(() => {
            scrollState.current.isScrolling = false;
            onScroll?.(normalizeScrollEvent(event));
          }, 100);

          if (scrollState.current.isScrolling) {
            // Scroll last tick may have changed, check if we need to notify
            if (shouldEmitScrollEvent(scrollState.current.scrollLastTick, scrollEventThrottle)) {
              scrollState.current.scrollLastTick = Date.now();
              onScroll?.(normalizeScrollEvent(event));
            }
          } else {
            // Weren't scrolling, so we must have just started
            scrollState.current.isScrolling = true;
            scrollState.current.scrollLastTick = Date.now();
            onScroll?.(normalizeScrollEvent(event));
          }
        }
      },
      [onScroll, scrollEventThrottle],
    );

    return (
      <View
        {...viewProps}
        ref={mergedRef}
        onScroll={handleOnScroll}
        style={[style, !showsScrollIndicators && styles.hideScrollbar]}
      />
    );
  },
);
