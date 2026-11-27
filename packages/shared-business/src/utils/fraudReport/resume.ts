import { Array, Option } from "@bloodyowl/boxed";
import { match } from "ts-pattern";
import { FraudReportLayoutStep, getDetailsSteps } from "./stepper";
import {
  FraudReportFormValues,
  toFilledList,
  toRequiredFraudDetails,
  toTransactionIds,
} from "./toInput";
import type { FraudReportDetailsStep } from "./types";

export type FraudReportResumeStep = Exclude<FraudReportLayoutStep, "Victim" | "Submitted">;

const isDetailsStepAnswered = (step: FraudReportDetailsStep, values: FraudReportFormValues) =>
  match(step)
    .with("Card", () => values.isLostOrStolen != null)
    // The transfer sub-step has no form field yet
    .with("Transfer", () => true)
    .with(
      "Fraudster",
      () =>
        toFilledList(values.fraudsterChannels).isSome() &&
        toFilledList(values.sharedInformationWithFraudster).isSome(),
    )
    .exhaustive();

// The victim can't change once the draft exists, so a resumed report never opens on it
export const getResumeStep = (
  values: FraudReportFormValues,
  // The transactions the report was opened from
  startTransactionIds: string[] = [],
): FraudReportResumeStep => {
  const draftTransactionIds = new Set(toTransactionIds(values));

  // A draft is found from one of the start transactions: the user adds the ones it doesn't hold
  if (
    draftTransactionIds.size === 0 ||
    startTransactionIds.some(id => !draftTransactionIds.has(id))
  ) {
    return "Transactions";
  }

  if (toRequiredFraudDetails(values).isNone()) {
    return "Incident";
  }

  return Array.findMap(getDetailsSteps(values), step =>
    isDetailsStepAnswered(step, values) ? Option.None() : Option.Some<FraudReportResumeStep>(step),
  ).getOr("Documents");
};
