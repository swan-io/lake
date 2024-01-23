import { AsyncData, Future, Result } from "@swan-io/boxed";
import { useCallback, useMemo } from "react";
import {
  AnyVariables,
  CombinedError,
  OperationContext,
  TypedDocumentNode,
  useMutation,
} from "urql";
import { isNotNullish, isNullish } from "../utils/nullish";

const toResult = <Data>({
  data,
  error,
}: {
  data?: Data;
  error?: CombinedError;
}): Result<Data, CombinedError> => {
  if (isNotNullish(error)) {
    return Result.Error(error);
  }
  if (isNullish(data)) {
    return Result.Error(new CombinedError({ networkError: new Error("No Content") }));
  }

  return Result.Ok(data);
};

export const useUrqlMutation = <Data, Variables extends AnyVariables>(
  query: TypedDocumentNode<Data, Variables>,
) => {
  const [{ fetching, data, error }, execute] = useMutation(query);

  return [
    useMemo((): AsyncData<Result<Data, CombinedError>> => {
      if (fetching) {
        return AsyncData.Loading();
      }
      if (isNullish(data) && isNullish(error)) {
        return AsyncData.NotAsked();
      }

      return AsyncData.Done(toResult({ data, error }));
    }, [fetching, data, error]),

    useCallback(
      (variables: Variables, context?: Partial<OperationContext>) =>
        Future.fromPromise(execute(variables, context))
          .mapError(error => error as CombinedError)
          .mapOkToResult(toResult),
      [execute],
    ),
  ] as const;
};
