import { describe, expect, test } from "vitest";
import { toFormValues } from "../fraudReport/prefill";
import { toUpdateInput } from "../fraudReport/toInput";
import type {
  FraudCardDetails,
  FraudDetails,
  FraudReportCase,
  FraudReportTransaction,
} from "../fraudReport/types";

const card1: FraudReportTransaction = { id: "card-1", rail: "Card" };
const transfer1: FraudReportTransaction = { id: "transfer-1", rail: "Transfer" };

const fraudDetails: FraudDetails = {
  reportedReason: "Manipulated",
  reportedTypology: "FakeAdvisor",
  description: "A fake advisor called me",
  discoveredAt: "2026-11-20",
  discoveryDetails: "My bank app showed a payment I didn't make",
  fraudsterChannels: ["Phone"],
  sharedInformationWithFraudster: ["VerificationCode"],
  hasFiledPoliceComplaint: true,
};

const fraudCardDetails: FraudCardDetails = {
  isLostOrStolen: true,
  lostOrStolenNoticedAt: "2026-11-19",
  hasContactedMerchant: false,
};

const draft = (overrides: Partial<FraudReportCase> = {}): FraudReportCase => ({
  id: "case-1",
  accountId: "account-1",
  statusInfo: { status: "Draft", expiresAt: "2026-12-24T10:00:00.000Z" },
  transactions: [],
  fraudDetails: null,
  fraudCardDetails: null,
  fraudTransferDetails: null,
  victimAccountMembershipId: null,
  hasVictim: false,
  externalReference: null,
  supportingDocumentCollection: { id: "collection-1", status: "WaitingForDocument" },
  createdAt: "2026-11-24T10:00:00.000Z",
  updatedAt: "2026-11-24T10:00:00.000Z",
  ...overrides,
});

const fullDraft = draft({
  transactions: [card1, transfer1],
  fraudDetails,
  fraudCardDetails,
  fraudTransferDetails: { hasContactedBankOrBeneficiary: true },
  victimAccountMembershipId: "membership-2",
  hasVictim: true,
  externalReference: "ref-42",
});

const roundTrip = (savedCase: FraudReportCase) =>
  toUpdateInput({
    savedCase,
    values: toFormValues(savedCase),
    savedTransactionIds: savedCase.transactions.map(({ id }) => id),
  });

describe("toFormValues", () => {
  test("gives the form values of a draft with card, transfer and fraudster details", () => {
    expect(toFormValues(fullDraft)).toEqual({
      transactions: [card1, transfer1],
      victimAccountMembershipId: "membership-2",
      reportedReason: "Manipulated",
      reportedTypology: "FakeAdvisor",
      description: "A fake advisor called me",
      discoveredAt: "2026-11-20",
      discoveryDetails: "My bank app showed a payment I didn't make",
      fraudsterChannels: ["Phone"],
      sharedInformationWithFraudster: ["VerificationCode"],
      isLostOrStolen: true,
      lostOrStolenNoticedAt: "2026-11-19",
      externalReference: "ref-42",
    });
  });

  test("leaves every field empty on a draft with only transactions", () => {
    expect(toFormValues(draft({ transactions: [card1] }))).toEqual({ transactions: [card1] });
  });

  test("leaves the missing fields empty on a partial draft", () => {
    expect(
      toFormValues(
        draft({
          transactions: [card1],
          fraudDetails: {
            ...fraudDetails,
            discoveredAt: null,
            discoveryDetails: null,
            fraudsterChannels: [],
            sharedInformationWithFraudster: [],
            hasFiledPoliceComplaint: null,
          },
          fraudCardDetails: {
            isLostOrStolen: false,
            lostOrStolenNoticedAt: null,
            hasContactedMerchant: null,
          },
        }),
      ),
    ).toEqual({
      transactions: [card1],
      reportedReason: "Manipulated",
      reportedTypology: "FakeAdvisor",
      description: "A fake advisor called me",
      fraudsterChannels: [],
      sharedInformationWithFraudster: [],
      isLostOrStolen: false,
    });
  });

  test("gives no victim when the case has none to show", () => {
    expect(
      toFormValues(draft({ transactions: [transfer1], hasVictim: true })).victimAccountMembershipId,
    ).toBeUndefined();
  });
});

describe("toFormValues then toUpdateInput", () => {
  test("sends back the stored details of a card-only draft", () => {
    expect(roundTrip(draft({ transactions: [card1], fraudDetails, fraudCardDetails }))).toEqual({
      disputeCaseId: "case-1",
      fraudDetails,
      fraudCardDetails,
    });
  });

  test("sends back the stored details and victim of a transfer-only draft", () => {
    expect(
      roundTrip(
        draft({
          transactions: [transfer1],
          fraudDetails,
          victimAccountMembershipId: "membership-2",
          hasVictim: true,
          externalReference: "ref-42",
        }),
      ),
    ).toEqual({
      disputeCaseId: "case-1",
      fraudDetails,
      victimAccountMembershipId: "membership-2",
      externalReference: "ref-42",
    });
  });

  test("sends back the stored details of a mixed draft", () => {
    expect(roundTrip(fullDraft)).toEqual({
      disputeCaseId: "case-1",
      fraudDetails,
      fraudCardDetails,
      externalReference: "ref-42",
    });
  });

  test("keeps the stored victim when the caller can't see it", () => {
    expect(roundTrip(draft({ transactions: [transfer1], fraudDetails, hasVictim: true }))).toEqual({
      disputeCaseId: "case-1",
      fraudDetails,
    });
  });

  test("sends empty fraudster lists back as null", () => {
    const savedCase = draft({
      transactions: [transfer1],
      fraudDetails: { ...fraudDetails, fraudsterChannels: [], sharedInformationWithFraudster: [] },
    });

    expect(roundTrip(savedCase).fraudDetails).toEqual({
      ...fraudDetails,
      fraudsterChannels: null,
      sharedInformationWithFraudster: null,
    });
  });
});
