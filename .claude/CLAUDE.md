# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Quality checks
pnpm typecheck          # TypeScript type checking (tsc --noEmit)
pnpm lint               # Biome linter
pnpm test               # Run Vitest tests
pnpm format             # Prettier formatting

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

Two separate tools:

- **Biome** handles linting only (`biome.json` — formatter/imports disabled)
- **Prettier** (with `@trivago/prettier-plugin-sort-imports`) handles formatting and import sorting

Pre-commit hooks run lint-staged on `packages/*/src/**/*.{ts,tsx}`.

## Localization

Translation files in `packages/shared-business/src/locales/` are managed via Localazy. Use `pnpm validate-locales` to check consistency. Do not manually sort locale files — a script handles that.
