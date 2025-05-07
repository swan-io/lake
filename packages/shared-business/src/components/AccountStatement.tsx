import { Box } from "@swan-io/lake/src/components/Box";
import { Separator } from "@swan-io/lake/src/components/Separator";
import { Space } from "@swan-io/lake/src/components/Space";
import { SwanLogo } from "@swan-io/lake/src/components/SwanLogo";
import { colors, fonts, interFontStyle, spacings } from "@swan-io/lake/src/constants/design";
import { isNotNullish, isNotNullishOrEmpty } from "@swan-io/lake/src/utils/nullish";
import { CSSProperties } from "react";
import { StyleProp, StyleSheet, Text, TextProps, TextStyle, ViewStyle } from "react-native";
import { CountryCCA3, getCountryName } from "../constants/countries";
import { formatCurrencyIso, t } from "../utils/i18n";

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
    height: 1050,
    width: 793,
    padding: 56,
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
    fontWeight: "600",
  },
  totalAmount: {
    ...getTextStyle("sans", 20),
    fontWeight: "600",
  },
  titleColumn: {
    ...getTextStyle("sans", 14),
    fontWeight: "600",
    paddingVertical: spacings[4],
    minWidth: spacings[96],
  },
  textColumn: {
    paddingVertical: spacings[8],
    ...getTextStyle("sans", 13),
  },
  row: {
    textAlign: "right",
    paddingVertical: spacings[4],
    fontWeight: "600",
    width: "20%",
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

export type TransactionType =
  | "SepaCreditTransferIn"
  | "SepaCreditTransferOut"
  | "SepaInstantCreditTransferIn"
  | "SepaInstantCreditTransferOut"
  | "InternalCreditTransferIn"
  | "InternalCreditTransferOut"
  | "InternationalCreditTransferIn"
  | "InternationalCreditTransferOut"
  | "InternalCreditTransferOutReturn"
  | "InternalCreditTransferOutRecall"
  | "InternalCreditTransferInReturn"
  | "InternalCreditTransferInRecall"
  | "SepaCreditTransferOutReturn"
  | "SepaInstantCreditTransferOutRecall"
  | "SepaInstantCreditTransferInRecall"
  | "SepaCreditTransferOutRecall"
  | "SepaCreditTransferInReturn"
  | "SepaCreditTransferInRecall"
  | "FeesOut"
  | "FeesIn"
  | "SepaDirectDebitIn"
  | "SepaDirectDebitInReturn"
  | "SepaDirectDebitInReversal"
  | "SepaDirectDebitOut"
  | "SepaDirectDebitOutReturn"
  | "SepaDirectDebitOutReversal"
  | "CardOutAuthorization"
  | "CardOutDebit"
  | "CardOutDebitReversal"
  | "CardOutCredit"
  | "CardOutCreditReversal"
  | "InternalDirectDebitIn"
  | "InternalDirectDebitInReturn"
  | "InternalDirectDebitOut"
  | "InternalDirectDebitOutReturn"
  | "CheckIn"
  | "CheckInReturn"
  | "InternationalCreditTransferInReturn"
  | "InternationalCreditTransferOutReturn"
  | "CardInCredit"
  | "CardInChargeback"
  | "CardInChargebackReversal";

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
  transactionLabel: string;
  transactionDate: string;
  transactionType: TransactionType;
  transactionSide: "Credit" | "Debit";
  transactionAmount: Amount;
};

type Props = {
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
  fees: Amount;
  totalsCredit: Amount;
  totalsDebit: Amount;
  closingBalance: Amount;
};

const logoStyle: CSSProperties = {
  height: LOGO_MAX_HEIGHT,
  maxWidth: LOGO_MAX_WIDTH,
  objectFit: "contain",
  objectPosition: "left",
};

export const AccountStatement = ({
  partnerLogoUrl,
  style,
  accountHolderType,
  accountHolderName,
  accountHolderAddress,
  iban,
  bic,
  openingDate,
  closingDate,
  openingBalance,
  transactions,
  fees,
  totalsCredit,
  totalsDebit,
  closingBalance,
}: Props) => {
  return (
    <Box style={[styles.container, style]} direction="column" justifyContent="spaceBetween">
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

          <Box>
            <Text style={{ ...getTextStyle("sans", 20), fontWeight: "600" }}>Page 1/1</Text>
          </Box>
        </Box>
        <Space height={24} />
        <Text style={styles.pageTitle}>{t("accountStatement.titleDocument")}</Text>
        <Space height={8} />

        <Text>
          {accountHolderType === "Company"
            ? t("accountStatement.titleDocument.companyDescription")
            : t("accountStatement.titleDocument.individualDescription")}
        </Text>

        <Space height={24} />
        <Box direction="row" justifyContent="spaceBetween">
          <Box direction="column">
            <Text style={styles.sectionTitle}>{accountHolderName.toUpperCase()}</Text>

            <Text>{accountHolderAddress.addressLine1}</Text>
            {isNotNullish(accountHolderAddress.addressLine2) && (
              <Text>{accountHolderAddress.addressLine2}</Text>
            )}
            <Text>{`${accountHolderAddress.postalCode} ${accountHolderAddress.city}`}</Text>
            <Text>{getCountryName(accountHolderAddress.country)}</Text>
          </Box>
          <Box direction="column" alignItems="end">
            <Text style={styles.sectionTitle}>{t("accountStatement.contactSupport")}</Text>
            <Text>{"support@swan.io"}</Text>
          </Box>
        </Box>
        <Space height={24} />

        <Text style={styles.sectionTitle}>{t("accountStatement.iban")}</Text>
        <Text>{iban}</Text>

        <Space height={12} />
        <Text style={styles.sectionTitle}>{t("accountStatement.bic")}</Text>
        <Text>{bic}</Text>

        <Space height={48} />
        <Box direction="row" justifyContent="spaceBetween">
          <Box direction="column">
            <Text style={styles.sectionTitle}>
              {t("accountStatement.date", { openingDate, closingDate })}
            </Text>
          </Box>

          <Box direction="column">
            <Text style={{ textAlign: "right" }}>{t("accountStatement.openingBalance")}</Text>
            <Text style={styles.totalAmount}>
              {formatCurrencyIso(Number(openingBalance.value), openingBalance.currency)}
            </Text>
          </Box>
        </Box>
        <Space height={24} />

        <>
          <Box direction="row" style={{ backgroundColor: colors.gray[50] }}>
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
              {t("accountStatement.column.credit")}
            </Text>
            <Text style={[styles.titleColumn, { width: "15%", textAlign: "right" }]}>
              {t("accountStatement.column.debit")}
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
              }) => (
                <Box direction="row">
                  <Text style={[styles.textColumn, { width: "15%" }]}>{transactionDate}</Text>
                  <Text style={[styles.textColumn, { width: "22%" }]}>{transactionType}</Text>
                  <Text style={[styles.textColumn, { width: "33%" }]}>{transactionLabel}</Text>
                  <Text style={[styles.textColumn, { width: "15%", textAlign: "right" }]}>
                    {transactionSide === "Credit" ? transactionAmount.value : ""}
                  </Text>
                  <Text style={[styles.textColumn, { width: "15%", textAlign: "right" }]}>
                    {transactionSide === "Debit" ? transactionAmount.value : ""}
                  </Text>
                </Box>
              ),
            )}
          </Box>
        </>

        <Box direction="column">
          <Box direction="row" justifyContent="end">
            <Text style={styles.row}>{t("accountStatement.column.fees")}</Text>
            <Text style={styles.row}>{fees.value}</Text>
            <Text style={styles.row}>{fees.value}</Text>
          </Box>

          <Box direction="row" justifyContent="end">
            <Text style={styles.row}>{t("accountStatement.column.totals")}</Text>
            <Text style={styles.row}>{totalsCredit.value}</Text>
            <Text style={styles.row}>{totalsDebit.value}</Text>
          </Box>
        </Box>

        <Box direction="row" justifyContent="end">
          <Box
            direction="row"
            alignItems="center"
            style={{ backgroundColor: colors.gray[50], width: "50%" }}
            justifyContent="spaceBetween"
          >
            <Title
              text={t("accountStatement.closingBalance")}
              style={{
                paddingHorizontal: spacings[8],
              }}
            />

            <Title
              text={formatCurrencyIso(Number(closingBalance.value), closingBalance.currency)}
              style={styles.totalAmount}
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

// export type AccountStatementProps = Props;

// export const TransactionStatement = (props: AccountStatementProps) =>
//   match(props)
//     .with({ version: "v1" }, props => <AccountStatement {...props} />)
//     .exhaustive();
