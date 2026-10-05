import { Option } from "@bloodyowl/boxed";
import fs from "fs/promises";
import os from "os";
import path from "pathe";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import {
  getTargetLocales,
  readLocaleFile,
  readLockFile,
  readMessagesFile,
  updateLockFile,
  writeJsonFile,
} from "../localeFiles";
import { LOCK_FILE } from "../translations";

let localesDir: string;

beforeEach(async () => {
  localesDir = await fs.mkdtemp(path.join(os.tmpdir(), "locale-files-"));
});

afterEach(async () => {
  await fs.rm(localesDir, { recursive: true, force: true });
});

const writeFile = (name: string, content: unknown) =>
  fs.writeFile(
    path.join(localesDir, name),
    typeof content === "string" ? content : JSON.stringify(content),
    "utf-8",
  );

const readJson = async (name: string): Promise<unknown> =>
  JSON.parse(await fs.readFile(path.join(localesDir, name), "utf-8"));

describe("readMessagesFile", () => {
  test("reads a flat JSON object of strings", async () => {
    await writeFile("fr.json", { "a.title": "Titre" });

    const result = await readMessagesFile(path.join(localesDir, "fr.json"));
    expect(result.isOk() && result.value).toEqual({ "a.title": "Titre" });
  });

  test("fails on a missing file", async () => {
    const result = await readMessagesFile(path.join(localesDir, "fr.json"));
    expect(result.isError() && result.getError().message).toMatch(/^Missing file/);
  });

  test("fails on invalid JSON", async () => {
    await writeFile("fr.json", "{ not json");

    const result = await readMessagesFile(path.join(localesDir, "fr.json"));
    expect(result.isError() && result.getError().message).toMatch(/^Invalid JSON file/);
  });

  test("fails on JSON which isn't a flat object of strings", async () => {
    await writeFile("fr.json", { a: { b: "B" } });

    const result = await readMessagesFile(path.join(localesDir, "fr.json"));
    expect(result.isError() && result.getError().message).toMatch(/^Unexpected content/);
  });

  test("fails on a path which can't be read", async () => {
    const result = await readMessagesFile(localesDir);
    expect(result.isError() && result.getError().message).toMatch(/^Failed to read file/);
  });
});

describe("readLocaleFile", () => {
  test("reads <localesDir>/<locale>.json", async () => {
    await writeFile("de.json", { "a.title": "Titel" });

    const result = await readLocaleFile(localesDir, "de");
    expect(result.isOk() && result.value).toEqual({ "a.title": "Titel" });
  });
});

describe("readLockFile", () => {
  test("returns None when the directory has no lock file", async () => {
    const result = await readLockFile(localesDir);
    expect(result.isOk() && result.value).toEqual(Option.None());
  });

  test("returns the lock when it exists", async () => {
    const lock = { fr: { "a.title": "be3702e3f1af" } };
    await writeFile(LOCK_FILE, lock);

    const result = await readLockFile(localesDir);
    expect(result.isOk() && result.value).toEqual(Option.Some(lock));
  });

  test("fails on an invalid lock file", async () => {
    await writeFile(LOCK_FILE, { fr: "be3702e3f1af" });

    const result = await readLockFile(localesDir);
    expect(result.isError()).toBe(true);
  });
});

describe("getTargetLocales", () => {
  test("lists locales, sorted, except the base locale, the lock file and other files", async () => {
    await Promise.all(
      ["fr.json", "en.json", "de.json", LOCK_FILE, "README.md"].map(name => writeFile(name, {})),
    );

    const result = await getTargetLocales(localesDir);
    expect(result.isOk() && result.value).toEqual(["de", "fr"]);
  });

  test("fails on a missing directory", async () => {
    const result = await getTargetLocales(path.join(localesDir, "missing"));
    expect(result.isError()).toBe(true);
  });
});

describe("writeJsonFile", () => {
  test("writes keys sorted, indented, with a final line break", async () => {
    const result = await writeJsonFile(path.join(localesDir, "fr.json"), { b: "B", a: "A" });

    expect(result.isOk()).toBe(true);
    expect(await fs.readFile(path.join(localesDir, "fr.json"), "utf-8")).toBe(
      `{\n  "a": "A",\n  "b": "B"\n}${os.EOL}`,
    );
  });

  test("fails when the file can't be written", async () => {
    const result = await writeJsonFile(path.join(localesDir, "missing", "fr.json"), {});
    expect(result.isError()).toBe(true);
  });
});

describe("updateLockFile", () => {
  test("does nothing when the directory has no lock file", async () => {
    const result = await updateLockFile(localesDir, "fr", () => ({ "a.title": "be3702e3f1af" }));

    expect(result.isOk() && result.value).toEqual(Option.None());
    expect(await fs.readdir(localesDir)).toEqual([]);
  });

  test("replaces the entries of the locale and keeps the other locales", async () => {
    await writeFile(LOCK_FILE, { fr: { "a.title": "old" }, de: { "a.title": "de-hash" } });

    const result = await updateLockFile(localesDir, "fr", localeLock => ({
      ...localeLock,
      "a.button": "new",
    }));

    expect(result.isOk() && result.value).toEqual(Option.Some(undefined));
    expect(await readJson(LOCK_FILE)).toEqual({
      de: { "a.title": "de-hash" },
      fr: { "a.button": "new", "a.title": "old" },
    });
  });

  test("passes empty entries for a locale which isn't in the lock yet", async () => {
    await writeFile(LOCK_FILE, {});

    await updateLockFile(localesDir, "fi", localeLock => {
      expect(localeLock).toEqual({});
      return { "a.title": "fi-hash" };
    });

    expect(await readJson(LOCK_FILE)).toEqual({ fi: { "a.title": "fi-hash" } });
  });

  test("keeps every locale when updates run in parallel", async () => {
    const locales = ["de", "es", "fi", "fr", "it", "nl", "pt"];
    await writeFile(LOCK_FILE, {});

    const results = await Promise.all(
      locales.map(locale => updateLockFile(localesDir, locale, () => ({ "a.title": locale }))),
    );

    expect(results.every(result => result.isOk())).toBe(true);
    expect(await readJson(LOCK_FILE)).toEqual(
      Object.fromEntries(locales.map(locale => [locale, { "a.title": locale }])),
    );
  });

  test("releases the mutex, even when the update fails", async () => {
    await writeFile(LOCK_FILE, { fr: "invalid" });

    const result = await updateLockFile(localesDir, "fr", localeLock => localeLock);

    expect(result.isError()).toBe(true);
    expect((await fs.readdir(localesDir)).toSorted()).toEqual([LOCK_FILE]);
  });
});
