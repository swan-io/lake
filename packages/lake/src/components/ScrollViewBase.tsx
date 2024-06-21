import { forwardRef, useCallback, useRef } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, StyleSheet, View, ViewProps } from "react-native";
import { useMergeRefs } from "../hooks/useMergeRefs";

const styles = StyleSheet.create({
  hideScrollbar: {
    scrollbarWidth: "none",
  },
});

const normalizeScrollEvent = (event: object): NativeSyntheticEvent<NativeScrollEvent> => ({
  // @ts-expect-error
  nativeEvent: {
    contentOffset: {
      get x() {
        return event.target.scrollLeft;
      },
      get y() {
        return event.target.scrollTop;
      },
    },
    contentSize: {
      get height() {
        return event.target.scrollHeight;
      },
      get width() {
        return event.target.scrollWidth;
      },
    },
    layoutMeasurement: {
      get height() {
        return event.target.offsetHeight;
      },
      get width() {
        return event.target.offsetWidth;
      },
    },
  },
  timeStamp: Date.now(),
});

const shouldEmitScrollEvent = (lastTick: number, eventThrottle: number) => {
  const timeSinceLastTick = Date.now() - lastTick;
  return eventThrottle > 0 && timeSinceLastTick >= eventThrottle;
};

type Props = ViewProps & {
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
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
      (event: object) => {
        event.stopPropagation();

        if (event.target === scrollRef.current) {
          event.persist();

          // A scroll happened, so the scroll resets the scrollend timeout.
          if (scrollTimeout.current != null) {
            clearTimeout(scrollTimeout.current);
          }

          scrollTimeout.current = setTimeout(() => {
            scrollState.current.isScrolling = false;

            if (onScroll) {
              onScroll(normalizeScrollEvent(event));
            }
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
