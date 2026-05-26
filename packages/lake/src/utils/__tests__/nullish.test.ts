import { describe, expect, it } from "vitest";
import {
  emptyToUndefined,
  isEmpty,
  isNotEmpty,
  isNotNullish,
  isNotNullishOrEmpty,
  isNullish,
  isNullishOrEmpty,
  nullishOrEmptyToUndefined,
} from "../nullish";

describe("isNullish", () => {
  it("returns true for null", () => {
    expect(isNullish(null)).toBe(true);
  });

  it("returns true for undefined", () => {
    expect(isNullish(undefined)).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isNullish("")).toBe(false);
  });

  it("returns false for zero", () => {
    expect(isNullish(0)).toBe(false);
  });

  it("returns false for false", () => {
    expect(isNullish(false)).toBe(false);
  });

  it("returns false for an object", () => {
    expect(isNullish({})).toBe(false);
  });
});

describe("isNotNullish", () => {
  it("returns false for null", () => {
    expect(isNotNullish(null)).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isNotNullish(undefined)).toBe(false);
  });

  it("returns true for an empty string", () => {
    expect(isNotNullish("")).toBe(true);
  });

  it("returns true for zero", () => {
    expect(isNotNullish(0)).toBe(true);
  });

  it("returns true for an object", () => {
    expect(isNotNullish({})).toBe(true);
  });
});

describe("isEmpty", () => {
  it("returns true for an empty string", () => {
    expect(isEmpty("")).toBe(true);
  });

  it("returns false for a non-empty string", () => {
    expect(isEmpty("hello")).toBe(false);
  });

  it("returns false for a whitespace-only string", () => {
    expect(isEmpty(" ")).toBe(false);
  });

  it("returns false for null", () => {
    expect(isEmpty(null)).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isEmpty(undefined)).toBe(false);
  });
});

describe("isNotEmpty", () => {
  it("returns false for an empty string", () => {
    expect(isNotEmpty("")).toBe(false);
  });

  it("returns true for a non-empty string", () => {
    expect(isNotEmpty("hello")).toBe(true);
  });

  it("returns true for a whitespace-only string", () => {
    expect(isNotEmpty(" ")).toBe(true);
  });
});

describe("isNullishOrEmpty", () => {
  it("returns true for null", () => {
    expect(isNullishOrEmpty(null)).toBe(true);
  });

  it("returns true for undefined", () => {
    expect(isNullishOrEmpty(undefined)).toBe(true);
  });

  it("returns true for an empty string", () => {
    expect(isNullishOrEmpty("")).toBe(true);
  });

  it("returns false for a non-empty string", () => {
    expect(isNullishOrEmpty("hello")).toBe(false);
  });

  it("returns false for zero", () => {
    expect(isNullishOrEmpty(0)).toBe(false);
  });
});

describe("isNotNullishOrEmpty", () => {
  it("returns false for null", () => {
    expect(isNotNullishOrEmpty(null)).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isNotNullishOrEmpty(undefined)).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(isNotNullishOrEmpty("")).toBe(false);
  });

  it("returns true for a non-empty string", () => {
    expect(isNotNullishOrEmpty("hello")).toBe(true);
  });

  it("returns true for a whitespace-only string", () => {
    expect(isNotNullishOrEmpty(" ")).toBe(true);
  });
});

describe("emptyToUndefined", () => {
  it("returns undefined for an empty string", () => {
    expect(emptyToUndefined("")).toBeUndefined();
  });

  it("returns the original value for a non-empty string", () => {
    expect(emptyToUndefined("hello")).toBe("hello");
  });

  it("returns a whitespace string unchanged", () => {
    expect(emptyToUndefined(" ")).toBe(" ");
  });
});

describe("nullishOrEmptyToUndefined", () => {
  it("returns undefined for null", () => {
    expect(nullishOrEmptyToUndefined(null)).toBeUndefined();
  });

  it("returns undefined for undefined", () => {
    expect(nullishOrEmptyToUndefined(undefined)).toBeUndefined();
  });

  it("returns undefined for an empty string", () => {
    expect(nullishOrEmptyToUndefined("")).toBeUndefined();
  });

  it("returns the original value for a non-empty string", () => {
    expect(nullishOrEmptyToUndefined("hello")).toBe("hello");
  });
});
