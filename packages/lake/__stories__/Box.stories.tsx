import { Meta } from "@storybook/react";
import { StyleSheet, View } from "react-native";
import { Box, BoxProps } from "../src/components/Box";
import { Space } from "../src/components/Space";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";

const styles = StyleSheet.create({
  block1: {
    width: 60,
    height: 60,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },
  block2: {
    width: 130,
    height: 130,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },
  block3: {
    width: 100,
    height: 100,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },
});

export default {
  title: "Layout/Box",
  component: Box,
} as Meta<typeof Box>;

type StoryArgs = Pick<BoxProps, "direction" | "alignItems" | "justifyContent">;

export const Interactive = ({ direction, alignItems, justifyContent }: StoryArgs) => {
  return (
    <StoryBlock
      title="Box"
      description={[
        "Box component is a flexbox container configurable with props instead of creating styles each time we need flexbox",
        "You can edit props in 'Controls' panel. (Press A to open it)",
      ]}
    >
      <Box direction={direction} justifyContent={justifyContent} alignItems={alignItems}>
        <View style={styles.block1} />
        <Space width={16} height={16} />
        <View style={styles.block2} />
        <Space width={16} height={16} />
        <View style={styles.block3} />
      </Box>
    </StoryBlock>
  );
};
