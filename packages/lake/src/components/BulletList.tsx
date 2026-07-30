import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { colors } from "../constants/design";
import { Box } from "./Box";
import { LakeText, TextVariant } from "./LakeText";
import { Space } from "./Space";

const styles = StyleSheet.create({
  itemText: {
    flex: 1,
  },
});

type Props = {
  items: string[];
  color?: string;
  variant?: TextVariant;
  style?: StyleProp<ViewStyle>;
};

export const BulletList = ({
  items,
  color = colors.gray[700],
  variant = "regular",
  style,
}: Props) => (
  <View role="list" style={style}>
    {items.map((item, index) => (
      <Box key={index} role="listitem" direction="row">
        <LakeText aria-hidden={true} color={color} variant={variant}>
          •
        </LakeText>

        <Space width={8} />

        <LakeText color={color} variant={variant} style={styles.itemText}>
          {item}
        </LakeText>
      </Box>
    ))}
  </View>
);
