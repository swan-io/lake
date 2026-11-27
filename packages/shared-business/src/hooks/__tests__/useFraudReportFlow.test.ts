import { Future, Result } from "@bloodyowl/boxed";
import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import type { FraudReportApi } from "../../utils/fraudReport/api";
import {
  createFakeFraudReportApi,
  createFakeTransaction,
  FakeFraudReportApiConfig,
  FakeTransaction,
} from "../../utils/fraudReport/fakeApi";
import type { FraudReportFormValues } from "../../utils/fraudReport/toInput";
import type {
  FraudReportCase,
  FraudReportRejection,
  FraudReportTransaction,
} from "../../utils/fraudReport/types";
import {
  DRAFT_LOOKUP_TIMEOUT_MS,
  FraudReportFlowApi,
  FraudReportResumeFrom,
  useFraudReportFlow,
} from "../useFraudReportFlow";

const card = createFakeTransaction("card-1", "CardOutDebit");
const transfer = createFakeTransaction("transfer-1", "SepaCreditTransferOut");

const incident: Partial<FraudReportFormValues> = {
  reportedReason: "Unauthorized",
  reportedTypology: "Other",
  description: "Payments I didn't make",
};

type Call = { name: keyof FraudReportFlowApi; input: unknown };

const seededTransactions = (): FakeTransaction[] => [
  {
    id: "card-1",
    accountId: "account-1",
    type: "CardOutDebit",
    cardholderAccountMembershipId: "member-1",
  },
  { id: "transfer-1", accountId: "account-1", type: "SepaCreditTransferOut" },
];

const setup = (
  config: Partial<FakeFraudReportApiConfig> = {},
  {
    fake = createFakeFraudReportApi({
      transactions: seededTransactions(),
      accountMemberships: [
        { id: "member-1", accountId: "account-1" },
        { id: "member-2", accountId: "account-1" },
      ],
      ...config,
    }),
    resumeFrom,
  }: { fake?: FraudReportApi; resumeFrom?: FraudReportResumeFrom } = {},
) => {
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
    cancel: input => {
      calls.push({ name: "cancel", input });
      return fake.cancel(input);
    },
    findDrafts: input => {
      calls.push({ name: "findDrafts", input });
      return fake.findDrafts(input);
    },
  };

  const onExit = vi.fn();
  const { result, unmount } = renderHook(() => useFraudReportFlow({ api, onExit, resumeFrom }));

  return {
    result,
    fake,
    calls,
    onExit,
    unmount,
    callNames: () => calls.map(({ name }) => name),
    next: (values?: Partial<FraudReportFormValues>) => act(() => result.current.next(values)),
    previous: () => act(() => result.current.previous()),
    cancel: () => act(() => result.current.cancel()),
    resume: () => act(() => result.current.resume()),
    startOver: () => act(() => result.current.startOver()),
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

  test("changes the victim once the draft exists, without the previous victim's card transactions", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card, transfer] });
    flow.previous();
    flow.previous();
    expect(flow.result.current.step).toBe("Victim");

    flow.next({ victimAccountMembershipId: "member-2" });

    expect(flow.result.current.step).toBe("Transactions");
    expect(flow.result.current.values.victimAccountMembershipId).toBe("member-2");
    expect(flow.result.current.values.transactions).toEqual([transfer]);
    expect(flow.callNames()).toEqual(["draft"]);

    flow.next({ transactions: [transfer] });

    expect(flow.result.current.error.isNone()).toBe(true);
    expect(flow.calls.at(-1)).toEqual({
      name: "update",
      input: expect.objectContaining({
        transactionIds: ["transfer-1"],
        victimAccountMembershipId: "member-2",
      }),
    });
  });

  test("leaves no transaction selected when the previous victim only had card transactions", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    flow.previous();
    flow.previous();

    flow.next({ victimAccountMembershipId: "member-2" });

    expect(flow.result.current.step).toBe("Transactions");
    expect(flow.result.current.values.transactions).toEqual([]);
    expect(flow.callNames()).toEqual(["draft"]);
  });

  test("clears the previous victim's card answers when the victim changes", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card, transfer] });
    flow.next(incident);
    flow.next({ isLostOrStolen: true, lostOrStolenNoticedAt: "2026-11-01" });
    while (flow.result.current.step !== "Victim") {
      flow.previous();
    }

    flow.next({ victimAccountMembershipId: "member-2" });

    expect(flow.result.current.values).toMatchObject(incident);
    expect(flow.result.current.values.isLostOrStolen).toBeUndefined();
    expect(flow.result.current.values.lostOrStolenNoticedAt).toBeUndefined();
  });

  test("keeps the selection when the victim stays the same", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card, transfer] });
    flow.previous();
    flow.previous();

    flow.next({ victimAccountMembershipId: "member-1" });

    expect(flow.result.current.values.transactions).toEqual([card, transfer]);
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

describe("submit", () => {
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
});

const rejected = <Rejection extends FraudReportRejection>(rejection: Rejection) =>
  Future.value(Result.Error({ kind: "rejection" as const, rejection }));

const expectRejection = (flow: Flow, rejection: Partial<FraudReportRejection>) => {
  expect(flow.result.current.error.toUndefined()).toEqual({
    kind: "rejection",
    rejection: expect.objectContaining(rejection),
  });
};

const DAY_MS = 24 * 60 * 60 * 1000;

describe("rejections", () => {
  test.each<{
    name: string;
    transactions: FakeTransaction[];
    selection: FraudReportTransaction[];
    fixedSelection: FraudReportTransaction[];
    rejection: Partial<FraudReportRejection>;
  }>([
    {
      name: "a transaction isn't found",
      transactions: seededTransactions(),
      selection: [createFakeTransaction("unknown", "CardOutDebit")],
      fixedSelection: [card],
      rejection: { __typename: "DisputeCaseTransactionsNotFoundRejection" },
    },
    {
      name: "the selection has too many transactions",
      transactions: seededTransactions(),
      selection: Array.from({ length: 101 }, (_, index) =>
        createFakeTransaction(`card-${index}`, "CardOutDebit"),
      ),
      fixedSelection: [card],
      rejection: {
        __typename: "DisputeCaseTransactionsLimitExceededRejection",
        maxTransactionCount: 100,
      },
    },
    {
      name: "a transaction can't be reported",
      transactions: [
        {
          id: "card-1",
          accountId: "account-1",
          type: "CardOutDebit",
          cardholderAccountMembershipId: "member-1",
          notReportableReason: "TransactionTypeNotReportable",
        },
        { id: "transfer-1", accountId: "account-1", type: "SepaCreditTransferOut" },
      ],
      selection: [card],
      fixedSelection: [transfer],
      rejection: { __typename: "DisputeCaseTransactionsNotReportableRejection" },
    },
    {
      name: "the transactions belong to several accounts",
      transactions: [
        ...seededTransactions(),
        { id: "transfer-2", accountId: "account-2", type: "SepaCreditTransferOut" },
      ],
      selection: [transfer, createFakeTransaction("transfer-2", "SepaCreditTransferOut")],
      fixedSelection: [transfer],
      rejection: { __typename: "DisputeCaseMultipleAccountsRejection" },
    },
    {
      name: "the cards belong to several cardholders",
      transactions: [
        ...seededTransactions(),
        {
          id: "card-2",
          accountId: "account-1",
          type: "CardOutDebit",
          cardholderAccountMembershipId: "member-2",
        },
      ],
      selection: [card, createFakeTransaction("card-2", "CardOutDebit")],
      fixedSelection: [card],
      rejection: { __typename: "DisputeCaseMultipleCardHoldersRejection" },
    },
  ])(
    "keeps the user on the transactions step when $name, until a fixed selection is sent",
    ({ transactions, selection, fixedSelection, rejection }) => {
      const flow = setup({ transactions });
      startReport(flow, { victim: "member-2", transactions: selection });

      expect(flow.result.current.step).toBe("Transactions");
      expectRejection(flow, rejection);
      expect(flow.result.current.values.transactions).toEqual(selection);

      flow.next({ transactions: fixedSelection });

      expect(flow.result.current.step).toBe("Incident");
      expect(flow.result.current.error.isNone()).toBe(true);
    },
  );

  test("goes back to the victim step when the victim isn't found before the draft", () => {
    const flow = setup();
    startReport(flow, { victim: "member-unknown", transactions: [transfer] });

    expect(flow.result.current.step).toBe("Victim");
    expectRejection(flow, { __typename: "AccountMembershipNotFoundRejection" });
    expect(flow.result.current.values).toEqual({
      victimAccountMembershipId: "member-unknown",
      transactions: [transfer],
    });

    flow.next({ victimAccountMembershipId: "member-2" });
    flow.next({ transactions: [transfer] });

    expect(flow.result.current.step).toBe("Incident");
    expect(flow.result.current.error.isNone()).toBe(true);
  });

  test("goes back to the transactions step when a transaction can no longer be reported", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    vi.spyOn(flow.fake, "update").mockReturnValueOnce(
      rejected({
        __typename: "DisputeCaseTransactionsNotReportableRejection",
        message: "Some transactions can't be reported",
        transactions: [{ transactionId: "card-1", reason: "TransactionStatusNotReportable" }],
      }),
    );

    flow.next(incident);

    expect(flow.result.current.step).toBe("Transactions");
    expectRejection(flow, { __typename: "DisputeCaseTransactionsNotReportableRejection" });
    expect(flow.result.current.values).toMatchObject(incident);
  });

  test("goes back to the transactions step when details don't apply to the selection", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    vi.spyOn(flow.fake, "update").mockReturnValueOnce(
      rejected({
        __typename: "DisputeCaseDetailsNotApplicableRejection",
        message: "Some details don't apply to this case",
        fields: [{ path: ["fraudCardDetails"] }],
      }),
    );

    flow.next(incident);

    expect(flow.result.current.step).toBe("Transactions");
    expectRejection(flow, { __typename: "DisputeCaseDetailsNotApplicableRejection" });
  });

  test("goes back to the incident step when the submitted case is incomplete", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    flow.next();
    flow.next();
    flow.next();

    expect(flow.callNames().at(-1)).toBe("submit");
    expect(flow.result.current.step).toBe("Incident");
    expectRejection(flow, {
      __typename: "DisputeCaseIncompleteRejection",
      missingFields: [{ path: ["fraudDetails"] }],
    });

    flow.next(incident);
    expect(flow.result.current.step).toBe("Card");
    expect(flow.result.current.error.isNone()).toBe(true);
  });

  test.each([
    { reportedReason: "Manipulated", detailsSteps: ["Card", "Fraudster"], step: "Fraudster" },
    { reportedReason: "Unauthorized", detailsSteps: ["Card"], step: "Incident" },
  ] as const)(
    "sends missing fraudster answers to $step when the report goes through $detailsSteps",
    ({ reportedReason, detailsSteps, step }) => {
      const flow = setup();
      startReport(flow, { victim: "member-1", transactions: [card] });
      flow.next({ ...incident, reportedReason });
      for (const detailsStep of detailsSteps) {
        expect(flow.result.current.step).toBe(detailsStep);
        flow.next();
      }
      expect(flow.result.current.step).toBe("Documents");
      vi.spyOn(flow.fake, "submit").mockReturnValueOnce(
        rejected({
          __typename: "DisputeCaseIncompleteRejection",
          message: "The case is incomplete",
          missingFields: [{ path: ["fraudDetails", "fraudsterChannels"] }],
        }),
      );

      flow.next();

      expect(flow.result.current.step).toBe(step);
      expectRejection(flow, { __typename: "DisputeCaseIncompleteRejection" });
    },
  );

  test("goes to the submitted step, with no error, when the case was submitted elsewhere", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    flow.next(incident);
    const disputeCaseId = flow.result.current.disputeCaseId.getOr("");
    act(() => {
      flow.fake.submit({ disputeCaseId });
    });

    flow.next({ isLostOrStolen: true });

    expect(flow.callNames().at(-1)).toBe("update");
    expect(flow.result.current.step).toBe("Submitted");
    expect(flow.result.current.error.isNone()).toBe(true);
    expect(flow.result.current.disputeCaseId.toUndefined()).toBe(disputeCaseId);
  });

  test.each<{
    name: string;
    config?: Partial<FakeFraudReportApiConfig>;
    run: (flow: Flow) => void;
    rejection: Partial<FraudReportRejection>;
  }>([
    {
      name: "a transaction is outside its reporting window",
      config: {
        transactions: [
          {
            id: "transfer-1",
            accountId: "account-1",
            type: "SepaCreditTransferOut",
            reportingWindowEndsAt: "2020-01-01T00:00:00.000Z",
          },
        ],
      },
      run: flow => startReport(flow, { victim: "member-2", transactions: [transfer] }),
      rejection: { __typename: "DisputeCaseTransactionsOutsideReportingWindowRejection" },
    },
    {
      name: "a transaction is already reported",
      config: { alreadyReported: [{ transactionId: "card-1", disputeCaseId: null }] },
      run: flow => {
        startReport(flow, { victim: "member-1", transactions: [card] });
        flow.next(incident);
        flow.next();
        flow.next();
      },
      rejection: { __typename: "DisputeCaseTransactionsAlreadyReportedRejection" },
    },
    {
      name: "the case isn't found",
      run: flow => {
        startReport(flow, { victim: "member-1", transactions: [card] });
        vi.spyOn(flow.fake, "update").mockReturnValueOnce(
          rejected({
            __typename: "DisputeCaseNotFoundRejection",
            message: "Dispute case not found",
            disputeCaseId: flow.result.current.disputeCaseId.getOr(""),
          }),
        );
        flow.next(incident);
      },
      rejection: { __typename: "DisputeCaseNotFoundRejection" },
    },
  ])("ends the report on the rejected step when $name", ({ config, run, rejection }) => {
    const flow = setup(config);
    run(flow);

    expect(flow.result.current.step).toBe("Rejected");
    expectRejection(flow, rejection);
  });

  test("goes back to the victim step when the victim isn't found once the draft exists", () => {
    const flow = setup({
      transactions: [
        ...seededTransactions(),
        { id: "transfer-2", accountId: "account-2", type: "SepaCreditTransferOut" },
      ],
    });
    startReport(flow, { victim: "member-2", transactions: [transfer] });
    flow.previous();
    flow.next({ transactions: [createFakeTransaction("transfer-2", "SepaCreditTransferOut")] });

    expect(flow.result.current.step).toBe("Victim");
    expectRejection(flow, { __typename: "AccountMembershipNotFoundRejection" });
  });

  test("ends the report on the rejected step when the draft expired", () => {
    let date = new Date("2026-11-26T10:00:00.000Z");
    const flow = setup({ now: () => date });
    startReport(flow, { victim: "member-1", transactions: [card] });
    date = new Date(date.getTime() + 31 * DAY_MS);

    flow.next(incident);

    expect(flow.result.current.step).toBe("Rejected");
    expectRejection(flow, {
      __typename: "DisputeCaseWrongStatusRejection",
      currentStatus: "Expired",
    });
  });

  test("stays on the rejected step with the values and the rejection, calling nothing", () => {
    const flow = setup({ alreadyReported: [{ transactionId: "card-1", disputeCaseId: null }] });
    startReport(flow, { victim: "member-1", transactions: [card] });
    flow.next(incident);
    flow.next();
    flow.next();
    const { values, error } = flow.result.current;
    const callsBefore = flow.callNames();

    flow.previous();
    flow.next({ transactions: [transfer] });

    expect(flow.result.current.step).toBe("Rejected");
    expect(flow.result.current.values).toEqual(values);
    expect(flow.result.current.error).toEqual(error);
    expect(flow.callNames()).toEqual(callsBefore);
  });
});

describe("errors", () => {
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

  test.each([
    { name: "a network error", error: new Error("Network error") },
    { name: "a FORBIDDEN error", error: new Error("FORBIDDEN") },
  ])("stays on the step and keeps the form on $name, then retries on Next", ({ error }) => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    flow.next(incident);
    vi.spyOn(flow.fake, "update").mockReturnValueOnce(
      Future.value(Result.Error({ kind: "error" as const, error })),
    );

    flow.next({ isLostOrStolen: true });

    expect(flow.result.current.step).toBe("Card");
    expect(flow.result.current.error.toUndefined()).toEqual({ kind: "error", error });
    expect(flow.result.current.values).toMatchObject({ ...incident, isLostOrStolen: true });

    flow.next({ isLostOrStolen: true });

    expect(flow.result.current.step).toBe("Documents");
    expect(flow.result.current.error.isNone()).toBe(true);
  });

  test("stays on the step and keeps the form on a BAD_USER_INPUT error, then retries on Next", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card, card] });

    expect(flow.result.current.step).toBe("Transactions");
    expect(flow.result.current.error.toUndefined()).toEqual({
      kind: "error",
      error: expect.objectContaining({ message: expect.stringContaining("BAD_USER_INPUT") }),
    });
    expect(flow.result.current.values.transactions).toEqual([card, card]);

    flow.next({ transactions: [card] });

    expect(flow.result.current.step).toBe("Incident");
  });
});

const expectReset = (flow: Flow) => {
  expect(flow.result.current).toMatchObject({ step: "Intro", values: { transactions: [] } });
  expect(flow.result.current.disputeCaseId.isNone()).toBe(true);
  expect(flow.result.current.error.isNone()).toBe(true);
};

const getStatus = (flow: Flow, disputeCaseId = "") => {
  let status: string | undefined;
  flow.fake.getCase({ disputeCaseId }).onResolve(result => {
    status = result
      .toOption()
      .flatMap(item => item)
      .toUndefined()?.statusInfo.status;
  });
  return status;
};

describe("cancel", () => {
  test("leaves without calling the API before the draft exists", () => {
    const flow = setup();
    flow.next();
    flow.next({ victimAccountMembershipId: "member-1" });

    flow.cancel();

    expect(flow.callNames()).toEqual([]);
    expect(flow.onExit).toHaveBeenCalledTimes(1);
    expectReset(flow);
  });

  test("cancels the draft through the adapter, then leaves", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    flow.next(incident);
    const disputeCaseId = flow.result.current.disputeCaseId.toUndefined();

    flow.cancel();

    expect(getStatus(flow, disputeCaseId)).toBe("Canceled");
    expect(flow.calls.at(-1)).toEqual({ name: "cancel", input: { disputeCaseId } });
    expect(flow.onExit).toHaveBeenCalledTimes(1);
    expectReset(flow);
    expect(flow.result.current.saving).toBe(false);
  });

  test("leaves when the draft was already canceled", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    flow.result.current.disputeCaseId.tapSome(disputeCaseId => {
      flow.fake.cancel({ disputeCaseId });
    });

    flow.cancel();

    expect(flow.callNames()).toEqual(["draft", "cancel"]);
    expect(flow.onExit).toHaveBeenCalledTimes(1);
    expectReset(flow);
  });

  test("moves to the submitted step without an error when the case was submitted elsewhere", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    flow.next(incident);
    flow.result.current.disputeCaseId.tapSome(disputeCaseId => {
      flow.fake.submit({ disputeCaseId });
    });

    flow.cancel();

    expect(flow.result.current.step).toBe("Submitted");
    expect(flow.result.current.error.isNone()).toBe(true);
    expect(flow.onExit).not.toHaveBeenCalled();
  });

  test("ends the report on the rejected step when the draft expired", () => {
    let date = new Date("2026-11-26T10:00:00.000Z");
    const flow = setup({ now: () => date });
    startReport(flow, { victim: "member-1", transactions: [card] });
    date = new Date(date.getTime() + 31 * DAY_MS);

    flow.cancel();

    expect(flow.result.current.step).toBe("Rejected");
    expectRejection(flow, {
      __typename: "DisputeCaseWrongStatusRejection",
      currentStatus: "Expired",
    });
    expect(flow.onExit).not.toHaveBeenCalled();
  });

  test("ends the report on the rejected step when the case isn't found", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    vi.spyOn(flow.fake, "cancel").mockReturnValueOnce(
      rejected({
        __typename: "DisputeCaseNotFoundRejection",
        disputeCaseId: "case-1",
        message: "",
      }),
    );

    flow.cancel();

    expect(flow.result.current.step).toBe("Rejected");
    expectRejection(flow, { __typename: "DisputeCaseNotFoundRejection" });
    expect(flow.onExit).not.toHaveBeenCalled();
  });

  test.each([
    { name: "a network error", error: new Error("Network error") },
    { name: "a FORBIDDEN error", error: new Error("FORBIDDEN") },
  ])("stays on the step and keeps the form on $name, then retries", ({ error }) => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    flow.next(incident);
    const disputeCaseId = flow.result.current.disputeCaseId.toUndefined();
    vi.spyOn(flow.fake, "cancel").mockReturnValueOnce(
      Future.value(Result.Error({ kind: "error" as const, error })),
    );

    flow.cancel();

    expect(flow.result.current.step).toBe("Card");
    expect(flow.result.current.error.toUndefined()).toEqual({ kind: "error", error });
    expect(flow.result.current.values).toMatchObject(incident);
    expect(flow.onExit).not.toHaveBeenCalled();

    flow.cancel();

    expect(getStatus(flow, disputeCaseId)).toBe("Canceled");
    expect(flow.result.current.error.isNone()).toBe(true);
    expect(flow.onExit).toHaveBeenCalledTimes(1);
  });

  test("does nothing while a call is pending", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    vi.spyOn(flow.fake, "update").mockReturnValueOnce(Future.make(() => {}));
    flow.next(incident);

    flow.cancel();

    expect(flow.callNames()).toEqual(["draft", "update"]);
    expect(flow.onExit).not.toHaveBeenCalled();
  });

  test("doesn't leave when the cancel ends after the flow is gone", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    let resolve: (value: Result<FraudReportCase, never>) => void = () => {};
    vi.spyOn(flow.fake, "cancel").mockReturnValueOnce(
      Future.make(resolver => {
        resolve = resolver;
      }),
    );

    flow.cancel();
    flow.unmount();
    resolve(Result.Ok({} as FraudReportCase));

    expect(flow.callNames()).toEqual(["draft", "cancel"]);
    expect(flow.onExit).not.toHaveBeenCalled();
  });

  test("clears the last error and does nothing else while a cancel is pending", () => {
    const flow = setup();
    startReport(flow, { victim: "member-1", transactions: [card] });
    vi.spyOn(flow.fake, "cancel")
      .mockReturnValueOnce(
        Future.value(Result.Error({ kind: "error" as const, error: new Error("Network error") })),
      )
      .mockReturnValueOnce(Future.make(() => {}));
    flow.cancel();

    flow.cancel();
    flow.cancel();
    flow.next(incident);

    expect(flow.callNames()).toEqual(["draft", "cancel", "cancel"]);
    expect(flow.result.current.saving).toBe(true);
    expect(flow.result.current.error.isNone()).toBe(true);
    expect(flow.onExit).not.toHaveBeenCalled();
  });

  test.each([
    {
      name: "submitted",
      config: {},
      step: "Submitted",
    },
    {
      name: "rejected",
      config: { alreadyReported: [{ transactionId: "card-1", disputeCaseId: null }] },
      step: "Rejected",
    },
  ])("leaves the $name step without calling the API", ({ config, step }) => {
    const flow = setup(config);
    startReport(flow, { victim: "member-1", transactions: [card] });
    flow.next(incident);
    flow.next({ isLostOrStolen: true });
    flow.next();
    expect(flow.result.current.step).toBe(step);
    const callsBefore = flow.callNames();

    flow.cancel();

    expect(flow.callNames()).toEqual(callsBefore);
    expect(flow.onExit).toHaveBeenCalledTimes(1);
    expectReset(flow);
  });
});

const getOfferedId = (flow: Flow) =>
  flow.result.current.resumable
    .toOption()
    .flatMap(draft => draft)
    .map(({ id }) => id)
    .toUndefined();

const fromCard: FraudReportResumeFrom = { accountId: "account-1", transactionIds: ["card-1"] };

// A draft left by an earlier visit, with the incident answered
const leaveDraft = () => {
  const earlier = setup();
  startReport(earlier, { victim: "member-1", transactions: [card] });
  earlier.next(incident);
  return earlier;
};

describe("resume", () => {
  test("starts a new report without looking for drafts when it isn't opened from a transaction", () => {
    const flow = setup();

    expect(flow.result.current.resumable.isNotAsked()).toBe(true);
    expect(flow.callNames()).toEqual([]);

    flow.next();

    expect(flow.result.current.resumable.isNotAsked()).toBe(true);
  });

  test("starts a new report when the transactions have no draft", () => {
    const flow = setup({}, { resumeFrom: fromCard });

    expect(flow.calls).toEqual([{ name: "findDrafts", input: fromCard }]);
    expect(getOfferedId(flow)).toBeUndefined();
    expect(flow.result.current.step).toBe("Intro");
  });

  test("offers the draft and resumes it, prefilled, on its first unanswered step", () => {
    const earlier = leaveDraft();
    const disputeCaseId = earlier.result.current.disputeCaseId.toUndefined();
    const flow = setup({}, { fake: earlier.fake, resumeFrom: fromCard });

    expect(getOfferedId(flow)).toBe(disputeCaseId);

    flow.resume();

    expect(flow.result.current.step).toBe("Card");
    expect(flow.result.current.values).toMatchObject({ transactions: [card], ...incident });
    expect(flow.result.current.disputeCaseId.toUndefined()).toBe(disputeCaseId);
    expect(getOfferedId(flow)).toBeUndefined();

    flow.next({ isLostOrStolen: true });

    expect(flow.callNames()).toEqual(["findDrafts", "update"]);
    expect(flow.calls.at(-1)?.input).not.toHaveProperty("transactionIds");
    expect(flow.result.current.step).toBe("Documents");
  });

  test("resumes on the transactions step when the draft doesn't hold every start transaction", () => {
    const earlier = leaveDraft();
    const disputeCaseId = earlier.result.current.disputeCaseId.toUndefined();
    const flow = setup(
      {},
      {
        fake: earlier.fake,
        resumeFrom: { accountId: "account-1", transactionIds: ["card-1", "transfer-1"] },
      },
    );

    flow.resume();

    expect(flow.result.current.step).toBe("Transactions");
    expect(flow.result.current.values).toMatchObject({ transactions: [card], ...incident });

    flow.next({ transactions: [card, transfer] });

    expect(flow.calls.at(-1)).toMatchObject({
      name: "update",
      input: { disputeCaseId, transactionIds: ["card-1", "transfer-1"] },
    });
  });

  test("offers the latest draft when there are several", () => {
    const fake = leaveDraft().fake;
    const later = setup({}, { fake });
    startReport(later, { victim: "member-1", transactions: [card] });
    const latestId = later.result.current.disputeCaseId.toUndefined();

    const flow = setup({}, { fake, resumeFrom: fromCard });

    expect(getOfferedId(flow)).toBe(latestId);
  });

  test("starts over: cancels the old draft and starts a new report", () => {
    const earlier = leaveDraft();
    const disputeCaseId = earlier.result.current.disputeCaseId.toUndefined();
    const flow = setup({}, { fake: earlier.fake, resumeFrom: fromCard });

    flow.startOver();

    expect(flow.calls.at(-1)).toEqual({ name: "cancel", input: { disputeCaseId } });
    expect(getStatus(flow, disputeCaseId)).toBe("Canceled");
    expect(getOfferedId(flow)).toBeUndefined();
    expect(flow.result.current.step).toBe("Intro");

    startReport(flow, { victim: "member-1", transactions: [card] });

    expect(flow.callNames()).toEqual(["findDrafts", "cancel", "draft"]);
    expect(flow.result.current.disputeCaseId.toUndefined()).not.toBe(disputeCaseId);
  });

  test("waits for the old draft's cancel before starting over", () => {
    const earlier = leaveDraft();
    const disputeCaseId = earlier.result.current.disputeCaseId.toUndefined();
    const flow = setup({}, { fake: earlier.fake, resumeFrom: fromCard });
    vi.spyOn(earlier.fake, "cancel").mockReturnValueOnce(Future.make(() => {}));

    flow.startOver();
    flow.next();
    flow.resume();

    expect(flow.result.current.saving).toBe(true);
    expect(getOfferedId(flow)).toBe(disputeCaseId);
    expect(flow.result.current.step).toBe("Intro");
  });

  test("keeps the offer and exposes the error when the old draft can't be canceled, then retries", () => {
    const error = new Error("Network error");
    const earlier = leaveDraft();
    const disputeCaseId = earlier.result.current.disputeCaseId.toUndefined();
    const flow = setup({}, { fake: earlier.fake, resumeFrom: fromCard });
    vi.spyOn(earlier.fake, "cancel").mockReturnValueOnce(
      Future.value(Result.Error({ kind: "error" as const, error })),
    );

    flow.startOver();

    expect(getOfferedId(flow)).toBe(disputeCaseId);
    expect(flow.result.current.error.toUndefined()).toEqual({ kind: "error", error });
    expect(flow.result.current.saving).toBe(false);
    expect(flow.result.current.step).toBe("Intro");

    flow.startOver();

    expect(getStatus(flow, disputeCaseId)).toBe("Canceled");
    expect(getOfferedId(flow)).toBeUndefined();
    expect(flow.result.current.error.isNone()).toBe(true);
  });

  test("starts over when the old draft is no longer a draft", () => {
    const earlier = leaveDraft();
    const flow = setup({}, { fake: earlier.fake, resumeFrom: fromCard });
    vi.spyOn(earlier.fake, "cancel").mockReturnValueOnce(
      rejected({
        __typename: "DisputeCaseNotFoundRejection",
        disputeCaseId: "case-1",
        message: "",
      }),
    );

    flow.startOver();

    expect(getOfferedId(flow)).toBeUndefined();
    expect(flow.result.current.error.isNone()).toBe(true);
    expect(flow.result.current.step).toBe("Intro");
  });

  test("goes to the submitted step, with no error, when the old draft was submitted elsewhere", () => {
    const earlier = leaveDraft();
    earlier.next({ isLostOrStolen: true });
    const disputeCaseId = earlier.result.current.disputeCaseId.toUndefined();
    const flow = setup({}, { fake: earlier.fake, resumeFrom: fromCard });
    earlier.next();
    expect(getStatus(flow, disputeCaseId)).toBe("Submitted");

    flow.startOver();

    expect(flow.result.current.step).toBe("Submitted");
    expect(flow.result.current.error.isNone()).toBe(true);
    expect(flow.result.current.disputeCaseId.toUndefined()).toBe(disputeCaseId);
    expect(getOfferedId(flow)).toBeUndefined();
    expect(flow.result.current.saving).toBe(false);
  });

  test("starts a new report when looking for drafts takes too long", () => {
    vi.useFakeTimers();
    const { fake } = setup();
    const stop = vi.fn();
    vi.spyOn(fake, "findDrafts").mockReturnValueOnce(Future.make(() => stop));
    const flow = setup({}, { fake, resumeFrom: fromCard });

    act(() => {
      vi.advanceTimersByTime(DRAFT_LOOKUP_TIMEOUT_MS - 1);
    });
    expect(flow.result.current.resumable.isLoading()).toBe(true);

    act(() => {
      vi.advanceTimersByTime(1);
    });
    flow.next();

    expect(stop).toHaveBeenCalledTimes(1);
    expect(getOfferedId(flow)).toBeUndefined();
    expect(flow.result.current.step).toBe("Victim");
  });

  test("starts a new report when the drafts can't be read", () => {
    const { fake } = setup();
    vi.spyOn(fake, "findDrafts").mockReturnValueOnce(
      Future.value(Result.Error({ kind: "error" as const, error: new Error("Network error") })),
    );
    const flow = setup({}, { fake, resumeFrom: fromCard });

    expect(flow.result.current.resumable.isDone()).toBe(true);
    expect(getOfferedId(flow)).toBeUndefined();
    expect(flow.result.current.error.isNone()).toBe(true);
  });

  test("waits on the intro while it looks for drafts", () => {
    const earlier = leaveDraft();
    let resolve: (value: Result<FraudReportCase[], never>) => void = () => {};
    vi.spyOn(earlier.fake, "findDrafts").mockReturnValueOnce(
      Future.make(resolver => {
        resolve = resolver;
      }),
    );
    const flow = setup({}, { fake: earlier.fake, resumeFrom: fromCard });

    flow.next();
    expect(flow.result.current.resumable.isLoading()).toBe(true);
    expect(flow.result.current.step).toBe("Intro");

    act(() => {
      resolve(Result.Ok([{ id: "found" } as FraudReportCase]));
    });

    expect(getOfferedId(flow)).toBe("found");
  });

  test("closes the offer when the report starts, keeping the old draft", () => {
    const earlier = leaveDraft();
    const disputeCaseId = earlier.result.current.disputeCaseId.toUndefined();
    const flow = setup({}, { fake: earlier.fake, resumeFrom: fromCard });

    startReport(flow, { victim: "member-1", transactions: [card] });
    const newId = flow.result.current.disputeCaseId.toUndefined();
    flow.resume();
    flow.startOver();

    expect(getOfferedId(flow)).toBeUndefined();
    expect(flow.result.current.disputeCaseId.toUndefined()).toBe(newId);
    expect(flow.callNames()).toEqual(["findDrafts", "draft"]);
    expect(getStatus(flow, disputeCaseId)).toBe("Draft");
  });

  test("doesn't offer a draft found after the user left", () => {
    const earlier = leaveDraft();
    let resolve: (value: Result<FraudReportCase[], never>) => void = () => {};
    vi.spyOn(earlier.fake, "findDrafts").mockReturnValueOnce(
      Future.make(resolver => {
        resolve = resolver;
      }),
    );
    const flow = setup({}, { fake: earlier.fake, resumeFrom: fromCard });

    flow.cancel();
    act(() => {
      resolve(Result.Ok([{ id: "late" } as FraudReportCase]));
    });

    expect(flow.onExit).toHaveBeenCalledTimes(1);
    expect(getOfferedId(flow)).toBeUndefined();
  });

  test("stops looking for drafts when the flow is gone", () => {
    const { fake } = setup();
    const stop = vi.fn();
    vi.spyOn(fake, "findDrafts").mockReturnValueOnce(Future.make(() => stop));
    const flow = setup({}, { fake, resumeFrom: fromCard });

    flow.unmount();

    expect(stop).toHaveBeenCalledTimes(1);
  });
});
