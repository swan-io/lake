import {
  Ref,
  SyntheticEvent,
  UIEvent,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { useMergeRefs } from "../hooks/useMergeRefs";

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
  hideScrollbars: {
    scrollbarWidth: "none",
  },
});

const normalizeScrollEvent = (event: SyntheticEvent<UIEvent>) => {
  const target = event.target as HTMLElement;

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

export type ScrollViewRef = {
  scrollTo: (event: { x?: number; y?: number; animated?: boolean }) => void;
};

const shouldEmitScrollEvent = (lastTick: number, eventThrottle: number) => {
  const timeSinceLastTick = Date.now() - lastTick;
  return eventThrottle > 0 && timeSinceLastTick >= eventThrottle;
};

type Props = ViewProps & {
  contentContainerStyle?: StyleProp<ViewStyle>;
  horizontal?: boolean;
  onScroll?: (event: ScrollEvent) => void;
  scrollEventThrottle?: number;
  showsScrollIndicators?: boolean;
};

export const ScrollView = forwardRef<ScrollViewRef, Props>(
  (
    {
      children,
      contentContainerStyle,
      horizontal = false,
      onScroll,
      scrollEventThrottle = 16,
      showsScrollIndicators = true,
      style,
      ...viewProps
    },
    forwardedRef,
  ) => {
    const innerRef = useRef<ScrollViewRef>(null);
    const mergedRef = useMergeRefs(innerRef, forwardedRef) as Ref<View>;
    const state = useRef({ isScrolling: false, scrollLastTick: 0 });
    const timeout = useRef<NodeJS.Timeout | null>(null);

    const handleOnScroll = useCallback(
      (event: SyntheticEvent<UIEvent>) => {
        event.stopPropagation();

        if (event.target === (innerRef.current as HTMLElement)) {
          event.persist();

          // A scroll happened, so the scroll resets the scrollend timeout.
          if (timeout.current != null) {
            clearTimeout(timeout.current);
          }

          timeout.current = setTimeout(() => {
            state.current.isScrolling = false;
            onScroll?.(normalizeScrollEvent(event));
          }, 100);

          if (state.current.isScrolling) {
            // Scroll last tick may have changed, check if we need to notify
            if (shouldEmitScrollEvent(state.current.scrollLastTick, scrollEventThrottle)) {
              state.current.scrollLastTick = Date.now();
              onScroll?.(normalizeScrollEvent(event));
            }
          } else {
            // Weren't scrolling, so we must have just started
            state.current.isScrolling = true;
            state.current.scrollLastTick = Date.now();
            onScroll?.(normalizeScrollEvent(event));
          }
        }
      },
      [onScroll, scrollEventThrottle],
    );

    const scrollTo = useCallback<ScrollViewRef["scrollTo"]>(({ x = 0, y = 0, animated = true }) => {
      const element = innerRef.current as Element;

      if (element != null) {
        if (typeof element.scroll === "function") {
          element.scroll({ top: y, left: x, behavior: !animated ? "auto" : "smooth" });
        } else {
          element.scrollTop = y;
          element.scrollLeft = x;
        }
      }
    }, []);

    useImperativeHandle(innerRef, () => ({ scrollTo }));

    return (
      <View
        {...viewProps}
        ref={mergedRef}
        onScroll={handleOnScroll}
        style={[
          styles.base,
          style,
          horizontal && styles.horizontal,
          !showsScrollIndicators && styles.hideScrollbars,
        ]}
      >
        <View style={[horizontal && styles.contentHorizontal, contentContainerStyle]}>
          {children}
        </View>
      </View>
    );
  },
);
