import { ReactNode, Suspense, useEffect, useMemo, useRef, useState } from "react";
import { PanResponder, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { commonStyles } from "../constants/commonStyles";
import { backgroundColor, colors, radii, shadows, spacings } from "../constants/design";
import { useBodyClassName } from "../hooks/useBodyClassName";
import { limitElastic } from "../utils/math";
import { FocusTrap } from "./FocusTrap";
import { LoadingView } from "./LoadingView";
import { Portal } from "./Portal";
import { TransitionView } from "./TransitionView";

const ELASTIC_LENGTH = 100; // the maximum value you can reach
const ELASTIC_STRENGTH = 0.008; // higher value, maximum value reached faster

const limitGrab = limitElastic({
  elasticLength: ELASTIC_LENGTH,
  elasticStrength: ELASTIC_STRENGTH,
});

const DELTA_Y_CLOSE_THRESHOLD = 100;
const SWIPE_CLOSE_VELOCITY = 0.5;

const BACKGROUND_COLOR = "rgba(0, 0, 0, 0.6)";

const styles = StyleSheet.create({
  fill: {
    ...StyleSheet.absoluteFillObject,
    position: "fixed",
    animationFillMode: "forwards",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: BACKGROUND_COLOR,
  },
  overlayEnter: {
    animationKeyframes: {
      "0%": { opacity: 0 },
    },
    animationDuration: "200ms",
    animationTimingFunction: "ease-in-out",
  },
  overlayLeave: {
    animationKeyframes: {
      "100%": { opacity: 0 },
    },
    animationDuration: "200ms",
    animationTimingFunction: "ease-in-out",
  },
  modalEnter: {
    animationKeyframes: {
      "0%": {
        opacity: 0,
        transform: "translateY(20px)",
      },
    },
    animationDuration: "300ms",
    animationTimingFunction: "ease-in-out",
  },
  modalLeave: {
    animationKeyframes: {
      "100%": {
        opacity: 0,
        transform: "translateY(20px)",
      },
    },
    animationDuration: "300ms",
    animationTimingFunction: "ease-in-out",
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    transitionDuration: "300ms",
    transitionProperty: "transform",
  },
  bottomCache: {
    position: "absolute",
    bottom: -ELASTIC_LENGTH + 1,
    width: "100%",
    height: ELASTIC_LENGTH,
    backgroundColor: backgroundColor.accented,
  },
  modalContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContentContainer: {
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  trap: {
    ...commonStyles.fill,
  },
  modal: {
    backgroundColor: backgroundColor.accented,
    borderTopLeftRadius: radii[8],
    borderTopRightRadius: radii[8],
    boxShadow: shadows.modal,
    alignSelf: "stretch",
  },
  pressableOverlay: {
    ...StyleSheet.absoluteFillObject,
    outlineWidth: 0,
    // make focus indicator invisible on iOS (outline: none doesn't work)
    opacity: 0,
  },
  grabContainer: {
    paddingHorizontal: 128,
    paddingVertical: spacings[12],
  },
  grabLine: {
    backgroundColor: colors.gray[100],
    height: 5,
    borderRadius: radii[4],
  },
});

type Props = {
  visible: boolean;
  onPressClose: () => void;
  children: ReactNode;
  returnFocus?: boolean;
};

export const BottomPanel = ({ visible, onPressClose, children, returnFocus = true }: Props) => {
  const [rootElement, setRootElement] = useState<Element | undefined>(() => undefined);
  const container = useRef<View | null>(null);

  useEffect(() => {
    const rootElement = document.createElement("div");
    document.body.append(rootElement);
    setRootElement(rootElement);
    return () => {
      rootElement.remove();
      setRootElement(undefined);
    };
  }, []);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          if (container.current instanceof HTMLElement) {
            container.current.style.transitionDuration = "0ms";
          }
        },
        onPanResponderMove: (_event, { dy }) => {
          const translateY = dy > 0 ? dy : -limitGrab(-dy);

          if (container.current instanceof HTMLElement) {
            container.current.style.transform = `translateY(${translateY}px)`;
          }
        },
        onPanResponderRelease: (_event, gestureState) => {
          if (container.current instanceof HTMLElement) {
            // @ts-expect-error
            container.current.style.transitionDuration = null;
          }

          const shouldClose =
            gestureState.dy > DELTA_Y_CLOSE_THRESHOLD || gestureState.vy > SWIPE_CLOSE_VELOCITY;
          if (shouldClose) {
            onPressClose();
          } else {
            if (container.current instanceof HTMLElement) {
              container.current.style.transform = `translateY(0px)`;
            }
          }
        },
      }),
    [onPressClose],
  );

  useBodyClassName("BottomPanelOpen", { enabled: visible });

  if (rootElement == null) {
    return null;
  }

  return (
    <Portal container={rootElement}>
      <TransitionView style={styles.fill} enter={styles.overlayEnter} leave={styles.overlayLeave}>
        {visible ? <View style={styles.overlay} /> : null}
      </TransitionView>

      <Suspense fallback={<LoadingView color={backgroundColor.accented} delay={0} />}>
        <TransitionView style={styles.fill} enter={styles.modalEnter} leave={styles.modalLeave}>
          {visible ? (
            <View ref={container} style={styles.container}>
              <ScrollView
                style={styles.modalContainer}
                contentContainerStyle={styles.modalContentContainer}
              >
                <FocusTrap
                  autoFocus={true}
                  focusLock={true}
                  returnFocus={returnFocus}
                  style={styles.trap}
                >
                  {onPressClose != null ? (
                    <Pressable onPress={onPressClose} style={styles.pressableOverlay} />
                  ) : null}
                </FocusTrap>

                <View style={styles.modal}>
                  <View style={styles.grabContainer} {...panResponder.panHandlers}>
                    <View style={styles.grabLine} />
                  </View>

                  {children}
                </View>
              </ScrollView>

              {/* use to expend white background on grab up */}
              <View style={styles.bottomCache} />
            </View>
          ) : null}
        </TransitionView>
      </Suspense>
    </Portal>
  );
};
