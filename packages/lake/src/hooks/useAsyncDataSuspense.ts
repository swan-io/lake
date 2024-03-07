import { AsyncData, Deferred } from "@swan-io/boxed";
import { useEffect, useMemo, useRef } from "react";

export const useAsyncDataSuspense = <T extends AsyncData<unknown>>(asyncData: T) => {
  // For the sake of simplicity here, we also consider `NotAsked` to be a
  // loading state, so that Suspense is triggered immediately if the query initializes
  // in a `useEffect` hook, leaving a component render with `NotAsked`
  const hasResolved = useRef(asyncData.isDone());

  const deferredRef = useRef(Deferred.make());
  const [future, resolve] = deferredRef.current;

  const promiseToThrow = useMemo(() => future.toPromise(), [future]);

  useEffect(() => {
    // Once the `asyncData` has been `Done` at least once, the component becomes
    // responsible for its own loading states
    if (asyncData.isDone()) {
      resolve(undefined);
      hasResolved.current = true;
    }
  });

  if (!hasResolved.current) {
    throw promiseToThrow;
  }
};
