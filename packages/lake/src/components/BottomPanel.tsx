import { ReactNode, Suspense, useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { commonStyles } from "../constants/commonStyles";
import { backgroundColor, radii, shadows, spacings } from "../constants/design";
import { useBodyClassName } from "../hooks/useBodyClassName";
import { FocusTrap } from "./FocusTrap";
import { LoadingView } from "./LoadingView";
import { Portal } from "./Portal";
import { TransitionView } from "./TransitionView";

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
        transform: [{ translateY: 20 }],
      },
    },
    animationDuration: "300ms",
    animationTimingFunction: "ease-in-out",
  },
  modalLeave: {
    animationKeyframes: {
      "100%": {
        opacity: 0,
        transform: [{ translateY: 20 }],
      },
    },
    animationDuration: "300ms",
    animationTimingFunction: "ease-in-out",
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
    marginTop: spacings[32],
  },
  pressableOverlay: {
    ...StyleSheet.absoluteFillObject,
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

  useEffect(() => {
    const rootElement = document.createElement("div");
    document.body.append(rootElement);
    setRootElement(rootElement);
    return () => {
      rootElement.remove();
      setRootElement(undefined);
    };
  }, []);

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

              <View style={styles.modal}>{children}</View>
            </ScrollView>
          ) : null}
        </TransitionView>
      </Suspense>
    </Portal>
  );
};
