import { Box } from "@swan-io/lake/src/components/Box";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { LakeTextInput } from "@swan-io/lake/src/components/LakeTextInput";
import { Space } from "@swan-io/lake/src/components/Space";
import { colors } from "@swan-io/lake/src/constants/design";
import { isNotNullishOrEmpty } from "@swan-io/lake/src/utils/nullish";
import { Ref, useEffect, useImperativeHandle, useRef } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Country, CountryCCA3, phoneCountries } from "../constants/countries";
import { PhoneCountryPicker } from "./PhoneCountryPicker";

const styles = StyleSheet.create({
  picker: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 0,
  },
  pickerDisabled: {
    borderRightWidth: 1,
    borderRightColor: colors.gray[100],
  },
  input: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});

export type InputPhoneNumberRef = {
  focus: () => void;
  blur: () => void;
};

type Props = {
  ref?: Ref<InputPhoneNumberRef>;
  id?: string;
  country: Country;
  value: string;
  countries?: CountryCCA3[];
  error?: string;
  help?: string;
  valid?: boolean;
  autofocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  countryAriaLabel?: string;
  hideErrors?: boolean;
  onCountryChange: (country: Country) => void;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
  onBlur?: () => void;
};

export const InputPhoneNumber = ({
  ref,
  id,
  country,
  value,
  countries,
  error,
  help,
  valid = false,
  autofocus = false,
  disabled = false,
  readOnly = false,
  countryAriaLabel,
  hideErrors = false,
  onCountryChange,
  onChangeText,
  onSubmitEditing,
  onBlur,
}: Props) => {
  const inputRef = useRef<TextInput>(null);

  const handleChangeText = (text: string) => {
    const clean = text.replace(/[^ +0-9-()]/g, "");
    if (text === clean) {
      onChangeText(text);
    }
  };

  useEffect(() => {
    if (autofocus && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [autofocus]);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
    }),
    [],
  );

  const pickerStyle = [styles.picker, (disabled || readOnly) && styles.pickerDisabled];

  return (
    <>
      <Box direction="row">
        <PhoneCountryPicker
          value={country}
          countries={countries ?? phoneCountries}
          onValueChange={onCountryChange}
          disabled={disabled}
          readOnly={readOnly}
          error={error}
          ariaLabel={countryAriaLabel}
          style={pickerStyle}
        />

        <LakeTextInput
          id={id}
          ref={inputRef}
          autoComplete="tel"
          inputMode="tel"
          rows={1}
          hideErrors={true}
          value={value}
          valid={valid}
          error={error}
          disabled={disabled}
          readOnly={readOnly}
          onChangeText={handleChangeText}
          onSubmitEditing={onSubmitEditing}
          onBlur={onBlur}
          style={styles.input}
        />
      </Box>

      {!hideErrors && (
        <>
          <Space height={4} />

          <LakeText
            variant="smallRegular"
            color={isNotNullishOrEmpty(error) ? colors.negative[500] : colors.gray[500]}
          >
            {error ?? help ?? " "}
          </LakeText>
        </>
      )}
    </>
  );
};
