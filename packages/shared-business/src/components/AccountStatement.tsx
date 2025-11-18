import { Box } from "@swan-io/lake/src/components/Box";
import { Separator } from "@swan-io/lake/src/components/Separator";
import { Space } from "@swan-io/lake/src/components/Space";
import { SwanLogo } from "@swan-io/lake/src/components/SwanLogo";
import { colors, fonts, primaryFontStyle, spacings } from "@swan-io/lake/src/constants/design";
import { isNotNullish, isNotNullishOrEmpty } from "@swan-io/lake/src/utils/nullish";
import { CSSProperties } from "react";
import { StyleProp, StyleSheet, Text, TextProps, TextStyle, ViewStyle } from "react-native";
import { match } from "ts-pattern";
import { CountryCCA3, getCountryName } from "../constants/countries";
import { formatCurrencyIso, t } from "../utils/i18n";

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
    padding: 40,
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
  openingBalanceText: {
    ...getTextStyle("sans", 13),
    textAlign: "right",
  },
  textColumn: {
    paddingVertical: spacings[4],
    ...getTextStyle("sans", 10),
  },
  text: {
    ...getTextStyle("sans", 14),
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

export type TransactionType =
  | "Card"
  | "Check"
  | "Fees"
  | "InternationalDirectDebit"
  | "InternationalCreditTransfer"
  | "SepaCreditTransfer"
  | "SepaDirectDebit"
  | (string & {}); // every other string for already-translated type (happens when we copy the transactions from a generated CSV)

const translateTransaction = (transaction: TransactionType) => {
  return match(transaction)
    .with("Card", () => t("accountStatement.card"))
    .with("Check", () => t("accountStatement.check"))
    .with("Fees", () => t("accountStatement.fees"))
    .with("InternationalDirectDebit", "SepaDirectDebit", () => t("accountStatement.directDebit"))
    .with("InternationalCreditTransfer", "SepaCreditTransfer", () =>
      t("accountStatement.creditTransfer"),
    )
    .otherwise(() => transaction);
};

type AddressInfo = {
  street: string;
  city: string;
  country?: CountryCCA3;
};

type Amount = {
  value: string;
  currency: string;
};

export type Transaction = {
  id: string;
  label: string;
  date: string;
  type: TransactionType;
  credit?: Amount;
  debit?: Amount;
};

type AccountStatementV1Props = {
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

export const AccountStatementV1 = ({
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
  feesDebit,
  feesCredit,
  totalsCredit,
  totalsDebit,
  closingBalance,
}: AccountStatementV1Props) => {
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
        <Box direction="row" justifyContent="spaceBetween">
          <Box direction="column">
            <Text style={styles.sectionTitle}>{accountHolderName.toUpperCase()}</Text>

            <Text style={styles.text}>{accountHolderAddress.street}</Text>
            <Text style={styles.text}>{accountHolderAddress.city}</Text>
            {isNotNullish(accountHolderAddress.country) && (
              <Text style={styles.text}>{getCountryName(accountHolderAddress.country)}</Text>
            )}
          </Box>
          <Box direction="column" alignItems="end">
            <Text style={styles.sectionTitle}>{t("accountStatement.contactSupport")}</Text>
            <Text style={styles.text}>{"support.swan.io"}</Text>
          </Box>
        </Box>
        <Space height={24} />

        <Text style={styles.sectionTitle}>{t("accountStatement.iban")}</Text>
        <Text style={styles.text}>{iban}</Text>

        <Space height={12} />
        <Text style={styles.sectionTitle}>{t("accountStatement.bic")}</Text>
        <Text style={styles.text}>{bic}</Text>

        <Space height={48} />
        <Box direction="row" justifyContent="spaceBetween">
          <Box direction="column">
            <Text style={styles.sectionTitle}>
              {t("accountStatement.date", { openingDate, closingDate })}
            </Text>
          </Box>

          <Box direction="column">
            <Text style={styles.openingBalanceText}>{t("accountStatement.openingBalance")}</Text>
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
            {transactions.map(transaction => (
              <Box direction="row" key={transaction.id}>
                <Text style={[styles.textColumn, { width: "15%" }]}>{transaction.date}</Text>
                <Text style={[styles.textColumn, { width: "22%" }]}>
                  {translateTransaction(transaction.type)}
                </Text>
                <Text style={[styles.textColumn, { width: "33%" }]}>{transaction.label}</Text>
                <Text style={[styles.textColumn, { width: "15%", textAlign: "right" }]}>
                  {transaction.credit ? transaction.credit.value : ""}
                </Text>
                <Text style={[styles.textColumn, { width: "15%", textAlign: "right" }]}>
                  {transaction.debit ? transaction.debit.value : ""}
                </Text>
              </Box>
            ))}
          </Box>
        </>

        <Box direction="column">
          <Box direction="row" justifyContent="end">
            <Text style={styles.row}>{t("accountStatement.column.fees")}</Text>
            <Text style={styles.row}>{feesCredit.value}</Text>
            <Text style={styles.row}>{feesDebit.value}</Text>
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
            style={styles.closingBalanceRow}
            justifyContent="spaceBetween"
          >
            <Title text={t("accountStatement.closingBalance")} />

            <Title
              text={formatCurrencyIso(Number(closingBalance.value), closingBalance.currency)}
              style={styles.totalAmount}
              align="right"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export type AccountStatementProps = AccountStatementV1Props;

export const AccountStatement = (props: AccountStatementProps) =>
  match(props)
    .with({ version: "v1" }, props => <AccountStatementV1 {...props} />)
    .exhaustive();
