import type { PKClient } from "@placekit/client-js/lite";
import { useEffect, useMemo, useState } from "react";

const debounce = <A extends unknown[], R>(fn: (...args: A) => Promise<R>, ms: number) => {
  let timer: NodeJS.Timeout | undefined;

  return (...args: A) => {
    clearTimeout(timer);

    return new Promise<R>(resolve => {
      timer = setTimeout(() => resolve(fn(...args)), ms);
    });
  };
};

export const usePlacekit = ({
  apiKey,
  debounceInterval = 1000,
}: {
  apiKey?: string;
  debounceInterval?: number;
}) => {
  const [client, setClient] = useState<PKClient>();

  useEffect(() => {
    if (apiKey != null) {
      void import("@placekit/client-js/lite").then(({ default: placekit }) => {
        setClient(placekit(apiKey));
      });
    }
  }, [apiKey]);

  return useMemo<PKClient | undefined>(() => {
    if (client != null) {
      return {
        ...client,
        search: debounce(client.search, debounceInterval),
        reverse: debounce(client.reverse, debounceInterval),
      };
    }
  }, [client, debounceInterval]);
};
