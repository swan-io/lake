// Based on https://github.com/necolas/react-native-web/blob/0.17.7/packages/react-native-web/src/exports/useWindowDimensions/index.js

import { useCallback, useSyncExternalStore } from "react";
import { Dimensions } from "react-native";

export const useBreakpoint = (breakpoint: number) =>
  useSyncExternalStore(
    useCallback(onStoreChange => {
      const subscription = Dimensions.addEventListener("change", ({ window }) => {
        if (window != null) {
          onStoreChange();
        }
      });

      return subscription.remove;
    }, []),
    useCallback(() => {
      return Dimensions.get("window").width >= breakpoint;
    }, [breakpoint]),
  );
