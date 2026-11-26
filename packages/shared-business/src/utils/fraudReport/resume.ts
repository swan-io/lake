import { Array, Option } from "@bloodyowl/boxed";
import { match } from "ts-pattern";
import { FraudReportLayoutStep, getDetailsSteps } from "./stepper";
import { FraudReportFormValues, toFilled, toFilledList } from "./toInput";
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
export const getResumeStep = (values: FraudReportFormValues): FraudReportResumeStep => {
  if (values.transactions.length === 0) {
    return "Transactions";
  }

  const isIncidentAnswered =
    values.reportedReason != null &&
    values.reportedTypology != null &&
    toFilled(values.description).isSome();

  if (!isIncidentAnswered) {
    return "Incident";
  }

  return Array.findMap(getDetailsSteps(values), step =>
    isDetailsStepAnswered(step, values) ? Option.None() : Option.Some<FraudReportResumeStep>(step),
  ).getOr("Documents");
};
