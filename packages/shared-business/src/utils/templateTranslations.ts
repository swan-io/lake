import { match } from "ts-pattern";
import { CompanyCountryCCA3, IndividualCountryCCA3 } from "../constants/countries";
import { t } from "./i18n";

export type AccountCountry = "DEU" | "ESP" | "FRA" | "NLD" | "ITA" | "BEL";

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
    .with("DEU", () => t("common.form.taxIdentificationNumber.tooltip.deu"))
    .with("ESP", () => "Número de Identificación Fiscal") // no need to translate
    .with("ITA", () => t("common.form.taxIdentificationNumber.tooltip.ita"))
    .otherwise(() => undefined);

export const getCompanyTaxNumberHelp = (country: IndividualCountryCCA3 | CompanyCountryCCA3) =>
  match(country)
    .with("BEL", () => t("common.form.help.nbDigits", { nbDigits: "10-12" }))
    .with("DEU", () => t("common.form.help.nbDigits", { nbDigits: "10-13" }))
    .with("FIN", () => t("common.form.help.nbCharacters", { nbCharacters: "8-9" }))
    .with("FRA", () => t("common.form.help.nbDigits", { nbDigits: "9" }))
    .with("ESP", () => t("common.form.help.nbCharacters", { nbCharacters: "9" }))
    .with("ITA", () => t("common.form.help.nbDigits", { nbDigits: "11" }))
    .with("NLD", () => t("common.form.help.nbDigits", { nbDigits: "9" }))
    .with("PRT", () => t("common.form.help.nbDigits", { nbDigits: "9" }))
    .otherwise(() => "");

export const getIndividualTaxNumberHelp = (country: IndividualCountryCCA3 | CompanyCountryCCA3) =>
  match(country)
    .with("BEL", () => t("common.form.help.nbDigits", { nbDigits: "10" }))
    .with("DEU", () => t("common.form.help.nbDigits", { nbDigits: "11" }))
    .with("ESP", () => t("common.form.help.nbCharacters", { nbCharacters: "9" }))
    .with("FIN", () => t("common.form.help.nbCharacters", { nbCharacters: "11" }))
    .with("FRA", () => t("common.form.help.nbDigits", { nbDigits: "13" }))
    .with("ITA", () => t("common.form.help.nbCharacters", { nbCharacters: "16" }))
    .with("NLD", () => t("common.form.help.nbDigits", { nbDigits: "9" }))
    .with("PRT", () => t("common.form.help.nbDigits", { nbDigits: "9" }))
    .otherwise(() => "");
