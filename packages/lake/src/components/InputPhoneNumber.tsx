import { ReactNode, Ref, useEffect, useImperativeHandle, useRef } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { colors, radii, spacings } from "../constants/design";
import { useDisclosure } from "../hooks/useDisclosure";
import { isNotNullishOrEmpty } from "../utils/nullish";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { LakeText } from "./LakeText";
import { LakeTextInput } from "./LakeTextInput";
import { Popover } from "./Popover";
import { Space } from "./Space";

const styles = StyleSheet.create({
  idd: {
    alignItems: "center",
    backgroundColor: colors.gray[50],
    borderColor: colors.gray[100],
    borderTopLeftRadius: radii[4],
    borderBottomLeftRadius: radii[4],
    borderWidth: 1,
    borderRightWidth: 0,
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: spacings[16],
    paddingRight: spacings[12],
    transitionDuration: "150ms",
    transitionProperty: "background-color",
  },
  iddPressed: { backgroundColor: colors.gray[100] },
  iddErrored: { borderColor: colors.negative[500] },
  iddDisabled: {
    borderColor: colors.gray[50],
    borderRightWidth: 1,
    borderRightColor: colors.gray[100],
  },
  input: { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
});

export type PhoneCountry = {
  cca2: string;
  idd: string;
};

export type InputPhoneNumberRef = {
  focus: () => void;
  blur: () => void;
};

type Props = {
  ref?: Ref<InputPhoneNumberRef>;
  id?: string;
  country: PhoneCountry;
  value: string;
  error?: string;
  valid?: boolean;
  autofocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  flag?: ReactNode;
  countryList: (close: () => void) => ReactNode;
  countryButtonAriaLabel?: string;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
  onBlur?: () => void;
};

export const InputPhoneNumber = ({
  ref,
  id,
  country,
  value,
  error,
  valid = false,
  autofocus = false,
  disabled = false,
  readOnly = false,
  flag,
  countryList,
  countryButtonAriaLabel = "Select country",
  onChangeText,
  onSubmitEditing,
  onBlur,
}: Props) => {
  const referenceRef = useRef<View>(null);
  const inputRef = useRef<TextInput>(null);

  const [visible, { open, close }] = useDisclosure(false);

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
    () => ({ focus: () => inputRef.current?.focus(), blur: () => inputRef.current?.blur() }),
    [],
  );

  return (
    <>
      <Popover
        referenceRef={referenceRef}
        visible={visible}
        matchReferenceWidth={true}
        onDismiss={close}
      >
        {countryList(close)}
      </Popover>

      <Box ref={referenceRef} direction="row">
        <Pressable
          role="button"
          disabled={visible || disabled || readOnly}
          onPress={open}
          aria-label={countryButtonAriaLabel}
          style={({ pressed }) => [
            styles.idd,
            !visible && pressed && styles.iddPressed,
            (disabled || readOnly) && styles.iddDisabled,
            isNotNullishOrEmpty(error) && styles.iddErrored,
          ]}
        >
          {flag}

          {flag != null && <Space width={8} />}

          <LakeText
            color={colors.gray[600]}
            numberOfLines={1}
            userSelect="none"
            variant="smallSemibold"
          >
            +{country.idd}
          </LakeText>

          <Space width={8} />
          <Icon name="chevron-down-filled" color={colors.gray[600]} size={16} />
        </Pressable>

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
    </>
  );
};
