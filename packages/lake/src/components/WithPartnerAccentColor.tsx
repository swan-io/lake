import { darken, meetsContrastGuidelines, setLightness, shade } from "polished";
import { ReactNode, useLayoutEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { ColorScale } from "../constants/design";
import { isNotNullish } from "../utils/nullish";

type Props = {
  color: string;
  children: ReactNode;
  scoped?: boolean;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexBasis: "0%",
  },
});

const getContrastColor = (color: string) => {
  if (meetsContrastGuidelines("#FFF", color).AALarge) {
    return "#fff";
  }

  let text = color;
  while (!meetsContrastGuidelines(text, color).AALarge) {
    text = darken(0.25, text);
  }
  return text;
};

export const WithPartnerAccentColor = ({ color, scoped = false, children }: Props) => {
  const containerRef = useRef<View>(null);

  useLayoutEffect(() => {
    try {
      if (isNotNullish(containerRef.current)) {
        const element = containerRef.current as unknown as HTMLElement;
        let scalePower = 1;
        while (!meetsContrastGuidelines(setLightness(0.5 ** scalePower, color), "#fff").AALarge) {
          scalePower += 0.1;
        }

        const colorScale: ColorScale = {
          0: setLightness(1.0 ** scalePower, color),
          50: setLightness(0.97 ** scalePower, color),
          100: setLightness(0.9 ** scalePower, color),
          200: setLightness(0.8 ** scalePower, color),
          300: setLightness(0.7 ** scalePower, color),
          400: setLightness(0.6 ** scalePower, color),
          500: setLightness(0.5 ** scalePower, color),
          600: setLightness(0.4 ** scalePower, color),
          700: setLightness(0.3 ** scalePower, color),
          800: setLightness(0.2 ** scalePower, color),
          900: setLightness(0.1 ** scalePower, color),
          primary: color,
          contrast: getContrastColor(color),
          secondary: shade(0.2, color),
        };

        const rootElement = scoped ? element : element.ownerDocument.documentElement;

        rootElement.style.setProperty("--color-partner-900", colorScale[900], "");
        rootElement.style.setProperty("--color-partner-800", colorScale[800], "");
        rootElement.style.setProperty("--color-partner-700", colorScale[700], "");
        rootElement.style.setProperty("--color-partner-600", colorScale[600], "");
        rootElement.style.setProperty("--color-partner-500", colorScale[500], "");
        rootElement.style.setProperty("--color-partner-400", colorScale[400], "");
        rootElement.style.setProperty("--color-partner-300", colorScale[300], "");
        rootElement.style.setProperty("--color-partner-200", colorScale[200], "");
        rootElement.style.setProperty("--color-partner-100", colorScale[100], "");
        rootElement.style.setProperty("--color-partner-50", colorScale[50], "");
        rootElement.style.setProperty("--color-partner-primary", colorScale.primary, "");
        rootElement.style.setProperty("--color-partner-secondary", colorScale.secondary, "");
        rootElement.style.setProperty("--color-partner-contrast", colorScale.contrast, "");
      }
    } catch {
      // will default to white label color
    }
  }, [color, scoped]);

  return (
    <View ref={containerRef} style={styles.container}>
      {children}
    </View>
  );
};
