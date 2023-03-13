import { Fragment } from "react";
import { StyleSheet } from "react-native";
import { colors, ColorVariants } from "../constants/design";
import { isNullish } from "../utils/nullish";
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
  rowItem: {
    // use margin instead of <Space /> to avoid line starting with <Space /> because of flex-wrap
    marginRight: 24,
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
  onValueChange: (value: V) => void;
};

export function RadioGroup<V>({
  items,
  direction = "column",
  color = "current",
  disabled = false,
  value,
  onValueChange,
}: RadioGroupProps<V>) {
  return (
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
              style={[styles.item, direction === "row" && !isLast && styles.rowItem]}
            >
              <LakeRadio disabled={isDisabled} color={color} value={item.value === value} />
              <Space width={12} />

              <LakeText color={isDisabled ? colors.gray[300] : colors.gray[900]}>
                {item.name}
              </LakeText>
            </Pressable>

            {!isLast && <Space height={direction === "column" ? 12 : 32} />}
          </Fragment>
        );
      })}
    </Box>
  );
}
