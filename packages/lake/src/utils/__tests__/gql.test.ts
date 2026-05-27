import { describe, expect, it } from "vitest";
import { filterRejectionsToResult } from "../gql";

describe("filterRejectionsToResult routes GraphQL union members to Ok or Error based on __typename", () => {
  it("returns an Error when __typename ends with 'Rejection'", () => {
    const input = { __typename: "AccountNotFoundRejection", message: "not found" };
    const result = filterRejectionsToResult(input);
    expect(result.isError()).toBe(true);
    expect(result.isError() && result.getError()).toEqual(input);
  });

  it("returns an Ok when __typename does not end with 'Rejection'", () => {
    const input = { __typename: "Account", id: "abc" };
    const result = filterRejectionsToResult(input);
    expect(result.isOk()).toBe(true);
    expect(result.isOk() && result.get()).toEqual(input);
  });

  it("treats a __typename of exactly 'Rejection' as an Error", () => {
    const input = { __typename: "Rejection" };
    expect(filterRejectionsToResult(input).isError()).toBe(true);
  });

  it("does not match __typename that only contains 'Rejection' as a substring", () => {
    const input = { __typename: "RejectionReason" };
    expect(filterRejectionsToResult(input).isOk()).toBe(true);
  });

  it("treats an empty __typename as an Ok", () => {
    const input = { __typename: "" };
    expect(filterRejectionsToResult(input).isOk()).toBe(true);
  });
});
