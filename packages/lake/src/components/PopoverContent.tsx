import { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    padding: 20,
  },
});

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const PopoverContent = ({ style, children }: Props) => (
  <View style={[styles.container, style]}>{children}</View>
);
