import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../constants/design";
import { BorderedIcon } from "./BorderedIcon";
import { Icon, IconName } from "./Icon";
import { LakeHeading } from "./LakeHeading";
import { LakeText } from "./LakeText";
import { Space, SpacingValue } from "./Space";

const styles = StyleSheet.create({
  emptyList: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

type Props = {
  icon: IconName;
  borderedIcon?: boolean;
  borderedIconPadding?: SpacingValue | 0;
  title?: string;
  subtitle?: ReactNode;
  children?: ReactNode;
};

export const EmptyView = ({
  icon,
  borderedIcon = false,
  borderedIconPadding,
  title,
  subtitle,
  children,
}: Props) => (
  <View style={styles.emptyList}>
    {borderedIcon ? (
      <BorderedIcon name={icon} padding={borderedIconPadding} />
    ) : (
      <Icon name={icon} size={96} color={colors.current.primary} />
    )}

    <Space height={24} />

    {title != null ? (
      <>
        <LakeHeading align="center" level={3} variant="h5">
          {title}
        </LakeHeading>

        <Space height={8} />
      </>
    ) : null}

    {subtitle != null && <LakeText align="center">{subtitle}</LakeText>}
    {children}
  </View>
);
