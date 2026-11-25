import { Future, Result } from "@bloodyowl/boxed";
import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import type { FraudReportApi } from "../../utils/fraudReport/api";
import {
  createFakeFraudReportApi,
  FakeFraudReportApiConfig,
} from "../../utils/fraudReport/fakeApi";
import type { FraudReportFormValues } from "../../utils/fraudReport/toInput";
import type { FraudReportTransaction } from "../../utils/fraudReport/types";
import { FraudReportFlowApi, useFraudReportFlow } from "../useFraudReportFlow";

const card: FraudReportTransaction = { id: "card-1", rail: "Card" };
const transfer: FraudReportTransaction = { id: "transfer-1", rail: "Transfer" };

const incident: Partial<FraudReportFormValues> = {
  reportedReason: "Unauthorized",
  reportedTypology: "Other",
  description: "Payments I didn't make",
};

type Call = { name: keyof FraudReportFlowApi; input: unknown };

const setup = (config: Partial<FakeFraudReportApiConfig> = {}) => {
  const fake: FraudReportApi = createFakeFraudReportApi({
    transactions: [
      {
        id: "card-1",
        accountId: "account-1",
        rail: "Card",
        cardholderAccountMembershipId: "member-1",
      },
      { id: "transfer-1", accountId: "account-1", rail: "Transfer" },
    ],
    accountMemberships: [
      { id: "member-1", accountId: "account-1" },
      { id: "member-2", accountId: "account-1" },
    ],
    ...config,
  });

  const calls: Call[] = [];

  const api: FraudReportFlowApi = {
    draft: input => {
      calls.push({ name: "draft", input });
      return fake.draft(input);
    },
    update: input => {
      calls.push({ name: "update", input });
      return fake.update(input);
    },
    submit: input => {
      calls.push({ name: "submit", input });
      return fake.submit(input);
    },
  };

  const { result } = renderHook(() => useFraudReportFlow({ api }));

  return {
    result,
    fake,
    calls,
    callNames: () => calls.map(({ name }) => name),
    next: (values?: Partial<FraudReportFormValues>) => act(() => result.current.next(values)),
    previous: () => act(() => result.current.previous()),
  };
};

type Flow = ReturnType<typeof setup>;

const startReport = (
  flow: Flow,
  { victim, transactions }: { victim: string; transactions: FraudReportTransaction[] },
) => {
  flow.next();
  flow.next({ victimAccountMembershipId: victim });
  flow.next({ transactions });
};

afterEach(() => {
  vi.useRealTimers();
});

describe("step moves", () => {
  test("walks a card-only report from the intro to the submitted step", () => {
    const flow = setup();
    const steps = [flow.result.current.step];

    for (const values of [
      undefined,
      { victimAccountMembershipId: "member-1" },
      { transactions: [card] },
      incident,
      { isLostOrStolen: true },
      undefined,
    ]) {
      flow.next(values);
      steps.push(flow.result.current.step);
    }

    expect(steps).toEqual([
      "Intro",
      "Victim",
      "Transactions",
      "Incident",
      "Card",
      "Documents",
      "Submitted",
    ]);
  });

  test("goes through every Details sub-step of the report, both ways", () => {
    const flow = setup();
    startReport(flow, { victim: "member-2", transactions: [transfer, card] });
    flow.next({ ...incident, reportedReason: "Manipulated" });

    const forward = [];
    for (let index = 0; index < 4 && flow.result.current.step !== "Documents"; index++) {
      forward.push(flow.result.current.step);
      flow.next();
    }

    const backward = [];
    for (let index = 0; index < 4 && flow.result.current.step !== "Incident"; index++) {
      flow.previous();
      backward.push(flow.result.current.step);
    }

    expect(forward).toEqual(["Card", "Transfer", "Fraudster"]);
    expect(backward).toEqual(["Fraudster", "Transfer", "Card", "Incident"]);
    expect(flow.result.current.detailsSteps).toEqual(["Card", "Transfer", "Fraudster"]);
  });

  test("goes back one step at a time without calling the API", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    flow.next(incident);
    const callsBefore = flow.callNames();

    const steps = [flow.result.current.step];
    for (let index = 0; index < 5; index++) {
      flow.previous();
      steps.push(flow.result.current.step);
    }

    expect(steps).toEqual(["Card", "Incident", "Transactions", "Victim", "Intro", "Intro"]);
    expect(flow.callNames()).toEqual(callsBefore);
  });

  test("keeps the values entered on a step when the user goes back to it", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    flow.next(incident);
    flow.previous();

    expect(flow.result.current.values).toEqual({
      transactions: [card],
      victimAccountMembershipId: "member-1",
      ...incident,
    });
  });
});

describe("API calls", () => {
  test("calls nothing before the transactions are confirmed, then drafts once and updates once per step", () => {
    const flow = setup();
    flow.next();
    flow.next({ victimAccountMembershipId: "member-2" });
    expect(flow.callNames()).toEqual([]);

    flow.next({ transactions: [transfer] });
    expect(flow.callNames()).toEqual(["draft"]);

    flow.next({ ...incident, reportedReason: "Manipulated" });
    flow.next();
    flow.next({ fraudsterChannels: ["Phone"] });
    expect(flow.callNames()).toEqual(["draft", "update", "update", "update"]);

    flow.next();
    expect(flow.callNames()).toEqual(["draft", "update", "update", "update", "submit"]);
  });

  test("updates the draft when the selection changes after it exists", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    flow.previous();
    flow.next({ transactions: [card, transfer] });

    expect(flow.calls).toEqual([
      { name: "draft", input: { transactionIds: ["card-1"] } },
      {
        name: "update",
        input: expect.objectContaining({ transactionIds: ["card-1", "transfer-1"] }),
      },
    ]);
    expect(flow.result.current.step).toBe("Incident");
    expect(flow.result.current.detailsSteps).toEqual(["Card", "Transfer"]);

    flow.next(incident);
    expect(flow.calls.at(-1)?.input).not.toHaveProperty("transactionIds");
  });

  test("leaves the transaction IDs out of an update when the selection didn't change", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    flow.next(incident);

    expect(flow.calls.at(-1)?.name).toBe("update");
    expect(flow.calls.at(-1)?.input).not.toHaveProperty("transactionIds");
  });

  test("sends the new selection again when its update failed", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    flow.previous();
    vi.spyOn(flow.fake, "update").mockReturnValueOnce(
      Future.value(Result.Error({ kind: "error" as const, error: new Error("Network error") })),
    );

    flow.next({ transactions: [card, transfer] });
    flow.next({ transactions: [card, transfer] });

    expect(flow.calls.at(-1)?.input).toHaveProperty("transactionIds", ["card-1", "transfer-1"]);
  });

  test("shows the call as pending and ignores Next and Previous until it ends", () => {
    vi.useFakeTimers();
    const flow = setup({ delay: 100 });
    startReport(flow, { victim: "member-1", transactions: [card] });

    expect(flow.result.current.saving).toBe(true);
    expect(flow.result.current.step).toBe("Transactions");

    flow.next({ transactions: [card] });
    flow.previous();
    expect(flow.callNames()).toEqual(["draft"]);
    expect(flow.result.current.step).toBe("Transactions");

    const nextWhileSaving = flow.result.current.next;
    const previousWhileSaving = flow.result.current.previous;
    act(() => vi.advanceTimersByTime(100));
    expect(flow.result.current.saving).toBe(false);
    expect(flow.result.current.step).toBe("Incident");

    act(() => nextWhileSaving({ transactions: [card] }));
    expect(flow.callNames()).toEqual(["draft"]);

    act(() => previousWhileSaving());
    expect(flow.result.current.step).toBe("Incident");
  });

  test("ignores a Next called after a call ends but before the hook re-renders", () => {
    vi.useFakeTimers();
    const flow = setup({ delay: 100 });
    startReport(flow, { victim: "member-1", transactions: [card] });

    act(() => {
      vi.advanceTimersByTime(100);
      flow.result.current.next({ transactions: [card] });
    });

    expect(flow.callNames()).toEqual(["draft"]);
  });

  test("ignores a Previous called right after Next, before the hook re-renders", () => {
    vi.useFakeTimers();
    const flow = setup({ delay: 100 });
    flow.next();
    flow.next({ victimAccountMembershipId: "member-1" });

    act(() => {
      flow.result.current.next({ transactions: [card] });
      flow.result.current.previous();
    });

    expect(flow.result.current.step).toBe("Transactions");
  });

  test("ignores a second Next called before the first one re-renders", () => {
    vi.useFakeTimers();
    const flow = setup({ delay: 100 });
    flow.next();
    flow.next({ victimAccountMembershipId: "member-1" });

    act(() => {
      flow.result.current.next({ transactions: [card] });
      flow.result.current.next({ transactions: [card] });
    });

    expect(flow.callNames()).toEqual(["draft"]);
  });
});

describe("victim", () => {
  test("exposes the victim only in the values, and the case ID once the draft exists", () => {
    const flow = setup();
    flow.next();
    flow.next({ victimAccountMembershipId: "member-2" });

    expect(flow.result.current.disputeCaseId.isNone()).toBe(true);

    flow.next({ transactions: [transfer] });

    expect(flow.result.current.disputeCaseId.isSome()).toBe(true);
    expect(flow.result.current).not.toHaveProperty("victimAccountMembershipId");
  });

  test("keeps the victim once the draft exists", () => {
    const flow = setup();
    startReport(flow, { victim: "member-2", transactions: [transfer] });
    flow.previous();
    flow.previous();
    expect(flow.result.current.step).toBe("Victim");
    expect(flow.result.current.values.victimAccountMembershipId).toBe("member-2");

    flow.next({ victimAccountMembershipId: "member-1" });
    flow.next({ transactions: [transfer] });

    expect(flow.result.current.values.victimAccountMembershipId).toBe("member-2");
    expect(flow.calls.at(-1)).toEqual({
      name: "update",
      input: expect.objectContaining({ victimAccountMembershipId: "member-2" }),
    });
  });

  test("sends the victim on a transfer-only case", () => {
    const flow = setup();
    startReport(flow, { victim: "member-2", transactions: [transfer] });

    expect(flow.calls).toEqual([
      {
        name: "draft",
        input: { transactionIds: ["transfer-1"], victimAccountMembershipId: "member-2" },
      },
    ]);
  });
});

describe("submit and errors", () => {
  test("submits on the documents step and keeps the case ID for the submitted step", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    const disputeCaseId = flow.result.current.disputeCaseId.toUndefined();
    flow.next(incident);
    flow.next();
    flow.next();

    expect(flow.result.current.step).toBe("Submitted");
    expect(flow.calls.at(-1)).toEqual({ name: "submit", input: { disputeCaseId } });
    expect(flow.result.current.disputeCaseId.toUndefined()).toBe(disputeCaseId);

    flow.previous();
    flow.next();
    expect(flow.result.current.step).toBe("Submitted");
    expect(flow.callNames()).toEqual(["draft", "update", "update", "submit"]);
  });

  test("stays on the step and exposes a rejection, until a Next succeeds", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [{ id: "unknown", rail: "Card" }] });

    expect(flow.result.current.step).toBe("Transactions");
    expect(flow.result.current.error.toUndefined()).toEqual({
      kind: "rejection",
      rejection: expect.objectContaining({
        __typename: "DisputeCaseTransactionsNotFoundRejection",
      }),
    });

    flow.next({ transactions: [card] });

    expect(flow.result.current.step).toBe("Incident");
    expect(flow.result.current.error.isNone()).toBe(true);
  });

  test("stays on the documents step when the submit is rejected", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    flow.next();
    flow.next();
    flow.next();

    expect(flow.result.current.step).toBe("Documents");
    expect(flow.result.current.error.toUndefined()).toEqual({
      kind: "rejection",
      rejection: expect.objectContaining({ __typename: "DisputeCaseIncompleteRejection" }),
    });
  });

  test("stays on the step and exposes an error, cleared when going back", () => {
    const error = new Error("Network error");
    const flow = setup();
    vi.spyOn(flow.fake, "draft").mockReturnValue(
      Future.value(Result.Error({ kind: "error" as const, error })),
    );
    startReport(flow, { victim: "member-1", transactions: [card] });

    expect(flow.result.current.step).toBe("Transactions");
    expect(flow.result.current.error.toUndefined()).toEqual({ kind: "error", error });
    expect(flow.result.current.saving).toBe(false);

    flow.previous();
    expect(flow.result.current.error.isNone()).toBe(true);
  });
});
