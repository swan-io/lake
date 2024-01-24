import { forwardRef, useCallback, useRef, useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputKeyPressEventData,
  TextInputProps,
  View,
} from "react-native";
import { P, match } from "ts-pattern";
import { Merge } from "type-fest";
import { backgroundColor, colors, radii, shadows, spacings } from "../constants/design";
import { useHover } from "../hooks/useHover";
import { useMergeRefs } from "../hooks/useMergeRefs";
import { isNotNullish, isNotNullishOrEmpty, isNullishOrEmpty } from "../utils/nullish";
import { Box } from "./Box";
import { LakeText } from "./LakeText";
import { Pressable } from "./Pressable";
import { Tag } from "./Tag";

const TRANSPARENT = "transparent";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: "row",
    alignItems: "stretch",
  },
  root: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    borderRadius: radii[6],
    backgroundColor: backgroundColor.accented,
    borderColor: colors.gray[100],
    borderWidth: 1,
    paddingHorizontal: spacings[4],
    paddingTop: spacings[4],
    outlineStyle: "none",
    cursor: "text",
  },
  focused: {
    borderColor: colors.gray[500],
    boxShadow: shadows.tile,
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
  readOnlyError: {
    borderColor: TRANSPARENT,
    paddingRight: spacings[32],
  },
  error: {
    borderColor: colors.negative[400],
  },
  valid: {
    borderColor: colors.positive[500],
  },
  input: {
    height: 28,
    marginBottom: spacings[4],
    marginLeft: spacings[4],
    outlineStyle: "none",
    flexGrow: 1,
  },
  tag: {
    marginRight: spacings[4],
    marginBottom: spacings[4],
    maxWidth: 350,
  },
  errorContainer: {
    paddingTop: spacings[4],
  },
});

export type LakeTagInputProps = Merge<
  TextInputProps,
  {
    readOnly?: boolean;
    error?: string;
    disabled?: boolean;
    valid?: boolean;
    hideErrors?: boolean;
    validateOnBlur?: boolean;
    help?: string;
    validator?: (value: string) => boolean;
    values: string[];
    onValuesChanged: (values: string[]) => void;
    placeholder?: string;
  }
>;

const SEPARATORS_REGEX = /,| /;

export const LakeTagInput = forwardRef<TextInput | null, LakeTagInputProps>(
  (
    {
      validator = () => true,
      onFocus: originalOnFocus,
      onBlur: originalOnBlur,
      validateOnBlur = true,
      values,
      onValuesChanged,
      readOnly = false,
      disabled = false,
      valid = false,
      hideErrors = false,
      placeholder,
      help,
      error,
    }: LakeTagInputProps,
    forwardRef,
  ) => {
    const inputRef = useRef<TextInput | null>(null);
    const containerRef = useRef<View | null>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useHover(containerRef, {
      onHoverStart: () => setIsHovered(true),
      onHoverEnd: () => setIsHovered(false),
    });

    const pushNewValues = useCallback(
      (vals: string[]) => {
        onValuesChanged([...values, ...vals.filter(v => !values.includes(v))]);
        inputRef.current?.clear();
      },
      [values, onValuesChanged],
    );

    const onTextInputChange = useCallback(
      (value: string) => {
        const input = [...new Set(value.split(SEPARATORS_REGEX).filter(s => s.length))];
        if (input.length > 1 || input[0] !== value) {
          pushNewValues(input);
        }
      },
      [pushNewValues],
    );

    const onTextInputKeyPress = useCallback(
      ({ nativeEvent }: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (disabled || readOnly) {
          return;
        }

        match({ key: nativeEvent.key, input: inputRef.current })
          .with({ key: "Backspace", input: P.instanceOf(HTMLInputElement) }, ({ input }) => {
            if (isNullishOrEmpty(input.value) && !disabled) {
              onValuesChanged(values.filter(current => current !== values[values.length - 1]));
            }
          })
          .with({ key: "Enter", input: P.instanceOf(HTMLInputElement) }, ({ input }) => {
            if (isNotNullishOrEmpty(input.value)) {
              pushNewValues([input.value]);
            }
          });
      },
      [onValuesChanged, pushNewValues, values, disabled, readOnly],
    );

    const autoFocus = useCallback(() => {
      inputRef.current?.focus();
    }, []);

    const onFocus = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(true);
        originalOnFocus?.(event);
      },
      [originalOnFocus],
    );

    const onBlur = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        const input = inputRef.current;
        if (
          input instanceof HTMLInputElement &&
          isNotNullishOrEmpty(input.value) &&
          validateOnBlur
        ) {
          pushNewValues([input.value]);
        }

        setIsFocused(false);
        originalOnBlur?.(event);
      },
      [pushNewValues, originalOnBlur, validateOnBlur],
    );

    const mergedRef = useMergeRefs(inputRef, forwardRef);
    const hasError = isNotNullishOrEmpty(error);

    return (
      <View>
        <Pressable
          style={[
            styles.root,
            readOnly && hasError && styles.readOnlyError,
            disabled && styles.disabled,
            readOnly && styles.readOnly,
            isFocused && styles.focused,
            hasError && styles.error,
            valid && styles.valid,
            isHovered && styles.hovered,
          ]}
          aria-errormessage={error}
          onPress={autoFocus}
          ref={containerRef}
        >
          {values.map((value, i) => (
            <Tag
              key={i}
              onPressRemove={
                !readOnly && !disabled
                  ? () => onValuesChanged(values.filter(current => current !== value))
                  : undefined
              }
              style={styles.tag}
              color={validator(value) ? "gray" : "negative"}
            >
              {value}
            </Tag>
          ))}

          <TextInput
            ref={mergedRef}
            style={[styles.input, disabled && styles.disabled]}
            onFocus={onFocus}
            onBlur={onBlur}
            aria-disabled={disabled}
            onChangeText={onTextInputChange}
            onKeyPress={onTextInputKeyPress}
            readOnly={readOnly}
            placeholder={placeholder}
          />
        </Pressable>

        {!hideErrors && (
          <Box direction="row" style={styles.errorContainer}>
            {isNotNullish(error) ? (
              <LakeText variant="smallRegular" color={colors.negative[500]}>
                {error}
              </LakeText>
            ) : (
              <LakeText variant="smallRegular" color={colors.gray[500]}>
                {help ?? " "}
              </LakeText>
            )}
          </Box>
        )}
      </View>
    );
  },
);
