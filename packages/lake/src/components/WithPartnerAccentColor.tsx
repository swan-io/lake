import { darken, meetsContrastGuidelines, setLightness, shade } from "polished";
import { ReactNode, useLayoutEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { ColorScale } from "../constants/design";
import { isNotNullish } from "../utils/nullish";

type Props = {
  color: string;
  children: ReactNode;
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

export const WithPartnerAccentColor = ({ color, children }: Props) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    try {
      if (isNotNullish(containerRef.current)) {
        const element = containerRef.current as unknown as HTMLElement;
        const colorScale: ColorScale = {
          0: setLightness(1.0, color),
          50: setLightness(0.97, color),
          100: setLightness(0.9, color),
          200: setLightness(0.8, color),
          300: setLightness(0.7, color),
          400: setLightness(0.6, color),
          500: setLightness(0.5, color),
          600: setLightness(0.4, color),
          700: setLightness(0.3, color),
          800: setLightness(0.2, color),
          900: setLightness(0.1, color),
          primary: color,
          contrast: getContrastColor(color),
          secondary: shade(0.2, color),
        };

        element.ownerDocument.documentElement.style.setProperty(
          "--color-partner-900",
          colorScale[900],
          "",
        );
        element.ownerDocument.documentElement.style.setProperty(
          "--color-partner-800",
          colorScale[800],
          "",
        );
        element.ownerDocument.documentElement.style.setProperty(
          "--color-partner-700",
          colorScale[700],
          "",
        );
        element.ownerDocument.documentElement.style.setProperty(
          "--color-partner-600",
          colorScale[600],
          "",
        );
        element.ownerDocument.documentElement.style.setProperty(
          "--color-partner-500",
          colorScale[500],
          "",
        );
        element.ownerDocument.documentElement.style.setProperty(
          "--color-partner-400",
          colorScale[400],
          "",
        );
        element.ownerDocument.documentElement.style.setProperty(
          "--color-partner-300",
          colorScale[300],
          "",
        );
        element.ownerDocument.documentElement.style.setProperty(
          "--color-partner-200",
          colorScale[200],
          "",
        );
        element.ownerDocument.documentElement.style.setProperty(
          "--color-partner-100",
          colorScale[100],
          "",
        );
        element.ownerDocument.documentElement.style.setProperty(
          "--color-partner-50",
          colorScale[50],
          "",
        );
        element.ownerDocument.documentElement.style.setProperty(
          "--color-partner-primary",
          colorScale.primary,
          "",
        );
        element.ownerDocument.documentElement.style.setProperty(
          "--color-partner-secondary",
          colorScale.secondary,
          "",
        );
        element.ownerDocument.documentElement.style.setProperty(
          "--color-partner-contrast",
          colorScale.contrast,
          "",
        );
      }
    } catch (err) {
      // will default to white label color
    }
  }, [color]);

  return (
    <View ref={containerRef} style={styles.container}>
      {children}
    </View>
  );
};
