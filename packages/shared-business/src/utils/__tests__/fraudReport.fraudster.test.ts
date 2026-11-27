import { describe, expect, test } from "vitest";
import { getSharedInformationChoice, toSharedInformation } from "../fraudReport/fraudster";

describe("getSharedInformationChoice", () => {
  test.each([undefined, []])("leaves the question unanswered for %j", shared => {
    expect(getSharedInformationChoice(shared)).toEqual({ answer: undefined, items: [] });
  });

  test("answers No when nothing was shared", () => {
    expect(getSharedInformationChoice(["None"])).toEqual({ answer: "No", items: [] });
    expect(getSharedInformationChoice(["None", "CardDetails"])).toEqual({
      answer: "No",
      items: [],
    });
  });

  test("answers Yes with what was shared", () => {
    expect(getSharedInformationChoice(["VerificationCode", "CardDetails"])).toEqual({
      answer: "Yes",
      items: ["VerificationCode", "CardDetails"],
    });
  });
});

describe("toSharedInformation", () => {
  test("sends None for No, even with items picked before", () => {
    expect(toSharedInformation({ answer: "No", items: ["CardDetails"] })).toEqual(["None"]);
  });

  test("sends what was shared for Yes", () => {
    expect(toSharedInformation({ answer: "Yes", items: ["SwanPasscode", "BankDetails"] })).toEqual([
      "SwanPasscode",
      "BankDetails",
    ]);
  });

  test("leaves the answer empty for Yes with nothing picked, or no answer", () => {
    expect(toSharedInformation({ answer: "Yes", items: [] })).toBeUndefined();
    expect(toSharedInformation({ answer: undefined, items: ["CardDetails"] })).toBeUndefined();
  });
});
