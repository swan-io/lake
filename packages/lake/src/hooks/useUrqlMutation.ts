import { AsyncData, Future, Result } from "@swan-io/boxed";
import { useCallback, useMemo } from "react";
import { AnyVariables, CombinedError, MutationProps, useMutation } from "urql";
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
  query: MutationProps<Data, Variables>["query"],
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
      (input: Variables): Future<Result<Data, Error | CombinedError>> =>
        Future.fromPromise(execute(input))
          .mapError(error => error as Error) // Only used to cast error
          .mapResult(toResult),
      [execute],
    ),
  ] as const;
};
