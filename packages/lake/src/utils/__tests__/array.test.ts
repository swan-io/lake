import { describe, expect, test } from "vitest";
import { first, groupBy, last, partition, sortBy, sortedIndexOf } from "../array";

describe("first", () => {
  test("returns the first element of an array", () => {
    const numberArray = [1, 2, 3];
    const stringArray: string[] = [];

    expect(first(numberArray)).toBe(1);
    expect(first(stringArray)).toBe(undefined);
  });
});

describe("last", () => {
  test("returns the last element of an array", () => {
    const emptyArray: string[] = [];
    const stringArray = ["foo", "bar"];
    expect(last(emptyArray)).toBe(undefined);
    expect(last(stringArray)).toBe("bar");
  });
});

describe("partition", () => {
  test("Returns the first element as truth if id_verified = true, and the second element as false", () => {
    const output = [
      {
        id: "123",
        id_verified: true,
        email: "joe@gmail.com",
      },
      {
        id: "456",
        id_verified: false,
        email: "doe@gmail.com",
      },
      {
        id: "789",
        id_verified: true,
        email: "john@gmail.com",
      },
    ];
    expect(partition(output, member => member.id_verified === true)).toStrictEqual([
      [
        {
          id: "123",
          id_verified: true,
          email: "joe@gmail.com",
        },
        {
          id: "789",
          id_verified: true,
          email: "john@gmail.com",
        },
      ],
      [
        {
          id: "456",
          id_verified: false,
          email: "doe@gmail.com",
        },
      ],
    ]);
  });
  test("Returns 2 empty arrays if the output is empty", () => {
    type outputType = {
      id: string;
      id_verified: boolean;
      email: string;
    };

    const output: outputType[] = [];
    expect(partition(output, member => member.id_verified === true)).toStrictEqual([[], []]);
  });
  test("Returns an empty first array, and a second containing the output if the function is looking for an inexistant parameter", () => {
    const output = [
      {
        id: "123",
        id_verified: true,
        email: "joe@gmail.com",
      },
      {
        id: "456",
        id_verified: false,
        email: "doe@gmail.com",
      },
    ];
    expect(partition(output, member => member.id_verified === undefined)).toStrictEqual([
      [],
      [
        {
          id: "123",
          id_verified: true,
          email: "joe@gmail.com",
        },
        {
          id: "456",
          id_verified: false,
          email: "doe@gmail.com",
        },
      ],
    ]);
  });
});

describe("sortBy", () => {
  test("should sort", () => {
    expect(
      sortBy(
        [
          { a: 1, b: 2 },
          { a: 2, b: 2 },
          { a: 1, b: 1 },
        ],
        ["a", "b"],
      ),
    ).toEqual([
      { a: 1, b: 1 },
      { a: 1, b: 2 },
      { a: 2, b: 2 },
    ]);
  });
});

describe("sortedIndexOf", () => {
  test("should find", () => {
    expect(
      sortedIndexOf(
        Array.from({ length: 1000 }, (_, index) => index),
        25,
      ),
    ).toEqual(25);
  });
  test("should return -1 if not found", () => {
    expect(
      sortedIndexOf(
        Array.from({ length: 1000 }, (_, index) => index),
        1001,
      ),
    ).toEqual(-1);
  });
});

describe("groupBy", () => {
  test("groups", () => {
    expect(groupBy([1, 2, 3, 4, 5, 6], item => (item % 2 === 0 ? "even" : "odd"))).toEqual({
      even: [2, 4, 6],
      odd: [1, 3, 5],
    });
    expect(
      groupBy([0, 1, 2, 3, 4, 5, 6], item =>
        item === 0 ? "zero" : item % 2 === 0 ? "even" : "odd",
      ),
    ).toEqual({
      zero: [0],
      even: [2, 4, 6],
      odd: [1, 3, 5],
    });
  });
});
