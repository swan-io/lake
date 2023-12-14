import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  TextInputFocusEventData,
  TextInputKeyPressEventData,
  TextInputProps,
  View,
} from "react-native";
import { backgroundColor, colors, radii, shadows, spacings } from "../constants/design";
import { useHover } from "../hooks/useHover";
import { useMergeRefs } from "../hooks/useMergeRefs";
import { isNotNullish, isNotNullishOrEmpty } from "../utils/nullish";
import { Box } from "./Box";
import { LakeText } from "./LakeText";
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
  },
  errorContainer: {
    paddingTop: spacings[4],
  },
});

export type LakeTagInputProps = TextInputProps & {
  onChange: () => string[];
  readOnly?: boolean;
  error?: string;
  disabled?: boolean;
  valid?: boolean;
  hideErrors?: boolean;
  help?: string;
  validator?: (value: string) => boolean;
};

const SEPARATORS_REGEX = /,| /;

export const LakeTagInput = forwardRef<TextInput | null, LakeTagInputProps>(
  (
    {
      onFocus: originalOnFocus,
      onBlur: originalOnBlur,
      onChange,
      readOnly = false,
      error,
      disabled = false,
      valid = false,
      hideErrors = false,
      help,
      validator = () => true,
    }: LakeTagInputProps,
    forwardRef,
  ) => {
    const inputRef = useRef<TextInput | null>(null);
    const containerRef = useRef<View | null>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [values, setValues] = useState<string[]>([]);
    const [isHovered, setIsHovered] = useState(false);

    useHover(containerRef, {
      onHoverStart: () => setIsHovered(true),
      onHoverEnd: () => setIsHovered(false),
    });

    const onTextInputKeyDown = useCallback(
      (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (event.code === "Backspace") {
          setValues(state => state.slice(0, -1));
        }
      },
      [],
    );

    const onTextInputChange = useCallback(
      (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const value = event.target.value as string;

        const sp = [...new Set(value.split(SEPARATORS_REGEX).filter(s => s.length))];
        if (sp.length > 1 || sp[0] !== value) {
          setValues(state => [...state, ...sp.filter(v => !state.includes(v))]);
          inputRef.current?.clear();
        }
      },
      [],
    );

    useEffect(() => onChange(values), [values]);

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
        setIsFocused(false);
        originalOnBlur?.(event);
      },
      [originalOnBlur],
    );

    const onRemove = (value: string) => setValues(s => s.filter(v => v !== value));

    const mergedRef = useMergeRefs(inputRef, containerRef, forwardRef);
    const hasError = isNotNullishOrEmpty(error);

    return (
      <View>
        <View
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
          ref={containerRef}
          onClick={autoFocus}
          aria-errormessage={error}
        >
          {values.map((v, i) => (
            <Tag
              key={i}
              onPressRemove={() => onRemove(v)}
              style={styles.tag}
              color={validator(v) ? "gray" : "negative"}
            >
              {v}
            </Tag>
          ))}

          <TextInput
            ref={mergedRef}
            style={[styles.input, disabled && styles.disabled]}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            onChange={onTextInputChange}
            onKeyPress={onTextInputKeyDown}
          />
        </View>

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
