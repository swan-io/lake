import { Result } from "@swan-io/boxed";
import { darken, getLuminance, meetsContrastGuidelines, shade, tint } from "polished";
import { ReactNode, useLayoutEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { match, P } from "ts-pattern";
import { ColorScale } from "../constants/design";
import { isNotNullish } from "../utils/nullish";

const colorScaleItems = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50, 0] as const;

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

const getContrastColor = (color: string, luminance: number) => {
  if (luminance <= 0.75) {
    return "#fff";
  }

  const delta = 0.5 + (1 - luminance);
  const text = darken(delta / 1.5, color);

  if (meetsContrastGuidelines(color, text).AALarge) {
    return text;
  } else {
    return darken(delta, color);
  }
};

export const WithPartnerAccentColor = ({ color, children }: Props) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (isNotNullish(containerRef.current)) {
      const element = containerRef.current as unknown as HTMLElement;
      const luminance = Result.fromExecution(() => getLuminance(color));
      luminance.match({
        Ok: luminance => {
          // The Math.pow adjusts the estimation to the default scales
          const mostLikelyPositionScale =
            colorScaleItems[
              colorScaleItems.length -
                (((luminance > 0.5 ? luminance : Math.pow(luminance, 0.2)) *
                  colorScaleItems.length) |
                  0)
            ];

          const estimated500 = match(mostLikelyPositionScale)
            .with(0, () => shade(0.97, color))
            .with(50, () => shade(0.95, color))
            .with(100, () => shade(0.8, color))
            .with(200, () => shade(0.6, color))
            .with(300, () => shade(0.4, color))
            .with(400, () => shade(0.2, color))
            .with(500, P.nullish, () => color)
            .with(600, () => tint(0.2, color))
            .with(700, () => tint(0.4, color))
            .with(800, () => tint(0.6, color))
            .with(900, () => tint(0.8, color))
            .exhaustive();

          const colorScale: ColorScale = {
            0: tint(0.97, estimated500),
            50: tint(0.95, estimated500),
            100: tint(0.8, estimated500),
            200: tint(0.6, estimated500),
            300: tint(0.4, estimated500),
            400: tint(0.2, estimated500),
            500: estimated500,
            600: shade(0.2, estimated500),
            700: shade(0.4, estimated500),
            800: shade(0.6, estimated500),
            900: shade(0.8, estimated500),
            primary: color,
            contrast: getContrastColor(color, luminance),
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
        },
        Error: () => {
          // Do nothing, keep partner color
        },
      });
    }
  }, [color]);

  return (
    <View ref={containerRef} style={styles.container}>
      {children}
    </View>
  );
};
