import { AsyncData, Future, Result } from "@swan-io/boxed";
import { AutoWidthImage } from "@swan-io/lake/src/components/AutoWidthImage";
import { Box } from "@swan-io/lake/src/components/Box";
import { LakeCombobox, LakeComboboxRef } from "@swan-io/lake/src/components/LakeCombobox";
import { colors } from "@swan-io/lake/src/constants/design";
import { typography } from "@swan-io/lake/src/constants/typography";
import { isNotNullish, isNullish } from "@swan-io/lake/src/utils/nullish";
import { useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { match } from "ts-pattern";
import poweredByGoogle from "../assets/images/powered_by_google_on_white_hdpi.png";
import { CountryCCA3, countriesWithMultipleCCA3 } from "../constants/countries";
import { useGoogleMapSDK } from "../hooks/useGoogleMapSDK";
import { t } from "../utils/i18n";

const styles = StyleSheet.create({
  itemTitle: {
    ...typography.bodyLarge,
    lineHeight: typography.lineHeights.title,
    userSelect: "none",
  },
  itemSubtitle: {
    ...typography.bodySmall,
    color: colors.gray[400],
    userSelect: "none",
  },
  poweredByGoogle: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

type PlaceDetail = {
  city: string;
  postalCode: string;
};

type Suggestion = {
  value: string; // Google 'place_id; value.
  prediction: google.maps.places.AutocompletePrediction;
};

type Props = {
  value: string;
  onValueChange: (value: string) => void;
  country?: CountryCCA3;
  disabled?: boolean;
  error?: string;
  id?: string;
  placeholder?: string;
  onSuggestion?: (place: PlaceDetail) => void;
  onLoadError: (error: unknown) => void;
  apiKey: string;
};

type State = AsyncData<Result<Suggestion[], unknown>>;

export const LakeCityInput = ({
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
  const [state, setState] = useState<State>(AsyncData.NotAsked());
  const comboboxRef = useRef<LakeComboboxRef>(null);
  const sdk = useGoogleMapSDK({ apiKey });

  const autocomplete = useMemo(
    () => sdk.map(google => new google.maps.places.AutocompleteService()),
    [sdk],
  );

  useEffect(() => {
    if (value.length <= 3) {
      return setState(AsyncData.NotAsked());
    }

    setState(AsyncData.Loading());
    if (isNotNullish(country)) {
      const request = Future.make<Result<google.maps.places.AutocompleteResponse, unknown>>(
        resolve => {
          const timeoutId = setTimeout(() => {
            if (autocomplete.isDone()) {
              Future.fromPromise(
                autocomplete.get().getPlacePredictions({
                  input: value,
                  componentRestrictions: {
                    country: [...(countriesWithMultipleCCA3[country] ?? "")],
                  },
                  types: ["(cities)"],
                }),
              ).onResolve(resolve);
            }
          }, 250);

          return () => clearTimeout(timeoutId);
        },
      ).mapOk(
        ({ predictions }) => predictions.map(p => ({ value: p.place_id, prediction: p })),
        true,
      );

      request.tapError(onLoadError).onResolve(value => setState(AsyncData.Done(value)));
      return () => request.cancel();
    }
  }, [country, value, autocomplete, onLoadError]);

  return sdk.match({
    NotAsked: () => null,
    Loading: () => null,
    Done: google => {
      const place = new google.maps.places.PlacesService(document.createElement("div"));

      const selectAddress = (suggestion: Suggestion) => {
        place.getDetails({ placeId: suggestion.value }, placeDetail => {
          const result = {
            postalCode: "",
            city: "",
          };

          placeDetail?.address_components?.forEach(({ types, short_name, long_name }) => {
            const type = types[0];

            match(type)
              .with("postal_code", () => (result.postalCode = short_name))
              .with("locality", () => (result.city = long_name))
              .otherwise(() => {});
          });

          onSuggestion?.(result);
          if (comboboxRef.current) {
            comboboxRef.current.close();
          }
        });
      };

      return (
        <LakeCombobox
          ref={comboboxRef}
          placeholder={placeholder}
          value={value}
          items={state}
          icon="search-filled"
          disabled={isNullish(country) || disabled}
          error={error}
          onValueChange={onValueChange}
          id={id}
          ListFooterComponent={
            <Box direction="row" justifyContent="end" style={styles.poweredByGoogle}>
              <AutoWidthImage height={14} sourceUri={poweredByGoogle} />
            </Box>
          }
          onSelectItem={selectAddress}
          emptyResultText={t("common.noResult")}
          keyExtractor={item => item.value}
          renderItem={item => (
            <>
              <Text numberOfLines={1} style={styles.itemTitle}>
                {item.prediction.structured_formatting.main_text}
              </Text>

              <Text numberOfLines={1} style={styles.itemSubtitle}>
                {item.prediction.structured_formatting.secondary_text}
              </Text>
            </>
          )}
        />
      );
    },
  });
};
