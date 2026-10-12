import { describe, expect, test } from "vitest";
import {
  allCountries,
  frenchTerritories,
  isFrenchTerritoryCCA3,
  isTerritoryCCA3,
  nationalities,
  sovereignCountries,
} from "../countries";

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

describe("frenchTerritories", () => {
  test("includes France and its overseas territories", () => {
    for (const cca3 of ["FRA", "GLP", "MTQ", "GUF", "REU", "MYT", "NCL", "PYF"]) {
      expect(isFrenchTerritoryCCA3(cca3)).toBe(true);
    }
  });

  test("excludes other countries and invalid values", () => {
    for (const value of ["DEU", "BEL", "MCO", "fra", "", null, undefined]) {
      expect(isFrenchTerritoryCCA3(value)).toBe(false);
    }
  });

  test("is a subset of allCountries", () => {
    expect(frenchTerritories.every(cca3 => allCountries.includes(cca3))).toBe(true);
  });
});
