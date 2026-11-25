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
  isLostOrStolen: fraudCardDetails?.isLostOrStolen ?? undefined,
  lostOrStolenNoticedAt: fraudCardDetails?.lostOrStolenNoticedAt ?? undefined,
  externalReference: externalReference ?? undefined,
});
