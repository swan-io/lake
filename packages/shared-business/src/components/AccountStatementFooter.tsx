import { useTranslation, type SupportedLanguage } from "../utils/i18n";

// Used to generate inline styles without css variables for PDF generation
const styles = {
  container: {
    width: 793,
    padding: "10px",
    fontFamily:
      "Inter, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
    boxSizing: "border-box",
    letterSpacing: "-0.011em",
    color: "#26232F",
    lineHeight: "12.5px",
    fontWeight: "300",
    marginLeft: "17px",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    paddingTop: "24px",
    marginTop: "24px",
  },
  footer: {
    flex: 1,
    textAlign: "center",
    paddingRight: "24px",
    whiteSpace: "pre-line",
    fontSize: "8px",
  },
} as const;

export const AccountStatementFooter = ({ language }: { language?: SupportedLanguage }) => {
  const t = useTranslation(language);
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.footer}>{t("common.statement.footer")}</div>
      </div>
    </div>
  );
};
