import { Option, Result } from "@bloodyowl/boxed";
import { describe, expect, test } from "vitest";
import {
  checkTranslation,
  getMessagesToTranslate,
  getNextLocaleLock,
  hashTranslationSource,
  isLocaleCode,
  isRecordOfString,
  isTranslationsLock,
  resolveInside,
  sortRecord,
} from "../translations";

describe("isRecordOfString", () => {
  test("accepts a flat object of strings", () => {
    expect(isRecordOfString({})).toBe(true);
    expect(isRecordOfString({ a: "A", b: "B" })).toBe(true);
  });

  test("rejects anything else", () => {
    expect(isRecordOfString(null)).toBe(false);
    expect(isRecordOfString("a")).toBe(false);
    expect(isRecordOfString(["a"])).toBe(false);
    expect(isRecordOfString({ a: 1 })).toBe(false);
    expect(isRecordOfString({ a: { b: "B" } })).toBe(false);
  });
});

describe("isTranslationsLock", () => {
  test("accepts locale -> key -> hash", () => {
    expect(isTranslationsLock({})).toBe(true);
    expect(isTranslationsLock({ fr: { "a.title": "be3702e3f1af" }, de: {} })).toBe(true);
  });

  test("rejects anything else", () => {
    expect(isTranslationsLock(null)).toBe(false);
    expect(isTranslationsLock([])).toBe(false);
    expect(isTranslationsLock({ fr: "be3702e3f1af" })).toBe(false);
    expect(isTranslationsLock({ fr: { "a.title": 1 } })).toBe(false);
  });
});

describe("isLocaleCode", () => {
  test("accepts locale codes", () => {
    expect(["en", "fr", "fil", "pt-BR", "zh-Hant", "es-419"].every(isLocaleCode)).toBe(true);
  });

  test("rejects anything which could point outside a directory, or isn't a locale", () => {
    expect(["", "../fr", "fr/../../x", "/etc/passwd", "fr.json", "FR", "translations.lock", "notes"].some(isLocaleCode)).toBe(false);
  });

  test("rejects empty subtags and overly long codes", () => {
    expect(["fr-", "-fr", "fr--BR", `en${"-abcd".repeat(10)}`].some(isLocaleCode)).toBe(false);
  });
});

describe("resolveInside", () => {
  test("resolves a path inside the root", () => {
    expect(resolveInside("/repo/locales", "fr.json")).toEqual(Result.Ok("/repo/locales/fr.json"));
    expect(resolveInside("/repo", "clients/app/src/locales")).toEqual(Result.Ok("/repo/clients/app/src/locales"));
    expect(resolveInside("/repo", ".")).toEqual(Result.Ok("/repo"));
  });

  test("rejects a path escaping the root", () => {
    expect(resolveInside("/repo/locales", "../secret.json").isError()).toBe(true);
    expect(resolveInside("/repo/locales", "/etc/passwd").isError()).toBe(true);
    expect(resolveInside("/repo", "../repo-other/locales").isError()).toBe(true);
  });
});

describe("sortRecord", () => {
  test("sorts keys by alphabetical order", () => {
    expect(Object.keys(sortRecord({ b: 1, c: 2, a: 3 }))).toEqual(["a", "b", "c"]);
  });
});

describe("hashTranslationSource", () => {
  // Must stay identical to swan-internal-frontend's `checkStaleTranslations.ts`, which shares the lock file format
  test("returns the first 12 hex characters of the sha256", () => {
    expect(hashTranslationSource("Card")).toBe("be3702e3f1af");
    expect(hashTranslationSource("From {openingDate} to {closingDate}")).toBe("e6d0be0e9946");
  });
});

describe("getMessagesToTranslate", () => {
  const base = { "a.title": "Title", "a.description": "Description", "a.button": "Save" };
  const complete = { "a.title": "Titre", "a.description": "Description", "a.button": "Enregistrer" };

  test("returns keys missing in the target locale, with their base value", () => {
    expect(getMessagesToTranslate(base, { "a.title": "Titre" }, {})).toEqual(
      Option.Some({ "a.description": "Description", "a.button": "Save" }),
    );
  });

  test("treats empty or blank values as missing", () => {
    expect(
      getMessagesToTranslate(base, { "a.title": "", "a.description": "  ", "a.button": "Enregistrer" }, {}),
    ).toEqual(Option.Some({ "a.title": "Title", "a.description": "Description" }));
  });

  test("ignores keys which only exist in the target locale", () => {
    expect(getMessagesToTranslate(base, { ...complete, "a.removed": "Supprimé" }, {})).toEqual(Option.None());
  });

  test("returns None when the target locale is complete", () => {
    expect(getMessagesToTranslate(base, complete, {})).toEqual(Option.None());
  });

  describe("with a lock file", () => {
    const freshLock = {
      "a.title": hashTranslationSource("Title"),
      "a.description": hashTranslationSource("Description"),
      "a.button": hashTranslationSource("Save"),
    };

    test("returns None when every translation is up to date", () => {
      expect(getMessagesToTranslate(base, complete, freshLock)).toEqual(Option.None());
    });

    test("returns keys whose base value changed since their translation", () => {
      const lock = { ...freshLock, "a.button": hashTranslationSource("Submit") };
      expect(getMessagesToTranslate(base, complete, lock)).toEqual(Option.Some({ "a.button": "Save" }));
    });

    test("assumes translations without a lock entry are up to date", () => {
      expect(getMessagesToTranslate(base, complete, { "a.title": freshLock["a.title"] })).toEqual(
        Option.None(),
      );
    });

    test("returns both missing and stale keys", () => {
      const lock = { ...freshLock, "a.title": hashTranslationSource("Old title") };
      expect(getMessagesToTranslate(base, { "a.title": "Titre", "a.button": "Enregistrer" }, lock)).toEqual(
        Option.Some({ "a.title": "Title", "a.description": "Description" }),
      );
    });
  });
});

describe("getNextLocaleLock", () => {
  const base = { "a.title": "Title", "a.description": "Description", "a.button": "Save" };
  const complete = { "a.title": "Titre", "a.description": "Description", "a.button": "Enregistrer" };

  test("records the current base value hash of translated keys", () => {
    const staleLock = { "a.title": hashTranslationSource("Old title") };
    expect(getNextLocaleLock(base, complete, staleLock, ["a.title"])["a.title"]).toBe(
      hashTranslationSource("Title"),
    );
  });

  test("keeps existing entries of keys which weren't translated", () => {
    const staleLock = { "a.title": hashTranslationSource("Old title") };
    expect(getNextLocaleLock(base, complete, staleLock, ["a.button"])["a.title"]).toBe(
      hashTranslationSource("Old title"),
    );
  });

  test("backfills translations without a lock entry as up to date", () => {
    expect(getNextLocaleLock(base, complete, {}, [])).toEqual({
      "a.button": hashTranslationSource("Save"),
      "a.description": hashTranslationSource("Description"),
      "a.title": hashTranslationSource("Title"),
    });
  });

  test("prunes keys which are no longer in the base locale or not translated", () => {
    const lock = getNextLocaleLock(
      base,
      { "a.title": "Titre", "a.removed": "Supprimé" },
      { "a.removed": hashTranslationSource("Removed") },
      [],
    );
    expect(Object.keys(lock)).toEqual(["a.title"]);
  });

  test("sorts keys", () => {
    expect(Object.keys(getNextLocaleLock(base, complete, {}, []))).toEqual([
      "a.button",
      "a.description",
      "a.title",
    ]);
  });
});

describe("checkTranslation", () => {
  test("accepts a valid translation", () => {
    expect(checkTranslation("a.card", "Carte", "Card")).toEqual([]);
  });

  test("rejects a key which isn't in the base locale", () => {
    expect(checkTranslation("a.unknown", "Inconnu", undefined)).toEqual([
      "a.unknown: not in en.json",
    ]);
  });

  test("rejects an empty or blank value", () => {
    expect(checkTranslation("a.card", "", "Card")).toEqual(["a.card: empty value"]);
    expect(checkTranslation("a.card", "  ", "Card")).toEqual(["a.card: empty value"]);
  });

  describe("ICU arguments", () => {
    const base = "From {openingDate} to {closingDate}";

    test("accepts arguments in a different order", () => {
      expect(checkTranslation("a.date", "Bis {closingDate}, ab {openingDate}", base)).toEqual([]);
    });

    test("rejects a renamed argument", () => {
      expect(checkTranslation("a.date", "Du {dateOuverture} au {closingDate}", base)).toHaveLength(1);
    });

    test("rejects a missing argument", () => {
      expect(checkTranslation("a.date", "Jusqu'au {closingDate}", base)).toHaveLength(1);
    });

    test("rejects an extra argument", () => {
      expect(checkTranslation("a.card", "Carte {name}", "Card")).toHaveLength(1);
    });

    test("rejects an argument whose type changed", () => {
      expect(
        checkTranslation("a.count", "{count} éléments", "{count, plural, one {# item} other {# items}}"),
      ).toHaveLength(1);
    });

    test("rejects an invalid ICU message", () => {
      const [error] = checkTranslation("a.date", "Du {openingDate au {closingDate}", base);
      expect(error).toMatch(/^a\.date: invalid ICU message/);
    });
  });

  describe("plural and select", () => {
    const plural = "{count, plural, one {# item} other {# items}}";

    test("accepts translated branches", () => {
      expect(checkTranslation("a.count", "{count, plural, one {# élément} other {# éléments}}", plural)).toEqual([]);
    });

    test("doesn't read branch content as an argument", () => {
      expect(checkTranslation("a.count", "{count, plural, one {un élément} other {# éléments}}", plural)).toEqual([]);
    });

    test("accepts extra plural categories needed by the target language", () => {
      expect(
        checkTranslation("a.count", "{count, plural, one {# element} few {# elementy} many {# elementów} other {# elementu}}", plural),
      ).toEqual([]);
    });

    test("rejects a renamed plural argument", () => {
      expect(checkTranslation("a.count", "{nombre, plural, one {# élément} other {# éléments}}", plural)).toHaveLength(1);
    });

    test("rejects a missing argument nested in a branch", () => {
      expect(
        checkTranslation(
          "a.type",
          "{type, select, card {Carte} other {Autre}}",
          "{type, select, card {Card {name}} other {Other}}",
        ),
      ).toHaveLength(1);
    });
  });

  describe("rich text tags", () => {
    const base = "From <span>{openingDate}</span> to <span>{closingDate}</span>";

    test("accepts the same tags", () => {
      expect(checkTranslation("a.date", "Du <span>{openingDate}</span> au <span>{closingDate}</span>", base)).toEqual([]);
    });

    test("rejects a missing tag occurrence", () => {
      expect(checkTranslation("a.date", "Du <span>{openingDate}</span> au {closingDate}", base)).toEqual([
        "a.date: tags mismatch, expected [span, span], got [span]",
      ]);
    });

    test("rejects a renamed tag", () => {
      expect(
        checkTranslation("a.date", "Du <bold>{openingDate}</bold> au <span>{closingDate}</span>", base),
      ).toHaveLength(1);
    });

    test("rejects an unclosed tag", () => {
      const [error] = checkTranslation("a.date", "Du <span>{openingDate} au <span>{closingDate}</span>", base);
      expect(error).toMatch(/^a\.date: invalid ICU message/);
    });

    test("checks tags nested in plural branches", () => {
      expect(
        checkTranslation(
          "a.count",
          "{count, plural, one {<bold>#</bold> élément} other {# éléments}}",
          "{count, plural, one {<bold>#</bold> item} other {<bold>#</bold> items}}",
        ),
      ).toEqual(["a.count: tags mismatch, expected [bold, bold], got [bold]"]);
    });
  });

  test("reports an invalid base message", () => {
    const [error] = checkTranslation("a.date", "Du {openingDate}", "From {openingDate");
    expect(error).toMatch(/^a\.date: invalid ICU message in en\.json/);
  });
});
