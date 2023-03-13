import { useMemo, useState } from "react";

export const useBoolean = (
  initialValue: boolean | (() => boolean),
): [
  boolean,
  {
    on: () => void;
    off: () => void;
    toggle: () => void;
  },
] => {
  const [value, setValue] = useState(initialValue);

  return [
    value,
    useMemo(
      () => ({
        on: () => setValue(true),
        off: () => setValue(false),
        toggle: () => setValue(prevValue => !prevValue),
      }),
      [],
    ),
  ];
};
