import { Fragment } from "react";
import { StyleSheet } from "react-native";
import { colors, ColorVariants, spacings } from "../constants/design";
import { isNotNullishOrEmpty, isNullish } from "../utils/nullish";
import { Box } from "./Box";
import { LakeRadio } from "./LakeRadio";
import { LakeText } from "./LakeText";
import { Pressable } from "./Pressable";
import { Space } from "./Space";

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  withRightSpace: {
    // use margin instead of <Space /> to avoid line starting with <Space /> because of flex-wrap
    marginRight: spacings[24],
  },
  // We need this bottom margin in case there are too much items and some of them are wrapped to next line
  withBottomSpace: {
    // use margin instead of <Space /> to avoid making height bigger than expected
    marginBottom: spacings[12],
  },
  errorContainer: {
    paddingTop: spacings[4],
  },
});

export type RadioGroupItem<V> = {
  name: string;
  value: V;
  disabled?: boolean;
};

export type RadioGroupProps<V> = {
  items: RadioGroupItem<V>[];
  direction?: "column" | "row";
  color?: ColorVariants;
  disabled?: boolean;
  value?: V;
  error?: string;
  help?: string;
  hideErrors?: boolean;
  onValueChange: (value: V) => void;
};

export function RadioGroup<V>({
  items,
  direction = "column",
  color = "current",
  disabled = false,
  hideErrors = false,
  error,
  help,
  value,
  onValueChange,
}: RadioGroupProps<V>) {
  const hasError = isNotNullishOrEmpty(error);

  return (
    <>
      <Box direction={direction} style={styles.container}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isDisabled = disabled || !isNullish(item.disabled);

          return (
            <Fragment key={index}>
              <Pressable
                disabled={isDisabled}
                onPress={() => {
                  if (item.value !== value) {
                    onValueChange(item.value);
                  }
                }}
                style={[
                  styles.item,
                  direction === "row" && styles.withBottomSpace,
                  direction === "row" && !isLast && styles.withRightSpace,
                ]}
              >
                <LakeRadio
                  isError={hasError}
                  disabled={isDisabled}
                  color={color}
                  value={item.value === value}
                />

                <Space width={12} />

                <LakeText color={isDisabled ? colors.gray[300] : colors.gray[900]}>
                  {item.name}
                </LakeText>
              </Pressable>

              {!isLast && <Space height={direction === "column" ? 12 : undefined} />}
            </Fragment>
          );
        })}
      </Box>

      {!hideErrors && (
        <Box direction="row" style={styles.errorContainer}>
          {isNotNullishOrEmpty(error) ? (
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
    </>
  );
}
