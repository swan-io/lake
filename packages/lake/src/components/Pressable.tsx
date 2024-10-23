// https://github.com/necolas/react-native-web/blob/0.19.1/packages/react-native-web/src/exports/Pressable/index.js

import {
  ComponentType,
  FC,
  forwardRef,
  memo,
  ReactNode,
  Ref,
  useCallback,
  useMemo,
  useRef,
} from "react";
import {
  HrefAttrs,
  NativeSyntheticEvent,
  PressableProps,
  PressableStateCallbackType,
  StyleSheet,
  Text,
  TextInputProps,
  TextProps,
  View,
  ViewProps,
} from "react-native";
import { match } from "ts-pattern";
import { Except, Merge } from "type-fest";
import { useForceableState } from "../hooks/useForceableState";
import { useHover } from "../hooks/useHover";
import { useMergeRefs } from "../hooks/useMergeRefs";
import { PressResponderConfig, usePressEvents } from "../hooks/usePressEvents";

const styles = StyleSheet.create({
  active: {
    cursor: "pointer",
    touchAction: "manipulation",
  },
  disabled: {
    cursor: "not-allowed",
  },
});

type Props<BaseProps extends TextProps | TextInputProps> = Merge<
  BaseProps,
  {
    children?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
    delayLongPress?: number;
    delayPressIn?: number;
    delayPressOut?: number;
    disabled?: boolean;
    onBlur?: (event: NativeSyntheticEvent<React.FocusEvent>) => void;
    onContextMenu?: (event: NativeSyntheticEvent<React.SyntheticEvent>) => void;
    onFocus?: (event: NativeSyntheticEvent<React.FocusEvent>) => void;
    onHoverIn?: (event: unknown) => void;
    onHoverOut?: (event: unknown) => void;
    onKeyDown?: (event: NativeSyntheticEvent<React.KeyboardEvent>) => void;
    onLayout?: BaseProps["onLayout"];
    onLongPress?: PressResponderConfig["onLongPress"];
    onPress?: PressResponderConfig["onPress"];
    onPressIn?: PressResponderConfig["onPressStart"];
    onPressMove?: PressResponderConfig["onPressMove"];
    onPressOut?: PressResponderConfig["onPressEnd"];
    style?: BaseProps["style"] | ((state: PressableStateCallbackType) => BaseProps["style"]);
    /**
     * Used only for documentation or testing (e.g. snapshot testing).
     */
    testOnly_hovered?: boolean;
    testOnly_pressed?: boolean;
  }
>;

const getPressable = <P extends Props<TextProps | TextInputProps>>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: ComponentType<any>,
  config: { applyPressStyle?: boolean } = {},
) => {
  const { applyPressStyle = true } = config;

  return forwardRef<unknown, P>((props, forwardedRef) => {
    const {
      children,
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled = false,
      onBlur,
      onContextMenu,
      onFocus,
      onHoverIn,
      onHoverOut,
      onKeyDown,
      onLongPress,
      onPress,
      onPressIn,
      onPressMove,
      onPressOut,
      style,
      tabIndex,
      testOnly_hovered,
      testOnly_pressed,
      ...rest
    } = props;

    const [hovered, setHovered] = useForceableState(testOnly_hovered === true);
    const [focused, setFocused] = useForceableState(false);
    const [pressed, setPressed] = useForceableState(testOnly_pressed === true);

    const hostRef = useRef<Element>(null);
    const setRef = useMergeRefs(forwardedRef, hostRef);

    const pressConfig = useMemo(
      () => ({
        delayLongPress,
        delayPressStart: delayPressIn,
        delayPressEnd: delayPressOut,
        disabled,
        onLongPress,
        onPress,
        onPressChange: setPressed,
        onPressStart: onPressIn,
        onPressMove,
        onPressEnd: onPressOut,
      }),
      [
        delayLongPress,
        delayPressIn,
        delayPressOut,
        disabled,
        onLongPress,
        onPress,
        onPressIn,
        onPressMove,
        onPressOut,
        setPressed,
      ],
    );

    // @ts-expect-error
    const pressEventHandlers = usePressEvents(hostRef, pressConfig);
    const { onContextMenu: onContextMenuPress, onKeyDown: onKeyDownPress } = pressEventHandlers;

    useHover(hostRef, {
      // The following line has been commented out as we want to event to bubble up
      // contain: true,
      disabled,
      onHoverChange: setHovered,
      onHoverStart: onHoverIn,
      onHoverEnd: onHoverOut,
    });

    const interactionState = { hovered, focused, pressed };

    const blurHandler = useCallback(
      (e: NativeSyntheticEvent<React.FocusEvent>) => {
        if (e.nativeEvent.target === hostRef.current) {
          setFocused(false);
          onBlur?.(e);
        }
      },
      [hostRef, setFocused, onBlur],
    );

    const focusHandler = useCallback(
      (e: NativeSyntheticEvent<React.FocusEvent>) => {
        if (e.nativeEvent.target === hostRef.current) {
          setFocused(true);
          onFocus?.(e);
        }
      },
      [hostRef, setFocused, onFocus],
    );

    const contextMenuHandler = useCallback(
      (e: NativeSyntheticEvent<React.SyntheticEvent>) => {
        onContextMenuPress?.(e);
        onContextMenu?.(e);
      },
      [onContextMenu, onContextMenuPress],
    );

    const keyDownHandler = useCallback(
      (e: NativeSyntheticEvent<React.KeyboardEvent>) => {
        onKeyDownPress?.(e);
        onKeyDown?.(e);
      },
      [onKeyDown, onKeyDownPress],
    );

    let _tabIndex: 0 | -1 | undefined;

    if (tabIndex !== undefined) {
      _tabIndex = tabIndex;
    } else {
      _tabIndex = disabled ? -1 : 0;
    }

    return (
      <Component
        {...rest}
        {...pressEventHandlers}
        aria-disabled={disabled}
        onBlur={blurHandler}
        onContextmenu={contextMenuHandler}
        onFocus={focusHandler}
        onKeyDown={keyDownHandler}
        ref={setRef}
        style={[
          match({ disabled, applyPressStyle })
            .with({ disabled: false, applyPressStyle: true }, () => styles.active)
            .with({ disabled: true }, () => styles.disabled)
            .otherwise(() => null),
          typeof style === "function" ? style(interactionState) : style,
        ]}
        tabIndex={_tabIndex}
      >
        {typeof children === "function" ? children(interactionState) : children}
      </Component>
    );
  });
};

type ExtraProps = {
  href?: string;
  hrefAttrs?: HrefAttrs;
};

export type PressableViewProps = Except<Props<ViewProps>, "children">;
export type PressableTextProps = Props<TextProps>;

export const Pressable = memo(
  getPressable<PressableViewProps>(View, { applyPressStyle: true }),
) as FC<PressableProps & ExtraProps & { ref?: Ref<View> }>;

export const PressableText = memo(
  getPressable<PressableTextProps>(Text, { applyPressStyle: true }),
) as FC<PressableTextProps & { ref?: Ref<Text> }>;

PressableText.displayName = "PressableText";
