import { Future, Result } from "@swan-io/boxed";
import { AutoWidthImage } from "@swan-io/lake/src/components/AutoWidthImage";
import { AutocompleteSearchInput } from "@swan-io/lake/src/components/AutocompleteSearchInput";
import { Box } from "@swan-io/lake/src/components/Box";
import {
  CountryCCA2,
  CountryCCA3,
  countriesWithMultipleCCA3,
  getCCA3forCCA2,
} from "@swan-io/shared-business/src/constants/countries";
import { MutableRefObject, useCallback, useMemo } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { match } from "ts-pattern";
import poweredByGoogle from "../assets/images/powered_by_google_on_white_hdpi.png";
import { useGoogleMapSDK } from "../hooks/useGoogleMapSDK";

const styles = StyleSheet.create({
  poweredByGoogle: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export type PlaceDetail = {
  completeAddress: string;
  streetNumber: string;
  city: string;
  country: string;
  postalCode: string;
};

type Suggestion = {
  id: string; // Google 'place_id; value.
  title: string;
  subtitle: string;
  value: null;
};

type Props = {
  inputRef?: MutableRefObject<unknown>;
  id?: string;
  country: CountryCCA3; // cca3 country
  disabled?: boolean;
  error?: string;
  onSuggestion?: (suggestion: PlaceDetail) => void;
  onValueChange: (value: string) => void;
  style?: StyleProp<ViewStyle>;
  value?: string;
  language: "en" | "es" | "de" | "fr" | "it" | "nl" | "pt";
  placeholder: string;
  shouldDisplaySuggestions?: boolean;
  emptyResultText: string;
  apiKey: string;
};

const getPlaceDetails = (placeId: string): Future<Result<PlaceDetail, unknown>> => {
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

export const AddressSearchInput = ({
  inputRef,
  id,
  country,
  disabled,
  error,
  value,
  onValueChange,
  onSuggestion,
  language,
  placeholder,
  shouldDisplaySuggestions = true,
  emptyResultText,
  apiKey,
}: Props) => {
  const sdk = useGoogleMapSDK({
    language,
    apiKey,
  });

  const autocomplete = useMemo(
    () => sdk.map(google => new google.maps.places.AutocompleteService()),
    [sdk],
  );

  const loadSuggestions = useCallback(
    (value: string): Future<Result<Suggestion[], unknown>> => {
      if (autocomplete.isDone()) {
        return Future.fromPromise(
          autocomplete.get().getPlacePredictions({
            input: value,
            componentRestrictions: { country: countriesWithMultipleCCA3[country] ?? [country] },
            types: ["address"],
          }),
        ).mapOk(
          ({ predictions }) =>
            predictions.map(p => ({
              id: p.place_id,
              title: p.structured_formatting.main_text,
              subtitle: p.structured_formatting.secondary_text,
              value: null,
            })),
          true,
        );
      }

      return Future.value(Result.Ok([] as Suggestion[]));
    },
    [autocomplete, country],
  );

  const onSuggestionSelected = useCallback(
    (suggestion: Suggestion) => {
      getPlaceDetails(suggestion.id).onResolve(result => {
        if (result.isOk()) {
          onSuggestion?.(result.value);
        }
      });
    },
    [onSuggestion],
  );

  return (
    <AutocompleteSearchInput
      inputRef={inputRef}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      nativeID={id}
      placeholder={placeholder}
      error={error}
      emptyResultText={emptyResultText}
      ListFooterComponent={
        <Box direction="row" justifyContent="end" style={styles.poweredByGoogle}>
          <AutoWidthImage height={14} sourceUri={poweredByGoogle} />
        </Box>
      }
      shouldDisplaySuggestions={shouldDisplaySuggestions}
      loadSuggestions={loadSuggestions}
      onSuggestion={onSuggestionSelected}
    />
  );
};
