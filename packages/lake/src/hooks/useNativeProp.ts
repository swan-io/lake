import { RefObject, useLayoutEffect } from "react";
import { isNotNullish } from "../utils/nullish";

export const useNativeProp = <T>(
  ref: RefObject<T | null>,
  name: string,
  value: number | string | undefined,
) => {
  useLayoutEffect(() => {
    if (isNotNullish(value) && ref.current instanceof Element) {
      ref.current.setAttribute(name, String(value));
    }
  }, [ref, name, value]);
};
