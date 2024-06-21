// Based on https://github.com/necolas/react-native-web/blob/0.19.12/packages/react-native-web/src/exports/useWindowDimensions/index.js

import { useCallback, useSyncExternalStore } from "react";
import { windowSize } from "../utils/windowSize";

export const useBreakpoint = (breakpoint: number) =>
  useSyncExternalStore(
    useCallback(onStoreChange => {
      const unsubscribe = windowSize.subscribe(onStoreChange);
      return unsubscribe;
    }, []),
    useCallback(() => {
      return windowSize.get().width >= breakpoint;
    }, [breakpoint]),
  );
