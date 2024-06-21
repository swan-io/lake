import { Array, Option } from "@swan-io/boxed";
import { t } from "@swan-io/shared-business/src/utils/i18n";
import { memo, useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { P, match } from "ts-pattern";
import { ColorVariants, animations, colors, shadows } from "../constants/design";
import {
  ToastProgress,
  ToastVariant,
  getErrorToRequestId,
  hideToast,
  useToasts,
} from "../state/toasts";
import { setClipboardText } from "../utils/clipboard";
import { isNotNullishOrEmpty, isNullish } from "../utils/nullish";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { LakeText } from "./LakeText";
import { LakeTooltip } from "./LakeTooltip";
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
  copyTooltip: {
    alignSelf: "flex-start",
  },
  copyButton: {
    alignItems: "center",
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 1,
  },
});

type ToastProps = {
  variant: ToastVariant;
  uid: string;
  title: string;
  description?: string;
  error?: unknown;
  progress?: ToastProgress;
  onClose: (uid: string) => void;
};

const errorsToArray = (errors: unknown): Error[] => {
  const asArray = Array.isArray(errors) ? errors : [errors];
  return Array.filterMap(asArray, error =>
    error instanceof Error ? Option.Some(error) : Option.None(),
  );
};

const Toast = memo<ToastProps>(({ variant, uid, title, description, error, progress, onClose }) => {
  const progressBarRef = useRef<View>(null);
  const [visibleState, setVisibleState] = useState<"copy" | "copied">("copy");
  const hasDescription = isNotNullishOrEmpty(description);

  const [requestId] = useState<Option<string>>(() => {
    if (error == undefined) {
      return Option.None();
    }
    return Array.findMap(errorsToArray(error), error =>
      Option.fromNullable(getErrorToRequestId().get(error)),
    );
  });

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

    return progress.subscribe(value => {
      if (progressBarRef.current instanceof HTMLElement) {
        progressBarRef.current.style.transform = `scaleX(${value})`;
      }
    });
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

          {hasDescription && (
            <>
              <Space height={8} />

              <LakeText variant="smallRegular" color={colors.gray[700]}>
                {description}
              </LakeText>
            </>
          )}

          {match(requestId)
            .with(Option.P.None, () => null)
            .with(Option.P.Some(P.select()), requestId => (
              <>
                <Space height={hasDescription ? 4 : 8} />

                <LakeTooltip
                  describedBy="copy"
                  onHide={() => setVisibleState("copy")}
                  togglableOnFocus={true}
                  placement="center"
                  containerStyle={styles.copyTooltip}
                  content={
                    visibleState === "copy"
                      ? t("copyButton.copyTooltip")
                      : t("copyButton.copiedTooltip")
                  }
                >
                  <Pressable
                    style={styles.copyButton}
                    onPress={event => {
                      event.stopPropagation();
                      event.preventDefault();
                      setClipboardText(requestId ?? "");
                      setVisibleState("copied");
                    }}
                  >
                    <Icon color={colors.gray[700]} size={14} name="copy-regular" />
                    <Space width={4} />

                    <LakeText numberOfLines={1} variant="smallRegular" color={colors.gray[700]}>
                      ID: {requestId}
                    </LakeText>
                  </Pressable>
                </LakeTooltip>
              </>
            ))
            .exhaustive()}
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
            title={toast.title}
            description={toast.description}
            error={toast.error}
            progress={toast.progress}
            onClose={hideToast}
          />
        ))}
      </TransitionGroupView>
    </Portal>
  );
};
