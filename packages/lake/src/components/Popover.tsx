import { memo, ReactNode, RefObject, useCallback, useEffect, useRef, useState } from "react";
import {
  AnimationStyles,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { match, P } from "ts-pattern";
import {
  Animation,
  animations,
  backgroundColor,
  radii,
  shadows,
  spacings,
} from "../constants/design";
import { useContextualLayer } from "../hooks/useContextualLayer";
import { useResponsive } from "../hooks/useResponsive";
import { noop } from "../utils/function";
import { BottomPanel } from "./BottomPanel";
import { FocusTrap } from "./FocusTrap";
import { Portal } from "./Portal";
import { ScrollView } from "./ScrollView";
import { TransitionView } from "./TransitionView";

type Props = {
  children: ReactNode | ((state: { mode: "dropdown" | "panel" }) => ReactNode);
  id?: string;
  label?: string;
  role?: "listbox" | "combobox" | "dialog";
  describedBy?: string;
  matchReferenceWidth?: boolean;
  matchReferenceMinWidth?: boolean;
  onDismiss?: () => void;
  onEscapeKey?: () => void;
  referenceRef: RefObject<View | Text>;
  returnFocus?: boolean;
  autoFocus?: boolean;
  visible: boolean;
  underlay?: boolean;
  safetyMargin?: number;
  forcedMode?: "Dropdown" | "BottomPanel";
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    pointerEvents: "none",
  },
  defaultCursor: {
    cursor: "default",
  },
  underlay: {
    pointerEvents: "auto",
    cursor: "default",
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  popoverContainer: {
    position: "absolute",
    display: "flex",
  },
  popover: {
    pointerEvents: "auto",
    display: "flex",
    flexDirection: "column",
    backgroundColor: backgroundColor.accented,
    borderRadius: radii[8],
    marginVertical: spacings[8],
    overflow: "hidden",
    boxShadow: shadows.modal,
    flexGrow: 1,
    alignSelf: "stretch",
  },
  popoverContents: {
    alignItems: "stretch",
  },
});

const animation: Animation = {
  ...animations.fadeAndSlideInFromBottom,
  leave: [
    animations.fadeAndSlideInFromBottom.leave,
    { animationDuration: "100ms" },
  ] as unknown as AnimationStyles,
};

export const VIEWPORT_WIDTH_THRESHOLD = 600;

export const Popover = memo<Props>(
  ({
    children,
    id,
    label,
    role = "dialog",
    describedBy,
    matchReferenceWidth = false,
    matchReferenceMinWidth = false,
    onDismiss = noop,
    onEscapeKey = onDismiss,
    referenceRef,
    returnFocus = true,
    autoFocus = true,
    visible,
    underlay = true,
    forcedMode,
  }) => {
    const [rootElement, setRootElement] = useState<Element | null>(null);
    const underlayRef = useRef<View | null>(null);
    const { desktop } = useResponsive(VIEWPORT_WIDTH_THRESHOLD);

    const { position } = useContextualLayer({
      referenceRef,
      visible,
      matchReferenceWidth,
      matchReferenceMinWidth,
    });

    useEffect(() => {
      const element = underlayRef.current as unknown as HTMLElement | null;
      if (!visible && element != null) {
        element.style.pointerEvents = "none";
      }
    }, [visible]);

    useEffect(() => {
      const element = document.createElement("div");
      document.body.append(element);
      setRootElement(element);
      return () => {
        setRootElement(null);
        element.remove();
      };
    }, []);

    const onPressUnderlay = useCallback(
      (event: GestureResponderEvent) => {
        event.preventDefault();
        onDismiss();
      },
      [onDismiss],
    );

    const onClickOutside = useCallback(
      ({ target }: MouseEvent | TouchEvent) => {
        const ref = referenceRef.current;
        if (
          !(ref instanceof Element) ||
          !(target instanceof Element) ||
          (ref !== target && !ref.contains(target))
        ) {
          onDismiss();
        }
      },
      [referenceRef, onDismiss],
    );

    const onPress = useCallback((event: GestureResponderEvent) => {
      event.preventDefault();
    }, []);

    if (rootElement == null) {
      return null;
    }

    const mode = match(forcedMode)
      .with(P.nullish, () => (desktop ? "Dropdown" : "BottomPanel"))
      .with("BottomPanel", () => "BottomPanel" as const)
      .with("Dropdown", () => "Dropdown" as const)
      .exhaustive();

    if (mode === "BottomPanel") {
      return (
        <BottomPanel visible={visible} onPressClose={onDismiss} returnFocus={false}>
          {typeof children == "function" ? children({ mode: "panel" }) : children}
        </BottomPanel>
      );
    }

    return (
      <Portal container={rootElement}>
        {visible && underlay ? (
          <Pressable
            ref={underlayRef}
            style={styles.underlay}
            onPress={onPressUnderlay}
            aria-label="Close"
          />
        ) : null}

        <TransitionView style={styles.container} {...animation}>
          {position.isSome() ? (
            <View style={position.get().rootStyle}>
              <View
                style={[
                  styles.popoverContainer,
                  position.get().style,
                  {
                    alignItems: match(position.get().horizontalPosition)
                      .with("left", () => "flex-start" as const)
                      .with("center", () => "center" as const)
                      .with("right", () => "flex-end" as const)
                      .exhaustive(),
                  },
                ]}
              >
                <ScrollView
                  style={styles.popover}
                  contentContainerStyle={styles.popoverContents}
                  id={id}
                  role={role}
                  aria-describedby={describedBy}
                  aria-label={label}
                >
                  <FocusTrap
                    focusLock={true}
                    returnFocus={returnFocus}
                    autoFocus={autoFocus}
                    onEscapeKey={onEscapeKey}
                    onClickOutside={underlay ? undefined : onClickOutside}
                  >
                    <Pressable tabIndex={-1} onPress={onPress} style={styles.defaultCursor}>
                      {typeof children == "function" ? children({ mode: "dropdown" }) : children}
                    </Pressable>
                  </FocusTrap>
                </ScrollView>
              </View>
            </View>
          ) : null}
        </TransitionView>
      </Portal>
    );
  },
);
