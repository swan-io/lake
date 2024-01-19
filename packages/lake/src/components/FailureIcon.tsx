import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../constants/colors";
import { Path, Svg } from "./Svg";

type Props = {
  size: number;
  style?: StyleProp<ViewStyle>;
};

export const FailureIcon = ({ size, style }: Props) => (
  <Svg viewBox="0 0 24 24" style={[{ height: size, width: size }, style]}>
    <Path
      d="M12 0a12 12 0 110 24 12 12 0 010-24zM8.9 7.57A.95.95 0 007.58 8.9l3.08 3.1-3.1 3.1a.95.95 0 101.35 1.33L12 13.34l3.1 3.1a.95.95 0 101.33-1.35L13.34 12l3.1-3.1a.95.95 0 10-1.35-1.33L12 10.66z"
      fill={colors.red[100]}
    />
  </Svg>
);
