// From https://github.com/gregberge/react-merge-refs

import { LegacyRef, MutableRefObject, RefCallback } from "react";

export const mergeRefs =
  <T>(refs: (MutableRefObject<T> | LegacyRef<T> | null | undefined)[]): RefCallback<T> =>
  value => {
    refs.forEach(ref => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as MutableRefObject<T | null>).current = value;
      }
    });
  };
