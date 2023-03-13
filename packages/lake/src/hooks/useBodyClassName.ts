import { useEffect } from "react";

export const useBodyClassName = (
  className: string,
  { enabled = true }: { enabled?: boolean } = {},
) => {
  useEffect(() => {
    if (enabled) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
    return () => {
      document.body.classList.remove(className);
    };
  }, [className, enabled]);
};
