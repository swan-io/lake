import { Option } from "@swan-io/boxed";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { Text, View, ViewStyle } from "react-native";
import { match } from "ts-pattern";

export type ElementPosition = {
  availableSpaceAbove: number;
  availableSpaceBelow: number;
  availableSpaceBefore: number;
  availableSpaceAfter: number;
  top: number;
  bottom: number;
  left: number;
  right: number;
  availableHeight: number;
  availableWidth: number;
  width: number;
  height: number;
};

type Placement = "left" | "center" | "right";

type Config = {
  placement?: Placement;
  visible: boolean;
  matchReferenceWidth?: boolean;
  matchReferenceMinWidth?: boolean;
  referenceRef?: RefObject<View | Text | null>;
};

export type ContextualLayerPosition = {
  rootStyle: ViewStyle;
  style: ViewStyle;
  verticalPosition: "top" | "bottom";
  horizontalPosition: "left" | "center" | "right";
};

type ContextualLayerConfig = {
  referenceRef: RefObject<View | Text | null>;
  position: Option<ContextualLayerPosition>;
};

const MAX_OFFSET_FOR_CENTER_PLACEMENT = 100;

export const useContextualLayer = ({
  placement,
  visible,
  matchReferenceWidth = false,
  matchReferenceMinWidth = false,
  referenceRef: externalReferenceRef,
}: Config): ContextualLayerConfig => {
  const referenceRef = useRef<View | Text>(null);

  const usedRef = externalReferenceRef ?? referenceRef;

  const [position, setPosition] = useState<Option<ContextualLayerPosition>>(Option.None());

  const getPosition = useCallback(() => {
    if (usedRef.current == null) {
      return Option.None();
    }
    const element = usedRef.current as unknown as HTMLElement;
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    const availableSpaceAbove = rect.top;
    const availableSpaceBelow = viewportHeight - rect.bottom;

    const availableSpaceBefore = rect.left;
    const availableSpaceAfter = viewportWidth - rect.right;

    const height = rect.bottom - rect.top;
    const width = rect.right - rect.left;

    const isCenteredEnough =
      Math.abs(availableSpaceBefore - availableSpaceAfter) < MAX_OFFSET_FOR_CENTER_PLACEMENT;
    const inferedPlacement =
      placement ??
      (isCenteredEnough
        ? ("center" as const)
        : availableSpaceBefore > availableSpaceAfter
          ? ("right" as const)
          : ("left" as const));

    const verticalPosition =
      availableSpaceAbove > availableSpaceBelow
        ? {
            maxHeight: availableSpaceAbove,
            bottom: viewportHeight - rect.top,
          }
        : {
            maxHeight: availableSpaceBelow,
            top: rect.top + height,
          };

    const horizontalPosition = match(inferedPlacement)
      .with("left", () => ({ left: rect.left }))
      .with("right", () => ({ right: window.innerWidth - rect.right }))
      .with("center", () => ({ left: rect.left + width / 2, transform: "translateX(-50%)" }))
      .exhaustive();

    const maxHeight =
      availableSpaceAbove <= availableSpaceBelow
        ? window.innerHeight - rect.top - height
        : availableSpaceAbove;

    const rootStyle: ViewStyle = {
      position: "absolute",
      top: window.scrollY,
      left: 0,
      width: "100vw",
      height: "100vh",
      pointerEvents: "none",
    };

    const style: ViewStyle = {
      ...verticalPosition,
      ...horizontalPosition,
      maxHeight,
      ...(matchReferenceWidth === true ? { width } : undefined),
      ...(matchReferenceMinWidth === true ? { minWidth: width } : undefined),
      pointerEvents: "auto",
    };

    return Option.Some({
      rootStyle,
      horizontalPosition: inferedPlacement,
      verticalPosition:
        availableSpaceAbove > availableSpaceBelow ? ("top" as const) : ("bottom" as const),
      style,
    });
  }, [placement, matchReferenceWidth, matchReferenceMinWidth, usedRef]);

  useEffect(() => {
    if (visible) {
      setPosition(getPosition());
      const tick = () => {
        setPosition(getPosition());
        animationFrame = requestAnimationFrame(tick);
      };
      let animationFrame = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(animationFrame);
    } else {
      setPosition(Option.None());
    }
  }, [visible, getPosition]);

  return {
    referenceRef: usedRef,
    position,
  };
};
