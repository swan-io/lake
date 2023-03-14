import { AsyncData, Future, Result } from "@swan-io/boxed";
import { CountryCCA3 } from "../constants/countries";
import { LakeCombobox } from "@swan-io/lake/src/components/LakeCombobox";
import { LakeTextInput } from "@swan-io/lake/src/components/LakeTextInput";
import { useEffect, useRef, useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { LakeText } from "@swan-io/lake/src/components/LakeText";

type Suggestion = {
  id: string;
  firstLine: string;
  secondLine: string;
};

export type PlaceDetail = {
  completeAddress: string;
  streetNumber: string;
  city: string;
  country: string;
  postalCode: string;
};

type Props = {
  id?: string;
  country: CountryCCA3; // cca3 country
  disabled?: boolean;
  error?: string;
  onSuggestionRequest: (input: string) => Promise<Suggestion[]>;
  onSelectSuggestion: (suggestion: Suggestion) => Promise<PlaceDetail>;
  onValueChange: (value: string) => void;
  emptyResultText: string;
  style?: StyleProp<ViewStyle>;
  value?: string;
  placeholder: string;
  shouldDisplaySuggestions?: boolean;
  ListFooterComponent?: React.ReactNode;
};

type State = AsyncData<Result<Suggestion[], unknown>>;

export const AddressSearchInput = ({
  id,
  country,
  disabled,
  error,
  value: initialValue,
  onValueChange,
  onSuggestionRequest,
  onSelectSuggestion,
  emptyResultText,
  placeholder,
  shouldDisplaySuggestions = true,
  ListFooterComponent,
}: Props) => {
  const [state, setState] = useState<State>(AsyncData.NotAsked());
  const [value, setValue] = useState(initialValue ?? "");

  const showTriggerSearchRef = useRef(true);

  useEffect(() => {
    if (value.length <= 3 || !shouldDisplaySuggestions || showTriggerSearchRef.current === false) {
      return setState(AsyncData.NotAsked());
    }

    setState(AsyncData.Loading());

    const request = Future.make<Result<Suggestion[], unknown>>(resolve => {
      const timeoutId = setTimeout(() => {
        Future.fromPromise(onSuggestionRequest(value)).onResolve(resolve);
      }, 250);

      return () => clearTimeout(timeoutId);
    });

    request.onResolve(value => setState(AsyncData.Done(value)));

    return () => request.cancel();
  }, [country, value, shouldDisplaySuggestions, onSuggestionRequest]);

  useEffect(() => {
    showTriggerSearchRef.current = true;
  }, [value]);

  if (shouldDisplaySuggestions) {
    return (
      <LakeCombobox<Suggestion>
        nativeID={id}
        placeholder={placeholder}
        value={value}
        items={state}
        icon="search-filled"
        disabled={disabled}
        error={error}
        ListFooterComponent={ListFooterComponent}
        onSelectItem={suggestion => onSelectSuggestion(suggestion)}
        onValueChange={value => {
          setValue(value);
          onValueChange(value);
        }}
        keyExtractor={item => item.id}
        emptyResultText={emptyResultText}
        renderItem={item => (
          <>
            <LakeText variant="semibold">{item.firstLine}</LakeText>
            <LakeText variant="smallRegular">{item.secondLine}</LakeText>
          </>
        )}
      />
    );
  }

  return (
    <LakeTextInput
      nativeID={id}
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
};
