import { Future, Result } from "@swan-io/boxed";
import { AutoWidthImage } from "@swan-io/lake/src/components/AutoWidthImage";
import { AutocompleteSearchInput } from "@swan-io/lake/src/components/AutocompleteSearchInput";
import { Box } from "@swan-io/lake/src/components/Box";
import { isNotNullish } from "@swan-io/lake/src/utils/nullish";
import { useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";
import poweredByGoogle from "../assets/images/powered_by_google_on_white_hdpi.png";
import { CountryCCA3, countriesWithMultipleCCA3 } from "../constants/countries";
import { PlaceDetail, getPlaceDetails, useGoogleMapSDK } from "../hooks/useGoogleMapSDK";
import { t } from "../utils/i18n";

const styles = StyleSheet.create({
  poweredByGoogle: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

type Suggestion = {
  id: string; // Google 'place_id; value.
  title: string;
  subtitle: string;
  value: null;
};

type Props = {
  value: string;
  onValueChange: (value: string) => void;
  country?: CountryCCA3;
  disabled?: boolean;
  error?: string;
  id?: string;
  placeholder?: string;
  onSuggestion?: (place: Pick<PlaceDetail, "city" | "postalCode">) => void;
  onLoadError: (error: unknown) => void;
  apiKey: string;
};

export const GMapCityInput = ({
  value,
  onValueChange,
  country,
  disabled,
  placeholder,
  id,
  error,
  onSuggestion,
  onLoadError,
  apiKey,
}: Props) => {
  const sdk = useGoogleMapSDK({ apiKey });

  const autocomplete = useMemo(
    () => sdk.map(google => new google.maps.places.AutocompleteService()),
    [sdk],
  );

  const loadSuggestions = useCallback(
    (value: string): Future<Result<Suggestion[], unknown>> => {
      if (autocomplete.isDone() && isNotNullish(country)) {
        return Future.fromPromise(
          autocomplete.get().getPlacePredictions({
            input: value,
            componentRestrictions: {
              country: [...(countriesWithMultipleCCA3[country] ?? "")],
            },
            types: ["(cities)"],
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
          console.log("result.value", result.value);
          onSuggestion?.(result.value);
        }
      });
    },
    [onSuggestion],
  );

  return (
    <AutocompleteSearchInput
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      id={id}
      placeholder={placeholder}
      error={error}
      emptyResultText={t("common.noResult")}
      ListFooterComponent={
        <Box direction="row" justifyContent="end" style={styles.poweredByGoogle}>
          <AutoWidthImage height={14} sourceUri={poweredByGoogle} />
        </Box>
      }
      loadSuggestions={loadSuggestions}
      onSuggestion={onSuggestionSelected}
      onLoadError={onLoadError}
    />
  );
};
