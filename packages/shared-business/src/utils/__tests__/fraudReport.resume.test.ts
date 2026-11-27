import { describe, expect, test } from "vitest";
import { getResumeStep } from "../fraudReport/resume";
import type { FraudReportFormValues } from "../fraudReport/toInput";
import type { FraudReportTransaction } from "../fraudReport/types";

const card: FraudReportTransaction = { id: "card-1", rail: "Card" };
const transfer: FraudReportTransaction = { id: "transfer-1", rail: "Transfer" };

const incident: Partial<FraudReportFormValues> = {
  reportedReason: "Unauthorized",
  reportedTypology: "Other",
  description: "Payments I didn't make",
};

describe("getResumeStep", () => {
  test("opens the transactions step when none of the case's transactions is visible", () => {
    expect(getResumeStep({ transactions: [], ...incident })).toBe("Transactions");
  });

  test("opens the transactions step when the draft doesn't hold every start transaction", () => {
    const values: FraudReportFormValues = { transactions: [card], ...incident };

    expect(getResumeStep(values, ["card-1", "transfer-1"])).toBe("Transactions");
    expect(getResumeStep(values, ["card-1"])).toBe("Card");
    expect(getResumeStep({ ...values, transactions: [card, transfer] }, ["transfer-1"])).toBe(
      "Card",
    );
  });

  test.each<{ name: string; values: Partial<FraudReportFormValues> }>([
    { name: "no answer", values: {} },
    { name: "no reason", values: { ...incident, reportedReason: undefined } },
    { name: "no type of fraud", values: { ...incident, reportedTypology: undefined } },
    { name: "a blank description", values: { ...incident, description: "  " } },
  ])("opens the incident step with $name", ({ values }) => {
    expect(getResumeStep({ transactions: [card], ...values })).toBe("Incident");
  });

  test("opens the card sub-step until lost or stolen is answered", () => {
    expect(getResumeStep({ transactions: [card], ...incident })).toBe("Card");
    expect(getResumeStep({ transactions: [card], ...incident, isLostOrStolen: false })).toBe(
      "Documents",
    );
  });

  test("skips the transfer sub-step, which has no answer to give", () => {
    expect(getResumeStep({ transactions: [transfer], ...incident })).toBe("Documents");
  });

  test.each<{ name: string; values: Partial<FraudReportFormValues> }>([
    { name: "only the shared information", values: { sharedInformationWithFraudster: ["None"] } },
    { name: "only the channels", values: { fraudsterChannels: ["Phone"] } },
  ])("skips the fraudster sub-step answered with $name", ({ values }) => {
    expect(
      getResumeStep({
        transactions: [transfer],
        ...incident,
        reportedReason: "Manipulated",
        ...values,
      }),
    ).toBe("Documents");
  });

  test.each<{ name: string; values: Partial<FraudReportFormValues> }>([
    { name: "no answer", values: {} },
    { name: "empty lists", values: { fraudsterChannels: [], sharedInformationWithFraudster: [] } },
  ])("opens the fraudster sub-step with $name", ({ values }) => {
    expect(
      getResumeStep({
        transactions: [transfer],
        ...incident,
        reportedReason: "Manipulated",
        ...values,
      }),
    ).toBe("Fraudster");
  });

  test("opens the first unanswered sub-step, in the order of the Details sub-steps", () => {
    expect(
      getResumeStep({ transactions: [transfer, card], ...incident, reportedReason: "Manipulated" }),
    ).toBe("Card");
    expect(
      getResumeStep({
        transactions: [transfer, card],
        ...incident,
        reportedReason: "Manipulated",
        isLostOrStolen: true,
      }),
    ).toBe("Fraudster");
  });

  test("opens the documents step when every step is answered", () => {
    expect(
      getResumeStep({
        transactions: [transfer, card],
        ...incident,
        reportedReason: "Manipulated",
        isLostOrStolen: true,
        fraudsterChannels: ["Phone"],
        sharedInformationWithFraudster: ["None"],
      }),
    ).toBe("Documents");
  });
});
