import { AsyncData, Option } from "@bloodyowl/boxed";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { match } from "ts-pattern";
import type {
  FraudReportApi,
  FraudReportApiError,
  FraudReportApiResult,
} from "../utils/fraudReport/api";
import { toFormValues } from "../utils/fraudReport/prefill";
import { getRejectionStep } from "../utils/fraudReport/rejections";
import { getResumeStep } from "../utils/fraudReport/resume";
import { FraudReportLayoutStep, getDetailsSteps } from "../utils/fraudReport/stepper";
import {
  FraudReportFormValues,
  toDraftInput,
  toTransactionIds,
  toUpdateInput,
} from "../utils/fraudReport/toInput";
import {
  FraudReportCase,
  FraudReportRejection,
  fraudReportSteps,
} from "../utils/fraudReport/types";
import { getVictimChange } from "../utils/fraudReport/victim";

export type FraudReportFlowApi = Pick<
  FraudReportApi,
  "draft" | "update" | "submit" | "cancel" | "findDrafts"
>;

// The transactions the report starts from, when the user opened it from one of them
export type FraudReportResumeFrom = { accountId: string; transactionIds: string[] };

export type FraudReportFlowStep = "Intro" | FraudReportLayoutStep | "Rejected";

type FlowError = FraudReportApiError<FraudReportRejection>;

type State = {
  step: FraudReportFlowStep;
  values: FraudReportFormValues;
  savedCase: Option<FraudReportCase>;
  savedTransactionIds: string[];
  saving: boolean;
  error: Option<FlowError>;
  resumable: AsyncData<Option<FraudReportCase>>;
};

const initialState: State = {
  step: "Intro",
  values: { transactions: [] },
  savedCase: Option.None(),
  savedTransactionIds: [],
  saving: false,
  error: Option.None(),
  resumable: AsyncData.NotAsked(),
};

// Keeps "no lookup" and "looking" as they are, so only an offer turns into "nothing to offer"
const closeOffer = (resumable: State["resumable"]) =>
  resumable.map(() => Option.None<FraudReportCase>());

const getDraft = (state: State) => state.resumable.toOption().flatMap(draft => draft);

export const DRAFT_LOOKUP_TIMEOUT_MS = 5000;

const isFinalStep = (step: FraudReportFlowStep) => step === "Submitted" || step === "Rejected";

const getErrorChange = (
  state: State,
  values: FraudReportFormValues,
  error: FlowError,
): Pick<State, "step" | "error"> => {
  const step = match(error)
    .returnType<FraudReportFlowStep>()
    .with({ kind: "rejection" }, ({ rejection }) =>
      getRejectionStep(rejection, {
        detailsSteps: getDetailsSteps(values),
      }),
    )
    .with({ kind: "error" }, () => state.step)
    .exhaustive();

  return {
    step,
    // Submitted elsewhere: the report reached Swan, so there's nothing to show
    error: step === "Submitted" ? Option.None() : Option.Some(error),
  };
};

const getSteps = (values: FraudReportFormValues) =>
  fraudReportSteps.flatMap((step): FraudReportFlowStep[] =>
    step === "Details" ? getDetailsSteps(values) : [step],
  );

export const useFraudReportFlow = ({
  api,
  onExit,
  resumeFrom,
}: {
  api: FraudReportFlowApi;
  onExit: () => void;
  resumeFrom?: FraudReportResumeFrom;
}) => {
  const [state, setState] = useState(() =>
    resumeFrom == null ? initialState : { ...initialState, resumable: AsyncData.Loading() },
  );
  const pending = useRef(false);
  const mounted = useRef(false);
  const onExitRef = useRef(onExit);
  // The drafts are looked up once, at start: a later api or resumeFrom doesn't start another lookup
  const startRef = useRef({ api, resumeFrom });

  useLayoutEffect(() => {
    onExitRef.current = onExit;
  });

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    const { api, resumeFrom } = startRef.current;

    if (resumeFrom == null) {
      return;
    }

    const request = api.findDrafts(resumeFrom);

    const endLookup = (draft: Option<FraudReportCase>) => {
      setState(current => ({
        ...current,
        resumable: current.resumable.isLoading() ? AsyncData.Done(draft) : current.resumable,
      }));
    };

    // Next on the intro waits for the lookup: a call that never answers must not block the report
    const timeout = setTimeout(() => {
      request.cancel();
      endLookup(Option.None());
    }, DRAFT_LOOKUP_TIMEOUT_MS);

    request.onResolve(result => {
      clearTimeout(timeout);
      // Not finding drafts must not stop a report: it starts as a new one
      endLookup(result.toOption().flatMap(drafts => Option.fromUndefined(drafts[0])));
    });

    return () => {
      clearTimeout(timeout);
      request.cancel();
    };
  }, []);

  useLayoutEffect(() => {
    pending.current = state.saving;
  }, [state]);

  const next = useCallback(
    (input: Partial<FraudReportFormValues> = {}) => {
      if (
        pending.current ||
        state.saving ||
        isFinalStep(state.step) ||
        (state.step === "Intro" && state.resumable.isLoading())
      ) {
        return;
      }

      const merged: FraudReportFormValues = { ...state.values, ...input };
      const { changed, kept } = getVictimChange({
        transactions: merged.transactions,
        previousVictimAccountMembershipId: state.values.victimAccountMembershipId,
        victimAccountMembershipId: input.victimAccountMembershipId,
      });

      const values: FraudReportFormValues = changed
        ? {
            ...merged,
            transactions: kept,
            isLostOrStolen: undefined,
            lostOrStolenNoticedAt: undefined,
          }
        : merged;

      const steps = getSteps(values);
      const nextStep = Option.fromUndefined(steps[steps.indexOf(state.step) + 1]).getOr(state.step);
      const transactionIds = toTransactionIds(values);

      const request = match(state.step)
        .returnType<Option<FraudReportApiResult<FraudReportCase, FraudReportRejection>>>()
        .with("Intro", "Victim", () => Option.None())
        .with("Transactions", "Incident", "Card", "Transfer", "Fraudster", () =>
          Option.Some(
            state.savedCase.match({
              None: () => api.draft(toDraftInput(values)),
              Some: savedCase =>
                api.update(
                  toUpdateInput({
                    savedCase,
                    values,
                    savedTransactionIds: state.savedTransactionIds,
                  }),
                ),
            }),
          ),
        )
        .with("Documents", () => state.savedCase.map(({ id }) => api.submit({ disputeCaseId: id })))
        .exhaustive();

      request.match({
        None: () => {
          setState(current => ({
            ...current,
            values,
            step: nextStep,
            error: Option.None(),
            // Starting the report closes the offer: the draft stays, to expire or be found again
            resumable: closeOffer(current.resumable),
          }));
        },
        Some: future => {
          pending.current = true;
          setState(current => ({ ...current, values, saving: true, error: Option.None() }));

          future.onResolve(result => {
            result.match({
              Ok: savedCase => {
                setState(current => ({
                  ...current,
                  savedCase: Option.Some(savedCase),
                  savedTransactionIds: transactionIds,
                  saving: false,
                  step: nextStep,
                }));
              },
              Error: error => {
                setState(current => ({
                  ...current,
                  saving: false,
                  ...getErrorChange(state, values, error),
                }));
              },
            });
          });
        },
      });
    },
    [api, state],
  );

  const previous = useCallback(() => {
    if (pending.current || state.saving || isFinalStep(state.step)) {
      return;
    }

    const steps = getSteps(state.values);

    Option.fromUndefined(steps[steps.indexOf(state.step) - 1]).tapSome(previousStep => {
      setState(current => ({ ...current, step: previousStep, error: Option.None() }));
    });
  }, [state]);

  const cancel = useCallback(() => {
    if (pending.current || state.saving) {
      return;
    }

    // A cancel that ends after the user left must not take them away from where they went
    const exit = () => {
      if (mounted.current) {
        setState(initialState);
        onExitRef.current();
      }
    };

    // The report is over: leave, and let any draft left behind expire
    const disputeCaseId = isFinalStep(state.step)
      ? Option.None<string>()
      : state.savedCase.map(({ id }) => id);

    disputeCaseId.match({
      None: exit,
      Some: disputeCaseId => {
        pending.current = true;
        setState(current => ({ ...current, saving: true, error: Option.None() }));

        api.cancel({ disputeCaseId }).onResolve(result => {
          result.match({
            Ok: exit,
            Error: error => {
              setState(current => ({
                ...current,
                saving: false,
                ...getErrorChange(state, state.values, error),
              }));
            },
          });
        });
      },
    });
  }, [api, state]);

  const resume = useCallback(() => {
    if (pending.current || state.saving || state.step !== "Intro") {
      return;
    }

    getDraft(state).tapSome(savedCase => {
      const values = toFormValues(savedCase);

      setState(current => ({
        ...current,
        step: getResumeStep(values, startRef.current.resumeFrom?.transactionIds),
        values,
        savedCase: Option.Some(savedCase),
        savedTransactionIds: toTransactionIds(values),
        error: Option.None(),
        resumable: closeOffer(current.resumable),
      }));
    });
  }, [state]);

  const startOver = useCallback(() => {
    if (pending.current || state.saving || state.step !== "Intro") {
      return;
    }

    // Kept, the old draft would be offered again on the same transactions
    getDraft(state).tapSome(draft => {
      pending.current = true;
      setState(current => ({ ...current, saving: true, error: Option.None() }));

      api.cancel({ disputeCaseId: draft.id }).onResolve(result => {
        setState(current => {
          const closed = { resumable: closeOffer(current.resumable) };

          return {
            ...current,
            saving: false,
            ...result.match<Partial<State>>({
              Ok: () => closed,
              Error: error => {
                const change = getErrorChange(state, state.values, error);

                return match(error)
                  .returnType<Partial<State>>()
                  .with({ kind: "rejection" }, () =>
                    change.step === "Submitted"
                      ? // Submitted elsewhere: a new report on these transactions would be rejected
                        { ...change, ...closed, savedCase: Option.Some(draft) }
                      : // Canceled, expired or gone: there's nothing left to discard or resume
                        closed,
                  )
                  .with({ kind: "error" }, () => ({ error: Option.Some(error) }))
                  .exhaustive();
              },
            }),
          };
        });
      });
    });
  }, [api, state]);

  return {
    step: state.step,
    detailsSteps: getDetailsSteps(state.values),
    values: state.values,
    disputeCaseId: state.savedCase.map(({ id }) => id),
    saving: state.saving,
    error: state.error,
    next,
    previous,
    cancel,
    resumable: state.resumable,
    resume,
    startOver,
  };
};
