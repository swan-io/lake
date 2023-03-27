import { AsyncData, Future, Result } from "@swan-io/boxed";
import { MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";
import { colors } from "../constants/design";
import { useFirstMountState } from "../hooks/useFirstMountState";
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
  nativeID?: string;
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
  value: initialValue,
  onValueChange,
  disabled,
  nativeID,
  placeholder,
  error,
  emptyResultText,
  ListFooterComponent,
  shouldDisplaySuggestions = true,
  loadSuggestions,
  onSuggestion,
  onLoadError,
}: Props<T>) => {
  const isFirstMount = useFirstMountState();
  const [state, setState] = useState<State<T>>(AsyncData.NotAsked());
  const [value, setValue] = useState(initialValue ?? "");

  const showTriggerSearchRef = useRef(true);

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

    const request = loadSuggestions(value);
    if (onLoadError != null) {
      request.tapError(onLoadError);
    }
    request.onResolve(value => setState(AsyncData.Done(value)));

    return () => request.cancel();
  }, [value, shouldDisplaySuggestions, loadSuggestions, onLoadError]);

  useEffect(() => {
    showTriggerSearchRef.current = true;
  }, [value]);

  return (
    <LakeCombobox<Suggestion<T>>
      inputRef={inputRef}
      nativeID={nativeID}
      placeholder={placeholder}
      value={value}
      items={state}
      icon="search-filled"
      disabled={disabled}
      error={error}
      ListFooterComponent={ListFooterComponent}
      onSelectItem={item => {
        showTriggerSearchRef.current = false;
        onSuggestion(item);
      }}
      onValueChange={value => {
        setValue(value);
        onValueChange(value);
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
