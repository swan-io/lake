// Based on https://github.com/necolas/react-native-web/blob/0.17.7/packages/react-native-web/src/exports/useWindowDimensions/index.js

import { useCallback, useSyncExternalStore } from "react";
import { Dimensions, ScaledSize } from "react-native";
import { isNotNullish } from "../utils/nullish";

const BREAKPOINT = 992;
const isDesktop = ({ width }: ScaledSize, breakpoint: number) => width >= breakpoint;

export const useResponsive = (breakpoint: number | undefined = BREAKPOINT) => {
  const desktop = useSyncExternalStore(
    onStoreChange => {
      const subscription = Dimensions.addEventListener("change", ({ window }) => {
        if (isNotNullish(window)) {
          onStoreChange();
        }
      });

      return () => {
        subscription.remove();
      };
    },
    () => isDesktop(Dimensions.get("window"), breakpoint),
  );

  const media = useCallback(
    <T>(values: { mobile: T; desktop?: T }): T =>
      desktop ? values.desktop ?? values.mobile : values.mobile,
    [desktop],
  );

  return { desktop, media };
};
