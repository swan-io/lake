import { Option } from "@bloodyowl/boxed";
import pc from "picocolors";
import { getTargetLocales, readLocaleFile, readLockFile } from "./localeFiles";
import { baseLocale, getMessagesToTranslate, resolveInside } from "./translations";

/**
 * This script lists the translations to do in each locales directory, used by the `/translate` Claude skill.
 * - For each locales directory, we read the base locale (en.json) and every other locale file
 * - For each locale, we keep the base locale keys that are:
 *   - missing or empty
 *   - stale: their en.json value changed since their last translation (only if the directory has a lock file)
 * - We print the result as JSON on stdout: { [localesDir]: { [locale]: { [key]: baseLocaleValue } } }
 *   (only directories and locales with something to translate are listed, so `{}` means there is nothing to do)
 *
 * Usage: tsx scripts/locales/missingTranslations.ts <localesDir> [...localesDirs]
 */

const exitWithError = (error: Error): never => {
  console.error(pc.red(error.message));
  process.exit(1);
};

/**
 * Get the messages to translate, per locale, of one locales directory
 */
const getDirectoryMessages = async (
  localesDir: string,
): Promise<Option<Record<string, Record<string, string>>>> => {
  const baseJson = await readLocaleFile(localesDir, baseLocale);
  const targetLocales = await getTargetLocales(localesDir);
  const lock = await readLockFile(localesDir);

  if (baseJson.isError()) {
    return exitWithError(baseJson.getError());
  }
  if (targetLocales.isError()) {
    return exitWithError(targetLocales.getError());
  }
  if (lock.isError()) {
    return exitWithError(lock.getError());
  }

  const messagesByLocale: Record<string, Record<string, string>> = {};

  for (const locale of targetLocales.value) {
    const targetJson = await readLocaleFile(localesDir, locale);

    if (targetJson.isError()) {
      return exitWithError(targetJson.getError());
    }

    const localeLock = lock.value.flatMap(lock => Option.fromNullable(lock[locale])).getOr({});

    getMessagesToTranslate(baseJson.value, targetJson.value, localeLock).match({
      Some: messages => {
        messagesByLocale[locale] = messages;
      },
      None: () => {},
    });
  }

  return Object.keys(messagesByLocale).length > 0
    ? Option.Some(messagesByLocale)
    : Option.None();
};

const main = async () => {
  const localesDirs = process.argv.slice(2);

  if (localesDirs.length === 0) {
    exitWithError(
      new Error("Usage: tsx scripts/locales/missingTranslations.ts <localesDir> [...localesDirs]"),
    );
  }

  const messagesByDirectory: Record<string, Record<string, Record<string, string>>> = {};

  for (const localesDir of localesDirs) {
    if (resolveInside(process.cwd(), localesDir).isError()) {
      exitWithError(new Error(`The locales directory must be inside ${process.cwd()}: ${localesDir}`));
    }

    (await getDirectoryMessages(localesDir)).match({
      Some: messages => {
        messagesByDirectory[localesDir] = messages;
      },
      None: () => {},
    });
  }

  console.log(JSON.stringify(messagesByDirectory, null, 2));
};

void main();
