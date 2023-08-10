import { Future, Result } from "@swan-io/boxed";
import { AutoWidthImage } from "@swan-io/lake/src/components/AutoWidthImage";
import { AutocompleteSearchInput } from "@swan-io/lake/src/components/AutocompleteSearchInput";
import { Box } from "@swan-io/lake/src/components/Box";
import {
  CountryCCA3,
  countriesWithMultipleCCA3,
} from "@swan-io/shared-business/src/constants/countries";
import { MutableRefObject, useCallback, useMemo } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import poweredByGoogle from "../assets/images/powered_by_google_on_white_hdpi.png";
import { PlaceDetail, getPlaceDetails, useGoogleMapSDK } from "../hooks/useGoogleMapSDK";

const styles = StyleSheet.create({
  footer: {
    padding: 12,
    paddingBottom: 4,
  },
});

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

export const GMapAddressSearchInput = ({
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
          const dependsOnCountriesWithMultipleCCA3 = countriesWithMultipleCCA3[country]?.includes(
            result.value.country,
          );

          onSuggestion?.({
            ...result.value,
            country: dependsOnCountriesWithMultipleCCA3 === true ? country : result.value.country,
          });
        }
      });
    },
    [country, onSuggestion],
  );

  return (
    <AutocompleteSearchInput
      inputRef={inputRef}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      id={id}
      placeholder={placeholder}
      error={error}
      emptyResultText={emptyResultText}
      ListFooterComponent={
        <Box direction="row" justifyContent="end" style={styles.footer}>
          <AutoWidthImage height={14} sourceUri={poweredByGoogle} />
        </Box>
      }
      shouldDisplaySuggestions={shouldDisplaySuggestions}
      loadSuggestions={loadSuggestions}
      onSuggestion={onSuggestionSelected}
    />
  );
};
