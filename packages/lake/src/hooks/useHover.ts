// https://github.com/necolas/react-native-web/blob/0.20.0/packages/react-native-web/src/modules/useHover/index.js

import { Ref } from "react";
// @ts-expect-error
import originaUseHover from "react-native-web/dist/cjs/modules/useHover";

type HoverEventsConfig = {
  contain?: boolean;
  disabled?: boolean;
  onHoverChange?: (bool: boolean) => void;
  onHoverEnd?: (event: unknown) => void;
  onHoverStart?: (event: unknown) => void;
  onHoverUpdate?: (event: unknown) => void;
};

export const useHover = originaUseHover as <T>(
  ref: Ref<T | null>,
  config: HoverEventsConfig,
) => void;
