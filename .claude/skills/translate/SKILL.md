---
name: translate
description: Translate i18n keys from en.json into every other locale (fr, de, es, it, pt, nl, fi), replacing the `pnpm ai-translate` script. Handles new keys and, where a translations lock file exists, keys whose English changed. Use when the user asks to translate new keys, fill missing translations, update stale translations, run ai-translate, or after adding or changing keys in a `locales/en.json`.
---

# Translate locale keys

Each app has a locales directory holding `en.json` (the source of truth) and one `<locale>.json` per language with the same keys. Some directories also hold a `translations.lock.json`, which records which English text each translation was made from. Never edit locale JSON or lock files by hand: all writes go through `pnpm merge-translations`, which checks the ICU arguments and tags, keeps the file sorted and updates the lock file.

## 1. Find what to translate

```bash
pnpm -s missing-translations
```

It checks every locales directory of the repo. The output is `{ "<localesDir>": { "<locale>": { "<key>": "<english value>" } } }`, listing only directories and locales with something to translate:
- keys missing or empty in the locale
- keys whose English value changed since they were translated (only in directories with a lock file); the locale file still has the old translation

If it prints `{}`, say there is nothing to translate and stop.

## 2. Translate in parallel

For every (directory, locale) pair in the output, start one `locale-translator` sub-agent. Send them all in a single message so they run at the same time. Give each one:

- the locales directory, the locale code and the language name (fr French, de German, es Spanish, it Italian, pt Portuguese, nl Dutch, fi Finnish)
- the keys to translate with their English values, as JSON
- the path of a scratch file to write its result to, unique per pair, in a temporary directory (your scratchpad, or `$RUNNER_TEMP` in CI), e.g. `<tmp>/translations-<app>-<locale>.json`

The sub-agent writes its translations to that file, merges them with `pnpm -s merge-translations <localesDir> <locale> <file>`, and reports back.

If the user only asks for some apps, locales or keys, start agents only for those.

## 3. Check and report

```bash
pnpm validate-locales
pnpm format-locales
```

Then report to the user:
- the number of keys translated per app and locale, split into new and updated (stale) keys
- any keys a sub-agent flagged as uncertain (ambiguous source, missing UI context, wording it had to make up), with the chosen translation, so the user can review them
- any locale that failed to merge, with the error

Don't commit. The user reviews the diff first.
