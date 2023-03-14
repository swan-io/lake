import { AsyncData } from "@swan-io/boxed";
import { useEffect } from "react";
import { atom, useAtom } from "react-atomic-state";
import { Loader } from "@googlemaps/js-api-loader";

type Props = {
  language?: string;
  apiKey?: string;
};

const sdk = atom<AsyncData<typeof google>>(AsyncData.NotAsked());

export const useGoogleMapSDK = ({ language, apiKey }: Props) => {
  const googleSdk = useAtom(sdk);

  useEffect(() => {
    if (googleSdk.isNotAsked()) {
      if (apiKey != undefined) {
        sdk.set(AsyncData.Loading());

        void new Loader({
          apiKey,
          language,
          libraries: ["places"],
        })
          .load()
          .then(google => sdk.set(AsyncData.Done(google)));
      }
    }
  }, [language, googleSdk, apiKey]);

  return googleSdk;
};
