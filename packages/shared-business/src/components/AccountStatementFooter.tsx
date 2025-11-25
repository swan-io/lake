import { Separator } from "@swan-io/lake/src/components/Separator";
import { colors } from "@swan-io/lake/src/constants/design";
import { StyleSheet, Text } from "react-native";
import { useTranslation, type SupportedLanguage } from "../utils/i18n";
import { getTextStyle } from "../utils/style";

const styles = StyleSheet.create({
  footer: {
    ...getTextStyle("sans", 10),
    color: colors.gray[500],
    fontWeight: "300",
  },
});

export const AccountStatementFooter = ({ language }: { language?: SupportedLanguage }) => {
  const t = useTranslation(language);
  return (
    <>
      <Separator space={24} />
      <Text style={styles.footer}>{t("common.statement.footer")}</Text>
    </>
  );
};
