import { Box } from "@swan-io/lake/src/components/Box";
import { Space } from "@swan-io/lake/src/components/Space";
import { colors, spacings } from "@swan-io/lake/src/constants/design";
import { StyleSheet, Text } from "react-native";
import { SupportedLanguage, useTranslation } from "../utils/i18n";
import { getTextStyle } from "../utils/style";

const styles = StyleSheet.create({
  container: {
    width: 793,
    padding: 10,
    fontFamily:
      "Inter, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
  },
  totalAmount: {
    ...getTextStyle("sans", 20),
    fontWeight: "500",
    textAlign: "right",
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
  flexGrow: {
    flexGrow: 1,
  },
  feeStatementTitle: {
    ...getTextStyle("sans", 20),
    color: colors.swan[500],
    fontFamily:
      "Inter, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 24,
  },
  dateContainer: {
    alignItems: "flex-start",
    flexDirection: "column",
  },
  dateText: {
    ...getTextStyle("sans", 12),
    color: colors.swan[500],
    fontFamily:
      "Inter, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 16,
  },
  dateBold: {
    fontWeight: "600",
  },
  headerRow: {
    marginBottom: 12,
    backgroundColor: colors.gray[50],
  },
  headerText: {
    ...getTextStyle("sans", 12),
    fontWeight: "600",
    paddingVertical: spacings[4],
    minWidth: spacings[96],
  },
  operationText: {
    paddingVertical: spacings[4],
    ...getTextStyle("sans", 11),
    lineHeight: 16,
  },
});

type Amount = {
  value: string;
  currency: string;
};

export type FeeOperation = {
  label: string;
  count: number;
  total: Amount;
};

export type AnnualFeeStatementData = {
  openingDate: string;
  closingDate: string;
  feeOperations: FeeOperation[];
  operationCount: number;
  total: Amount;
};

export type AccountStatementAnnualFeesProps = {
  annualFeeStatement: AnnualFeeStatementData;
  language?: SupportedLanguage;
};

export const AccountStatementAnnualFees = ({
  annualFeeStatement,
  language,
}: AccountStatementAnnualFeesProps) => {
  const t = useTranslation(language);

  return (
    <Box style={styles.container}>
      <Box style={styles.flexGrow}>
        <Text style={styles.feeStatementTitle}>{t("accountStatement.feeStatement")}</Text>
      </Box>

      <Space height={24} />

      <Box style={styles.dateContainer}>
        <Text style={styles.dateText}>
          {t("accountStatement.from")}{" "}
          <Text style={styles.dateBold}>{annualFeeStatement.openingDate}</Text>{" "}
          {t("accountStatement.to")}{" "}
          <Text style={styles.dateBold}>{annualFeeStatement.closingDate}</Text>
        </Text>
      </Box>

      <Space height={8} />

      <Box style={styles.headerRow} direction="row" justifyContent="spaceBetween">
        <Text style={[styles.headerText, { width: "60%" }]}>{t("accountStatement.feeType")}</Text>
        <Text style={styles.headerText}>{t("accountStatement.operationCount")}</Text>
        <Text style={styles.headerText}>{t("accountStatement.total")}</Text>
      </Box>

      <Space height={4} />

      {annualFeeStatement.feeOperations.map((feeOperation, index) => (
        <Box key={index} direction="row">
          <Text style={[styles.operationText, { width: "68%" }]}>{feeOperation.label}</Text>
          <Text style={[styles.operationText, { width: "20%" }]}>{feeOperation.count}</Text>
          <Text style={styles.operationText}>{feeOperation.total.value}</Text>
        </Box>
      ))}

      <Space height={32} />

      <Box>
        <Box direction="row" justifyContent="end">
          <Box direction="row" alignItems="center" justifyContent="spaceBetween" style={styles.closingBalanceRow}>
            <Text style={[styles.row, {width: "22%"}]}>{t("accountStatement.total")}</Text>
            <Text style={styles.totalAmount}>{annualFeeStatement.operationCount}</Text>
            <Box style={styles.row} />
            <Text style={styles.totalAmount}>{annualFeeStatement.total.value}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
