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
  const [{ fetching, data, error }, execute] = useMutation<Data, Variables>(query);

  return [
    useMemo((): AsyncData<Result<Data, Error>> => {
      if (fetching) {
        return AsyncData.Loading();
      }
      if (isNullish(data) && isNullish(error)) {
        return AsyncData.NotAsked();
      }

      return AsyncData.Done(toResult({ data, error }));
    }, [fetching, data, error]),

    useCallback(
      (
        input: Variables,
        context?: Partial<OperationContext>,
      ): Future<Result<Data, Error | CombinedError>> =>
        Future.fromPromise(execute(input, context))
          .mapError(error => error as Error) // Only used to cast error
          .mapOkToResult(toResult),
      [execute],
    ),
  ] as const;
};
