import { RefObject, useCallback, useEffect, useRef } from "react";
import { isNotNullish, isNullish } from "../utils/nullish";

type Params = {
  containerRef: RefObject<unknown>;
  onClickOutside?: (event: MouseEvent | TouchEvent) => void;
  // The following prop is necessary for the cases where the user clicks on a focusable element
  // when leaving a popover, in order to prevent the focus from going back to the pressable that
  // initiated the layer to pop
  onFocusOutside?: (event: FocusEvent) => void;
};

export const useOutsideClick = ({ containerRef, onClickOutside, onFocusOutside }: Params) => {
  const hasTouchStartedRef = useRef(false);

  const isTargetInside = useCallback(
    (event: MouseEvent | TouchEvent | FocusEvent) => {
      const target = event.target as Element;
      // NOTE: Let's be careful with the `instanceof` check if we're ever to render a portal to another window
      return (
        isNotNullish(containerRef.current) &&
        containerRef.current instanceof HTMLElement &&
        containerRef.current.contains(target)
      );
    },
    [containerRef],
  );

  useEffect(() => {
    if (isNullish(onClickOutside)) {
      return;
    }

    const onTouchStart = (event: MouseEvent | TouchEvent) => {
      if (!isTargetInside(event)) {
        hasTouchStartedRef.current = true;
      }
    };

    const onTouchEnd = (event: MouseEvent | TouchEvent) => {
      if (!isTargetInside(event) && hasTouchStartedRef.current) {
        onClickOutside?.(event);
      }

      hasTouchStartedRef.current = false;
    };

    document.addEventListener("mousedown", onTouchStart, true);
    document.addEventListener("mouseup", onTouchEnd, true);
    document.addEventListener("touchstart", onTouchStart, true);
    document.addEventListener("touchend", onTouchEnd, true);

    return () => {
      document.removeEventListener("mousedown", onTouchStart, true);
      document.removeEventListener("mouseup", onTouchEnd, true);
      document.removeEventListener("touchstart", onTouchStart, true);
      document.removeEventListener("touchend", onTouchEnd, true);
    };
  }, [isTargetInside, onClickOutside]);

  useEffect(() => {
    if (isNullish(onFocusOutside)) {
      return;
    }

    const onFocusIn = (event: FocusEvent) => {
      if (!isTargetInside(event)) {
        onFocusOutside?.(event);
      }
    };

    // We use the `focusin` event so that we can intercept during the capturing phase
    // see: https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event
    document.addEventListener("focusin", onFocusIn, true);

    return () => {
      document.removeEventListener("focusin", onFocusIn, true);
    };
  }, [isTargetInside, onFocusOutside]);
};
