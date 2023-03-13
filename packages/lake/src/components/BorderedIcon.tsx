import { StyleSheet } from "react-native";
import { colors, ColorVariants, radii } from "../constants/design";
import { Box } from "./Box";
import { Icon, IconName } from "./Icon";
import { SpacingValue } from "./Space";

const styles = StyleSheet.create({
  base: {
    borderRadius: radii[8],
    borderWidth: 1,
    borderColor: colors.current[100],
    backgroundColor: colors.current[50],
  },
});

type Props = {
  name: IconName;
  size?: number;
  padding?: SpacingValue | 0;
  color?: ColorVariants;
};

export const BorderedIcon = ({ name, size = 96, padding = 0, color = "current" }: Props) => {
  const iconSize = size - padding * 2;

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      style={[
        styles.base,
        {
          width: size,
          height: size,
          borderColor: colors[color][100],
          backgroundColor: colors[color][50],
        },
      ]}
    >
      <Icon name={name} size={iconSize} color={colors[color][500]} />
    </Box>
  );
};
