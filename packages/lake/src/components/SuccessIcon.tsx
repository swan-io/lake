import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../constants/colors";
import { Path, Svg } from "./Svg";

type Props = {
  size: number;
  style?: StyleProp<ViewStyle>;
};

export const SuccessIcon = ({ size, style }: Props) => (
  <Svg viewBox="0 0 24 24" style={[{ height: size, width: size }, style]}>
    <Path
      d="M12 2a10 10 0 110 20 10 10 0 010-20zm3.22 6.97l-4.47 4.47-1.97-1.97a.75.75 0 00-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l5-5a.75.75 0 10-1.06-1.06z"
      fill={colors.green[100]}
    />
  </Svg>
);
