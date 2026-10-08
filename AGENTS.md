# AGENTS.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Quality checks
pnpm typecheck          # TypeScript type checking (tsc --noEmit)
pnpm lint               # Biome linter
pnpm test               # Run Vitest tests
pnpm format             # Biome formatting

# Build
pnpm build              # Build TypeScript output for both packages
pnpm build-storybook    # Build static Storybook to dist/

# Run a single test file
pnpm test packages/lake/src/__tests__/MyFile.test.ts

# Validate/generate
pnpm validate-locales   # Validate translation JSON files
```

## Architecture

This is a **pnpm workspace monorepo** (`packages/*`) with two published packages:

### `packages/lake` — `@swan-io/lake`

Swan's core design system. Source is in `src/`:

- `components/` — 80+ UI components built on React Native Web
- `hooks/` — reusable UI hooks (useAsync, useDebounce, useResponsive, etc.)
- `utils/` — pure utility functions (array, string, file, a11y, math, etc.)
- `constants/` — design tokens: colors, spacings, animations, radii
- `icons/` — generated Fluent UI SVG icons (do not edit directly; use `pnpm icons`)
- `assets/` — Inter font CSS, CSS reset

### `packages/shared-business` — `@swan-io/shared-business`

Business-domain components that depend on `@swan-io/lake`. Source in `src/`:

- `components/` — 28 business-specific components
- `locales/` — translation JSON files managed via Localazy
- `state/` — atomic state management with react-atomic-state
- `hooks/`, `utils/`, `constants/` — business-level equivalents

### Key architectural decisions

**Styling**: Components use React Native's `StyleSheet` API via `react-native-web`, not CSS classes. `Box` is the foundational layout primitive.

**Pattern matching**: Use `ts-pattern` for branching on discriminated unions instead of if/else chains.

**Boxed types**: `@swan-io/boxed` provides `Option`, `Result`, and `AsyncData` — prefer these over `null`/`undefined`/thrown errors where they're already used.

**Forms**: `@swan-io/use-form` for form state; `rifm` for input masks.

**Routing**: `@swan-io/chicane` for URL-based routing.

**State**: `react-atomic-state` for cross-component atom-based state (in shared-business).

**Icons**: Fluent UI icons are generated from `icons.json` — add icons there and run `pnpm icons` rather than creating icon files manually.

## Unit test

Tests live in `__tests__/` directories adjacent to source files, named `<FileName>.test.ts[x]`.

Test setup is in `scripts/tests/testSetup.ts` (dayjs plugins, matchMedia polyfill).

Unit test should focus on pure business logic (formatters, validators, parsers, utils) like files in /utils folders, and explicitly skips React components.

## Linting & Formatting

- **Biome** handles linting and format config is defined in `biome.jsonc`

Pre-commit hooks run lint-staged on `packages/*/src/**/*.{ts,tsx}`.

> **Prettier** is installed only for `crawlLicenses.ts` script for formatting markdown file

## Localization

Translation files live in `packages/shared-business/src/locales/`: `en.json` is the source of truth, and every other locale (`de`, `es`, `fi`, `fr`, `it`, `nl`, `pt`) must have the same keys. Translations are synced with Localazy, but are written in this repo together with the code that uses them.

Whenever you add or change a key in `en.json`, add or update its translation in **every** locale file in the same change:

- Before translating, read the existing locale file and reuse its terms, its formal/informal register (e.g. _vous_, _Sie_) and its punctuation (e.g. the French space before `:`). Keys sharing a prefix belong to the same screen: keep them consistent.
- Keep ICU syntax exactly: `{arguments}` stay untranslated; in `plural` / `select`, translate only the text inside the branches (keep the argument name, the keyword, the selectors and `#`). Keep rich text tags (`<bold>…</bold>`) and `\n` line breaks.
- Don't translate Swan, product names, IBAN, BIC, SEPA, SWIFT, currency codes or legal identifiers.
- When you change an English value, update every translation of that key, keeping the existing wording where it still fits.
- When you remove a key from `en.json`, remove it from every locale file.

### Before committing

When a change touches strings (`en.json`, a locale file or a `t("…")` call), complete these steps and only commit once they all pass:

1. Every key added or changed in `en.json` is added or updated in **every** locale file (`de`, `es`, `fi`, `fr`, `it`, `nl`, `pt`), and every key removed from `en.json` is removed everywhere.
2. `pnpm sort-locales`: sorts the keys of every locale file alphabetically.
3. `pnpm validate-locales`: must pass. It checks that every locale has the same keys as `en.json`, no empty value, and valid ICU messages with the same arguments and tags.
4. `pnpm typecheck`: must pass. A `t("…")` key missing from `en.json` fails here (`Argument of type '"<key>"' is not assignable…`).

In your summary, list the keys you added or changed and any translation you're unsure about, so it can be reviewed. CI runs `validate-locales` and `typecheck` again on every push.
