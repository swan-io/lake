import { MutableRefObject, useLayoutEffect } from "react";
import { isNotNullish } from "../utils/nullish";

export const useNativeProp = <T>(
  ref: MutableRefObject<T | null>,
  name: string,
  value: number | string | undefined,
) => {
  useLayoutEffect(() => {
    if (isNotNullish(value) && ref.current instanceof Element) {
      ref.current.setAttribute(name, String(value));
    }
  }, [ref, name, value]);
};
