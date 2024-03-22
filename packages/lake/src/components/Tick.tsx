import { ColorValue, StyleProp, View, ViewStyle } from "react-native";
import { match } from "ts-pattern";
import { radii, spacings } from "../constants/design";

type Props = {
  style?: StyleProp<ViewStyle>;
  color: ColorValue;
  size?: "small" | "medium" | "large";
};

export const Tick = ({ color, style, size = "medium" }: Props) => (
  <View
    style={[
      {
        backgroundColor: color,
        ...match(size)
          .with("small", () => ({
            width: spacings[8],
            height: spacings[8],
            borderRadius: radii[4],
          }))
          .with("large", () => ({
            width: spacings[16],
            height: spacings[16],
            borderRadius: radii[8],
          }))
          .otherwise(() => ({
            width: spacings[12],
            height: spacings[12],
            borderRadius: radii[6],
          })),
      },
      style,
    ]}
  />
);
