type Nullish = null | undefined;

export const isNullish = (value: unknown): value is Nullish => value == null;
export const isNotNullish = <T>(value: T | Nullish): value is T => value != null;

export const isEmpty = (value: unknown): value is "" => value === "";
export const isNotEmpty = <T extends string>(value: T): value is Exclude<T, ""> => value !== "";

export const isNullishOrEmpty = (value: unknown): value is Nullish | "" =>
  value == null || value === "";

export const isNotNullishOrEmpty = <T extends string>(
  value: T | Nullish,
): value is Exclude<T, ""> => value != null && value !== "";

export const emptyToUndefined = <T extends string>(value: T) =>
  isNotEmpty(value) ? value : undefined;

export const nullishOrEmptyToUndefined = <T extends string>(value: T | Nullish) =>
  isNotNullishOrEmpty(value) ? value : undefined;
