import { Array, Option } from "@bloodyowl/boxed";
import { match, P } from "ts-pattern";
import type { FraudReportLayoutStep } from "./stepper";
import {
  type DisputeCaseFieldPath,
  type FraudReportDetailsStep,
  type FraudReportRejection,
  fraudReportDetailsSteps,
} from "./types";

type FixingStep = Exclude<FraudReportLayoutStep, "Submitted" | "Documents">;

export type FraudReportRejectionStep = FixingStep | "Submitted" | "Rejected";

export type FraudReportRejectionContext = {
  // The Details sub-steps the user's flow goes through
  detailsSteps: readonly FraudReportDetailsStep[];
  victimRejectedBefore: boolean;
};

const fixingSteps: FixingStep[] = [
  "Victim",
  "Transactions",
  "Incident",
  ...fraudReportDetailsSteps,
];

// A sub-step missing from the flow is fixed where the choice that adds it is made
const getDetailsStep = (
  step: FraudReportDetailsStep,
  { detailsSteps }: FraudReportRejectionContext,
): FixingStep =>
  detailsSteps.includes(step)
    ? step
    : match(step)
        .returnType<FixingStep>()
        .with("Fraudster", () => "Incident")
        .with("Card", "Transfer", () => "Transactions")
        .exhaustive();

// Only fields with an input in the form map to a step: going back can't fix the others
const getFieldStep = (
  { path }: DisputeCaseFieldPath,
  context: FraudReportRejectionContext,
): Option<FixingStep> =>
  match(path)
    .returnType<Option<FixingStep>>()
    .with(["victimAccountMembershipId"], () => Option.Some("Victim"))
    .with(["transactionIds"], () => Option.Some("Transactions"))
    .with(["fraudDetails", P.union("fraudsterChannels", "sharedInformationWithFraudster")], () =>
      Option.Some(getDetailsStep("Fraudster", context)),
    )
    .with(
      ["fraudDetails"],
      [
        "fraudDetails",
        P.union(
          "reportedReason",
          "reportedTypology",
          "description",
          "discoveredAt",
          "discoveryDetails",
        ),
      ],
      () => Option.Some("Incident"),
    )
    .with(
      ["fraudCardDetails"],
      ["fraudCardDetails", P.union("isLostOrStolen", "lostOrStolenNoticedAt")],
      () => Option.Some(getDetailsStep("Card", context)),
    )
    .otherwise(() => Option.None());

const getEarliestStep = (
  fields: DisputeCaseFieldPath[],
  context: FraudReportRejectionContext,
): FraudReportRejectionStep => {
  const steps = Array.filterMap(fields, field => getFieldStep(field, context));
  return fixingSteps.find(step => steps.includes(step)) ?? "Rejected";
};

export const getRejectionStep = (
  rejection: FraudReportRejection,
  context: FraudReportRejectionContext,
): FraudReportRejectionStep =>
  match(rejection)
    .returnType<FraudReportRejectionStep>()
    .with({ __typename: "AccountMembershipNotFoundRejection" }, () =>
      context.victimRejectedBefore ? "Rejected" : "Victim",
    )
    .with(
      {
        __typename: P.union(
          "DisputeCaseTransactionsNotFoundRejection",
          "DisputeCaseTransactionsNotReportableRejection",
          "DisputeCaseTransactionsLimitExceededRejection",
          "DisputeCaseMultipleAccountsRejection",
          "DisputeCaseMultipleCardHoldersRejection",
          // Details that don't apply come from the selection: changing it is the fix
          "DisputeCaseDetailsNotApplicableRejection",
        ),
      },
      () => "Transactions",
    )
    .with({ __typename: "DisputeCaseIncompleteRejection" }, ({ missingFields }) =>
      getEarliestStep(missingFields, context),
    )
    // Submitted elsewhere (another tab, an operator): the report reached Swan
    .with(
      { __typename: "DisputeCaseWrongStatusRejection", currentStatus: "Submitted" },
      () => "Submitted",
    )
    .with(
      {
        __typename: P.union(
          "DisputeCaseTransactionsAlreadyReportedRejection",
          "DisputeCaseTransactionsOutsideReportingWindowRejection",
          "DisputeCaseWrongStatusRejection",
          "DisputeCaseNotFoundRejection",
        ),
      },
      () => "Rejected",
    )
    .exhaustive();
