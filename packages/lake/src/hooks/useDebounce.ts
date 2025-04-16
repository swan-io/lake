import { useCallback, useRef } from "react";
import { isNotNullish } from "../utils/nullish";

export const useDebounce = <T>(func: (arg: T) => void, duration: number) => {
  const timeoutRef = useRef<number>(undefined);

  return useCallback(
    (arg: T) => {
      if (isNotNullish(timeoutRef.current)) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(func, duration, arg);
      return () => clearTimeout(timeoutRef.current);
    },
    [func, duration],
  );
};
