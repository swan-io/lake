import { Option } from "@bloodyowl/boxed";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { match } from "ts-pattern";
import type {
  FraudReportApi,
  FraudReportApiError,
  FraudReportApiResult,
} from "../utils/fraudReport/api";
import type { FraudReportLayoutStep } from "../utils/fraudReport/stepper";
import { FraudReportFormValues, toDraftInput, toUpdateInput } from "../utils/fraudReport/toInput";
import {
  FraudReportCase,
  FraudReportRejection,
  fraudReportDetailsSteps,
} from "../utils/fraudReport/types";

export type FraudReportFlowApi = Pick<FraudReportApi, "draft" | "update" | "submit">;

export type FraudReportFlowStep = "Intro" | FraudReportLayoutStep;

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

const getDetailsSteps = ({ transactions, reportedReason }: FraudReportFormValues) =>
  fraudReportDetailsSteps.filter(step =>
    match(step)
      .with("Card", () => transactions.some(({ rail }) => rail === "Card"))
      .with("Transfer", () => transactions.some(({ rail }) => rail === "Transfer"))
      .with("Fraudster", () => reportedReason === "Manipulated")
      .exhaustive(),
  );

const getSteps = (values: FraudReportFormValues): FraudReportFlowStep[] => [
  "Intro",
  "Victim",
  "Transactions",
  "Incident",
  ...getDetailsSteps(values),
  "Documents",
  "Submitted",
];

export const useFraudReportFlow = ({ api }: { api: FraudReportFlowApi }) => {
  const [state, setState] = useState(initialState);
  const pending = useRef(false);

  useLayoutEffect(() => {
    pending.current = state.saving;
  }, [state]);

  const next = useCallback(
    (input: Partial<FraudReportFormValues> = {}) => {
      if (pending.current || state.saving || state.step === "Submitted") {
        return;
      }

      const { victimAccountMembershipId: _, ...inputWithoutVictim } = input;
      const values: FraudReportFormValues = {
        ...state.values,
        ...(state.savedCase.isNone() ? input : inputWithoutVictim),
      };

      const steps = getSteps(values);
      const nextStep = Option.fromUndefined(steps[steps.indexOf(state.step) + 1]).getOr(state.step);
      const transactionIds = values.transactions.map(({ id }) => id);

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
                setState(current => ({ ...current, saving: false, error: Option.Some(error) }));
              },
            });
          });
        },
      });
    },
    [api, state],
  );

  const previous = useCallback(() => {
    if (pending.current || state.saving || state.step === "Submitted") {
      return;
    }

    const steps = getSteps(state.values);

    Option.fromUndefined(steps[steps.indexOf(state.step) - 1]).tapSome(previousStep => {
      setState(current => ({ ...current, step: previousStep, error: Option.None() }));
    });
  }, [state]);

  return {
    step: state.step,
    detailsSteps: getDetailsSteps(state.values),
    values: state.values,
    victimAccountMembershipId: state.savedCase.isNone()
      ? Option.fromUndefined(state.values.victimAccountMembershipId)
      : Option.None<string>(),
    disputeCaseId: state.savedCase.map(({ id }) => id),
    saving: state.saving,
    error: state.error,
    next,
    previous,
  };
};
