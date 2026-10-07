import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "pathe";

// Generates the tokens of the "Swan Lake 2027" design system from Lake's CSS variables.
// Output: dist/design-system/tokens.json — see scripts/design-system/README.md.

const root = process.cwd();
const lakeSrc = path.join(root, "packages/lake/src");
const outFile = path.join(root, "dist/design-system/tokens.json");

const read = (file: string) => fs.readFileSync(path.join(lakeSrc, file), "utf-8");


const commit = execSync("git rev-parse --short HEAD", { cwd: root }).toString().trim();
const branch = execSync("git rev-parse --abbrev-ref HEAD", { cwd: root }).toString().trim();

const mainCss = read("assets/main.css");
const rootStart = mainCss.indexOf(":root {");
const rootBlock = mainCss
  .slice(rootStart, mainCss.indexOf("\n}\n", rootStart))
  .replace(/\/\*[\s\S]*?\*\//g, "");

const declarations = [...rootBlock.matchAll(/--([a-z0-9-]+):\s*([^;]+);/g)].map(
  ([, name = "", value = ""]) => ({ name, value: value.replace(/\s+/g, " ").trim() }),
);

const variables = new Map(declarations.map(({ name, value }) => [name, value]));

const getVariable = (name: string) => {
  const value = variables.get(name);
  if (value == null) {
    throw new Error(`Missing CSS variable --${name} in main.css`);
  }
  return value;
};

const toAlias = (value: string) => {
  const match = /^var\(\s*--([a-z0-9-]+)\s*\)$/.exec(value);
  return match?.[1] != null ? `{${match[1]}}` : undefined;
};

const scaleUsage: Record<string, string> = {
  swan: "Swan brand ink scale (near-black violet). Default white-label partner scale.",
  gray: "Neutral UI scale: text, borders, dividers, disabled fills.",
  live: "Live environment purple; also Swan's default accent (#6240b5).",
  sandbox: "Sandbox environment coral.",
  positive: "Success states: positive amounts, validated fields, success alerts.",
  warning: "Warning states and pending statuses.",
  negative: "Errors, destructive actions, negative amounts, notification pills.",
  partner:
    "White-label partner accent; defaults to the swan scale, overridden at runtime with the partner's brand colour.",
  current: "The scale components use by default; points at partner.",
  shakespear: "Informational blue (info alerts, neutral highlights).",
  sunglow: "Yellow accent for tags and illustrations.",
  "dark-pink": "Pink accent for tags and categorisation.",
  "medium-slade-blue": "Violet accent for tags and categorisation.",
};

const stepUsage: Record<string, string> = {
  "900": "Darkest step: text on the scale's 50/0 tints.",
  "800": "Deep step: text on light tints.",
  "700": "Strong text and icons; alert text colour.",
  "600": "Hover/pressed for filled controls, secondary text.",
  "500": "Base hue: fills, left borders, primary for some scales.",
  "400": "Muted fill or icon.",
  "300": "Secondary button border; decorative.",
  "200": "Borders of tinted surfaces (alerts).",
  "100": "Tag label fill, pressed tertiary background.",
  "75": "Extra light neutral (gray only).",
  "50": "Lightest tint: tag body, hover backgrounds.",
  "0": "Alert and tinted surface background.",
  primary: "Filled primary button background, tag text.",
  secondary: "Hover of the primary fill, emphasis text.",
  contrast: "Text/icon on the primary fill.",
};

const scaleNotes: Record<string, string> = {
  "positive-500": " Fails 4.5:1 as text on light grounds; use 700 for text.",
  "sunglow-500": " Never use as text on light grounds; pair with sunglow-800 text.",
};

const backgroundUsage: Record<string, string> = {
  "color-background-light": "Page background (light).",
  "color-background-light-accented": "Raised surface: tiles, inputs, panels (light).",
  "color-background-dark": "Dark-surface background (used by dark-mode chrome).",
  "color-background-dark-accented": "Raised dark surface.",
  "color-background-default": "Semantic page background; resolves to the light value.",
  "color-background-default-accented":
    "Semantic raised surface; resolves to the light accented value.",
};

const colorUsage = (name: string) => {
  const scale = /^color-([a-z-]+?)-(\d+|primary|secondary|contrast)$/.exec(name);
  const [, scaleName = "", step = ""] = scale ?? [];

  if (scale != null && scaleUsage[scaleName] != null) {
    const base = stepUsage[step] ?? "";
    return step === "500" || step === "primary"
      ? `${scaleUsage[scaleName]} ${base}${scaleNotes[`${scaleName}-${step}`] ?? ""}`
      : base;
  }
  if (name.startsWith("color-background")) {
    return (
      backgroundUsage[name] ??
      "Translucent variant of its base surface for overlays, sticky headers and fades."
    );
  }
  if (name === "color-white") {
    return "Pure white; contrast text on filled controls.";
  }
  if (name === "color-black") {
    return "Pure black; reserved for invariant cases (card art, shadows).";
  }
  return "";
};

const colorTokens = declarations.flatMap(({ name, value }) => {
  if (!name.startsWith("color-")) {
    return [];
  }
  const alias = toAlias(value);
  const tokenValue = alias ?? value.toLowerCase();
  // calc(), gradients and other expressions can't be represented as a color token
  if (alias == null && !/^#[0-9a-f]{3,8}$/.test(tokenValue)) {
    return [];
  }
  return [{ name, value: tokenValue, usage: colorUsage(name) }];
});

const semanticColorTokens = [
  {
    name: "focus-ring-color",
    value: getVariable("focus-ring-color").toLowerCase(),
    usage: "Keyboard focus ring on every interactive control; 3:1+ on all light surfaces.",
  },
  {
    name: "heading-color",
    value: toAlias(getVariable("heading-color")),
    usage: "Heading text (h1–h6) on color-background-light and -accented.",
  },
  {
    name: "text-color",
    value: toAlias(getVariable("text-color")),
    usage:
      "Default body text. 4.6:1 on color-background-light, 4.8:1 on white: passes AA, keep body ≥14px.",
  },
  {
    name: "placeholder-color",
    value: toAlias(getVariable("placeholder-color")),
    usage: "Input placeholder text (italic). 3.2:1 on white: below 4.5:1, kept exact from source.",
  },
  { name: "selection-background", value: "#e7e8e8", usage: "::selection background." },
  { name: "selection-text", value: "#14191a", usage: "::selection text." },
  {
    name: "highlight-background",
    value: "#fff4cc",
    usage: "Search match highlight (::highlight(lake-highlight)).",
  },
  {
    name: "invariant-gray",
    value: "#16141a",
    usage: "Never-inverted ink: Swan logo default fill, card text.",
  },
  {
    name: "default-accent-color",
    value: "#6240b5",
    usage: "Fallback partner accent when none is configured.",
  },
];

const spacingUsage: Record<string, string> = {
  "4": "Hairline gaps: icon-to-text, tag padding steps.",
  "8": "Tight padding: input inner padding, tag label padding.",
  "12": "Gap between buttons; small-button icon gap.",
  "16": "Default gap between related elements.",
  "20": "Button horizontal padding; alert vertical padding.",
  "24": "Alert horizontal padding; section gaps; tag height.",
  "32": "Tile padding.",
  "40": "Large tag height; separation between groups.",
  "48": "Large section spacing.",
  "72": "Page-level vertical rhythm.",
  "96": "Hero spacing.",
};

const radiusUsage: Record<string, string> = {
  "4": "Tags, alerts, small chips.",
  "6": "Buttons, text inputs, selects.",
  "8": "Tiles, popovers, panels.",
};

const shadowUsage: Record<string, string> = {
  "shadow-tile": "Resting tiles and alerts.",
  "shadow-tile-hover": "Hovered interactive tiles.",
  "shadow-modal": "Modals, popovers, context menus (includes a 1px ring).",
};

const letterSpacing = getVariable("letter-spacing-primary");
const headingLineHeight = Number(getVariable("heading-line-height"));
const textLineHeight = Number(getVariable("text-line-height"));

const textStyle = (
  name: string,
  variable: string,
  lineHeight: number,
  usage: string,
  extra: Record<string, string> = {},
) => ({
  name,
  fontSize: getVariable(`${variable}-font-size`),
  lineHeight,
  fontWeight: Number(getVariable(`${variable}-font-weight`)),
  letterSpacing,
  usage,
  ...extra,
});

const tokens = {
  name: "Swan Lake 2027",
  version: 1,
  meta: {
    source: "github",
    repo: "swan-io/lake",
    ref: `${branch}@${commit}`,
    package: "packages/lake",
    paths: {
      tokens: ["packages/lake/src/assets/main.css", "packages/lake/src/constants/design.ts"],
    },
    synced: new Date().toISOString().slice(0, 10),
  },
  color: {
    themes: [{ id: "light", name: "Light" }],
    tokens: [...colorTokens, ...semanticColorTokens],
  },
  type: {
    fonts: [
      { family: "Inter", file: "fonts/Inter-Light.woff2", weight: "300", style: "normal" },
      { family: "Inter", file: "fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
      { family: "Inter", file: "fonts/Inter-Medium.woff2", weight: "500", style: "normal" },
      { family: "Inter", file: "fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
      { family: "Inter", file: "fonts/Inter-Italic.woff2", weight: "400", style: "italic" },
      { family: "Roboto Mono", file: "fonts/RobotoMono-Regular.ttf", weight: "400", style: "normal" },
      { family: "Inter Card", file: "fonts/InterCard.woff", weight: "400", style: "normal" },
    ],
    families: {
      primary:
        'Inter, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
      card: '"Inter Card", monospace',
      code: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
      iban: '"Roboto Mono", monospace',
    },
    groups: [
      {
        name: "Headings",
        family: "primary",
        styles: [
          textStyle("h1", "heading-1", headingLineHeight, "Page titles.", { sample: "Accounts" }),
          textStyle("h2", "heading-2", headingLineHeight, "Light display title (onboarding, empty states).", {
            sample: "Welcome to Swan",
          }),
          textStyle("h3", "heading-3", headingLineHeight, "Tile and section titles.", {
            sample: "Account details",
          }),
          textStyle("h4", "heading-4", headingLineHeight, "Sub-section titles."),
          textStyle("h5", "heading-5", headingLineHeight, "Small headings, list group titles."),
          textStyle("h6", "heading-6", headingLineHeight, "Smallest heading."),
        ],
      },
      {
        name: "Text",
        family: "primary",
        styles: [
          textStyle("semibold", "text-semibold", textLineHeight, "Button labels, emphasis."),
          textStyle("medium", "text-medium", textLineHeight, "Labels, table cell emphasis."),
          textStyle("regular", "text-regular", textLineHeight, "Default body copy."),
          textStyle("light", "text-light", textLineHeight, "De-emphasised large text."),
          textStyle("smallSemibold", "text-small-semibold", textLineHeight, "Small button labels."),
          textStyle("smallMedium", "text-small-medium", textLineHeight, "Tag text, form labels."),
          textStyle(
            "smallRegular",
            "text-small-regular",
            textLineHeight,
            "Secondary copy, descriptions, help text.",
          ),
        ],
      },
      {
        name: "Placeholder",
        family: "primary",
        styles: [
          textStyle(
            "placeholder",
            "placeholder",
            Number(getVariable("placeholder-line-height")),
            "Input placeholders (italic, placeholder-color).",
            { fontStyle: "italic" },
          ),
          textStyle(
            "smallPlaceholder",
            "placeholder-small",
            Number(getVariable("placeholder-line-height")),
            "Small input placeholders.",
            { fontStyle: "italic" },
          ),
        ],
      },
      {
        name: "Mono",
        family: "iban",
        styles: [
          {
            name: "iban",
            fontSize: "16px",
            lineHeight: textLineHeight,
            fontWeight: 400,
            usage: "IBANs and account numbers.",
            sample: "FR76 3000 1007 9412 3456 7890 185",
          },
          {
            name: "card",
            family: "card",
            fontSize: "16px",
            lineHeight: textLineHeight,
            fontWeight: 400,
            usage: "Card PAN digits on card art (Inter Card: tabular digits only).",
            sample: "4970 1000 0000 0063",
          },
        ],
      },
    ],
  },
  spacing: {
    tokens: Object.entries(spacingUsage).map(([step, usage]) => ({
      name: `spacing-${step}`,
      value: getVariable(`spacing-${step}`),
      usage,
    })),
  },
  radius: {
    tokens: Object.entries(radiusUsage).map(([step, usage]) => ({
      name: `radius-${step}`,
      value: getVariable(`radius-${step}`),
      usage,
    })),
  },
  shadow: {
    tokens: Object.entries(shadowUsage).map(([name, usage]) => ({
      name,
      value: getVariable(name),
      usage,
    })),
  },
  // values from constants/design.ts (breakpoints, commonStyles.disabled, LakeButton pressed state)
  breakpoint: {
    tokens: [
      { name: "breakpoint-large", value: "950px", usage: "useResponsive large breakpoint." },
      {
        name: "breakpoint-medium",
        value: "800px",
        usage: "Desktop vs mobile switch for most layouts (alerts, tiles).",
      },
      { name: "breakpoint-small", value: "600px", usage: "Small screens." },
      { name: "breakpoint-tiny", value: "500px", usage: "Tiny screens." },
    ],
  },
  opacity: {
    tokens: [
      {
        name: "opacity-disabled",
        value: "0.5",
        usage: "Disabled controls (commonStyles.disabled), with cursor not-allowed.",
      },
      { name: "opacity-pressed", value: "0.15", usage: "Pressed overlay on primary buttons." },
    ],
  },
};

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, `${JSON.stringify(tokens, null, 2)}\n`);

console.log(
  `Design system tokens built from ${branch}@${commit}: ${tokens.color.tokens.length} colors → ${path.relative(root, outFile)}`,
);
