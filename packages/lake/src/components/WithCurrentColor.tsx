import { createContext, MutableRefObject, ReactElement, useLayoutEffect, useRef } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { colors, ColorVariants } from "../constants/design";
import { isNotNullish } from "../utils/nullish";

type Props = {
  variant?: ColorVariants;
  style?: ViewProps["style"];
  children: ReactElement;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "stretch",
    flexBasis: "0%",
  },
});

export const CurrentColorContext = createContext<ColorVariants | undefined>(undefined);

export const useCurrentColor = (
  containerRef: MutableRefObject<HTMLElement | null>,
  variant: ColorVariants | undefined,
) => {
  useLayoutEffect(() => {
    if (isNotNullish(containerRef.current) && variant != null) {
      const element = containerRef.current as unknown as HTMLElement;
      const colorScale = colors[variant];
      const style = element.style;

      const original = {
        "--color-current-900": style.getPropertyValue("--color-current-900"),
        "--color-current-800": style.getPropertyValue("--color-current-800"),
        "--color-current-700": style.getPropertyValue("--color-current-700"),
        "--color-current-600": style.getPropertyValue("--color-current-600"),
        "--color-current-500": style.getPropertyValue("--color-current-500"),
        "--color-current-400": style.getPropertyValue("--color-current-400"),
        "--color-current-300": style.getPropertyValue("--color-current-300"),
        "--color-current-200": style.getPropertyValue("--color-current-200"),
        "--color-current-100": style.getPropertyValue("--color-current-100"),
        "--color-current-primary": style.getPropertyValue("--color-current-primary"),
        "--color-current-secondary": style.getPropertyValue("--color-current-secondary"),
        "--color-current-contrast": style.getPropertyValue("--color-current-contrast"),
      };

      style.setProperty("--color-current-900", colorScale[900], "");
      style.setProperty("--color-current-800", colorScale[800], "");
      style.setProperty("--color-current-700", colorScale[700], "");
      style.setProperty("--color-current-600", colorScale[600], "");
      style.setProperty("--color-current-500", colorScale[500], "");
      style.setProperty("--color-current-400", colorScale[400], "");
      style.setProperty("--color-current-300", colorScale[300], "");
      style.setProperty("--color-current-200", colorScale[200], "");
      style.setProperty("--color-current-100", colorScale[100], "");
      style.setProperty("--color-current-50", colorScale[50], "");
      style.setProperty("--color-current-primary", colorScale.primary, "");
      style.setProperty("--color-current-secondary", colorScale.secondary, "");
      style.setProperty("--color-current-contrast", colorScale.contrast, "");

      return () => {
        Object.entries(original).forEach(([key, value]) => {
          if (value == null) {
            style.removeProperty(key);
          } else {
            style.setProperty(key, value, "");
          }
        });
      };
    }
  }, [containerRef, variant]);
};

export const WithCurrentColor = ({ variant, style, children }: Props) => {
  const containerRef = useRef(null);

  useCurrentColor(containerRef, variant);

  return (
    <CurrentColorContext.Provider value={variant}>
      <View style={style ?? styles.container} ref={containerRef}>
        {children}
      </View>
    </CurrentColorContext.Provider>
  );
};
