import { ReactNode, Ref, useEffect, useImperativeHandle, useRef } from "react";
import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from "react-native";
import { colors } from "../constants/design";
import { isNotNullishOrEmpty } from "../utils/nullish";
import { Box } from "./Box";
import { LakeText } from "./LakeText";
import { LakeTextInput } from "./LakeTextInput";
import { Space } from "./Space";

const styles = StyleSheet.create({
  pickerWrapper: {
    flexGrow: 0,
    flexShrink: 0,
  },
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
  phoneCountryPicker: (style: StyleProp<ViewStyle>) => ReactNode;
  value: string;
  error?: string;
  help?: string;
  valid?: boolean;
  autofocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
  onBlur?: () => void;
};

export const InputPhoneNumber = ({
  ref,
  id,
  phoneCountryPicker,
  value,
  error,
  help,
  valid = false,
  autofocus = false,
  disabled = false,
  readOnly = false,
  onChangeText,
  onSubmitEditing,
  onBlur,
}: Props) => {
  const inputRef = useRef<TextInput>(null);

  const handleChangeText = (text: string) => {
    const clean = text.replace(/[^ +0-9-()]/g, "");
    if (text === clean) {
      onChangeText?.(text);
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
        <View style={styles.pickerWrapper}>{phoneCountryPicker(pickerStyle)}</View>

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

      <Space height={4} />

      <LakeText
        variant="smallRegular"
        color={isNotNullishOrEmpty(error) ? colors.negative[500] : colors.gray[500]}
      >
        {error ?? help ?? " "}
      </LakeText>
    </>
  );
};
