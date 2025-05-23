import { Ref, SyntheticEvent, UIEvent, useCallback, useImperativeHandle, useRef } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

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
  both: {
    flexDirection: "column",
    overflowX: "auto",
    overflowY: "auto",
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
  element: HTMLElement | null;
  scrollTo: (event: { x?: number; y?: number; animated?: boolean }) => void;
};

type State = {
  lastTick: number;
  scrolling: boolean;
};

const shouldEmitScrollEvent = (state: State, eventThrottle: number) =>
  !state.scrolling || (eventThrottle > 0 && Date.now() - state.lastTick >= eventThrottle);

export type ScrollViewProps = ViewProps & {
  ref?: Ref<ScrollViewRef>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  horizontal?: boolean;
  both?: boolean;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  scrollEventThrottle?: number;
  showsScrollIndicators?: boolean;
};

export const ScrollView = ({
  ref,
  children,
  contentContainerStyle,
  horizontal = false,
  both = false,
  onScroll,
  scrollEventThrottle = 16,
  showsScrollIndicators = true,
  style,
  ...viewProps
}: ScrollViewProps) => {
  const innerRef = useRef<HTMLElement>(null);
  const stateRef = useRef<State>({ lastTick: 0, scrolling: false });
  const timeoutRef = useRef<NodeJS.Timeout>(null);

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

  useImperativeHandle(ref, () => ({
    element: innerRef.current,
    scrollTo,
  }));

  return (
    <View
      {...viewProps}
      ref={innerRef as Ref<View>}
      onScroll={handleOnScroll}
      style={[
        styles.base,
        style,
        horizontal && styles.horizontal,
        both && styles.both,
        !showsScrollIndicators && styles.hideScrollbars,
      ]}
    >
      <View style={[horizontal && styles.contentHorizontal, contentContainerStyle]}>
        {children}
      </View>
    </View>
  );
};
