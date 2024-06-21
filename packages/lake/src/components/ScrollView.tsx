import {
  Ref,
  SyntheticEvent,
  UIEvent,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
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

export type ScrollViewRef = {
  scrollTo: (event: { x?: number; y?: number; animated?: boolean }) => void;
};

type State = {
  lastTick: number;
  scrolling: boolean;
};

const shouldEmitScrollEvent = (state: State, eventThrottle: number) =>
  !state.scrolling || (eventThrottle > 0 && Date.now() - state.lastTick >= eventThrottle);

export type ScrollViewProps = ViewProps & {
  contentContainerStyle?: StyleProp<ViewStyle>;
  horizontal?: boolean;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  scrollEventThrottle?: number;
  showsScrollIndicators?: boolean;
};

export const ScrollView = forwardRef<ScrollViewRef, ScrollViewProps>(
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
    const stateRef = useRef<State>({ lastTick: 0, scrolling: false });
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const mergedRef = useMergeRefs(innerRef, forwardedRef) as Ref<View>;

    const handleOnScroll = useCallback(
      (event: SyntheticEvent<UIEvent>) => {
        event.stopPropagation();

        // A scroll happened, so the scroll resets the scrollend timeout.
        if (timeoutRef.current != null) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          stateRef.current.scrolling = false;
          onScroll?.(normalizeScrollEvent(event));
        }, 100);

        if (shouldEmitScrollEvent(stateRef.current, scrollEventThrottle)) {
          stateRef.current.scrolling = true;
          stateRef.current.lastTick = Date.now();
          onScroll?.(normalizeScrollEvent(event));
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
