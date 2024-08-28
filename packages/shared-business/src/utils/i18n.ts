import { createIntl, createIntlCache } from "@formatjs/intl";
import { isNotNullish } from "@swan-io/lake/src/utils/nullish";
import { RifmProps, getRifmProps } from "@swan-io/lake/src/utils/rifm";
import { BadStatusError } from "@swan-io/request";
import dayjs from "dayjs";
import dayjsLocaleDE from "dayjs/locale/de";
import dayjsLocaleEN from "dayjs/locale/en";
import dayjsLocaleES from "dayjs/locale/es";
import dayjsLocaleFI from "dayjs/locale/fi";
import dayjsLocaleFR from "dayjs/locale/fr";
import dayjsLocaleIT from "dayjs/locale/it";
import dayjsLocaleNL from "dayjs/locale/nl";
import dayjsLocalePT from "dayjs/locale/pt";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import { ReactElement, ReactNode, cloneElement, isValidElement } from "react";
import { P, match } from "ts-pattern";
import type { DateFormat } from "../components/DatePicker";
import { Country, countries, france } from "../constants/countries";
import translationDE from "../locales/de.json";
import translationEN from "../locales/en.json";
import translationES from "../locales/es.json";
import translationFI from "../locales/fi.json";
import translationFR from "../locales/fr.json";
import translationIT from "../locales/it.json";
import translationNL from "../locales/nl.json";
import translationPT from "../locales/pt.json";
import { LANGUAGE_FALLBACK, getLanguagesHelpers } from "./languages";

// https://day.js.org/docs/en/plugin/plugin
dayjs.extend(utc);
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

const supportedLanguages = ["en", "es", "de", "fr", "it", "nl", "pt", "fi"] as const;
type SupportedLanguage = (typeof supportedLanguages)[number];

type TranslationParams = Record<string, string | number>;
export type TranslationKey = keyof typeof translationEN;

type Locale = {
  language: SupportedLanguage;
  translations: Record<string, string>;
  dayjsLocale: ILocale;
  dateFormat: DateFormat;
  datePlaceholder: string;
  timeFormat: string;
  timePlaceholder: string;
};

const locales: Record<SupportedLanguage, () => Locale> = {
  en: () => ({
    language: "en",
    translations: translationEN,
    dayjsLocale: dayjsLocaleEN,
    dateFormat: "DD/MM/YYYY",
    datePlaceholder: "DD/MM/YYYY",
    timeFormat: "HH:mm:ss",
    timePlaceholder: "HH:mm:ss",
  }),
  de: () => ({
    language: "de",
    translations: translationDE,
    dayjsLocale: dayjsLocaleDE,
    dateFormat: "DD/MM/YYYY",
    datePlaceholder: "DD/MM/YYYY",
    timeFormat: "HH:mm:ss",
    timePlaceholder: "HH:mm:ss",
  }),
  fr: () => ({
    language: "fr",
    translations: translationFR,
    dayjsLocale: dayjsLocaleFR,
    dateFormat: "DD/MM/YYYY",
    datePlaceholder: "JJ/MM/AAAA",
    timeFormat: "HH:mm:ss",
    timePlaceholder: "HH:mm:ss",
  }),
  it: () => ({
    language: "it",
    translations: translationIT,
    dayjsLocale: dayjsLocaleIT,
    dateFormat: "DD/MM/YYYY",
    datePlaceholder: "DD/MM/YYYY",
    timeFormat: "HH:mm:ss",
    timePlaceholder: "HH:mm:ss",
  }),
  nl: () => ({
    language: "nl",
    translations: translationNL,
    dayjsLocale: dayjsLocaleNL,
    dateFormat: "DD/MM/YYYY",
    datePlaceholder: "DD/MM/YYYY",
    timeFormat: "HH:mm:ss",
    timePlaceholder: "HH:mm:ss",
  }),
  es: () => ({
    language: "es",
    translations: translationES,
    dayjsLocale: dayjsLocaleES,
    dateFormat: "DD/MM/YYYY",
    datePlaceholder: "DD/MM/YYYY",
    timeFormat: "HH:mm:ss",
    timePlaceholder: "HH:mm:ss",
  }),
  pt: () => ({
    language: "pt",
    translations: translationPT,
    dayjsLocale: dayjsLocalePT,
    dateFormat: "DD/MM/YYYY",
    datePlaceholder: "DD/MM/YYYY",
    timeFormat: "HH:mm:ss",
    timePlaceholder: "HH:mm:ss",
  }),
  fi: () => ({
    language: "fi",
    translations: translationFI,
    dayjsLocale: dayjsLocaleFI,
    dateFormat: "DD/MM/YYYY",
    datePlaceholder: "DD/MM/YYYY",
    timeFormat: "HH:mm:ss",
    timePlaceholder: "HH:mm:ss",
  }),
};

const { getBestLocale } = getLanguagesHelpers(supportedLanguages);
export const locale = getBestLocale(locales);

const intl = createIntl(
  {
    defaultLocale: LANGUAGE_FALLBACK,
    fallbackOnEmptyString: false,
    locale: locale.language,
    messages: locale.translations,
  },
  createIntlCache(),
);

export const t = (key: TranslationKey, params?: TranslationParams) =>
  intl.formatMessage({ id: key, defaultMessage: translationEN[key] }, params).toString();

export const formatNestedMessage = (
  key: TranslationKey,
  params: Record<string, string | number | ReactElement | ((children: ReactNode) => ReactNode)>,
) => {
  const result = intl.formatMessage(
    { id: key, defaultMessage: translationEN[key] },
    // @ts-expect-error
    params,
  );

  const resultArray: (string | ReactElement)[] = typeof result === "string" ? [result] : result;

  return resultArray.map((item, index) =>
    isValidElement(item) ? cloneElement(item, { key: `t-${key}-${index}` }) : item,
  );
};

export const rifmDateProps: RifmProps = getRifmProps({
  accept: "numeric",
  charMap: { 2: "/", 4: "/" },
  maxLength: 8,
});

const translationKeys = Object.keys(translationEN);

export const isTranslationKey = (value: unknown): value is TranslationKey =>
  typeof value === "string" && translationKeys.includes(value as TranslationKey);

export const translateError = (error: unknown) => {
  const key = match(error)
    .returnType<string>()
    .with({ __typename: P.select(P.string) }, __typename => `rejection.${__typename}`)
    .with(P.string, __typename => `rejection.${__typename}`)
    .with(P.instanceOf(BadStatusError), ({ status }) => `error.network.${status}`)
    .with(P.instanceOf(Error), ({ message }) => `rejection.${message}`)
    .otherwise(() => "error.generic");

  return t(isTranslationKey(key) ? key : "error.generic");
};

export const getCountry = (): Country => {
  const navigatorCountries = navigator.languages
    .map(language => language.split("-")[1])
    .filter(isNotNullish);

  for (let index = 0; index < navigatorCountries.length; index++) {
    const navigatorCountry = navigatorCountries[index];
    const country = countries.find(({ cca2 }) => cca2 === navigatorCountry);

    if (isNotNullish(country)) {
      return country;
    }
  }

  // fallback to france when no valid country found in navigator locales
  return france;
};
