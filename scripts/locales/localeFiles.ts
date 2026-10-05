import { Option, Result } from "@bloodyowl/boxed";
import fs from "fs/promises";
import os from "os";
import path from "pathe";
import { match } from "ts-pattern";
import {
  baseLocale,
  isRecordOfString,
  isTranslationsLock,
  LOCK_FILE,
  sortRecord,
  type TranslationsLock,
} from "./translations";

/**
 * File system helpers shared by `missingTranslations.ts` and `mergeTranslations.ts`
 */

/**
 * Read a file from disk, None if it doesn't exist
 */
const readFile = async (filePath: string): Promise<Result<Option<string>, Error>> => {
  try {
    return Result.Ok(Option.Some(await fs.readFile(filePath, "utf-8")));
  } catch (error) {
    return match(error)
      .with({ code: "ENOENT" }, () => Result.Ok(Option.None<string>()))
      .otherwise(() => Result.Error(new Error(`Failed to read file ${filePath}`)));
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

export const readLocaleFile = (
  localesDir: string,
  locale: string,
): Promise<Result<Record<string, string>, Error>> =>
  readMessagesFile(path.join(localesDir, `${locale}.json`));

/**
 * Read the lock file of a locales directory, None if the directory doesn't use one
 */
export const readLockFile = async (
  localesDir: string,
): Promise<Result<Option<TranslationsLock>, Error>> => {
  const lockPath = path.join(localesDir, LOCK_FILE);

  return (await readFile(lockPath)).flatMap(content =>
    content.match({
      Some: content => parseJson(lockPath, content, isTranslationsLock).map(Option.Some),
      None: () => Result.Ok(Option.None<TranslationsLock>()),
    }),
  );
};

/**
 * List locales of a directory, except the base locale (and the lock file)
 */
export const getTargetLocales = async (localesDir: string): Promise<Result<string[], Error>> => {
  try {
    const files = await fs.readdir(localesDir);

    return Result.Ok(
      files
        .filter(file => file.endsWith(".json") && file !== LOCK_FILE)
        .map(file => path.basename(file, ".json"))
        .filter(locale => locale !== baseLocale)
        .toSorted(),
    );
  } catch (error) {
    console.error(error);
    return Result.Error(new Error(`Failed to read locales directory ${localesDir}`));
  }
};

/**
 * Write JSON file to disk, keys sorted to avoid unnecessary diff
 */
export const writeJsonFile = async (
  filePath: string,
  json: Record<string, unknown>,
): Promise<Result<void, Error>> => {
  try {
    await fs.writeFile(filePath, JSON.stringify(sortRecord(json), null, 2) + os.EOL, "utf-8");
    return Result.Ok(undefined);
  } catch (error) {
    console.error(error);
    return Result.Error(new Error(`Failed to write file ${filePath}`));
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
  const mutexPath = path.join(localesDir, `${LOCK_FILE}.mutex`);

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
        const writeResult = await writeJsonFile(path.join(localesDir, LOCK_FILE), nextLock);
        return writeResult.map(() => Option.Some(undefined));
      },
      None: async () => Result.Ok(Option.None<void>()),
    });
  });
