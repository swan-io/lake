import { Option } from "@bloodyowl/boxed";
import { match, P } from "ts-pattern";
import { getCaseRail } from "./rail";
import { getDetailsSteps } from "./stepper";
import type {
  DraftFraudDisputeCaseInput,
  FraudCardDetailsInput,
  FraudDetailsInput,
  FraudReason,
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
  hasFiledPoliceComplaint?: boolean;
  isLostOrStolen?: boolean;
  lostOrStolenNoticedAt?: string;
  hasContactedMerchant?: boolean;
  externalReference?: string;
};

export const toFilled = (value: string | undefined) =>
  Option.fromNullable(value).filter(item => item.trim() !== "");

export const toFilledList = <T>(values: T[] | undefined) =>
  Option.fromNullable(values).filter(items => items.length > 0);

// The incident answers `fraudDetails` can't be sent without
export const toRequiredFraudDetails = (values: FraudReportFormValues) =>
  Option.allFromDict({
    reportedReason: Option.fromNullable(values.reportedReason),
    reportedTypology: Option.fromNullable(values.reportedTypology),
    description: toFilled(values.description),
  });

const toFraudDetails = (values: FraudReportFormValues): Option<FraudDetailsInput> => {
  const hasFraudster = getDetailsSteps(values).includes("Fraudster");

  return toRequiredFraudDetails(values).map(required => ({
    ...required,
    discoveredAt: toFilled(values.discoveredAt).toNull(),
    discoveryDetails: toFilled(values.discoveryDetails).toNull(),
    fraudsterChannels: hasFraudster ? toFilledList(values.fraudsterChannels).toNull() : null,
    sharedInformationWithFraudster: hasFraudster
      ? toFilledList(values.sharedInformationWithFraudster).toNull()
      : null,
    hasFiledPoliceComplaint: values.hasFiledPoliceComplaint ?? null,
  }));
};

const toFraudCardDetails = (
  values: FraudReportFormValues,
  { sendEmpty }: { sendEmpty: boolean },
): Option<FraudCardDetailsInput> => {
  const details = {
    isLostOrStolen: values.isLostOrStolen ?? null,
    lostOrStolenNoticedAt: toFilled(values.lostOrStolenNoticedAt).toNull(),
    hasContactedMerchant: values.hasContactedMerchant ?? null,
  };

  return sendEmpty || Object.values(details).some(value => value !== null)
    ? Option.Some(details)
    : Option.None();
};

const toDetails = (values: FraudReportFormValues, { isUpdate }: { isUpdate: boolean }) => {
  const fraudDetails = toFraudDetails(values)
    .map(value => ({ fraudDetails: value }))
    .toUndefined();

  return match(getCaseRail(values.transactions))
    .with(Option.P.Some(P.union("CardOnly", "Mixed")), () => ({
      ...fraudDetails,
      ...toFraudCardDetails(values, { sendEmpty: isUpdate })
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
  ...toDetails(values, { isUpdate: false }),
  ...match(values.externalReference)
    .with(P.union(undefined, ""), () => undefined)
    .otherwise(externalReference => ({ externalReference })),
});

export const toUpdateInput = ({
  disputeCaseId,
  values,
  savedTransactionIds,
}: {
  disputeCaseId: string;
  values: FraudReportFormValues;
  savedTransactionIds: string[];
}): UpdateDraftFraudDisputeCaseInput => {
  const transactionIds = toTransactionIds(values);

  return {
    disputeCaseId,
    ...(isSameSelection(transactionIds, savedTransactionIds) ? undefined : { transactionIds }),
    ...toDetails(values, { isUpdate: true }),
    ...match(values.externalReference)
      .with(undefined, () => undefined)
      .with("", () => ({ externalReference: null }))
      .otherwise(externalReference => ({ externalReference })),
  };
};
