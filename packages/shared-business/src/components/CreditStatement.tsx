import { Box } from "@swan-io/lake/src/components/Box";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { Separator } from "@swan-io/lake/src/components/Separator";
import { Space } from "@swan-io/lake/src/components/Space";
import { SwanLogo } from "@swan-io/lake/src/components/SwanLogo";
import { colors, invariantColors, spacings } from "@swan-io/lake/src/constants/design";
import { isNotNullish, isNotNullishOrEmpty } from "@swan-io/lake/src/utils/nullish";
import dayjs from "dayjs";
import { printFormat } from "iban";
import { CSSProperties } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { match } from "ts-pattern";
import { CountryCCA3, getCountryName } from "../constants/countries";
import { formatCurrencySymbol, formatNestedMessage, locale, t } from "../utils/i18n";

const LOGO_MAX_HEIGHT = 24;
const LOGO_MAX_WIDTH = 150;

const styles = StyleSheet.create({
  container: {
    width: 793,
    padding: 56,
    backgroundColor: invariantColors.white,
  },
  address: {
    fontSize: 13,
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 14,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "400",
  },
  closingBalanceLabel: {
    fontSize: 15,
    fontWeight: "500",
  },
  closingBalanceAmount: {
    fontSize: 15,
    fontWeight: "400",
  },
  pageTitle: {
    fontSize: 20,
    color: colors.swan[500],
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 18,
    color: colors.swan[500],
    fontWeight: "600",
    lineHeight: 24,
  },
  titleColumn: {
    fontSize: 14,
    fontWeight: "600",
    paddingVertical: spacings[4],
    minWidth: spacings[96],
    lineHeight: 24,
  },
  text: {
    fontSize: 13,
    lineHeight: 24,
    textAlign: "right",
  },
  row: {
    textAlign: "right",
    paddingVertical: spacings[4],
    fontWeight: "600",
    width: "20%",
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
  rightColumnContent: { width: "15%", textAlign: "right", fontWeight: "400" },
});

export type TransactionType = "SepaCreditTransfer" | "SepaDirectDebit" | "Card";

const translateTransaction = (transaction: TransactionType) => {
  return match(transaction)
    .with("Card", () => t("accountStatement.card"))
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
  counterparty: string;
  maskedPan?: string;
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
  transactions: Transaction[];
  issueDate: string;
  issuerName: string;
  siret: string;
  repaymentDate: string;
  closingBalance: Amount;
};

const logoStyle: CSSProperties = {
  height: LOGO_MAX_HEIGHT,
  maxWidth: LOGO_MAX_WIDTH,
  objectFit: "contain",
  objectPosition: "left",
};
const formatMaskedPan = (value: string) => `••${value.slice(-4)}`;

export const CreditStatementV1 = ({
  partnerLogoUrl,
  accountHolderType,
  accountHolderName,
  accountHolderAddress,
  iban,
  bic,
  openingDate,
  closingDate,
  transactions,
  issueDate,
  issuerName,
  siret,
  repaymentDate,
  closingBalance,
}: CreditStatementV1Props) => {
  return (
    <Box style={styles.container} direction="column" justifyContent="spaceBetween">
      <Box direction="row" justifyContent="spaceBetween" alignItems="start">
        <Box direction="row" alignItems="center">
          {isNotNullishOrEmpty(partnerLogoUrl) ? (
            <img src={partnerLogoUrl} style={logoStyle} />
          ) : (
            <SwanLogo style={styles.defaultLogo} />
          )}

          <Separator horizontal={true} space={8} />
          <LakeText style={styles.mediumText}>{t("accountStatement.partnership")}</LakeText>
          <Space width={4} />
          <SwanLogo color={colors.gray[900]} style={styles.swanLogo} />
        </Box>

        <Box>
          <LakeText style={styles.pageTitle}>{t("creditStatement.titleDocument")}</LakeText>

          <LakeText style={styles.text} color={colors.gray[700]}>
            {accountHolderType === "Company"
              ? t("accountStatement.titleDocument.companyDescription")
              : t("accountStatement.titleDocument.individualDescription")}
          </LakeText>

          <LakeText align="right" style={styles.smallText}>
            {t("creditStatement.issueDate", {
              issueDate: dayjs(issueDate).format(locale.dateFormat),
            })}
          </LakeText>
        </Box>
      </Box>

      <Space height={12} />
      <Box direction="column">
        <LakeText style={styles.sectionTitle}>{accountHolderName}</LakeText>

        <Space height={16} />

        <LakeText style={styles.address}>{accountHolderAddress.addressLine1}</LakeText>
        {isNotNullish(accountHolderAddress.addressLine2) && (
          <LakeText>{accountHolderAddress.addressLine2}</LakeText>
        )}
        <LakeText
          style={styles.address}
        >{`${accountHolderAddress.postalCode} ${accountHolderAddress.city}, ${getCountryName(accountHolderAddress.country)}`}</LakeText>
      </Box>
      <Space height={12} />

      <Box direction="row">
        <Box direction="column" grow={1}>
          <Box direction="row" alignItems="center">
            <LakeText variant="semibold" style={styles.mediumText} color={colors.gray[900]}>
              {t("accountStatement.iban")}
            </LakeText>

            <Space width={4} />
            <LakeText color={colors.gray[500]} style={styles.mediumText}>
              {printFormat(iban)}
            </LakeText>
          </Box>

          <Space height={4} />
          <Box direction="row" alignItems="center">
            <LakeText variant="semibold" style={styles.mediumText} color={colors.gray[900]}>
              {t("accountStatement.bic")}
            </LakeText>

            <Space width={4} />
            <LakeText color={colors.gray[500]} style={styles.mediumText}>
              {bic}
            </LakeText>
          </Box>
        </Box>
        <Box direction="column" grow={1}>
          <LakeText variant="semibold" style={styles.mediumText} color={colors.gray[900]}>
            {issuerName}
          </LakeText>
          <Space height={4} />

          <Box direction="row" alignItems="center">
            <LakeText variant="semibold" style={styles.mediumText}>
              {t("creditStatement.siret")}
            </LakeText>

            <Space width={4} />
            <LakeText color={colors.gray[500]} style={styles.mediumText}>
              {siret}
            </LakeText>
          </Box>
        </Box>
      </Box>

      <Space height={24} />

      <LakeText color={colors.gray[500]} style={styles.smallText}>
        {formatNestedMessage("creditStatement.additionalDetails", {
          bold: chunk => (
            <LakeText color={colors.gray[900]} variant="semibold" style={{ fontSize: 12 }}>
              {chunk}
            </LakeText>
          ),
          openingDate: dayjs(openingDate).format(locale.dateFormat),
          closingDate: dayjs(closingDate).format(locale.dateFormat),
          repaymentDate: dayjs(repaymentDate).format(locale.dateFormat),
        })}
      </LakeText>

      <Space height={24} />
      <Box direction="row" justifyContent="spaceBetween">
        <Box direction="column" justifyContent="end">
          <LakeText style={styles.subtitle} color={colors.gray[900]}>
            {t("accountStatement.date", {
              openingDate: dayjs(openingDate).format(locale.dateFormat),
              closingDate: dayjs(closingDate).format(locale.dateFormat),
            })}
          </LakeText>
        </Box>
      </Box>
      <Space height={16} />

      <>
        <Box direction="row">
          <LakeText style={[styles.titleColumn, { width: "15%" }]} color={colors.gray[700]}>
            {t("accountStatement.column.date")}
          </LakeText>

          <LakeText style={[styles.titleColumn, { width: "55%" }]} color={colors.gray[700]}>
            {t("accountStatement.column.description")}
          </LakeText>

          <LakeText
            style={[styles.titleColumn, { width: "15%", textAlign: "right" }]}
            color={colors.gray[700]}
          >
            {t("creditStatement.column.debit")}
          </LakeText>

          <LakeText
            style={[styles.titleColumn, { width: "15%", textAlign: "right" }]}
            color={colors.gray[700]}
          >
            {t("creditStatement.column.credit")}
          </LakeText>
        </Box>
        <Space height={12} />

        <Box direction="column">
          {transactions.map(
            ({
              transactionAmount,
              transactionDate,
              transactionLabel,
              transactionSide,
              transactionType,
              transactionId,
              counterparty,
              maskedPan,
            }) => (
              <>
                <Box direction="row" key={transactionId}>
                  <LakeText style={[styles.smallText, { width: "15%" }]} color={colors.gray[700]}>
                    {dayjs(transactionDate).format(locale.dateFormat)}
                  </LakeText>
                  <Box direction="column" style={{ width: "55%" }}>
                    <LakeText style={styles.smallText} color={colors.gray[700]}>
                      {`${translateTransaction(transactionType)} ${transactionLabel}`}
                    </LakeText>
                    <LakeText style={styles.smallText} color={colors.gray[500]}>
                      {`${counterparty} ${maskedPan ? formatMaskedPan(maskedPan) : ""}`}
                    </LakeText>
                  </Box>

                  <LakeText
                    color={colors.gray[700]}
                    style={[styles.smallText, styles.rightColumnContent]}
                  >
                    {transactionSide === "Debit" ? `- ${transactionAmount.value}` : ""}
                  </LakeText>

                  <LakeText
                    color={colors.gray[700]}
                    style={[styles.smallText, styles.rightColumnContent]}
                  >
                    {transactionSide === "Credit" ? transactionAmount.value : ""}
                  </LakeText>
                </Box>
                <Space height={8} />
              </>
            ),
          )}

          <Box direction="row" justifyContent="end">
            <Box
              direction="row"
              justifyContent="spaceBetween"
              alignItems="center"
              style={{ width: "50%" }}
            >
              <LakeText style={styles.closingBalanceLabel} color={colors.gray[900]}>
                {t("accountStatement.closingBalance")}
              </LakeText>

              <LakeText color={colors.gray[900]} style={styles.closingBalanceAmount}>
                {formatCurrencySymbol(Number(closingBalance.value), closingBalance.currency)}
              </LakeText>
            </Box>
          </Box>
        </Box>
      </>

      <Space height={24} />
    </Box>
  );
};

export type CreditStatementProps = CreditStatementV1Props;

export const CreditStatement = (props: CreditStatementProps) =>
  match(props)
    .with({ version: "v1" }, props => <CreditStatementV1 {...props} />)
    .exhaustive();
