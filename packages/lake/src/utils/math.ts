export const clampValue =
  (min: number, max: number) =>
  (value: number): number =>
    Math.max(Math.min(value, max), min);
