import { describe, expect, test } from "vitest";
import {
  type FraudReportRejectionContext,
  type FraudReportRejectionStep,
  getRejectionStep,
} from "../fraudReport/rejections";
import {
  type DisputeCaseIncompleteRejection,
  type FraudReportRejection,
  fraudReportDetailsSteps,
} from "../fraudReport/types";

type Typename = FraudReportRejection["__typename"];

// A Record, so a rejection added to the contract fails typecheck until it is listed here
const rejections: { [K in Typename]: Extract<FraudReportRejection, { __typename: K }> } = {
  AccountMembershipNotFoundRejection: {
    __typename: "AccountMembershipNotFoundRejection",
    message: "",
    id: "membership-2",
  },
  DisputeCaseDetailsNotApplicableRejection: {
    __typename: "DisputeCaseDetailsNotApplicableRejection",
    message: "",
    fields: [{ path: ["fraudCardDetails"] }],
  },
  DisputeCaseIncompleteRejection: {
    __typename: "DisputeCaseIncompleteRejection",
    message: "",
    missingFields: [{ path: ["fraudDetails"] }],
  },
  DisputeCaseMultipleAccountsRejection: {
    __typename: "DisputeCaseMultipleAccountsRejection",
    message: "",
    accountIds: ["account-1", "account-2"],
  },
  DisputeCaseMultipleCardHoldersRejection: {
    __typename: "DisputeCaseMultipleCardHoldersRejection",
    message: "",
    accountMembershipIds: ["membership-1", "membership-2"],
  },
  DisputeCaseNotFoundRejection: {
    __typename: "DisputeCaseNotFoundRejection",
    message: "",
    disputeCaseId: "case-1",
  },
  DisputeCaseTransactionsAlreadyReportedRejection: {
    __typename: "DisputeCaseTransactionsAlreadyReportedRejection",
    message: "",
    transactions: [{ transactionId: "card-1", disputeCaseId: null }],
  },
  DisputeCaseTransactionsLimitExceededRejection: {
    __typename: "DisputeCaseTransactionsLimitExceededRejection",
    message: "",
    transactionCount: 101,
    maxTransactionCount: 100,
  },
  DisputeCaseTransactionsNotFoundRejection: {
    __typename: "DisputeCaseTransactionsNotFoundRejection",
    message: "",
    transactionIds: ["card-1"],
  },
  DisputeCaseTransactionsNotReportableRejection: {
    __typename: "DisputeCaseTransactionsNotReportableRejection",
    message: "",
    transactions: [{ transactionId: "card-1", reason: "TransactionStatusNotReportable" }],
  },
  DisputeCaseTransactionsOutsideReportingWindowRejection: {
    __typename: "DisputeCaseTransactionsOutsideReportingWindowRejection",
    message: "",
    transactions: [{ transactionId: "card-1", reportingWindowEndedAt: "2026-01-01T00:00:00.000Z" }],
  },
  DisputeCaseWrongStatusRejection: {
    __typename: "DisputeCaseWrongStatusRejection",
    message: "",
    disputeCaseId: "case-1",
    currentStatus: "Canceled",
    expectedStatuses: ["Draft"],
  },
};

const expectedSteps: Record<Typename, FraudReportRejectionStep> = {
  AccountMembershipNotFoundRejection: "Victim",
  DisputeCaseDetailsNotApplicableRejection: "Transactions",
  DisputeCaseIncompleteRejection: "Incident",
  DisputeCaseMultipleAccountsRejection: "Transactions",
  DisputeCaseMultipleCardHoldersRejection: "Transactions",
  DisputeCaseNotFoundRejection: "Rejected",
  DisputeCaseTransactionsAlreadyReportedRejection: "Rejected",
  DisputeCaseTransactionsLimitExceededRejection: "Transactions",
  DisputeCaseTransactionsNotFoundRejection: "Transactions",
  DisputeCaseTransactionsNotReportableRejection: "Transactions",
  DisputeCaseTransactionsOutsideReportingWindowRejection: "Rejected",
  DisputeCaseWrongStatusRejection: "Rejected",
};

const incomplete = (...paths: string[][]): DisputeCaseIncompleteRejection => ({
  __typename: "DisputeCaseIncompleteRejection",
  message: "",
  missingFields: paths.map(path => ({ path })),
});

const beforeDraft: FraudReportRejectionContext = {
  hasDraft: false,
  detailsSteps: fraudReportDetailsSteps,
};

const afterDraft: FraudReportRejectionContext = { ...beforeDraft, hasDraft: true };

describe("getRejectionStep", () => {
  test.each(Object.values(rejections))("maps $__typename", rejection => {
    expect(getRejectionStep(rejection, beforeDraft)).toBe(expectedSteps[rejection.__typename]);
  });

  test("shows the submitted screen when the case was submitted elsewhere", () => {
    expect(
      getRejectionStep(
        { ...rejections.DisputeCaseWrongStatusRejection, currentStatus: "Submitted" },
        afterDraft,
      ),
    ).toBe("Submitted");
  });

  test("rejects the report when the victim isn't found once the draft exists", () => {
    expect(getRejectionStep(rejections.AccountMembershipNotFoundRejection, afterDraft)).toBe(
      "Rejected",
    );
  });
});

describe("getRejectionStep: incomplete", () => {
  test.each<[string[], FraudReportRejectionStep]>([
    [["victimAccountMembershipId"], "Victim"],
    [["transactionIds"], "Transactions"],
    [["fraudDetails"], "Incident"],
    [["fraudDetails", "reportedReason"], "Incident"],
    [["fraudDetails", "reportedTypology"], "Incident"],
    [["fraudDetails", "description"], "Incident"],
    [["fraudDetails", "discoveredAt"], "Incident"],
    [["fraudDetails", "discoveryDetails"], "Incident"],
    [["fraudDetails", "fraudsterChannels"], "Fraudster"],
    [["fraudDetails", "sharedInformationWithFraudster"], "Fraudster"],
    [["fraudCardDetails"], "Card"],
    [["fraudCardDetails", "isLostOrStolen"], "Card"],
    [["fraudCardDetails", "lostOrStolenNoticedAt"], "Card"],
  ])("sends a missing %j to %s", (path, step) => {
    expect(getRejectionStep(incomplete(path), beforeDraft)).toBe(step);
  });

  test("sends several missing fields to the earliest step", () => {
    expect(
      getRejectionStep(
        incomplete(["fraudCardDetails"], ["transactionIds"], ["fraudDetails", "fraudsterChannels"]),
        afterDraft,
      ),
    ).toBe("Transactions");
  });

  test("picks the earliest step after moving fields out of missing sub-steps", () => {
    expect(
      getRejectionStep(incomplete(["fraudCardDetails"], ["fraudDetails", "fraudsterChannels"]), {
        ...afterDraft,
        detailsSteps: ["Card"],
      }),
    ).toBe("Incident");
  });

  test("ignores fields the form can't fix when another one can be fixed", () => {
    expect(
      getRejectionStep(
        incomplete(
          ["victimAccountMembershipId"],
          ["fraudCardDetails"],
          ["fraudDetails", "hasFiledPoliceComplaint"],
        ),
        afterDraft,
      ),
    ).toBe("Card");
  });

  test("rejects the report when the victim is missing once the draft exists", () => {
    expect(getRejectionStep(incomplete(["victimAccountMembershipId"]), afterDraft)).toBe(
      "Rejected",
    );
  });

  test("sends fraudster fields to the incident when the flow has no fraudster sub-step", () => {
    expect(
      getRejectionStep(incomplete(["fraudDetails", "fraudsterChannels"]), {
        ...afterDraft,
        detailsSteps: ["Card"],
      }),
    ).toBe("Incident");
  });

  test("sends card fields to the transactions when the flow has no card sub-step", () => {
    expect(
      getRejectionStep(incomplete(["fraudCardDetails"]), {
        ...afterDraft,
        detailsSteps: ["Transfer"],
      }),
    ).toBe("Transactions");
  });

  test.each([
    [["fraudDetails", "hasFiledPoliceComplaint"]],
    [["fraudCardDetails", "hasContactedMerchant"]],
    [["fraudTransferDetails"]],
    [["fraudTransferDetails", "hasContactedBankOrBeneficiary"]],
    [["externalReference"]],
    [["unknownField"]],
  ])("rejects the report when only %j is missing", path => {
    expect(getRejectionStep(incomplete(path), afterDraft)).toBe("Rejected");
  });

  test("rejects the report when no missing field is given", () => {
    expect(getRejectionStep(incomplete(), afterDraft)).toBe("Rejected");
  });
});
