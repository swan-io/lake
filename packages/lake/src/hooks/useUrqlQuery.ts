import { AsyncData, Result } from "@swan-io/boxed";
import { DependencyList, useCallback, useEffect, useMemo, useState } from "react";
import { AnyVariables, CombinedError, UseQueryArgs, useQuery } from "urql";
import { isNotNullish, isNullish } from "../utils/nullish";

type Query<Data> = {
  isForceReloading: boolean;
  data: AsyncData<Result<Data, CombinedError>>;
  nextData: AsyncData<Result<Data, CombinedError>>;
  reload: () => void;
};

const EMPTY_DEPENDENCY_LIST: DependencyList = [];

export const useUrqlQuery = <Data, Variables extends AnyVariables>(
  args: UseQueryArgs<Variables, Data>,
  dependencyList: DependencyList = EMPTY_DEPENDENCY_LIST,
): Query<Data> => {
  const hasDependencyList = dependencyList !== EMPTY_DEPENDENCY_LIST;
  const [isDepsListUpdate, setIsDepsListUpdate] = useState(hasDependencyList);
  const [isForceReloading, setIsForceReloading] = useState(false);

  const [{ data, fetching, error }, reexecute] = useQuery({
    ...args,
    context: useMemo(() => ({ ...args.context, suspense: false }), [args.context]),
  });

  useEffect(() => {
    if (hasDependencyList) {
      setIsDepsListUpdate(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyList);

  useEffect(() => {
    if (!fetching) {
      setIsDepsListUpdate(false);
      setIsForceReloading(false);
    }
  }, [fetching]);

  const reload = useCallback(() => {
    setIsForceReloading(true);
    reexecute({ requestPolicy: "network-only" });
  }, [reexecute]);

  const okResult = useMemo(
    () => (isNullish(data) ? null : AsyncData.Done(Result.Ok<Data, CombinedError>(data))),
    [data],
  );
  const errorResult = useMemo(
    () => (isNullish(error) ? null : AsyncData.Done(Result.Error<Data, CombinedError>(error))),
    [error],
  );

  const initialFetching = isNullish(okResult) && isNullish(errorResult);
  const shouldResetState = isDepsListUpdate || isForceReloading;

  if (fetching && (initialFetching || shouldResetState)) {
    return {
      isForceReloading,
      data: AsyncData.Loading(),
      nextData: AsyncData.Loading(),
      reload,
    };
  }

  if (isNotNullish(errorResult)) {
    return {
      isForceReloading,
      data: errorResult,
      nextData: errorResult,
      reload,
    };
  }

  if (isNotNullish(okResult)) {
    return {
      isForceReloading,
      data: okResult,
      nextData: fetching ? AsyncData.Loading() : okResult,
      reload,
    };
  }

  return {
    isForceReloading,
    data: AsyncData.NotAsked(),
    nextData: AsyncData.NotAsked(),
    reload,
  };
};

type PaginatedQuery<Data> = {
  isForceReloading: boolean;
  data: AsyncData<Result<Data, CombinedError>>;
  nextData: AsyncData<Result<Data, CombinedError>>;
  reload: () => void;
  setAfter: (cursor: string | undefined) => void;
};

export const useUrqlPaginatedQuery = <Data, Variables extends AnyVariables>(
  args: UseQueryArgs<Variables, Data>,
  dependencyList: DependencyList = EMPTY_DEPENDENCY_LIST,
): PaginatedQuery<Data> => {
  const [after, setAfter] = useState<string>();

  const {
    isForceReloading,
    data,
    nextData,
    reload: baseReload,
  } = useUrqlQuery(
    { ...args, variables: { ...args.variables, after } as Variables },
    dependencyList,
  );

  useEffect(() => {
    setAfter(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyList);

  const reload = useCallback(() => {
    setAfter(undefined);
    baseReload();
  }, [baseReload]);

  return {
    isForceReloading,
    data,
    nextData,
    reload,
    setAfter,
  };
};
