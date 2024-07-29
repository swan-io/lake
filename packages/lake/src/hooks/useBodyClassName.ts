import { useEffect } from "react";

const counters: Record<string, number> = {};

export const useBodyClassName = (
  className: string,
  { enabled = true }: { enabled?: boolean } = {},
) => {
  useEffect(() => {
    if (!enabled) {
      return; // effect cleanup remove the class if disabled
    }

    const currentCount = counters[className] ?? 0;
    counters[className] = currentCount + 1;

    document.body.classList.add(className);

    return () => {
      const currentCount = counters[className] ?? 0;
      counters[className] = currentCount - 1;

      if (counters[className] <= 0) {
        document.body.classList.remove(className);
      }
    };
  }, [className, enabled]);
};
