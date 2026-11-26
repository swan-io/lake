import { Option } from "@bloodyowl/boxed";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { match } from "ts-pattern";
import type {
  FraudReportApi,
  FraudReportApiError,
  FraudReportApiResult,
} from "../utils/fraudReport/api";
import { getRejectionStep } from "../utils/fraudReport/rejections";
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

export type FraudReportFlowApi = Pick<FraudReportApi, "draft" | "update" | "submit" | "cancel">;

export type FraudReportFlowStep = "Intro" | FraudReportLayoutStep | "Rejected";

type FlowError = FraudReportApiError<FraudReportRejection>;

type State = {
  step: FraudReportFlowStep;
  values: FraudReportFormValues;
  savedCase: Option<FraudReportCase>;
  savedTransactionIds: string[];
  saving: boolean;
  error: Option<FlowError>;
};

const initialState: State = {
  step: "Intro",
  values: { transactions: [] },
  savedCase: Option.None(),
  savedTransactionIds: [],
  saving: false,
  error: Option.None(),
};

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
        hasDraft: state.savedCase.isSome(),
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
}: {
  api: FraudReportFlowApi;
  onExit: () => void;
}) => {
  const [state, setState] = useState(initialState);
  const pending = useRef(false);
  const mounted = useRef(false);
  const onExitRef = useRef(onExit);

  useLayoutEffect(() => {
    onExitRef.current = onExit;
  });

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useLayoutEffect(() => {
    pending.current = state.saving;
  }, [state]);

  const next = useCallback(
    (input: Partial<FraudReportFormValues> = {}) => {
      if (pending.current || state.saving || isFinalStep(state.step)) {
        return;
      }

      const { victimAccountMembershipId: _, ...inputWithoutVictim } = input;
      const values: FraudReportFormValues = {
        ...state.values,
        ...(state.savedCase.isNone() ? input : inputWithoutVictim),
      };

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
          setState(current => ({ ...current, values, step: nextStep, error: Option.None() }));
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
  };
};
