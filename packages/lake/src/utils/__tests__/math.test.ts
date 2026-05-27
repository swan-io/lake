import { describe, expect, it } from "vitest";
import { clampValue } from "../math";

describe("clampValue restricts a number to a given [min, max] range", () => {
  it("returns the value unchanged when it lies within the range", () => {
    expect(clampValue(0, 10)(5)).toBe(5);
  });

  it("returns min when the value is below the range", () => {
    expect(clampValue(0, 10)(-3)).toBe(0);
  });

  it("returns max when the value is above the range", () => {
    expect(clampValue(0, 10)(42)).toBe(10);
  });

  it("returns the boundary value when the input equals min", () => {
    expect(clampValue(0, 10)(0)).toBe(0);
  });

  it("returns the boundary value when the input equals max", () => {
    expect(clampValue(0, 10)(10)).toBe(10);
  });

  it("supports negative ranges", () => {
    expect(clampValue(-10, -5)(-20)).toBe(-10);
    expect(clampValue(-10, -5)(0)).toBe(-5);
  });
});
