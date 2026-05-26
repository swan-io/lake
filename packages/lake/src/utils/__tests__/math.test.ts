import { describe, expect, it } from "vitest";
import { clampValue, interpolate, limitElastic } from "../math";

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

describe("interpolate maps a value from an input range to an output range", () => {
  it("maps the start of the input range to the start of the output range", () => {
    const fn = interpolate({ inputRange: [0, 100], outputRange: [0, 1] });
    expect(fn(0)).toBe(0);
  });

  it("maps the end of the input range to the end of the output range", () => {
    const fn = interpolate({ inputRange: [0, 100], outputRange: [0, 1] });
    expect(fn(100)).toBe(1);
  });

  it("linearly interpolates between the bounds", () => {
    const fn = interpolate({ inputRange: [0, 100], outputRange: [0, 1] });
    expect(fn(50)).toBe(0.5);
  });

  it("clamps values below the input range to the start of the output range by default", () => {
    const fn = interpolate({ inputRange: [0, 100], outputRange: [0, 1] });
    expect(fn(-50)).toBe(0);
  });

  it("clamps values above the input range to the end of the output range by default", () => {
    const fn = interpolate({ inputRange: [0, 100], outputRange: [0, 1] });
    expect(fn(200)).toBe(1);
  });

  it("extrapolates beyond the input range when clamp is false", () => {
    const fn = interpolate({ inputRange: [0, 100], outputRange: [0, 1], clamp: false });
    expect(fn(200)).toBe(2);
    expect(fn(-100)).toBe(-1);
  });

  it("supports multi-segment ranges", () => {
    const fn = interpolate({ inputRange: [0, 50, 100], outputRange: [0, 10, 0] });
    expect(fn(25)).toBe(5);
    expect(fn(50)).toBe(10);
    expect(fn(75)).toBe(5);
    expect(fn(100)).toBe(0);
  });

  it("supports decreasing output ranges", () => {
    const fn = interpolate({ inputRange: [0, 100], outputRange: [1, 0] });
    expect(fn(0)).toBe(1);
    expect(fn(100)).toBe(0);
    expect(fn(25)).toBe(0.75);
  });
});

describe("limitElastic maps [0, +∞) to [0, elasticLength) with an elastic curve", () => {
  it("returns 0 for an input of 0", () => {
    expect(limitElastic({})(0)).toBe(0);
  });

  it("approaches elasticLength as the input grows large", () => {
    const fn = limitElastic({ elasticLength: 100, elasticStrength: 0.01 });
    expect(fn(100000)).toBeCloseTo(100, 5);
  });

  it("never exceeds elasticLength", () => {
    const fn = limitElastic({ elasticLength: 50, elasticStrength: 0.02 });
    expect(fn(1_000_000)).toBeLessThanOrEqual(50);
  });

  it("grows monotonically with the input", () => {
    const fn = limitElastic({ elasticLength: 100, elasticStrength: 0.01 });
    expect(fn(10)).toBeLessThan(fn(50));
    expect(fn(50)).toBeLessThan(fn(200));
  });

  it("uses default elasticLength of 100 and elasticStrength of 0.008", () => {
    const fn = limitElastic({});
    expect(fn(0)).toBe(0);
    expect(fn(10000)).toBeCloseTo(100, 5);
  });

  it("a higher elasticStrength reaches the limit faster", () => {
    const slow = limitElastic({ elasticLength: 100, elasticStrength: 0.001 });
    const fast = limitElastic({ elasticLength: 100, elasticStrength: 0.1 });
    expect(fast(50)).toBeGreaterThan(slow(50));
  });
});
