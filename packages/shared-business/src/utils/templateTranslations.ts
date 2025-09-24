import { match } from "ts-pattern";
import { t } from "./i18n";

export type AccountCountry = "DEU" | "ESP" | "FRA" | "NLD" | "ITA" | "BEL";

export const getIndividualTaxNumberPlaceholder = (accountCountry: AccountCountry) =>
  match(accountCountry)
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

export const getCompanyTaxNumberPlaceholder = (accountCountry: AccountCountry) =>
  match(accountCountry)
    .with("DEU", () => `${t("common.form.taxIdentificationNumber.placeholder")} (Steuer-Nummer)`)
    .with(
      "ESP",
      () =>
        `${t("common.form.taxIdentificationNumber.placeholder")} (Número de Identificación Fiscal)`,
    )
    .with("ITA", () => `${t("common.form.taxIdentificationNumber.placeholder")} (Codice fiscale)`)
    .otherwise(() => t("common.form.taxIdentificationNumber.placeholder"));

export const getTaxNumberTooltip = (accountCountry: AccountCountry) =>
  match(accountCountry)
    .with("DEU", () => t("common.form.taxIdentificationNumber.tooltip.deu"))
    .with("ESP", () => "Número de Identificación Fiscal") // no need to translate
    .with("ITA", () => t("common.form.taxIdentificationNumber.tooltip.ita"))
    .otherwise(() => undefined);

export const getCompanyTaxNumberHelp = (accountCountry: AccountCountry) =>
  match(accountCountry)
    .with("DEU", () => t("common.form.help.nbDigits", { nbDigits: "10-13" }))
    .with("ESP", () => t("common.form.help.nbCharacters", { nbCharacters: "9" }))
    .with("ITA", () => t("common.form.help.nbCharacters", { nbCharacters: "11" }))
    .otherwise(() => "");

export const getIndividualTaxNumberHelp = (accountCountry: AccountCountry) =>
  match(accountCountry)
    .with("DEU", () => t("common.form.help.nbDigits", { nbDigits: "11" }))
    .with("ESP", () => t("common.form.help.nbCharacters", { nbCharacters: "9" }))
    .with("ITA", () => t("common.form.help.nbCharacters", { nbCharacters: "16" }))
    .otherwise(() => "");
