import { ChangeEventHandler, forwardRef, ReactNode, useCallback, useRef, useState } from "react";
import {
  ActivityIndicator,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
} from "react-native";
import { commonStyles } from "../constants/commonStyles";
import {
  backgroundColor,
  colors,
  ColorVariants,
  radii,
  shadows,
  spacings,
  texts,
} from "../constants/design";
import { useHover } from "../hooks/useHover";
import { useMergeRefs } from "../hooks/useMergeRefs";
import { useNativeProp } from "../hooks/useNativeProp";
import { isNotNullish, isNotNullishOrEmpty, isNullish } from "../utils/nullish";
import { Box } from "./Box";
import { Fill } from "./Fill";
import { Icon, IconName } from "./Icon";
import { LakeText } from "./LakeText";

const TRANSPARENT = "transparent";

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    flexDirection: "row",
  },
  container: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: "row",
    alignItems: "stretch",
  },
  contents: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: "row",
    alignItems: "stretch",
  },
  input: {
    ...texts.regular,
    paddingHorizontal: spacings[16],
    outlineStyle: "none",
    height: 40,
    borderColor: colors.gray[100],
    placeholderTextColor: colors.gray[400],
    borderWidth: 1,
    borderRadius: radii[6],
    backgroundColor: backgroundColor.accented,
    color: colors.gray[900],
    width: "100%",
    flexShrink: 1,
  },
  multilineInput: {
    height: "auto",
    padding: spacings[8],
  },
  inputWithUnit: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  hovered: {
    boxShadow: shadows.tile,
  },
  disabled: {
    backgroundColor: colors.gray[50],
    borderColor: colors.gray[50],
    color: colors.gray[900],
    cursor: "not-allowed",
  },
  readOnly: {
    backgroundColor: colors.gray[50],
    borderColor: colors.gray[50],
    color: colors.gray[900],
  },
  withIcon: {
    paddingLeft: spacings[48],
  },
  error: {
    borderColor: colors.negative[400],
    paddingRight: spacings[48],
  },
  valid: {
    borderColor: colors.positive[500],
    paddingRight: spacings[48],
  },
  readOnlyError: {
    borderColor: TRANSPARENT,
    paddingRight: spacings[32],
  },
  endIcon: {
    position: "absolute",
    right: spacings[16],
    top: "50%",
    transform: [{ translateY: "-50%" }],
  },
  icon: {
    position: "absolute",
    left: spacings[16],
    top: "50%",
    transform: [{ translateY: "-50%" }],
  },
  readOnlyEndIcon: {
    right: 0,
  },

  unit: {
    backgroundColor: colors.gray[50],
    paddingHorizontal: spacings[16],
    paddingVertical: spacings[8],
    maxHeight: 40,
    borderTopRightRadius: radii[6],
    borderBottomRightRadius: radii[6],
    borderColor: colors.gray[100],
    borderWidth: 1,
    borderLeftWidth: 0,
    flexShrink: 0,
  },
  unitDisabled: {
    borderColor: colors.gray[50],
  },
  focused: {
    borderColor: colors.gray[500],
    boxShadow: shadows.tile,
  },
  descriptionLimitation: {
    flexShrink: 0,
  },
  errorContainer: {
    paddingTop: spacings[4],
  },
});

// The `onChange` type change is for compatibity with Rifm
export type LakeTextInputProps = Omit<TextInputProps, "editable" | "onChange"> & {
  error?: string;
  readOnly?: boolean;
  validating?: boolean;
  valid?: boolean;
  disabled?: boolean;
  color?: ColorVariants;
  multiline?: boolean;
  icon?: IconName;
  unit?: string;
  keyboardType?: TextInputProps["keyboardType"];
  pattern?: string;
  children?: ReactNode;
  hideErrors?: boolean;
  style?: TextInputProps["style"];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  maxCharCount?: number;
};

export const LakeTextInput = forwardRef<TextInput | null, LakeTextInputProps>(
  (
    {
      error,
      disabled = false,
      validating = false,
      valid = false,
      readOnly = false,
      icon,
      children,
      unit,
      color = "gray",
      keyboardType = "default",
      hideErrors = false,
      onChange,
      pattern,
      style: stylesFromProps,
      onFocus: originalOnFocus,
      onBlur: originalOnBlur,
      value,
      defaultValue,
      multiline = false,
      //maxCharCount is different from maxLength(props inherited of TextInput), maxLength truncates the text in the limitation asked,
      //maxCharCount doesn't have limitation but displays a counter of characters
      maxCharCount,
      ...props
    }: LakeTextInputProps,
    forwardRef,
  ) => {
    const inputRef = useRef<TextInput | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    useNativeProp(inputRef, "pattern", pattern);

    useHover(inputRef, {
      onHoverStart: () => setIsHovered(true),
      onHoverEnd: () => setIsHovered(false),
    });

    const onFocus = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(true);
        originalOnFocus?.(event);
      },
      [originalOnFocus],
    );

    const onBlur = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(false);
        originalOnBlur?.(event);
      },
      [originalOnBlur],
    );

    const mergedRef = useMergeRefs(inputRef, forwardRef);
    const isInteractive = !disabled && !readOnly;
    const hasError = isNotNullishOrEmpty(error);
    const charCount = isNullish(value) ? 0 : value.length;

    return (
      <View style={commonStyles.fill}>
        <View style={styles.root} accessibilityErrorMessage={error}>
          <View style={styles.container}>
            <View style={styles.contents}>
              <TextInput
                keyboardType={keyboardType}
                ref={mergedRef}
                {...props}
                defaultValue={defaultValue}
                value={isNullish(defaultValue) ? value ?? "" : value}
                onFocus={onFocus}
                onBlur={onBlur}
                editable={isInteractive}
                onChange={onChange as TextInputProps["onChange"]}
                multiline={multiline}
                style={[
                  styles.input,
                  multiline && styles.multilineInput,
                  hasError && styles.error,
                  valid && styles.valid,
                  isNotNullish(icon) && styles.withIcon,
                  readOnly && hasError && styles.readOnlyError,
                  disabled && styles.disabled,
                  readOnly && styles.readOnly,
                  isHovered && isInteractive && styles.hovered,
                  isNotNullish(unit) && styles.inputWithUnit,
                  isFocused && styles.focused,
                  isFocused && { borderColor: colors[color][500] },
                  stylesFromProps,
                ]}
              />

              {validating && (
                <ActivityIndicator
                  size="small"
                  style={styles.endIcon}
                  color={colors.current[500]}
                />
              )}

              {!validating && hasError && (
                <Icon
                  name="warning-regular"
                  size={20}
                  color={colors.negative[400]}
                  style={[styles.endIcon, readOnly && styles.readOnlyEndIcon]}
                />
              )}

              {!validating && !hasError && valid && (
                <Icon
                  name="checkmark-filled"
                  size={20}
                  color={colors.positive[400]}
                  style={[styles.endIcon, readOnly && styles.readOnlyEndIcon]}
                />
              )}

              {isNotNullish(icon) && (
                <Icon name={icon} size={20} color={colors.current.primary} style={styles.icon} />
              )}
            </View>

            {isNotNullish(unit) && (
              <LakeText
                color={colors.gray[900]}
                style={[styles.unit, (disabled || readOnly) && styles.unitDisabled]}
              >
                {unit}
              </LakeText>
            )}
          </View>

          {children}
        </View>

        {!hideErrors && (
          <Box direction="row" justifyContent="spaceBetween" style={styles.errorContainer}>
            <LakeText variant="smallRegular" color={colors.negative[400]}>
              {error ?? " "}
            </LakeText>

            {isNotNullish(maxCharCount) && (
              <>
                <Fill minWidth={4} />

                <LakeText
                  variant="smallRegular"
                  color={charCount > maxCharCount ? colors.negative[500] : colors.gray[400]}
                  style={styles.descriptionLimitation}
                >
                  {charCount} / {maxCharCount}
                </LakeText>
              </>
            )}
          </Box>
        )}
      </View>
    );
  },
);
