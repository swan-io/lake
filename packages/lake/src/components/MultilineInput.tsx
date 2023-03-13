import { forwardRef, memo, useId } from "react";
import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { colors } from "../constants/colors";
import { typography } from "../constants/typography";
import { isNotNullish } from "../utils/nullish";
import { InputError } from "./InputError";
import { Label } from "./Label";
import { PressableTextInput } from "./Pressable";
import { Space } from "./Space";

const styles = StyleSheet.create({
  base: {
    ...typography.bodyLarge,
    backgroundColor: colors.white,
    borderColor: colors.gray[10],
    borderRadius: 4,
    borderWidth: 1,
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: "100%",
    minHeight: 128,
    outlineStyle: "none",
    padding: 16,
    placeholderTextColor: colors.gray[30],
    resize: "vertical",
    transitionProperty: ["border-color", "box-shadow"],
    transitionDuration: "150ms",
  },
  focused: {
    borderColor: colors.gray[30],
    shadowColor: colors.gray[100],
    shadowOpacity: 0.12,
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 2,
  },
  hovered: {
    shadowColor: colors.gray[100],
    shadowOpacity: 0.06,
    shadowOffset: { height: 4, width: 0 },
    shadowRadius: 8,
  },
  errored: {
    borderColor: colors.red[100],
    paddingRight: 48,
  },
});

type Props = {
  disabled?: boolean;
  error?: string;
  label: string;
  onBlur?: (event: NativeSyntheticEvent<React.FocusEvent>) => void;
  onSubmitEditing?: TextInputProps["onSubmitEditing"];
  onValueChange?: TextInputProps["onChangeText"];
  placeholder?: string;
  value?: string;
  readOnly?: boolean;
};

export const MultilineInput = memo(
  forwardRef<TextInput, Props>(
    (
      {
        disabled = false,
        error,
        label,
        onBlur,
        onSubmitEditing,
        onValueChange,
        placeholder,
        readOnly = false,
        value = "",
      },
      forwardedRef,
    ) => {
      const id = `input-${useId()}`;

      return (
        <View>
          <Label htmlFor={id}>{label}</Label>
          <Space height={8} />

          <PressableTextInput
            nativeID={id}
            ref={forwardedRef}
            allowFontScaling={false}
            autoComplete="off"
            editable={!readOnly && !disabled}
            multiline={true}
            onBlur={onBlur}
            onChangeText={onValueChange}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}
            value={value}
            style={({ hovered, focused }) => [
              styles.base,
              focused ? styles.focused : hovered && styles.hovered,
              isNotNullish(error) && styles.errored,
            ]}
          />

          <InputError message={error} />
        </View>
      );
    },
  ),
);

MultilineInput.displayName = "MultilineInput";
