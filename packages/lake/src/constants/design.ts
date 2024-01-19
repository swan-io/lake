import { AnimationStyles, StyleSheet, TextStyle } from "react-native";

export type ColorScale = {
  900: string;
  800: string;
  700: string;
  600: string;
  500: string;
  400: string;
  300: string;
  200: string;
  100: string;
  50: string;
  0: string;
  primary: string;
  secondary: string;
  contrast: string;
};

const swan: ColorScale = {
  900: "var(--color-swan-900)",
  800: "var(--color-swan-800)",
  700: "var(--color-swan-700)",
  600: "var(--color-swan-600)",
  500: "var(--color-swan-500)",
  400: "var(--color-swan-400)",
  300: "var(--color-swan-300)",
  200: "var(--color-swan-200)",
  100: "var(--color-swan-100)",
  50: "var(--color-swan-50)",
  0: "var(--color-swan-0)",
  primary: "var(--color-swan-primary)",
  secondary: "var(--color-swan-secondary)",
  contrast: "var(--color-swan-contrast)",
};

export const gray75 = "var(--color-gray-75)";

const gray: ColorScale = {
  900: "var(--color-gray-900)",
  800: "var(--color-gray-800)",
  700: "var(--color-gray-700)",
  600: "var(--color-gray-600)",
  500: "var(--color-gray-500)",
  400: "var(--color-gray-400)",
  300: "var(--color-gray-300)",
  200: "var(--color-gray-200)",
  100: "var(--color-gray-100)",
  50: "var(--color-gray-50)",
  0: "var(--color-gray-0)",
  primary: "var(--color-gray-primary)",
  secondary: "var(--color-gray-secondary)",
  contrast: "var(--color-gray-contrast)",
};

const darkPink: ColorScale = {
  900: "var(--color-dark-pink-900)",
  800: "var(--color-dark-pink-800)",
  700: "var(--color-dark-pink-700)",
  600: "var(--color-dark-pink-600)",
  500: "var(--color-dark-pink-500)",
  400: "var(--color-dark-pink-400)",
  300: "var(--color-dark-pink-300)",
  200: "var(--color-dark-pink-200)",
  100: "var(--color-dark-pink-100)",
  50: "var(--color-dark-pink-50)",
  0: "var(--color-dark-pink-0)",
  primary: "var(--color-dark-pink-primary)",
  secondary: "var(--color-dark-pink-secondary)",
  contrast: "var(--color-dark-pink-contrast)",
};

const mediumSladeBlue: ColorScale = {
  900: "var(--color-medium-slade-blue-900)",
  800: "var(--color-medium-slade-blue-800)",
  700: "var(--color-medium-slade-blue-700)",
  600: "var(--color-medium-slade-blue-600)",
  500: "var(--color-medium-slade-blue-500)",
  400: "var(--color-medium-slade-blue-400)",
  300: "var(--color-medium-slade-blue-300)",
  200: "var(--color-medium-slade-blue-200)",
  100: "var(--color-medium-slade-blue-100)",
  50: "var(--color-medium-slade-blue-50)",
  0: "var(--color-medium-slade-blue-0)",
  primary: "var(--color-medium-slade-blue-primary)",
  secondary: "var(--color-medium-slade-blue-secondary)",
  contrast: "var(--color-medium-slade-blue-contrast)",
};

const live: ColorScale = {
  900: "var(--color-live-900)",
  800: "var(--color-live-800)",
  700: "var(--color-live-700)",
  600: "var(--color-live-600)",
  500: "var(--color-live-500)",
  400: "var(--color-live-400)",
  300: "var(--color-live-300)",
  200: "var(--color-live-200)",
  100: "var(--color-live-100)",
  50: "var(--color-live-50)",
  0: "var(--color-live-0)",
  primary: "var(--color-live-primary)",
  secondary: "var(--color-live-secondary)",
  contrast: "var(--color-live-contrast)",
};

const sandbox: ColorScale = {
  900: "var(--color-sandbox-900)",
  800: "var(--color-sandbox-800)",
  700: "var(--color-sandbox-700)",
  600: "var(--color-sandbox-600)",
  500: "var(--color-sandbox-500)",
  400: "var(--color-sandbox-400)",
  300: "var(--color-sandbox-300)",
  200: "var(--color-sandbox-200)",
  100: "var(--color-sandbox-100)",
  50: "var(--color-sandbox-50)",
  0: "var(--color-sandbox-0)",
  primary: "var(--color-sandbox-primary)",
  secondary: "var(--color-sandbox-secondary)",
  contrast: "var(--color-sandbox-contrast)",
};

const positive: ColorScale = {
  900: "var(--color-positive-900)",
  800: "var(--color-positive-800)",
  700: "var(--color-positive-700)",
  600: "var(--color-positive-600)",
  500: "var(--color-positive-500)",
  400: "var(--color-positive-400)",
  300: "var(--color-positive-300)",
  200: "var(--color-positive-200)",
  100: "var(--color-positive-100)",
  50: "var(--color-positive-50)",
  0: "var(--color-positive-0)",
  primary: "var(--color-positive-primary)",
  secondary: "var(--color-positive-secondary)",
  contrast: "var(--color-positive-contrast)",
};

const warning: ColorScale = {
  900: "var(--color-warning-900)",
  800: "var(--color-warning-800)",
  700: "var(--color-warning-700)",
  600: "var(--color-warning-600)",
  500: "var(--color-warning-500)",
  400: "var(--color-warning-400)",
  300: "var(--color-warning-300)",
  200: "var(--color-warning-200)",
  100: "var(--color-warning-100)",
  50: "var(--color-warning-50)",
  0: "var(--color-warning-0)",
  primary: "var(--color-warning-primary)",
  secondary: "var(--color-warning-secondary)",
  contrast: "var(--color-warning-contrast)",
};

const negative: ColorScale = {
  900: "var(--color-negative-900)",
  800: "var(--color-negative-800)",
  700: "var(--color-negative-700)",
  600: "var(--color-negative-600)",
  500: "var(--color-negative-500)",
  400: "var(--color-negative-400)",
  300: "var(--color-negative-300)",
  200: "var(--color-negative-200)",
  100: "var(--color-negative-100)",
  50: "var(--color-negative-50)",
  0: "var(--color-negative-0)",
  primary: "var(--color-negative-primary)",
  secondary: "var(--color-negative-secondary)",
  contrast: "var(--color-negative-contrast)",
};

const partner: ColorScale = {
  900: "var(--color-partner-900)",
  800: "var(--color-partner-800)",
  700: "var(--color-partner-700)",
  600: "var(--color-partner-600)",
  500: "var(--color-partner-500)",
  400: "var(--color-partner-400)",
  300: "var(--color-partner-300)",
  200: "var(--color-partner-200)",
  100: "var(--color-partner-100)",
  50: "var(--color-partner-50)",
  0: "var(--color-partner-0)",
  primary: "var(--color-partner-primary)",
  secondary: "var(--color-partner-secondary)",
  contrast: "var(--color-partner-contrast)",
};

const shakespear: ColorScale = {
  900: "var(--color-shakespear-900)",
  800: "var(--color-shakespear-800)",
  700: "var(--color-shakespear-700)",
  600: "var(--color-shakespear-600)",
  500: "var(--color-shakespear-500)",
  400: "var(--color-shakespear-400)",
  300: "var(--color-shakespear-300)",
  200: "var(--color-shakespear-200)",
  100: "var(--color-shakespear-100)",
  50: "var(--color-shakespear-50)",
  0: "var(--color-shakespear-0)",
  primary: "var(--color-shakespear-primary)",
  secondary: "var(--color-shakespear-secondary)",
  contrast: "var(--color-shakespear-contrast)",
};

const sunglow: ColorScale = {
  900: "var(--color-sunglow-900)",
  800: "var(--color-sunglow-800)",
  700: "var(--color-sunglow-700)",
  600: "var(--color-sunglow-600)",
  500: "var(--color-sunglow-500)",
  400: "var(--color-sunglow-400)",
  300: "var(--color-sunglow-300)",
  200: "var(--color-sunglow-200)",
  100: "var(--color-sunglow-100)",
  50: "var(--color-sunglow-50)",
  0: "var(--color-sunglow-0)",
  primary: "var(--color-sunglow-primary)",
  secondary: "var(--color-sunglow-secondary)",
  contrast: "var(--color-sunglow-contrast)",
};

const current: ColorScale = {
  900: "var(--color-current-900)",
  800: "var(--color-current-800)",
  700: "var(--color-current-700)",
  600: "var(--color-current-600)",
  500: "var(--color-current-500)",
  400: "var(--color-current-400)",
  300: "var(--color-current-300)",
  200: "var(--color-current-200)",
  100: "var(--color-current-100)",
  50: "var(--color-current-50)",
  0: "var(--color-current-50)",
  primary: "var(--color-current-primary)",
  secondary: "var(--color-current-secondary)",
  contrast: "var(--color-current-contrast)",
};

export const colors = {
  gray,
  live,
  sandbox,
  positive,
  warning,
  negative,
  current,
  partner,
  swan,
  shakespear,
  darkPink,
  sunglow,
  mediumSladeBlue,
} as const;

// Those are used in special cases were the black mode
// shouln't invert colors (ex: shadows, credit card text)
export const invariantColors = {
  black: "#000",
  white: "#fff",
  transparent: "transparent",
  gray: "#16141a",
  defaultAccentColor: "#6240b5",
};

export type ColorVariants = keyof typeof colors;

export type BackgroundColorVariant = {
  default: string;
  defaultTransparent: string;
  default50Transparency: string;
  default75Transparency: string;
  default90Transparency: string;
  accented: string;
  accentedTransparent: string;
  accented50Transparency: string;
  accented75Transparency: string;
  accented90Transparency: string;
};

export const backgroundColor: BackgroundColorVariant = {
  default: "var(--color-background-default)",
  defaultTransparent: "var(--color-background-default-transparent)",
  default50Transparency: "var(--color-background-default-50-transparency)",
  default75Transparency: "var(--color-background-default-75-transparency)",
  default90Transparency: "var(--color-background-default-90-transparency)",
  accented: "var(--color-background-default-accented)",
  accentedTransparent: "var(--color-background-default-accented-transparent)",
  accented50Transparency: "var(--color-background-default-accented-50-transparency)",
  accented75Transparency: "var(--color-background-default-accented-75-transparency)",
  accented90Transparency: "var(--color-background-default-accented-90-transparency)",
};

export const gradients = {
  vertical: "var(--gradient-vertical)",
  oblique: "var(--gradient-oblique)",
} as const;

export const interFontStyle = {
  fontFamily: [
    "Inter",
    "-apple-system",
    "system-ui",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ].join(","),

  // Computed by Inter dynamic metrics tool
  letterSpacing: "-0.011em" as unknown as number,
};

const asTextStyle = (x: { [K in keyof TextStyle]: string | number }) => {
  return x as unknown as TextStyle;
};

const h1 = asTextStyle({
  ...interFontStyle,
  color: "var(--heading-color)",
  fontWeight: "var(--heading-1-font-weight)",
  fontSize: "var(--heading-1-font-size)",
  lineHeight: "var(--heading-line-height)",
});

const h2 = asTextStyle({
  ...interFontStyle,
  color: "var(--heading-color)",
  fontWeight: "var(--heading-2-font-weight)",
  fontSize: "var(--heading-2-font-size)",
  lineHeight: "var(--heading-line-height)",
});

const h3 = asTextStyle({
  ...interFontStyle,
  color: "var(--heading-color)",
  fontWeight: "var(--heading-3-font-weight)",
  fontSize: "var(--heading-3-font-size)",
  lineHeight: "var(--heading-line-height)",
});

const h4 = asTextStyle({
  ...interFontStyle,
  color: "var(--heading-color)",
  fontWeight: "var(--heading-4-font-weight)",
  fontSize: "var(--heading-4-font-size)",
  lineHeight: "var(--heading-line-height)",
});

const h5 = asTextStyle({
  ...interFontStyle,
  color: "var(--heading-color)",
  fontWeight: "var(--heading-5-font-weight)",
  fontSize: "var(--heading-5-font-size)",
  lineHeight: "var(--heading-line-height)",
});

const h6 = asTextStyle({
  ...interFontStyle,
  color: "var(--heading-color)",
  fontWeight: "var(--heading-6-font-weight)",
  fontSize: "var(--heading-6-font-size)",
  lineHeight: "var(--heading-line-height)",
});

const semibold = asTextStyle({
  ...interFontStyle,
  color: "var(--text-color)",
  fontWeight: "var(--text-semibold-font-weight)",
  fontSize: "var(--text-semibold-font-size)",
  lineHeight: "var(--text-line-height)",
});

const medium = asTextStyle({
  ...interFontStyle,
  color: "var(--text-color)",
  fontWeight: "var(--text-medium-font-weight)",
  fontSize: "var(--text-medium-font-size)",
  lineHeight: "var(--text-line-height)",
});

const regular = asTextStyle({
  ...interFontStyle,
  color: "var(--text-color)",
  fontWeight: "var(--text-regular-font-weight)",
  fontSize: "var(--text-regular-font-size)",
  lineHeight: "var(--text-line-height)",
});

const light = asTextStyle({
  ...interFontStyle,
  color: "var(--text-color)",
  fontWeight: "var(--text-light-font-weight)",
  fontSize: "var(--text-light-font-size)",
  lineHeight: "var(--text-line-height)",
});

const smallSemibold = asTextStyle({
  ...interFontStyle,
  color: "var(--text-color)",
  fontWeight: "var(--text-small-semibold-font-weight)",
  fontSize: "var(--text-small-semibold-font-size)",
  lineHeight: "var(--text-line-height)",
});

const smallMedium = asTextStyle({
  ...interFontStyle,
  color: "var(--text-color)",
  fontWeight: "var(--text-small-medium-font-weight)",
  fontSize: "var(--text-small-medium-font-size)",
  lineHeight: "var(--text-line-height)",
});

const smallRegular = asTextStyle({
  ...interFontStyle,
  color: "var(--text-color)",
  fontWeight: "var(--text-small-regular-font-weight)",
  fontSize: "var(--text-small-regular-font-size)",
  lineHeight: "var(--text-line-height)",
});

const placeholder = asTextStyle({
  ...interFontStyle,
  color: "var(--placeholder-color)",
  fontStyle: "italic",
  fontWeight: "var(--placeholder-font-weight)",
  fontSize: "var(--placeholder-font-size)",
  lineHeight: "var(--placeholder-line-height)",
});

const smallPlaceholder = asTextStyle({
  ...interFontStyle,
  color: "var(--placeholder-color)",
  fontStyle: "italic",
  fontWeight: "var(--placeholder-small-font-weight)",
  fontSize: "var(--placeholder-small-font-size)",
  lineHeight: "var(--placeholder-line-height)",
});

export const texts = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,

  semibold,
  medium,
  regular,
  light,
  smallSemibold,
  smallMedium,
  smallRegular,

  placeholder,
  smallPlaceholder,
} as const;

export type TextVariants = keyof typeof texts;

export const shadows = {
  tile: "var(--shadow-tile)",
  tileHover: "var(--shadow-tile-hover)",
  modal: "var(--shadow-modal)",
} as const;

export const spacings = {
  4: "var(--spacing-4)",
  8: "var(--spacing-8)",
  12: "var(--spacing-12)",
  16: "var(--spacing-16)",
  20: "var(--spacing-20)",
  24: "var(--spacing-24)",
  32: "var(--spacing-32)",
  40: "var(--spacing-40)",
  48: "var(--spacing-48)",
  72: "var(--spacing-72)",
  96: "var(--spacing-96)",
} as const;

export type Spacings = keyof typeof spacings;

export const negativeSpacings = {
  4: "var(--spacing-negative-4)",
  8: "var(--spacing-negative-8)",
  12: "var(--spacing-negative-12)",
  16: "var(--spacing-negative-16)",
  20: "var(--spacing-negative-20)",
  24: "var(--spacing-negative-24)",
  32: "var(--spacing-negative-32)",
  40: "var(--spacing-negative-40)",
  48: "var(--spacing-negative-48)",
  72: "var(--spacing-negative-72)",
  96: "var(--spacing-negative-96)",
} as const;

export type NegativeSpacings = keyof typeof negativeSpacings;

export const radii = {
  4: "var(--radius-4)" as unknown as number,
  6: "var(--radius-6)" as unknown as number,
  8: "var(--radius-8)" as unknown as number,
} as const;

export type Radii = keyof typeof radii;

export const fonts = {
  primary: "var(--font-family-primary)",
  card: "var( --font-family-card-font)",
  code: "var(--font-family-code)",
  iban: "var(--font-family-iban)",
};

export type Fonts = keyof typeof fonts;

export type Animation = {
  enter: AnimationStyles;
  leave: AnimationStyles;
};

const easeInOutQuad = "cubic-bezier(0.45, 0, 0.55, 1)";

const fadeAndSlideInFromTop: Animation = StyleSheet.create({
  enter: {
    animationKeyframes: {
      from: {
        opacity: 0,
        transform: "translateY(-10px)",
      },
    },
    animationDuration: "300ms",
    animationTimingFunction: easeInOutQuad,
  },
  leave: {
    animationKeyframes: {
      to: {
        opacity: 0,
        transform: "translateY(-10px)",
      },
    },
    animationDuration: "300ms",
    animationTimingFunction: easeInOutQuad,
    animationFillMode: "forwards",
  },
});

const fadeAndSlideInFromLeft: Animation = StyleSheet.create({
  enter: {
    animationKeyframes: {
      from: {
        opacity: 0,
        transform: "translateX(-10px)",
      },
    },
    animationDuration: "300ms",
    animationTimingFunction: easeInOutQuad,
  },
  leave: {
    animationKeyframes: {
      to: {
        opacity: 0,
        transform: "translateX(-10px)",
      },
    },
    animationDuration: "300ms",
    animationTimingFunction: easeInOutQuad,
    animationFillMode: "forwards",
  },
});

const fadeAndSlideInFromBottom: Animation = StyleSheet.create({
  enter: {
    animationKeyframes: {
      from: {
        opacity: 0,
        transform: "translateY(10px)",
      },
    },
    animationDuration: "300ms",
    animationTimingFunction: easeInOutQuad,
  },
  leave: {
    animationKeyframes: {
      to: {
        opacity: 0,
        transform: "translateY(10px)",
      },
    },
    animationDuration: "300ms",
    animationTimingFunction: easeInOutQuad,
    animationFillMode: "forwards",
  },
});

const fadeAndSlideInFromRight: Animation = StyleSheet.create({
  enter: {
    animationKeyframes: {
      from: {
        opacity: 0,
        transform: "translateZ(0px) translateX(10px)",
      },
    },
    animationDuration: "300ms",
    animationTimingFunction: easeInOutQuad,
  },
  leave: {
    animationKeyframes: {
      to: {
        opacity: 0,
        transform: "translateZ(0px) translateX(10px)",
      },
    },
    animationDuration: "300ms",
    animationTimingFunction: easeInOutQuad,
    animationFillMode: "forwards",
  },
});

const shake = StyleSheet.create({
  enter: {
    // animation copied from https://codepen.io/sdras/pen/aOgMON
    animationKeyframes: [
      {
        "10%, 90%": {
          transform: "translateX(-1px)",
        },
        "20%, 80%": {
          transform: "translateX(2px)",
        },
        "30%, 50%, 70%": {
          transform: "translateX(-4px)",
        },
        "40%, 60%": {
          transform: "translateX(4px)",
        },
      },
    ],
    animationDuration: "800ms",
    animationTimingFunction: "cubic-bezier(.36,.07,.19,.97)",
  },
});

const heartbeat = StyleSheet.create({
  enter: {
    animationKeyframes: [
      {
        "0%, 100%": {
          opacity: 1,
        },
        "50%": {
          opacity: 0.5,
        },
      },
    ],
    animationDuration: "1000ms",
    animationTimingFunction: easeInOutQuad,
    animationIterationCount: "infinite",
  },
});

export const animations = {
  fadeAndSlideInFromTop,
  fadeAndSlideInFromLeft,
  fadeAndSlideInFromBottom,
  fadeAndSlideInFromRight,
  heartbeat,
  shake,
};

export const breakpoints = {
  large: 950,
  medium: 800,
  small: 600,
  tiny: 500,
};
