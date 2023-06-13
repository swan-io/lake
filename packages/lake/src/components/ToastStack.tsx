import { memo, useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { match } from "ts-pattern";
import { ColorVariants, animations, colors, shadows } from "../constants/design";
import { ToastVariant, hideToast, useToasts } from "../state/toasts";
import { isNullish } from "../utils/nullish";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { LakeText } from "./LakeText";
import { Portal } from "./Portal";
import { Pressable } from "./Pressable";
import { Space } from "./Space";
import { TransitionGroupView } from "./TransitionGroupView";

const styles = StyleSheet.create({
  list: {
    position: "absolute",
    right: 0,
    bottom: 0,
    maxHeight: "100%",
    maxWidth: 400,
    paddingVertical: 8,
    width: "100%",
    zIndex: 10,
  },
  toastWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  toast: {
    padding: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderLeftWidth: 4,
    overflow: "hidden",
    boxShadow: shadows.modal,
  },
  contentContainer: {
    paddingRight: 36, // 24 for close button + 12 for spacing
  },
  closeButton: {
    zIndex: 1,
    position: "absolute",
    width: 24,
    height: 24,
    right: 24,
    top: 0,
    bottom: 0,
    margin: "auto",
  },
  progressBar: {
    height: 2,
    transformOrigin: "left",
  },
});

type ToastProps = {
  variant: ToastVariant;
  uid: string;
  title: string;
  description?: string;
  progress?: Animated.Value;
  onClose: (uid: string) => void;
};

const Toast = memo<ToastProps>(({ variant, uid, title, description, progress, onClose }) => {
  const progressBarRef = useRef<View>(null);

  const colorVariation = match(variant)
    .returnType<ColorVariants>()
    .with("success", () => "positive")
    .with("error", () => "negative")
    .with("info", () => "shakespear")
    .with("warning", () => "warning")
    .exhaustive();

  useEffect(() => {
    if (isNullish(progress)) {
      return;
    }

    const id = progress.addListener(({ value }) => {
      if (progressBarRef.current instanceof HTMLElement) {
        progressBarRef.current.style.transform = `scaleX(${value})`;
      }
    });

    return () => progress.removeListener(id);
  }, [progress]);

  return (
    <View style={styles.toastWrapper}>
      <View
        style={[
          styles.toast,
          {
            borderColor: colors[colorVariation][200],
            borderLeftColor: colors[colorVariation][500],
            backgroundColor: colors[colorVariation][0],
          },
        ]}
      >
        <Box style={styles.contentContainer}>
          <Box direction="row" alignItems="center">
            {match(variant)
              .with("success", () => (
                <Icon
                  name="checkmark-circle-regular"
                  size={20}
                  color={colors[colorVariation][700]}
                />
              ))
              .with("error", () => (
                <Icon name="dismiss-circle-regular" size={20} color={colors[colorVariation][700]} />
              ))
              .with("info", () => (
                <Icon name="info-regular" size={20} color={colors[colorVariation][700]} />
              ))
              .with("warning", () => (
                <Icon name="warning-regular" size={20} color={colors[colorVariation][700]} />
              ))
              .exhaustive()}

            <Space width={12} />

            <LakeText variant="regular" color={colors[colorVariation][700]}>
              {title}
            </LakeText>
          </Box>

          {description != null && (
            <>
              <Space height={8} />

              <LakeText variant="smallRegular" color={colors.gray[700]}>
                {description}
              </LakeText>
            </>
          )}
        </Box>

        <Pressable onPress={() => onClose(uid)} style={styles.closeButton}>
          <Icon name="lake-close" size={24} color={colors.gray[500]} />
        </Pressable>

        {progress != null && (
          <>
            <Space height={24} />

            <View
              ref={progressBarRef}
              role="progressbar"
              style={[styles.progressBar, { backgroundColor: colors[colorVariation][500] }]}
            />
          </>
        )}
      </View>
    </View>
  );
});

export const ToastStack = () => {
  const toasts = useToasts();

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

  if (rootElement == null) {
    return null;
  }

  return (
    <Portal container={rootElement}>
      <TransitionGroupView
        style={styles.list}
        enter={animations.fadeAndSlideInFromRight.enter}
        leave={animations.fadeAndSlideInFromRight.leave}
      >
        {toasts.map(toast => (
          <Toast
            key={toast.uid}
            uid={toast.uid}
            variant={toast.variant}
            progress={toast.progress}
            title={toast.title}
            description={toast.description}
            onClose={hideToast}
          />
        ))}
      </TransitionGroupView>
    </Portal>
  );
};
