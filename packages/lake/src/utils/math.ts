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

/**
 * This function is similar to `Animated.interpolate` except this one can be used with numbers
 * Whereas `Animated.interpolate` works only with animated values and return a listener, not a single value
 */
export const interpolate = <T extends InterpolateTuple>({
  inputRange: input,
  outputRange: output,
  clamp = true,
}: InterpolateParams<T>): ((value: number) => number) => {
  return (value: number): number => {
    const [startIndex, endIndex] = getRangeIndexes(input, value);
    const inputStart = getValue(input, startIndex, "inputRange");
    const inputEnd = getValue(input, endIndex, "inputRange");
    const lastInput = getValue(input, input.length - 1, "inputRange");
    const outputStart = getValue(output, startIndex, "outputRange");
    const outputEnd = getValue(output, endIndex, "outputRange");

    const inputRange = inputEnd - inputStart;
    const outputRange = outputEnd - outputStart;

    const valueToConvert = clamp ? clampValue(input[0], lastInput)(value) : value;

    const valueWithoutOffset = valueToConvert - inputStart;
    const outputWithoutOffset = (outputRange * valueWithoutOffset) / inputRange;
    const outputValue = outputWithoutOffset + outputStart;

    return outputValue;
  };
};

type ElasticParams = {
  elasticLength?: number; // the maximum value you can reach
  elasticStrength?: number; // higher value, maximum value reached faster
};

/**
 * This function takes as input a number from 0 to Infinity and returns a number from 0 to elasticLength
 * With an exponential curve giving a feeling of elasticity
 * This kind of function can be used to:
 *  - recreate effect like scroll bounce on iOS
 *  - limit grab smoothly with touch interaction
 */
export const limitElastic =
  ({ elasticLength = 100, elasticStrength = 0.008 }: ElasticParams) =>
  (value: number): number =>
    elasticLength * (1 - Math.exp(-elasticStrength * value));
