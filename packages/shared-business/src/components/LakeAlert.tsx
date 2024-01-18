import { Box } from "@swan-io/lake/src/components/Box";
import { Icon, IconName } from "@swan-io/lake/src/components/Icon";
import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { Space } from "@swan-io/lake/src/components/Space";
import { commonStyles } from "@swan-io/lake/src/constants/commonStyles";
import { colors, shadows } from "@swan-io/lake/src/constants/design";
import { useBoolean } from "@swan-io/lake/src/hooks/useBoolean";
import { isNotNullish, isNotNullishOrEmpty } from "@swan-io/lake/src/utils/nullish";
import { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { t } from "../utils/i18n";

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
  content: {
    marginLeft: 40,
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
  title: ReactNode;
  subtitle?: string;
  style?: StyleProp<ViewStyle>;
} & (
  | {
      callToAction?: ReactNode;
      foldable?: never;
    }
  | {
      callToAction?: never;
      foldable: boolean;
    }
);

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
  foldable = false,
}: Props) => {
  const [visible, { toggle }] = useBoolean(!foldable || isNotNullish(callToAction));

  const color = alertColor[variant];
  const icon = alertIcon[variant];

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

        {isNotNullish(callToAction) ? (
          <View style={styles.callToAction}>{callToAction}</View>
        ) : null}

        {foldable && isNotNullish(children) ? (
          <LakeButton onPress={toggle} mode="tertiary" size="small">
            {visible ? t("alert.showLess") : t("alert.showMore")}
          </LakeButton>
        ) : null}
      </Box>

      {isNotNullish(children) && visible && (
        <View style={icon != null ? styles.content : null}>
          <Space height={12} />

          {isText(children) ? <LakeText>{children}</LakeText> : children}
        </View>
      )}
    </View>
  );
};
