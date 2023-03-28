import { AsyncData, Result } from "@swan-io/boxed";
import { DependencyList, useCallback, useEffect, useMemo, useState } from "react";
import { AnyVariables, UseQueryArgs, useQuery } from "urql";
import { isNotNullish, isNullish } from "../utils/nullish";

type Query<Data> = {
  data: AsyncData<Result<Data, Error>>;
  nextData: AsyncData<Result<Data, Error>>;
  isForceReloading: boolean;
  reload: () => void;
};

const NO_SUSPENSE_CONTEXT = { suspense: false } as const;

export const useUrqlQuery = <Data, Variables extends AnyVariables>(
  args: UseQueryArgs<Variables, Data>,
  dependencyList: DependencyList,
): Query<Data> => {
  const [haveParamsChanged, setHaveParamsChanged] = useState(false);
  const [isForceReloading, setIsForceReloading] = useState(false);
  const [{ data, fetching, error }, reexecute] = useQuery<Data, Variables>({
    ...args,
    context: NO_SUSPENSE_CONTEXT,
  });

  const reload = useCallback(() => {
    setIsForceReloading(true);
    reexecute();
  }, [reexecute]);

  useEffect(() => {
    setHaveParamsChanged(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyList);

  useEffect(() => {
    if (!fetching) {
      setHaveParamsChanged(false);
      setIsForceReloading(false);
    }
  }, [fetching]);

  const okResult = useMemo(() => AsyncData.Done(Result.Ok(data)), [data]);
  const errorResult = useMemo(() => AsyncData.Done(Result.Error(error)), [error]);
  const shouldResetState = isForceReloading || haveParamsChanged;

  if (((isNullish(data) && isNullish(error)) || shouldResetState) && fetching) {
    return {
      data: AsyncData.Loading(),
      nextData: AsyncData.Loading(),
      isForceReloading,
      reload,
    };
  }

  if (isNotNullish(error)) {
    return {
      data: errorResult as AsyncData<Result<Data, Error>>,
      nextData: errorResult as AsyncData<Result<Data, Error>>,
      isForceReloading,
      reload,
    };
  }

  if (isNotNullish(data)) {
    return {
      data: okResult as AsyncData<Result<Data, Error>>,
      nextData: fetching ? AsyncData.Loading() : (okResult as AsyncData<Result<Data, Error>>),
      isForceReloading,
      reload,
    };
  }

  return {
    data: AsyncData.NotAsked(),
    nextData: AsyncData.NotAsked(),
    isForceReloading,
    reload,
  };
};

type PaginatedQuery<Data> = {
  data: AsyncData<Result<Data, Error>>;
  nextData: AsyncData<Result<Data, Error>>;
  isForceReloading: boolean;
  reload: () => void;
  setAfter: (cursor: string | undefined) => void;
};

export const useUrqlPaginatedQuery = <Data, Variables extends AnyVariables>(
  args: UseQueryArgs<Variables, Data>,
  dependencyList: DependencyList,
): PaginatedQuery<Data> => {
  const [after, setAfter] = useState<string | undefined>(undefined);

  const {
    data,
    nextData,
    isForceReloading,
    reload: originalReload,
  } = useUrqlQuery<Data, Variables>(
    { ...args, variables: { ...args.variables, after } as Variables },
    dependencyList,
  );

  useEffect(() => {
    setAfter(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyList);

  const reload = useCallback(() => {
    setAfter(undefined);
    originalReload();
  }, [originalReload]);

  return { data, nextData, isForceReloading, reload, setAfter };
};
