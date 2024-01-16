// Based on https://github.com/necolas/react-native-web/blob/0.17.7/packages/react-native-web/src/exports/useWindowDimensions/index.js

import { useCallback, useSyncExternalStore } from "react";
import { Dimensions } from "react-native";
import { isNotNullish } from "../utils/nullish";

const BREAKPOINT = 992;

export const useResponsive = (breakpoint: number | undefined = BREAKPOINT) => {
  const subscribe = useCallback((onStoreChange: () => void) => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      if (isNotNullish(window)) {
        onStoreChange();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const getSnapshot = useCallback(() => {
    const { width } = Dimensions.get("window");
    return width >= breakpoint;
  }, [breakpoint]);

  const desktop = useSyncExternalStore(subscribe, getSnapshot);

  const media = useCallback(
    <T>(values: { mobile: T; desktop?: T }): T =>
      desktop ? values.desktop ?? values.mobile : values.mobile,
    [desktop],
  );

  return { desktop, media };
};
