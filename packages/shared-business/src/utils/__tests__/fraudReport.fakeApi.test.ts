import { Option, Result } from "@bloodyowl/boxed";
import { describe, expect, expectTypeOf, test } from "vitest";
import type { FraudReportApi, FraudReportApiError } from "../fraudReport/api";
import {
  createFakeFraudReportApi,
  createFakeTransaction,
  FakeFraudReportApiConfig,
  FakeTransaction,
} from "../fraudReport/fakeApi";
import type {
  DraftFraudDisputeCaseInput,
  FraudDetailsInput,
  FraudReportCase,
  UpdateDraftFraudDisputeCaseInput,
} from "../fraudReport/types";

const NOW = new Date("2026-11-20T10:00:00.000Z");

const card1: FakeTransaction = {
  id: "card-1",
  accountId: "account-1",
  rail: "Card",
  cardholderAccountMembershipId: "member-1",
};
const card2: FakeTransaction = { ...card1, id: "card-2" };
const cardOtherHolder: FakeTransaction = {
  ...card1,
  id: "card-3",
  cardholderAccountMembershipId: "member-2",
};
const transfer1: FakeTransaction = { id: "transfer-1", accountId: "account-1", rail: "Transfer" };
const transferOtherAccount: FakeTransaction = {
  ...transfer1,
  id: "transfer-2",
  accountId: "account-2",
};
const notReportable: FakeTransaction = {
  ...transfer1,
  id: "transfer-3",
  notReportableReason: "TransactionStatusNotReportable",
};
const outsideWindow: FakeTransaction = {
  ...transfer1,
  id: "transfer-4",
  reportingWindowEndsAt: "2026-10-01T00:00:00.000Z",
};

const fraudDetails: FraudDetailsInput = {
  reportedReason: "Manipulated",
  reportedTypology: "FakeAdvisor",
  description: "A fake advisor called me",
};

const createApi = (config: Partial<FakeFraudReportApiConfig> = {}) =>
  createFakeFraudReportApi({
    transactions: [
      card1,
      card2,
      cardOtherHolder,
      transfer1,
      transferOtherAccount,
      notReportable,
      outsideWindow,
    ],
    accountMemberships: [
      { id: "member-1", accountId: "account-1" },
      { id: "member-2", accountId: "account-1" },
      { id: "member-other", accountId: "account-2" },
    ],
    now: () => NOW,
    ...config,
  });

type AnyResult = Result<unknown, FraudReportApiError<{ __typename: string }>>;

const getRejection = (result: AnyResult) =>
  result.match({
    Ok: () => undefined,
    Error: error => (error.kind === "rejection" ? error.rejection : undefined),
  });

const getOk = <T>(result: Result<T, unknown>): T =>
  result.match({
    Ok: value => value,
    Error: error => {
      throw new Error(`Expected Ok, got ${JSON.stringify(error)}`);
    },
  });

const draft = async (api: FraudReportApi, input: DraftFraudDisputeCaseInput) =>
  getOk(await api.draft(input));

describe("createFakeTransaction", () => {
  test("takes the rail from the transaction type", () => {
    expect(createFakeTransaction("card-1", "CardOutDebit").rail).toBe("Card");
    expect(createFakeTransaction("transfer-1", "SepaInstantCreditTransferOut").rail).toBe(
      "Transfer",
    );
  });

  test("gives each transaction its own default counterparty", () => {
    expect(createFakeTransaction("card-1", "CardOutDebit").counterparty).not.toBe(
      createFakeTransaction("card-2", "CardOutDebit").counterparty,
    );
  });
});

describe("contract types", () => {
  test("the fake adapter implements FraudReportApi", () => {
    expectTypeOf(createApi()).toExtend<FraudReportApi>();
  });

  test("update: leaving a field out keeps it, null clears it, transactionIds can't be null", () => {
    expectTypeOf<{
      disputeCaseId: string;
      fraudDetails: null;
    }>().toExtend<UpdateDraftFraudDisputeCaseInput>();
    expectTypeOf<{ disputeCaseId: string }>().toExtend<UpdateDraftFraudDisputeCaseInput>();
    expectTypeOf<{
      disputeCaseId: string;
      transactionIds: null;
    }>().not.toExtend<UpdateDraftFraudDisputeCaseInput>();
  });

  test("draft requires transactionIds only", () => {
    expectTypeOf<{ transactionIds: string[] }>().toExtend<DraftFraudDisputeCaseInput>();
    expectTypeOf<{ fraudDetails: FraudDetailsInput }>().not.toExtend<DraftFraudDisputeCaseInput>();
  });
});

describe("happy path", () => {
  test("draft → update → submit", async () => {
    const api = createApi();

    const created = await draft(api, { transactionIds: ["transfer-1"] });
    expect(created.statusInfo).toEqual({ status: "Draft", expiresAt: "2026-12-20T10:00:00.000Z" });
    expect(created.accountId).toBe("account-1");
    expect(created.hasVictim).toBe(false);
    expect(created.supportingDocumentCollection.status).toBe("WaitingForDocument");

    const updated = getOk(
      await api.update({
        disputeCaseId: created.id,
        fraudDetails,
        fraudTransferDetails: { hasContactedBankOrBeneficiary: true },
        victimAccountMembershipId: "member-2",
      }),
    );
    expect(updated.fraudDetails?.description).toBe("A fake advisor called me");
    expect(updated.fraudDetails?.fraudsterChannels).toEqual([]);
    expect(updated.victimAccountMembershipId).toBe("member-2");
    expect(updated.hasVictim).toBe(true);

    const submitted = getOk(await api.submit({ disputeCaseId: created.id }));
    expect(submitted.statusInfo).toEqual({ status: "Submitted", submittedAt: NOW.toISOString() });
    expect(submitted.supportingDocumentCollection.status).toBe("PendingReview");
  });

  test("the victim of a case with card transactions is the cardholder", async () => {
    const created = await draft(createApi(), { transactionIds: ["card-1", "transfer-1"] });
    expect(created.victimAccountMembershipId).toBe("member-1");
    expect(created.hasVictim).toBe(true);
  });

  test("update: left-out fields are kept, null clears", async () => {
    const api = createApi();
    const created = await draft(api, {
      transactionIds: ["transfer-1"],
      fraudDetails,
      externalReference: "ref-1",
    });

    const kept = getOk(await api.update({ disputeCaseId: created.id, externalReference: "ref-2" }));
    expect(kept.fraudDetails?.reportedTypology).toBe("FakeAdvisor");
    expect(kept.externalReference).toBe("ref-2");

    const cleared = getOk(await api.update({ disputeCaseId: created.id, fraudDetails: null }));
    expect(cleared.fraudDetails).toBeNull();
    expect(cleared.externalReference).toBe("ref-2");
  });

  test("changing transactions removes details and victim that no longer apply", async () => {
    const api = createApi();
    const created = await draft(api, {
      transactionIds: ["transfer-1"],
      fraudTransferDetails: { hasContactedBankOrBeneficiary: false },
      victimAccountMembershipId: "member-2",
    });

    const updated = getOk(
      await api.update({ disputeCaseId: created.id, transactionIds: ["card-1"] }),
    );
    expect(updated.fraudTransferDetails).toBeNull();
    expect(updated.victimAccountMembershipId).toBe("member-1");
  });

  test("submitting twice returns the submitted case", async () => {
    const api = createApi();
    const created = await draft(api, { transactionIds: ["card-1"], fraudDetails });
    const first = getOk(await api.submit({ disputeCaseId: created.id }));
    const second = getOk(await api.submit({ disputeCaseId: created.id }));
    expect(second).toEqual(first);
  });

  test("cancel, getCase and findDrafts", async () => {
    const api = createApi();
    const a = await draft(api, { transactionIds: ["card-1"] });
    const b = await draft(api, { transactionIds: ["card-1", "card-2"] });
    await draft(api, { transactionIds: ["transfer-2"] });

    const drafts = getOk(
      await api.findDrafts({ accountId: "account-1", transactionIds: ["card-1"] }),
    );
    expect(drafts.map(item => item.id)).toEqual([b.id, a.id]);

    const canceled = getOk(await api.cancel({ disputeCaseId: a.id }));
    expect(canceled.statusInfo).toEqual({ status: "Canceled", canceledAt: NOW.toISOString() });
    expect(getOk(await api.cancel({ disputeCaseId: a.id }))).toEqual(canceled);

    const remaining = getOk(
      await api.findDrafts({ accountId: "account-1", transactionIds: ["card-1"] }),
    );
    expect(remaining.map(item => item.id)).toEqual([b.id]);

    expect(getOk(await api.getCase({ disputeCaseId: b.id }))).toEqual(Option.Some(b));
    expect(getOk(await api.getCase({ disputeCaseId: "unknown" }))).toEqual(Option.None());
  });

  test("starts from seeded cases", async () => {
    const seeded: FraudReportCase = await draft(createApi(), { transactionIds: ["card-1"] });
    const api = createApi({ cases: [seeded] });
    expect(getOk(await api.getCase({ disputeCaseId: seeded.id }))).toEqual(Option.Some(seeded));
  });

  test("uploads resolve", async () => {
    const api = createApi();
    const upload = getOk(
      await api.generateUpload({
        supportingDocumentCollectionId: "collection-1",
        fileName: "police-report.pdf",
        purpose: "PoliceReport",
      }),
    );
    expect(upload.id).toEqual(expect.any(String));
    expect(
      (
        await api.removeFile({
          id: upload.id,
          name: "police-report.pdf",
          statusInfo: { status: "Uploaded" },
        })
      ).isOk(),
    ).toBe(true);
  });
});

describe("draft and update rejections", () => {
  test("malformed transactionIds are errors, not rejections", async () => {
    const api = createApi();
    for (const transactionIds of [[], ["card-1", "card-1"]]) {
      const result = await api.draft({ transactionIds });
      expect(result.match({ Ok: () => undefined, Error: error => error.kind })).toBe("error");
    }
  });

  test("DisputeCaseNotFoundRejection", async () => {
    const result = await createApi().update({ disputeCaseId: "unknown", fraudDetails });
    expect(getRejection(result)).toMatchObject({
      __typename: "DisputeCaseNotFoundRejection",
      disputeCaseId: "unknown",
    });
  });

  test("DisputeCaseWrongStatusRejection", async () => {
    const api = createApi();
    const created = await draft(api, { transactionIds: ["card-1"] });
    await api.cancel({ disputeCaseId: created.id });
    expect(
      getRejection(await api.update({ disputeCaseId: created.id, fraudDetails })),
    ).toMatchObject({
      __typename: "DisputeCaseWrongStatusRejection",
      currentStatus: "Canceled",
      expectedStatuses: ["Draft"],
    });
  });

  test("DisputeCaseTransactionsLimitExceededRejection", async () => {
    const transactions = Array.from({ length: 101 }, (_, index) => ({
      ...card1,
      id: `card-${index}`,
    }));
    const result = await createApi({ transactions }).draft({
      transactionIds: transactions.map(item => item.id),
    });
    expect(getRejection(result)).toMatchObject({
      __typename: "DisputeCaseTransactionsLimitExceededRejection",
      transactionCount: 101,
      maxTransactionCount: 100,
    });
  });

  test("DisputeCaseTransactionsNotFoundRejection", async () => {
    const result = await createApi().draft({ transactionIds: ["card-1", "unknown"] });
    expect(getRejection(result)).toMatchObject({
      __typename: "DisputeCaseTransactionsNotFoundRejection",
      transactionIds: ["unknown"],
    });
  });

  test("DisputeCaseTransactionsNotReportableRejection", async () => {
    const result = await createApi().draft({ transactionIds: ["transfer-3"] });
    expect(getRejection(result)).toMatchObject({
      __typename: "DisputeCaseTransactionsNotReportableRejection",
      transactions: [{ transactionId: "transfer-3", reason: "TransactionStatusNotReportable" }],
    });
  });

  test("DisputeCaseMultipleAccountsRejection", async () => {
    const result = await createApi().draft({ transactionIds: ["transfer-1", "transfer-2"] });
    expect(getRejection(result)).toMatchObject({
      __typename: "DisputeCaseMultipleAccountsRejection",
      accountIds: ["account-1", "account-2"],
    });
  });

  test("DisputeCaseMultipleCardHoldersRejection", async () => {
    const result = await createApi().draft({ transactionIds: ["card-1", "card-3"] });
    expect(getRejection(result)).toMatchObject({
      __typename: "DisputeCaseMultipleCardHoldersRejection",
      accountMembershipIds: ["member-1", "member-2"],
    });
  });

  test("DisputeCaseTransactionsOutsideReportingWindowRejection", async () => {
    const result = await createApi().draft({ transactionIds: ["transfer-4"] });
    expect(getRejection(result)).toMatchObject({
      __typename: "DisputeCaseTransactionsOutsideReportingWindowRejection",
      transactions: [
        { transactionId: "transfer-4", reportingWindowEndedAt: "2026-10-01T00:00:00.000Z" },
      ],
    });
  });

  test("DisputeCaseDetailsNotApplicableRejection", async () => {
    const api = createApi();
    expect(
      getRejection(
        await api.draft({
          transactionIds: ["card-1"],
          fraudTransferDetails: { hasContactedBankOrBeneficiary: true },
        }),
      ),
    ).toMatchObject({
      __typename: "DisputeCaseDetailsNotApplicableRejection",
      fields: [{ path: ["fraudTransferDetails"] }],
    });
    expect(
      getRejection(
        await api.draft({
          transactionIds: ["transfer-1"],
          fraudCardDetails: { isLostOrStolen: true },
        }),
      ),
    ).toMatchObject({ fields: [{ path: ["fraudCardDetails"] }] });
    expect(
      getRejection(
        await api.draft({ transactionIds: ["card-1"], victimAccountMembershipId: "member-1" }),
      ),
    ).toMatchObject({ fields: [{ path: ["victimAccountMembershipId"] }] });
  });

  test("AccountMembershipNotFoundRejection", async () => {
    const result = await createApi().draft({
      transactionIds: ["transfer-1"],
      victimAccountMembershipId: "member-other",
    });
    expect(getRejection(result)).toMatchObject({
      __typename: "AccountMembershipNotFoundRejection",
      id: "member-other",
    });
  });

  test("a rejected call changes nothing", async () => {
    const api = createApi();
    const created = await draft(api, { transactionIds: ["transfer-1"], fraudDetails });
    await api.update({
      disputeCaseId: created.id,
      fraudDetails: null,
      transactionIds: ["unknown"],
    });
    expect(getOk(await api.getCase({ disputeCaseId: created.id }))).toEqual(Option.Some(created));
  });
});

describe("submit and cancel rejections", () => {
  test("DisputeCaseIncompleteRejection: fraud details", async () => {
    const api = createApi();
    const created = await draft(api, { transactionIds: ["card-1"] });
    expect(getRejection(await api.submit({ disputeCaseId: created.id }))).toMatchObject({
      __typename: "DisputeCaseIncompleteRejection",
      missingFields: [{ path: ["fraudDetails"] }],
    });
  });

  test("DisputeCaseIncompleteRejection: victim on a transfer-only case", async () => {
    const api = createApi();
    const created = await draft(api, { transactionIds: ["transfer-1"], fraudDetails });
    expect(getRejection(await api.submit({ disputeCaseId: created.id }))).toMatchObject({
      __typename: "DisputeCaseIncompleteRejection",
      missingFields: [{ path: ["victimAccountMembershipId"] }],
    });
  });

  test("DisputeCaseTransactionsAlreadyReportedRejection", async () => {
    const api = createApi({ alreadyReported: [{ transactionId: "card-2", disputeCaseId: null }] });
    const first = await draft(api, { transactionIds: ["card-1"], fraudDetails });
    const second = await draft(api, { transactionIds: ["card-1", "card-2"], fraudDetails });
    getOk(await api.submit({ disputeCaseId: first.id }));

    expect(getRejection(await api.submit({ disputeCaseId: second.id }))).toMatchObject({
      __typename: "DisputeCaseTransactionsAlreadyReportedRejection",
      transactions: [
        { transactionId: "card-1", disputeCaseId: first.id },
        { transactionId: "card-2", disputeCaseId: null },
      ],
    });
  });

  test("DisputeCaseTransactionsNotReportableRejection and OutsideReportingWindow on seeded drafts", async () => {
    const seeded = await draft(createApi(), { transactionIds: ["transfer-1"], fraudDetails });
    const notReportableCase = {
      ...seeded,
      id: "case-1",
      transactions: [createFakeTransaction("transfer-3", "SepaCreditTransferOut")],
    };
    const outsideCase = {
      ...seeded,
      id: "case-2",
      transactions: [createFakeTransaction("transfer-4", "SepaCreditTransferOut")],
    };
    const api = createApi({ cases: [notReportableCase, outsideCase] });

    expect(getRejection(await api.submit({ disputeCaseId: "case-1" }))).toMatchObject({
      __typename: "DisputeCaseTransactionsNotReportableRejection",
    });
    expect(getRejection(await api.submit({ disputeCaseId: "case-2" }))).toMatchObject({
      __typename: "DisputeCaseTransactionsOutsideReportingWindowRejection",
    });
  });

  test("DisputeCaseNotFoundRejection and DisputeCaseWrongStatusRejection", async () => {
    const api = createApi();
    expect(getRejection(await api.submit({ disputeCaseId: "unknown" }))).toMatchObject({
      __typename: "DisputeCaseNotFoundRejection",
    });
    expect(getRejection(await api.cancel({ disputeCaseId: "unknown" }))).toMatchObject({
      __typename: "DisputeCaseNotFoundRejection",
    });

    const created = await draft(api, { transactionIds: ["card-1"] });
    await api.cancel({ disputeCaseId: created.id });
    expect(getRejection(await api.submit({ disputeCaseId: created.id }))).toMatchObject({
      __typename: "DisputeCaseWrongStatusRejection",
      currentStatus: "Canceled",
    });

    const submittedCase = await draft(api, { transactionIds: ["card-2"], fraudDetails });
    await api.submit({ disputeCaseId: submittedCase.id });
    expect(getRejection(await api.cancel({ disputeCaseId: submittedCase.id }))).toMatchObject({
      __typename: "DisputeCaseWrongStatusRejection",
      currentStatus: "Submitted",
      expectedStatuses: ["Draft"],
    });
  });
});

describe("check order", () => {
  const precedence: [
    string,
    Partial<FakeFraudReportApiConfig>,
    DraftFraudDisputeCaseInput,
    string,
  ][] = [
    [
      "limit before not found",
      {},
      { transactionIds: Array.from({ length: 101 }, (_, index) => `unknown-${index}`) },
      "DisputeCaseTransactionsLimitExceededRejection",
    ],
    [
      "not found before not reportable",
      {},
      { transactionIds: ["unknown", "transfer-3"] },
      "DisputeCaseTransactionsNotFoundRejection",
    ],
    [
      "not reportable before multiple accounts",
      {},
      { transactionIds: ["transfer-3", "transfer-2"] },
      "DisputeCaseTransactionsNotReportableRejection",
    ],
    [
      "multiple cardholders before outside reporting window",
      {},
      { transactionIds: ["card-1", "card-3", "transfer-4"] },
      "DisputeCaseMultipleCardHoldersRejection",
    ],
    [
      "outside reporting window before details not applicable",
      {},
      { transactionIds: ["transfer-4"], fraudCardDetails: { isLostOrStolen: true } },
      "DisputeCaseTransactionsOutsideReportingWindowRejection",
    ],
    [
      "details not applicable before account membership not found",
      {},
      {
        transactionIds: ["transfer-1"],
        fraudCardDetails: { isLostOrStolen: true },
        victimAccountMembershipId: "member-other",
      },
      "DisputeCaseDetailsNotApplicableRejection",
    ],
  ];

  test.each(precedence)("draft: %s", async (_, config, input, expected) => {
    expect(getRejection(await createApi(config).draft(input))?.__typename).toBe(expected);
  });

  test("update: malformed input before case not found", async () => {
    const result = await createApi().update({ disputeCaseId: "unknown", transactionIds: [] });
    expect(result.match({ Ok: () => undefined, Error: error => error.kind })).toBe("error");
  });

  test("submit: outside reporting window before already reported, already reported before incomplete", async () => {
    const seeded = await draft(createApi(), { transactionIds: ["transfer-1"] });
    const outsideAndReported = {
      ...seeded,
      id: "case-1",
      transactions: [createFakeTransaction("transfer-4", "SepaCreditTransferOut")],
    };
    const api = createApi({
      cases: [outsideAndReported, { ...seeded, id: "case-2" }],
      alreadyReported: [
        { transactionId: "transfer-4", disputeCaseId: null },
        { transactionId: "transfer-1", disputeCaseId: null },
      ],
    });
    expect(getRejection(await api.submit({ disputeCaseId: "case-1" }))?.__typename).toBe(
      "DisputeCaseTransactionsOutsideReportingWindowRejection",
    );
    expect(getRejection(await api.submit({ disputeCaseId: "case-2" }))?.__typename).toBe(
      "DisputeCaseTransactionsAlreadyReportedRejection",
    );
  });

  test("submit: DisputeCaseTransactionsNotFoundRejection when a transaction can no longer be reported", async () => {
    const seeded = await draft(createApi(), { transactionIds: ["transfer-1"], fraudDetails });
    const api = createApi({
      cases: [
        { ...seeded, transactions: [createFakeTransaction("gone", "SepaCreditTransferOut")] },
      ],
    });
    expect(getRejection(await api.submit({ disputeCaseId: seeded.id }))).toMatchObject({
      __typename: "DisputeCaseTransactionsNotFoundRejection",
      transactionIds: ["gone"],
    });
  });
});

describe("details and victim after a transaction change", () => {
  test("transfer → card → transfer doesn't bring the victim back", async () => {
    const api = createApi();
    const created = await draft(api, {
      transactionIds: ["transfer-1"],
      victimAccountMembershipId: "member-2",
    });
    await api.update({ disputeCaseId: created.id, transactionIds: ["card-1"] });
    const back = getOk(
      await api.update({ disputeCaseId: created.id, transactionIds: ["transfer-1"] }),
    );
    expect(back.hasVictim).toBe(false);
    expect(back.victimAccountMembershipId).toBeNull();
  });

  test("moving to another account removes the victim", async () => {
    const api = createApi({
      transactions: [transfer1, { ...transfer1, id: "transfer-5", accountId: "account-2" }],
    });
    const created = await draft(api, {
      transactionIds: ["transfer-1"],
      victimAccountMembershipId: "member-2",
    });
    const moved = getOk(
      await api.update({ disputeCaseId: created.id, transactionIds: ["transfer-5"] }),
    );
    expect(moved.hasVictim).toBe(false);
  });

  test("a victim sent with new transactions is kept", async () => {
    const api = createApi({
      transactions: [transfer1, { ...transfer1, id: "transfer-5", accountId: "account-2" }],
    });
    const created = await draft(api, {
      transactionIds: ["transfer-1"],
      victimAccountMembershipId: "member-2",
    });
    const moved = getOk(
      await api.update({
        disputeCaseId: created.id,
        transactionIds: ["transfer-5"],
        victimAccountMembershipId: "member-other",
      }),
    );
    expect(moved.victimAccountMembershipId).toBe("member-other");
  });

  test("removing card transactions removes card details", async () => {
    const api = createApi();
    const created = await draft(api, {
      transactionIds: ["card-1", "transfer-1"],
      fraudCardDetails: { isLostOrStolen: true },
    });
    expect(created.transactions).toEqual([
      createFakeTransaction("card-1", "CardOutDebit"),
      createFakeTransaction("transfer-1", "SepaCreditTransferOut"),
    ]);
    const updated = getOk(
      await api.update({ disputeCaseId: created.id, transactionIds: ["transfer-1"] }),
    );
    expect(updated.fraudCardDetails).toBeNull();
  });
});

describe("expiry", () => {
  test("a draft expires at the end of its oldest transaction's reporting window", async () => {
    let now = NOW;
    const api = createApi({
      transactions: [{ ...transfer1, reportingWindowEndsAt: "2026-12-01T00:00:00.000Z" }],
      now: () => now,
    });
    const created = await draft(api, { transactionIds: ["transfer-1"] });
    expect(created.statusInfo).toEqual({ status: "Draft", expiresAt: "2026-12-01T00:00:00.000Z" });

    now = new Date("2026-12-02T00:00:00.000Z");
    const expired = getOk(await api.getCase({ disputeCaseId: created.id })).toUndefined();
    expect(expired?.statusInfo).toEqual({
      status: "Expired",
      expiredAt: "2026-12-01T00:00:00.000Z",
    });
    expect(
      getRejection(await api.update({ disputeCaseId: created.id, fraudDetails })),
    ).toMatchObject({
      __typename: "DisputeCaseWrongStatusRejection",
      currentStatus: "Expired",
    });
  });
});

describe("more precedence", () => {
  test("draft: multiple accounts before multiple cardholders", async () => {
    const api = createApi({
      transactions: [
        card1,
        {
          ...card1,
          id: "card-9",
          accountId: "account-2",
          cardholderAccountMembershipId: "member-other",
        },
      ],
    });
    expect(
      getRejection(await api.draft({ transactionIds: ["card-1", "card-9"] }))?.__typename,
    ).toBe("DisputeCaseMultipleAccountsRejection");
  });

  test("update: case not found and wrong status before transaction checks", async () => {
    const api = createApi();
    expect(
      getRejection(await api.update({ disputeCaseId: "unknown", transactionIds: ["unknown"] }))
        ?.__typename,
    ).toBe("DisputeCaseNotFoundRejection");

    const created = await draft(api, { transactionIds: ["card-1"] });
    await api.cancel({ disputeCaseId: created.id });
    expect(
      getRejection(await api.update({ disputeCaseId: created.id, transactionIds: ["unknown"] }))
        ?.__typename,
    ).toBe("DisputeCaseWrongStatusRejection");
  });

  test("submit: not found before not reportable, not reportable before outside reporting window", async () => {
    const seeded = await draft(createApi(), { transactionIds: ["transfer-1"], fraudDetails });
    const api = createApi({
      cases: [
        {
          ...seeded,
          id: "case-1",
          transactions: [
            createFakeTransaction("gone", "SepaCreditTransferOut"),
            createFakeTransaction("transfer-3", "SepaCreditTransferOut"),
          ],
        },
        {
          ...seeded,
          id: "case-2",
          transactions: [
            createFakeTransaction("transfer-3", "SepaCreditTransferOut"),
            createFakeTransaction("transfer-4", "SepaCreditTransferOut"),
          ],
        },
      ],
    });
    expect(getRejection(await api.submit({ disputeCaseId: "case-1" }))?.__typename).toBe(
      "DisputeCaseTransactionsNotFoundRejection",
    );
    expect(getRejection(await api.submit({ disputeCaseId: "case-2" }))?.__typename).toBe(
      "DisputeCaseTransactionsNotReportableRejection",
    );
  });
});

describe("left-out fields are kept", () => {
  const transfer6: FakeTransaction = { ...transfer1, id: "transfer-6" };

  test("adding a transfer keeps the victim and transfer details", async () => {
    const api = createApi({ transactions: [transfer1, transfer6] });
    const created = await draft(api, {
      transactionIds: ["transfer-1"],
      victimAccountMembershipId: "member-2",
      fraudTransferDetails: { hasContactedBankOrBeneficiary: true },
    });
    const updated = getOk(
      await api.update({ disputeCaseId: created.id, transactionIds: ["transfer-1", "transfer-6"] }),
    );
    expect(updated.victimAccountMembershipId).toBe("member-2");
    expect(updated.fraudTransferDetails).toEqual({ hasContactedBankOrBeneficiary: true });

    const referenced = getOk(
      await api.update({ disputeCaseId: created.id, externalReference: "ref" }),
    );
    expect(referenced.hasVictim).toBe(true);
  });

  test("adding a card transaction keeps card details", async () => {
    const api = createApi();
    const created = await draft(api, {
      transactionIds: ["card-1"],
      fraudCardDetails: { hasContactedMerchant: true },
    });
    const updated = getOk(
      await api.update({ disputeCaseId: created.id, transactionIds: ["card-1", "card-2"] }),
    );
    expect(updated.fraudCardDetails).toEqual({
      isLostOrStolen: null,
      lostOrStolenNoticedAt: null,
      hasContactedMerchant: true,
    });
  });

  test("a victim the caller can't see stays on the case", async () => {
    const seeded = await draft(createApi(), {
      transactionIds: ["transfer-1"],
      victimAccountMembershipId: "member-2",
    });
    const api = createApi({ cases: [{ ...seeded, victimAccountMembershipId: null }] });
    const updated = getOk(await api.update({ disputeCaseId: seeded.id, externalReference: "ref" }));
    expect(updated.hasVictim).toBe(true);
    expect(updated.victimAccountMembershipId).toBeNull();
  });
});

test("findDrafts returns the newest draft first", async () => {
  const seeded = await draft(createApi(), { transactionIds: ["card-1"] });
  const newer = { ...seeded, id: "newer", createdAt: "2026-11-19T00:00:00.000Z" };
  const older = { ...seeded, id: "older", createdAt: "2026-11-01T00:00:00.000Z" };
  const api = createApi({ cases: [newer, older] });
  const drafts = getOk(
    await api.findDrafts({ accountId: "account-1", transactionIds: ["card-1"] }),
  );
  expect(drafts.map(item => item.id)).toEqual(["newer", "older"]);
});

describe("dates", () => {
  const later = (days: number) => new Date(NOW.getTime() + days * 24 * 60 * 60 * 1000);

  test("submitting or canceling again doesn't change the case", async () => {
    let now = NOW;
    const api = createApi({ now: () => now });
    const toSubmit = await draft(api, { transactionIds: ["card-1"], fraudDetails });
    const toCancel = await draft(api, { transactionIds: ["card-2"] });
    const submitted = getOk(await api.submit({ disputeCaseId: toSubmit.id }));
    const canceled = getOk(await api.cancel({ disputeCaseId: toCancel.id }));

    now = later(1);
    expect(getOk(await api.submit({ disputeCaseId: toSubmit.id }))).toEqual(submitted);
    expect(getOk(await api.cancel({ disputeCaseId: toCancel.id }))).toEqual(canceled);
  });

  test("a draft expires 30 days after its last update", async () => {
    let now = NOW;
    const api = createApi({ now: () => now });
    const created = await draft(api, { transactionIds: ["transfer-1"] });

    now = later(10);
    const updated = getOk(await api.update({ disputeCaseId: created.id, fraudDetails }));
    expect(updated.statusInfo).toEqual({ status: "Draft", expiresAt: later(40).toISOString() });

    now = later(40);
    expect(
      getOk(await api.getCase({ disputeCaseId: created.id })).toUndefined()?.statusInfo,
    ).toEqual({
      status: "Expired",
      expiredAt: later(40).toISOString(),
    });
    expect(
      getOk(await api.findDrafts({ accountId: "account-1", transactionIds: ["transfer-1"] })),
    ).toEqual([]);
    expect(
      getRejection(await api.update({ disputeCaseId: created.id, fraudDetails })),
    ).toMatchObject({
      __typename: "DisputeCaseWrongStatusRejection",
      currentStatus: "Expired",
    });
  });
});

test("null clears the victim", async () => {
  const api = createApi();
  const created = await draft(api, {
    transactionIds: ["transfer-1"],
    fraudDetails,
    victimAccountMembershipId: "member-2",
  });
  const cleared = getOk(
    await api.update({ disputeCaseId: created.id, victimAccountMembershipId: null }),
  );
  expect(cleared.hasVictim).toBe(false);
  expect(getRejection(await api.submit({ disputeCaseId: created.id }))).toMatchObject({
    __typename: "DisputeCaseIncompleteRejection",
    missingFields: [{ path: ["victimAccountMembershipId"] }],
  });
});
