import { Future, Option, Result } from "@bloodyowl/boxed";
import type { NetworkError, Response, TimeoutError } from "@bloodyowl/request";
import { match } from "ts-pattern";
import type { UploadOutput } from "../../components/SupportingDocumentCollection";
import type { UploadOutputWithId } from "../../hooks/useFilesUploader";
import type { FraudReportApi, FraudReportApiError } from "./api";
import type {
  AccountMembershipNotFoundRejection,
  DisputeCaseDetailsNotApplicableRejection,
  DisputeCaseIncompleteRejection,
  DisputeCaseMultipleAccountsRejection,
  DisputeCaseMultipleCardHoldersRejection,
  DisputeCaseNotFoundRejection,
  DisputeCaseStatus,
  DisputeCaseTransactionNotReportableReason,
  DisputeCaseTransactionsAlreadyReportedRejection,
  DisputeCaseTransactionsNotFoundRejection,
  DisputeCaseTransactionsNotReportableRejection,
  DisputeCaseTransactionsOutsideReportingWindowRejection,
  DisputeCaseWrongStatusRejection,
  DraftFraudDisputeCaseRejection,
  FraudDetails,
  FraudDetailsInput,
  FraudReportCase,
  SubmitDisputeCaseRejection,
  UpdateDraftFraudDisputeCaseInput,
  UpdateDraftFraudDisputeCaseRejection,
} from "./types";

// In-memory adapter for stories and tests. It runs the API's checks on seeded data, in the
// API's order, so the flow can be exercised without a backend. Input format checks (dates in
// the future, string formats, `None` with other values) are left to the client-side validators.

export type FakeTransaction = {
  id: string;
  accountId: string;
  notReportableReason?: DisputeCaseTransactionNotReportableReason;
  reportingWindowEndsAt?: string;
} & ({ rail: "Card"; cardholderAccountMembershipId: string } | { rail: "Transfer" });

export type FakeAccountMembership = { id: string; accountId: string };

export type FakeFraudReportApiConfig = {
  transactions: FakeTransaction[];
  accountMemberships: FakeAccountMembership[];
  cases?: FraudReportCase[];
  // Transactions in submitted cases outside this adapter. `disputeCaseId` null: the caller can't read it.
  alreadyReported?: { transactionId: string; disputeCaseId: string | null }[];
  // Milliseconds before each call resolves, to show loading states in stories.
  delay?: number;
  now?: () => Date;
};

const MAX_TRANSACTIONS = 100;
const DRAFT_LIFETIME_MS = 30 * 24 * 60 * 60 * 1000;

type StoredCase = FraudReportCase & {
  // The victim sent by the caller, kept apart from the derived cardholder.
  // `{ id: null }`: there is one, but the caller can't see it.
  sentVictim: { id: string | null } | null;
};

type ApiError<Rejection> = FraudReportApiError<Rejection>;

const isDefined = <T>(value: T | undefined): value is T => value !== undefined;

const unique = <T>(values: T[]) => [...new Set(values)];

const firstOf = <R>(...checks: (() => Option<R>)[]): Option<R> => {
  for (const check of checks) {
    const result = check();
    if (result.isSome()) {
      return result;
    }
  }
  return Option.None();
};

const toFraudDetails = (input: FraudDetailsInput): FraudDetails => ({
  reportedReason: input.reportedReason,
  reportedTypology: input.reportedTypology,
  description: input.description,
  discoveredAt: input.discoveredAt ?? null,
  discoveryDetails: input.discoveryDetails ?? null,
  fraudsterChannels: input.fraudsterChannels ?? [],
  sharedInformationWithFraudster: input.sharedInformationWithFraudster ?? [],
  hasFiledPoliceComplaint: input.hasFiledPoliceComplaint ?? null,
});

const toPublicCase = ({ sentVictim: _, ...rest }: StoredCase): FraudReportCase => rest;

const rejection = <Rejection>(value: Rejection): ApiError<Rejection> => ({
  kind: "rejection",
  rejection: value,
});

const badUserInput = (message: string): ApiError<never> => ({
  kind: "error",
  error: new Error(`BAD_USER_INPUT: ${message}`),
});

export const createFakeFraudReportApi = (config: FakeFraudReportApiConfig): FraudReportApi => {
  const now = config.now ?? (() => new Date());
  const delay = config.delay ?? 0;

  const respond = <Value, E>(result: Result<Value, E>) =>
    delay > 0
      ? Future.make<Result<Value, E>>(resolve => {
          const timeout = setTimeout(() => resolve(result), delay);
          return () => clearTimeout(timeout);
        })
      : Future.value(result);

  const findTransaction = (id: string) => config.transactions.find(item => item.id === id);

  const getTransactions = (ids: string[]) => ids.map(findTransaction).filter(isDefined);

  const getIds = (item: FraudReportCase) => item.transactions.map(({ id }) => id);

  const getCardholder = (ids: string[]) =>
    getTransactions(ids).flatMap(item => (item.rail === "Card" ? [item] : []))[0]
      ?.cardholderAccountMembershipId ?? null;

  const cases = new Map<string, StoredCase>(
    (config.cases ?? []).map(item => [
      item.id,
      {
        ...item,
        sentVictim:
          item.hasVictim && !item.transactions.some(({ rail }) => rail === "Card")
            ? { id: item.victimAccountMembershipId }
            : null,
      },
    ]),
  );

  // A draft past its expiry date reads as expired, as the API does.
  const getStoredCase = (id: string): Option<StoredCase> =>
    Option.fromUndefined(cases.get(id)).map(item =>
      item.statusInfo.status === "Draft" && now().getTime() >= Date.parse(item.statusInfo.expiresAt)
        ? {
            ...item,
            statusInfo: { status: "Expired", expiredAt: item.statusInfo.expiresAt },
            supportingDocumentCollection: {
              ...item.supportingDocumentCollection,
              status: "Canceled",
            },
          }
        : item,
    );

  const save = (item: StoredCase) => {
    cases.set(item.id, item);
    return toPublicCase(item);
  };

  const notFound = (disputeCaseId: string): ApiError<DisputeCaseNotFoundRejection> =>
    rejection({
      __typename: "DisputeCaseNotFoundRejection",
      message: "Dispute case not found",
      disputeCaseId,
    });

  const wrongStatus = (
    item: StoredCase,
    expectedStatuses: DisputeCaseStatus[],
  ): ApiError<DisputeCaseWrongStatusRejection> =>
    rejection({
      __typename: "DisputeCaseWrongStatusRejection",
      message: "Dispute case has the wrong status",
      disputeCaseId: item.id,
      currentStatus: item.statusInfo.status,
      expectedStatuses,
    });

  const checkTransactionsFound = (
    ids: string[],
  ): Option<DisputeCaseTransactionsNotFoundRejection> => {
    const missing = ids.filter(id => findTransaction(id) == null);
    return missing.length > 0
      ? Option.Some({
          __typename: "DisputeCaseTransactionsNotFoundRejection",
          message: "Some transactions were not found",
          transactionIds: missing,
        })
      : Option.None();
  };

  const checkReportable = (
    ids: string[],
  ): Option<DisputeCaseTransactionsNotReportableRejection> => {
    const transactions = getTransactions(ids).flatMap(({ id, notReportableReason }) =>
      notReportableReason == null ? [] : [{ transactionId: id, reason: notReportableReason }],
    );
    return transactions.length > 0
      ? Option.Some({
          __typename: "DisputeCaseTransactionsNotReportableRejection",
          message: "Some transactions can't be reported",
          transactions,
        })
      : Option.None();
  };

  const checkSingleAccount = (ids: string[]): Option<DisputeCaseMultipleAccountsRejection> => {
    const accountIds = unique(getTransactions(ids).map(item => item.accountId));
    return accountIds.length > 1
      ? Option.Some({
          __typename: "DisputeCaseMultipleAccountsRejection",
          message: "Transactions belong to several accounts",
          accountIds,
        })
      : Option.None();
  };

  const checkSingleCardholder = (
    ids: string[],
  ): Option<DisputeCaseMultipleCardHoldersRejection> => {
    const accountMembershipIds = unique(
      getTransactions(ids).flatMap(item =>
        item.rail === "Card" ? [item.cardholderAccountMembershipId] : [],
      ),
    );
    return accountMembershipIds.length > 1
      ? Option.Some({
          __typename: "DisputeCaseMultipleCardHoldersRejection",
          message: "Card transactions belong to several cardholders",
          accountMembershipIds,
        })
      : Option.None();
  };

  const checkReportingWindow = (
    ids: string[],
  ): Option<DisputeCaseTransactionsOutsideReportingWindowRejection> => {
    const transactions = getTransactions(ids).flatMap(({ id, reportingWindowEndsAt }) =>
      reportingWindowEndsAt != null && now().getTime() >= Date.parse(reportingWindowEndsAt)
        ? [{ transactionId: id, reportingWindowEndedAt: reportingWindowEndsAt }]
        : [],
    );
    return transactions.length > 0
      ? Option.Some({
          __typename: "DisputeCaseTransactionsOutsideReportingWindowRejection",
          message: "Some transactions are outside the reporting window",
          transactions,
        })
      : Option.None();
  };

  type Write = Omit<UpdateDraftFraudDisputeCaseInput, "disputeCaseId">;

  const checkInputFormat = (input: Write): Option<ApiError<never>> => {
    const { transactionIds } = input;
    if (transactionIds == null) {
      return Option.None();
    }
    if (transactionIds.length === 0) {
      return Option.Some(badUserInput("transactionIds must not be empty"));
    }
    if (unique(transactionIds).length !== transactionIds.length) {
      return Option.Some(badUserInput("transactionIds must not contain duplicates"));
    }
    return Option.None();
  };

  // Draft and update checks, from the transaction limit on, run on the case as it would stand
  // after the call.
  const write = (
    existing: StoredCase | undefined,
    input: Write,
  ): Result<StoredCase, ApiError<DraftFraudDisputeCaseRejection>> => {
    const transactionIds = input.transactionIds ?? (existing != null ? getIds(existing) : []);
    const transactions = getTransactions(transactionIds);
    const hasCard = transactions.some(item => item.rail === "Card");
    const hasTransfer = transactions.some(item => item.rail === "Transfer");
    const accountId = transactions[0]?.accountId ?? existing?.accountId ?? "";
    const sentVictim = input.victimAccountMembershipId;

    const checkLimit = () =>
      input.transactionIds != null && input.transactionIds.length > MAX_TRANSACTIONS
        ? Option.Some<DraftFraudDisputeCaseRejection>({
            __typename: "DisputeCaseTransactionsLimitExceededRejection",
            message: "Too many transactions",
            transactionCount: input.transactionIds.length,
            maxTransactionCount: MAX_TRANSACTIONS,
          })
        : Option.None();

    const checkDetailsApplicable = (): Option<DisputeCaseDetailsNotApplicableRejection> => {
      const fields = [
        input.fraudCardDetails != null && !hasCard ? ["fraudCardDetails"] : undefined,
        input.fraudTransferDetails != null && !hasTransfer ? ["fraudTransferDetails"] : undefined,
        sentVictim != null && hasCard ? ["victimAccountMembershipId"] : undefined,
      ]
        .filter(isDefined)
        .map(path => ({ path }));
      return fields.length > 0
        ? Option.Some({
            __typename: "DisputeCaseDetailsNotApplicableRejection",
            message: "Some details don't apply to this case",
            fields,
          })
        : Option.None();
    };

    const checkVictim = (): Option<AccountMembershipNotFoundRejection> =>
      sentVictim != null &&
      !config.accountMemberships.some(
        item => item.id === sentVictim && item.accountId === accountId,
      )
        ? Option.Some({
            __typename: "AccountMembershipNotFoundRejection",
            message: "Account membership not found",
            id: sentVictim,
          })
        : Option.None();

    const failure = firstOf<DraftFraudDisputeCaseRejection>(
      checkLimit,
      () => checkTransactionsFound(transactionIds),
      () => checkReportable(transactionIds),
      () => checkSingleAccount(transactionIds),
      () => checkSingleCardholder(transactionIds),
      () => checkReportingWindow(transactionIds),
      checkDetailsApplicable,
      checkVictim,
    );
    if (failure.isSome()) {
      return Result.Error(rejection(failure.get()));
    }

    // A stored victim is dropped when the case gets card transactions or moves to another
    // account, unless one is sent in this call.
    const victim = hasCard
      ? null
      : sentVictim !== undefined
        ? sentVictim === null
          ? null
          : { id: sentVictim }
        : existing?.accountId === accountId
          ? existing.sentVictim
          : null;
    const cardholder = getCardholder(transactionIds);

    const keep = <K extends "fraudCardDetails" | "fraudTransferDetails" | "externalReference">(
      key: K,
    ) => (input[key] === undefined ? (existing?.[key] ?? null) : input[key]);
    const fraudCardDetails = hasCard ? keep("fraudCardDetails") : null;
    const fraudTransferDetails = hasTransfer ? keep("fraudTransferDetails") : null;

    const date = now();
    const windowEnds = transactions
      .map(item => item.reportingWindowEndsAt)
      .filter(isDefined)
      .map(value => Date.parse(value));
    const expiresAt = Math.min(date.getTime() + DRAFT_LIFETIME_MS, ...windowEnds);

    return Result.Ok({
      id: existing?.id ?? crypto.randomUUID(),
      accountId,
      statusInfo: { status: "Draft", expiresAt: new Date(expiresAt).toISOString() },
      transactions: transactions.map(({ id, rail }) => ({ id, rail })),
      fraudDetails:
        input.fraudDetails === undefined
          ? (existing?.fraudDetails ?? null)
          : input.fraudDetails === null
            ? null
            : toFraudDetails(input.fraudDetails),
      fraudCardDetails:
        fraudCardDetails == null
          ? null
          : {
              isLostOrStolen: fraudCardDetails.isLostOrStolen ?? null,
              lostOrStolenNoticedAt: fraudCardDetails.lostOrStolenNoticedAt ?? null,
              hasContactedMerchant: fraudCardDetails.hasContactedMerchant ?? null,
            },
      fraudTransferDetails:
        fraudTransferDetails == null
          ? null
          : {
              hasContactedBankOrBeneficiary:
                fraudTransferDetails.hasContactedBankOrBeneficiary ?? null,
            },
      victimAccountMembershipId: hasCard ? cardholder : (victim?.id ?? null),
      hasVictim: hasCard ? cardholder != null : victim != null,
      sentVictim: victim,
      externalReference: keep("externalReference"),
      supportingDocumentCollection: existing?.supportingDocumentCollection ?? {
        id: crypto.randomUUID(),
        status: "WaitingForDocument",
      },
      createdAt: existing?.createdAt ?? date.toISOString(),
      updatedAt: date.toISOString(),
    });
  };

  const checkNotAlreadyReported = (
    item: StoredCase,
  ): Option<DisputeCaseTransactionsAlreadyReportedRejection> => {
    const transactions = getIds(item).flatMap(transactionId => {
      const external = config.alreadyReported?.find(entry => entry.transactionId === transactionId);
      if (external != null) {
        return [external];
      }
      const submitted = [...cases.values()].find(
        other =>
          other.id !== item.id &&
          other.statusInfo.status === "Submitted" &&
          getIds(other).includes(transactionId),
      );
      return submitted == null ? [] : [{ transactionId, disputeCaseId: submitted.id }];
    });
    return transactions.length > 0
      ? Option.Some({
          __typename: "DisputeCaseTransactionsAlreadyReportedRejection",
          message: "Some transactions are already reported",
          transactions,
        })
      : Option.None();
  };

  const checkComplete = (item: StoredCase): Option<DisputeCaseIncompleteRejection> => {
    const isTransferOnly = item.transactions.every(({ rail }) => rail === "Transfer");
    const missingFields = [
      item.fraudDetails == null ? ["fraudDetails"] : undefined,
      isTransferOnly && !item.hasVictim ? ["victimAccountMembershipId"] : undefined,
    ]
      .filter(isDefined)
      .map(path => ({ path }));
    return missingFields.length > 0
      ? Option.Some({
          __typename: "DisputeCaseIncompleteRejection",
          message: "The case is incomplete",
          missingFields,
        })
      : Option.None();
  };

  const submitDraft = (
    item: StoredCase,
  ): Result<FraudReportCase, ApiError<SubmitDisputeCaseRejection>> => {
    const ids = getIds(item);
    const failure = firstOf<SubmitDisputeCaseRejection>(
      () => checkTransactionsFound(ids),
      () => checkReportable(ids),
      () => checkReportingWindow(ids),
      () => checkNotAlreadyReported(item),
      () => checkComplete(item),
    );
    if (failure.isSome()) {
      return Result.Error(rejection(failure.get()));
    }
    const date = now().toISOString();
    return Result.Ok(
      save({
        ...item,
        statusInfo: { status: "Submitted", submittedAt: date },
        supportingDocumentCollection: {
          ...item.supportingDocumentCollection,
          status: "PendingReview",
        },
        updatedAt: date,
      }),
    );
  };

  const cancelDraft = (item: StoredCase): FraudReportCase => {
    const date = now().toISOString();
    return save({
      ...item,
      statusInfo: { status: "Canceled", canceledAt: date },
      supportingDocumentCollection: { ...item.supportingDocumentCollection, status: "Canceled" },
      updatedAt: date,
    });
  };

  return {
    draft: input =>
      respond(
        checkInputFormat(input).match({
          Some: error => Result.Error(error),
          None: () => write(undefined, input).map(save),
        }),
      ),

    update: ({ disputeCaseId, ...input }) =>
      respond(
        checkInputFormat(input).match({
          Some: error => Result.Error(error),
          None: () =>
            getStoredCase(disputeCaseId)
              .toResult<ApiError<UpdateDraftFraudDisputeCaseRejection>>(notFound(disputeCaseId))
              .flatMap(
                (existing): Result<StoredCase, ApiError<UpdateDraftFraudDisputeCaseRejection>> =>
                  existing.statusInfo.status === "Draft"
                    ? write(existing, input)
                    : Result.Error(wrongStatus(existing, ["Draft"])),
              )
              .map(save),
        }),
      ),

    submit: ({ disputeCaseId }) =>
      respond(
        getStoredCase(disputeCaseId)
          .toResult<ApiError<SubmitDisputeCaseRejection>>(notFound(disputeCaseId))
          .flatMap(item =>
            match(item.statusInfo.status)
              .with("Submitted", () => Result.Ok(toPublicCase(item)))
              .with("Draft", () => submitDraft(item))
              .with("Expired", "Canceled", () => Result.Error(wrongStatus(item, ["Draft"])))
              .exhaustive(),
          ),
      ),

    cancel: ({ disputeCaseId }) =>
      respond(
        getStoredCase(disputeCaseId)
          .toResult<ApiError<DisputeCaseNotFoundRejection | DisputeCaseWrongStatusRejection>>(
            notFound(disputeCaseId),
          )
          .flatMap(item =>
            match(item.statusInfo.status)
              .with("Canceled", () => Result.Ok(toPublicCase(item)))
              .with("Draft", () => Result.Ok(cancelDraft(item)))
              .with("Submitted", "Expired", () => Result.Error(wrongStatus(item, ["Draft"])))
              .exhaustive(),
          ),
      ),

    getCase: ({ disputeCaseId }) =>
      respond(Result.Ok(getStoredCase(disputeCaseId).map(toPublicCase))),

    findDrafts: ({ accountId, transactionIds }) =>
      respond(
        Result.Ok(
          [...cases.keys()]
            // Insertion order breaks createdAt ties.
            .reverse()
            .map(id => getStoredCase(id).toUndefined())
            .filter(isDefined)
            .filter(
              item =>
                item.statusInfo.status === "Draft" &&
                item.accountId === accountId &&
                getIds(item).some(id => transactionIds.includes(id)),
            )
            .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
            .map(toPublicCase),
        ),
      ),

    generateUpload: () =>
      respond(
        Result.Ok<UploadOutputWithId<UploadOutput>, unknown>({
          id: crypto.randomUUID(),
          upload: { url: "https://example.org/upload", fields: [] },
        }),
      ),

    uploadFile: () =>
      respond(
        Result.Ok<Response<string>, NetworkError | TimeoutError>({
          headers: new Headers(),
          status: 200,
          ok: true,
          url: "https://example.org/upload",
          response: Option.None(),
        }),
      ),

    removeFile: () => respond(Result.Ok<unknown, unknown>(undefined)),
  };
};
