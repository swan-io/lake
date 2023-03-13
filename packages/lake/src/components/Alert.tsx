import { StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import { colors } from "../constants/colors";
import { typography } from "../constants/typography";
import { Box } from "./Box";
import { Icon, IconName } from "./Icon";
import { Space } from "./Space";

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  text: {
    ...typography.bodySmall,
  },
});

type AlertVariant = "info" | "warning" | "error";

const alertIcon: Record<AlertVariant, IconName> = {
  info: "info-filled",
  warning: "warning-filled",
  error: "error-circle-filled",
};

const alertColor: Record<AlertVariant, string> = {
  info: colors.gray[80],
  warning: colors.orange[100],
  error: colors.red[100],
};

const alertBackground: Record<AlertVariant, string> = {
  info: colors.gray[3],
  warning: colors.orange[10],
  error: colors.red[10],
};

type Props = {
  variant: AlertVariant;
  children: string;
  style?: StyleProp<ViewStyle>;
};

export const Alert = ({ variant, children, style }: Props) => {
  const color = alertColor[variant];

  return (
    <Box
      direction="row"
      alignItems="center"
      style={[styles.base, { backgroundColor: alertBackground[variant] }, style]}
    >
      <Icon name={alertIcon[variant]} color={color} size={20} />
      <Space width={12} />
      <Text style={[styles.text, { color }]}>{children}</Text>
    </Box>
  );
};
