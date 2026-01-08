import { describe, expect, test } from "vitest";
import {
  getCompanyTaxNumberHelp,
  getCompanyTaxNumberPlaceholder,
  getIndividualTaxNumberHelp,
  getIndividualTaxNumberPlaceholder,
  getTaxNumberTooltip,
  isValidEmail,
  sanitizeDecimal,
  validateArrayRequired,
  validateBooleanRequired,
  validateBooleanTypeRequired,
  validateCompanyTaxNumber,
  validateDate,
  validateIndividualTaxNumber,
  validateName,
  validateNullableRequired,
  validateRequired,
} from "../validation";

describe("isValidEmail", () => {
  test("validates correct email addresses", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("user.name+tag@example.co.uk")).toBe(true);
    expect(isValidEmail("test_email@domain.io")).toBe(true);
    expect(isValidEmail("TEST@EXAMPLE.COM")).toBe(true);
    expect(isValidEmail("test@proton.me")).toBe(true);
  });

  test("rejects invalid email addresses", () => {
    expect(isValidEmail("invalid")).toBe(false);
    expect(isValidEmail("@example.com")).toBe(false);
    expect(isValidEmail("test@")).toBe(false);
    expect(isValidEmail("test@.com")).toBe(false);
    expect(isValidEmail("")).toBe(false);
  });
});

describe("validateRequired", () => {
  test("returns error for empty strings", () => {
    expect(validateRequired("")).toBeDefined();
  });

  test("returns undefined for non-empty strings", () => {
    expect(validateRequired("value")).toBeUndefined();
  });
});

describe("validateNullableRequired", () => {
  test("returns error for undefined or empty values", () => {
    expect(validateNullableRequired(undefined)).toBeDefined();
    expect(validateNullableRequired("")).toBeDefined();
  });

  test("returns undefined for non-empty strings", () => {
    expect(validateNullableRequired("value")).toBeUndefined();
  });
});

describe("validateBooleanRequired", () => {
  test("returns error for undefined or false", () => {
    expect(validateBooleanRequired(undefined)).toBeDefined();
    expect(validateBooleanRequired(false)).toBeDefined();
  });

  test("returns undefined for true", () => {
    expect(validateBooleanRequired(true)).toBeUndefined();
  });
});

describe("validateBooleanTypeRequired", () => {
  test("returns error for undefined", () => {
    expect(validateBooleanTypeRequired(undefined)).toBeDefined();
  });

  test("returns undefined for true or false", () => {
    expect(validateBooleanTypeRequired(true)).toBeUndefined();
    expect(validateBooleanTypeRequired(false)).toBeUndefined();
  });
});

describe("validateArrayRequired", () => {
  test("returns error for undefined", () => {
    expect(validateArrayRequired(undefined)).toBeDefined();
  });

  test("returns error for empty arrays", () => {
    expect(validateArrayRequired([])).toBeDefined();
  });

  test("returns undefined for arrays with at least one element", () => {
    expect(validateArrayRequired(["value"])).toBeUndefined();
    expect(validateArrayRequired(["value1", "value2"])).toBeUndefined();
  });
});

describe("validateName", () => {
  test("returns error for empty or falsy values", () => {
    expect(validateName("")).toBeDefined();
  });

  test("returns error for names longer than 100 characters", () => {
    const longName = "A".repeat(101);
    expect(validateName(longName)).toBeDefined();
  });

  test("accepts names with exactly 100 characters", () => {
    const name100 = "A".repeat(100);
    expect(validateName(name100)).toBeUndefined();
  });

  test("accepts valid names with basic ASCII letters", () => {
    expect(validateName("José")).toBeUndefined();
    expect(validateName("Mary Jane")).toBeUndefined();
    expect(validateName("O'Brien")).toBeUndefined();
    expect(validateName("Jean-Pierre")).toBeUndefined();
    expect(validateName("Smith, Jr.")).toBeUndefined();
  });

  test("rejects names with invalid characters", () => {
    expect(validateName("John123")).toBeDefined(); // contains numbers
    expect(validateName("John@Doe")).toBeDefined(); // contains @
    expect(validateName("John#Doe")).toBeDefined(); // contains #
    expect(validateName("John$Doe")).toBeDefined(); // contains $
    expect(validateName("John_Doe")).toBeDefined(); // contains underscore
    expect(validateName("John!Doe")).toBeDefined(); // contains !
    expect(validateName("John?Doe")).toBeDefined(); // contains ?
  });
});

describe("validateIndividualTaxNumber", () => {
  describe("BEL (Belgium)", () => {
    const validator = validateIndividualTaxNumber("BEL");

    test("accepts valid 11-digit tax numbers", () => {
      expect(validator("12345678901")).toBeUndefined();
    });

    test("rejects invalid formats", () => {
      expect(validator("123456789")).toBeDefined(); // 9 digits
      expect(validator("123456789012")).toBeDefined(); // 12 digits
      expect(validator("123456789A")).toBeDefined(); // contains letter
    });

    test("allows undefined or empty values", () => {
      expect(validator(undefined)).toBeUndefined();
      expect(validator("")).toBeUndefined();
    });
  });

  describe("DEU (Germany)", () => {
    const validator = validateIndividualTaxNumber("DEU");

    test("accepts valid 11-digit tax numbers", () => {
      expect(validator("12345678901")).toBeUndefined();
    });

    test("rejects invalid formats", () => {
      expect(validator("1234567890")).toBeDefined(); // 10 digits
      expect(validator("123456789012")).toBeDefined(); // 12 digits
    });
  });

  describe("ESP (Spain)", () => {
    const validator = validateIndividualTaxNumber("ESP");

    test("accepts valid 9-character tax numbers", () => {
      expect(validator("123456789")).toBeUndefined();
      expect(validator("A1234567B")).toBeUndefined();
    });

    test("rejects invalid formats", () => {
      expect(validator("12345678")).toBeDefined(); // 8 characters
      expect(validator("1234567890")).toBeDefined(); // 10 characters
    });
  });

  describe("FIN (Finland)", () => {
    const validator = validateIndividualTaxNumber("FIN");

    test("accepts valid 11-character tax numbers", () => {
      expect(validator("12345678901")).toBeUndefined();
      expect(validator("A234567890B")).toBeUndefined();
    });

    test("rejects invalid formats", () => {
      expect(validator("1234567890")).toBeDefined(); // 10 characters
      expect(validator("123456789012")).toBeDefined(); // 12 characters
    });
  });

  describe("FRA (France)", () => {
    const validator = validateIndividualTaxNumber("FRA");

    test("accepts valid 13-digit tax numbers", () => {
      expect(validator("1234567890123")).toBeUndefined();
    });

    test("rejects invalid formats", () => {
      expect(validator("123456789012")).toBeDefined(); // 12 digits
      expect(validator("12345678901234")).toBeDefined(); // 14 digits
      expect(validator("123456789012A")).toBeDefined(); // contains letter
    });
  });

  describe("ITA (Italy)", () => {
    const validator = validateIndividualTaxNumber("ITA");

    test("accepts valid 16-character tax numbers", () => {
      expect(validator("1234567890123456")).toBeUndefined();
      expect(validator("ABCDEF12G34H567I")).toBeUndefined();
    });

    test("rejects invalid formats", () => {
      expect(validator("123456789012345")).toBeDefined(); // 15 characters
      expect(validator("12345678901234567")).toBeDefined(); // 17 characters
    });
  });

  describe("NLD (Netherlands)", () => {
    const validator = validateIndividualTaxNumber("NLD");

    test("accepts valid 9-digit tax numbers", () => {
      expect(validator("123456789")).toBeUndefined();
    });

    test("rejects invalid formats", () => {
      expect(validator("12345678")).toBeDefined(); // 8 digits
      expect(validator("1234567890")).toBeDefined(); // 10 digits
      expect(validator("12345678A")).toBeDefined(); // contains letter
    });
  });

  describe("PRT (Portugal)", () => {
    const validator = validateIndividualTaxNumber("PRT");

    test("accepts valid 9-digit tax numbers", () => {
      expect(validator("123456789")).toBeUndefined();
    });

    test("rejects invalid formats", () => {
      expect(validator("12345678")).toBeDefined(); // 8 digits
      expect(validator("1234567890")).toBeDefined(); // 10 digits
    });
  });
});

describe("validateCompanyTaxNumber", () => {
  describe("BEL (Belgium)", () => {
    const validator = validateCompanyTaxNumber("BEL");

    test("accepts valid 10-12 digit tax numbers", () => {
      expect(validator("1234567890")).toBeUndefined(); // 10 digits
      expect(validator("12345678901")).toBeUndefined(); // 11 digits
      expect(validator("123456789012")).toBeUndefined(); // 12 digits
    });

    test("rejects invalid formats", () => {
      expect(validator("123456789")).toBeDefined(); // 9 digits
      expect(validator("1234567890123")).toBeDefined(); // 13 digits
      expect(validator("123456789A")).toBeDefined(); // contains letter
    });

    test("allows undefined or empty values", () => {
      expect(validator(undefined)).toBeUndefined();
      expect(validator("")).toBeUndefined();
    });
  });

  describe("DEU (Germany)", () => {
    const validator = validateCompanyTaxNumber("DEU");

    test("accepts valid 10-13 digit tax numbers", () => {
      expect(validator("1234567890")).toBeUndefined(); // 10 digits
      expect(validator("12345678901")).toBeUndefined(); // 11 digits
      expect(validator("123456789012")).toBeUndefined(); // 12 digits
      expect(validator("1234567890123")).toBeUndefined(); // 13 digits
    });

    test("rejects invalid formats", () => {
      expect(validator("123456789")).toBeDefined(); // 9 digits
      expect(validator("12345678901234")).toBeDefined(); // 14 digits
    });
  });

  describe("ESP (Spain)", () => {
    const validator = validateCompanyTaxNumber("ESP");

    test("accepts valid 9-character tax numbers", () => {
      expect(validator("123456789")).toBeUndefined();
      expect(validator("A1234567B")).toBeUndefined();
    });

    test("rejects invalid formats", () => {
      expect(validator("12345678")).toBeDefined(); // 8 characters
      expect(validator("1234567890")).toBeDefined(); // 10 characters
    });
  });

  describe("FIN (Finland)", () => {
    const validator = validateCompanyTaxNumber("FIN");

    test("accepts valid 8-9 character tax numbers", () => {
      expect(validator("12345678")).toBeUndefined(); // 8 characters
      expect(validator("123456789")).toBeUndefined(); // 9 characters
      expect(validator("A2345678")).toBeUndefined();
    });

    test("rejects invalid formats", () => {
      expect(validator("1234567")).toBeDefined(); // 7 characters
      expect(validator("1234567890")).toBeDefined(); // 10 characters
    });
  });

  describe("FRA (France)", () => {
    const validator = validateCompanyTaxNumber("FRA");

    test("accepts valid 9-digit tax numbers", () => {
      expect(validator("123456789")).toBeUndefined();
    });

    test("rejects invalid formats", () => {
      expect(validator("12345678")).toBeDefined(); // 8 digits
      expect(validator("1234567890")).toBeDefined(); // 10 digits
      expect(validator("12345678A")).toBeDefined(); // contains letter
    });
  });

  describe("ITA (Italy)", () => {
    const validator = validateCompanyTaxNumber("ITA");

    test("accepts valid 11-digit tax numbers", () => {
      expect(validator("12345678901")).toBeUndefined();
    });

    test("rejects invalid formats", () => {
      expect(validator("1234567890")).toBeDefined(); // 10 digits
      expect(validator("123456789012")).toBeDefined(); // 12 digits
      expect(validator("1234567890A")).toBeDefined(); // contains letter
    });
  });

  describe("NLD (Netherlands)", () => {
    const validator = validateCompanyTaxNumber("NLD");

    test("accepts valid 9-digit tax numbers", () => {
      expect(validator("123456789")).toBeUndefined();
    });

    test("rejects invalid formats", () => {
      expect(validator("12345678")).toBeDefined(); // 8 digits
      expect(validator("1234567890")).toBeDefined(); // 10 digits
    });
  });

  describe("PRT (Portugal)", () => {
    const validator = validateCompanyTaxNumber("PRT");

    test("accepts valid 9-digit tax numbers", () => {
      expect(validator("123456789")).toBeUndefined();
    });

    test("rejects invalid formats", () => {
      expect(validator("12345678")).toBeDefined(); // 8 digits
      expect(validator("1234567890")).toBeDefined(); // 10 digits
    });
  });
});

describe("Tax number helper functions", () => {
  describe("getIndividualTaxNumberPlaceholder", () => {
    test("returns country-specific placeholders", () => {
      expect(getIndividualTaxNumberPlaceholder("DEU")).toContain("Steueridentifikationsnummer");
      expect(getIndividualTaxNumberPlaceholder("ESP")).toContain("Número de Identificación Fiscal");
      expect(getIndividualTaxNumberPlaceholder("ITA")).toContain("Codice fiscale");
    });

    test("returns generic placeholder for other countries", () => {
      const placeholder = getIndividualTaxNumberPlaceholder("FRA");
      expect(placeholder).toBeTypeOf("string");
    });
  });

  describe("getCompanyTaxNumberPlaceholder", () => {
    test("returns country-specific placeholders", () => {
      expect(getCompanyTaxNumberPlaceholder("DEU")).toContain("Steuer-Nummer");
      expect(getCompanyTaxNumberPlaceholder("ESP")).toContain("Número de Identificación Fiscal");
      expect(getCompanyTaxNumberPlaceholder("ITA")).toContain("Codice fiscale");
    });

    test("returns generic placeholder for other countries", () => {
      const placeholder = getCompanyTaxNumberPlaceholder("FRA");
      expect(placeholder).toBeTypeOf("string");
    });
  });

  describe("getTaxNumberTooltip", () => {
    test("returns tooltips for specific countries", () => {
      expect(getTaxNumberTooltip("DEU")).toBeTypeOf("string");
      expect(getTaxNumberTooltip("ESP")).toBe("Número de Identificación Fiscal");
      expect(getTaxNumberTooltip("ITA")).toBeTypeOf("string");
    });

    test("returns undefined for countries without specific tooltips", () => {
      expect(getTaxNumberTooltip("FRA")).toBeUndefined();
    });
  });

  describe("getIndividualTaxNumberHelp", () => {
    test("returns correct help text for all countries", () => {
      expect(getIndividualTaxNumberHelp("BEL")).toBeTypeOf("string");
      expect(getIndividualTaxNumberHelp("DEU")).toBeTypeOf("string");
      expect(getIndividualTaxNumberHelp("ESP")).toBeTypeOf("string");
      expect(getIndividualTaxNumberHelp("FIN")).toBeTypeOf("string");
      expect(getIndividualTaxNumberHelp("FRA")).toBeTypeOf("string");
      expect(getIndividualTaxNumberHelp("ITA")).toBeTypeOf("string");
      expect(getIndividualTaxNumberHelp("NLD")).toBeTypeOf("string");
      expect(getIndividualTaxNumberHelp("PRT")).toBeTypeOf("string");
    });
  });

  describe("getCompanyTaxNumberHelp", () => {
    test("returns correct help text for all countries", () => {
      expect(getCompanyTaxNumberHelp("BEL")).toBeTypeOf("string");
      expect(getCompanyTaxNumberHelp("DEU")).toBeTypeOf("string");
      expect(getCompanyTaxNumberHelp("ESP")).toBeTypeOf("string");
      expect(getCompanyTaxNumberHelp("FIN")).toBeTypeOf("string");
      expect(getCompanyTaxNumberHelp("FRA")).toBeTypeOf("string");
      expect(getCompanyTaxNumberHelp("ITA")).toBeTypeOf("string");
      expect(getCompanyTaxNumberHelp("NLD")).toBeTypeOf("string");
      expect(getCompanyTaxNumberHelp("PRT")).toBeTypeOf("string");
    });
  });
});

describe("validateDate", () => {
  test("returns error for undefined or null", () => {
    expect(validateDate(undefined)).toBeDefined();
  });

  test("returns undefined for valid ExtractedDate", () => {
    expect(validateDate({ day: "5", month: "03", year: "2024" })).toBeUndefined();
  });

  test("handles padded and unpadded values", () => {
    expect(validateDate({ day: "05", month: " 3", year: "2024" })).toBeUndefined();
  });

  test("returns error for invalid ExtractedDate", () => {
    expect(validateDate({ day: "32", month: "01", year: "2024" })).toBeDefined(); // Invalid day
    expect(validateDate({ day: "15", month: "13", year: "2024" })).toBeDefined(); // Invalid month
    expect(validateDate({ day: "31", month: "04", year: "2024" })).toBeDefined(); // April has 30 days
  });
});

describe("sanitizeDecimal", () => {
  test("removes spaces from decimal input", () => {
    expect(sanitizeDecimal("1 000")).toBe("1000");
  });

  test("handles multiple spaces", () => {
    expect(sanitizeDecimal("1 000 000")).toBe("1000000");
  });

  test("replaces comma with dot for decimal separator", () => {
    expect(sanitizeDecimal("10,5")).toBe("10.5");
  });

  test("removes spaces and replaces comma with dot", () => {
    expect(sanitizeDecimal("1 234,56")).toBe("1234.56");
  });

  test("returns unchanged string when no spaces or commas", () => {
    expect(sanitizeDecimal("1234.56")).toBe("1234.56");
  });
});
