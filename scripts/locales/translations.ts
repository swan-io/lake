import { Option, Result } from "@bloodyowl/boxed";
import {
  isPluralElement,
  isSelectElement,
  isStructurallySame,
  isTagElement,
  type MessageFormatElement,
  parse,
} from "@formatjs/icu-messageformat-parser";
import { createHash } from "node:crypto";
import path from "pathe";
import { P, match } from "ts-pattern";

/**
 * Pure helpers shared by `missingTranslations.ts` and `mergeTranslations.ts` (used by the `/translate` Claude skill)
 * Kept apart from the scripts so they can be unit tested without running a CLI
 */

export const baseLocale = "en";

/**
 * Optional lock file, next to the locale files: locale -> key -> hash of the en.json value the translation was generated from
 * When it exists, translations whose en.json value changed since are translated again
 * (same format as swan-internal-frontend's `checkStaleTranslations.ts`, so both tools can share it)
 */
export const LOCK_FILE = "translations.lock.json";

export type TranslationsLock = Record<string, Record<string, string>>;

/**
 * Typeguard used to check if a parsed JSON is a Record<string, string>
 */
export const isRecordOfString = (value: unknown): value is Record<string, string> => {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.values(value).every(v => typeof v === "string")
  );
};

/**
 * Typeguard used to check if a parsed JSON is a TranslationsLock
 */
export const isTranslationsLock = (value: unknown): value is TranslationsLock => {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.values(value).every(isRecordOfString)
  );
};

/**
 * Sort keys by alphabetical order to avoid unnecessary diff
 */
export const sortRecord = <T>(record: Record<string, T>): Record<string, T> =>
  Object.keys(record)
    .toSorted()
    .reduce<Record<string, T>>((acc, key) => ({ ...acc, [key]: record[key] as T }), {});

/**
 * Locale codes as used in locale file names: `fr`, `pt-BR`, `zh-Hant`…
 * Checked before using a locale in a file path, so it can't point outside its directory
 */
export const isLocaleCode = (value: string): boolean => /^[a-z]{2,3}(-[A-Za-z0-9]{2,8})*$/.test(value);

/**
 * Resolve a path from a root directory, and make sure it stays inside it (no `../` escape)
 */
export const resolveInside = (root: string, ...segments: string[]): Result<string, Error> => {
  const resolvedRoot = path.resolve(root);
  const resolvedPath = path.resolve(resolvedRoot, ...segments);

  return resolvedPath === resolvedRoot || resolvedPath.startsWith(`${resolvedRoot}/`)
    ? Result.Ok(resolvedPath)
    : Result.Error(new Error(`Path ${resolvedPath} is outside ${resolvedRoot}`));
};

export const hashTranslationSource = (value: string): string =>
  createHash("sha256").update(value).digest("hex").slice(0, 12);

/**
 * Get base locale messages to translate in the target locale:
 * - keys missing or empty in the target locale
 * - keys whose en.json value changed since their last translation (tracked in the lock file)
 */
export const getMessagesToTranslate = (
  baseLocaleJson: Record<string, string>,
  targetLocaleJson: Record<string, string>,
  localeLock: Record<string, string>,
): Option<Record<string, string>> => {
  const entries = Object.entries(baseLocaleJson).filter(([key, baseMessage]) =>
    match({ translation: targetLocaleJson[key], lockedHash: localeLock[key] })
      .with({ translation: P.nullish }, () => true)
      .with(
        { translation: P.string },
        ({ translation }) => translation.trim() === "",
        () => true,
      )
      // No lock entry means the translation predates the lock file (or was added by hand): assumed up to date
      .with({ lockedHash: P.nullish }, () => false)
      .with({ lockedHash: P.string }, ({ lockedHash }) => lockedHash !== hashTranslationSource(baseMessage))
      .exhaustive(),
  );

  return entries.length > 0 ? Option.Some(Object.fromEntries(entries)) : Option.None();
};

/**
 * Compute the lock entries of a locale after merging translations:
 * freshly translated keys get the current hash, existing entries are kept,
 * translations predating the lock file are backfilled as up to date, and keys removed from en.json are pruned
 * (same rules as swan-internal-frontend's `aiTranslate.ts`)
 */
export const getNextLocaleLock = (
  baseLocaleJson: Record<string, string>,
  targetLocaleJson: Record<string, string>,
  localeLock: Record<string, string>,
  translatedKeys: string[],
): Record<string, string> =>
  sortRecord(
    Object.fromEntries(
      Object.entries(baseLocaleJson)
        .filter(([key]) => targetLocaleJson[key] != null)
        .map(([key, baseMessage]) => [
          key,
          match(localeLock[key])
            .with(P.string, hash => (translatedKeys.includes(key) ? hashTranslationSource(baseMessage) : hash))
            .with(P.nullish, () => hashTranslationSource(baseMessage))
            .exhaustive(),
        ]),
    ),
  );

/**
 * Parse a message with the same ICU parser as @formatjs/intl uses at runtime
 */
const parseMessage = (message: string): Result<MessageFormatElement[], string> =>
  Result.fromExecution<MessageFormatElement[], unknown>(() => parse(message)).mapError(error =>
    error instanceof Error ? error.message : String(error),
  );

/**
 * List rich text tag names (<bold>…</bold>), including the ones nested in tags and plural / select branches
 * Sorted to compare them regardless of their position (word order changes between languages)
 */
const getTagNames = (elements: MessageFormatElement[]): string[] =>
  elements
    .flatMap(element =>
      match(element)
        .when(isTagElement, tag => [tag.value, ...getTagNames(tag.children)])
        .when(
          element => isPluralElement(element) || isSelectElement(element),
          ({ options }) => Object.values(options).flatMap(option => getTagNames(option.value)),
        )
        .otherwise(() => []),
    )
    .toSorted();

const isSameList = (a: string[], b: string[]): boolean =>
  a.length === b.length && a.every((item, index) => item === b[index]);

/**
 * Check that a translation has the same ICU arguments (names and types) and the same tags as the base message
 */
const compareMessages = (
  base: MessageFormatElement[],
  translation: MessageFormatElement[],
): Result<void, string> =>
  Result.fromExecution(() => isStructurallySame(base, translation))
    .mapError(() => "ICU arguments have conflicting types")
    .flatMap(result =>
      match(result)
        .with({ success: true }, () => Result.Ok(undefined))
        .otherwise(({ error }) => Result.Error(error?.message ?? "ICU arguments mismatch")),
    )
    .flatMap(() => {
      const expectedTags = getTagNames(base);
      const actualTags = getTagNames(translation);

      return isSameList(expectedTags, actualTags)
        ? Result.Ok(undefined)
        : Result.Error(
            `tags mismatch, expected [${expectedTags.join(", ")}], got [${actualTags.join(", ")}]`,
          );
    });

/**
 * Check one translation against the base locale message
 * Returns the list of errors for this key (empty if the translation is valid)
 */
export const checkTranslation = (
  key: string,
  value: string,
  baseMessage: string | undefined,
): string[] =>
  match(baseMessage)
    .with(P.nullish, () => [`${key}: not in ${baseLocale}.json`])
    .with(P.string, () => value.trim() === "", () => [`${key}: empty value`])
    .with(P.string, baseMessage =>
      Result.allFromDict({
        base: parseMessage(baseMessage).mapError(
          error => `invalid ICU message in ${baseLocale}.json (${error})`,
        ),
        translation: parseMessage(value).mapError(error => `invalid ICU message (${error})`),
      })
        .flatMap(({ base, translation }) => compareMessages(base, translation))
        .match({
          Ok: () => [],
          Error: error => [`${key}: ${error}`],
        }),
    )
    .exhaustive();
