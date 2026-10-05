import { Result } from "@bloodyowl/boxed";
import pc from "picocolors";
import {
  getLocalePath,
  readLocaleFile,
  readMessagesFile,
  updateLockFile,
  writeJsonFile,
} from "./localeFiles";
import {
  baseLocale,
  checkTranslation,
  getNextLocaleLock,
  isLocaleCode,
  resolveInside,
} from "./translations";

/**
 * This script merges new translations into a locale file, used by the `/translate` Claude skill.
 * - We read the base locale (en.json), the target locale and the file of new translations
 * - Each new translation is checked against the base locale:
 *   - the key must exist in the base locale
 *   - the value must not be empty
 *   - both must be valid ICU messages, with the same arguments ({name}, {count, plural, ...})
 *     and the same rich text tags (<bold>…</bold>)
 * - If any check fails, we print the errors and nothing is written
 * - Otherwise, we write the target locale with the new translations, sorted by key
 * - If the directory has a lock file, we record the en.json value hash of the merged keys
 *
 * Usage: tsx scripts/locales/mergeTranslations.ts <localesDir> <locale> <translationsFile>
 */

const printLocale = (locale: string): string => pc.green(locale);
const printNbKeys = (nbKeys: number): string => pc.bold(nbKeys);

const exitWithError = (message: string): never => {
  console.error(pc.red(message));
  process.exit(1);
};

const main = async () => {
  const [localesDir, locale, translationsFile] = process.argv.slice(2);

  if (localesDir == null || locale == null || translationsFile == null) {
    return exitWithError(
      "Usage: tsx scripts/locales/mergeTranslations.ts <localesDir> <locale> <translationsFile>",
    );
  }

  if (locale === baseLocale) {
    return exitWithError(`Refusing to merge into the base locale (${baseLocale})`);
  }
  if (!isLocaleCode(locale)) {
    return exitWithError(`Invalid locale "${locale}"`);
  }
  if (!translationsFile.endsWith(".json")) {
    return exitWithError(`The translations file must be a .json file: ${translationsFile}`);
  }
  // Locale files are only written inside the repo
  if (resolveInside(process.cwd(), localesDir).isError()) {
    return exitWithError(`The locales directory must be inside ${process.cwd()}: ${localesDir}`);
  }

  const files = Result.all([
    await readLocaleFile(localesDir, baseLocale),
    await readLocaleFile(localesDir, locale),
    await readMessagesFile(translationsFile),
  ]);

  if (files.isError()) {
    return exitWithError(files.getError().message);
  }

  const [baseJson, targetJson, translations] = files.value;
  const translatedKeys = Object.keys(translations);

  const errors = Object.entries(translations).flatMap(([key, value]) =>
    checkTranslation(key, value, baseJson[key]),
  );

  if (errors.length > 0) {
    console.error(
      pc.red(`${errors.length} error(s), ${printLocale(locale)} locale file was not modified:`),
    );
    errors.forEach(error => console.error(`  - ${error}`));
    process.exit(1);
  }

  const mergedJson = { ...targetJson, ...translations };
  const writeResult = await getLocalePath(localesDir, locale).match({
    Ok: localePath => writeJsonFile(localePath, mergedJson),
    Error: error => Promise.resolve(Result.Error<void, Error>(error)),
  });

  if (writeResult.isError()) {
    return exitWithError(writeResult.getError().message);
  }

  const lockResult = await updateLockFile(localesDir, locale, localeLock =>
    getNextLocaleLock(baseJson, mergedJson, localeLock, translatedKeys),
  );

  lockResult.match({
    Ok: lockUpdated =>
      console.log(
        `Merged ${printNbKeys(translatedKeys.length)} keys into ${printLocale(locale)}${lockUpdated.isSome() ? ", lock file updated" : ""}`,
      ),
    Error: error =>
      exitWithError(`Merged ${locale} but failed to update the lock file: ${error.message}`),
  });
};

void main();
