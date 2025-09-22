import type { PKResult } from "@placekit/client-js";
import { Array, Future, Option, Result } from "@swan-io/boxed";
import { AutocompleteSearchInput } from "@swan-io/lake/src/components/AutocompleteSearchInput";
import { useCallback } from "react";
import { CountryCCA3, countriesWithMultipleCCA3, getCCA2forCCA3 } from "../constants/countries";
import { usePlacekit } from "../hooks/usePlacekit";
import { t } from "../utils/i18n";

type Suggestion = {
  title: string;
  subtitle: string;
  value: PKResult;
};

export type CityDetail = {
  city: string;
  postalCode?: string;
};

type Props = {
  value: string;
  onValueChange: (value: string) => void;
  country?: CountryCCA3;
  disabled?: boolean;
  error?: string;
  id?: string;
  placeholder?: string;
  onSuggestion?: (place: CityDetail) => void;
  onLoadError: (error: unknown) => void;
  apiKey?: string;
};

export const PlacekitCityInput = ({
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
  const placekit = usePlacekit({ apiKey });

  const loadSuggestions = useCallback(
    (value: string): Future<Result<Suggestion[], unknown>> => {
      if (placekit != null) {
        const countries = Option.fromNullable(country)
          .map(country => countriesWithMultipleCCA3[country] ?? [country])
          .map(cca3Codes =>
            Array.filterMap(cca3Codes, cca3 => Option.fromNullable(getCCA2forCCA3(cca3))),
          )
          .flatMap(array => (array.length === 0 ? Option.None() : Option.Some(array)));

        return Future.fromPromise(
          placekit.search(value, {
            types: ["city"],
            countries: countries.toUndefined(),
          }),
        ).mapOk(
          ({ results }) =>
            results.map(result => ({
              title: result.name,
              subtitle: result.city,
              value: result,
            })),
          true,
        );
      }

      return Future.value(Result.Ok([] as Suggestion[]));
    },
    [placekit, country],
  );

  const onSuggestionSelected = useCallback(
    (suggestion: Suggestion) => {
      onSuggestion?.({
        city: suggestion.value.city,
        postalCode: suggestion.value.zipcode[0],
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
      loadSuggestions={placekit != null ? loadSuggestions : undefined}
      onSuggestion={onSuggestionSelected}
      onLoadError={onLoadError}
    />
  );
};
