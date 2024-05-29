import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Except } from "type-fest";
import { BottomPanel } from "../src/components/BottomPanel";
import { Box } from "../src/components/Box";
import { LakeButton } from "../src/components/LakeButton";
import { LakeTextInput, LakeTextInputProps } from "../src/components/LakeTextInput";
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
  title: "Layout/BottomPanel",
  component: BottomPanel,
} as Meta<typeof BottomPanel>;

const EditableInputText = (props: Except<LakeTextInputProps, "value" | "onChange">) => {
  const [value, setValue] = useState(props.defaultValue ?? "");

  return (
    <LakeTextInput
      {...props}
      value={value}
      onChange={event => setValue(event.currentTarget.value)}
    />
  );
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  return (
    <StoryBlock
      title="BottomPanel"
      description={[
        "BottomPanel is a component that allows you to render a panel on the bottom of the screen.",
        "To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element",
        "You can open it by clicking on the button below.",
      ]}
    >
      <LakeButton onPress={open} size="small" style={styles.button}>
        Open bottom panel
      </LakeButton>

      <BottomPanel visible={isOpen} onPressClose={() => setIsOpen(false)}>
        <Box style={styles.panelContent}>
          <EditableInputText />
          <View style={styles.block1} />
          <Space height={16} />
          <View style={styles.block2} />
          <Space height={16} />
          <View style={styles.block3} />
        </Box>
      </BottomPanel>
    </StoryBlock>
  );
};
