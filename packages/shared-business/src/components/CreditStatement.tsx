import { Box } from "@swan-io/lake/src/components/Box";
import { Separator } from "@swan-io/lake/src/components/Separator";
import { Space } from "@swan-io/lake/src/components/Space";
import { SwanLogo } from "@swan-io/lake/src/components/SwanLogo";
import {
  colors,
  fonts,
  invariantColors,
  primaryFontStyle,
  spacings,
} from "@swan-io/lake/src/constants/design";
import { isNotNullish, isNotNullishOrEmpty } from "@swan-io/lake/src/utils/nullish";
import { CSSProperties } from "react";
import { StyleProp, StyleSheet, Text, TextProps, TextStyle, ViewStyle } from "react-native";
import { match } from "ts-pattern";
import { CountryCCA3, getCountryName } from "../constants/countries";
import { formatCurrencySymbol, t } from "../utils/i18n";

const LOGO_MAX_HEIGHT = 24;
const LOGO_MAX_WIDTH = 150;

const getTextStyle = (type: "sans" | "mono", fontSize: number): TextStyle => ({
  ...(type === "mono" ? { fontFamily: fonts.iban } : primaryFontStyle),
  color: colors.gray[900],
  fontSize,
  lineHeight: fontSize * 1.25,
  fontWeight: "400",
});

const styles = StyleSheet.create({
  container: {
    width: 793,
    padding: 56,
    backgroundColor: invariantColors.white,
  },
  partnershipText: {
    ...getTextStyle("sans", 14),
    color: colors.gray[500],
  },
  pageTitle: {
    ...getTextStyle("sans", 20),
    color: colors.swan[500],
    fontWeight: "600",
  },
  sectionTitle: {
    ...getTextStyle("sans", 14),
    color: colors.swan[500],
    fontWeight: "500",
    lineHeight: 24,
  },
  totalAmount: {
    ...getTextStyle("sans", 20),
    lineHeight: 28,
    fontWeight: "600",
  },
  titleColumn: {
    ...getTextStyle("sans", 15),
    fontWeight: "500",
    paddingVertical: spacings[4],
    minWidth: spacings[96],
    lineHeight: 24,
  },
  openingBalanceText: {
    ...getTextStyle("sans", 14),
    textAlign: "right",
  },
  textColumn: {
    ...getTextStyle("sans", 14),
    color: "colors.gray[700]",
    // lineHeight: 20,
    paddingVertical: spacings[4],
  },
  text: {
    ...getTextStyle("sans", 14),
    color: colors.gray[700],
    lineHeight: 24,
  },
  row: {
    textAlign: "right",
    paddingVertical: spacings[4],
    fontWeight: "600",
    width: "20%",
  },
  closingBalanceRow: {
    ...getTextStyle("sans", 14),
    backgroundColor: colors.gray[50],
    width: "50%",
  },
  footer: {
    ...getTextStyle("sans", 10),
    color: colors.gray[500],
    fontWeight: "300",
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

const Title = ({
  text,
  align = "left",
  style,
}: {
  text: string;
  align?: "right" | "left";
  style?: TextProps["style"];
}) => (
  <Text
    style={[
      styles.titleColumn,
      style,
      {
        textAlign: align,
      },
    ]}
  >
    {text}
  </Text>
);

export type TransactionType = "SepaCreditTransfer" | "Fees" | "SepaDirectDebit" | "Card";

const translateTransaction = (transaction: TransactionType) => {
  return match(transaction)
    .with("Card", () => t("accountStatement.card"))
    .with("Fees", () => t("accountStatement.fees"))
    .with("SepaCreditTransfer", () => t("accountStatement.creditTransfer"))
    .with("SepaDirectDebit", () => t("accountStatement.directDebit"))
    .exhaustive();
};

type AddressInfo = {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postalCode: string;
  state?: string;
  country: CountryCCA3;
};

type Amount = {
  value: string;
  currency: string;
};

type Transaction = {
  transactionId: string;
  transactionLabel: string;
  transactionDate: string;
  transactionType: TransactionType;
  transactionSide: "Credit" | "Debit";
  transactionAmount: Amount;
};

type CreditStatementV1Props = {
  version: "v1";
  partnerLogoUrl?: string;
  style?: StyleProp<ViewStyle>;
  accountHolderType: "Individual" | "Company";
  accountHolderName: string;
  accountHolderAddress: AddressInfo;
  iban: string;
  bic: string;
  openingDate: string;
  closingDate: string;
  openingBalance: Amount;
  transactions: Transaction[];
  totalsCredit: Amount;
  totalsDebit: Amount;
  closingBalance: Amount;
  feesDebit: Amount;
  feesCredit: Amount;
};

const logoStyle: CSSProperties = {
  height: LOGO_MAX_HEIGHT,
  maxWidth: LOGO_MAX_WIDTH,
  objectFit: "contain",
  objectPosition: "left",
};

export const CreditStatementV1 = ({
  partnerLogoUrl,
  accountHolderType,
  accountHolderName,
  accountHolderAddress,
  iban,
  bic,
  openingDate,
  closingDate,
  openingBalance,
  transactions,
  totalsCredit,
  totalsDebit,
  closingBalance,
}: CreditStatementV1Props) => {
  return (
    <Box style={styles.container} direction="column" justifyContent="spaceBetween">
      <Box>
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
        <Text style={styles.pageTitle}>{t("creditStatement.titleDocument")}</Text>

        <Text style={styles.text}>
          {accountHolderType === "Company"
            ? t("accountStatement.titleDocument.companyDescription")
            : t("accountStatement.titleDocument.individualDescription")}
        </Text>

        <Space height={12} />
        <Box direction="column">
          <Text style={styles.sectionTitle}>{accountHolderName}</Text>

          <Text style={styles.text}>{accountHolderAddress.addressLine1}</Text>
          {isNotNullish(accountHolderAddress.addressLine2) && (
            <Text>{accountHolderAddress.addressLine2}</Text>
          )}
          <Text
            style={styles.text}
          >{`${accountHolderAddress.postalCode} ${accountHolderAddress.city}, ${getCountryName(accountHolderAddress.country)}`}</Text>
        </Box>
        <Space height={12} />

        <Text style={styles.sectionTitle}>{t("accountStatement.iban")}</Text>
        <Text style={styles.text}>{iban}</Text>

        <Space height={4} />
        <Text style={styles.sectionTitle}>{t("accountStatement.bic")}</Text>
        <Text style={styles.text}>{bic}</Text>

        <Space height={24} />
        <Box direction="row" justifyContent="spaceBetween">
          <Box direction="column" justifyContent="end">
            <Text style={styles.sectionTitle}>
              {t("accountStatement.date", { openingDate, closingDate })}
            </Text>
          </Box>

          <Box direction="column">
            <Text style={styles.openingBalanceText}>{t("accountStatement.openingBalance")}</Text>
            <Text style={styles.totalAmount}>
              {formatCurrencySymbol(Number(openingBalance.value), openingBalance.currency)}
            </Text>
          </Box>
        </Box>
        <Space height={24} />

        <>
          <Box direction="row">
            <Text style={[styles.titleColumn, { width: "15%" }]}>
              {t("accountStatement.column.date")}
            </Text>
            <Text style={[styles.titleColumn, { width: "22%" }]}>
              {t("accountStatement.column.type")}
            </Text>
            <Text style={[styles.titleColumn, { width: "33%" }]}>
              {t("accountStatement.column.description")}
            </Text>
            <Text style={[styles.titleColumn, { width: "15%", textAlign: "right" }]}>
              {t("creditStatement.column.credit")}
            </Text>
            <Text style={[styles.titleColumn, { width: "15%", textAlign: "right" }]}>
              {t("creditStatement.column.debit")}
            </Text>
          </Box>
          <Box direction="column">
            {transactions.map(
              ({
                transactionAmount,
                transactionDate,
                transactionLabel,
                transactionSide,
                transactionType,
                transactionId,
              }) => (
                <Box direction="row" key={transactionId}>
                  <Text style={[styles.textColumn, { width: "15%" }]}>{transactionDate}</Text>
                  <Text style={[styles.textColumn, { width: "22%" }]}>
                    {translateTransaction(transactionType)}
                  </Text>
                  <Text style={[styles.textColumn, { width: "33%" }]}>{transactionLabel}</Text>
                  <Text
                    style={[
                      styles.textColumn,
                      { width: "15%", textAlign: "right", fontWeight: "600" },
                    ]}
                  >
                    {transactionSide === "Credit" ? transactionAmount.value : ""}
                  </Text>
                  <Text
                    style={[
                      styles.textColumn,
                      { width: "15%", textAlign: "right", fontWeight: "600" },
                    ]}
                  >
                    {transactionSide === "Debit" ? transactionAmount.value : ""}
                  </Text>
                </Box>
              ),
            )}
          </Box>
        </>

        <Space height={24} />
        <Box direction="column">
          <Box direction="row" justifyContent="end">
            <Text style={styles.row}>{t("accountStatement.column.totals")}</Text>
            <Text style={[styles.row, { width: "15%" }]}>{totalsCredit.value}</Text>
            <Text style={[styles.row, { width: "15%" }]}>{totalsDebit.value}</Text>
          </Box>
        </Box>
        <Space height={12} />

        <Box direction="row" justifyContent="end">
          <Box
            direction="row"
            justifyContent="spaceBetween"
            alignItems="center"
            style={{ width: "50%" }}
          >
            <Title
              align="right"
              text={t("accountStatement.closingBalance")}
              style={{ width: "40%" }}
            />

            <Title
              text={formatCurrencySymbol(Number(closingBalance.value), closingBalance.currency)}
              style={{
                width: "60%",
                ...getTextStyle("sans", 20),
                fontWeight: "600",
              }}
              align="right"
            />
          </Box>
        </Box>
      </Box>

      <Box>
        <Separator space={24} />
        <Text style={styles.footer}>{t("transactionStatement.footer")}</Text>
      </Box>
    </Box>
  );
};

export type CreditStatementProps = CreditStatementV1Props;

export const CreditStatement = (props: CreditStatementProps) =>
  match(props)
    .with({ version: "v1" }, props => <CreditStatementV1 {...props} />)
    .exhaustive();
