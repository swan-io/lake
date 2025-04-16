import { ReactNode, Ref, useCallback, useRef, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { animations, backgroundColor, colors, radii, spacings } from "../constants/design";
import { useBoolean } from "../hooks/useBoolean";
import { useDebounce } from "../hooks/useDebounce";
import { isNotNullishOrEmpty } from "../utils/nullish";
import { Icon } from "./Icon";
import { LakeButton } from "./LakeButton";
import { LakeTextInput } from "./LakeTextInput";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { TransitionView } from "./TransitionView";

const BREAKPOINT = 350;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    flexGrow: 1,
    flexShrink: 1,
  },
  input: {
    transition: "300ms ease-in-out border-color",
    justifyContent: "flex-end",
  },
  focus: {
    outlineStyle: "none",
    borderColor: colors.current.primary,
  },
  clearButton: {
    padding: spacings[8],
    borderRadius: radii[4],
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
  children?: ReactNode;
  renderEnd?: () => ReactNode;
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
  renderEnd?: () => ReactNode;
};

const CollapsibleSearchField = ({
  inputRef,
  placeholder,
  initialValue,
  onChange,
  setFocused,
  hasFocus,
  clear,
  currentValue,
  renderEnd,
}: InternalProps) => {
  return (
    <View>
      <LakeButton
        mode="secondary"
        size="small"
        ariaLabel={placeholder}
        icon="search-filled"
        onPress={setFocused.on}
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
              renderEnd={renderEnd}
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
  renderEnd,
  currentValue,
}: InternalProps) => {
  const timeoutRef = useRef<number>(null);

  return (
    <LakeTextInput
      ref={inputRef}
      autoFocus={hasFocus}
      icon="search-filled"
      placeholder={placeholder}
      defaultValue={initialValue}
      inputMode="search"
      onChangeText={onChange}
      hideErrors={true}
      renderEnd={() => (
        <>
          {isNotNullishOrEmpty(currentValue) && (
            <Pressable
              role="button"
              style={styles.clearButton}
              onPress={() => {
                if (timeoutRef.current != null) {
                  clearTimeout(timeoutRef.current);
                }
                clear();
              }}
            >
              <Icon name="dismiss-filled" size={12} color={colors.gray[500]} />
            </Pressable>
          )}

          {renderEnd?.()}
        </>
      )}
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
      style={[styles.input, hasFocus && styles.focus]}
    />
  );
};

export const LakeSearchField = ({
  initialValue,
  placeholder,
  onChangeText,
  debounceDuration = 500,
  maxWidth: maxWidthProp = 350,
  renderEnd,
  children,
}: Props) => {
  const [hasFocus, setFocused] = useBoolean(false);
  const inputRef = useRef<TextInput>(null);

  const [currentValue, setCurrentValue] = useState(initialValue);

  const onChange = useDebounce((value: string) => {
    onChangeText(value);
    setCurrentValue(value.trim());
  }, debounceDuration);

  const clear = useCallback(() => {
    if (inputRef.current != null) {
      inputRef.current.clear();
      inputRef.current.focus();
      onChangeText("");
      setCurrentValue("");
    }
  }, [onChangeText]);

  const props = {
    inputRef,
    placeholder,
    initialValue,
    onChange,
    setFocused,
    hasFocus,
    clear,
    currentValue,
    renderEnd,
  };

  const maxWidth = Math.max(maxWidthProp, BREAKPOINT);

  return (
    <ResponsiveContainer breakpoint={BREAKPOINT} style={[styles.container, { maxWidth }]}>
      {({ large }) => {
        const Component = large ? ExpandedSearchField : CollapsibleSearchField;

        return (
          <>
            {children}
            <Component {...props} />
          </>
        );
      }}
    </ResponsiveContainer>
  );
};
