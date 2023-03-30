import { AsyncData, Future, Result } from "@swan-io/boxed";
import { MutableRefObject, ReactNode, useRef, useState } from "react";
import { colors } from "../constants/design";
import { LakeCombobox } from "./LakeCombobox";
import { LakeText } from "./LakeText";

type Suggestion<T> = {
  id: string;
  title: string;
  subtitle: string;
  value: T;
};

type Props<T> = {
  inputRef?: MutableRefObject<unknown>;
  value?: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
  id?: string;
  placeholder?: string;
  error?: string;
  emptyResultText: string;
  ListFooterComponent?: ReactNode;
  shouldDisplaySuggestions?: boolean;
  loadSuggestions: (value: string) => Future<Result<Suggestion<T>[], unknown>>;
  onSuggestion: (suggestion: Suggestion<T>) => void;
  onLoadError?: (error: unknown) => void;
};

type State<T> = AsyncData<Result<Suggestion<T>[], unknown>>;

export const AutocompleteSearchInput = <T,>({
  inputRef,
  value,
  onValueChange,
  disabled,
  id,
  placeholder,
  error,
  emptyResultText,
  ListFooterComponent,
  shouldDisplaySuggestions = true,
  loadSuggestions,
  onSuggestion,
  onLoadError,
}: Props<T>) => {
  const [state, setState] = useState<State<T>>(AsyncData.NotAsked());
  const lastRequest = useRef<Future<Result<Suggestion<T>[], unknown>>>();

  return (
    <LakeCombobox<Suggestion<T>>
      inputRef={inputRef}
      id={id}
      placeholder={placeholder}
      value={value ?? ""}
      items={state}
      icon="search-filled"
      disabled={disabled}
      error={error}
      ListFooterComponent={ListFooterComponent}
      onSelectItem={item => {
        onSuggestion(item);
      }}
      onValueChange={value => {
        lastRequest.current?.cancel(); // cancel previous request to avoid race condition
        lastRequest.current = undefined; // avoid to cancel twice the same request

        onValueChange(value);
        if (value.length <= 3 || !shouldDisplaySuggestions) {
          return setState(AsyncData.NotAsked());
        }

        setState(AsyncData.Loading());

        const request = loadSuggestions(value);
        lastRequest.current = request;

        if (onLoadError != null) {
          request.tapError(onLoadError);
        }
        request.onResolve(value => setState(AsyncData.Done(value)));
      }}
      keyExtractor={item => item.id}
      emptyResultText={emptyResultText}
      renderItem={item => (
        <>
          <LakeText numberOfLines={1} selectable={false} color={colors.gray[900]}>
            {item.title}
          </LakeText>

          <LakeText numberOfLines={1} selectable={false} variant="smallRegular">
            {item.subtitle}
          </LakeText>
        </>
      )}
    />
  );
};
