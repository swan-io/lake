import { Box } from "@swan-io/lake/src/components/Box";
import { LakeHeading } from "@swan-io/lake/src/components/LakeHeading";
import { Separator } from "@swan-io/lake/src/components/Separator";
import { Space } from "@swan-io/lake/src/components/Space";
import { SwanLogo } from "@swan-io/lake/src/components/SwanLogo";
import { WithPartnerAccentColor } from "@swan-io/lake/src/components/WithPartnerAccentColor";
import { commonStyles } from "@swan-io/lake/src/constants/commonStyles";
import {
  colors,
  fonts,
  interFontStyle,
  invariantColors,
  radii,
  spacings,
} from "@swan-io/lake/src/constants/design";
import { isNotNullishOrEmpty } from "@swan-io/lake/src/utils/nullish";
import { CSSProperties } from "react";
import { StyleSheet, Text, TextStyle, View } from "react-native";
import { match } from "ts-pattern";
import { t } from "../utils/i18n";

const LOGO_MAX_HEIGHT = 24;
const LOGO_MAX_WIDTH = 150;

const getTextStyle = (type: "serif" | "mono", fontSize: number): TextStyle => ({
  ...(type === "mono" ? { fontFamily: fonts.iban } : interFontStyle),
  color: colors.gray[900],
  fontSize,
  lineHeight: fontSize * 1.25,
  fontWeight: "400",
});

const styles = StyleSheet.create({
  container: {
    borderRadius: radii[8],
    borderColor: colors.gray[100],
    borderWidth: 1,
    backgroundColor: invariantColors.white,
    width: 470,
  },
  half: {
    padding: spacings[24],
  },
  shrink: {
    flexShrink: 1,
  },
  label: {
    ...getTextStyle("serif", 10),
  },
  addressText: {
    ...getTextStyle("serif", 12),
  },
  mainText: {
    ...getTextStyle("mono", 12),
  },
  smallText: {
    ...getTextStyle("mono", 10),
  },
  partnershipText: {
    ...getTextStyle("serif", 8),
    color: colors.gray[500],
  },
  partnerLabel: {
    color: colors.partner[500],
    fontWeight: "500",
  },
  defaultLogo: {
    height: LOGO_MAX_HEIGHT,
    width: (45 / 10) * LOGO_MAX_HEIGHT,
  },
  swanLogo: {
    height: 6,
    width: (45 / 10) * 6,
  },
});

type ItemProps = {
  color?: "partner" | "gray";
  kind: "address" | "main" | "small";
  label: string;
  value: string | string[];
};

const kindStyles = {
  address: styles.addressText,
  main: styles.mainText,
  small: styles.smallText,
};

const Item = ({ color = "gray", kind, label, value }: ItemProps) => (
  <View style={styles.shrink}>
    <Text style={[styles.label, color === "partner" && styles.partnerLabel]}>{label}</Text>
    <Space height={4} />

    {typeof value === "string" ? (
      <Text style={kindStyles[kind]}>{value}</Text>
    ) : (
      value.map((line, index) => (
        <Text key={index} style={kindStyles[kind]}>
          {line}
        </Text>
      ))
    )}
  </View>
);

type Address = {
  address: string;
  city: string;
  country: string;
  name: string;
  zipCode: string;
};

type RIBv1Props = {
  version: "v1";
  accountHolderAddress: Address;
  bank: string;
  bankAddress: Address;
  bic: string;
  iban: string;
  partnerColor: string;
  partnerLogoUrl?: string;
} & (
  | {
      accountCountry: "FRA";
      agency: string;
      bankKey: string;
      bankNumber: string;
    }
  | {
      accountCountry: "DEU";
      accountNumber: string;
    }
  | {
      accountCountry: "ESP";
      agency: string;
      bankNumber: string;
      nationalCode: string;
    }
  | {
      accountCountry: "NLD";
      bankKey: string;
      bankNumber: string;
    }
  | {
      accountCountry: "ITA";
      agency: string;
      bankNumber: string;
    }
);

const logoStyle: CSSProperties = {
  objectFit: "contain",
  objectPosition: "left",
};

const RIBv1 = ({
  accountHolderAddress,
  bank,
  bankAddress,
  bic,
  iban,
  partnerColor,
  partnerLogoUrl,
  ...props
}: RIBv1Props) => (
  <WithPartnerAccentColor color={partnerColor}>
    <View style={styles.container}>
      <View style={styles.half}>
        <Box direction="row" alignItems="center">
          {isNotNullishOrEmpty(partnerLogoUrl) ? (
            <img
              src={partnerLogoUrl}
              style={{ ...logoStyle, height: LOGO_MAX_HEIGHT, maxWidth: LOGO_MAX_WIDTH }}
            />
          ) : (
            <SwanLogo style={styles.defaultLogo} />
          )}

          <Space width={24} />

          <LakeHeading
            align="right"
            color={colors.gray[900]}
            level={2}
            style={commonStyles.fill}
            variant="h3"
          >
            {t("rib.bankDetails")}
          </LakeHeading>
        </Box>

        <Space height={24} />

        <Box direction="row" alignItems="center">
          <Item kind="main" color="partner" label={t("rib.iban")} value={iban} />
          <Space width={24} />
          <Item kind="main" color="partner" label={t("rib.bic")} value={bic} />
        </Box>

        <Space height={8} />

        <Box direction="row" alignItems="center">
          {match(props)
            .with({ accountCountry: "FRA" }, ({ agency, bankKey, bankNumber }) => (
              <>
                <Item kind="small" label={t("rib.bank")} value={bank} />
                <Space width={24} />
                <Item kind="small" label={t("rib.agency")} value={agency} />
                <Space width={24} />
                <Item kind="small" label={t("rib.number")} value={bankNumber} />
                <Space width={24} />
                <Item kind="small" label={t("rib.key")} value={bankKey} />
              </>
            ))
            .with({ accountCountry: "DEU" }, ({ accountNumber }) => (
              <>
                <Item kind="small" label={t("rib.bank")} value={bank} />
                <Space width={24} />
                <Item kind="small" label={t("rib.accountNumber")} value={accountNumber} />
              </>
            ))
            .with({ accountCountry: "ESP" }, ({ agency, bankNumber, nationalCode }) => (
              <>
                <Item kind="small" label={t("rib.bank")} value={bank} />
                <Space width={24} />
                <Item kind="small" label={t("rib.agency")} value={agency} />
                <Space width={24} />
                <Item kind="small" label={t("rib.nationalCode")} value={nationalCode} />
                <Space width={24} />
                <Item kind="small" label={t("rib.number")} value={bankNumber} />
              </>
            ))
            .with({ accountCountry: "NLD" }, ({ bankKey, bankNumber }) => (
              <>
                <Item kind="small" label={t("rib.bank")} value={bank} />
                <Space width={24} />
                <Item kind="small" label={t("rib.number")} value={bankNumber} />
                <Space width={24} />
                <Item kind="small" label={t("rib.key")} value={bankKey} />
              </>
            ))
            .with({ accountCountry: "ITA" }, ({ agency, bankNumber }) => (
              <>
                <Item kind="small" label={t("rib.bank")} value={bank} />
                <Space width={24} />
                <Item kind="small" label={t("rib.agency")} value={agency} />
                <Space width={24} />
                <Item kind="small" label={t("rib.number")} value={bankNumber} />
              </>
            ))
            .exhaustive()}
        </Box>
      </View>

      <Separator />

      <View style={styles.half}>
        <Box direction="row" alignItems="center">
          <Item
            kind="address"
            color="partner"
            label={t("rib.address")}
            value={[
              bankAddress.name,
              bankAddress.address,
              `${bankAddress.zipCode} ${bankAddress.city}`,
              bankAddress.country,
            ]}
          />

          <Space width={24} />

          <Item
            kind="address"
            color="partner"
            label={t("rib.accountHolder")}
            value={[
              accountHolderAddress.name,
              accountHolderAddress.address,
              `${accountHolderAddress.zipCode} ${accountHolderAddress.city}`,
              accountHolderAddress.country,
            ]}
          />
        </Box>

        <Space height={12} />

        <Box direction="row" alignItems="center">
          <Text style={styles.partnershipText}>{t("rib.partnership")}</Text>
          <Space width={4} />
          <SwanLogo color={colors.gray[900]} style={styles.swanLogo} />
        </Box>
      </View>
    </View>
  </WithPartnerAccentColor>
);

export type RIBProps = RIBv1Props;

export const RIB = (props: RIBProps) =>
  match(props)
    .with({ version: "v1" }, props => <RIBv1 {...props} />)
    .exhaustive();
