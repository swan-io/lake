import { Box } from "@swan-io/lake/src/components/Box";
import { Fill } from "@swan-io/lake/src/components/Fill";
import { Separator } from "@swan-io/lake/src/components/Separator";
import { Space } from "@swan-io/lake/src/components/Space";
import { Stack } from "@swan-io/lake/src/components/Stack";
import { SwanLogo } from "@swan-io/lake/src/components/SwanLogo";
import { WithPartnerAccentColor } from "@swan-io/lake/src/components/WithPartnerAccentColor";
import { colors, fonts, interFontStyle } from "@swan-io/lake/src/constants/design";
import { isNotNullishOrEmpty } from "@swan-io/lake/src/utils/nullish";
import { CSSProperties } from "react";
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { match } from "ts-pattern";

const LOGO_MAX_HEIGHT = 24;
const LOGO_MAX_WIDTH = 150;

const getTextStyle = (type: "sans" | "mono", fontSize: number): TextStyle => ({
  ...(type === "mono" ? { fontFamily: fonts.iban } : interFontStyle),
  color: colors.gray[900],
  fontSize,
  lineHeight: fontSize * 1.25,
  fontWeight: "400",
});

const styles = StyleSheet.create({
  container: {
    height: 842,
    width: 595,
    padding: 42,
  },
  partnershipText: {
    ...getTextStyle("sans", 12),
    color: colors.gray[500],
  },
  pageTitle: {
    ...getTextStyle("sans", 15),
    color: colors.swan[500],
    fontWeight: "500",
  },
  sectionTitle: {
    ...getTextStyle("sans", 12),
    color: colors.swan[500],
    fontWeight: "600",
  },
  entryName: {
    ...getTextStyle("sans", 10),
    color: colors.gray[700],
  },
  entryValue: {
    ...getTextStyle("sans", 10),
    color: colors.swan[500],
    fontWeight: "600",
  },
  defaultLogo: {
    height: LOGO_MAX_HEIGHT,
    width: (45 / 10) * LOGO_MAX_HEIGHT,
  },
  swanLogo: {
    height: 8,
    width: (45 / 10) * 8,
  },
});

const SectionEntry = ({ name, value }: { name: string; value: string }) => (
  <Box direction="row" alignItems="center">
    <Text style={styles.entryName}>{name}</Text>
    <Fill minWidth={8} />
    <Text style={styles.entryValue}>{value}</Text>
  </Box>
);

type TransactionStatementV1Props = {
  version: "v1";
  partnerColor: string;
  partnerLogoUrl?: string;
  style?: StyleProp<ViewStyle>;
};

const logoStyle: CSSProperties = {
  height: LOGO_MAX_HEIGHT,
  maxWidth: LOGO_MAX_WIDTH,
  objectFit: "contain",
  objectPosition: "left",
};

export const TransactionStatementV1 = ({
  partnerColor,
  partnerLogoUrl,
  style,
}: TransactionStatementV1Props) => {
  return (
    <WithPartnerAccentColor color={partnerColor}>
      <View style={[styles.container, style]}>
        <Box direction="row" alignItems="center">
          {isNotNullishOrEmpty(partnerLogoUrl) ? (
            <img src={partnerLogoUrl} style={logoStyle} />
          ) : (
            <SwanLogo style={styles.defaultLogo} />
          )}

          <Separator horizontal={true} space={8} />
          <Text style={styles.partnershipText}>{"In partnership with"}</Text>
          <Space width={4} />
          <SwanLogo color={colors.gray[900]} style={styles.swanLogo} />
        </Box>

        <Space height={24} />
        <Text style={styles.pageTitle}>Transaction confirmation</Text>
        <Space height={24} />
        <Text style={styles.sectionTitle}>Information</Text>
        <Space height={8} />

        <Stack space={8}>
          <SectionEntry name="Execution date" value="03/28/2024" />
          <SectionEntry name="Type" value="International credit transfer sent" />
          <SectionEntry name="Amount" value="12.00 EUR" />
          <SectionEntry name="Target transfer amount" value="10.25 GBP" />
          <SectionEntry name="Exchange rate" value="1 EUR = 0,8548 GBP" />
          <SectionEntry name="Fees" value="1 EUR" />
          <SectionEntry name="Label" value="Transfer to Alexandra ERZINGOVIVOVA" />
          <SectionEntry name="Reference" value="12345-EIHJDKB-2849986398698-HLKHSFT" />
        </Stack>

        <Space height={24} />
        <Text style={styles.sectionTitle}>Debtor information</Text>
        <Space height={8} />

        <Stack space={8}>
          <SectionEntry name="Debtor’s name" value="Green co" />
          <SectionEntry name="Debtor's account number" value="FR7699999001001477659048183" />
          <SectionEntry name="Debtor’s bank name" value="Swan" />
          <SectionEntry name="Debtor's bank identifier" value="SWNBFR22" />
        </Stack>

        <Space height={24} />
        <Text style={styles.sectionTitle}>Creditor information</Text>
        <Space height={8} />

        <Stack space={8}>
          <SectionEntry name="Creditor’s name" value="Yellow corp" />
          <SectionEntry name="Creditor's account number" value="FR7699999001001899407676183" />
          <SectionEntry name="Creditor’s bank name" value="Acme Bank" />
          <SectionEntry name="Creditor's bank identifier" value="GNCFFRCQXXX" />
        </Stack>

        <Fill minHeight={8} />

        <Text
          style={{
            ...getTextStyle("sans", 8),
            color: colors.gray[700],
          }}
        >
          Generated on: 08/12/2024
        </Text>

        <Space height={8} />

        <Text
          style={{
            ...getTextStyle("sans", 8),
            color: colors.gray[700],
          }}
        >
          This document is confirmation of your transaction request. It doesn't constitute proof of
          transaction execution. Your transaction will be executed after passing a mandatory
          verification process.
        </Text>

        <Separator space={24} />

        <Text
          style={{
            ...getTextStyle("sans", 8),
            color: colors.gray[500],
            fontWeight: "300",
          }}
        >
          {`SWAN is a simplified joint-stock company (SAS) registered with the Bobigny Trade and Companies Register under number 853 827 103, with a capital of 16,999.66 Euros, VAT number FR90853827103 and whose registered office is located at 95 Avenue du Président Wilson, 93100 Montreuil, FRANCE.\nIn its capacity as an Electronic Money institution offering payment services under French law approved by the ACPR, SWAN is registered with the latter under number 17328.`}
        </Text>
      </View>
    </WithPartnerAccentColor>
  );
};

export type TransactionStatementProps = TransactionStatementV1Props;

export const TransactionStatement = (props: TransactionStatementProps) =>
  match(props)
    .with({ version: "v1" }, props => <TransactionStatementV1 {...props} />)
    .exhaustive();
