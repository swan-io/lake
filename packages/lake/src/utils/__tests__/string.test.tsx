import { expect, test } from "vitest";
import { deburr, safeSplitAround, words } from "../string";

test("string safeSplitAround", () => {
  expect(safeSplitAround("bar", "foo")).toEqual(["bar"]);
  expect(safeSplitAround("foo", "foo")).toEqual(["foo"]);
  expect(safeSplitAround("foo bar baz foo", "foo")).toEqual(["foo", " bar baz ", "foo"]);
  expect(safeSplitAround("foo bar baz foo", "bar")).toEqual(["foo ", "bar", " baz foo"]);
});

test("string safeSplitAround with an empty expression", () => {
  expect(safeSplitAround("foo", "")).toEqual(["foo"]);
  expect(safeSplitAround("", "")).toEqual(safeSplitAround("", "foo"));
});

test("string safeSplitAround ignoring case", () => {
  expect(safeSplitAround("France", "fr")).toEqual(["France"]);
  expect(safeSplitAround("France", "fr", { ignoreCase: true })).toEqual(["Fr", "ance"]);
  expect(safeSplitAround("Marie-Anne", "ANNE", { ignoreCase: true })).toEqual(["Marie-", "Anne"]);
  expect(safeSplitAround("FOO bar Foo", "foo", { ignoreCase: true })).toEqual([
    "FOO",
    " bar ",
    "Foo",
  ]);
  // Lowercasing "İ" adds a character, so the search stays case-sensitive
  expect(safeSplitAround("İzmir", "zmir", { ignoreCase: true })).toEqual(["İ", "zmir"]);
});

test("deburr", () => {
  expect(deburr("Bonjour à toutes & à tous")).toEqual("Bonjour a toutes & a tous");
});

test("words", () => {
  expect(words("john doe")).toEqual(["john", "doe"]);
  expect(words("john' doe")).toEqual(["john", "doe"]);
  expect(words("john-doe")).toEqual(["john", "doe"]);
});
