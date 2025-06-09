import { useMemo } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { backgroundColor } from "../constants/design";
import { Circle, G, Image, Mask, Path, Rect, Svg } from "./Svg";

const styles = StyleSheet.create({
  circle: {
    opacity: 0,
    animationKeyframes: {
      "0%": { opacity: 0, transform: "scale(0.4)" },
      "30%": { opacity: 0, transform: "scale(0.4)" },
      "40%": { opacity: 1 },
      "75%": { opacity: 0, transform: "scale(1.5)" },
      "100%": { opacity: 0, transform: "scale(1.5)" },
    },
    animationDuration: "5000ms",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
  },
  icon: {
    animationKeyframes: {
      "0%": { transform: "scale(1)" },
      "25%": { transform: "scale(1)" },
      "35%": { transform: "translateY(60px) scale(10)" },
      "100%": { transform: "translateY(60px) scale(10)" },
    },
    animationDuration: "5000ms",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
  },
  logo: {
    animationKeyframes: {
      "0%": { transform: "translateY(0px) scale(1)" },
      "25%": { transform: "translateY(0px) scale(1)" },
      "35%": { transform: "translateY(72px) scale(2)" },
      "100%": { transform: "translateY(72px) scale(2)" },
    },
    animationDuration: "5000ms",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
  },
});

type Props = {
  accentColor: string;
  appLogo: string;
  playing?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const AppOpeningAnimation = ({ accentColor, appLogo, playing = true, style }: Props) => {
  const animationStyle = useMemo(() => {
    return {
      animationPlayState: playing ? "running" : "paused",
    } as const;
  }, [playing]);

  return (
    <Svg viewBox="0 0 442 860" style={style}>
      <Mask id="phoneScreen">
        <Rect x={0} y={0} width={442} height={860} fill="#000" />
        <Rect fill="#fff" x={25} y={21} width={392} height={817} rx={45} />
      </Mask>

      <G>
        <Rect fill={backgroundColor.default} x={25} y={21} width={392} height={817} rx={45} />

        <Path
          d="M80 86h35.6c15 0 27 12 27 27v35.6c0 15-12 27-27 27H80c-15 0-27-12-27-27V113c0-15 12-27 27-27zm0 117.6h35.6c15 0 27 12.1 27 27v35.6c0 15-12 27-27 27H80c-15 0-27-12-27-27v-35.6c0-14.9 12-27 27-27zm0 117.7h35.6c15 0 27 12 27 27v35.6c0 14.9-12 27-27 27H80c-15 0-27-12.1-27-27v-35.6c0-15 12-27 27-27zm0 117.6h35.6c15 0 27 12.1 27 27v35.6c0 15-12 27-27 27H80c-15 0-27-12-27-27V466c0-14.9 12-27 27-27v-.1zm0 282.5h35.6c15 0 27 12 27 27V784c0 14.9-12 27-27 27H80c-15 0-27-12.1-27-27v-35.6c0-15 12-27 27-27zM203.2 86h35.6c15 0 27 12 27 27v35.6c0 15-12 27-27 27h-35.6c-15 0-27-12-27-27V113c0-15 12-27 27-27zm0 117.6h35.6c15 0 27 12.1 27 27v35.6c0 15-12 27-27 27h-35.6c-15 0-27-12-27-27v-35.6c0-14.9 12-27 27-27zm0 235.3h35.6c15 0 27 12.1 27 27v35.6c0 15-12 27-27 27h-35.6c-15 0-27-12-27-27V466c0-14.9 12-27 27-27v-.1zm0 282.5h35.6c15 0 27 12 27 27V784c0 14.9-12 27-27 27h-35.6c-15 0-27-12.1-27-27v-35.6c0-15 12-27 27-27zM326.4 86H362c15 0 27 12 27 27v35.6c0 15-12 27-27 27h-35.6c-15 0-27-12-27-27V113c0-15 12-27 27-27zm0 117.6H362c15 0 27 12.1 27 27v35.6c0 15-12 27-27 27h-35.6c-15 0-27-12-27-27v-35.6c0-14.9 12-27 27-27zm0 117.7H362c15 0 27 12 27 27v35.6c0 14.9-12 27-27 27h-35.6c-15 0-27-12.1-27-27v-35.6c0-15 12-27 27-27zm0 117.6H362c15 0 27 12.1 27 27v35.6c0 15-12 27-27 27h-35.6c-15 0-27-12-27-27V466c0-14.9 12-27 27-27v-.1zm0 282.5H362c15 0 27 12 27 27V784c0 14.9-12 27-27 27h-35.6c-15 0-27-12.1-27-27v-35.6c0-15 12-27 27-27z"
          fill="#fff"
        />

        <G mask="url(#phoneScreen)">
          <Rect
            fill={accentColor}
            fillRule="nonzero"
            x={176.4}
            y={321}
            width={89.6}
            height={89.6}
            rx={27}
            style={[styles.icon, animationStyle]}
            transformOrigin="221.2 365.8"
          />
        </G>

        <Image
          xlinkHref={appLogo}
          preserveAspectRatio="xMidYMid meet"
          x={190}
          y={335}
          height={62}
          width={62}
          style={[styles.logo, animationStyle]}
          transformOrigin="221.2 365.8"
        />

        <Circle
          stroke="#FFFFFF"
          strokeWidth={2}
          cx={219.5}
          cy={439.5}
          r={157.5}
          fill="none"
          style={[styles.circle, animationStyle]}
          transformOrigin="219.5 439.5"
        />

        <Path
          d="M369 0a67.998 67.998 0 0168 68v177c1.326 0 2.598.527 3.536 1.464A5.004 5.004 0 01442 250v96a5.004 5.004 0 01-1.464 3.536A5.004 5.004 0 01437 351v441a67.996 67.996 0 01-19.917 48.083A67.996 67.996 0 01369 860H71a67.998 67.998 0 01-68-68V365.6a5 5 0 01-3-4.6v-58a5.002 5.002 0 013-4.6v-16.8a5 5 0 01-3-4.6v-58a5.002 5.002 0 013-4.6v-30.8a5 5 0 01-3-4.6v-24a5.002 5.002 0 013-4.6V68A68 68 0 0171 0h298zm0 21H71a46 46 0 00-46 45.2V792a45.999 45.999 0 0045.2 46H369a46 46 0 0046-45.2V67a45.998 45.998 0 00-46-46z"
          fill="#000"
        />
      </G>
    </Svg>
  );
};
