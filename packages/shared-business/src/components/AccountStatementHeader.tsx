import { SwanLogo } from "@swan-io/lake/src/components/SwanLogo";
import { colors } from "@swan-io/lake/src/constants/design";
import { isNotNullishOrEmpty } from "@swan-io/lake/src/utils/nullish";
import { CSSProperties } from "react";
import { useTranslation, type SupportedLanguage } from "../utils/i18n";

const LOGO_MAX_HEIGHT = 45;
const LOGO_MAX_WIDTH = 275;

// Used to generate inline styles without css variables for PDF generation
const styles = {
  container: {
    width: 793,
    padding: 10,
    fontFamily:
      "Inter, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
    boxSizing: "border-box",
    color: "#737276",
    fontSize: "10px",
    lineHeight: "12.5px",
    fontWeight: "300",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  partnership: {
    borderLeft: "1px solid #e8e7e8",
    padding: "7px 10px",
    marginLeft: "8px",
  },
  partnershipText: {
    fontSize: "13px",
    lineHeight: "24px"
  },
  logo: {
    display: "flex",
    alignItems: "center",
    marginLeft: 10,
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
  pageNumber: {
    fontSize: "14px",
    color: "#26232F",
    fontWeight: "500",
    textTransform: "uppercase",
  },
} as const;

type AccountStatementHeaderProps = {
  partnerLogoUrl?: string;
  language?: SupportedLanguage;
};

const logoStyle: CSSProperties = {
  height: LOGO_MAX_HEIGHT,
  maxWidth: LOGO_MAX_WIDTH,
  objectFit: "contain",
  objectPosition: "left",
};

export const AccountStatementHeader = ({
  partnerLogoUrl,
  language,
}: AccountStatementHeaderProps) => {
  const t = useTranslation(language);

  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        {isNotNullishOrEmpty(partnerLogoUrl) ? (
          <img src={partnerLogoUrl} style={logoStyle} />
        ) : (
          <SwanLogo style={styles.defaultLogo} />
        )}

        <div style={styles.partnership}>
          <div style={styles.partnershipText}>{t("accountStatement.partnership")}</div>
          <SwanLogo color={colors.gray[900]} style={styles.swanLogo} />
        </div>
      </div>
      <div style={styles.pageNumber}>
        {t("accountStatement.page")} <span className="pageNumber" />/<span className="totalPages" />
      </div>
    </div>
  );
};
