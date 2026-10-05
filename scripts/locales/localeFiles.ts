import { Option, Result } from "@bloodyowl/boxed";
import fs from "fs/promises";
import os from "os";
import path from "pathe";
import { match } from "ts-pattern";
import {
  baseLocale,
  isLocaleCode,
  isRecordOfString,
  isTranslationsLock,
  LOCK_FILE,
  resolveInside,
  sortRecord,
  type TranslationsLock,
} from "./translations";

/**
 * File system helpers shared by `missingTranslations.ts` and `mergeTranslations.ts`
 * Paths are resolved before any file system call, and files of a locales directory are kept inside it
 */

/**
 * Read a file from disk, None if it doesn't exist
 */
const readFile = async (filePath: string): Promise<Result<Option<string>, Error>> => {
  const resolvedPath = path.resolve(filePath);

  try {
    return Result.Ok(Option.Some(await fs.readFile(resolvedPath, "utf-8")));
  } catch (error) {
    return match(error)
      .with({ code: "ENOENT" }, () => Result.Ok(Option.None<string>()))
      .otherwise(() => Result.Error(new Error(`Failed to read file ${resolvedPath}`)));
  }
};

const parseJson = <T>(
  filePath: string,
  content: string,
  isValid: (value: unknown) => value is T,
): Result<T, Error> =>
  Result.fromExecution<unknown, unknown>(() => JSON.parse(content))
    .mapError(() => new Error(`Invalid JSON file ${filePath}`))
    .flatMap(json =>
      isValid(json)
        ? Result.Ok<T, Error>(json)
        : Result.Error<T, Error>(new Error(`Unexpected content in ${filePath}`)),
    );

/**
 * Read a JSON file of messages (locale file, or a file of new translations)
 */
export const readMessagesFile = async (
  filePath: string,
): Promise<Result<Record<string, string>, Error>> =>
  (await readFile(filePath)).flatMap(content =>
    content.match({
      Some: content => parseJson(filePath, content, isRecordOfString),
      None: () => Result.Error(new Error(`Missing file ${filePath}`)),
    }),
  );

/**
 * Get the path of a locale file, checking the locale is a locale code (so it can't point outside the directory)
 */
export const getLocalePath = (localesDir: string, locale: string): Result<string, Error> =>
  isLocaleCode(locale)
    ? resolveInside(localesDir, `${locale}.json`)
    : Result.Error(new Error(`Invalid locale "${locale}"`));

export const readLocaleFile = (
  localesDir: string,
  locale: string,
): Promise<Result<Record<string, string>, Error>> =>
  getLocalePath(localesDir, locale).match({
    Ok: localePath => readMessagesFile(localePath),
    Error: error => Promise.resolve(Result.Error(error)),
  });

/**
 * Read the lock file of a locales directory, None if the directory doesn't use one
 */
export const readLockFile = async (
  localesDir: string,
): Promise<Result<Option<TranslationsLock>, Error>> => {
  const lockPath = path.resolve(localesDir, LOCK_FILE);

  return (await readFile(lockPath)).flatMap(content =>
    content.match({
      Some: content => parseJson(lockPath, content, isTranslationsLock).map(Option.Some),
      None: () => Result.Ok(Option.None<TranslationsLock>()),
    }),
  );
};

/**
 * List locales of a directory, except the base locale (and the lock file or any file which isn't a locale)
 */
export const getTargetLocales = async (localesDir: string): Promise<Result<string[], Error>> => {
  const resolvedDir = path.resolve(localesDir);

  try {
    const files = await fs.readdir(resolvedDir);

    return Result.Ok(
      files
        .filter(file => file.endsWith(".json") && file !== LOCK_FILE)
        .map(file => path.basename(file, ".json"))
        .filter(locale => locale !== baseLocale && isLocaleCode(locale))
        .toSorted(),
    );
  } catch {
    return Result.Error(new Error(`Failed to read locales directory ${resolvedDir}`));
  }
};

/**
 * Write JSON file to disk, keys sorted to avoid unnecessary diff
 */
export const writeJsonFile = async (
  filePath: string,
  json: Record<string, unknown>,
): Promise<Result<void, Error>> => {
  const resolvedPath = path.resolve(filePath);

  try {
    await fs.writeFile(resolvedPath, JSON.stringify(sortRecord(json), null, 2) + os.EOL, "utf-8");
    return Result.Ok(undefined);
  } catch {
    return Result.Error(new Error(`Failed to write file ${resolvedPath}`));
  }
};

const MUTEX_RETRY_DELAY = 50; // ms
const MUTEX_MAX_RETRIES = 100;

/**
 * Locales are merged in parallel (one sub-agent per locale), and they all update the same lock file
 * This mutex (a directory, created atomically) makes the read → update → write of the lock file exclusive
 */
const withLockFileMutex = async <T>(
  localesDir: string,
  run: () => Promise<Result<T, Error>>,
): Promise<Result<T, Error>> => {
  const mutexPath = path.resolve(localesDir, `${LOCK_FILE}.mutex`);

  for (let retry = 0; retry < MUTEX_MAX_RETRIES; retry++) {
    try {
      await fs.mkdir(mutexPath);
    } catch {
      await new Promise(resolve => setTimeout(resolve, MUTEX_RETRY_DELAY));
      continue;
    }

    try {
      return await run();
    } finally {
      await fs.rmdir(mutexPath);
    }
  }

  return Result.Error(
    new Error(`Lock file is busy, remove ${mutexPath} if no other merge is running`),
  );
};

/**
 * Update the entries of one locale in the lock file, if the directory uses one
 * The lock file is re-read inside the mutex so other locales' entries are kept
 */
export const updateLockFile = (
  localesDir: string,
  locale: string,
  getNextLocaleLock: (localeLock: Record<string, string>) => Record<string, string>,
): Promise<Result<Option<void>, Error>> =>
  withLockFileMutex(localesDir, async () => {
    const lock = await readLockFile(localesDir);

    if (lock.isError()) {
      return Result.Error(lock.getError());
    }

    return lock.value.match({
      Some: async lock => {
        const nextLock = { ...lock, [locale]: getNextLocaleLock(lock[locale] ?? {}) };
        const writeResult = await writeJsonFile(path.resolve(localesDir, LOCK_FILE), nextLock);
        return writeResult.map(() => Option.Some(undefined));
      },
      None: async () => Result.Ok(Option.None<void>()),
    });
  });
