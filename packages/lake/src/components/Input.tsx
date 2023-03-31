import { ChangeEventHandler, forwardRef, memo, ReactNode, useId, useRef } from "react";
import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
  WebRole,
} from "react-native";
import { colors } from "../constants/colors";
import { commonStyles } from "../constants/commonStyles";
import { shadows } from "../constants/design";
import { typography } from "../constants/typography";
import { useMergeRefs } from "../hooks/useMergeRefs";
import { isNotNullish } from "../utils/nullish";
import { Box } from "./Box";
import { Icon, IconName } from "./Icon";
import { InputError } from "./InputError";
import { Label } from "./Label";
import { PressableTextInput } from "./Pressable";
import { Space } from "./Space";

const styles = StyleSheet.create({
  base: {
    ...typography.bodyLarge,
    lineHeight: typography.bodyLarge.fontSize,
    backgroundColor: colors.white,
    borderColor: colors.gray[10],
    borderRadius: 4,
    borderWidth: 1,
    flexGrow: 1,
    flexShrink: 1,
    height: 48,
    maxWidth: "100%",
    outlineStyle: "none",
    paddingHorizontal: 16,
    placeholderTextColor: colors.gray[30],
    textOverflow: "ellipsis",
    transitionDuration: "150ms",
    transitionProperty: ["border-color", "box-shadow"],
    whiteSpace: "nowrap",
    wordBreak: "keep-all",
  },
  small: {
    height: 40,
  },
  focused: {
    borderColor: colors.gray[20],
    boxShadow: shadows.tile,
  },
  disabled: {
    backgroundColor: colors.gray[3],
    borderColor: colors.gray[3],
    cursor: "not-allowed",
  },
  hovered: {
    boxShadow: shadows.tile,
  },
  leftIcon: {
    position: "absolute",
    left: 16,
  },
  withLeftIcon: {
    paddingLeft: 48,
  },
  withSuffix: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  rightIcon: {
    position: "absolute",
    right: 16,
  },
  errored: {
    borderColor: colors.red[100],
    paddingRight: 48,
  },
  successful: {
    borderColor: colors.green[100],
    paddingRight: 48,
  },
  suffix: {
    alignItems: "center",
    backgroundColor: colors.gray[3],
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
    borderColor: colors.gray[10],
    borderLeftWidth: 0,
    borderWidth: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  suffixDisabled: {
    borderWidth: 0,
  },
  suffixText: {
    ...typography.bodyLarge,
  },
});

type Props = {
  accessibilityControls?: string;
  accessibilityExpanded?: boolean;
  disabled?: boolean;
  error?: string;
  icon?: IconName;
  inputContainerStyle?: StyleProp<ViewStyle>;
  role?: WebRole;
  inputMode?: TextInputProps["inputMode"];
  enterKeyHint?: TextInputProps["enterKeyHint"];
  maxLength?: number;
  label?: string;
  onFocus?: (event: NativeSyntheticEvent<React.FocusEvent>) => void;
  onBlur?: (event: NativeSyntheticEvent<React.FocusEvent>) => void;
  onSubmitEditing?: TextInputProps["onSubmitEditing"];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onValueChange?: TextInputProps["onChangeText"];
  onKeyPress?: TextInputProps["onKeyPress"];
  placeholder?: string;
  readOnly?: boolean;
  size?: "large" | "small";
  successful?: boolean;
  suffix?: string;
  value?: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  RightComponent?: ReactNode;
  hideErrorMessage?: boolean;
};

export const Input = memo(
  forwardRef<TextInput, Props>(
    (
      {
        accessibilityControls,
        accessibilityExpanded,
        disabled = false,
        error,
        icon,
        inputContainerStyle,
        role,
        inputMode,
        enterKeyHint,
        maxLength,
        label = "",
        onFocus,
        onBlur,
        onSubmitEditing,
        onChange,
        onValueChange,
        onKeyPress,
        placeholder,
        readOnly = false,
        size = "large",
        successful = false,
        suffix = "",
        value = "",
        style,
        inputStyle,
        RightComponent = null,
        hideErrorMessage = false,
      },
      forwardedRef,
    ) => {
      const ref = useRef<TextInput>(null);
      const mergedRef = useMergeRefs(ref, forwardedRef);

      const labelId = `label-${useId()}`;
      const id = `input-${useId()}`;
      const errored = isNotNullish(error);

      return (
        <View style={style}>
          {label !== "" && (
            <>
              <Label id={labelId} htmlFor={id}>
                {label}
              </Label>

              <Space height={8} />
            </>
          )}

          <Box direction="row" style={inputContainerStyle}>
            <Box direction="row" alignItems="center" style={commonStyles.fill}>
              <PressableTextInput
                ref={mergedRef}
                accessibilityControls={accessibilityControls}
                accessibilityExpanded={accessibilityExpanded}
                accessibilityLabelledBy={labelId}
                id={id}
                allowFontScaling={false}
                autoComplete="off"
                role={role}
                readOnly={readOnly || disabled}
                inputMode={inputMode}
                enterKeyHint={enterKeyHint}
                multiline={false}
                rows={1}
                maxLength={maxLength}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange as TextInputProps["onChange"]}
                onChangeText={onValueChange}
                onSubmitEditing={onSubmitEditing}
                onKeyPress={onKeyPress}
                placeholder={placeholder}
                value={value}
                style={({ hovered, focused }) => [
                  styles.base,
                  size === "small" && styles.small,
                  isNotNullish(icon) && styles.withLeftIcon,
                  suffix !== "" && styles.withSuffix,
                  disabled ? styles.disabled : focused ? styles.focused : hovered && styles.hovered,
                  errored && styles.errored,
                  successful && styles.successful,
                  inputStyle,
                ]}
              />

              {icon && (
                <Icon name={icon} color={colors.gray[50]} size={20} style={styles.leftIcon} />
              )}

              {successful ? (
                <Icon
                  name="checkmark-filled"
                  color={colors.green[100]}
                  size={20}
                  style={styles.rightIcon}
                />
              ) : errored ? (
                <Icon
                  name="error-circle-regular"
                  size={20}
                  color={colors.red[100]}
                  style={styles.rightIcon}
                />
              ) : null}
            </Box>

            {suffix !== "" && (
              <View style={[styles.suffix, disabled && styles.suffixDisabled]}>
                <Text numberOfLines={1} style={styles.suffixText}>
                  {suffix}
                </Text>
              </View>
            )}

            {Boolean(RightComponent) && (
              <>
                <Space width={8} />

                {RightComponent}
              </>
            )}
          </Box>

          {!hideErrorMessage && <InputError message={error} />}
        </View>
      );
    },
  ),
);

Input.displayName = "Input";
