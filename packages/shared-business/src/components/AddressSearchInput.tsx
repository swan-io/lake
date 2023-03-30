import { AsyncData, Future, Result } from "@swan-io/boxed";
import { AutoWidthImage } from "@swan-io/lake/src/components/AutoWidthImage";
import { Box } from "@swan-io/lake/src/components/Box";
import { LakeCombobox } from "@swan-io/lake/src/components/LakeCombobox";
import { LakeTextInput } from "@swan-io/lake/src/components/LakeTextInput";
import { colors } from "@swan-io/lake/src/constants/colors";
import { typography } from "@swan-io/lake/src/constants/typography";
import { useFirstMountState } from "@swan-io/lake/src/hooks/useFirstMountState";
import {
  CountryCCA2,
  CountryCCA3,
  countriesWithMultipleCCA3,
  getCCA3forCCA2,
} from "@swan-io/shared-business/src/constants/countries";
import { MutableRefObject, useEffect, useMemo, useRef, useState } from "react";
import { StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import { match } from "ts-pattern";
import poweredByGoogle from "../assets/images/powered_by_google_on_white_hdpi.png";
import { useGoogleMapSDK } from "../hooks/useGoogleMapSDK";

const styles = StyleSheet.create({
  itemTitle: {
    ...typography.bodyLarge,
    lineHeight: typography.lineHeights.title,
  },
  itemSubtitle: {
    ...typography.bodySmall,
    color: colors.gray[50],
  },
  poweredByGoogle: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

type Suggestion = {
  value: string; // Google 'place_id; value.
  prediction: google.maps.places.AutocompletePrediction;
};

export type PlaceDetail = {
  completeAddress: string;
  streetNumber: string;
  city: string;
  country: string;
  postalCode: string;
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
  apiKey?: string;
};

type State = AsyncData<Result<Suggestion[], unknown>>;

export const AddressSearchInput = ({
  inputRef,
  id,
  country,
  disabled,
  error,
  value: initialValue,
  onValueChange,
  onSuggestion,
  language,
  placeholder,
  shouldDisplaySuggestions = true,
  emptyResultText,
  apiKey,
}: Props) => {
  const isFirstMount = useFirstMountState();
  const [state, setState] = useState<State>(AsyncData.NotAsked());
  const [value, setValue] = useState(initialValue ?? "");

  const showTriggerSearchRef = useRef(true);

  const sdk = useGoogleMapSDK({
    language,
    apiKey,
  });

  const autocomplete = useMemo(
    () => sdk.map(google => new google.maps.places.AutocompleteService()),
    [sdk],
  );

  useEffect(() => {
    if (!isFirstMount && initialValue != null) {
      setValue(initialValue);
    }
  }, [isFirstMount, initialValue]);

  useEffect(() => {
    if (value.length <= 3 || !shouldDisplaySuggestions || showTriggerSearchRef.current === false) {
      return setState(AsyncData.NotAsked());
    }

    setState(AsyncData.Loading());

    const request = Future.make<Result<google.maps.places.AutocompleteResponse, unknown>>(
      resolve => {
        const timeoutId = setTimeout(() => {
          if (autocomplete.isDone()) {
            Future.fromPromise(
              autocomplete.get().getPlacePredictions({
                input: value,
                componentRestrictions: { country: countriesWithMultipleCCA3[country] ?? [country] },
                types: ["address"],
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

    request.onResolve(value => setState(AsyncData.Done(value)));

    return () => request.cancel();
  }, [country, value, autocomplete, shouldDisplaySuggestions]);

  useEffect(() => {
    showTriggerSearchRef.current = true;
  }, [value]);

  return sdk.match({
    NotAsked: () => null,
    Loading: () => null,
    Done: google => {
      if (shouldDisplaySuggestions) {
        const place = new google.maps.places.PlacesService(document.createElement("div"));

        const selectAddress = (suggestion: Suggestion) => {
          place.getDetails({ placeId: suggestion.value }, placeDetail => {
            const result = {
              completeAddress: "",
              streetNumber: "",
              postalCode: "",
              country: "",
              city: "",
            };

            placeDetail?.address_components?.forEach(({ types, short_name, long_name }) => {
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

            showTriggerSearchRef.current = false;
            setValue(result.completeAddress);
            onSuggestion?.(result);
          });
        };

        return (
          <LakeCombobox<Suggestion>
            inputRef={inputRef}
            id={id}
            placeholder={placeholder}
            value={value}
            items={state}
            icon="search-filled"
            disabled={disabled}
            error={error}
            ListFooterComponent={
              <Box direction="row" justifyContent="end" style={styles.poweredByGoogle}>
                <AutoWidthImage height={14} sourceUri={poweredByGoogle} />
              </Box>
            }
            onSelectItem={suggestion => selectAddress(suggestion)}
            onValueChange={value => {
              setValue(value);
              onValueChange(value);
            }}
            keyExtractor={item => item.value}
            emptyResultText={emptyResultText}
            renderItem={item => (
              <>
                <Text numberOfLines={1} selectable={false} style={styles.itemTitle}>
                  {item.prediction.structured_formatting.main_text}
                </Text>

                <Text numberOfLines={1} selectable={false} style={styles.itemSubtitle}>
                  {item.prediction.structured_formatting.secondary_text}
                </Text>
              </>
            )}
          />
        );
      }
      return (
        <LakeTextInput
          // @ts-expect-error
          ref={inputRef}
          id={id}
          placeholder={placeholder}
          value={value}
          icon="search-filled"
          disabled={disabled}
          error={error}
          onChangeText={value => {
            setValue(value);
            onValueChange(value);
          }}
        />
      );
    },
  });
};
