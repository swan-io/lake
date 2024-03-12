import {
  forwardRef,
  memo,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { match } from "ts-pattern";
import { colors, shadows, spacings } from "../constants/design";
import { useContextualLayer } from "../hooks/useContextualLayer";
import { useHover } from "../hooks/useHover";
import { isNotNullish, isNullishOrEmpty } from "../utils/nullish";
import { getRootElement } from "../utils/popper";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { LakeText } from "./LakeText";
import { Portal } from "./Portal";
import { Polygon, Svg } from "./Svg";

const { matches: canHover } = window.matchMedia("(hover: hover)");

const styles = StyleSheet.create({
  base: {
    position: "absolute",
    pointerEvents: "none",
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
  arrowBar: {
    paddingHorizontal: spacings[12],
  },
  arrowBarTop: {
    top: 1,
  },
  arrowBarBottom: {
    bottom: 1,
  },
  info: {
    flexGrow: 0,
  },
});

type Props = {
  children: ReactNode;
  content: ReactNode;
  describedBy?: string;
  matchReferenceWidth?: boolean;
  hideArrow?: boolean;
  onHide?: () => void;
  onShow?: () => void;
  placement?: "left" | "right" | "center";
  width?: number;
  togglableOnFocus?: boolean;
  containerStyle?: ViewProps["style"];
  disabled?: boolean;
};

export type TooltipRef = {
  show: () => void;
  hide: () => void;
};

export const LakeTooltip = forwardRef<TooltipRef, Props>(
  ({ content, children, ...rest }, forwardedRef) => {
    if (isNullishOrEmpty(content)) {
      return children;
    }

    return (
      <Tooltip ref={forwardedRef} content={content} {...rest}>
        {children}
      </Tooltip>
    );
  },
);

const Tooltip = memo(
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
        disabled = false,
      },
      forwardedRef,
    ) => {
      const timeoutRef = useRef(0);
      const [visible, setVisible] = useState(false);

      const { referenceRef, position } = useContextualLayer({
        placement,
        visible,
        matchReferenceWidth,
      });
      const rootElement = getRootElement(referenceRef.current as Element | null);

      useImperativeHandle(forwardedRef, () => ({
        show: () => setVisible(true),
        hide: () => setVisible(false),
      }));

      useHover(referenceRef, {
        disabled: !canHover,
        onHoverChange: nextVisible => {
          nextVisible ? onShow?.() : onHide?.();
          setVisible(nextVisible);
        },
      });

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

      return (
        <>
          <View ref={referenceRef} style={containerStyle}>
            {children}
          </View>

          {isNotNullish(rootElement) && position.isSome() && !disabled && (
            <Portal container={rootElement}>
              <View style={position.get().rootStyle}>
                <View
                  role="tooltip"
                  aria-describedby={describedBy}
                  style={[styles.base, position.get().style]}
                >
                  {position.get().verticalPosition === "bottom" ? (
                    <Box
                      direction="row"
                      justifyContent={match(position.get().horizontalPosition)
                        .with("left", () => "start" as const)
                        .with("center", () => "center" as const)
                        .with("right", () => "end" as const)
                        .exhaustive()}
                      style={[styles.arrowBar, styles.arrowBarTop]}
                    >
                      <Svg width={16} height={8} viewBox="0 0 16 8">
                        <Polygon
                          points="8 0 16 8 0 8"
                          fill={hideArrow ? "transparent" : colors.gray[900]}
                        />
                      </Svg>
                    </Box>
                  ) : null}

                  <View style={[styles.content, { width }]}>
                    {typeof content === "string" || typeof content === "number" ? (
                      <LakeText align="center" color={colors.gray.contrast}>
                        {content}
                      </LakeText>
                    ) : (
                      content
                    )}
                  </View>

                  {position.get().verticalPosition === "top" ? (
                    <Box
                      direction="row"
                      justifyContent={match(position.get().horizontalPosition)
                        .with("left", () => "start" as const)
                        .with("center", () => "center" as const)
                        .with("right", () => "end" as const)
                        .exhaustive()}
                      style={[styles.arrowBar, styles.arrowBarBottom]}
                    >
                      <Svg width={16} height={8} viewBox="0 0 16 8">
                        <Polygon
                          points="8 8 16 0 0 0"
                          fill={hideArrow ? "transparent" : colors.gray[900]}
                        />
                      </Svg>
                    </Box>
                  ) : null}
                </View>
              </View>
            </Portal>
          )}
        </>
      );
    },
  ),
);

export const InformationTooltip = forwardRef<TooltipRef, { text: string }>(
  ({ text }, forwardedRef) => (
    <LakeTooltip
      ref={forwardedRef}
      describedBy="copy"
      placement="right"
      togglableOnFocus={true}
      width={300}
      content={text}
    >
      <View style={styles.info}>
        <Icon name="info-regular" size={24} color={colors.gray[900]} />
      </View>
    </LakeTooltip>
  ),
);
