import { Box } from "@swan-io/lake/src/components/Box";
import { Space } from "@swan-io/lake/src/components/Space";
import { colors, spacings } from "@swan-io/lake/src/constants/design";
import { isNotEmpty, isNotNullish } from "@swan-io/lake/src/utils/nullish";
import { StyleProp, StyleSheet, Text, TextProps, ViewStyle } from "react-native";
import { match } from "ts-pattern";
import { CountryCCA3 } from "../constants/countries";
import { SupportedLanguage, useTranslation } from "../utils/i18n";
import { getTextStyle } from "../utils/style";

const styles = StyleSheet.create({
  container: {
    width: 793,
    padding: 10,
    fontFamily:
      "Inter, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
  },
  firstSectionTitle: {
    ...getTextStyle("sans", 20),
    color: colors.swan[500],
    fontWeight: "500",
    textTransform: "uppercase",
    marginTop: "37px",
  },
  sectionTitle: {
    ...getTextStyle("sans", 20),
    color: colors.swan[500],
    fontWeight: "500",
    textTransform: "uppercase",
  },
  dateTitle: {
    ...getTextStyle("sans", 12),
    color: colors.swan[500],
  },
  totalAmount: {
    ...getTextStyle("sans", 20),
    fontWeight: "500",
    textAlign: "right",
  },
  pageTitle: {
    ...getTextStyle("sans", 20),
    fontWeight: "500",
    color: "#26232F",
  },
  titleColumn: {
    ...getTextStyle("sans", 12),
    fontWeight: "600",
    paddingVertical: spacings[4],
    minWidth: spacings[96],
  },
  openingBalanceText: {
    ...getTextStyle("sans", 12),
    textAlign: "right",
  },
  thead: {
    marginBottom: 12,
    backgroundColor: colors.gray[50],
  },
  textColumn: {
    paddingVertical: spacings[4],
    ...getTextStyle("sans", 11),
    lineHeight: 16,
  },
  text: {
    ...getTextStyle("sans", 12),
    color: colors.swan[300],
  },
  textBold: {
    ...getTextStyle("sans", 12),
    fontWeight: "500",
  },
  pageSubTitle: {
    ...getTextStyle("sans", 12),
    color: "#454348",
  },
  row: {
    textAlign: "right",
    paddingVertical: spacings[4],
    fontWeight: "500",
    width: "15%",
  },
  closingBalanceRow: {
    ...getTextStyle("sans", 12),
    backgroundColor: colors.gray[50],
    width: "50%",
  },
  closingBalanceRowText: {
    paddingLeft: "20%",
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
  | "Seizure"
  | (string & {}); // every other string for already-translated type (happens when we copy the transactions from a generated CSV)

const translateTransaction = (transaction: TransactionType, t: ReturnType<typeof useTranslation>) => {
  return match(transaction)
    .with("Card", () => t("accountStatement.card"))
    .with("Check", () => t("accountStatement.check"))
    .with("Fees", () => t("accountStatement.fees"))
    .with("InternationalDirectDebit", "SepaDirectDebit", () => t("accountStatement.directDebit"))
    .with("SepaCreditTransfer", "Seizure", () => t("accountStatement.creditTransfer"))
    .with("InternationalCreditTransfer", () => t("accountStatement.internationalCreditTransfer"))
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
  style?: StyleProp<ViewStyle>;
  accountHolderName: string;
  accountHolderAddress: AddressInfo;
  accountHolderType: "Individual" | "Company";
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
  hideHeader?: boolean;
  hideFooter?: boolean;
  language?: SupportedLanguage;
};

export const AccountStatementV1 = ({
  style,
  accountHolderName,
  accountHolderAddress,
  accountHolderType,
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
  language,
}: AccountStatementV1Props) => {
  const t = useTranslation(language);
  return (
    <Box style={style}>
      <Box style={styles.container} direction="column" justifyContent="spaceBetween">
        <Box>
          <Box direction="row" justifyContent="spaceBetween">
            <Box direction="column">
              <Text style={styles.sectionTitle}>{accountHolderName.toUpperCase()}</Text>
              <Text style={styles.text}>{accountHolderAddress.street}</Text>
              <Text style={styles.text}>
                {accountHolderAddress.city},{" "}
                {isNotNullish(accountHolderAddress.country) && accountHolderAddress.country}
              </Text>

              <Space height={24} />
              {isNotEmpty(iban) && (
                <Text style={styles.textBold}>
                  {t("accountStatement.iban")} <Text style={styles.text}>{iban}</Text>
                </Text>
              )}
              <Space height={4} />
              {isNotEmpty(bic) && (
                <Text style={styles.textBold}>
                  {t("accountStatement.bic")}
                  <Text style={styles.text}>{bic}</Text>
                </Text>
              )}
            </Box>
            <Box direction="column" alignItems="end">
              <Text style={styles.pageTitle}>{t("accountStatement.titleDocument")}</Text>
              <Text style={styles.pageSubTitle}>
                {accountHolderType === "Company"
                  ? t("accountStatement.titleDocument.companyDescription")
                  : t("accountStatement.titleDocument.individualDescription")}
              </Text>
              <Space height={24} />

              <Text style={styles.textBold}>{t("accountStatement.contactSupport")}</Text>
              <Text style={styles.text}>{"support.swan.io"}</Text>
            </Box>
          </Box>

          <Space height={48} />
          <Box direction="row" justifyContent="spaceBetween" alignItems="center">
            <Box direction="column">
              <Text style={styles.dateTitle}>
                {t("accountStatement.date", { openingDate, closingDate })}
              </Text>
            </Box>

            <Box direction="column">
              <Text style={styles.openingBalanceText}>{t("accountStatement.openingBalance")}</Text>
              <Text style={styles.totalAmount}>{openingBalance.value}</Text>
            </Box>
          </Box>
          <Space height={24} />

          <>
            <Box direction="row" style={styles.thead}>
              <Text style={[styles.titleColumn, { width: "13%" }]}>
                {t("accountStatement.column.date")}
              </Text>
              <Text style={[styles.titleColumn, { width: "17%" }]}>
                {t("accountStatement.column.type")}
              </Text>
              <Text style={[styles.titleColumn, { width: "40%" }]}>
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
                  <Text style={[styles.textColumn, { width: "13%" }]}>{transaction.date}</Text>
                  <Text style={[styles.textColumn, { width: "17%" }]}>
                    {translateTransaction(transaction.type, t)}
                  </Text>
                  <Text style={[styles.textColumn, { width: "40%" }]}>{transaction.label}</Text>
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

          <Space height={12} />
          <Box direction="column">
            <Box direction="row" justifyContent="end">
              <Text style={[styles.row, styles.textBold]}>{t("accountStatement.column.fees")}</Text>
              <Text style={[styles.row, styles.textBold]}>{feesCredit.value}</Text>
              <Text style={[styles.row, styles.textBold]}>{feesDebit.value}</Text>
            </Box>

            <Box direction="row" justifyContent="end">
              <Text style={[styles.row, styles.textBold]}>
                {t("accountStatement.column.totals")}
              </Text>
              <Text style={[styles.row, styles.textBold]}>{totalsCredit.value}</Text>
              <Text style={[styles.row, styles.textBold]}>{totalsDebit.value}</Text>
            </Box>
          </Box>
          <Space height={12} />

          <Box direction="row" justifyContent="end">
            <Box
              direction="row"
              alignItems="center"
              style={styles.closingBalanceRow}
              justifyContent="spaceBetween"
            >
              <Title
                style={styles.closingBalanceRowText}
                text={t("accountStatement.closingBalance")}
              />

              <Title text={closingBalance.value} style={styles.totalAmount} align="right" />
            </Box>
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
