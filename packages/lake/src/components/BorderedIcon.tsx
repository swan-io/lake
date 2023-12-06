import { StyleSheet, ViewProps } from "react-native";
import { ColorVariants, Radii, colors, radii } from "../constants/design";
import { Box } from "./Box";
import { Icon, IconName } from "./Icon";
import { SpacingValue } from "./Space";

const styles = StyleSheet.create({
  base: {
    borderWidth: 1,
    borderColor: colors.current[100],
    backgroundColor: colors.current[50],
  },
});

type Props = {
  name: IconName;
  borderRadius?: Radii;
  color?: ColorVariants;
  padding?: SpacingValue | 0;
  size?: number;
  style?: ViewProps["style"];
};

export const BorderedIcon = ({
  name,
  borderRadius = 8,
  color = "current",
  padding = 0,
  size = 96,
  style,
}: Props) => {
  const iconSize = size - padding * 2;

  const boxStyle = {
    backgroundColor: colors[color][50],
    borderColor: colors[color][100],
    borderRadius: radii[borderRadius],
    width: size,
    height: size,
  };

  return (
    <Box alignItems="center" justifyContent="center" style={[styles.base, boxStyle, style]}>
      <Icon name={name} size={iconSize} color={colors[color][500]} />
    </Box>
  );
};
