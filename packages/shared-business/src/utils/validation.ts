import { noop } from "@swan-io/lake/src/utils/function";
import { Validator } from "react-ux-form";
import { match } from "ts-pattern";
import { t } from "./i18n";
import { AccountCountry } from "./templateTranslations";

const VAT_NUMBER_REGEX =
  /^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|(CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|(EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|(FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|(HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|(LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|(NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|(SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$/;

// (AT)?U[0-9]{8} |                              # Austria
// (BE)?0[0-9]{9} |                              # Belgium
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

export const isValidVatNumber = (maybeVat: string) => {
  return VAT_NUMBER_REGEX.test(maybeVat);
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

export const validateBooleanRequired: Validator<boolean | undefined> = value => {
  if (value == null || !value) {
    return t("error.requiredField");
  }
};

export const validateIndividualTaxNumber =
  (accountCountry: AccountCountry): Validator<string | undefined> =>
  value => {
    if (value == null || !value) {
      return;
    }

    return match(accountCountry)
      .with("DEU", () => {
        // accept 11 digits
        if (!/^\d{11}$/.test(value)) {
          return t("common.form.invalidTaxIdentificationNumber");
        }
      })
      .with("ESP", () => {
        // accept 9 characters
        if (!/^[a-zA-Z0-9]{9}$/.test(value)) {
          return t("common.form.invalidTaxIdentificationNumber");
        }
      })
      .with("NLD", () => {
        const paddedValue = value.padStart(9, "0");
        if (/^[0-9]{9}$/.test(paddedValue)) {
          // https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Netherlands-TIN.pdf
          const [n1, n2, n3, n4, n5, n6, n7, n8, n9] = paddedValue.split("").map(x => Number(x));
          const remainder =
            ((n1 ?? 0) * 9 +
              (n2 ?? 0) * 8 +
              (n3 ?? 0) * 7 +
              (n4 ?? 0) * 6 +
              (n5 ?? 0) * 5 +
              (n6 ?? 0) * 4 +
              (n7 ?? 0) * 3 +
              (n8 ?? 0) * 2) %
            11;

          if ((n9 ?? 0) !== remainder) {
            return t("common.form.invalidTaxIdentificationNumber");
          }
        } else {
          return t("common.form.invalidTaxIdentificationNumber");
        }
      })
      .otherwise(noop);
  };

export const validateCompanyTaxNumber =
  (accountCountry: AccountCountry): Validator<string | undefined> =>
  value => {
    if (value == null || !value) {
      return;
    }

    return match(accountCountry)
      .with("DEU", () => {
        // accept 10 or 11 digits
        if (!/^\d{10,11}$/.test(value)) {
          return t("common.form.invalidTaxIdentificationNumber");
        }
      })
      .with("ESP", () => {
        // accept 9 characters
        if (!/^[a-zA-Z0-9]{9}$/.test(value)) {
          return t("common.form.invalidTaxIdentificationNumber");
        }
      })
      .otherwise(noop);
  };
