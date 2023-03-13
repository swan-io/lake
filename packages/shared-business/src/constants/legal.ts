import { CountryCCA3 } from "./countries";

export const companyTypesPerCountry: Partial<Record<CountryCCA3, string>> = {
  BEL: "Entreprise (SA, SPRL, SCRL, SCRIS, SNC, SCS, GIE)",
  DEU: "Firma (GmbH, EI, Gbr, KG)",
  FRA: "Entreprise (SA, SARL, SAS, SCI, EI, EIRL, Micro-entreprise…)",
  ITA: "Società (SS, SRL, SPA, SNC, SAS…)",
  LUX: "Entreprise (SA, SCS, SARLI, SNC, SCA, SC)",
  NLD: "Bedrijf (BV, NV, VOF…)",
};

export const countriesWithHomeOwnerAssociation: CountryCCA3[] = ["FRA", "BEL"];
