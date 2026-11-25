import { describe, expect, test } from "vitest";
import { getDetailsSteps, getFraudReportStepper } from "../fraudReport/stepper";

const getLabel = (step: string) => step.toUpperCase();

const card = { rail: "Card" } as const;
const transfer = { rail: "Transfer" } as const;

describe("getDetailsSteps", () => {
  test.each([
    { name: "nothing selected", transactions: [], reportedReason: undefined, steps: [] },
    { name: "a card", transactions: [card], reportedReason: "Unauthorized", steps: ["Card"] },
    {
      name: "a transfer",
      transactions: [transfer],
      reportedReason: "Unauthorized",
      steps: ["Transfer"],
    },
    {
      name: "a transfer, with a fraudster",
      transactions: [transfer],
      reportedReason: "Manipulated",
      steps: ["Transfer", "Fraudster"],
    },
    {
      name: "a transfer and a card, with a fraudster",
      transactions: [transfer, card],
      reportedReason: "Manipulated",
      steps: ["Card", "Transfer", "Fraudster"],
    },
  ] as const)("goes through $steps for $name", ({ transactions, reportedReason, steps }) => {
    expect(getDetailsSteps({ transactions: [...transactions], reportedReason })).toEqual(steps);
  });
});

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
  });

  test.each([
    { activeStep: "Victim", position: 1 },
    { activeStep: "Incident", position: 3 },
    { activeStep: "Card", position: 4 },
    { activeStep: "Transfer", position: 4 },
    { activeStep: "Documents", position: 5 },
    { activeStep: "Submitted", position: 6 },
  ] as const)("places $activeStep at $position of 6", ({ activeStep, position }) => {
    const stepper = getFraudReportStepper({
      activeStep,
      detailsSteps: ["Card", "Transfer"],
      getLabel,
    });

    expect(stepper.activeStepId).toBe(activeStep);
    expect(stepper.position).toBe(position);
    expect(stepper.total).toBe(6);
  });
});
