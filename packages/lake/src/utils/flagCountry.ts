export const getFlagGlyphName = (flag: string): string =>
  `${flag.codePointAt(0)?.toString(16) ?? ""}-${flag.codePointAt(2)?.toString(16) ?? ""}`;
