import { Dict } from "@swan-io/boxed";
import { P } from "ts-pattern";

export const identity = <T>(value: T): T => value;
export const noop = () => {};
export const stubFalse = (): false => false;
export const stubTrue = (): true => true;
export const unionToArray = <T extends PropertyKey>(object: Record<T, true>) => Dict.keys(object);

export const getUnionGuard = <T extends PropertyKey>(object: Record<T, true>) => {
  const set = new Set<unknown>(unionToArray<T>(object));
  return (value: unknown): value is T => set.has(value);
};

export const union = <T extends PropertyKey>(object: Record<T, true>) => {
  const array = Dict.keys(object);
  const set = new Set(array);
  const is = (value: unknown): value is T => set.has(value as T);
  return { array, set, is, P: P.when(is) };
};

export const memoize = <Input extends Array<unknown>, Output>(
  func: (...input: Input) => Output,
  getCacheKey: (...input: Input) => string,
): ((...input: Input) => Output) => {
  const cache = new Map<string, Output>();

  return (...input: Input) => {
    const key = getCacheKey(...input);

    if (cache.has(key)) {
      return cache.get(key) as Output;
    }

    const output = func(...input);
    cache.set(key, output);
    return output;
  };
};
