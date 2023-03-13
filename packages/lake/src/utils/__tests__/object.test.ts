import { describe, expect, test } from "vitest";
import { isPlainObject, pick } from "../object";

describe("isPlainObject", () => {
  test("returns true if it's a plain object", () => {
    const json = {
      foo: "foo",
      bar: false,
      baz: 1,
    };
    expect(isPlainObject(json)).toBe(true);
  });
});

describe("pick", () => {
  test("picks", () => {
    expect(pick({ foo: 1, bar: 2, baz: 3, quux: 4 }, ["foo", "bar"])).toEqual({ foo: 1, bar: 2 });
  });
});
