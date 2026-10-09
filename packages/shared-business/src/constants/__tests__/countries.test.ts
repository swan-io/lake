import { describe, expect, test } from "vitest";
import { allCountries, isTerritoryCCA3, nationalities, sovereignCountries } from "../countries";

describe("sovereignCountries", () => {
  test("excludes territories", () => {
    for (const cca3 of ["MTQ", "REU", "GLP", "GUF", "PRI", "GRL"] as const) {
      expect(isTerritoryCCA3(cca3)).toBe(true);
      expect(sovereignCountries).not.toContain(cca3);
    }
  });

  test("keeps sovereign countries", () => {
    for (const cca3 of ["FRA", "DEU", "USA", "DNK"] as const) {
      expect(isTerritoryCCA3(cca3)).toBe(false);
      expect(sovereignCountries).toContain(cca3);
    }
  });

  test("matches nationalities", () => {
    expect(new Set(sovereignCountries)).toEqual(new Set(nationalities.map(({ cca3 }) => cca3)));
  });

  test("is a subset of allCountries", () => {
    expect(sovereignCountries.every(cca3 => allCountries.includes(cca3))).toBe(true);
  });
});
