import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { LakeSlider, SliderProps, sliderBreakpoint } from "../src/components/LakeSlider";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  desktop: {
    padding: 10, // adds some padding to avoid crop slider handler caused by storybook canvas
    maxWidth: 800,
  },
  mobile: {
    maxWidth: 400,
  },
});

export default {
  title: "Forms/Slider",
  component: LakeSlider,
} as ComponentMeta<typeof LakeSlider>;

const EditableSlider = ({
  mobileSize = false,
  ...props
}: Omit<SliderProps, "value" | "onChange"> & { mobileSize?: boolean }) => {
  const [value, setValue] = useState(0);

  return (
    <View style={mobileSize ? styles.mobile : styles.desktop}>
      <LakeSlider {...props} value={value} onChange={setValue} />
    </View>
  );
};

export const Ranges = () => {
  return (
    <StoryBlock title="Ranges">
      <StoryPart title="from 0 to 100">
        <EditableSlider label="Range" min={0} max={100} step={1} unit="$" />
      </StoryPart>

      <StoryPart title="from -20 to 50">
        <EditableSlider label="Range" min={-20} max={50} step={1} unit="$" />
      </StoryPart>

      <StoryPart title="with steps 10 by 10">
        <EditableSlider label="Range" min={0} max={100} step={10} unit="$" />
      </StoryPart>
    </StoryBlock>
  );
};

export const Sizes = () => {
  return (
    <StoryBlock
      title="Slider sizes"
      description={`UI of slider depends on container width. If width is lower than ${sliderBreakpoint}, there is only a text input without slider`}
    >
      <StoryPart title="Mobile">
        <EditableSlider label="Range" min={0} max={100} step={1} unit="$" mobileSize={true} />
      </StoryPart>

      <StoryPart title="Desktop">
        <EditableSlider label="Range" min={0} max={100} step={1} unit="$" />
      </StoryPart>
    </StoryBlock>
  );
};
