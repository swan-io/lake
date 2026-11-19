import { Lazy, Result } from "@bloodyowl/boxed";
import { isNullish } from "@swan-io/lake/src/utils/nullish";
import {
  E164Number,
  getCountryCallingCode,
  isSupportedCountry,
  parsePhoneNumberWithError,
} from "libphonenumber-js";
import { Country, getCountryByCCA2, isCountryCCA2 } from "../constants/countries";
import { getMostLikelyUserCountry } from "./localization";

export const parsePhoneNumber = (value?: string): { country: Country; nationalNumber: string } => {
  const fallback = Lazy(() => ({ country: getMostLikelyUserCountry(), nationalNumber: "" }));

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
