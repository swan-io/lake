import { useCallback } from "react";
import { useBreakpoint } from "./useBreakpoint";

export const useResponsive = (breakpoint = 992) => {
  const desktop = useBreakpoint(breakpoint);

  const media = useCallback(
    <T>(values: { mobile: T; desktop?: T }): T =>
      desktop ? (values.desktop ?? values.mobile) : values.mobile,
    [desktop],
  );

  return { desktop, media };
};
