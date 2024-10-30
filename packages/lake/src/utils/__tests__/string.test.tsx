import { expect, test } from "vitest";
import { deburr, initials, safeSplitAround, words } from "../string";

test("string safeSplitAround", () => {
  expect(safeSplitAround("bar", "foo")).toEqual(["bar"]);
  expect(safeSplitAround("foo", "foo")).toEqual(["foo"]);
  expect(safeSplitAround("foo bar baz foo", "foo")).toEqual(["foo", " bar baz ", "foo"]);
  expect(safeSplitAround("foo bar baz foo", "bar")).toEqual(["foo ", "bar", " baz foo"]);
});

test("deburr", () => {
  expect(deburr("Bonjour à toutes & à tous")).toEqual("Bonjour a toutes & a tous");
});

test("initials", () => {
  expect(initials("john", "doe")).toEqual("jd");
  expect(initials("foo", null)).toEqual("f");
  expect(initials("foo", undefined, "bar")).toEqual("fb");
});

test("words", () => {
  expect(words("john doe")).toEqual(["john", "doe"]);
  expect(words("john' doe")).toEqual(["john", "doe"]);
  expect(words("john-doe")).toEqual(["john", "doe"]);
});
