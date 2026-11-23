import type { Future, Option, Result } from "@bloodyowl/boxed";
import type { NetworkError, Response, TimeoutError } from "@bloodyowl/request";
import type { UploadOutput } from "../../components/SupportingDocumentCollection";
import type { UploadFileInput, UploadOutputWithId } from "../../hooks/useFilesUploader";
import type { SwanFile } from "../SwanFile";
import type {
  CancelDisputeCaseInput,
  CancelDisputeCaseRejection,
  DraftFraudDisputeCaseInput,
  DraftFraudDisputeCaseRejection,
  FraudReportCase,
  FraudReportDocumentPurpose,
  SubmitDisputeCaseInput,
  SubmitDisputeCaseRejection,
  UpdateDraftFraudDisputeCaseInput,
  UpdateDraftFraudDisputeCaseRejection,
} from "./types";

// A rejection is an answer the flow can act on; an error is anything else
// (network, GraphQL error such as FORBIDDEN or BAD_USER_INPUT).
export type FraudReportApiError<Rejection> =
  | { kind: "rejection"; rejection: Rejection }
  | { kind: "error"; error: unknown };

export type FraudReportApiResult<Value, Rejection = never> = Future<
  Result<Value, FraudReportApiError<Rejection>>
>;

// What the app supplies: Lake never owns a GraphQL client or a token.
export type FraudReportApi = {
  draft: (
    input: DraftFraudDisputeCaseInput,
  ) => FraudReportApiResult<FraudReportCase, DraftFraudDisputeCaseRejection>;
  update: (
    input: UpdateDraftFraudDisputeCaseInput,
  ) => FraudReportApiResult<FraudReportCase, UpdateDraftFraudDisputeCaseRejection>;
  submit: (
    input: SubmitDisputeCaseInput,
  ) => FraudReportApiResult<FraudReportCase, SubmitDisputeCaseRejection>;
  cancel: (
    input: CancelDisputeCaseInput,
  ) => FraudReportApiResult<FraudReportCase, CancelDisputeCaseRejection>;
  // None when the case doesn't exist or the caller can't read it.
  getCase: (input: { disputeCaseId: string }) => FraudReportApiResult<Option<FraudReportCase>>;
  // Drafts on the account that include at least one of the transactions, newest first.
  findDrafts: (input: {
    accountId: string;
    transactionIds: string[];
  }) => FraudReportApiResult<FraudReportCase[]>;
  generateUpload: (input: {
    supportingDocumentCollectionId: string;
    fileName: string;
    purpose: FraudReportDocumentPurpose;
  }) => Future<Result<UploadOutputWithId<UploadOutput>, unknown>>;
  uploadFile?: (
    config: UploadFileInput<UploadOutput>,
  ) => Future<Result<Response<string>, NetworkError | TimeoutError>>;
  removeFile: (file: SwanFile) => Future<Result<unknown, unknown>>;
};
