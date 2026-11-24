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

  const current = match(activeStep)
    .returnType<{ step: FraudReportStepperStep; subStepIndex: number; subStepCount: number }>()
    .with("Card", "Transfer", "Fraudster", step => ({
      step: "Details",
      subStepIndex: subSteps.indexOf(step),
      subStepCount: subSteps.length,
    }))
    .with("Victim", "Transactions", "Incident", "Documents", "Submitted", step => ({
      step,
      subStepIndex: 0,
      subStepCount: 1,
    }))
    .exhaustive();

  const index = stepperSteps.indexOf(current.step);

  return {
    steps: stepperSteps.map(
      (step): TopLevelStep =>
        step === "Details" && subSteps.length > 0
          ? { label: getLabel(step), children: subSteps.map(id => ({ id, label: getLabel(step) })) }
          : { id: step, label: getLabel(step) },
    ),
    activeStepId: activeStep,
    currentLabel: getLabel(current.step),
    position: index + 1,
    total: stepperSteps.length,
    progress: (index + (current.subStepIndex + 1) / current.subStepCount) / stepperSteps.length,
  };
};
