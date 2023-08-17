import { ReactNode, Suspense, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { backgroundColor } from "../constants/design";
import { FocusTrap } from "./FocusTrap";
import { LoadingView } from "./LoadingView";
import { Portal } from "./Portal";
import { TransitionView } from "./TransitionView";

const BACKGROUND_COLOR = "rgba(0, 0, 0, 0.6)";

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
  },
  inert: {
    pointerEvents: "none",
  },
  fill: {
    ...StyleSheet.absoluteFillObject,
    animationFillMode: "forwards",
    overflow: "hidden",
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
  containerEnter: {
    animationKeyframes: {
      "0%": { opacity: 0, transform: "translateZ(0px) translateX(200px)" },
    },
    animationDuration: "500ms",
    animationTimingFunction: "ease-in-out",
  },
  containerLeave: {
    animationKeyframes: {
      "100%": { opacity: 0, transform: "translateZ(0px) translateX(200px)" },
    },
    animationDuration: "500ms",
    animationTimingFunction: "ease-in-out",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: BACKGROUND_COLOR,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    transform: "translateZ(0px)",
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: backgroundColor.default,
  },
  contentsEnter: {
    animationKeyframes: {
      "0%": { transform: "translateZ(0px) translateX(50px)" },
    },
    animationDuration: "500ms",
    animationTimingFunction: "ease-in-out",
  },
  contentsLeave: {
    animationKeyframes: {
      "100%": { transform: "translateZ(0px) translateX(50px)" },
    },
    animationDuration: "500ms",
    animationTimingFunction: "ease-in-out",
  },
  contentsContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    transform: "translateZ(0px)",
    maxWidth: "100%",
  },
  contents: {
    ...StyleSheet.absoluteFillObject,
    maxWidth: "100%",
  },
});

export type FullViewportLayerProps = {
  visible: boolean;
  children: ReactNode;
};

const rootNode = document.querySelector("#full-page-layer-root") as Element;

export const FullViewportLayer = ({ visible, children }: FullViewportLayerProps) => {
  const [delayedVisible, setDelayedVisible] = useState(visible);

  useEffect(() => {
    setDelayedVisible(visible);
  }, [visible]);

  return (
    <Portal container={rootNode}>
      <View style={[styles.root, !visible && styles.inert]}>
        <TransitionView style={styles.fill} enter={styles.overlayEnter} leave={styles.overlayLeave}>
          {visible ? <View style={styles.overlay} /> : null}
        </TransitionView>

        <Suspense fallback={<LoadingView color={backgroundColor.accented} delay={0} />}>
          <TransitionView
            style={styles.fill}
            enter={styles.containerEnter}
            leave={styles.containerLeave}
          >
            {delayedVisible ? (
              <FocusTrap
                focusLock={true}
                autoFocus={true}
                returnFocus={true}
                style={styles.container}
              >
                <TransitionView
                  style={styles.contentsContainer}
                  enter={styles.contentsEnter}
                  leave={styles.contentsLeave}
                >
                  <View style={styles.contents}>
                    <View style={styles.contentsContainer}>{children}</View>
                  </View>
                </TransitionView>
              </FocusTrap>
            ) : null}
          </TransitionView>
        </Suspense>
      </View>
    </Portal>
  );
};
