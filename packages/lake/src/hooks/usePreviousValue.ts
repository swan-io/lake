import { useEffect, useRef } from "react";

export const usePreviousValue = <T>(value: T): T => {
  const previousRef = useRef(value);

  useEffect(() => {
    previousRef.current = value;
  }, [value]);

  return previousRef.current;
};
