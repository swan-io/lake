import { TextStyle } from "react-native";
import { colors } from "./colors";

const fontWeights = {
  book: "400" as const,
  demi: "600" as const,
};

const lineHeights = {
  title: "1.25" as unknown as number,
  body: "1.65" as unknown as number,
  input: "1.25" as unknown as number,
};

const interFont = {
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

// TODO: Create a styled <Text /> component with size: "small" | "large"
const baseStyle = {
  ...interFont,
  color: colors.gray[90],
  fontWeight: fontWeights.book,
  lineHeight: lineHeights.body,
};

const bodyLarge: TextStyle = { ...baseStyle, fontSize: 16 };
const bodySmall: TextStyle = { ...baseStyle, fontSize: 14 };

const caption: TextStyle = {
  ...baseStyle,
  fontSize: 13,
  fontWeight: fontWeights.demi,
  letterSpacing: "0.011em" as unknown as number,
  textTransform: "uppercase",
};

export const typography = {
  fontWeights,
  lineHeights,
  interFont,

  // TODO: Delete all this exports
  baseStyle,
  bodyLarge,
  bodySmall,

  caption,
};
