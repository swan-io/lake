# Design system tokens

Generates the tokens of the **Swan Lake 2027** design system from Lake's CSS variables, so the published colours, spacing, radii, shadows and type scale stay in sync with the code.

```bash
pnpm design-system
```

Output: `dist/design-system/tokens.json` (gitignored).

- Values come from `packages/lake/src/assets/main.css`; breakpoints and opacities mirror `constants/design.ts`.
- Token names are the CSS variable names without `--`, so `--color-gray-900` is `color-gray-900`.
- Every token carries a usage note, kept in `build.ts`. When you add a scale or a spacing step, add its note there too.

To publish, ask Claude Code to refresh the Swan Lake 2027 tokens: it runs this script and uploads `tokens.json` to the design system. Fonts, icons, the brand book and component pages live only in the design system and aren't touched.
