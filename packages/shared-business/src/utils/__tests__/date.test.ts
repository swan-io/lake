import { describe, expect, it } from "vitest";
import {
  decodeBirthDate,
  encodeBirthDate,
  extractDate,
  formatExtractedDate,
} from "../date";

describe("decodeBirthDate converts a YYYY-MM-DD ISO date to a DD/MM/YYYY display string", () => {
  it("formats a valid ISO date", () => {
    expect(decodeBirthDate("1990-05-15")).toBe("15/05/1990");
  });

  it("handles leap days", () => {
    expect(decodeBirthDate("2000-02-29")).toBe("29/02/2000");
  });

  it("returns an empty string for a date in DD/MM/YYYY format", () => {
    expect(decodeBirthDate("15/05/1990")).toBe("");
  });

  it("returns an empty string for an invalid calendar date", () => {
    expect(decodeBirthDate("1990-13-01")).toBe("");
  });

  it("returns an empty string for a non-leap-year Feb 29", () => {
    expect(decodeBirthDate("1999-02-29")).toBe("");
  });

  it("returns an empty string for an empty input", () => {
    expect(decodeBirthDate("")).toBe("");
  });

  it("returns an empty string for an arbitrary string", () => {
    expect(decodeBirthDate("not a date")).toBe("");
  });
});

describe("encodeBirthDate converts a DD/MM/YYYY display string to a YYYY-MM-DD ISO date", () => {
  it("formats a valid display date", () => {
    expect(encodeBirthDate("15/05/1990")).toBe("1990-05-15");
  });

  it("handles leap days", () => {
    expect(encodeBirthDate("29/02/2000")).toBe("2000-02-29");
  });

  it("returns an empty string for a date in YYYY-MM-DD format", () => {
    expect(encodeBirthDate("1990-05-15")).toBe("");
  });

  it("returns an empty string for an invalid calendar date", () => {
    expect(encodeBirthDate("32/01/1990")).toBe("");
  });

  it("returns an empty string for an empty input", () => {
    expect(encodeBirthDate("")).toBe("");
  });
});

describe("extractDate splits a YYYY-MM-DD ISO date into its day, month and year parts", () => {
  it("returns the date parts for a valid ISO date", () => {
    expect(extractDate("1990-05-15")).toEqual({ day: "15", month: "05", year: "1990" });
  });

  it("returns undefined for an invalid calendar date", () => {
    expect(extractDate("1990-13-01")).toBeUndefined();
  });

  it("returns undefined for a date in the wrong format", () => {
    expect(extractDate("15/05/1990")).toBeUndefined();
  });

  it("returns undefined for an empty input", () => {
    expect(extractDate("")).toBeUndefined();
  });
});

describe("formatExtractedDate joins day, month and year parts into a YYYY-MM-DD ISO date", () => {
  it("joins three already-padded parts", () => {
    expect(formatExtractedDate({ day: "15", month: "05", year: "1990" })).toBe("1990-05-15");
  });

  it("pads single-digit day and month to two characters", () => {
    expect(formatExtractedDate({ day: "5", month: "3", year: "1990" })).toBe("1990-03-05");
  });

  it("pads year to four characters", () => {
    expect(formatExtractedDate({ day: "15", month: "05", year: "90" })).toBe("0090-05-15");
  });

  it("trims whitespace before padding", () => {
    expect(formatExtractedDate({ day: " 5 ", month: " 3 ", year: " 90 " })).toBe("0090-03-05");
  });
});
