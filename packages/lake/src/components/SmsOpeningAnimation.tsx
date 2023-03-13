import { useMemo } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { backgroundColor, colors } from "../constants/design";
import { Circle, G, Mask, Path, Rect, Svg } from "./Svg";

const styles = StyleSheet.create({
  circle: {
    opacity: 0,
    animationKeyframes: {
      "0%": { opacity: 0, transform: [{ scale: 0.4 }] },
      "30%": { opacity: 0, transform: [{ scale: 0.4 }] },
      "40%": { opacity: 1 },
      "75%": { opacity: 0, transform: [{ scale: 1.5 }] },
      "100%": { opacity: 0, transform: [{ scale: 1.5 }] },
    },
    animationDuration: "5000ms",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
  },
  icon: {
    animationKeyframes: {
      "0%": { opacity: 0, transform: [{ translateY: -20 }, { scale: 1 }] },
      "10%": { opacity: 1, transform: [{ scale: 1 }] },
      "25%": { transform: [{ scale: 1 }] },
      "35%": { transform: [{ translateY: 60 }, { scale: 10 }] },
      "100%": { opacity: 1, transform: [{ translateY: 60 }, { scale: 10 }] },
    },
    animationDuration: "5000ms",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
  },
  logo: {
    animationKeyframes: {
      "0%": { opacity: 0, transform: [{ translateY: -20 }, { scale: 1 }] },
      "10%": { opacity: 1, transform: [{ translateY: 0 }, { scale: 1 }] },
      "25%": { transform: [{ translateY: 0 }, { scale: 1 }] },
      "35%": { transform: [{ translateY: 270 }, { scale: 2 }] },
      "100%": { opacity: 1, transform: [{ translateY: 270 }, { scale: 2 }] },
    },
    animationDuration: "5000ms",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
  },
});

type Props = {
  playing?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const SmsOpeningAnimation = ({ playing = true, style }: Props) => {
  const animationStyle = useMemo(() => {
    return {
      animationPlayState: playing ? "running" : "paused",
    } as const;
  }, [playing]);

  return (
    <Svg viewBox="0 0 442 860" style={style}>
      <Mask nativeID="phoneScreen">
        <Rect x={0} y={0} width={442} height={860} fill="#000" />
        <Rect fill="#fff" x={25} y={21} width={392} height={817} rx={45} />
      </Mask>

      <G>
        <Rect fill={colors.swan[400]} x={25} y={21} width={392} height={817} rx={45} />

        <G mask="url(#phoneScreen)">
          <Rect
            fill={backgroundColor.default}
            fillRule="nonzero"
            x={43}
            y={80}
            width={355}
            height={149}
            rx={32}
            style={[styles.icon, animationStyle]}
            transform-origin="221.2 150"
          />
        </G>

        <Path
          d="M221.000028,125 C237.569013,125 251,138.429348 251,154.996311 C251,171.563274 237.569013,184.992622 221.000028,184.992622 C216.146713,184.999037 211.364882,183.823286 207.068041,181.567043 L194.198053,184.917631 C193.323041,185.145499 192.392776,184.893009 191.7531,184.254027 C191.113423,183.615046 190.860005,182.685139 191.087056,181.810013 L194.435053,168.944596 C192.172455,164.643731 190.993369,159.855888 191.000028,154.996311 C191.000028,138.429348 204.431044,125 221.000028,125 Z M224.756025,157.995942 L211.250037,157.995942 L210.944038,158.01694 C209.830402,158.170147 209.00073,159.121675 209.00073,160.245665 C209.00073,161.369656 209.830402,162.321184 210.944038,162.474391 L211.250037,162.495389 L224.756025,162.495389 L225.059024,162.474391 C226.17266,162.321184 227.002332,161.369656 227.002332,160.245665 C227.002332,159.121675 226.17266,158.170147 225.059024,158.01694 L224.756025,157.995942 Z M230.750019,147.497233 L211.250037,147.497233 L210.944038,147.518231 C209.830402,147.671438 209.00073,148.622966 209.00073,149.746957 C209.00073,150.870947 209.830402,151.822475 210.944038,151.975683 L211.250037,151.99668 L230.750019,151.99668 L231.056019,151.975683 C232.169654,151.822475 232.999327,150.870947 232.999327,149.746957 C232.999327,148.622966 232.169654,147.671438 231.056019,147.518231 L230.750019,147.497233 Z"
          fill={colors.swan[400]}
          fillRule="nonzero"
          style={[styles.logo, animationStyle]}
          transform-origin="221.2 150"
        />

        <Circle
          stroke={colors.swan[100]}
          strokeWidth={2}
          cx={219.5}
          cy={439.5}
          r={157.5}
          fill="none"
          style={[styles.circle, animationStyle]}
          transform-origin="219.5 439.5"
        />

        <Path
          d="M369 0a67.998 67.998 0 0168 68v177c1.326 0 2.598.527 3.536 1.464A5.004 5.004 0 01442 250v96a5.004 5.004 0 01-1.464 3.536A5.004 5.004 0 01437 351v441a67.996 67.996 0 01-19.917 48.083A67.996 67.996 0 01369 860H71a67.998 67.998 0 01-68-68V365.6a5 5 0 01-3-4.6v-58a5.002 5.002 0 013-4.6v-16.8a5 5 0 01-3-4.6v-58a5.002 5.002 0 013-4.6v-30.8a5 5 0 01-3-4.6v-24a5.002 5.002 0 013-4.6V68A68 68 0 0171 0h298zm0 21H71a46 46 0 00-46 45.2V792a45.999 45.999 0 0045.2 46H369a46 46 0 0046-45.2V67a45.998 45.998 0 00-46-46z"
          fill="#000"
        />
      </G>
    </Svg>
  );
};
