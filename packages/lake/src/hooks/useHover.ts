// https://github.com/necolas/react-native-web/blob/0.17.5/packages/react-native-web/src/modules/useHover/index.js

import { MutableRefObject } from "react";
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
  ref: MutableRefObject<T | null>,
  config: HoverEventsConfig,
) => void;
