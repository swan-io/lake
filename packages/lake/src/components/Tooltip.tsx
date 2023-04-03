import {
  forwardRef,
  memo,
  ReactNode,
  ReactText,
  RefObject,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { StyleSheet, Text, View } from "react-native";
import { usePopper } from "react-popper";
import { colors } from "../constants/colors";
import { shadows } from "../constants/design";
import { typography } from "../constants/typography";
import { useHover } from "../hooks/useHover";
import { isNullish } from "../utils/nullish";
import { getRootElement, matchReferenceWidthModifier } from "../utils/popper";
import { Portal } from "./Portal";

const { matches: canHover } = window.matchMedia("(hover: hover)");

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
  },
  baseTop: {
    marginBottom: 8,
  },
  baseBottom: {
    marginTop: 8,
  },
  content: {
    padding: 8,
    backgroundColor: colors.white,
    color: colors.gray[80],
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.gray[10],
    boxShadow: shadows.modal,
  },
  text: {
    ...typography.bodySmall,
    fontWeight: typography.fontWeights.book,
    lineHeight: typography.lineHeights.input,
    color: colors.gray[80],
    textAlign: "center",
  },
  arrowContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    margin: "auto",
    width: 14,
    height: 10,
    overflow: "hidden",
  },
  arrowContainerTop: {
    bottom: -7,
  },
  arrowContainerBottom: {
    top: -7,
  },
  arrow: {
    position: "relative",
    top: -7,
    height: 14,
    width: 14,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray[10],
    transform: "rotate(45deg)",
  },
});

const isReactText = (node: ReactNode): node is ReactText =>
  ["string", "number"].includes(typeof node);

type Props = {
  children: ReactNode;
  describedBy?: string;
  matchReferenceWidth?: boolean;
  onHide?: () => void;
  onShow?: () => void;
  placement: "top" | "bottom"; // At the moment, we handle only those 2 placements
  referenceRef: RefObject<unknown>;
  width?: number;
  togglableOnFocus?: boolean;
};

export type TooltipRef = {
  show: () => void;
  hide: () => void;
};

export const Tooltip = memo(
  forwardRef<TooltipRef, Props>(
    (
      {
        children,
        describedBy,
        matchReferenceWidth = false,
        onHide,
        onShow,
        placement,
        referenceRef,
        width,
        togglableOnFocus = false,
      },
      forwardedRef,
    ) => {
      const rootElement = getRootElement(referenceRef.current as Element | null);
      const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
      const timeoutRef = useRef(0);
      const [visible, setVisible] = useState(false);
      const [, setMounted] = useState(false);

      useEffect(() => {
        setMounted(true);
      }, []);

      useImperativeHandle(forwardedRef, () => ({
        show: () => setVisible(true),
        hide: () => setVisible(false),
      }));

      useHover(referenceRef, {
        disabled: !canHover,
        contain: true,
        onHoverChange: nextVisible => {
          nextVisible ? onShow?.() : onHide?.();
          setVisible(nextVisible);
        },
      });

      const {
        attributes,
        update,
        styles: popperStyles,
        state,
      } = usePopper(referenceRef.current as Element | null, popperElement, {
        placement,
        modifiers: useMemo(
          () => [
            { name: "preventOverflow", enabled: true },
            { name: "flip", enabled: false },
            { name: "hide", enabled: true },
            { ...matchReferenceWidthModifier, enabled: matchReferenceWidth },
          ],
          [matchReferenceWidth],
        ),
      });

      const overflowOffset = state?.modifiersData.preventOverflow?.x ?? 0;

      useEffect(() => {
        const node = referenceRef.current;

        if (!(node instanceof Element)) {
          return;
        }

        const onFocus = (event: Event) => {
          event.preventDefault();
          setVisible(true);
        };

        const onBlur = (event: Event) => {
          event.preventDefault();
          const { target } = event;

          if (target instanceof Element && (node === target || node.contains(target))) {
            onHide?.();
            setVisible(false);
          }
        };

        const onPress = (event: Event) => {
          event.preventDefault();

          if (!canHover) {
            clearTimeout(timeoutRef.current);
            setVisible(true);

            timeoutRef.current = setTimeout(() => {
              setVisible(false);
            }, 1500) as unknown as number;
          }
        };

        if (togglableOnFocus) {
          node.addEventListener("focus", onFocus);
          node.addEventListener("blur", onBlur);
        }

        node.addEventListener("mousedown", onPress);

        return () => {
          if (togglableOnFocus) {
            node.removeEventListener("focus", onFocus);
            node.removeEventListener("blur", onBlur);
          }

          node.removeEventListener("mousedown", onPress);
        };
      }, [referenceRef, togglableOnFocus, setVisible, onHide]);

      useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
      }, []);

      useLayoutEffect(() => {
        void update?.();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [children]);

      if (isNullish(rootElement) || !visible) {
        return null;
      }

      return (
        <Portal container={rootElement}>
          <div
            ref={setPopperElement}
            style={popperStyles.popper}
            {...attributes.popper}
            role="tooltip"
            aria-describedby={describedBy}
          >
            <View
              style={[
                styles.base,
                state?.placement === "top" && styles.baseTop,
                state?.placement === "bottom" && styles.baseBottom,
              ]}
            >
              <View style={[styles.content, { width }]}>
                {isReactText(children) ? <Text style={styles.text}>{children}</Text> : children}
              </View>

              <View
                role="none"
                style={[
                  styles.arrowContainer,
                  state?.placement === "top" && styles.arrowContainerTop,
                  state?.placement === "bottom" && styles.arrowContainerBottom,
                  {
                    transform: `translateX(${-overflowOffset}px) rotate(${
                      state?.placement === "bottom" ? "180deg" : "0deg"
                    })`,
                  },
                ]}
              >
                <View style={styles.arrow} />
              </View>
            </View>
          </div>
        </Portal>
      );
    },
  ),
);
