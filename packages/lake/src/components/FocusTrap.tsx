import {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { NativeSyntheticEvent, StyleProp, View, ViewStyle } from "react-native";
import { match } from "ts-pattern";
import { useInterval } from "../hooks/useInterval";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { getFocusableElements } from "../utils/a11y";
import { first, last } from "../utils/array";
import { isNotNullish } from "../utils/nullish";

type Props = {
  autoFocus: boolean;
  children: ReactNode;
  focusLock: boolean;
  onClickOutside?: (event: TouchEvent | MouseEvent) => void;
  onEscapeKey?: () => void;
  returnFocus: boolean;
  style?: StyleProp<ViewStyle>;
};

export type FocusTrapRef = {
  setInitiallyFocusedElement: (element: HTMLElement) => void;
};

let escapeListenerCount = 0;

export const FocusTrap = forwardRef<FocusTrapRef, Props>(
  (
    { children, focusLock, onClickOutside, onEscapeKey, returnFocus, style, autoFocus }: Props,
    ref,
  ) => {
    const containerRef = useRef<View | null>(null);
    const previouslyFocusedRef = useRef<HTMLElement | null>(null);
    const hasFocusedOutside = useRef(false);

    useImperativeHandle(ref, () => ({
      setInitiallyFocusedElement: element => (previouslyFocusedRef.current = element),
    }));

    const [initialEscapeListenerCount] = useState(escapeListenerCount);

    useEffect(() => {
      ++escapeListenerCount;
      return () => {
        --escapeListenerCount;
      };
    });

    // The reason we're listening to the capturing phase instead of the bubbling one is that React Native Web
    // uses a static preventDefault in its TextInput implementation, which we cannot control.
    // Listening to the bubbling phase catches the event before RNW has the opportunity to block.
    const onKeyDownCapture = useCallback(
      ({ nativeEvent }: NativeSyntheticEvent<React.KeyboardEvent>) => {
        match(nativeEvent.key)
          .with("Escape", () => {
            if (escapeListenerCount === initialEscapeListenerCount + 1) {
              onEscapeKey?.();
            }
          })
          .with("Tab", () => {
            if (!focusLock) {
              return;
            }

            const trapElement = containerRef.current as unknown as HTMLElement;

            if (isNotNullish(trapElement)) {
              const target = nativeEvent.target;
              const focusableElements = getFocusableElements(trapElement);
              const firstFocusableElement = first(focusableElements);
              const lastFocusableElement = last(focusableElements);

              if (target === firstFocusableElement && nativeEvent.shiftKey) {
                nativeEvent.preventDefault();
                lastFocusableElement?.focus();
              }

              if (target === lastFocusableElement && !nativeEvent.shiftKey) {
                nativeEvent.preventDefault();
                firstFocusableElement?.focus();
              }
            }
          })
          .otherwise(() => {});
      },
      [focusLock, onEscapeKey, initialEscapeListenerCount],
    );

    useEffect(() => {
      if (returnFocus) {
        previouslyFocusedRef.current = document.activeElement as HTMLElement;

        return () => {
          if (!hasFocusedOutside.current) {
            previouslyFocusedRef.current?.focus();
          }
        };
      }
    }, [returnFocus]);

    useInterval(id => {
      if (autoFocus) {
        const trapElement = containerRef.current as unknown as HTMLElement;

        if (isNotNullish(trapElement)) {
          if (trapElement.offsetWidth === 0) {
            return;
          }

          const focusableElements = getFocusableElements(trapElement);
          const firstFocusableElement = first(focusableElements);

          firstFocusableElement?.focus();
          window.clearInterval(id);
        }
      }
    }, 16);

    const onFocusOutside = useCallback(() => {
      hasFocusedOutside.current = true;
    }, []);

    useOutsideClick({
      containerRef,
      onClickOutside,
      onFocusOutside,
    });

    return (
      <View ref={containerRef} onKeyDownCapture={onKeyDownCapture} style={style}>
        {children}
      </View>
    );
  },
);
