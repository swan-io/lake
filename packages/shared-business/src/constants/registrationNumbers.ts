import { t } from "../utils/i18n";
import { CountryCCA3 } from "./countries";

export type RegistrationNumberConfig =
  | { showRegistrationQuestion: false }
  | {
      showRegistrationQuestion: true;
      organismName: string;
      registrationNumberLabel: string;
    };

type CompanyType = "Association" | "Company" | "HomeOwnerAssociation" | "SelfEmployed" | "Other";

const registrationNumbersConfigByCountry: Partial<
  Record<CountryCCA3, Partial<Record<CompanyType, RegistrationNumberConfig>>>
> = {
  FRA: {
    Company: {
      showRegistrationQuestion: true,
      organismName: t("registrationPage.withOrganismLabel", {
        organismName: "RCS",
      }),
      registrationNumberLabel: "SIREN",
    },
    Association: {
      showRegistrationQuestion: true,
      organismName: t("registrationPage.withOrganismLabel", {
        organismName: "RCS",
      }),
      registrationNumberLabel: "RNA",
    },
    HomeOwnerAssociation: {
      showRegistrationQuestion: true,
      organismName: t("registrationPage.withOrganismLabel", {
        organismName: "RCS",
      }),
      registrationNumberLabel: "SIREN",
    },
    Other: {
      showRegistrationQuestion: true,
      organismName: t("registrationPage.withOrganismLabel", {
        organismName: "RCS",
      }),
      registrationNumberLabel: "SIREN",
    },
  },
  BEL: {
    Company: {
      showRegistrationQuestion: true,
      organismName: t("registrationPage.withOrganismLabel", {
        organismName: "Code des sociétés",
      }),
      registrationNumberLabel: "Numéro d'entreprise (BCE)",
    },
    Association: {
      showRegistrationQuestion: true,
      organismName: t("registrationPage.withOrganismLabel", {
        organismName: "Code des sociétés",
      }),
      registrationNumberLabel: "Numéro d'entreprise (BCE)",
    },
  },
  ITA: {
    Company: {
      showRegistrationQuestion: true,
      organismName: t("registrationPage.withOrganismLabel", {
        organismName: "REGISTRO IMPRESE",
      }),
      registrationNumberLabel: "Numero di registrazione",
    },
    Association: {
      showRegistrationQuestion: true,
      organismName: t("registrationPage.withOrganismLabel", {
        organismName: "REGISTRO IMPRESE",
      }),
      registrationNumberLabel: "Numero di registrazione",
    },
  },
  DEU: {
    Company: {
      showRegistrationQuestion: true,
      organismName: t("registrationPage.withOrganismLabel", {
        organismName: "Handelsregister",
      }),
      registrationNumberLabel: "Registernummer (HRB, HRA, GnR, PR, VR)",
    },
    Association: {
      showRegistrationQuestion: true,
      organismName: t("registrationPage.withOrganismLabel", {
        organismName: "Handelsregister",
      }),
      registrationNumberLabel: "Registration number (VR)",
    },
  },
  LUX: {
    Company: {
      showRegistrationQuestion: true,
      organismName: t("registrationPage.withOrganismLabel", {
        organismName: "RCS",
      }),
      registrationNumberLabel: "Numéro RCS",
    },
    Association: {
      showRegistrationQuestion: true,
      organismName: t("registrationPage.withOrganismLabel", {
        organismName: "RCS",
      }),
      registrationNumberLabel: "Numéro RCS",
    },
  },
  NLD: {
    Company: {
      showRegistrationQuestion: true,
      organismName: t("registrationPage.withOrganismLabel", {
        organismName: "Handelsregister",
      }),
      registrationNumberLabel: "KVK number",
    },
    Association: {
      showRegistrationQuestion: true,
      organismName: t("registrationPage.withOrganismLabel", {
        organismName: "Handelsregister",
      }),
      registrationNumberLabel: "KVK number",
    },
  },
};

const defaultRegistrationNumbersConfig = {
  showRegistrationQuestion: true,
  organismName: t("registrationPage.withoutOrganismNameLabel"),
  registrationNumberLabel: t("registrationPage.defaultNumberLabel"),
};

export const getRegistrationNumbersConfig = ({
  country,
  companyType,
}: {
  country: CountryCCA3;
  companyType: CompanyType;
}): RegistrationNumberConfig => {
  return (
    registrationNumbersConfigByCountry[country]?.[companyType] ?? defaultRegistrationNumbersConfig
  );
};
