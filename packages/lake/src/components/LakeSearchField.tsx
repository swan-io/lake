import { Ref, useCallback, useRef, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { animations, backgroundColor, colors, radii } from "../constants/design";
import { useBoolean } from "../hooks/useBoolean";
import { useDebounce } from "../hooks/useDebounce";
import { LakeButton } from "./LakeButton";
import { LakeTextInput } from "./LakeTextInput";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { Line, Svg } from "./Svg";
import { TransitionView } from "./TransitionView";

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    flexShrink: 1,
    // ResponsiveContainer uses a 200 breaking,
    // we give the opportunity to the component to grow 2px more
    // to trigger the change
    maxWidth: 202,
    minWidth: 38,
  },
  container: {
    width: "100%",
    flexGrow: 1,
    flexShrink: 0,
    alignSelf: "flex-end",
  },
  input: {
    paddingRight: 50,
    minWidth: 200,
    // fixes a responsiveness bug where the default input width is too large
    width: 1,
    flexGrow: 1,
    transition: "300ms ease-in-out border-color",
  },
  focus: {
    outlineStyle: "none",
    borderColor: colors.current.primary,
  },
  clearButton: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    padding: 16,
  },
  clear: {
    width: 8,
    height: 8,
    display: "flex",
  },
  smallButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  openSearchFieldContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
  },
  openSearchField: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    boxShadow: `0 0 20px 20px ${backgroundColor.default}`,
    borderRadius: radii[6],
  },
});

type Props = {
  initialValue: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  debounceDuration?: number;
  maxWidth?: number;
};

type InternalProps = {
  inputRef: Ref<TextInput>;
  placeholder: string;
  initialValue: string;
  onChange: (value: string) => void;
  setFocused: { on: () => void; off: () => void };
  hasFocus: boolean;
  clear: () => void;
  currentValue: string;
};

const CollapsibleSeachField = ({
  inputRef,
  placeholder,
  initialValue,
  onChange,
  setFocused,
  hasFocus,
  clear,
  currentValue,
}: InternalProps) => {
  return (
    <View>
      <LakeButton
        mode="secondary"
        size="small"
        accessibilityLabel={placeholder}
        icon="search-filled"
        onPress={() => {
          setFocused.on();
        }}
        pill={currentValue !== ""}
      />

      <TransitionView
        style={styles.openSearchFieldContainer}
        {...animations.fadeAndSlideInFromRight}
      >
        {hasFocus ? (
          <View style={styles.openSearchField}>
            <ExpandedSearchField
              inputRef={inputRef}
              placeholder={placeholder}
              initialValue={initialValue}
              onChange={onChange}
              setFocused={setFocused}
              hasFocus={hasFocus}
              clear={clear}
              currentValue={currentValue}
            />
          </View>
        ) : null}
      </TransitionView>
    </View>
  );
};

const ExpandedSearchField = ({
  inputRef,
  placeholder,
  initialValue,
  onChange,
  setFocused,
  hasFocus,
  clear,
}: InternalProps) => {
  const timeoutRef = useRef<number | null>(null);
  return (
    <View style={styles.container}>
      <LakeTextInput
        ref={inputRef}
        autoFocus={hasFocus}
        icon="search-filled"
        placeholder={placeholder}
        defaultValue={initialValue}
        inputMode="search"
        onChangeText={onChange}
        hideErrors={true}
        onFocus={() => {
          if (timeoutRef.current != null) {
            clearTimeout(timeoutRef.current);
          }
          setFocused.on();
        }}
        onBlur={() => {
          timeoutRef.current = window.setTimeout(() => {
            setFocused.off();
          }, 300);
        }}
        style={[styles.input, hasFocus ? styles.focus : null]}
      />

      <Pressable
        onPress={() => {
          if (timeoutRef.current != null) {
            clearTimeout(timeoutRef.current);
          }
          clear();
        }}
        style={styles.clearButton}
      >
        <Svg viewBox="0 0 16 16" style={styles.clear}>
          <>
            <Line
              x1="0"
              x2="16"
              y1="0"
              y2="16"
              strokeLinecap="round"
              stroke={colors.gray[500]}
              strokeWidth={2}
            />

            <Line
              x1="0"
              x2="16"
              y1="16"
              y2="0"
              strokeLinecap="round"
              stroke={colors.gray[500]}
              strokeWidth={2}
            />
          </>
        </Svg>
      </Pressable>
    </View>
  );
};

export const LakeSearchField = ({
  initialValue,
  placeholder,
  onChangeText,
  debounceDuration = 500,
  maxWidth,
}: Props) => {
  const [hasFocus, setFocused] = useBoolean(false);
  const inputRef = useRef<TextInput>(null);

  const [currentValue, setCurrentValue] = useState(initialValue);

  const onChange = useDebounce((value: string) => {
    onChangeText(value);
    setCurrentValue(value.trim());
  }, debounceDuration);

  const clear = useCallback(() => {
    if (inputRef.current instanceof HTMLInputElement) {
      inputRef.current.clear();
      inputRef.current.focus();
      onChangeText("");
      setCurrentValue("");
    }
  }, [onChangeText]);

  return (
    <ResponsiveContainer breakpoint={200} style={[styles.root, maxWidth != null && { maxWidth }]}>
      {({ large }) =>
        large ? (
          <ExpandedSearchField
            inputRef={inputRef}
            placeholder={placeholder}
            initialValue={initialValue}
            onChange={onChange}
            setFocused={setFocused}
            hasFocus={hasFocus}
            clear={clear}
            currentValue={currentValue}
          />
        ) : (
          <View style={styles.smallButtonContainer}>
            <CollapsibleSeachField
              inputRef={inputRef}
              placeholder={placeholder}
              initialValue={initialValue}
              onChange={onChange}
              setFocused={setFocused}
              hasFocus={hasFocus}
              clear={clear}
              currentValue={currentValue}
            />
          </View>
        )
      }
    </ResponsiveContainer>
  );
};
