import { isNotNullish } from "@swan-io/lake/src/utils/nullish";
import { Country, countries, france } from "../constants/countries";

export const getMostLikelyUserCountry = (): Country => {
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
