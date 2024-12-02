import { Option, Result } from "@swan-io/boxed";
import { useCallback, useEffect, useState } from "react";

const getItem = (key: string) => Result.fromExecution(() => localStorage.getItem(key)).getOr(null);

const parseRawValue = <T>(rawValue: string | null, defaultValue: T) =>
  Result.fromExecution(() => (rawValue != null ? (JSON.parse(rawValue) as T) : rawValue))
    .toOption()
    .flatMap(Option.fromNullable)
    .getOr(defaultValue);

export const usePersistedState = <T>(key: string, defaultValue: T) => {
  const [state, setState] = useState(() => {
    const rawValue = getItem(key);
    const value = parseRawValue(rawValue, defaultValue);
    return { defaultValue, value, rawValue };
  });

  const updateRawValue = useCallback((rawValue: string | null) => {
    setState(prevState => {
      if (rawValue === prevState.rawValue) {
        return prevState; // skip update if rawValue didn't changed
      } else {
        const { defaultValue } = prevState;
        const value = parseRawValue(rawValue, defaultValue);
        return { defaultValue, value, rawValue };
      }
    });
  }, []);

  const setPersistedState = useCallback(
    (value: T | null) => {
      try {
        if (value != null) {
          const rawValue = JSON.stringify(value);
          updateRawValue(rawValue);
          localStorage.setItem(key, rawValue);
        } else {
          updateRawValue(null);
          localStorage.removeItem(key);
        }
      } catch {
        // ignore
      }
    },
    [key, updateRawValue],
  );

  useEffect(() => {
    const listener = (event: StorageEvent) => {
      if (event.storageArea === localStorage && (event.key === key || event.key === null)) {
        const rawValue = getItem(key);
        updateRawValue(rawValue);
      }
    };

    window.addEventListener("storage", listener);

    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [key, updateRawValue]);

  return [state.value, setPersistedState] as const;
};
