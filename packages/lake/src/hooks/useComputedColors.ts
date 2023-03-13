import { darken, getLuminance, meetsContrastGuidelines, tint } from "polished";
import { invariantColors } from "../constants/design";
import { identity, memoize } from "../utils/function";

type ComputedColors = {
  original: string;
  progress: string;
  text: string;
  hovered: string;
  pressed: string;
  disabled: string;
};

const isValidColor = (color: string) => {
  try {
    getLuminance(color);
    return true;
  } catch (error) {
    return false;
  }
};

const getComputedColors = (color: string): ComputedColors => {
  const safeColor = isValidColor(color) ? color : invariantColors.gray; // fallback
  const luminance = getLuminance(safeColor);

  if (luminance <= 0.75) {
    return {
      original: safeColor,
      progress: safeColor,
      text: invariantColors.white,
      hovered: tint(0.2, safeColor),
      pressed: darken(0.05, safeColor),
      disabled: tint(0.5, safeColor),
    };
  }

  const delta = 0.5 + (1 - luminance);
  let text = darken(delta / 1.5, safeColor);

  if (!meetsContrastGuidelines(safeColor, text).AALarge) {
    text = darken(delta, safeColor);
  }

  return {
    original: safeColor,
    progress: text,
    text,
    hovered: darken(delta / 12, safeColor),
    pressed: darken(delta / 6, safeColor),
    disabled: safeColor, // update this with Clement's values
  };
};

const memoizedGetComputedColors = memoize(getComputedColors, identity);

// Not really a hook: we rely on lodash to perform cross-components memoization
export const useComputedColors = (color: string) => memoizedGetComputedColors(color);
