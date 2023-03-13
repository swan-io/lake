import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { FullViewportLayer } from "../src/components/FullViewportLayer";
import { Grid } from "../src/components/Grid";
import { LakeButton } from "../src/components/LakeButton";
import { Space } from "../src/components/Space";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";

const styles = StyleSheet.create({
  block: {
    height: 200,
    backgroundColor: colors.gray[100],
    borderRadius: 5,
  },
  grid: {
    padding: 20,
  },
  button: {
    alignSelf: "flex-start",
  },
  buttonClosed: {
    alignSelf: "flex-end",
    paddingRight: 20,
  },
});

export default {
  title: "Layout/FullViewportLayer",
  component: FullViewportLayer,
} as ComponentMeta<typeof FullViewportLayer>;

export const Default = () => {
  const [visible, setVisible] = useState(false);
  return (
    <StoryBlock
      title="FullViewportLayer"
      description={[
        "This component creates a new layer over all the page with enter and leave animation. ",
        'You can try it by clicking on "Open" button.',
      ]}
    >
      <LakeButton
        color="shakespear"
        size="small"
        onPress={() => setVisible(true)}
        style={styles.button}
      >
        Open
      </LakeButton>

      <FullViewportLayer visible={visible}>
        <Box style={styles.buttonClosed}>
          <Space height={8} />

          <LakeButton color="shakespear" size="small" onPress={() => setVisible(false)}>
            Close
          </LakeButton>
        </Box>

        <Space height={8} />

        <ScrollView>
          <Grid horizontalSpace={4} verticalSpace={4} numColumns={4} style={styles.grid}>
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
          </Grid>
        </ScrollView>
      </FullViewportLayer>
    </StoryBlock>
  );
};
