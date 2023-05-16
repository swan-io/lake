import {
  forwardRef,
  memo,
  ReactNode,
  ReactText,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { usePopper } from "react-popper";
import { match } from "ts-pattern";
import { colors, shadows } from "../constants/design";
import { useHover } from "../hooks/useHover";
import { isNullish } from "../utils/nullish";
import { getRootElement, matchReferenceWidthModifier } from "../utils/popper";
import { Icon } from "./Icon";
import { LakeText } from "./LakeText";
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
  baseRight: {
    marginLeft: 8,
  },
  baseLeft: {
    marginRight: 8,
  },
  content: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.gray[900],
    color: colors.gray.contrast,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.gray[900],
    boxShadow: shadows.modal,
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
  arrowContainerHorizontal: {
    position: "absolute",
    top: 0,
    bottom: 0,
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
  arrowContainerRight: {
    left: -7,
  },
  arrowContainerLeft: {
    right: -7,
  },
  arrow: {
    position: "relative",
    top: -7,
    height: 14,
    width: 14,
    backgroundColor: colors.gray[900],
    borderWidth: 1,
    borderColor: colors.gray[900],
    transform: "rotate(45deg)",
  },
  info: {
    flexGrow: 0,
  },
});

const isReactText = (node: ReactNode): node is ReactText =>
  ["string", "number"].includes(typeof node);

type Props = {
  children: ReactNode;
  content: ReactNode;
  describedBy?: string;
  matchReferenceWidth?: boolean;
  hideArrow?: boolean;
  onHide?: () => void;
  onShow?: () => void;
  placement: "left" | "top" | "bottom" | "right";
  width?: number;
  togglableOnFocus?: boolean;
  containerStyle?: ViewStyle;
  showTooltip?: boolean;
};

type TooltipRef = {
  show: () => void;
  hide: () => void;
};

const MAX_WIDTH = "calc(100vw - 20px)";

export const LakeTooltip = memo(
  forwardRef<TooltipRef, Props>(
    (
      {
        children,
        content,
        describedBy,
        matchReferenceWidth = false,
        hideArrow = false,
        onHide,
        onShow,
        placement,
        width,
        togglableOnFocus = false,
        containerStyle,
        showTooltip = false,
      },
      forwardedRef,
    ) => {
      const referenceRef = useRef<View | null>(null);
      const rootElement = getRootElement(referenceRef.current as Element | null);
      const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
      const timeoutRef = useRef(0);
      const [visible, setVisible] = useState(false);

      useImperativeHandle(forwardedRef, () => ({
        show: () => setVisible(true),
        hide: () => setVisible(false),
      }));

      useHover(referenceRef, {
        disabled: showTooltip || !canHover,
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
            { name: "preventOverflow", enabled: true, options: { padding: 10 } },
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
          node.addEventListener("focusin", onFocus);
          node.addEventListener("focusout", onBlur);
        }

        node.addEventListener("mousedown", onPress);

        return () => {
          if (togglableOnFocus) {
            node.removeEventListener("focusin", onFocus);
            node.removeEventListener("focusout", onBlur);
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
      }, [content]);

      return (
        <>
          <View ref={referenceRef} style={containerStyle}>
            {children}
          </View>

          {isNullish(rootElement) || !visible ? null : (
            <Portal container={rootElement}>
              <div
                ref={setPopperElement}
                style={{ ...popperStyles.popper, maxWidth: MAX_WIDTH }}
                {...attributes.popper}
                role="tooltip"
                aria-describedby={describedBy}
              >
                <View
                  style={[
                    styles.base,
                    state?.placement === "top" && styles.baseTop,
                    state?.placement === "bottom" && styles.baseBottom,
                    state?.placement === "right" && styles.baseRight,
                    state?.placement === "left" && styles.baseLeft,
                  ]}
                >
                  <View style={[styles.content, { width, maxWidth: MAX_WIDTH }]}>
                    {isReactText(content) ? (
                      <LakeText align="center" color={colors.gray.contrast}>
                        {content}
                      </LakeText>
                    ) : (
                      content
                    )}
                  </View>

                  {!hideArrow && (
                    <View
                      role="none"
                      style={[
                        state?.placement === "right" || state?.placement === "left"
                          ? styles.arrowContainerHorizontal
                          : styles.arrowContainer,
                        state?.placement === "top" && styles.arrowContainerTop,
                        state?.placement === "bottom" && styles.arrowContainerBottom,
                        state?.placement === "right" && styles.arrowContainerRight,
                        state?.placement === "left" && styles.arrowContainerLeft,
                        {
                          transform: `translateX(${-overflowOffset}px) rotate(${match(
                            state?.placement,
                          )
                            .with("bottom", () => "180deg")
                            .with("left", () => "-90deg")
                            .with("right", () => "90deg")
                            .otherwise(() => "0deg")})`,
                        },
                      ]}
                    >
                      <View style={styles.arrow} />
                    </View>
                  )}
                </View>
              </div>
            </Portal>
          )}
        </>
      );
    },
  ),
);

export const InformationTooltip = ({ text }: { text: string }) => (
  <LakeTooltip
    describedBy="copy"
    placement="bottom"
    togglableOnFocus={true}
    width={300}
    content={text}
  >
    <View style={styles.info}>
      <Icon name="info-regular" size={24} color={colors.gray[900]} />
    </View>
  </LakeTooltip>
);
