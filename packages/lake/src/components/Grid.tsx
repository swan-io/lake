import { Children, ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { isNullish } from "../utils/nullish";
import { SpacingValue } from "./Space";

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    flexShrink: 1,
    width: "100%",
  },
});

type Props = {
  children: ReactNode;
  horizontalSpace?: SpacingValue;
  itemWrapperStyle?: StyleProp<ViewStyle>;
  numColumns?: number;
  style?: StyleProp<ViewStyle>;
  verticalSpace?: SpacingValue;
};

export const Grid = ({
  children,
  horizontalSpace,
  itemWrapperStyle,
  numColumns = 1,
  style,
  verticalSpace,
}: Props) => (
  <View
    style={[
      styles.base,
      style,
      numColumns > 1 && horizontalSpace && { marginHorizontal: -(horizontalSpace / 2) },
      verticalSpace && { marginVertical: -(verticalSpace / 2) },
    ]}
  >
    {Children.map(children, child => {
      if (isNullish(child)) {
        return child;
      }

      return (
        <View
          style={[
            styles.item,
            itemWrapperStyle,
            verticalSpace && { paddingVertical: verticalSpace / 2 },
            numColumns > 1 && [
              { width: `${100 / numColumns}%` },
              horizontalSpace && { paddingHorizontal: horizontalSpace / 2 },
            ],
          ]}
        >
          {child}
        </View>
      );
    })}
  </View>
);
