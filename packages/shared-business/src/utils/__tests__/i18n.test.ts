import { BadStatusError } from "@swan-io/request";
import { describe, expect, it } from "vitest";
import {
  formatCurrencyIso,
  formatCurrencySymbol,
  getRejectionReasonLabel,
  isTranslationKey,
  translateError,
} from "../i18n";

// The i18n module reads `navigator.languages` at import time to pick its locale.
// In the Vitest jsdom environment, `navigator.languages` defaults to ["en-US"],
// so the module locks to English. Assertions below assume that locale.

describe("isTranslationKey checks whether a value is a known translation key", () => {
  it("returns true for a known translation key", () => {
    expect(isTranslationKey("error.generic")).toBe(true);
  });

  it("returns false for an unknown string", () => {
    expect(isTranslationKey("this.key.does.not.exist")).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(isTranslationKey("")).toBe(false);
  });

  it("returns false for non-string values", () => {
    expect(isTranslationKey(42)).toBe(false);
    expect(isTranslationKey(null)).toBe(false);
    expect(isTranslationKey(undefined)).toBe(false);
    expect(isTranslationKey({})).toBe(false);
  });
});

describe("translateError maps an arbitrary error value to a translated message", () => {
  it("translates a GraphQL rejection with a known __typename", () => {
    expect(translateError({ __typename: "AccountHolderNotFoundRejection" })).toBe(
      "Can't find account holder",
    );
  });

  it("translates a known rejection name passed as a string", () => {
    expect(translateError("AccountHolderNotFoundRejection")).toBe("Can't find account holder");
  });

  it("translates a BadStatusError using its status code", () => {
    expect(translateError(new BadStatusError("https://example.com", 500))).toBe(
      "Internal server error",
    );
  });

  it("falls back to the generic error message for an unknown rejection __typename", () => {
    expect(translateError({ __typename: "SomeUnknownRejection" })).toBe("An error occurred");
  });

  it("falls back to the generic error message for a plain object", () => {
    expect(translateError({})).toBe("An error occurred");
  });

  it("falls back to the generic error message for null", () => {
    expect(translateError(null)).toBe("An error occurred");
  });

  it("falls back to the generic error message for an Error with an unmapped message", () => {
    expect(translateError(new Error("boom"))).toBe("An error occurred");
  });
});

describe("getRejectionReasonLabel maps a document rejection reason code to a translated label", () => {
  it("translates a known reason code", () => {
    expect(getRejectionReasonLabel("BadDocumentQuality")).toBe(
      "The document quality is too low to read. Upload a higher-resolution scan or photo.",
    );
  });

  it("falls back to the generic 'Other' label for an unknown or future reason code", () => {
    expect(getRejectionReasonLabel("SomeFutureReasonCodeNotYetSupported")).toBe(
      "See the reason and explanation provided by Swan.",
    );
  });

  it("falls back to the generic 'Other' label for an empty string", () => {
    expect(getRejectionReasonLabel("")).toBe("See the reason and explanation provided by Swan.");
  });
});

describe("formatCurrencyIso formats an amount as a decimal followed by the currency code", () => {
  it("formats a positive amount with two fraction digits", () => {
    expect(formatCurrencyIso(1234.5, "EUR")).toBe("1,234.50 EUR");
  });

  it("formats zero with two fraction digits", () => {
    expect(formatCurrencyIso(0, "EUR")).toBe("0.00 EUR");
  });

  it("formats a negative amount", () => {
    expect(formatCurrencyIso(-1234.5, "EUR")).toBe("-1,234.50 EUR");
  });

  it("uses the provided currency code verbatim", () => {
    expect(formatCurrencyIso(10, "USD")).toBe("10.00 USD");
  });

  it("preserves additional decimal precision", () => {
    expect(formatCurrencyIso(1.234, "EUR")).toBe("1.234 EUR");
  });
});

describe("formatCurrencySymbol formats an amount with the currency's locale-aware symbol", () => {
  it("formats EUR amounts with the € symbol", () => {
    expect(formatCurrencySymbol(1234.5, "EUR")).toBe("€1,234.50");
  });

  it("formats USD amounts with the $ symbol", () => {
    expect(formatCurrencySymbol(1234.5, "USD")).toBe("$1,234.50");
  });

  it("rounds beyond two fraction digits", () => {
    expect(formatCurrencySymbol(1.239, "EUR")).toBe("€1.24");
  });

  it("formats zero", () => {
    expect(formatCurrencySymbol(0, "EUR")).toBe("€0.00");
  });
});
