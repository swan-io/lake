import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { ScrollView, ScrollViewProps, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  track: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 3,
  },
  marker: {
    pointerEvents: "none",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 3,
  },
  trackIndicator: {
    width: 3,
    height: 1,
    position: "absolute",
    right: 0,
    transformOrigin: "right top",
    transition: "150ms ease-in-out",
    transitionProperty: "transform, background-color",
  },
});

type Track = { color: string; element: View };

const Context = createContext((_: Track) => {});

type Props = {
  style?: ScrollViewProps["style"];
  contentContainerStyle?: ScrollViewProps["style"];
  children: ScrollViewProps["children"];
};

type Layout = { color: string; top: number; height: number };

// using `offsetTop` and `offsetHeight` here to avoid calculations
// being wrong when ancestor has as CSS transform applied
const getCoordinates = (element: HTMLElement, guide: HTMLElement) => {
  const offsetHeight = element.offsetHeight;
  const guideParent = guide.parentElement;

  if (guideParent == null || !guideParent.contains(element)) {
    return { top: 0, height: offsetHeight };
  }
  let offsetTop = 0;
  let currentElement: HTMLElement | null = element;
  while (currentElement != null && currentElement != guideParent) {
    offsetTop += currentElement.offsetTop;
    currentElement = currentElement.offsetParent as HTMLElement | null;
  }

  return { top: offsetTop, height: offsetHeight };
};

export const SidebarNavigationTracker = ({ style, contentContainerStyle, children }: Props) => {
  const [track, setTrackRaw] = useState<Layout | null>(null);
  const trackRef = useRef<View | null>(null);
  const lastElementRef = useRef<View | null>(null);

  const setTrack = useCallback(({ color, element }: Track) => {
    if (trackRef.current != null) {
      lastElementRef.current = element;
      const { top, height } = getCoordinates(
        element as unknown as HTMLElement,
        trackRef.current as unknown as HTMLElement,
      );
      setTrackRaw({
        color,
        top,
        height,
      });
    }
  }, []);

  const onLayout = useCallback(() => {
    if (lastElementRef.current != null && track?.color != null) {
      const { top, height } = getCoordinates(
        lastElementRef.current as unknown as HTMLElement,
        trackRef.current as unknown as HTMLElement,
      );
      setTrackRaw({
        color: track?.color,
        top,
        height,
      });
    }
  }, [track]);

  return (
    <Context.Provider value={setTrack}>
      <ScrollView
        scrollEventThrottle={30}
        onLayout={onLayout}
        style={style}
        contentContainerStyle={contentContainerStyle}
        role="banner"
      >
        {children}

        <View style={styles.track} ref={trackRef}>
          {track != null ? (
            <View
              style={[
                styles.trackIndicator,
                {
                  transform: `translateY(${track.top}px) scaleY(${track.height})`,
                  backgroundColor: track.color,
                },
              ]}
            />
          ) : null}
        </View>
      </ScrollView>
    </Context.Provider>
  );
};

type MarkerProps = {
  color: string;
};

export const SidebarNavigationTrackerActiveMarker = ({ color }: MarkerProps) => {
  const setLayoutReference = useContext(Context);
  const elementRef = useRef<View | null>(null);

  const onLayout = useCallback(() => {
    if (elementRef.current != null) {
      setLayoutReference({ color, element: elementRef.current });
    }
  }, [setLayoutReference, color]);

  useEffect(() => {
    if (elementRef.current != null) {
      setLayoutReference({ color, element: elementRef.current });
    }
  }, [setLayoutReference, color]);

  return <View ref={elementRef} onLayout={onLayout} style={styles.marker} />;
};
