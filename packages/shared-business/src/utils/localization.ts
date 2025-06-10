import { Country, france, getCountryByCCA2, isCountryCCA2 } from "../constants/countries";

export const getMostLikelyUserCountry = (): Country => {
  const countries = navigator.languages.map(language => language.split("-")[1]);

  for (const country of countries) {
    if (isCountryCCA2(country)) {
      return getCountryByCCA2(country);
    }
  }

  // fallback to france when no valid country found in navigator locales
  return france;
};
