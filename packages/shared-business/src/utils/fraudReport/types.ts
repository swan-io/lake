// Structural types for the fraud report and its step list. The API types mirror the Swan
// partner GraphQL schema (dispute cases), so each app maps its generated types onto them.

export type FraudReason = "Unauthorized" | "Manipulated";

export type FraudTypology =
  | "FakeAdvisor"
  | "ImpersonationOrPhishing"
  | "FakeWebsite"
  | "FakeSupplierOrInvoice"
  | "InvestmentScam"
  | "RomanceScam"
  | "Other";

export type FraudsterChannel = "Email" | "Sms" | "Phone" | "Website" | "Application" | "Other";

export type SharedInformationWithFraudster =
  | "SwanPasscode"
  | "PartnerPassword"
  | "VerificationCode"
  | "PersonalInformation"
  | "CardDetails"
  | "BankDetails"
  | "Other"
  | "None";

export type DisputeCaseStatus = "Draft" | "Expired" | "Canceled" | "Submitted";

export type DisputeCaseTransactionNotReportableReason =
  | "TransactionTypeNotReportable"
  | "TransactionStatusNotReportable";

// Supporting document purposes for dispute cases. Not in the public schema yet.
export type FraudReportDocumentPurpose =
  | "PoliceReport"
  | "FraudEvidence"
  | "DisputeCorrespondence"
  | "CardFraudDeclaration"
  | "Other";

export type SupportingDocumentCollectionStatus =
  | "WaitingForDocument"
  | "PendingReview"
  | "Approved"
  | "Canceled"
  | "Rejected";

// Dates are ISO 8601 strings: `Date` is YYYY-MM-DD, `DateTime` a full timestamp.

export type FraudDetailsInput = {
  reportedReason: FraudReason;
  reportedTypology: FraudTypology;
  description: string;
  discoveredAt?: string | null;
  discoveryDetails?: string | null;
  fraudsterChannels?: FraudsterChannel[] | null;
  sharedInformationWithFraudster?: SharedInformationWithFraudster[] | null;
  hasFiledPoliceComplaint?: boolean | null;
};

export type FraudCardDetailsInput = {
  isLostOrStolen?: boolean | null;
  lostOrStolenNoticedAt?: string | null;
  hasContactedMerchant?: boolean | null;
};

export type FraudTransferDetailsInput = {
  hasContactedBankOrBeneficiary?: boolean | null;
};

export type DraftFraudDisputeCaseInput = {
  transactionIds: string[];
  fraudDetails?: FraudDetailsInput | null;
  fraudCardDetails?: FraudCardDetailsInput | null;
  fraudTransferDetails?: FraudTransferDetailsInput | null;
  victimAccountMembershipId?: string | null;
  externalReference?: string | null;
};

// Leaving a field out keeps the stored value; `null` clears it.
// `transactionIds` can be left out, never cleared.
export type UpdateDraftFraudDisputeCaseInput = {
  disputeCaseId: string;
  transactionIds?: string[];
  fraudDetails?: FraudDetailsInput | null;
  fraudCardDetails?: FraudCardDetailsInput | null;
  fraudTransferDetails?: FraudTransferDetailsInput | null;
  victimAccountMembershipId?: string | null;
  externalReference?: string | null;
};

export type SubmitDisputeCaseInput = { disputeCaseId: string };

export type CancelDisputeCaseInput = { disputeCaseId: string };

export type FraudDetails = {
  reportedReason: FraudReason;
  reportedTypology: FraudTypology;
  description: string;
  discoveredAt: string | null;
  discoveryDetails: string | null;
  fraudsterChannels: FraudsterChannel[];
  sharedInformationWithFraudster: SharedInformationWithFraudster[];
  hasFiledPoliceComplaint: boolean | null;
};

export type FraudCardDetails = {
  isLostOrStolen: boolean | null;
  lostOrStolenNoticedAt: string | null;
  hasContactedMerchant: boolean | null;
};

export type FraudTransferDetails = {
  hasContactedBankOrBeneficiary: boolean | null;
};

export type DisputeCaseStatusInfo =
  | { status: "Draft"; expiresAt: string }
  | { status: "Expired"; expiredAt: string }
  | { status: "Canceled"; canceledAt: string }
  | { status: "Submitted"; submittedAt: string };

export type FraudReportRail = "Card" | "Transfer";

export type FraudReportTransactionType =
  | "CardOutDebit"
  | "SepaCreditTransferOut"
  | "SepaInstantCreditTransferOut"
  | "InternationalCreditTransferOut"
  | "InternalCreditTransferOut";

export type FraudReportTransaction = {
  id: string;
  rail: FraudReportRail;
  type: FraudReportTransactionType;
  executionDate: string;
  counterparty: string;
  amount: { value: string; currency: string };
};

export type FraudReportCase = {
  id: string;
  accountId: string;
  statusInfo: DisputeCaseStatusInfo;
  // Only the case's transactions the caller can view (`reportedTransactions`). Never send them
  // back as `transactionIds`: hidden ones would be dropped from the case.
  transactions: FraudReportTransaction[];
  fraudDetails: FraudDetails | null;
  fraudCardDetails: FraudCardDetails | null;
  fraudTransferDetails: FraudTransferDetails | null;
  // Null when there is no victim yet, or when the caller can't see it: check `hasVictim`.
  victimAccountMembershipId: string | null;
  hasVictim: boolean;
  externalReference: string | null;
  supportingDocumentCollection: {
    id: string;
    status: SupportingDocumentCollectionStatus;
  };
  createdAt: string;
  updatedAt: string;
};

// Paths relative to UpdateDraftFraudDisputeCaseInput, e.g. ["fraudDetails"].
export type DisputeCaseFieldPath = { path: string[] };

export type DisputeCaseNotFoundRejection = {
  __typename: "DisputeCaseNotFoundRejection";
  message: string;
  disputeCaseId: string;
};

export type DisputeCaseWrongStatusRejection = {
  __typename: "DisputeCaseWrongStatusRejection";
  message: string;
  disputeCaseId: string;
  currentStatus: DisputeCaseStatus;
  expectedStatuses: DisputeCaseStatus[];
};

export type DisputeCaseTransactionsNotFoundRejection = {
  __typename: "DisputeCaseTransactionsNotFoundRejection";
  message: string;
  transactionIds: string[];
};

export type DisputeCaseTransactionsLimitExceededRejection = {
  __typename: "DisputeCaseTransactionsLimitExceededRejection";
  message: string;
  transactionCount: number;
  maxTransactionCount: number;
};

export type DisputeCaseMultipleAccountsRejection = {
  __typename: "DisputeCaseMultipleAccountsRejection";
  message: string;
  accountIds: string[];
};

export type DisputeCaseMultipleCardHoldersRejection = {
  __typename: "DisputeCaseMultipleCardHoldersRejection";
  message: string;
  accountMembershipIds: string[];
};

export type DisputeCaseTransactionsNotReportableRejection = {
  __typename: "DisputeCaseTransactionsNotReportableRejection";
  message: string;
  transactions: { transactionId: string; reason: DisputeCaseTransactionNotReportableReason }[];
};

export type DisputeCaseTransactionsOutsideReportingWindowRejection = {
  __typename: "DisputeCaseTransactionsOutsideReportingWindowRejection";
  message: string;
  transactions: { transactionId: string; reportingWindowEndedAt: string }[];
};

export type DisputeCaseDetailsNotApplicableRejection = {
  __typename: "DisputeCaseDetailsNotApplicableRejection";
  message: string;
  fields: DisputeCaseFieldPath[];
};

export type AccountMembershipNotFoundRejection = {
  __typename: "AccountMembershipNotFoundRejection";
  message: string;
  id: string;
};

export type DisputeCaseIncompleteRejection = {
  __typename: "DisputeCaseIncompleteRejection";
  message: string;
  missingFields: DisputeCaseFieldPath[];
};

export type DisputeCaseTransactionsAlreadyReportedRejection = {
  __typename: "DisputeCaseTransactionsAlreadyReportedRejection";
  message: string;
  // `disputeCaseId` is null when the caller can't read the existing case.
  transactions: { transactionId: string; disputeCaseId: string | null }[];
};

export type DraftFraudDisputeCaseRejection =
  | DisputeCaseTransactionsNotFoundRejection
  | DisputeCaseTransactionsLimitExceededRejection
  | DisputeCaseMultipleAccountsRejection
  | DisputeCaseMultipleCardHoldersRejection
  | DisputeCaseTransactionsNotReportableRejection
  | DisputeCaseTransactionsOutsideReportingWindowRejection
  | DisputeCaseDetailsNotApplicableRejection
  | AccountMembershipNotFoundRejection;

export type UpdateDraftFraudDisputeCaseRejection =
  | DisputeCaseNotFoundRejection
  | DisputeCaseWrongStatusRejection
  | DraftFraudDisputeCaseRejection;

export type SubmitDisputeCaseRejection =
  | DisputeCaseNotFoundRejection
  | DisputeCaseIncompleteRejection
  | DisputeCaseTransactionsAlreadyReportedRejection
  | DisputeCaseTransactionsNotFoundRejection
  | DisputeCaseTransactionsNotReportableRejection
  | DisputeCaseTransactionsOutsideReportingWindowRejection
  | DisputeCaseWrongStatusRejection;

export type CancelDisputeCaseRejection =
  | DisputeCaseNotFoundRejection
  | DisputeCaseWrongStatusRejection;

export type FraudReportRejection =
  | UpdateDraftFraudDisputeCaseRejection
  | SubmitDisputeCaseRejection
  | CancelDisputeCaseRejection;

// Steps in display order. "Details" groups the sub-steps that depend on the selection.
export const fraudReportSteps = [
  "Intro",
  "Victim",
  "Transactions",
  "Incident",
  "Details",
  "Documents",
  "Submitted",
] as const;

export type FraudReportStep = (typeof fraudReportSteps)[number];

export const fraudReportDetailsSteps = ["Card", "Transfer", "Fraudster"] as const;

export type FraudReportDetailsStep = (typeof fraudReportDetailsSteps)[number];
