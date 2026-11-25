import { TopLevelStep } from "@swan-io/lake/src/components/LakeStepper";
import { match } from "ts-pattern";
import {
  FraudReportDetailsStep,
  FraudReportStep,
  fraudReportDetailsSteps,
  fraudReportSteps,
} from "./types";

export type FraudReportStepperStep = Exclude<FraudReportStep, "Intro">;

export type FraudReportLayoutStep =
  | Exclude<FraudReportStepperStep, "Details">
  | FraudReportDetailsStep;

const stepperSteps = fraudReportSteps.filter(
  (step): step is FraudReportStepperStep => step !== "Intro",
);

export const getFraudReportStepper = ({
  activeStep,
  detailsSteps,
  getLabel,
}: {
  activeStep: FraudReportLayoutStep;
  detailsSteps: readonly FraudReportDetailsStep[];
  getLabel: (step: FraudReportStepperStep) => string;
}) => {
  const subSteps = fraudReportDetailsSteps.filter(
    step => step === activeStep || detailsSteps.includes(step),
  );

  const currentStep = match(activeStep)
    .returnType<FraudReportStepperStep>()
    .with("Card", "Transfer", "Fraudster", () => "Details")
    .with("Victim", "Transactions", "Incident", "Documents", "Submitted", step => step)
    .exhaustive();

  return {
    steps: stepperSteps.map(
      (step): TopLevelStep =>
        step === "Details" && subSteps.length > 0
          ? { label: getLabel(step), children: subSteps.map(id => ({ id, label: getLabel(step) })) }
          : { id: step, label: getLabel(step) },
    ),
    activeStepId: activeStep,
    position: stepperSteps.indexOf(currentStep) + 1,
    total: stepperSteps.length,
  };
};
