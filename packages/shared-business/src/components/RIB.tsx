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
import { StyleSheet, Text, View } from "react-native";
import { match } from "ts-pattern";
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

type RibValueProps = {
  color: "partner" | "gray";
  label: string;
  type: "mainInfo" | "smallInfo" | "addressInfo";
  value: string | string[];
};

const typeStyles = {
  addressInfo: styles.addressInfo,
  mainInfo: styles.mainInfo,
  smallInfo: styles.smallInfo,
};

const RibValue = ({ color, label, type, value }: RibValueProps) => (
  <View>
    <Text style={[styles.label, color === "partner" && styles.labelPartner]}>{label}</Text>
    <Space height={4} />

    {(typeof value === "string" ? [value] : value).map((line, index) => (
      <Text key={index} style={typeStyles[type]}>
        {line}
      </Text>
    ))}
  </View>
);

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
);

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
      <View style={styles.part}>
        <Box direction="row" alignItems="center">
          {isNotNullishOrEmpty(partnerLogoUrl) ? (
            <img
              height={LOGO_MAX_HEIGHT}
              src={partnerLogoUrl}
              style={imageStyle}
              width={LOGO_MAX_WIDTH}
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
          {match(props)
            .with({ accountCountry: "FRA" }, ({ agency, bankKey, bankNumber }) => (
              <>
                <RibValue type="smallInfo" color="gray" label={t("rib.bank")} value={bank} />
                <Space width={24} />
                <RibValue type="smallInfo" color="gray" label={t("rib.agency")} value={agency} />
                <Space width={24} />

                <RibValue
                  type="smallInfo"
                  color="gray"
                  label={t("rib.number")}
                  value={bankNumber}
                />

                <Space width={24} />
                <RibValue type="smallInfo" color="gray" label={t("rib.key")} value={bankKey} />
              </>
            ))
            .with({ accountCountry: "DEU" }, ({ accountNumber }) => (
              <>
                <RibValue type="smallInfo" color="gray" label={t("rib.bank")} value={bank} />
                <Space width={24} />

                <RibValue
                  type="smallInfo"
                  color="gray"
                  label={t("rib.accountNumber")}
                  value={accountNumber}
                />
              </>
            ))
            .with({ accountCountry: "ESP" }, ({ agency, bankNumber, nationalCode }) => (
              <>
                <RibValue type="smallInfo" color="gray" label={t("rib.bank")} value={bank} />
                <Space width={24} />
                <RibValue type="smallInfo" color="gray" label={t("rib.agency")} value={agency} />
                <Space width={24} />

                <RibValue
                  type="smallInfo"
                  color="gray"
                  label={t("rib.nationalCode")}
                  value={nationalCode}
                />

                <Space width={24} />

                <RibValue
                  type="smallInfo"
                  color="gray"
                  label={t("rib.number")}
                  value={bankNumber}
                />
              </>
            ))
            .exhaustive()}
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

export type RIBProps = RIBv1Props;

export const RIB = (props: RIBProps) =>
  match(props)
    .with({ version: "v1" }, props => <RIBv1 {...props} />)
    .exhaustive();
