import { PKClient } from "@placekit/client-js";
import { useEffect, useState } from "react";

export const usePlacekit = ({ apiKey }: { apiKey?: string }) => {
  const [placekit, setPlacekit] = useState<PKClient | undefined>(undefined);

  useEffect(() => {
    if (apiKey != null) {
      void import("@placekit/client-js").then(({ default: placekit }) => {
        setPlacekit(placekit(apiKey));
      });
    }
  }, [apiKey]);

  return placekit;
};
