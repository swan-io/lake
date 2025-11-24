import { Box } from "@swan-io/lake/src/components/Box";
import { Separator } from "@swan-io/lake/src/components/Separator";
import { Space } from "@swan-io/lake/src/components/Space";
import { SwanLogo } from "@swan-io/lake/src/components/SwanLogo";
import { colors } from "@swan-io/lake/src/constants/design";
import { isNotNullishOrEmpty } from "@swan-io/lake/src/utils/nullish";
import { CSSProperties } from "react";
import { StyleSheet, Text } from "react-native";
import { t } from "../utils/i18n";
import { getTextStyle } from "../utils/style";

const LOGO_MAX_HEIGHT = 24;
const LOGO_MAX_WIDTH = 150;

const styles = StyleSheet.create({
  partnershipText: {
    ...getTextStyle("sans", 14),
    color: colors.gray[500],
  },
  pageTitle: {
    ...getTextStyle("sans", 20),
    color: colors.swan[500],
    fontWeight: "600",
  },
  text: {
    ...getTextStyle("sans", 14),
  },
  defaultLogo: {
    height: LOGO_MAX_HEIGHT,
    width: (45 / 10) * LOGO_MAX_HEIGHT,
  },
  swanLogo: {
    height: 8,
    width: (45 / 10) * 8,
    position: "relative",
    top: 0.5,
  },
});

type AccountStatementHeaderProps = {
  partnerLogoUrl?: string;
  accountHolderType: "Individual" | "Company";
};

const logoStyle: CSSProperties = {
  height: LOGO_MAX_HEIGHT,
  maxWidth: LOGO_MAX_WIDTH,
  objectFit: "contain",
  objectPosition: "left",
};

export const AccountStatementHeader = ({
  partnerLogoUrl,
  accountHolderType,
}: AccountStatementHeaderProps) => {
  return (
    <>
      <Box direction="row" justifyContent="spaceBetween">
        <Box direction="row" alignItems="center">
          {isNotNullishOrEmpty(partnerLogoUrl) ? (
            <img src={partnerLogoUrl} style={logoStyle} />
          ) : (
            <SwanLogo style={styles.defaultLogo} />
          )}

          <Separator horizontal={true} space={8} />
          <Text style={styles.partnershipText}>{t("accountStatement.partnership")}</Text>
          <Space width={4} />
          <SwanLogo color={colors.gray[900]} style={styles.swanLogo} />
        </Box>
      </Box>
      <Space height={24} />
      <Text style={styles.pageTitle}>{t("accountStatement.titleDocument")}</Text>
      <Space height={8} />

      <Text style={styles.text}>
        {accountHolderType === "Company"
          ? t("accountStatement.titleDocument.companyDescription")
          : t("accountStatement.titleDocument.individualDescription")}
      </Text>

      <Space height={24} />
    </>
  );
};
