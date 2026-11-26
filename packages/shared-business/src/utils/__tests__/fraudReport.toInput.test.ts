import { Option, Result } from "@bloodyowl/boxed";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { createFakeFraudReportApi } from "../fraudReport/fakeApi";
import { getCaseRail, getTransactionRail } from "../fraudReport/rail";
import { FraudReportFormValues, toDraftInput, toUpdateInput } from "../fraudReport/toInput";
import type {
  FraudCardDetails,
  FraudDetails,
  FraudReportCase,
  FraudReportTransaction,
} from "../fraudReport/types";
import {
  validateDescription,
  validateDiscoveryDetails,
  validateExternalReference,
  validateNotInFuture,
  validateSelected,
  validateSharedInformation,
  validateTransactionIds,
} from "../fraudReport/validation";

const card1: FraudReportTransaction = { id: "card-1", rail: "Card" };
const card2: FraudReportTransaction = { id: "card-2", rail: "Card" };
const transfer1: FraudReportTransaction = { id: "transfer-1", rail: "Transfer" };
const transfer2: FraudReportTransaction = { id: "transfer-2", rail: "Transfer" };

const DESCRIPTION_REGEX = /^(?=[\s\S]*\S)[\s\S]{1,2000}$/;
const DISCOVERY_DETAILS_REGEX = /^(?=[\s\S]*\S)[\s\S]{1,1000}$/;
const EXTERNAL_REFERENCE_REGEX = /^[\x20-\x7E]{1,255}$/;

describe("getTransactionRail", () => {
  test("gives the card rail to outgoing card debits", () => {
    expect(getTransactionRail("CardOutDebit")).toEqual(Option.Some("Card"));
  });

  test.each([
    "SepaCreditTransferOut",
    "SepaInstantCreditTransferOut",
    "InternationalCreditTransferOut",
    "InternalCreditTransferOut",
  ])("gives the transfer rail to %s", type => {
    expect(getTransactionRail(type)).toEqual(Option.Some("Transfer"));
  });

  test.each([
    "CardOutAuthorization",
    "CardOutDebitReversal",
    "CardOutCredit",
    "CardOutCreditReversal",
    "CardInCredit",
    "CardInChargeback",
    "CardInChargebackReversal",
    "SepaCreditTransferOutReturn",
    "SepaCreditTransferOutRecall",
    "SepaCreditTransferIn",
    "SepaCreditTransferInReturn",
    "SepaCreditTransferInRecall",
    "SepaInstantCreditTransferOutRecall",
    "SepaInstantCreditTransferIn",
    "SepaInstantCreditTransferInRecall",
    "InternationalCreditTransferOutReturn",
    "InternationalCreditTransferIn",
    "InternationalCreditTransferInReturn",
    "InternalCreditTransferOutReturn",
    "InternalCreditTransferOutRecall",
    "InternalCreditTransferIn",
    "InternalCreditTransferInReturn",
    "InternalCreditTransferInRecall",
    "SepaDirectDebitOut",
    "SepaDirectDebitOutReturn",
    "SepaDirectDebitOutReversal",
    "SepaDirectDebitIn",
    "SepaDirectDebitInReturn",
    "SepaDirectDebitInReversal",
    "InternalDirectDebitOut",
    "InternalDirectDebitOutReturn",
    "InternalDirectDebitIn",
    "InternalDirectDebitInReturn",
    "CheckIn",
    "CheckInReturn",
    "FeesOut",
    "FeesIn",
    "",
  ])("gives no rail to %s, which can't be reported", type => {
    expect(getTransactionRail(type)).toEqual(Option.None());
  });
});

describe("getCaseRail", () => {
  test("is card-only when every transaction is a card transaction", () => {
    expect(getCaseRail([card1, card2])).toEqual(Option.Some("CardOnly"));
  });

  test("is transfer-only when every transaction is a transfer", () => {
    expect(getCaseRail([transfer1, transfer2])).toEqual(Option.Some("TransferOnly"));
  });

  test("is mixed when the selection holds both rails", () => {
    expect(getCaseRail([transfer1, card1])).toEqual(Option.Some("Mixed"));
  });

  test("has no rail without transactions", () => {
    expect(getCaseRail([])).toEqual(Option.None());
  });
});

describe("validateTransactionIds", () => {
  test("requires at least one transaction", () => {
    expect(validateTransactionIds([])).toBe("Required");
  });

  test("refuses duplicates", () => {
    expect(validateTransactionIds(["card-1", "transfer-1", "card-1"])).toBe("Duplicates");
  });

  test("accepts unique transaction IDs", () => {
    expect(validateTransactionIds(["card-1"])).toBeUndefined();
    expect(validateTransactionIds(["card-1", "transfer-1"])).toBeUndefined();
  });
});

describe("validateSelected", () => {
  test("requires a value", () => {
    expect(validateSelected(undefined)).toBe("Required");
  });

  test("accepts a selected value", () => {
    expect(validateSelected("Manipulated")).toBeUndefined();
  });
});

describe("validateNotInFuture", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-11-20T10:00:00.000Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllEnvs();
  });

  test("accepts today and past dates", () => {
    expect(validateNotInFuture("2026-11-20")).toBeUndefined();
    expect(validateNotInFuture("2026-11-19")).toBeUndefined();
    expect(validateNotInFuture("2025-01-01")).toBeUndefined();
  });

  test("refuses dates after today", () => {
    expect(validateNotInFuture("2026-11-21")).toBe("DateInFuture");
    expect(validateNotInFuture("2027-01-01")).toBe("DateInFuture");
  });

  test("takes today from UTC, whatever the time of day", () => {
    vi.setSystemTime(new Date("2026-11-20T23:59:59.000Z"));
    expect(validateNotInFuture("2026-11-20")).toBeUndefined();
    expect(validateNotInFuture("2026-11-21")).toBe("DateInFuture");

    vi.setSystemTime(new Date("2026-11-21T00:00:00.000Z"));
    expect(validateNotInFuture("2026-11-21")).toBeUndefined();
  });

  test("refuses tomorrow in UTC, even where it is already tomorrow", () => {
    vi.stubEnv("TZ", "Pacific/Auckland");
    vi.setSystemTime(new Date("2026-11-20T12:30:00.000Z"));
    expect(validateNotInFuture("2026-11-20")).toBeUndefined();
    expect(validateNotInFuture("2026-11-21")).toBe("DateInFuture");
  });

  test("accepts today in UTC, even where it is still yesterday", () => {
    vi.stubEnv("TZ", "America/Los_Angeles");
    vi.setSystemTime(new Date("2026-11-21T02:00:00.000Z"));
    expect(validateNotInFuture("2026-11-21")).toBeUndefined();
    expect(validateNotInFuture("2026-11-22")).toBe("DateInFuture");
  });

  test("refuses anything that isn't a YYYY-MM-DD date", () => {
    expect(validateNotInFuture("20/11/2026")).toBe("InvalidDate");
    expect(validateNotInFuture("2026-13-45")).toBe("InvalidDate");
    expect(validateNotInFuture("2026-11-20T10:00:00.000Z")).toBe("InvalidDate");
    expect(validateNotInFuture("yesterday")).toBe("InvalidDate");
  });

  test("accepts an empty value, as both dates are optional", () => {
    expect(validateNotInFuture(undefined)).toBeUndefined();
    expect(validateNotInFuture("")).toBeUndefined();
  });
});

describe("validateSharedInformation", () => {
  test("refuses None with other values", () => {
    expect(validateSharedInformation(["None", "CardDetails"])).toBe("NoneWithOtherValues");
    expect(validateSharedInformation(["SwanPasscode", "Other", "None"])).toBe(
      "NoneWithOtherValues",
    );
  });

  test("accepts None alone", () => {
    expect(validateSharedInformation(["None"])).toBeUndefined();
  });

  test("accepts any other values, or no answer", () => {
    expect(validateSharedInformation(["CardDetails", "BankDetails"])).toBeUndefined();
    expect(validateSharedInformation([])).toBeUndefined();
    expect(validateSharedInformation(undefined)).toBeUndefined();
  });
});

describe("validateDescription", () => {
  test("requires text that isn't only whitespace", () => {
    expect(validateDescription(undefined)).toBe("Required");
    expect(validateDescription("")).toBe("Required");
    expect(validateDescription("  \n\t ")).toBe("Required");
  });

  test("refuses more than 2000 characters", () => {
    expect(validateDescription("a".repeat(2001))).toBe("TooLong");
  });

  test("accepts up to 2000 characters, line breaks included", () => {
    expect(validateDescription("a")).toBeUndefined();
    expect(validateDescription("My card was used\nin a shop I never went to.")).toBeUndefined();
    expect(validateDescription("a".repeat(2000))).toBeUndefined();
  });

  test.each(["", " ", "\n", "a", " a ", "é\n\nè", "a".repeat(2000), "a".repeat(2001)])(
    "agrees with the format documented by the API (sample %#)",
    sample => {
      expect(validateDescription(sample) == null).toBe(DESCRIPTION_REGEX.test(sample));
    },
  );
});

describe("validateDiscoveryDetails", () => {
  test("refuses more than 1000 characters", () => {
    expect(validateDiscoveryDetails("a".repeat(1001))).toBe("TooLong");
  });

  test("accepts up to 1000 characters", () => {
    expect(validateDiscoveryDetails("I saw it on my statement.")).toBeUndefined();
    expect(validateDiscoveryDetails("a".repeat(1000))).toBeUndefined();
  });

  test("accepts an empty value, as the field is optional", () => {
    expect(validateDiscoveryDetails(undefined)).toBeUndefined();
    expect(validateDiscoveryDetails("")).toBeUndefined();
    expect(validateDiscoveryDetails("   ")).toBeUndefined();
  });

  test.each(["a", " a ", "é\n\nè", "a".repeat(1000), "a".repeat(1001)])(
    "agrees with the format documented by the API for values that are sent (sample %#)",
    sample => {
      expect(validateDiscoveryDetails(sample) == null).toBe(DISCOVERY_DETAILS_REGEX.test(sample));
    },
  );
});

describe("validateExternalReference", () => {
  test("refuses characters outside printable ASCII", () => {
    expect(validateExternalReference("réf-123")).toBe("InvalidCharacters");
    expect(validateExternalReference("ref\n123")).toBe("InvalidCharacters");
    expect(validateExternalReference("ref\t123")).toBe("InvalidCharacters");
    expect(validateExternalReference("ref\x1F")).toBe("InvalidCharacters");
    expect(validateExternalReference("ref\x7F")).toBe("InvalidCharacters");
    expect(validateExternalReference("ref 🙂")).toBe("InvalidCharacters");
  });

  test("refuses more than 255 characters", () => {
    expect(validateExternalReference("a".repeat(256))).toBe("TooLong");
  });

  test("accepts up to 255 printable ASCII characters", () => {
    expect(validateExternalReference("REF-2026/11 #42 ~ok")).toBeUndefined();
    expect(validateExternalReference("a".repeat(255))).toBeUndefined();
  });

  test("accepts an empty value, as the field is optional", () => {
    expect(validateExternalReference(undefined)).toBeUndefined();
    expect(validateExternalReference("")).toBeUndefined();
  });

  test.each(["a", " ", "REF 1", "réf", "a\nb", "a".repeat(255), "a".repeat(256)])(
    "agrees with the format documented by the API for values that are sent (sample %#)",
    sample => {
      expect(validateExternalReference(sample) == null).toBe(EXTERNAL_REFERENCE_REGEX.test(sample));
    },
  );
});

const incident = {
  reportedReason: "Manipulated",
  reportedTypology: "FakeAdvisor",
  description: "Someone called me pretending to be my bank.",
} satisfies Partial<FraudReportFormValues>;

const filled: Omit<FraudReportFormValues, "transactions"> = {
  ...incident,
  victimAccountMembershipId: "member-1",
  discoveredAt: "2026-11-18",
  discoveryDetails: "I saw it on my statement.",
  fraudsterChannels: ["Phone", "Sms"],
  sharedInformationWithFraudster: ["VerificationCode"],
  isLostOrStolen: true,
  lostOrStolenNoticedAt: "2026-11-17",
  externalReference: "REF-42",
};

const fraudDetails: FraudDetails = {
  reportedReason: "Manipulated",
  reportedTypology: "FakeAdvisor",
  description: "Someone called me pretending to be my bank.",
  discoveredAt: "2026-11-18",
  discoveryDetails: "I saw it on my statement.",
  fraudsterChannels: ["Phone", "Sms"],
  sharedInformationWithFraudster: ["VerificationCode"],
  hasFiledPoliceComplaint: null,
};

const fraudCardDetails: FraudCardDetails = {
  isLostOrStolen: true,
  lostOrStolenNoticedAt: "2026-11-17",
  hasContactedMerchant: null,
};

describe("toDraftInput", () => {
  test("sends only the transaction IDs when nothing else is filled", () => {
    expect(toDraftInput({ transactions: [card1, transfer1] })).toStrictEqual({
      transactionIds: ["card-1", "transfer-1"],
    });
  });

  test("sends the card details and no victim on a card-only case", () => {
    expect(toDraftInput({ ...filled, transactions: [card1, card2] })).toStrictEqual({
      transactionIds: ["card-1", "card-2"],
      fraudDetails,
      fraudCardDetails,
      externalReference: "REF-42",
    });
  });

  test("sends the victim and no card details on a transfer-only case", () => {
    expect(toDraftInput({ ...filled, transactions: [transfer1, transfer2] })).toStrictEqual({
      transactionIds: ["transfer-1", "transfer-2"],
      fraudDetails,
      victimAccountMembershipId: "member-1",
      externalReference: "REF-42",
    });
  });

  test("sends the card details and no victim on a mixed case", () => {
    expect(toDraftInput({ ...filled, transactions: [transfer1, card1] })).toStrictEqual({
      transactionIds: ["transfer-1", "card-1"],
      fraudDetails,
      fraudCardDetails,
      externalReference: "REF-42",
    });
  });

  test("never sends transfer details", () => {
    expect(toDraftInput({ ...filled, transactions: [transfer1] })).not.toHaveProperty(
      "fraudTransferDetails",
    );
    expect(toDraftInput({ ...filled, transactions: [transfer1, card1] })).not.toHaveProperty(
      "fraudTransferDetails",
    );
  });

  test("leaves the victim out of a transfer-only case until one is picked", () => {
    expect(toDraftInput({ ...incident, transactions: [transfer1] })).not.toHaveProperty(
      "victimAccountMembershipId",
    );
  });

  test.each([
    ["reason", { reportedReason: undefined }],
    ["fraud type", { reportedTypology: undefined }],
    ["description", { description: undefined }],
    ["description", { description: "  \n " }],
  ])("leaves the fraud details out while the %s is missing", (_, missing) => {
    expect(toDraftInput({ ...filled, ...missing, transactions: [transfer1] })).not.toHaveProperty(
      "fraudDetails",
    );
  });

  test("sends null for the optional fraud details left empty", () => {
    expect(
      toDraftInput({
        ...incident,
        discoveredAt: "",
        discoveryDetails: "   ",
        fraudsterChannels: [],
        sharedInformationWithFraudster: [],
        transactions: [card1],
      }),
    ).toStrictEqual({
      transactionIds: ["card-1"],
      fraudDetails: {
        ...incident,
        discoveredAt: null,
        discoveryDetails: null,
        fraudsterChannels: null,
        sharedInformationWithFraudster: null,
        hasFiledPoliceComplaint: null,
      },
    });
  });

  test("keeps the description as the user typed it", () => {
    const description = "  First line\n\nSecond line  ";
    expect(
      toDraftInput({ ...incident, description, transactions: [card1] }).fraudDetails?.description,
    ).toBe(description);
  });

  test("leaves the card details out until one of them is answered", () => {
    expect(toDraftInput({ ...incident, transactions: [card1] })).not.toHaveProperty(
      "fraudCardDetails",
    );
    expect(
      toDraftInput({ ...incident, lostOrStolenNoticedAt: "", transactions: [card1] }),
    ).not.toHaveProperty("fraudCardDetails");
  });

  test("sends null for the card detail left empty", () => {
    expect(
      toDraftInput({ isLostOrStolen: false, transactions: [card1] }).fraudCardDetails,
    ).toStrictEqual({
      isLostOrStolen: false,
      lostOrStolenNoticedAt: null,
      hasContactedMerchant: null,
    });
    expect(
      toDraftInput({ lostOrStolenNoticedAt: "2026-11-17", transactions: [card1] }).fraudCardDetails,
    ).toStrictEqual({
      isLostOrStolen: null,
      lostOrStolenNoticedAt: "2026-11-17",
      hasContactedMerchant: null,
    });
  });

  test("leaves an empty external reference out", () => {
    expect(toDraftInput({ externalReference: "", transactions: [card1] })).toStrictEqual({
      transactionIds: ["card-1"],
    });
  });
});

describe("toUpdateInput", () => {
  const savedCase = { id: "case-1", fraudDetails: null, fraudCardDetails: null };
  const disputeCaseId = savedCase.id;

  test("sends the card details and no victim on a card-only case", () => {
    expect(
      toUpdateInput({
        savedCase,
        values: { ...filled, transactions: [card1, card2] },
        savedTransactionIds: ["card-1"],
      }),
    ).toStrictEqual({
      disputeCaseId,
      transactionIds: ["card-1", "card-2"],
      fraudDetails,
      fraudCardDetails,
      externalReference: "REF-42",
    });
  });

  test("sends the victim and no card details on a transfer-only case", () => {
    expect(
      toUpdateInput({
        savedCase,
        values: { ...filled, transactions: [transfer1] },
        savedTransactionIds: ["transfer-1", "card-1"],
      }),
    ).toStrictEqual({
      disputeCaseId,
      transactionIds: ["transfer-1"],
      fraudDetails,
      victimAccountMembershipId: "member-1",
      externalReference: "REF-42",
    });
  });

  test("sends the card details and no victim on a mixed case", () => {
    expect(
      toUpdateInput({
        savedCase,
        values: { ...filled, transactions: [transfer1, card1] },
        savedTransactionIds: ["transfer-1"],
      }),
    ).toStrictEqual({
      disputeCaseId,
      transactionIds: ["transfer-1", "card-1"],
      fraudDetails,
      fraudCardDetails,
      externalReference: "REF-42",
    });
  });

  test("never sends transfer details", () => {
    expect(
      toUpdateInput({
        savedCase,
        values: { ...filled, transactions: [transfer1] },
        savedTransactionIds: [],
      }),
    ).not.toHaveProperty("fraudTransferDetails");
  });

  test("clears the fraudster answers once no fraudster convinced the user", () => {
    expect(
      toUpdateInput({
        savedCase,
        values: { ...filled, reportedReason: "Unauthorized", transactions: [card1] },
        savedTransactionIds: ["card-1"],
      }).fraudDetails,
    ).toStrictEqual({
      ...fraudDetails,
      reportedReason: "Unauthorized",
      fraudsterChannels: null,
      sharedInformationWithFraudster: null,
    });
  });

  test("leaves the transaction IDs out when the selection didn't change", () => {
    expect(
      toUpdateInput({
        savedCase,
        values: { ...incident, transactions: [card1, transfer1] },
        savedTransactionIds: ["transfer-1", "card-1"],
      }),
    ).toStrictEqual({ disputeCaseId, fraudDetails: expect.any(Object) });
  });

  test.each([
    ["a transaction was added", [card1, card2], ["card-1"]],
    ["a transaction was removed", [card1], ["card-1", "card-2"]],
    ["a transaction was swapped", [card1, transfer1], ["card-1", "card-2"]],
    ["a transaction is there twice", [card1, card1], ["card-1", "card-2"]],
  ])("sends the whole selection when %s", (_, transactions, savedTransactionIds) => {
    expect(
      toUpdateInput({ savedCase, values: { transactions }, savedTransactionIds }),
    ).toStrictEqual({ disputeCaseId, transactionIds: transactions.map(({ id }) => id) });
  });

  test("leaves every group out when nothing is filled", () => {
    expect(
      toUpdateInput({
        savedCase,
        values: { transactions: [card1] },
        savedTransactionIds: ["card-1"],
      }),
    ).toStrictEqual({ disputeCaseId });
  });

  test("clears the external reference when it was emptied", () => {
    expect(
      toUpdateInput({
        savedCase,
        values: { externalReference: "", transactions: [card1] },
        savedTransactionIds: ["card-1"],
      }),
    ).toStrictEqual({ disputeCaseId, externalReference: null });
  });

  test("keeps the stored external reference when the form has none", () => {
    expect(
      toUpdateInput({
        savedCase,
        values: { ...incident, transactions: [card1] },
        savedTransactionIds: ["card-1"],
      }),
    ).not.toHaveProperty("externalReference");
  });

  test("holds the card details and the victim back while no transaction is selected", () => {
    expect(
      toUpdateInput({
        savedCase,
        values: { ...filled, transactions: [] },
        savedTransactionIds: [],
      }),
    ).toStrictEqual({ disputeCaseId, fraudDetails, externalReference: "REF-42" });
  });

  test("sends back the actions taken saved on the case, which the form doesn't hold", () => {
    const input = toUpdateInput({
      savedCase: {
        id: "case-1",
        fraudDetails: { ...fraudDetails, hasFiledPoliceComplaint: true },
        fraudCardDetails: { ...fraudCardDetails, hasContactedMerchant: false },
      },
      values: { ...filled, transactions: [card1] },
      savedTransactionIds: ["card-1"],
    });

    expect(input.fraudDetails?.hasFiledPoliceComplaint).toBe(true);
    expect(input.fraudCardDetails?.hasContactedMerchant).toBe(false);
  });
});

describe("inputs sent to the API", () => {
  const createApi = () =>
    createFakeFraudReportApi({
      transactions: [
        {
          id: "card-1",
          accountId: "account-1",
          rail: "Card",
          cardholderAccountMembershipId: "member-2",
        },
        { id: "transfer-1", accountId: "account-1", rail: "Transfer" },
      ],
      accountMemberships: [
        { id: "member-1", accountId: "account-1" },
        { id: "member-2", accountId: "account-1" },
      ],
    });

  const getCase = (result: Result<FraudReportCase, unknown>) =>
    result.match({
      Ok: value => value,
      Error: error => {
        throw new Error(`The API refused the input: ${JSON.stringify(error)}`);
      },
    });

  test("a card-only draft is accepted, with its card details and the cardholder as victim", async () => {
    const created = getCase(
      await createApi().draft(toDraftInput({ ...filled, transactions: [card1] })),
    );

    expect(created.fraudCardDetails).toMatchObject({ isLostOrStolen: true });
    expect(created.victimAccountMembershipId).toBe("member-2");
  });

  test("a transfer-only draft is accepted, with the victim picked in the form", async () => {
    const created = getCase(
      await createApi().draft(toDraftInput({ ...filled, transactions: [transfer1] })),
    );

    expect(created.fraudCardDetails).toBeNull();
    expect(created.victimAccountMembershipId).toBe("member-1");
  });

  test("a mixed draft is accepted, with its card details and the cardholder as victim", async () => {
    const created = getCase(
      await createApi().draft(toDraftInput({ ...filled, transactions: [transfer1, card1] })),
    );

    expect(created.fraudCardDetails).toMatchObject({ isLostOrStolen: true });
    expect(created.victimAccountMembershipId).toBe("member-2");
  });

  test("an update is accepted when the selection moves from card-only to transfer-only", async () => {
    const api = createApi();
    const savedCase = getCase(await api.draft(toDraftInput({ ...filled, transactions: [card1] })));

    const updated = getCase(
      await api.update(
        toUpdateInput({
          savedCase,
          values: { ...filled, transactions: [transfer1] },
          savedTransactionIds: ["card-1"],
        }),
      ),
    );

    expect(updated.transactions).toStrictEqual([transfer1]);
    expect(updated.fraudCardDetails).toBeNull();
    expect(updated.victimAccountMembershipId).toBe("member-1");
  });

  test("an update is accepted when the selection moves from transfer-only to card-only", async () => {
    const api = createApi();
    const savedCase = getCase(
      await api.draft(toDraftInput({ ...filled, transactions: [transfer1] })),
    );

    const updated = getCase(
      await api.update(
        toUpdateInput({
          savedCase,
          values: { ...filled, transactions: [card1] },
          savedTransactionIds: ["transfer-1"],
        }),
      ),
    );

    expect(updated.transactions).toStrictEqual([card1]);
    expect(updated.fraudCardDetails).toMatchObject({ isLostOrStolen: true });
    expect(updated.victimAccountMembershipId).toBe("member-2");
  });

  test("an update keeps the actions taken that another client stored on the draft", async () => {
    const api = createApi();
    const savedCase = getCase(
      await api.draft({
        transactionIds: ["card-1", "transfer-1"],
        fraudDetails: { ...incident, hasFiledPoliceComplaint: true },
        fraudCardDetails: { hasContactedMerchant: true },
        fraudTransferDetails: { hasContactedBankOrBeneficiary: true },
      }),
    );

    const updated = getCase(
      await api.update(
        toUpdateInput({
          savedCase,
          values: { ...filled, transactions: [card1, transfer1] },
          savedTransactionIds: ["card-1", "transfer-1"],
        }),
      ),
    );

    expect(updated.fraudDetails?.hasFiledPoliceComplaint).toBe(true);
    expect(updated.fraudCardDetails).toStrictEqual({
      isLostOrStolen: true,
      lostOrStolenNoticedAt: "2026-11-17",
      hasContactedMerchant: true,
    });
    expect(updated.fraudTransferDetails).toStrictEqual({ hasContactedBankOrBeneficiary: true });
  });
});
