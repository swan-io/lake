import { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { commonStyles } from "../constants/commonStyles";
import { breakpoints, colors, shadows } from "../constants/design";
import { useResponsive } from "../hooks/useResponsive";
import { isNotNullish, isNotNullishOrEmpty } from "../utils/nullish";
import { Box } from "./Box";
import { Icon, IconName } from "./Icon";
import { LakeText } from "./LakeText";
import { Space } from "./Space";

const styles = StyleSheet.create({
  base: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 4,
    borderWidth: 0.5,
    borderLeftWidth: 4,
    boxShadow: shadows.tile,
  },
  anchored: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderLeftWidth: 0.5,
    marginHorizontal: -1,
    marginBottom: -1,
  },
  contentDesktop: {
    marginLeft: 40,
  },
  contentMobile: {
    marginLeft: 0,
  },
  callToAction: {
    marginTop: -12,
    marginBottom: -12,
    marginRight: -12,
    flexShrink: 0,
  },
});

type AlertVariant = "info" | "warning" | "error" | "success" | "neutral";

const alertIcon: Record<AlertVariant, IconName | undefined> = {
  info: "info-regular",
  warning: "warning-regular",
  error: "dismiss-circle-regular",
  success: "checkmark-circle-regular",
  neutral: undefined,
};

const alertColor: Record<AlertVariant, string> = {
  info: colors.shakespear[700],
  warning: colors.warning[700],
  error: colors.negative[700],
  success: colors.positive[700],
  neutral: colors.gray[700],
};

const alertBackground: Record<AlertVariant, string> = {
  info: colors.shakespear[0],
  warning: colors.warning[0],
  error: colors.negative[0],
  success: colors.positive[0],
  neutral: colors.gray[0],
};

const alertBorder: Record<AlertVariant, string> = {
  info: colors.shakespear[200],
  warning: colors.warning[200],
  error: colors.negative[200],
  success: colors.positive[200],
  neutral: colors.gray[200],
};

const alertLeftBorder: Record<AlertVariant, string> = {
  info: colors.shakespear[500],
  warning: colors.warning[500],
  error: colors.negative[500],
  success: colors.positive[500],
  neutral: colors.gray[500],
};

type Props = {
  anchored?: boolean;
  variant: AlertVariant;
  children?: ReactNode;
  callToAction?: ReactNode;
  title: ReactNode;
  subtitle?: string;
  style?: StyleProp<ViewStyle>;
};

const isText = (node: ReactNode): node is string | number =>
  typeof node === "string" || typeof node === "number";

export const LakeAlert = ({
  anchored = false,
  variant,
  title,
  subtitle,
  children,
  style,
  callToAction,
}: Props) => {
  const color = alertColor[variant];
  const icon = alertIcon[variant];
  const { desktop } = useResponsive(breakpoints.medium);

  return (
    <View
      style={[
        styles.base,
        { backgroundColor: alertBackground[variant], borderColor: alertBorder[variant] },
        anchored ? styles.anchored : { borderLeftColor: alertLeftBorder[variant] },
        style,
      ]}
    >
      <Box direction="row" alignItems="center">
        {icon != null ? (
          <>
            <Icon name={icon} color={color} size={20} />
            <Space width={20} />
          </>
        ) : null}

        <View style={commonStyles.fill}>
          <LakeText color={color} variant={icon != null ? "regular" : "medium"}>
            {title}
          </LakeText>

          {isNotNullishOrEmpty(subtitle) && <LakeText color={color}>{subtitle}</LakeText>}
        </View>

        {isNotNullish(callToAction) && <View style={styles.callToAction}>{callToAction}</View>}
      </Box>

      {isNotNullish(children) && (
        <View style={icon != null && desktop ? styles.contentDesktop : styles.contentMobile}>
          <Space height={12} />

          {isText(children) ? <LakeText>{children}</LakeText> : children}
        </View>
      )}
    </View>
  );
};
