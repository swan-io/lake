import { Meta } from "@storybook/react";
import { ComponentProps, useState } from "react";
import { StyleSheet } from "react-native";
import { Except } from "type-fest";
import { Box } from "../src/components/Box";
import { LakeSlider } from "../src/components/LakeSlider";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  slider: {
    padding: 10, // adds some padding to avoid crop slider handler caused by storybook canvas
    flex: 1,
    maxWidth: 800,
  },
});

export default {
  title: "Forms/Slider",
  component: LakeSlider,
} as Meta<typeof LakeSlider>;

const EditableSlider = (props: Except<ComponentProps<typeof LakeSlider>, "value" | "onChange">) => {
  const [value, setValue] = useState(0);

  return (
    <Box direction="row" alignItems="center">
      <LakeSlider {...props} value={value} onChange={setValue} style={styles.slider} />
      <Space width={8} />
      <LakeText>{value}</LakeText>
    </Box>
  );
};

export const Ranges = () => (
  <StoryBlock title="Ranges">
    <StoryPart title="from 0 to 100">
      <EditableSlider min={0} max={100} step={1} />
    </StoryPart>

    <StoryPart title="from -20 to 50">
      <EditableSlider min={-20} max={50} step={1} />
    </StoryPart>

    <StoryPart title="with steps 10 by 10">
      <EditableSlider min={0} max={100} step={10} />
    </StoryPart>
  </StoryBlock>
);
