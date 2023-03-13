import { ComponentMeta } from "@storybook/react";
import { StyleSheet, View } from "react-native";
import { LakeScrollView } from "../src/components/LakeScrollView";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { colors, texts } from "../src/constants/design";

const styles = StyleSheet.create({
  storyTitle: {
    ...texts.h1,
  },
  blockSmall: {
    width: 400,
    height: 200,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },
  blockMedium: {
    width: 600,
    height: 300,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },
  blockLarge: {
    width: 800,
    height: 400,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },
});

export default {
  title: "Layout/ScrollView",
  component: LakeScrollView,
} as ComponentMeta<typeof LakeScrollView>;

export const Default = () => {
  return (
    <>
      <View>
        <LakeText style={styles.storyTitle}>ScrollView</LakeText>
        <Space height={8} />
        <LakeText>You can scroll to see gradient appear at top</LakeText>
      </View>

      <Space height={16} />

      <LakeScrollView>
        <View style={styles.blockSmall} />
        <Space height={16} />
        <View style={styles.blockLarge} />
        <Space height={16} />
        <View style={styles.blockMedium} />
        <Space height={16} />
        <View style={styles.blockLarge} />
        <Space height={16} />
        <View style={styles.blockSmall} />
        <Space height={16} />
        <View style={styles.blockMedium} />
      </LakeScrollView>
    </>
  );
};
