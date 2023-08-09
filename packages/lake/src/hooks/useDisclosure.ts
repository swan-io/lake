import { useMemo, useState } from "react";

export const useDisclosure = (
  initialValue: boolean,
): [
  visible: boolean,
  fns: {
    open: () => void;
    close: () => void;
    toggle: () => void;
  },
] => {
  const [value, setValue] = useState(initialValue);

  return [
    value,
    useMemo(
      () => ({
        open: () => setValue(true),
        close: () => setValue(false),
        toggle: () => setValue(prevValue => !prevValue),
      }),
      [],
    ),
  ];
};
