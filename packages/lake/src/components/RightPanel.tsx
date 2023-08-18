import { ReactNode, Suspense, forwardRef, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { backgroundColor, breakpoints } from "../constants/design";
import { useBodyClassName } from "../hooks/useBodyClassName";
import { FocusTrap, FocusTrapRef } from "./FocusTrap";
import { LoadingView } from "./LoadingView";
import { Portal } from "./Portal";
import { Pressable } from "./Pressable";
import { Context, ResponsiveContainer } from "./ResponsiveContainer";
import { TransitionView } from "./TransitionView";

const BACKGROUND_COLOR = "rgba(0, 0, 0, 0.6)";

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
  },
  inert: {
    pointerEvents: "none",
  },
  fill: {
    ...StyleSheet.absoluteFillObject,
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
      "0%": { opacity: 0, transform: "translateZ(0px) translateX(100px)" },
    },
    animationDuration: "500ms",
    animationTimingFunction: "ease-in-out",
  },
  containerLeave: {
    animationKeyframes: {
      "100%": { opacity: 0, transform: "translateZ(0px) translateX(100px)" },
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
  fillMax: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    width: "100%",
  },
  fillMaxLarge: { maxWidth: 700 },
  contentsEnter: {
    animationKeyframes: {
      "0%": { transform: "translateZ(0px) translateX(25px)" },
    },
    animationDuration: "500ms",
    animationTimingFunction: "ease-in-out",
  },
  contentsLeave: {
    animationKeyframes: {
      "100%": { transform: "translateZ(0px) translateX(25px)" },
    },
    animationDuration: "500ms",
    animationTimingFunction: "ease-in-out",
  },
  contentsContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    transform: "translateZ(0px)",
    maxWidth: "100%",
    flexGrow: 1,
  },
  contents: {
    ...StyleSheet.absoluteFillObject,
    maxWidth: "100%",
    flexGrow: 1,
  },
});

export type RightPanelProps = {
  visible: boolean;
  children: ReactNode | ((context: Context) => ReactNode);
  onPressClose?: () => void;
};

const rootNode = document.querySelector("#full-page-layer-root") as Element;

export const RightPanel = forwardRef<FocusTrapRef, RightPanelProps>(
  ({ visible, children, onPressClose }: RightPanelProps, ref) => {
    const [delayedVisible, setDelayedVisible] = useState(visible);

    useEffect(() => {
      setDelayedVisible(visible);
    }, [visible]);

    useBodyClassName("RightPanelOpen", { enabled: visible });

    return (
      <Portal container={rootNode}>
        <View style={[styles.root, !visible && styles.inert]}>
          <ResponsiveContainer style={styles.root} breakpoint={breakpoints.small}>
            {({ large }) => (
              <>
                <TransitionView
                  style={styles.fill}
                  enter={styles.overlayEnter}
                  leave={styles.overlayLeave}
                >
                  {visible ? (
                    onPressClose != null ? (
                      <Pressable style={styles.overlay} onPress={onPressClose} />
                    ) : (
                      <View style={styles.overlay} />
                    )
                  ) : null}
                </TransitionView>

                <Suspense fallback={<LoadingView color={backgroundColor.accented} delay={0} />}>
                  <TransitionView
                    style={[styles.fillMax, large && styles.fillMaxLarge]}
                    enter={styles.containerEnter}
                    leave={styles.containerLeave}
                  >
                    {delayedVisible ? (
                      <FocusTrap
                        onEscapeKey={onPressClose}
                        focusLock={true}
                        autoFocus={true}
                        returnFocus={true}
                        ref={ref}
                        style={styles.container}
                      >
                        <TransitionView
                          style={styles.contentsContainer}
                          enter={styles.contentsEnter}
                          leave={styles.contentsLeave}
                        >
                          <View style={styles.contents}>
                            <View style={styles.contentsContainer}>
                              {typeof children == "function" ? (
                                <ResponsiveContainer
                                  style={styles.root}
                                  breakpoint={breakpoints.small}
                                >
                                  {children}
                                </ResponsiveContainer>
                              ) : (
                                children
                              )}
                            </View>
                          </View>
                        </TransitionView>
                      </FocusTrap>
                    ) : null}
                  </TransitionView>
                </Suspense>
              </>
            )}
          </ResponsiveContainer>
        </View>
      </Portal>
    );
  },
);
