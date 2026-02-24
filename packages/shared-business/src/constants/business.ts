import { t } from "../utils/i18n";

export type BusinessActivity =
  | "AdministrativeServices"
  | "Agriculture"
  | "Arts"
  | "BusinessAndRetail"
  | "Construction"
  | "Education"
  | "ElectricalDistributionAndWaterSupply"
  | "FinancialAndInsuranceOperations"
  | "Health"
  | "Housekeeping"
  | "InformationAndCommunication"
  | "LodgingAndFoodServices"
  | "ManufacturingAndMining"
  | "Other"
  | "PublicAdministration"
  | "RealEstate"
  | "ScientificActivities"
  | "Transportation";

type BusinessActivityEntry = { text: string; value: BusinessActivity };

const unsortedBusinessActivities: BusinessActivityEntry[] = [
  { text: t("businessActivity.administrativeServices"), value: "AdministrativeServices" },
  { text: t("businessActivity.agriculture"), value: "Agriculture" },
  { text: t("businessActivity.arts"), value: "Arts" },
  { text: t("businessActivity.businessAndRetail"), value: "BusinessAndRetail" },
  { text: t("businessActivity.construction"), value: "Construction" },
  { text: t("businessActivity.education"), value: "Education" },
  {
    text: t("businessActivity.electricalDistributionAndWaterSupply"),
    value: "ElectricalDistributionAndWaterSupply",
  },
  {
    text: t("businessActivity.financialAndInsuranceOperations"),
    value: "FinancialAndInsuranceOperations",
  },
  { text: t("businessActivity.health"), value: "Health" },
  { text: t("businessActivity.housekeeping"), value: "Housekeeping" },
  { text: t("businessActivity.informationAndCommunication"), value: "InformationAndCommunication" },
  { text: t("businessActivity.lodgingAndFoodServices"), value: "LodgingAndFoodServices" },
  { text: t("businessActivity.manufacturingAndMining"), value: "ManufacturingAndMining" },
  { text: t("businessActivity.publicAdministration"), value: "PublicAdministration" },
  { text: t("businessActivity.realEstate"), value: "RealEstate" },
  { text: t("businessActivity.scientificActivities"), value: "ScientificActivities" },
  { text: t("businessActivity.transportation"), value: "Transportation" },
];

export const businessActivities: BusinessActivityEntry[] = [
  ...unsortedBusinessActivities.sort((a, b) => a.text.localeCompare(b.text)),
  { text: t("businessActivity.other"), value: "Other" },
];

export type MonthlyPaymentVolume =
  | "Between10000And50000"
  | "Between50000And100000"
  | "LessThan10000"
  | "MoreThan100000";

export const monthlyPaymentVolumes: { text: string; value: MonthlyPaymentVolume }[] = [
  { text: t("monthlyPaymentVolume.lessThan10000"), value: "LessThan10000" },
  { text: t("monthlyPaymentVolume.between10000And50000"), value: "Between10000And50000" },
  { text: t("monthlyPaymentVolume.between50000And100000"), value: "Between50000And100000" },
  { text: t("monthlyPaymentVolume.moreThan100000"), value: "MoreThan100000" },
];

export type ForecastYearlyIncome =
  | "From0To500000"
  | "From500001To1000000"
  | "From1000001To5000000"
  | "MoreThan5000000";

export const forecastYearlyIncome: { text: string; value: ForecastYearlyIncome }[] = [
  { text: t("forecastYearlyIncome.from0To500000"), value: "From0To500000" },
  { text: t("forecastYearlyIncome.from500001To1000000"), value: "From500001To1000000" },
  { text: t("forecastYearlyIncome.from1000001To5000000"), value: "From1000001To5000000" },
  { text: t("forecastYearlyIncome.moreThan5000000"), value: "MoreThan5000000" },
];

export type CompanyHeadcount =
  | "Between1And10"
  | "Between11And50"
  | "Between51And250"
  | "MoreThan250";

export const companyHeadcount: { text: string; value: CompanyHeadcount }[] = [
  { text: "1-10", value: "Between1And10" },
  { text: "11-50", value: "Between11And50" },
  { text: "51-250", value: "Between51And250" },
  { text: "+250", value: "MoreThan250" },
];

export type BusinessActivityCategory =
  | "AccommodationAndFoodService"
  | "AdministrativeAndSupportServiceActivities"
  | "AgricultureForestryAndFishing"
  | "ArtsSportsAndRecreation"
  | "Construction"
  | "Education"
  | "ElectricityGasSteamAndAirConditioningSupply"
  | "ExtraterritorialOrganisationsAndBodies"
  | "FinancialAndInsuranceActivities"
  | "HouseholdEmployerAndOwnUseActivities"
  | "HumanHealthAndSocialWork"
  | "Manufacturing"
  | "MiningAndQuarrying"
  | "OtherServiceActivities"
  | "ProfessionalScientificAndTechnicalActivities"
  | "PublicAdministrationAndDefenceSocialSecurity"
  | "PublishingBroadcastingAndContentProductionAndDistribution"
  | "RealEstateActivities"
  | "TelecommunicationItAndInformationServices"
  | "TransportationAndStorage"
  | "WaterSupplySewerageWasteManagementAndRemediation"
  | "WholesaleAndRetailTrade";

export const businessActivityCategories: { text: string; value: BusinessActivityCategory }[] = [
  {
    text: t("businessActivityCategory.accommodationAndFoodService"),
    value: "AccommodationAndFoodService",
  },
  {
    text: t("businessActivityCategory.administrativeAndSupportServiceActivities"),
    value: "AdministrativeAndSupportServiceActivities",
  },
  {
    text: t("businessActivityCategory.agricultureForestryAndFishing"),
    value: "AgricultureForestryAndFishing",
  },
  { text: t("businessActivityCategory.artsSportsAndRecreation"), value: "ArtsSportsAndRecreation" },
  { text: t("businessActivityCategory.construction"), value: "Construction" },
  { text: t("businessActivityCategory.education"), value: "Education" },
  {
    text: t("businessActivityCategory.electricityGasSteamAndAirConditioningSupply"),
    value: "ElectricityGasSteamAndAirConditioningSupply",
  },
  {
    text: t("businessActivityCategory.extraterritorialOrganisationsAndBodies"),
    value: "ExtraterritorialOrganisationsAndBodies",
  },
  {
    text: t("businessActivityCategory.financialAndInsuranceActivities"),
    value: "FinancialAndInsuranceActivities",
  },
  {
    text: t("businessActivityCategory.householdEmployerAndOwnUseActivities"),
    value: "HouseholdEmployerAndOwnUseActivities",
  },
  {
    text: t("businessActivityCategory.humanHealthAndSocialWork"),
    value: "HumanHealthAndSocialWork",
  },
  { text: t("businessActivityCategory.manufacturing"), value: "Manufacturing" },
  { text: t("businessActivityCategory.miningAndQuarrying"), value: "MiningAndQuarrying" },
  {
    text: t("businessActivityCategory.professionalScientificAndTechnicalActivities"),
    value: "ProfessionalScientificAndTechnicalActivities",
  },
  {
    text: t("businessActivityCategory.publicAdministrationAndDefenceSocialSecurity"),
    value: "PublicAdministrationAndDefenceSocialSecurity",
  },
  {
    text: t("businessActivityCategory.publishingBroadcastingAndContentProductionAndDistribution"),
    value: "PublishingBroadcastingAndContentProductionAndDistribution",
  },
  { text: t("businessActivityCategory.realEstateActivities"), value: "RealEstateActivities" },
  {
    text: t("businessActivityCategory.telecommunicationItAndInformationServices"),
    value: "TelecommunicationItAndInformationServices",
  },
  {
    text: t("businessActivityCategory.transportationAndStorage"),
    value: "TransportationAndStorage",
  },
  {
    text: t("businessActivityCategory.waterSupplySewerageWasteManagementAndRemediation"),
    value: "WaterSupplySewerageWasteManagementAndRemediation",
  },
  { text: t("businessActivityCategory.wholesaleAndRetailTrade"), value: "WholesaleAndRetailTrade" },
  { text: t("businessActivityCategory.otherServiceActivities"), value: "OtherServiceActivities" },
];
