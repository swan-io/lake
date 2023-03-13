import { ComponentMeta } from "@storybook/react";
import { StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { WithCurrentColor } from "../src/components/WithCurrentColor";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
  },
  blockContainer: {
    width: 60,
    height: 40,
    margin: 8,
  },
  currentColorBlock: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
    backgroundColor: colors.current[400],
  },
});

export default {
  title: "Utilities/WithCurrentColor",
  component: WithCurrentColor,
} as ComponentMeta<typeof WithCurrentColor>;

export const Colors = () => {
  return (
    <StoryBlock
      title="WithCurrentColor"
      description="This component change the color of all its children using 'colors.current[shade]'"
    >
      <Box direction="row" style={styles.container}>
        <WithCurrentColor style={styles.blockContainer} variant="gray">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="live">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="sandbox">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="positive">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="warning">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="negative">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="swan">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="shakespear">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="darkPink">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="sunglow">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>

        <WithCurrentColor style={styles.blockContainer} variant="mediumSladeBlue">
          <View style={styles.currentColorBlock} />
        </WithCurrentColor>
      </Box>
    </StoryBlock>
  );
};
