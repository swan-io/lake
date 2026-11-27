import { Lazy, Option, Result } from "@bloodyowl/boxed";
import { isNullish } from "@swan-io/lake/src/utils/nullish";
import {
  E164Number,
  getCountryCallingCode,
  isSupportedCountry,
  parsePhoneNumberWithError,
} from "libphonenumber-js";
import {
  Country,
  CountryCCA3,
  france,
  getCountryByCCA2,
  getCountryByCCA3,
  isCountryCCA2,
  phoneMarketCountries,
} from "../constants/countries";

const phoneMarketByLanguage: Partial<Record<string, CountryCCA3>> = {
  fr: "FRA",
  de: "DEU",
  es: "ESP",
  it: "ITA",
  nl: "NLD",
  pt: "PRT",
};

// A region that is one of our markets wins (nl-BE → Belgium), otherwise the language decides
// (de-AT → Germany). Belgium has no language of its own, so only its region leads to it
const getPhoneMarket = (languageTag: string): Option<Country> =>
  Result.fromExecution(() => new Intl.Locale(languageTag))
    .toOption()
    .flatMap(({ language, region }) =>
      Option.fromNullable(region)
        .filter(isCountryCCA2)
        .map(getCountryByCCA2)
        .filter(country => phoneMarketCountries.includes(country.cca3))
        .orElse(Option.fromNullable(phoneMarketByLanguage[language]).map(getCountryByCCA3)),
    );

// Swan operates in a handful of markets, most users being in France: preselect the first
// market matching the browser languages, France otherwise
export const getDefaultPhoneCountry = (
  languages: readonly string[] = navigator.languages,
): Country => {
  for (const languageTag of languages) {
    const market = getPhoneMarket(languageTag);

    if (market.isSome()) {
      return market.get();
    }
  }

  return france;
};

export const parsePhoneNumber = (value?: string): { country: Country; nationalNumber: string } => {
  const fallback = Lazy(() => ({ country: getDefaultPhoneCountry(), nationalNumber: "" }));

  if (isNullish(value) || value.trim() === "") {
    return fallback.get();
  }

  try {
    const phoneNumber = parsePhoneNumberWithError(value);
    const { country, nationalNumber } = phoneNumber;

    if (!phoneNumber.isValid() || !isCountryCCA2(country)) {
      return fallback.get();
    }

    return {
      country: getCountryByCCA2(country),
      nationalNumber: String(nationalNumber).replace(/[^0-9]/g, ""),
    };
  } catch {
    return fallback.get();
  }
};

export const prefixPhoneNumber = (
  country: Country,
  nationalNumber: string,
): { valid: true; e164: E164Number } | { valid: false } => {
  const sanitized = nationalNumber.replace(/[^+0-9]/g, "");

  const callingCode = isSupportedCountry(country.cca2)
    ? getCountryCallingCode(country.cca2)
    : country.idd;

  const areaCode = country.idd.startsWith(callingCode) ? country.idd.slice(callingCode.length) : "";

  const parse = (value: string) =>
    Result.fromExecution(() =>
      parsePhoneNumberWithError(value, { defaultCallingCode: callingCode }),
    )
      .toOption()
      .filter(phoneNumber => phoneNumber.isValid());

  const national = parse(sanitized);
  const local = parse(`${areaCode}${sanitized}`);

  return national
    .filter(phoneNumber => phoneNumber.country === country.cca2)
    .orElse(local)
    .orElse(national)
    .match({
      Some: ({ number }) => ({ valid: true, e164: number }),
      None: () => ({ valid: false }),
    });
};

export const maskPhoneNumber = (value: string) =>
  value.replace(
    /(\d{3})(\d+)(\d{3})/,
    (_, $1: string, $2: string, $3: string) => `${$1}${"*".repeat($2.length)}${$3}`,
  );
