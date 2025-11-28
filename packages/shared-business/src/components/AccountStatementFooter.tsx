import { useTranslation, type SupportedLanguage } from "../utils/i18n";

// Used to generate inline styles without css variables for PDF generation
const styles = {
  container: {
    width: 793,
    padding: "0 40px 40px 40px",
    fontFamily:
      "Inter, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
    boxSizing: "border-box",
    letterSpacing: "-0.011em",
    color: "#737276",
    fontSize: "10px",
    lineHeight: "12.5px",
    fontWeight: "300",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    borderTop: "1px solid #e8e7e8",
    paddingTop: "24px",
    marginTop: "24px",
  },
  footer: {
    flex: 1,
    textAlign: "justify",
    paddingRight: "24px",
  },
  support: {
    textAlign: "right",
  },
  supportText: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "600",
    color: "#26232F",
  },
  supportLink: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "400",
    color: "#454348",
    textDecoration: "none",
  },
  pageNumber: {
    fontSize: "10px",
    color: "#16141A",
    marginTop: "20px",
  },
} as const;

export const AccountStatementFooter = ({ language }: { language?: SupportedLanguage }) => {
  const t = useTranslation(language);
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.footer}>{t("common.statement.footer")}</div>
        <div style={styles.support}>
          <div style={styles.supportText}>{t("accountStatement.contactSupport")}</div>
          <div style={styles.supportLink}>{"support.swan.io"}</div>
          <div style={styles.pageNumber}>
            {t("accountStatement.page")} <span className="pageNumber" /> /{" "}
            <span className="totalPages" />
          </div>
        </div>
      </div>
    </div>
  );
};
