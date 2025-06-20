import { intersection } from "@swan-io/lake/src/utils/array";
import { isNotNullish, isNullish } from "@swan-io/lake/src/utils/nullish";

export const LANGUAGE_FALLBACK = "en";
const PREFERRED_LANGUAGE_KEY = "swan__PreferredLanguage";

let supportedLanguages: readonly string[] | undefined;

export const getLanguagesHelpers = <SupportedLanguages extends readonly string[]>(
  languages: SupportedLanguages,
) => {
  type SupportedLanguage = SupportedLanguages[number];

  // Restrict shared-business supported languages to the current project ones
  supportedLanguages = isNullish(supportedLanguages)
    ? languages
    : intersection(supportedLanguages, languages);

  const isSupportedLanguage = (language: string): language is SupportedLanguage =>
    (supportedLanguages ?? []).includes(language as SupportedLanguage);

  const getFirstSupportedLanguage = (languages: string[]): SupportedLanguage =>
    languages.find(isSupportedLanguage) ?? LANGUAGE_FALLBACK;

  const getPreferredLanguage = (): string | undefined => {
    try {
      return localStorage.getItem(PREFERRED_LANGUAGE_KEY) ?? undefined;
    } catch {
      return;
    }
  };

  return {
    getFirstSupportedLanguage,

    setPreferredLanguage: (language: SupportedLanguage) => {
      try {
        localStorage.setItem(PREFERRED_LANGUAGE_KEY, language);
        const url = new URL(window.location.href);
        url.searchParams.delete("lang");
        window.location.replace(url.toString());
      } catch {
        return;
      }
    },

    getBestLocale: <Locale>(locales: Record<SupportedLanguage, () => Locale>): Locale => {
      const searchParams = new URLSearchParams(document.location.search);
      const langParam = searchParams.get("lang")?.split("-")[0];

      if (isNotNullish(langParam) && isSupportedLanguage(langParam)) {
        return locales[langParam]();
      }

      const preferredLanguage = getPreferredLanguage();

      const language = getFirstSupportedLanguage(
        [...(isNotNullish(preferredLanguage) ? [preferredLanguage] : []), ...navigator.languages]
          .map(language => language.split("-")[0])
          .filter(isNotNullish),
      );

      return locales[language]();
    },
  };
};
