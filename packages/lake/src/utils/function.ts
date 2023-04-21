export const stubTrue = (): true => {
  return true;
};

export const identity = <T>(value: T): T => {
  return value;
};

export const noop = () => {};

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
