import { Loader } from "@googlemaps/js-api-loader";
import { AsyncData, Future, Result } from "@swan-io/boxed";
import { useEffect } from "react";
import { atom, useAtom } from "react-atomic-state";
import { match } from "ts-pattern";
import { CountryCCA2, getCCA3forCCA2 } from "../constants/countries";

type Props = {
  language?: string;
  apiKey: string;
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

export type PlaceDetail = {
  completeAddress: string;
  streetNumber: string;
  city: string;
  country: string;
  postalCode: string;
};

export const getPlaceDetails = (placeId: string): Future<Result<PlaceDetail, unknown>> => {
  return Future.make<Result<PlaceDetail, unknown>>(resolve => {
    const place = new google.maps.places.PlacesService(document.createElement("div"));

    place.getDetails({ placeId }, placeDetail => {
      if (placeDetail?.address_components == null) {
        resolve(Result.Error("No place detail found"));
        return;
      }

      const result = {
        completeAddress: "",
        streetNumber: "",
        postalCode: "",
        country: "",
        city: "",
      };

      placeDetail.address_components.forEach(({ types, short_name, long_name }) => {
        const type = types[0];
        match(type)
          .with("street_number", () => (result.streetNumber = long_name))
          .with("route", () => (result.completeAddress = long_name))
          .with("postal_code", () => (result.postalCode = short_name))
          .with(
            "country",
            () => (result.country = getCCA3forCCA2(short_name as CountryCCA2) ?? short_name),
          )
          .with("locality", () => (result.city = long_name))
          .otherwise(() => {});
      });

      if (result.streetNumber != "") {
        if (placeDetail?.name === `${result.completeAddress} ${result.streetNumber}`) {
          result.completeAddress = `${result.completeAddress} ${result.streetNumber}`;
        } else {
          result.completeAddress = `${result.streetNumber} ${result.completeAddress}`;
        }
      }

      resolve(Result.Ok(result));
    });
  });
};
