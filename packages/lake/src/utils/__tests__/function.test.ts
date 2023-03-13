import { describe, expect, test } from "vitest";
import { identity, memoize, noop, stubTrue } from "../function";

describe("stubTrue", () => {
  test("returns true", () => {
    expect(stubTrue()).toBe(true);
  });
});

describe("identity", () => {
  test("returns the first argument", () => {
    const obj = {
      val: 1,
    };
    expect(identity(obj)).toBe(obj);
  });
});

describe("noop", () => {
  test("returns `undefined`", () => {
    expect(noop()).toBe(undefined);
  });
});

describe("memoize", () => {
  test("memoizes", () => {
    let callCount = 0;
    const expensiveFunction = (input: number) => {
      ++callCount;
      return input * 2;
    };
    const memoizedExpensiveFunction = memoize(expensiveFunction, x => String(x));
    expect(memoizedExpensiveFunction(1)).toEqual(2);
    expect(memoizedExpensiveFunction(1)).toEqual(2);
    expect(callCount).toEqual(1);
    expect(memoizedExpensiveFunction(2)).toEqual(4);
    expect(memoizedExpensiveFunction(2)).toEqual(4);
    expect(callCount).toEqual(2);
  });
});
