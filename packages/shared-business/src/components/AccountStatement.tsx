import { Box } from "@swan-io/lake/src/components/Box";
import { Space } from "@swan-io/lake/src/components/Space";
import { colors, spacings } from "@swan-io/lake/src/constants/design";
import { isNotNullish } from "@swan-io/lake/src/utils/nullish";
import { StyleProp, StyleSheet, Text, TextProps, ViewStyle } from "react-native";
import { match } from "ts-pattern";
import { CountryCCA3, getCountryName } from "../constants/countries";
import { t } from "../utils/i18n";
import { getTextStyle } from "../utils/style";

const styles = StyleSheet.create({
  container: {
    width: 793,
    padding: 10,
  },
  firstSectionTitle: {
    ...getTextStyle("sans", 12),
    color: colors.swan[500],
    fontWeight: "500",
    textTransform: "uppercase",
    paddingBottom: spacings[4],
    marginTop: "30%",
  },
  sectionTitle: {
    ...getTextStyle("sans", 12),
    color: colors.swan[500],
    fontWeight: "500",
    textTransform: "uppercase",
    paddingBottom: spacings[4],
  },
  dateTitle: {
    ...getTextStyle("sans", 10),
    color: colors.swan[500],
    paddingBottom: spacings[4],
  },
  totalAmount: {
    ...getTextStyle("sans", 16),
    fontWeight: "500",
    textAlign: "right",
  },
  pageTitle: {
    ...getTextStyle("sans", 16),
    fontWeight: "500",
    color: "#26232F",
  },
  titleColumn: {
    ...getTextStyle("sans", 10),
    fontWeight: "500",
    paddingVertical: spacings[4],
    minWidth: spacings[96],
  },
  openingBalanceText: {
    ...getTextStyle("sans", 10),
    textAlign: "right",
  },
  textColumn: {
    paddingVertical: spacings[4],
    ...getTextStyle("sans", 10),
  },
  text: {
    ...getTextStyle("sans", 10),
  },
  pageSubTitle: {
    ...getTextStyle("sans", 10),
    color: "#454348",
    paddingBottom: spacings[12],
  },
  row: {
    textAlign: "right",
    paddingVertical: spacings[4],
    fontWeight: "500",
    width: "15%",
  },
  closingBalanceRow: {
    ...getTextStyle("sans", 10),
    backgroundColor: colors.gray[50],
    width: "50%",
  },
  closingBalanceRowText: {
    paddingLeft: "20%"
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
}: AccountStatementV1Props) => {
  return (
    <Box style={style}>
      <Box style={styles.container} direction="column" justifyContent="spaceBetween">
        <Box>
          <Box direction="row" justifyContent="spaceBetween">
            <Text style={styles.pageTitle}>{t("accountStatement.titleDocument")}</Text>
          </Box>
          <Box direction="row" justifyContent="spaceBetween">
            <Box direction="column">
              <Text style={styles.pageSubTitle}>
                {accountHolderType === "Company"
                  ? t("accountStatement.titleDocument.companyDescription")
                  : t("accountStatement.titleDocument.individualDescription")}
              </Text>
              <Text style={styles.sectionTitle}>{accountHolderName.toUpperCase()}</Text>

              <Text style={styles.text}>{accountHolderAddress.street}</Text>
              <Text style={styles.text}>{accountHolderAddress.city}, {isNotNullish(accountHolderAddress.country) && (accountHolderAddress.country)}
              </Text>
            </Box>
            <Box direction="column" alignItems="end">
              <Text style={styles.firstSectionTitle}>{t("accountStatement.contactSupport")}</Text>
              <Text style={styles.text}>{"support.swan.io"}</Text>
            </Box>
          </Box>
          <Space height={24} />
          {isNotNullish(iban) && (
            <>
              <Text style={styles.sectionTitle}>{t("accountStatement.iban")}</Text>
              <Text style={styles.text}>{iban}</Text>
            </>
          )}
          <Space height={12} />
          {isNotNullish(bic) && (
            <>
              <Text style={styles.sectionTitle}>{t("accountStatement.bic")}</Text>
              <Text style={styles.text}>{bic}</Text>
            </>
          )}
          <Space height={48} />
          <Box direction="row" justifyContent="spaceBetween">
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

          <Space height={20} />
          <Box direction="column">
            <Box direction="row" justifyContent="end">
              <Text style={styles.row}>{t("accountStatement.column.fees")}</Text>
              <Text style={styles.row}>{feesCredit.value}</Text>
              <Text style={styles.row}>{feesDebit.value}</Text>
            </Box>

            <Box direction="row" justifyContent="end">
              <Text style={styles.row}>{t("accountStatement.column.total")}</Text>
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
              <Title style={styles.closingBalanceRowText} text={t("accountStatement.closingBalance")} />

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
