import { isNotNullish, isNullish } from "./nullish";

type InterpolateTuple = [number, number, ...number[]];
type FixedLength<L extends number> = number[] & { 0: number; length: L };

type InterpolateParams<T extends InterpolateTuple> = {
  inputRange: T;
  outputRange: FixedLength<T["length"]>;
  clamp?: boolean;
};

const getValue = (array: number[], index: number, name: string): number => {
  const value = array[index];
  if (isNullish(value)) {
    throw new Error(`Interpolation Error: index "${index}" doesn't exists in ${name}`);
  }
  return value;
};

export const clampValue =
  (min: number, max: number) =>
  (value: number): number =>
    Math.max(Math.min(value, max), min);

// Here we can disable no-non-null-assertion because this function is called in interpolate which have types checking if there is at least 2 values in range
const getRangeIndexes = <T extends InterpolateTuple>(range: T, value: number): [number, number] => {
  if (value < range[0]) {
    return [0, 1];
  }

  const maxIndex = range.length - 1;
  for (let i = 0; i <= maxIndex; i += 1) {
    const nextIndex = i + 1;
    const startRange = getValue(range, i, "range");
    const endRange = range[nextIndex];

    if (isNotNullish(endRange) && value > startRange && value < endRange) {
      return [i, nextIndex];
    }
  }

  // if no values was found, it means value is upper than last range value
  return [maxIndex - 1, maxIndex];
};
