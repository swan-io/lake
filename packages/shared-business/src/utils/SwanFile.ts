export type SwanFileStatusInfo =
  | { status: "Uploading"; progress: number }
  | { status: "Uploaded" }
  | { status: "Pending" }
  | { status: "Validated" }
  | {
      status: "Refused";
      reason: string;
      reasonCode?:
        | "CompanyNameMismatch"
        | "ExpiredDocument"
        | "InvalidAddress"
        | "InvalidDocument"
        | "InvalidOrMissingData"
        | "UnacceptableDocument"
        | "ProviderColorIdDocumentRequired"
        | "MissingSignature"
        | "BadDocumentQuality"
        | "FullDocumentRequired"
        | "MissingDescription"
        | "InvalidTransaction"
        | "TransactionNameMismatch"
        | "TransactionDateMismatch"
        | "TransactionAmountMismatch"
        | "IbanMismatch"
        | "Other";
    };

export type SwanFile = {
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
};
