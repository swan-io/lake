import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { france, getCountryByCCA2, getCountryByCCA3 } from "../../constants/countries";
import {
  getDefaultPhoneCountry,
  maskPhoneNumber,
  parsePhoneNumber,
  prefixPhoneNumber,
} from "../phone";

const gambia = getCountryByCCA2("GM");
const jamaica = getCountryByCCA2("JM");
const curacao = getCountryByCCA2("CW");
const bonaire = getCountryByCCA2("BQ");
const vatican = getCountryByCCA2("VA");

describe("parsePhoneNumber splits an international number into its country and national number", () => {
  it("parses a French mobile number", () => {
    expect(parsePhoneNumber("+33612345678")).toEqual({
      country: france,
      nationalNumber: "612345678",
    });
  });

  it("parses a 9-digit Gambian number", () => {
    expect(parsePhoneNumber("+220873012345")).toEqual({
      country: gambia,
      nationalNumber: "873012345",
    });
  });

  it("parses a number from a country sharing the +1 calling code", () => {
    expect(parsePhoneNumber("+18762101234")).toEqual({
      country: jamaica,
      nationalNumber: "8762101234",
    });
  });

  it("resolves a country listed under several dialling prefixes to the one the country picker offers", () => {
    expect(parsePhoneNumber("+18292345678")).toEqual({
      country: getCountryByCCA3("DOM"),
      nationalNumber: "8292345678",
    });
  });

  it("parses a number from a country whose dialling prefix is longer than its calling code", () => {
    expect(parsePhoneNumber("+5993181234")).toEqual({
      country: bonaire,
      nationalNumber: "3181234",
    });
  });

  it("parses a number from a country that dials through another country's code", () => {
    expect(parsePhoneNumber("+390669812345")).toEqual({
      country: vatican,
      nationalNumber: "0669812345",
    });
  });

  it("parses a number written with separators", () => {
    expect(parsePhoneNumber("+33 6 12 34 56 78")).toEqual({
      country: france,
      nationalNumber: "612345678",
    });
  });
});

describe("parsePhoneNumber falls back to the default phone country and an empty national number", () => {
  const fallback = { country: france, nationalNumber: "" };

  beforeEach(() => {
    vi.stubGlobal("navigator", { languages: ["en-GB"] });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("falls back for an undefined value", () => {
    expect(parsePhoneNumber(undefined)).toEqual(fallback);
  });

  it("falls back for an empty string", () => {
    expect(parsePhoneNumber("")).toEqual(fallback);
  });

  it("falls back for a blank string", () => {
    expect(parsePhoneNumber("   ")).toEqual(fallback);
  });

  it("falls back for a value that is not a phone number", () => {
    expect(parsePhoneNumber("not a phone")).toEqual(fallback);
  });

  it("falls back for a national number without a country code", () => {
    expect(parsePhoneNumber("0612345678")).toEqual(fallback);
  });

  it("falls back for a number that is too short to be valid", () => {
    expect(parsePhoneNumber("+3300")).toEqual(fallback);
  });

  it("falls back for a number of valid length that is not a valid number", () => {
    expect(parsePhoneNumber("+33012345678")).toEqual(fallback);
  });

  it("falls back for a valid number from a country that is not listed", () => {
    expect(parsePhoneNumber("+17215205678")).toEqual(fallback);
  });

  it("follows the browser language for the fallback country", () => {
    vi.stubGlobal("navigator", { languages: ["de-DE"] });

    expect(parsePhoneNumber(undefined)).toEqual({
      country: getCountryByCCA2("DE"),
      nationalNumber: "",
    });
  });
});

describe("getDefaultPhoneCountry picks one of our markets from the browser languages", () => {
  const germany = getCountryByCCA2("DE");
  const belgium = getCountryByCCA2("BE");

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it.each([[["en"]], [["en-GB"]], [["en-US"]], [["ja-JP"]], [[]]])(
    "falls back to France for %j",
    languages => {
      expect(getDefaultPhoneCountry(languages)).toEqual(france);
    },
  );

  it.each([
    ["fr", "FR"],
    ["de", "DE"],
    ["es", "ES"],
    ["it", "IT"],
    ["nl", "NL"],
    ["pt", "PT"],
  ] as const)("maps the %s language to its country", (language, cca2) => {
    expect(getDefaultPhoneCountry([language])).toEqual(getCountryByCCA2(cca2));
  });

  it.each([
    ["nl-BE", "BE"],
    ["fr-BE", "BE"],
    ["en-BE", "BE"],
    ["en-DE", "DE"],
    ["es-PT", "PT"],
  ] as const)("uses the region of %s when it is one of our markets", (language, cca2) => {
    expect(getDefaultPhoneCountry([language])).toEqual(getCountryByCCA2(cca2));
  });

  it.each([
    ["de-AT", "DE"],
    ["fr-CA", "FR"],
    ["pt-BR", "PT"],
  ] as const)(
    "uses the language of %s when its region isn't one of our markets",
    (language, cca2) => {
      expect(getDefaultPhoneCountry([language])).toEqual(getCountryByCCA2(cca2));
    },
  );

  it("keeps the browser's order of preference", () => {
    expect(getDefaultPhoneCountry(["de-DE", "fr-FR"])).toEqual(germany);
    expect(getDefaultPhoneCountry(["de", "nl-BE"])).toEqual(germany);
  });

  it("skips languages that don't match one of our markets", () => {
    expect(getDefaultPhoneCountry(["en-US", "nl-BE"])).toEqual(belgium);
  });

  it("matches the language and region case-insensitively", () => {
    expect(getDefaultPhoneCountry(["NL-be"])).toEqual(belgium);
  });

  it("skips invalid language tags", () => {
    expect(getDefaultPhoneCountry(["not a tag", "de"])).toEqual(germany);
  });

  it("reads the browser languages by default", () => {
    vi.stubGlobal("navigator", { languages: ["it-IT"] });
    expect(getDefaultPhoneCountry()).toEqual(getCountryByCCA2("IT"));
  });
});

describe("prefixPhoneNumber turns a national number into an E.164 number", () => {
  it("prefixes a French national number", () => {
    expect(prefixPhoneNumber(france, "612345678")).toEqual({
      valid: true,
      e164: "+33612345678",
    });
  });

  it("accepts a French number with its trunk prefix", () => {
    expect(prefixPhoneNumber(france, "0612345678")).toEqual({
      valid: true,
      e164: "+33612345678",
    });
  });

  it("ignores spaces and dashes", () => {
    expect(prefixPhoneNumber(france, "6 12-34-56-78")).toEqual({
      valid: true,
      e164: "+33612345678",
    });
  });

  it("ignores characters that are not part of a phone number", () => {
    expect(prefixPhoneNumber(france, "06_12_34_56_78")).toEqual({
      valid: true,
      e164: "+33612345678",
    });
  });

  it("accepts a 9-digit Gambian number", () => {
    expect(prefixPhoneNumber(gambia, "873012345")).toEqual({
      valid: true,
      e164: "+220873012345",
    });
  });

  it("accepts an international number whatever the selected country", () => {
    expect(prefixPhoneNumber(france, "+4915112345678")).toEqual({
      valid: true,
      e164: "+4915112345678",
    });
  });

  it("prefixes a number from a country sharing the +1 calling code", () => {
    expect(prefixPhoneNumber(jamaica, "8762101234")).toEqual({
      valid: true,
      e164: "+18762101234",
    });
  });

  it("prefixes a number from a country whose dialling prefix is longer than its calling code", () => {
    expect(prefixPhoneNumber(curacao, "95181234")).toEqual({
      valid: true,
      e164: "+59995181234",
    });
  });

  it("prefixes a number from a country that dials through another country's code", () => {
    expect(prefixPhoneNumber(vatican, "0669812345")).toEqual({
      valid: true,
      e164: "+390669812345",
    });
  });

  it("accepts the digits typed after a dialling prefix that already holds the area code", () => {
    expect(prefixPhoneNumber(jamaica, "2101234")).toEqual({
      valid: true,
      e164: "+18762101234",
    });
  });

  it("accepts the digits typed after a dialling prefix longer than the calling code", () => {
    expect(prefixPhoneNumber(curacao, "5181234")).toEqual({
      valid: true,
      e164: "+59995181234",
    });
  });

  it("accepts a six-digit value typed after a dialling prefix", () => {
    expect(prefixPhoneNumber(bonaire, "171234")).toEqual({
      valid: true,
      e164: "+5997171234",
    });
  });

  it("ignores characters that are not part of a phone number in the digits typed after a dialling prefix", () => {
    expect(prefixPhoneNumber(jamaica, "210_1234")).toEqual({
      valid: true,
      e164: "+18762101234",
    });
  });

  it("rejects digits typed after a dialling prefix that do not make a valid number", () => {
    expect(prefixPhoneNumber(jamaica, "123")).toEqual({ valid: false });
  });

  it("reads a value as typed after the dialling prefix when its other reading is a Canadian number", () => {
    expect(prefixPhoneNumber(jamaica, "3101234")).toEqual({
      valid: true,
      e164: "+18763101234",
    });
  });

  it("reads a value as typed after the dialling prefix when its other reading is a Bonaire number", () => {
    expect(prefixPhoneNumber(curacao, "7201234")).toEqual({
      valid: true,
      e164: "+59997201234",
    });
  });

  it("keeps a full national number unchanged when both readings belong to the selected country", () => {
    expect(prefixPhoneNumber(curacao, "6001234")).toEqual({
      valid: true,
      e164: "+5996001234",
    });
  });

  it("accepts a full national number from another area code of the selected country", () => {
    expect(prefixPhoneNumber(getCountryByCCA3("DOM"), "8292345678")).toEqual({
      valid: true,
      e164: "+18292345678",
    });
  });

  it("accepts a number from another country sharing the selected calling code", () => {
    expect(prefixPhoneNumber(getCountryByCCA2("US"), "8762101234")).toEqual({
      valid: true,
      e164: "+18762101234",
    });
  });

  it("accepts a full national number of another country when the dialling prefix holds an area code", () => {
    expect(prefixPhoneNumber(bonaire, "95181234")).toEqual({
      valid: true,
      e164: "+59995181234",
    });
  });

  it("accepts an international number when the dialling prefix holds an area code", () => {
    expect(prefixPhoneNumber(jamaica, "+33612345678")).toEqual({
      valid: true,
      e164: "+33612345678",
    });
  });

  it("prefixes a number from a territory that borrows another country's numbering plan", () => {
    expect(prefixPhoneNumber(getCountryByCCA2("BV"), "40612345")).toEqual({
      valid: true,
      e164: "+4740612345",
    });
  });

  it("rejects a number of valid length that is not a valid number", () => {
    expect(prefixPhoneNumber(france, "0012345678")).toEqual({ valid: false });
  });

  it("rejects a number that is too long", () => {
    expect(prefixPhoneNumber(france, "999999999999999")).toEqual({ valid: false });
  });

  it("rejects a number that is too short", () => {
    expect(prefixPhoneNumber(france, "0")).toEqual({ valid: false });
  });

  it("rejects an empty national number", () => {
    expect(prefixPhoneNumber(france, "")).toEqual({ valid: false });
  });
});

describe("maskPhoneNumber hides the middle digits of a phone number", () => {
  it("masks a 10-digit number", () => {
    expect(maskPhoneNumber("0612345678")).toBe("061****678");
  });

  it("masks a 9-digit number", () => {
    expect(maskPhoneNumber("612345678")).toBe("612***678");
  });

  it("grows the asterisk run with the number length", () => {
    expect(maskPhoneNumber("33612345678")).toBe("336*****678");
  });

  it("keeps a non-digit prefix", () => {
    expect(maskPhoneNumber("+33612345678")).toBe("+336*****678");
  });

  it("masks the shortest run it recognises", () => {
    expect(maskPhoneNumber("1234567")).toBe("123*567");
  });

  it("leaves a run of fewer than 7 digits unchanged", () => {
    expect(maskPhoneNumber("123456")).toBe("123456");
  });

  it("leaves a number written with separators unmasked", () => {
    expect(maskPhoneNumber("+33 612 345 678")).toBe("+33 612 345 678");
  });
});
