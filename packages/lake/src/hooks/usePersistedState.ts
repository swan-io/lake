import { Option, Result } from "@swan-io/boxed";
import { useCallback, useState } from "react";

export const usePersistedState = <T>(key: string, defaultValue: T) => {
  const [state, setState] = useState<T>(() => {
    return Result.fromExecution(() => localStorage.getItem(key))
      .toOption()
      .flatMap(Option.fromNullable)
      .map(value => JSON.parse(value) as T)
      .getWithDefault(defaultValue);
  });

  const setPersistedState = useCallback(
    (state: T) => {
      setState(state);
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (err) {
        // ignore
      }
    },
    [key],
  );

  return [state, setPersistedState] as const;
};
