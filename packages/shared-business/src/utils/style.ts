import { colors, fonts, primaryFontStyle } from "@swan-io/lake/src/constants/design";
import { TextStyle } from "react-native";

export const getTextStyle = (
  type: "sans" | "mono",
  fontSize: number,
  fontFamily?: string,
): TextStyle => ({
  ...(type === "mono" ? { fontFamily: fonts.iban } : primaryFontStyle),
  color: colors.gray[900],
  fontSize,
  lineHeight: fontSize * 1.25,
  fontWeight: "400",
  ...(fontFamily ? { fontFamily } : {}),
});
