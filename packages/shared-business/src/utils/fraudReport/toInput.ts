import { Option } from "@bloodyowl/boxed";
import { match, P } from "ts-pattern";
import { getCaseRail } from "./rail";
import { getDetailsSteps } from "./stepper";
import type {
  DraftFraudDisputeCaseInput,
  FraudCardDetailsInput,
  FraudDetailsInput,
  FraudReason,
  FraudReportCase,
  FraudReportTransaction,
  FraudsterChannel,
  FraudTypology,
  SharedInformationWithFraudster,
  UpdateDraftFraudDisputeCaseInput,
} from "./types";

export type FraudReportFormValues = {
  transactions: FraudReportTransaction[];
  victimAccountMembershipId?: string;
  reportedReason?: FraudReason;
  reportedTypology?: FraudTypology;
  description?: string;
  discoveredAt?: string;
  discoveryDetails?: string;
  fraudsterChannels?: FraudsterChannel[];
  sharedInformationWithFraudster?: SharedInformationWithFraudster[];
  isLostOrStolen?: boolean;
  lostOrStolenNoticedAt?: string;
  externalReference?: string;
};

export const toFilled = (value: string | undefined) =>
  Option.fromNullable(value).filter(item => item.trim() !== "");

export const toFilledList = <T>(values: T[] | undefined) =>
  Option.fromNullable(values).filter(items => items.length > 0);

type SavedDetails = Pick<FraudReportCase, "fraudDetails" | "fraudCardDetails">;

const toFraudDetails = (
  values: FraudReportFormValues,
  savedDetails?: SavedDetails,
): Option<FraudDetailsInput> => {
  const hasFraudster = getDetailsSteps(values).includes("Fraudster");

  return Option.allFromDict({
    reportedReason: Option.fromNullable(values.reportedReason),
    reportedTypology: Option.fromNullable(values.reportedTypology),
    description: toFilled(values.description),
  }).map(required => ({
    ...required,
    discoveredAt: toFilled(values.discoveredAt).toNull(),
    discoveryDetails: toFilled(values.discoveryDetails).toNull(),
    fraudsterChannels: hasFraudster ? toFilledList(values.fraudsterChannels).toNull() : null,
    sharedInformationWithFraudster: hasFraudster
      ? toFilledList(values.sharedInformationWithFraudster).toNull()
      : null,
    hasFiledPoliceComplaint: savedDetails?.fraudDetails?.hasFiledPoliceComplaint ?? null,
  }));
};

const toFraudCardDetails = (
  values: FraudReportFormValues,
  savedDetails?: SavedDetails,
): Option<FraudCardDetailsInput> => {
  const isLostOrStolen = Option.fromNullable(values.isLostOrStolen);
  const lostOrStolenNoticedAt = toFilled(values.lostOrStolenNoticedAt);

  return isLostOrStolen.isNone() && lostOrStolenNoticedAt.isNone()
    ? Option.None()
    : Option.Some({
        isLostOrStolen: isLostOrStolen.toNull(),
        lostOrStolenNoticedAt: lostOrStolenNoticedAt.toNull(),
        hasContactedMerchant: savedDetails?.fraudCardDetails?.hasContactedMerchant ?? null,
      });
};

const toDetails = (values: FraudReportFormValues, savedDetails?: SavedDetails) => {
  const fraudDetails = toFraudDetails(values, savedDetails)
    .map(value => ({ fraudDetails: value }))
    .toUndefined();

  return match(getCaseRail(values.transactions))
    .with(Option.P.Some(P.union("CardOnly", "Mixed")), () => ({
      ...fraudDetails,
      ...toFraudCardDetails(values, savedDetails)
        .map(value => ({ fraudCardDetails: value }))
        .toUndefined(),
    }))
    .with(Option.P.Some("TransferOnly"), () => ({
      ...fraudDetails,
      ...toFilled(values.victimAccountMembershipId)
        .map(value => ({ victimAccountMembershipId: value }))
        .toUndefined(),
    }))
    .with(Option.P.None, () => ({ ...fraudDetails }))
    .exhaustive();
};

export const toTransactionIds = (values: FraudReportFormValues) =>
  values.transactions.map(({ id }) => id);

const isSameSelection = (transactionIds: string[], savedTransactionIds: string[]) => {
  const savedIds = new Set(savedTransactionIds);
  return (
    new Set(transactionIds).size === savedIds.size && transactionIds.every(id => savedIds.has(id))
  );
};

export const toDraftInput = (values: FraudReportFormValues): DraftFraudDisputeCaseInput => ({
  transactionIds: toTransactionIds(values),
  ...toDetails(values),
  ...match(values.externalReference)
    .with(P.union(undefined, ""), () => undefined)
    .otherwise(externalReference => ({ externalReference })),
});

export const toUpdateInput = ({
  savedCase,
  values,
  savedTransactionIds,
}: {
  savedCase: Pick<FraudReportCase, "id" | "fraudDetails" | "fraudCardDetails">;
  values: FraudReportFormValues;
  savedTransactionIds: string[];
}): UpdateDraftFraudDisputeCaseInput => {
  const transactionIds = toTransactionIds(values);

  return {
    disputeCaseId: savedCase.id,
    ...(isSameSelection(transactionIds, savedTransactionIds) ? undefined : { transactionIds }),
    ...toDetails(values, savedCase),
    ...match(values.externalReference)
      .with(undefined, () => undefined)
      .with("", () => ({ externalReference: null }))
      .otherwise(externalReference => ({ externalReference })),
  };
};
