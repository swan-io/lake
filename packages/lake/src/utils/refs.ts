import { Ref, RefCallback } from "react";

// From https://github.com/gregberge/react-merge-refs
export const mergeRefs =
  <T>(refs: (Ref<T> | undefined)[]): RefCallback<T> =>
  value => {
    refs.forEach(ref => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
