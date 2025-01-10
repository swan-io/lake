import { useEffect } from "react";
import { useFirstMountState } from "./useFirstMountState";

export const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isFirstMount = useFirstMountState();

  // biome-ignore lint/correctness/useExhaustiveDependencies(effect):
  // biome-ignore lint/correctness/useExhaustiveDependencies(isFirstMount):
  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
  }, deps);
};
