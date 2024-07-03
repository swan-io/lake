export const isPlainObject = (value: unknown): boolean => {
  return Object.prototype.toString.call(value) === "[object Object]";
};

export const pick = <T extends Record<PropertyKey, unknown>, const K extends keyof T>(
  object: T,
  keys: K[],
): Pick<T, K> => {
  const allowedKeys = new Set<K>(keys);

  return Object.fromEntries(
    Object.entries(object).filter(([key]) => allowedKeys.has(key as K)),
  ) as Pick<T, K>;
};

export const omit = <T extends Record<PropertyKey, unknown>, const K extends keyof T>(
  object: T,
  keys: K[],
): Omit<T, K> => {
  const disallowedKeys = new Set<K>(keys);

  return Object.fromEntries(
    Object.entries(object).filter(([key]) => !disallowedKeys.has(key as K)),
  ) as Omit<T, K>;
};

const hasOwnProperty = Object.prototype.hasOwnProperty;

export const deepEqual = (a: unknown, b: unknown): boolean => {
  if (Object.is(a, b)) {
    return true;
  }
  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) {
    return false;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  for (const key of aKeys) {
    if (!hasOwnProperty.call(b, key) || !deepEqual(a[key as never], b[key as never])) {
      return false;
    }
  }

  return true;
};
