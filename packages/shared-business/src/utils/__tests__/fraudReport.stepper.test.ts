import { describe, expect, test } from "vitest";
import { getFraudReportStepper } from "../fraudReport/stepper";

const getLabel = (step: string) => step.toUpperCase();

describe("getFraudReportStepper", () => {
  test("lists the six steps, with one bar per Details sub-step", () => {
    const stepper = getFraudReportStepper({
      activeStep: "Victim",
      detailsSteps: ["Card", "Transfer"],
      getLabel,
    });

    expect(stepper.steps).toEqual([
      { id: "Victim", label: "VICTIM" },
      { id: "Transactions", label: "TRANSACTIONS" },
      { id: "Incident", label: "INCIDENT" },
      {
        label: "DETAILS",
        children: [
          { id: "Card", label: "DETAILS" },
          { id: "Transfer", label: "DETAILS" },
        ],
      },
      { id: "Documents", label: "DOCUMENTS" },
      { id: "Submitted", label: "SUBMITTED" },
    ]);
  });

  test("draws Details as a single step when there is no sub-step", () => {
    const stepper = getFraudReportStepper({ activeStep: "Victim", detailsSteps: [], getLabel });

    expect(stepper.steps[3]).toEqual({ id: "Details", label: "DETAILS" });
  });

  test("orders the sub-steps for display and drops duplicates", () => {
    const stepper = getFraudReportStepper({
      activeStep: "Victim",
      detailsSteps: ["Fraudster", "Card", "Card"],
      getLabel,
    });

    expect(stepper.steps[3]).toEqual({
      label: "DETAILS",
      children: [
        { id: "Card", label: "DETAILS" },
        { id: "Fraudster", label: "DETAILS" },
      ],
    });
  });

  test("adds the active sub-step when the list misses it", () => {
    const stepper = getFraudReportStepper({
      activeStep: "Card",
      detailsSteps: ["Transfer", "Fraudster"],
      getLabel,
    });

    expect(stepper.steps[3]).toEqual({
      label: "DETAILS",
      children: [
        { id: "Card", label: "DETAILS" },
        { id: "Transfer", label: "DETAILS" },
        { id: "Fraudster", label: "DETAILS" },
      ],
    });
    expect(stepper.progress).toBeCloseTo((3 + 1 / 3) / 6);
  });

  test.each([
    { activeStep: "Victim", label: "VICTIM", position: 1, progress: 1 / 6 },
    { activeStep: "Incident", label: "INCIDENT", position: 3, progress: 3 / 6 },
    { activeStep: "Card", label: "DETAILS", position: 4, progress: (3 + 1 / 2) / 6 },
    { activeStep: "Transfer", label: "DETAILS", position: 4, progress: 4 / 6 },
    { activeStep: "Documents", label: "DOCUMENTS", position: 5, progress: 5 / 6 },
    { activeStep: "Submitted", label: "SUBMITTED", position: 6, progress: 1 },
  ] as const)(
    "places $activeStep at $position of 6, labelled $label",
    ({ activeStep, label, position, progress }) => {
      const stepper = getFraudReportStepper({
        activeStep,
        detailsSteps: ["Card", "Transfer"],
        getLabel,
      });

      expect(stepper.activeStepId).toBe(activeStep);
      expect(stepper.currentLabel).toBe(label);
      expect(stepper.position).toBe(position);
      expect(stepper.total).toBe(6);
      expect(stepper.progress).toBeCloseTo(progress);
    },
  );

  test("places a sub-step by its rank among the selected sub-steps", () => {
    const stepper = getFraudReportStepper({
      activeStep: "Fraudster",
      detailsSteps: ["Card", "Fraudster"],
      getLabel,
    });

    expect(stepper.progress).toBeCloseTo(4 / 6);
  });
});
