// Based on https://github.com/necolas/react-native-web/blob/0.17.7/packages/react-native-web/src/exports/useWindowDimensions/index.js

import { useCallback, useSyncExternalStore } from "react";
import { Dimensions } from "react-native";
import { isNotNullish } from "../utils/nullish";

export const useResponsive = (breakpoint = 992) => {
  const desktop = useSyncExternalStore(
    useCallback(onStoreChange => {
      const subscription = Dimensions.addEventListener("change", ({ window }) => {
        if (isNotNullish(window)) {
          onStoreChange();
        }
      });

      return subscription.remove;
    }, []),
    useCallback(() => Dimensions.get("window").width >= breakpoint, [breakpoint]),
  );

  const media = useCallback(
    <T>(values: { mobile: T; desktop?: T }): T =>
      desktop ? values.desktop ?? values.mobile : values.mobile,
    [desktop],
  );

  return { desktop, media };
};
