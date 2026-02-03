import { isNullish } from "@swan-io/lake/src/utils/nullish";
import { Validator } from "@swan-io/use-form";
import dayjs from "dayjs";
import { isValid as isValidIban } from "iban";
import { match } from "ts-pattern";
import {
  CompanyCountryCCA3,
  IndividualCountryCCA3,
  TaxNumberValidation,
} from "../constants/countries";
import { ExtractedDate, formatExtractedDate } from "./date";
import { t } from "./i18n";

const EMAIL_REGEX = /^[A-Z0-9_+.-]*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i;
const VAT_NUMBER_REGEX =
  /^((AT)?U[0-9]{8}|(BE)?[01][0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|(CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|(EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|(FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|(HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|(LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|(NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|(SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$/;

// (AT)?U[0-9]{8} |                              # Austria
// (BE)?[01][0-9]{9} |                              # Belgium
// (BG)?[0-9]{9,10} |                            # Bulgaria
// (CY)?[0-9]{8}L |                              # Cyprus
// (CZ)?[0-9]{8,10} |                            # Czech Republic
// (DE)?[0-9]{9} |                               # Germany
// (DK)?[0-9]{8} |                               # Denmark
// (EE)?[0-9]{9} |                               # Estonia
// (EL|GR)?[0-9]{9} |                            # Greece
// (ES)?[0-9A-Z][0-9]{7}[0-9A-Z] |               # Spain
// (FI)?[0-9]{8} |                               # Finland
// (FR)?[0-9A-Z]{2}[0-9]{9} |                    # France
// (GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3}) | # United Kingdom
// (HU)?[0-9]{8} |                               # Hungary
// (IE)?[0-9]S[0-9]{5}L |                        # Ireland
// (IT)?[0-9]{11} |                              # Italy
// (LT)?([0-9]{9}|[0-9]{12}) |                   # Lithuania
// (LU)?[0-9]{8} |                               # Luxembourg
// (LV)?[0-9]{11} |                              # Latvia
// (MT)?[0-9]{8} |                               # Malta
// (NL)?[0-9]{9}B[0-9]{2} |                      # Netherlands
// (PL)?[0-9]{10} |                              # Poland
// (PT)?[0-9]{9} |                               # Portugal
// (RO)?[0-9]{2,10} |                            # Romania
// (SE)?[0-9]{12} |                              # Sweden
// (SI)?[0-9]{8} |                               # Slovenia
// (SK)?[0-9]{10}                                # Slovakia

const TAX_NUMBER_REGEX: TaxNumberValidation = {
  individual: {
    BEL: {
      pattern: /^\d{11}$/,
      message: t("common.form.help.nbDigits", { nbDigits: "11" }),
    },
    DEU: {
      pattern: /^\d{11}$/,
      message: t("common.form.help.nbDigits", { nbDigits: "11" }),
    },
    ESP: {
      pattern: /^[a-zA-Z0-9]{9}$/,
      message: t("common.form.help.nbCharacters", { nbCharacters: "9" }),
    },
    FIN: {
      pattern: /^[a-zA-Z0-9]{11}$/,
      message: t("common.form.help.nbCharacters", { nbCharacters: "11" }),
    },
    FRA: {
      pattern: /^\d{13}$/,
      message: t("common.form.help.nbDigits", { nbDigits: "13" }),
    },
    ITA: {
      pattern: /^[a-zA-Z0-9]{16}$/,
      message: t("common.form.help.nbCharacters", { nbCharacters: "16" }),
    },
    NLD: {
      pattern: /^\d{9}$/,
      message: t("common.form.help.nbDigits", { nbDigits: "9" }),
    },
    PRT: {
      pattern: /^\d{9}$/,
      message: t("common.form.help.nbDigits", { nbDigits: "9" }),
    },
  },
  company: {
    BEL: {
      pattern: /^\d{10,12}$/,
      message: t("common.form.help.nbDigits", { nbDigits: "10-12" }),
    },
    DEU: {
      pattern: /^\d{10,13}$/,
      message: t("common.form.help.nbDigits", { nbDigits: "10-13" }),
    },
    ESP: {
      pattern: /^[a-zA-Z0-9]{9}$/,
      message: t("common.form.help.nbCharacters", { nbCharacters: "9" }),
    },
    FIN: {
      pattern: /^[a-zA-Z0-9]{8,9}$/,
      message: t("common.form.help.nbCharacters", { nbCharacters: "8-9" }),
    },
    FRA: {
      pattern: /^\d{9}$/,
      message: t("common.form.help.nbDigits", { nbDigits: "9" }),
    },
    ITA: {
      pattern: /^\d{11}$/,
      message: t("common.form.help.nbDigits", { nbDigits: "11" }),
    },
    NLD: {
      pattern: /^\d{9}$/,
      message: t("common.form.help.nbDigits", { nbDigits: "9" }),
    },
    PRT: {
      pattern: /^\d{9}$/,
      message: t("common.form.help.nbDigits", { nbDigits: "9" }),
    },
  },
};

export const isValidVatNumber = (maybeVat: string) => {
  return VAT_NUMBER_REGEX.test(maybeVat);
};

export const isValidEmail = (maybeEmail: string) => {
  return EMAIL_REGEX.test(maybeEmail);
};

export const sanitizeDecimal = (value: string): string => {
  return value.replace(/ /g, "").replace(/,/g, ".");
};

export const validateNullableRequired: Validator<string | undefined> = value => {
  if (value == null || !value) {
    return t("error.requiredField");
  }
};

export const validateRequired: Validator<string> = value => {
  if (!value) {
    return t("error.requiredField");
  }
};

// False or undefined will return an error message
export const validateBooleanRequired: Validator<boolean | undefined> = value => {
  if (value == null || !value) {
    return t("error.requiredField");
  }
};

export const validateBooleanTypeRequired: Validator<boolean | undefined> = value => {
  if (typeof value !== "boolean") {
    return t("error.requiredField");
  }
};

export const validateArrayRequired: Validator<string[] | undefined> = value => {
  if (value == null || value.length < 1) {
    return t("error.requiredField");
  }
};

export const validateVatNumber: Validator<string> = value => {
  const cleaned = value.replace(/[^A-Z0-9]/gi, "");
  if (cleaned.length === 0) {
    return;
  }

  if (!isValidVatNumber(cleaned)) {
    return t("error.invalidVatNumber");
  }
};

export const validateEmail: Validator<string> = value => {
  if (!isValidEmail(value)) {
    return t("error.invalidEmail");
  }
};

// This regex was copied from the backend to ensure that the validation is the same
// Matches all unicode letters, spaces, dashes, apostrophes, commas, and single quotes
const VALID_NAME_RE =
  /^(?:[A-Za-zÀ-ÖÙ-öù-ƿǄ-ʯʹ-ʽΈ-ΊΎ-ΡΣ-ҁҊ-Ֆա-ևႠ-Ⴥა-ჺᄀ-፜፩-ᎏᵫ-ᶚḀ-῾ⴀ-ⴥ⺀-⿕ぁ-ゖゝ-ㇿ㋿-鿯鿿-ꒌꙀ-ꙮꚀ-ꚙꜦ-ꞇꞍ-ꞿꥠ-ꥼＡ-Ｚａ-ｚ.]| |'|-|Ά|Ό|,)*$/;

export const validateName: Validator<string> = value => {
  if (!value) {
    return t("error.requiredField");
  }

  // Rule copied from the backend
  if (value.length > 100) {
    return t("error.invalidName");
  }

  const isValid = VALID_NAME_RE.test(value);

  if (!isValid) {
    return t("error.invalidName");
  }
};

export const validateIndividualTaxNumber =
  (country: IndividualCountryCCA3): Validator<string | undefined> =>
  value => {
    if (value == null || !value) {
      return;
    }

    const rule = TAX_NUMBER_REGEX.individual[country];
    if (rule && !rule.pattern.test(value)) {
      return t("common.form.invalidTaxIdentificationNumber");
    }
  };

export const validateCompanyTaxNumber =
  (country: CompanyCountryCCA3): Validator<string | undefined> =>
  value => {
    if (value == null || !value) {
      return;
    }

    const rule = TAX_NUMBER_REGEX.company[country];
    if (rule && !rule.pattern.test(value)) {
      return t("common.form.invalidTaxIdentificationNumber");
    }
  };

// Validates U.S. Tax IDs (SSN or ITIN)
export const isValidUsaTaxNumber = (maybeTaxId: string) => {
  const cleanId = maybeTaxId.replace(/\D/g, "");
  if (cleanId.length !== 9) {
    return false;
  }

  // SSN: No 000/666/900+ starts, no 00 middle, no 0000 end
  const ssnPattern = /^(?!000|666|9\d{2})\d{3}(?!00)\d{2}(?!0000)\d{4}$/;

  // ITIN: Starts with 9, middle digits generally between 50-65, 70-88, 90-92, 94-99
  const itinPattern = /^9\d{2}(5\d|6[0-5]|7\d|8[0-8]|9[0-2]|9[4-9])\d{4}$/;

  return ssnPattern.test(cleanId) || itinPattern.test(cleanId);
};

export const validateUsaTaxNumber: Validator<string | undefined> = value => {
  if (value == null || !value) {
    return;
  }

  if (isValidUsaTaxNumber(value)) {
    return t("common.form.invalidTaxIdentificationNumber");
  }
};

export { printFormat as printIbanFormat } from "iban";

export const validateIban = (iban: string) => {
  if (!isValidIban(iban)) {
    return t("error.iban.invalid");
  }
};

export const validateDate = (value: ExtractedDate | undefined) => {
  if (isNullish(value)) {
    return t("validation.invalidDate");
  }
  const date = dayjs.utc(formatExtractedDate(value), "YYYY-MM-DD", true);
  if (!date.isValid()) {
    return t("validation.invalidDate");
  }
};

export const validateBirthdate = (value: ExtractedDate | undefined) => {
  if (isNullish(value)) {
    return t("validation.invalidBirthDate");
  }
  const date = dayjs.utc(formatExtractedDate(value), "YYYY-MM-DD", true);

  const isBirthdateOver150years = date.isBefore(dayjs.utc().subtract(100, "years"));
  const isBirthdateWithin4years = date.isAfter(dayjs.utc().subtract(4, "years"));

  if (!date.isValid() || isBirthdateOver150years || isBirthdateWithin4years) {
    return t("validation.invalidBirthDate");
  }

  if (date.isAfter(dayjs.utc().add(1, "day"))) {
    return t("validation.birthdateCannotBeFuture");
  }
};

/*
 * Translation helpers for tax validation
 */

export const getIndividualTaxNumberPlaceholder = (
  country: IndividualCountryCCA3 | CompanyCountryCCA3,
) =>
  match(country)
    .with(
      "DEU",
      () => `${t("common.form.taxIdentificationNumber.placeholder")} (Steueridentifikationsnummer)`,
    )
    .with(
      "ESP",
      () =>
        `${t("common.form.taxIdentificationNumber.placeholder")} (Número de Identificación Fiscal)`,
    )
    .with("ITA", () => `${t("common.form.taxIdentificationNumber.placeholder")} (Codice fiscale)`)
    .otherwise(() => t("common.form.taxIdentificationNumber.placeholder"));

export const getCompanyTaxNumberPlaceholder = (
  country: IndividualCountryCCA3 | CompanyCountryCCA3,
) =>
  match(country)
    .with("DEU", () => `${t("common.form.taxIdentificationNumber.placeholder")} (Steuer-Nummer)`)
    .with(
      "ESP",
      () =>
        `${t("common.form.taxIdentificationNumber.placeholder")} (Número de Identificación Fiscal)`,
    )
    .with("ITA", () => `${t("common.form.taxIdentificationNumber.placeholder")} (Codice fiscale)`)
    .otherwise(() => t("common.form.taxIdentificationNumber.placeholder"));

export const getTaxNumberTooltip = (country: IndividualCountryCCA3 | CompanyCountryCCA3) =>
  match(country)
    .with("DEU", () => "Persönliche Steueridentifikationsnummer des wirtschaftlich Berechtigten")
    .with("ESP", () => "Número de Identificación Fiscal") // no need to translate
    .with("ITA", () => t("common.form.taxIdentificationNumber.tooltip.ita"))
    .otherwise(() => undefined);

export const getCompanyTaxNumberHelp = (country: CompanyCountryCCA3) =>
  TAX_NUMBER_REGEX.company[country]?.message ?? "";

export const getIndividualTaxNumberHelp = (country: IndividualCountryCCA3) =>
  TAX_NUMBER_REGEX.individual[country]?.message ?? "";
