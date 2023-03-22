export const sortBy = <K extends string, T extends Record<K, unknown>>(
  array: T[],
  keys: K[],
): T[] => {
  return [...array].sort((a, b) => {
    let index = -1;
    while (++index < keys.length) {
      const key = keys[index];
      if (key == undefined) {
        return 0;
      }
      if (b[key] === a[key]) {
        continue;
      }
      return b[key] > a[key] ? -1 : 1;
    }
    return 0;
  });
};

export const first = <T>(array: readonly T[]): T | undefined => {
  return array[0];
};

export const last = <T>(array: readonly T[]): T | undefined => {
  return array[array.length - 1];
};

export const partition = <T>(array: T[], predicate: (value: T) => boolean): [T[], T[]] => {
  const truthy = [];
  const falsy = [];
  for (const value of array) {
    if (predicate(value)) {
      truthy.push(value);
    } else {
      falsy.push(value);
    }
  }
  return [truthy, falsy];
};

export const sortedIndexOf = <T>(array: T[], value: T) => {
  let startIndex = 0;
  let endIndex = array.length;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const searchIndex = startIndex + Math.round((endIndex - startIndex) / 2);

    const item = array[searchIndex];

    if (searchIndex === endIndex || searchIndex === startIndex) {
      if (item === value) {
        return startIndex;
      }
      return -1;
    }

    if (item === value) {
      return searchIndex;
    }

    if (typeof item === "number" && typeof value === "number") {
      if (item > value) {
        endIndex = searchIndex;
        continue;
      }
      if (item < value) {
        startIndex = searchIndex;
        continue;
      }
    }
  }
};

export const groupBy = <T, K extends string>(
  array: T[],
  getGroupName: (item: T) => K,
): Partial<Record<K, T[]>> => {
  const grouped: Partial<Record<K, T[]>> = {};
  array.forEach(item => {
    const groupName = getGroupName(item);
    grouped[groupName] = [...(grouped[groupName] ?? []), item];
  });
  return grouped;
};
