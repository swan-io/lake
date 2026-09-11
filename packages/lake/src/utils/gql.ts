import { Result } from "@bloodyowl/boxed";

export const filterRejectionsToResult = <T extends { __typename: string }>(input: T) =>
  (input.__typename.endsWith("Rejection") ? Result.Error(input) : Result.Ok(input)) as Result<
    Exclude<T, { __typename: `${string}Rejection` }>,
    Extract<T, { __typename: `${string}Rejection` }>
  >;
