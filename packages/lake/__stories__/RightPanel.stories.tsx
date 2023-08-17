import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { LakeButton } from "../src/components/LakeButton";
import { RightPanel, RightPanelProps } from "../src/components/RightPanel";
import { Space } from "../src/components/Space";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
  },
  panelContent: {
    padding: 16,
  },
  block1: {
    width: 120,
    height: 60,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },
  block2: {
    width: 200,
    height: 60,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },
  block3: {
    width: 180,
    height: 60,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },
});

export default {
  title: "Layout/RightPanel",
  component: RightPanel,
} as Meta<typeof RightPanel>;

type StoryArgs = Pick<RightPanelProps, "visible" | "onPressClose">;

export const Default = ({ visible, onPressClose }: StoryArgs) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  return (
    <StoryBlock
      title="RightPanel"
      description={[
        "RightPanel is a component that allows you to render a panel on the right side of the screen.",
        "To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element",
        "You can open it by clicking on the button below.",
      ]}
    >
      <LakeButton onPress={open} size="small" style={styles.button}>
        Open right panel
      </LakeButton>

      <RightPanel visible={visible} onPressClose={() => setIsOpen(false)}>
        <Box style={styles.panelContent}>
          <View style={styles.block1} />
          <Space height={16} />
          <View style={styles.block2} />
          <Space height={16} />
          <View style={styles.block3} />
        </Box>
      </RightPanel>
    </StoryBlock>
  );
};
