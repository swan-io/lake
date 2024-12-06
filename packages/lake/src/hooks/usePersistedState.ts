import { Option, Result } from "@swan-io/boxed";
import { useCallback, useEffect, useMemo, useState } from "react";

const getItem = (key: string) => Result.fromExecution(() => localStorage.getItem(key)).getOr(null);

const setItem = (key: string, value: string | null) => {
  try {
    if (value != null) {
      localStorage.setItem(key, value);
    } else {
      localStorage.removeItem(key);
    }
  } catch {
    // ignore
  }
};

const parseRawValue = <T>(rawValue: string | null, defaultValue: T) =>
  Result.fromExecution(() => (rawValue != null ? (JSON.parse(rawValue) as T) : rawValue))
    .toOption()
    .flatMap(Option.fromNullable)
    .getOr(defaultValue);

const stringifyValue = <T>(value: T) =>
  Result.fromExecution<string | null>(() => JSON.stringify(value))
    .toOption()
    .getOr(null);

export const usePersistedState = <T>(key: string, defaultValue: T) => {
  const [stableDefaultValue] = useState(() => defaultValue);
  const [rawValue, setRawValue] = useState(() => getItem(key));

  const value = useMemo(
    () => parseRawValue(rawValue, stableDefaultValue),
    [rawValue, stableDefaultValue],
  );

  const setPersistedState = useCallback(
    (value: T | null | ((prevState: T) => T)): void => {
      if (typeof value !== "function") {
        const rawValue = value != null ? stringifyValue(value) : null;
        setItem(key, rawValue);
        setRawValue(rawValue);
      } else {
        setRawValue(prevState => {
          const prevValue = parseRawValue(prevState, stableDefaultValue);
          const nextValue = (value as (prevState: T) => T)(prevValue);
          const rawValue = stringifyValue(nextValue);
          setItem(key, rawValue);
          return rawValue;
        });
      }
    },
    [key, stableDefaultValue],
  );

  useEffect(() => {
    const listener = (event: StorageEvent) => {
      if (event.storageArea === localStorage && (event.key === key || event.key === null)) {
        const rawValue = getItem(key);
        setRawValue(rawValue);
      }
    };

    window.addEventListener("storage", listener);

    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [key]);

  return [value, setPersistedState] as const;
};
