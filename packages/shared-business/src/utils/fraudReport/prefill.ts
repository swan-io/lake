import type { FraudReportFormValues } from "./toInput";
import type { FraudReportCase } from "./types";

export const toFormValues = ({
  transactions,
  fraudDetails,
  fraudCardDetails,
  victimAccountMembershipId,
  externalReference,
}: Pick<
  FraudReportCase,
  | "transactions"
  | "fraudDetails"
  | "fraudCardDetails"
  | "victimAccountMembershipId"
  | "externalReference"
>): FraudReportFormValues => ({
  transactions,
  victimAccountMembershipId: victimAccountMembershipId ?? undefined,
  reportedReason: fraudDetails?.reportedReason,
  reportedTypology: fraudDetails?.reportedTypology,
  description: fraudDetails?.description,
  discoveredAt: fraudDetails?.discoveredAt ?? undefined,
  discoveryDetails: fraudDetails?.discoveryDetails ?? undefined,
  fraudsterChannels: fraudDetails?.fraudsterChannels,
  sharedInformationWithFraudster: fraudDetails?.sharedInformationWithFraudster,
  hasFiledPoliceComplaint: fraudDetails?.hasFiledPoliceComplaint ?? undefined,
  isLostOrStolen: fraudCardDetails?.isLostOrStolen ?? undefined,
  lostOrStolenNoticedAt: fraudCardDetails?.lostOrStolenNoticedAt ?? undefined,
  hasContactedMerchant: fraudCardDetails?.hasContactedMerchant ?? undefined,
  externalReference: externalReference ?? undefined,
});
