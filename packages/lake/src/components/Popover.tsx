import { memo, ReactNode, RefObject, useCallback, useEffect, useRef, useState } from "react";
import {
  AnimationStyles,
  GestureResponderEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { match, P } from "ts-pattern";
import { Animation, animations, backgroundColor, radii, shadows } from "../constants/design";
import { useResponsive } from "../hooks/useResponsive";
import { noop } from "../utils/function";
import { BottomPanel } from "./BottomPanel";
import { FocusTrap } from "./FocusTrap";
import { Portal } from "./Portal";
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
  referenceRef: RefObject<unknown>;
  returnFocus?: boolean;
  autoFocus?: boolean;
  visible: boolean;
  underlay?: boolean;
  safetyMargin?: number;
  forcedMode?: "Dropdown" | "BottomPanel";
  field?: boolean;
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    pointerEvents: "none",
  },
  contents: {
    ...StyleSheet.absoluteFillObject,
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
  popover: {
    pointerEvents: "auto",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    backgroundColor: backgroundColor.accented,
    borderRadius: radii[8],
    marginVertical: 4,
    overflow: "hidden",
    boxShadow: shadows.modal,
  },
  popoverContents: {
    alignItems: "stretch",
  },
});

type ViewportInformation = {
  availableSpaceAbove: number;
  availableSpaceBelow: number;
  availableSpaceBefore: number;
  availableSpaceAfter: number;
  top: number;
  bottom: number;
  left: number;
  right: number;
  availableHeight: number;
  width: number;
};

const DEFAULT_VIEWPORT_INFORMATION = {
  availableSpaceAbove: 0,
  availableSpaceBelow: 0,
  availableSpaceBefore: 0,
  availableSpaceAfter: 0,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  availableHeight: 0,
  width: 0,
};

const FLEX_END = "flex-end";
const FLEX_START = "flex-start";

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
    safetyMargin = 8,
    forcedMode,
    field = false,
  }) => {
    const [rootElement, setRootElement] = useState<Element | null>(null);
    const underlayRef = useRef<View | null>(null);
    const { desktop } = useResponsive(VIEWPORT_WIDTH_THRESHOLD);

    const [
      {
        availableSpaceAbove,
        availableSpaceBelow,
        availableSpaceBefore,
        availableSpaceAfter,
        top,
        bottom,
        left,
        right,
        availableHeight,
        width,
      },
      setViewportInformation,
    ] = useState<ViewportInformation>(DEFAULT_VIEWPORT_INFORMATION);

    useEffect(() => {
      const element = referenceRef.current as HTMLElement | null;
      if (element != null && visible) {
        const rect = element.getBoundingClientRect();
        const availableSpaceAbove = rect.top;
        const availableSpaceBelow = window.innerHeight - rect.bottom;
        const visualViewportOffsetTop = window.visualViewport?.offsetTop ?? 0;
        setViewportInformation({
          availableSpaceAbove,
          availableSpaceBelow,
          availableSpaceBefore: rect.left,
          availableSpaceAfter: window.innerWidth - rect.right,
          top: visualViewportOffsetTop + Math.max(rect.bottom, safetyMargin),
          bottom: Math.max(window.innerHeight - rect.top, safetyMargin),
          left: Math.max(rect.left, safetyMargin),
          right: Math.max(window.innerWidth - rect.right, safetyMargin),
          availableHeight:
            field || availableSpaceAbove <= availableSpaceBelow
              ? window.innerHeight - rect.top - (rect.bottom - rect.top) - 20
              : availableSpaceAbove - 20,
          width: rect.right - rect.left,
        });
      }
    }, [safetyMargin, referenceRef, visible, field]);

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
        <TransitionView style={styles.container} {...animation}>
          {visible ? (
            <View style={styles.contents}>
              {underlay ? (
                <Pressable
                  ref={underlayRef}
                  style={styles.underlay}
                  onPress={onPressUnderlay}
                  aria-label="Close"
                />
              ) : null}

              {availableHeight > 0 ? (
                <ScrollView
                  style={[
                    styles.popover,
                    (field || availableSpaceAbove <= availableSpaceBelow) && { top },
                    !field && availableSpaceAbove > availableSpaceBelow && { bottom },
                    availableSpaceBefore <= availableSpaceAfter && { left },
                    availableSpaceBefore > availableSpaceAfter && { right },

                    matchReferenceMinWidth && { minWidth: width },
                    matchReferenceWidth && { width },
                    { maxHeight: field ? undefined : availableHeight },
                  ]}
                  contentContainerStyle={[
                    styles.popoverContents,
                    {
                      justifyContent:
                        !field && availableSpaceAbove > availableSpaceBelow ? FLEX_END : FLEX_START,
                    },
                  ]}
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
              ) : null}
            </View>
          ) : null}
        </TransitionView>
      </Portal>
    );
  },
);
