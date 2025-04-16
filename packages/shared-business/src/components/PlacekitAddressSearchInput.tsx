import { PKOptions, PKResult } from "@placekit/client-js";
import { Array, Future, Option, Result } from "@swan-io/boxed";
import { AutocompleteSearchInput } from "@swan-io/lake/src/components/AutocompleteSearchInput";
import { Ref, useCallback } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { CountryCCA3, countriesWithMultipleCCA3, getCCA2forCCA3 } from "../constants/countries";
import { usePlacekit } from "../hooks/usePlacekit";

type Suggestion = {
  title: string;
  subtitle: string;
  value: PKResult;
};

export type AddressDetail = {
  completeAddress: string;
  city: string;
  postalCode?: string;
  country: string;
  countryCode: string;
};

type Props = {
  inputRef?: Ref<unknown>;
  id?: string;
  types?: PKOptions["types"];
  country?: CountryCCA3; // cca3 country
  disabled?: boolean;
  error?: string;
  onSuggestion?: (suggestion: AddressDetail) => void;
  onValueChange: (value: string) => void;
  style?: StyleProp<ViewStyle>;
  value?: string;
  language: "en" | "es" | "de" | "fi" | "fr" | "it" | "nl" | "pt";
  placeholder: string;
  shouldDisplaySuggestions?: boolean;
  emptyResultText: string;
  apiKey?: string;
};

export const PlacekitAddressSearchInput = ({
  inputRef,
  id,
  country,
  disabled,
  error,
  value,
  types = ["street"],
  onValueChange,
  onSuggestion,
  language,
  placeholder,
  shouldDisplaySuggestions = true,
  emptyResultText,
  apiKey,
}: Props) => {
  const placekit = usePlacekit({ apiKey });

  const loadSuggestions = useCallback(
    (value: string): Future<Result<Suggestion[], unknown>> => {
      if (placekit != null) {
        const countries = Option.fromNullable(country)
          .map(country =>
            Array.filterMap(countriesWithMultipleCCA3[country] ?? [country], cca3 =>
              Option.fromNullable(getCCA2forCCA3(cca3)),
            ),
          )
          .getOr([]);
        const cca2Countries = countries.length === 0 ? Option.None() : Option.Some(countries);

        return Future.fromPromise(
          placekit.search(value, {
            types,
            language,
            countries: cca2Countries.toUndefined(),
          }),
        ).mapOk(
          ({ results }) =>
            results.map(result => ({
              title: result.name,
              subtitle: `${result.city} (${result.country})`,
              value: result,
            })),
          true,
        );
      }

      return Future.value(Result.Ok([] as Suggestion[]));
    },
    [placekit, country, language, types],
  );

  const onSuggestionSelected = useCallback(
    (suggestion: Suggestion) => {
      onSuggestion?.({
        completeAddress: suggestion.value.name,
        postalCode: suggestion.value.zipcode[0],
        city: suggestion.value.city,
        country: suggestion.value.country,
        countryCode: suggestion.value.countrycode,
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
      id={id}
      placeholder={placeholder}
      error={error}
      emptyResultText={emptyResultText}
      shouldDisplaySuggestions={shouldDisplaySuggestions}
      loadSuggestions={placekit != null ? loadSuggestions : undefined}
      onSuggestion={onSuggestionSelected}
    />
  );
};
