import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { colors } from "../constants/colors";
import { Path, Svg } from "./Svg";

const styles = StyleSheet.create({
  base: {
    height: 10,
    width: 45,
  },
});

type Props = {
  color?: string;
  style?: StyleProp<ViewStyle>;
};

export const SwanLogo = ({ color = colors.gray[100], style }: Props) => (
  <Svg viewBox="0 0 45 10" style={[styles.base, style]}>
    <title>Swan</title>

    <Path
      d="M41.01 0c2.2 0 3.66 1.6 3.66 3.82v5.95H42.9V3.9c0-1.28-1-2.19-2.23-2.19a2.33 2.33 0 00-2.37 2.4v5.65h-1.83V.27h1.83v.92A3.4 3.4 0 0141 0zM30.77 9.73H29.2c-2.65 0-4.53-2.27-4.53-4.86A4.81 4.81 0 0129.44 0c2.92 0 4.93 1.74 4.93 4.45v5.32h-1.71V4.45c0-1.72-1.2-2.76-3.22-2.76a3.11 3.11 0 00-3.06 3.18c0 1.72 1.2 3.17 2.82 3.17h1.57v1.7zm-14.37-7l-2.25 7.04h-2.1L9.07.27h1.96l2.11 7.16L15.45.27h1.9l2.3 7.16L21.76.27h1.96l-3 9.5h-2.1zM4.14 10C1.94 10 .54 8.82.36 6.93L.33 6.7h1.79l.02.18c.15.98.84 1.48 2.07 1.48s1.93-.54 1.93-1.38c0-.82-.5-1.1-2.15-1.42l-.43-.09C1.54 5.05.64 4.41.64 2.76.64 1.1 2.1 0 4.18 0 6.06 0 7.5 1.12 7.65 2.83l.02.23H5.9l-.02-.19c-.12-.79-.72-1.25-1.79-1.25-1.03 0-1.68.47-1.68 1.14 0 .68.47.92 1.99 1.2l.6.12c2 .4 2.93 1.1 2.93 2.83C7.93 8.76 6.4 10 4.14 10z"
      fill={color}
    />
  </Svg>
);
