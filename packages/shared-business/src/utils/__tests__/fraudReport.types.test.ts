import { describe, expect, test } from "vitest";
import type { FraudReportRejection } from "../fraudReport/types";
import { isTranslationKey } from "../i18n";

// A Record, so a rejection added to the contract fails typecheck until it is listed here
const rejectionTypenames: Record<FraudReportRejection["__typename"], true> = {
  AccountMembershipNotFoundRejection: true,
  DisputeCaseDetailsNotApplicableRejection: true,
  DisputeCaseIncompleteRejection: true,
  DisputeCaseMultipleAccountsRejection: true,
  DisputeCaseMultipleCardHoldersRejection: true,
  DisputeCaseNotFoundRejection: true,
  DisputeCaseTransactionsAlreadyReportedRejection: true,
  DisputeCaseTransactionsLimitExceededRejection: true,
  DisputeCaseTransactionsNotFoundRejection: true,
  DisputeCaseTransactionsNotReportableRejection: true,
  DisputeCaseTransactionsOutsideReportingWindowRejection: true,
  DisputeCaseWrongStatusRejection: true,
};

describe("fraud report rejections", () => {
  test.each(Object.keys(rejectionTypenames))("%s has a translation key", typename => {
    expect(isTranslationKey(`rejection.${typename}`)).toBe(true);
  });
});
