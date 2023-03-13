import { MutableRefObject, useRef } from "react";

const UNSET = Symbol("unset");

export const useLazyRef = <T>(getInitialValue: () => T): MutableRefObject<T> => {
  const ref = useRef<T | typeof UNSET>(UNSET);

  if (ref.current === UNSET) {
    ref.current = getInitialValue();
  }

  return ref as MutableRefObject<T>;
};
