// https://github.com/necolas/react-native-web/blob/0.20.0/packages/react-native-web/src/modules/usePressEvents/index.js

import { Ref } from "react";
import { GestureResponderEvent } from "react-native";
// @ts-expect-error
import originalUsePressEvents from "react-native-web/dist/cjs/modules/usePressEvents";

type ClickEvent = unknown;
type KeyboardEvent = unknown;
type ResponderEvent = unknown;

export type PressResponderConfig = {
  cancelable?: boolean;
  delayLongPress?: number;
  delayPressEnd?: number;
  delayPressStart?: number;
  disabled?: boolean;
  onLongPress?: (event: ResponderEvent) => void;
  onPress?: (event: GestureResponderEvent) => void;
  onPressChange?: (event: ResponderEvent) => void;
  onPressEnd?: (event: ResponderEvent) => void;
  onPressMove?: (event: ResponderEvent) => void;
  onPressStart?: (event: ResponderEvent) => void;
};

type EventHandlers = {
  onClick?: (event: ClickEvent) => void;
  onContextMenu?: (event: ClickEvent) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  onResponderGrant?: (event: ResponderEvent) => void;
  onResponderMove?: (event: ResponderEvent) => void;
  onResponderRelease?: (event: ResponderEvent) => void;
  onResponderTerminate?: (event: ResponderEvent) => void;
  onResponderTerminationRequest?: (event: ResponderEvent) => boolean;
  onStartShouldSetResponder?: (event: ResponderEvent) => boolean;
};

export const usePressEvents = originalUsePressEvents as <T>(
  ref: Ref<T | null>,
  config: PressResponderConfig,
) => EventHandlers;
