import { Box } from "@swan-io/lake/src/components/Box";
import { Fill } from "@swan-io/lake/src/components/Fill";
import { LakeHeading } from "@swan-io/lake/src/components/LakeHeading";
import { Separator } from "@swan-io/lake/src/components/Separator";
import { Space } from "@swan-io/lake/src/components/Space";
import { SwanLogo } from "@swan-io/lake/src/components/SwanLogo";
import { WithPartnerAccentColor } from "@swan-io/lake/src/components/WithPartnerAccentColor";
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
import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import { P, match } from "ts-pattern";
import { t } from "../utils/i18n";

const LOGO_MAX_HEIGHT = 26;
const LOGO_MAX_WIDTH = 200;

const imageStyle: CSSProperties = {
  objectFit: "contain",
  objectPosition: "left",
};

const styles = StyleSheet.create({
  container: {
    width: 470,
    borderRadius: radii[8],
    backgroundColor: invariantColors.white,
    borderWidth: 1,
    borderColor: colors.gray[100],
  },
  part: {
    padding: spacings[24],
  },
  label: {
    ...interFontStyle,
    fontSize: 10,
  },
  labelPartner: {
    color: colors.partner[500],
    fontWeight: "500",
  },
  mainInfo: {
    fontFamily: fonts.iban,
    fontSize: 12,
    color: colors.gray[900],
  },
  smallInfo: {
    fontFamily: fonts.iban,
    fontSize: 10,
    color: colors.gray[900],
  },
  addressInfo: {
    ...interFontStyle,
    fontSize: 12,
    color: colors.gray[900],
  },
  partnershipText: {
    ...interFontStyle,
    fontSize: 8,
    color: colors.gray[500],
  },
  defaultLogo: {
    height: LOGO_MAX_HEIGHT,
    width: 115,
  },
  swanLogo: {
    width: 26,
    height: 6,
  },
});

type Address = {
  name: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
};

type RIBv1Props = {
  version: "v1";
  partnerColor: string;
  partnerLogoUrl?: string;
  iban: string;
  bic: string;
  bankAddress: Address;
  accountHolderAddress: Address;
} & (
  | {
      accountCountry: "FRA";
      bank: string;
      agency: string;
      bankNumber: string;
      bankKey: string;
    }
  | {
      accountCountry: "DEU";
      bank: string;
      bankNumber: string;
    }
  | {
      accountCountry: "ESP";
      bank: string;
      agency: string;
      nationalCode: string;
      bankNumber: string;
    }
);

export type RIBProps = RIBv1Props;

export const RIB = (props: RIBProps) =>
  match(props)
    .with({ version: "v1" }, props => <RIBv1 {...props} />)
    .exhaustive();

const RIBv1 = (props: RIBProps) => {
  const {
    partnerColor,
    partnerLogoUrl,
    iban,
    bic,
    bank,
    bankNumber,
    bankAddress,
    accountHolderAddress,
  } = props;

  return (
    <WithPartnerAccentColor color={partnerColor}>
      <View style={styles.container}>
        <View style={styles.part}>
          <Box direction="row" alignItems="center">
            {isNotNullishOrEmpty(partnerLogoUrl) ? (
              <img
                src={partnerLogoUrl}
                width={LOGO_MAX_WIDTH}
                height={LOGO_MAX_HEIGHT}
                style={imageStyle}
              />
            ) : (
              <SwanLogo style={styles.defaultLogo} />
            )}

            <Fill minWidth={24} />

            <LakeHeading level={2} variant="h3" color={colors.gray[900]}>
              {t("rib.bankDetails")}
            </LakeHeading>
          </Box>

          <Space height={24} />

          <Box direction="row" alignItems="center">
            <RibValue type="mainInfo" color="partner" label={t("rib.iban")} value={iban} />
            <Space width={24} />
            <RibValue type="mainInfo" color="partner" label={t("rib.bic")} value={bic} />
          </Box>

          <Space height={8} />

          <Box direction="row" alignItems="center">
            <RibValue type="smallInfo" color="gray" label={t("rib.bank")} value={bank} />

            {match(props)
              .with({ agency: P.string }, ({ agency }) => (
                <>
                  <Space width={24} />
                  <RibValue type="smallInfo" color="gray" label={t("rib.agency")} value={agency} />
                </>
              ))
              .otherwise(() => null)}

            {match(props)
              .with({ nationalCode: P.string }, ({ nationalCode }) => (
                <>
                  <Space width={24} />

                  <RibValue
                    type="smallInfo"
                    color="gray"
                    label={t("rib.nationalCode")}
                    value={nationalCode}
                  />
                </>
              ))
              .otherwise(() => null)}

            <Space width={24} />
            <RibValue type="smallInfo" color="gray" label={t("rib.number")} value={bankNumber} />

            {match(props)
              .with({ bankKey: P.string }, ({ bankKey }) => (
                <>
                  <Space width={24} />
                  <RibValue type="smallInfo" color="gray" label={t("rib.key")} value={bankKey} />
                </>
              ))
              .otherwise(() => null)}
          </Box>
        </View>

        <Separator />

        <View style={styles.part}>
          <Box direction="row" alignItems="center">
            <RibValue
              type="addressInfo"
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

            <RibValue
              type="addressInfo"
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
};

type RibValueProps = {
  type: "mainInfo" | "smallInfo" | "addressInfo";
  color: "partner" | "gray";
  label: string;
  value: string | string[];
};

const ribValueStyle: Record<RibValueProps["type"], StyleProp<TextStyle>> = {
  mainInfo: styles.mainInfo,
  smallInfo: styles.smallInfo,
  addressInfo: styles.addressInfo,
};

const RibValue = ({ type, color, label, value }: RibValueProps) => {
  const lines = Array.isArray(value) ? value : [value];

  return (
    <View>
      <Text style={[styles.label, color === "partner" && styles.labelPartner]}>{label}</Text>
      <Space height={4} />

      {lines.map((line, index) => (
        <Text key={index} style={ribValueStyle[type]}>
          {line}
        </Text>
      ))}
    </View>
  );
};
