import { Box } from "@swan-io/lake/src/components/Box";
import { Fill } from "@swan-io/lake/src/components/Fill";
import { Separator } from "@swan-io/lake/src/components/Separator";
import { Space } from "@swan-io/lake/src/components/Space";
import { Stack } from "@swan-io/lake/src/components/Stack";
import { SwanLogo } from "@swan-io/lake/src/components/SwanLogo";
import { colors, fonts, interFontStyle } from "@swan-io/lake/src/constants/design";
import { isNotNullish, isNotNullishOrEmpty } from "@swan-io/lake/src/utils/nullish";
import IBAN from "iban";
import { CSSProperties } from "react";
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { match } from "ts-pattern";
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
    fontWeight: "500",
  },
  sectionTitle: {
    ...getTextStyle("sans", 14),
    color: colors.swan[500],
    fontWeight: "600",
  },
  lineName: {
    ...getTextStyle("sans", 11),
    color: colors.gray[700],
  },
  lineValue: {
    ...getTextStyle("sans", 11),
    color: colors.swan[500],
    fontWeight: "600",
  },
  generationInfos: {
    ...getTextStyle("sans", 10),
    color: colors.gray[700],
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

type EntryProps = {
  name: string;
  value: string;
};

const Line = ({ name, value }: EntryProps) => (
  <Box direction="row" alignItems="center">
    <Text style={styles.lineName}>{name}</Text>
    <Fill minWidth={8} />
    <Text style={styles.lineValue}>{value}</Text>
  </Box>
);

type Amount = {
  value: string;
  currency: string;
};

type TransactionType =
  | "SepaCreditTransferIn"
  | "SepaCreditTransferOut"
  | "SepaInstantCreditTransferIn"
  | "SepaInstantCreditTransferOut"
  | "InternalCreditTransferIn"
  | "InternalCreditTransferOut"
  | "InternationalCreditTransferIn"
  | "InternationalCreditTransferOut";

type TransactionStatementV1Props = {
  version: "v1";

  partnerLogoUrl?: string;
  generationDate: string;

  executionDate: string;
  type: TransactionType;
  amount?: Amount;
  targetTransferAmount?: Amount;
  instructedAmount?: Amount;
  amountCredited?: Amount;
  exchangeRate?: [Amount, Amount];
  fees?: Amount;
  label: string;
  reference?: string;

  debtorName: string;
  debtorAccountNumber: string;
  debtorBankName?: string;
  debtorBankIdentifier?: string;

  creditorName: string;
  creditorAccountNumber: string;
  creditorBankName?: string;
  creditorBankIdentifier?: string;

  style?: StyleProp<ViewStyle>;
};

const logoStyle: CSSProperties = {
  height: LOGO_MAX_HEIGHT,
  maxWidth: LOGO_MAX_WIDTH,
  objectFit: "contain",
  objectPosition: "left",
};

export const TransactionStatementV1 = ({
  partnerLogoUrl,
  generationDate,

  executionDate,
  type,
  amount,
  instructedAmount,
  amountCredited,
  targetTransferAmount,
  exchangeRate,
  fees,
  label,
  reference,

  debtorName,
  debtorAccountNumber,
  debtorBankName,
  debtorBankIdentifier,

  creditorName,
  creditorAccountNumber,
  creditorBankName,
  creditorBankIdentifier,

  style,
}: TransactionStatementV1Props) => {
  return (
    <View style={[styles.container, style]}>
      <Box direction="row" alignItems="center">
        {isNotNullishOrEmpty(partnerLogoUrl) ? (
          <img src={partnerLogoUrl} style={logoStyle} />
        ) : (
          <SwanLogo style={styles.defaultLogo} />
        )}

        <Separator horizontal={true} space={8} />
        <Text style={styles.partnershipText}>{t("transactionStatement.partnership")}</Text>
        <Space width={4} />
        <SwanLogo color={colors.gray[900]} style={styles.swanLogo} />
      </Box>

      <Space height={24} />
      <Text style={styles.pageTitle}>{t("transactionStatement.title.document")}</Text>
      <Space height={24} />

      <Text style={styles.sectionTitle}>
        {t("transactionStatement.title.transactionInformation")}
      </Text>

      <Space height={8} />

      <Stack space={8}>
        <Line name={t("transactionStatement.information.executionDate")} value={executionDate} />

        <Line
          name={t("transactionStatement.information.type")}
          value={match(type)
            .with("SepaCreditTransferIn", () => t("transactionStatement.type.SepaCreditTransferIn"))
            .with("SepaCreditTransferOut", () =>
              t("transactionStatement.type.SepaCreditTransferOut"),
            )
            .with("SepaInstantCreditTransferIn", () =>
              t("transactionStatement.type.SepaInstantCreditTransferIn"),
            )
            .with("SepaInstantCreditTransferOut", () =>
              t("transactionStatement.type.SepaInstantCreditTransferOut"),
            )
            .with("InternalCreditTransferIn", () =>
              t("transactionStatement.type.InternalCreditTransferIn"),
            )
            .with("InternalCreditTransferOut", () =>
              t("transactionStatement.type.InternalCreditTransferOut"),
            )
            .with("InternationalCreditTransferIn", () =>
              t("transactionStatement.type.InternationalCreditTransferIn"),
            )
            .with("InternationalCreditTransferOut", () =>
              t("transactionStatement.type.InternationalCreditTransferOut"),
            )
            .exhaustive()}
        />

        {isNotNullish(instructedAmount) && (
          <Line
            name={t("transactionStatement.information.instructedAmount")}
            value={formatCurrencyIso(Number(instructedAmount.value), instructedAmount.currency)}
          />
        )}

        {isNotNullish(amountCredited) && (
          <Line
            name={t("transactionStatement.information.amountCredited")}
            value={formatCurrencyIso(Number(amountCredited.value), amountCredited.currency)}
          />
        )}

        {isNotNullish(amount) && (
          <Line
            name={t("transactionStatement.information.amount")}
            value={formatCurrencyIso(Number(amount.value), amount.currency)}
          />
        )}

        {isNotNullish(targetTransferAmount) && (
          <Line
            name={t("transactionStatement.information.targetTransferAmount")}
            value={formatCurrencyIso(
              Number(targetTransferAmount.value),
              targetTransferAmount.currency,
            )}
          />
        )}

        {isNotNullish(exchangeRate) && (
          <Line
            name={t("transactionStatement.information.exchangeRate")}
            value={`${formatCurrencyIso(
              Number(exchangeRate[0].value),
              exchangeRate[0].currency,
            )} = ${formatCurrencyIso(Number(exchangeRate[1].value), exchangeRate[1].currency)}`}
          />
        )}

        {isNotNullish(fees) && (
          <Line
            name={t("transactionStatement.information.fees")}
            value={formatCurrencyIso(Number(fees.value), fees.currency)}
          />
        )}

        <Line name={t("transactionStatement.information.label")} value={label} />

        {isNotNullish(reference) && (
          <Line name={t("transactionStatement.information.reference")} value={reference} />
        )}
      </Stack>

      <Space height={24} />
      <Text style={styles.sectionTitle}>{t("transactionStatement.title.debtor")}</Text>
      <Space height={8} />

      <Stack space={8}>
        <Line name={t("transactionStatement.debtor.name")} value={debtorName} />

        <Line
          name={t("transactionStatement.debtor.accountNumber")}
          value={
            IBAN.isValid(debtorAccountNumber)
              ? IBAN.printFormat(debtorAccountNumber)
              : debtorAccountNumber
          }
        />

        {isNotNullishOrEmpty(debtorBankName) && (
          <Line name={t("transactionStatement.debtor.bankName")} value={debtorBankName} />
        )}

        {isNotNullishOrEmpty(debtorBankIdentifier) && (
          <Line
            name={t("transactionStatement.debtor.bankIdentifier")}
            value={debtorBankIdentifier}
          />
        )}
      </Stack>

      <Space height={24} />
      <Text style={styles.sectionTitle}>{t("transactionStatement.title.creditor")}</Text>
      <Space height={8} />

      <Stack space={8}>
        <Line name={t("transactionStatement.creditor.name")} value={creditorName} />

        <Line
          name={t("transactionStatement.creditor.accountNumber")}
          value={
            IBAN.isValid(creditorAccountNumber)
              ? IBAN.printFormat(creditorAccountNumber)
              : creditorAccountNumber
          }
        />

        {isNotNullishOrEmpty(creditorBankName) && (
          <Line name={t("transactionStatement.creditor.bankName")} value={creditorBankName} />
        )}

        {isNotNullishOrEmpty(creditorBankIdentifier) && (
          <Line
            name={t("transactionStatement.creditor.bankIdentifier")}
            value={creditorBankIdentifier}
          />
        )}
      </Stack>

      <Fill minHeight={8} />

      <Text style={styles.generationInfos}>
        {t("transactionStatement.generationDate", { date: generationDate })}
      </Text>

      <Space height={8} />

      {match(type)
        .with(
          "SepaCreditTransferOut",
          "SepaInstantCreditTransferOut",
          "InternationalCreditTransferOut",
          () => (
            <Text style={styles.generationInfos}>{t("transactionStatement.generationInfos")}</Text>
          ),
        )
        .otherwise(() => null)}

      <Separator space={24} />
      <Text style={styles.footer}>{t("transactionStatement.footer")}</Text>
    </View>
  );
};

export type TransactionStatementProps = TransactionStatementV1Props;

export const TransactionStatement = (props: TransactionStatementProps) =>
  match(props)
    .with({ version: "v1" }, props => <TransactionStatementV1 {...props} />)
    .exhaustive();
