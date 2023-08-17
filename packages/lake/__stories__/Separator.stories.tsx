import { Meta } from "@storybook/react";
import { StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { Separator, SeparatorProps } from "../src/components/Separator";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  block: {
    width: 60,
    height: 60,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },
});

export default {
  title: "Layout/Separator",
  component: Separator,
} as Meta<typeof Separator>;

type StoryArgs = Pick<SeparatorProps, "horizontal" | "space">;

export const Directions = ({ horizontal, space }: StoryArgs) => {
  return (
    <StoryBlock title="Separator">
      <StoryPart title="Default">
        <Box direction="row" alignItems="center">
          <View style={styles.block} />
          <Separator horizontal={horizontal} space={space} />
          <View style={styles.block} />
        </Box>
      </StoryPart>

      <StoryPart title="Horizontal">
        <Box direction="row" alignItems="center">
          <View style={styles.block} />
          <Separator horizontal={true} space={16} />
          <View style={styles.block} />
        </Box>
      </StoryPart>

      <StoryPart title="Vertical">
        <Box direction="column" alignItems="start">
          <View style={styles.block} />
          <Separator horizontal={false} space={16} />
          <View style={styles.block} />
        </Box>
      </StoryPart>
    </StoryBlock>
  );
};
