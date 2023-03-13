import { expect, test } from "vitest";
import { deburr, safeSplitAround, words } from "../string";

test("string safeSplitAround", () => {
  expect(safeSplitAround("bar", "foo")).toEqual(["bar"]);
  expect(safeSplitAround("foo", "foo")).toEqual(["foo"]);
  expect(safeSplitAround("foo bar baz foo", "foo")).toEqual(["foo", " bar baz ", "foo"]);
  expect(safeSplitAround("foo bar baz foo", "bar")).toEqual(["foo ", "bar", " baz foo"]);
});

test("deburr", () => {
  expect(deburr("Bonjour à toutes & à tous")).toEqual("Bonjour a toutes & a tous");
});

test("words", () => {
  expect(words("john doe")).toEqual(["john", "doe"]);
  expect(words("john' doe")).toEqual(["john", "doe"]);
  expect(words("john-doe")).toEqual(["john", "doe"]);
});
