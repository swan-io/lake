import { Result } from "@swan-io/boxed";
import { Except, SetRequired } from "type-fest";
import {
  AnyVariables,
  CombinedError,
  OperationResult,
  UseQueryArgs,
  UseQueryResponse,
  UseQueryState,
  useQuery,
} from "urql";
import { isNotNullish, isNullish } from "./nullish";

export const parseOperationResult = <T>({ error, data }: OperationResult<T>): T => {
  if (isNotNullish(error)) {
    throw error;
  }

  if (isNullish(data)) {
    throw new CombinedError({
      networkError: new Error("No Content"),
    });
  }

  return data;
};

export const useQueryWithErrorBoundary = <
  Data = unknown,
  Variables extends AnyVariables = AnyVariables,
>(
  options: UseQueryArgs<Variables, Data>,
): [
  SetRequired<Except<UseQueryState<Data, Variables>, "fetching" | "error">, "data">,
  UseQueryResponse[1],
] => {
  const [{ fetching, data, error, ...rest }, reexecuteQuery] = useQuery<Data, Variables>(options);

  if (isNotNullish(error)) {
    throw error;
  }

  if (isNullish(data)) {
    throw new CombinedError({
      networkError: new Error("No Content"),
    });
  }

  return [{ data, ...rest }, reexecuteQuery];
};

export const filterRejectionsToPromise = <T extends { __typename: string }>(input: T) =>
  (input.__typename.endsWith("Rejection")
    ? Promise.reject(new Error(input.__typename))
    : Promise.resolve(input)) as Promise<Exclude<T, { __typename: `${string}Rejection` }>>;

export const filterRejectionsToResult = <T extends { __typename: string }>(input: T) =>
  (input.__typename.endsWith("Rejection") ? Result.Error(input) : Result.Ok(input)) as Result<
    Exclude<T, { __typename: `${string}Rejection` }>,
    Extract<T, { __typename: `${string}Rejection` }>
  >;
