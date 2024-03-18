import { AsyncData, Future, Result } from "@swan-io/boxed";
import { DependencyList, useCallback, useEffect, useMemo, useState } from "react";
import {
  AnyVariables,
  CombinedError,
  DocumentInput,
  UseQueryArgs,
  useClient,
  useQuery,
} from "urql";
import { isNotNullish, isNullish } from "../utils/nullish";
import { parseOperationResult } from "../utils/urql";

type Query<Data> = {
  isForceReloading: boolean;
  data: AsyncData<Result<Data, CombinedError>>;
  nextData: AsyncData<Result<Data, CombinedError>>;
  reload: () => void;
  refresh: () => void;
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

  const refresh = useCallback(() => {
    reexecute({ requestPolicy: "cache-and-network" });
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
      refresh,
    };
  }

  if (isNotNullish(errorResult)) {
    return {
      isForceReloading,
      data: errorResult,
      nextData: errorResult,
      reload,
      refresh,
    };
  }

  if (isNotNullish(okResult)) {
    return {
      isForceReloading,
      data: okResult,
      nextData: fetching ? AsyncData.Loading() : okResult,
      reload,
      refresh,
    };
  }

  return {
    isForceReloading,
    data: AsyncData.NotAsked(),
    nextData: AsyncData.NotAsked(),
    reload,
    refresh,
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

type DeferredQuery<Data, Variables extends AnyVariables> = {
  data: AsyncData<Result<Data, CombinedError>>;
  query: (args: Variables) => Future<Result<Data, CombinedError>>;
  reset: () => void;
};

export const useDeferredUrqlQuery = <Data, Variables extends AnyVariables>(
  document: DocumentInput<Data, Variables>,
): DeferredQuery<Data, Variables> => {
  const [data, setData] = useState<AsyncData<Result<Data, CombinedError>>>(AsyncData.NotAsked());

  const client = useClient();

  const query = useCallback(
    (args: Variables) => {
      setData(AsyncData.Loading());
      return Future.fromPromise<Data, CombinedError>(
        client.query(document, args).toPromise().then(parseOperationResult),
      ).tap(data => {
        setData(AsyncData.Done(data));
      });
    },
    [client, document],
  );

  const reset = useCallback(() => {
    setData(AsyncData.NotAsked());
  }, []);

  return { data, query, reset };
};
