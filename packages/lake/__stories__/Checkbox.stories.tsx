import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Except } from "type-fest";
import {
  CheckboxProps,
  LabelledCheckboxProps,
  LakeCheckbox,
  LakeLabelledCheckbox,
} from "../src/components/LakeCheckbox";
import { Pressable } from "../src/components/Pressable";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
  },
});

export default {
  title: "Forms/Checkbox",
  component: LakeCheckbox,
} as Meta<typeof LakeCheckbox>;

const InteractiveCheckbox = ({
  defaultValue = false,
  ...props
}: Except<CheckboxProps, "value"> & { defaultValue?: CheckboxProps["value"] }) => {
  const [value, setValue] = useState(defaultValue);

  const toggle = () => {
    setValue(v => v !== true);
  };

  return (
    <Pressable style={styles.container} onPress={toggle} disabled={props.disabled}>
      <LakeCheckbox value={value} {...props} />
    </Pressable>
  );
};

const InteractiveLabelledCheckbox = ({
  defaultValue = false,
  ...props
}: Except<LabelledCheckboxProps, "value" | "onValueChange"> & {
  defaultValue?: CheckboxProps["value"];
}) => {
  const [value, setValue] = useState(defaultValue);

  const toggle = () => {
    setValue(v => v !== true);
  };

  return (
    <View style={styles.container}>
      <LakeLabelledCheckbox value={value} onValueChange={toggle} {...props} />
    </View>
  );
};

export const Variations = () => {
  return (
    <StoryBlock title="Variations">
      <StoryPart title="Default">
        <InteractiveCheckbox />
      </StoryPart>

      <StoryPart title="Indeterminate">
        <InteractiveCheckbox defaultValue="mixed" />
      </StoryPart>

      <StoryPart title="Lablelled">
        <InteractiveLabelledCheckbox label="Enabled" />
      </StoryPart>

      <StoryPart title="Lablelled error">
        <InteractiveLabelledCheckbox label="Enabled" isError={true} />
      </StoryPart>

      <StoryPart title="Disabled">
        <InteractiveCheckbox disabled={true} />
      </StoryPart>

      <StoryPart title="Disabled checked">
        <InteractiveCheckbox defaultValue={true} disabled={true} />
      </StoryPart>

      <StoryPart title="Indeterminate checked">
        <InteractiveCheckbox defaultValue="mixed" disabled={true} />
      </StoryPart>

      <StoryPart title="Error">
        <InteractiveCheckbox isError={true} />
      </StoryPart>
    </StoryBlock>
  );
};

export const Colors = () => {
  return (
    <StoryBlock title="Colors" description="Checkbox color impacts only checked state">
      <StoryPart title="Default">
        <InteractiveCheckbox defaultValue={true} />
      </StoryPart>

      <StoryPart title="gray">
        <InteractiveCheckbox defaultValue={true} color="gray" />
      </StoryPart>

      <StoryPart title="live">
        <InteractiveCheckbox defaultValue={true} color="live" />
      </StoryPart>

      <StoryPart title="sandbox">
        <InteractiveCheckbox defaultValue={true} color="sandbox" />
      </StoryPart>

      <StoryPart title="positive">
        <InteractiveCheckbox defaultValue={true} color="positive" />
      </StoryPart>

      <StoryPart title="warning">
        <InteractiveCheckbox defaultValue={true} color="warning" />
      </StoryPart>

      <StoryPart title="negative">
        <InteractiveCheckbox defaultValue={true} color="negative" />
      </StoryPart>

      <StoryPart title="current">
        <InteractiveCheckbox defaultValue={true} color="current" />
      </StoryPart>

      <StoryPart title="partner">
        <InteractiveCheckbox defaultValue={true} color="partner" />
      </StoryPart>

      <StoryPart title="swan">
        <InteractiveCheckbox defaultValue={true} color="swan" />
      </StoryPart>

      <StoryPart title="shakespear">
        <InteractiveCheckbox defaultValue={true} color="shakespear" />
      </StoryPart>

      <StoryPart title="darkPink">
        <InteractiveCheckbox defaultValue={true} color="darkPink" />
      </StoryPart>

      <StoryPart title="sunglow">
        <InteractiveCheckbox defaultValue={true} color="sunglow" />
      </StoryPart>

      <StoryPart title="mediumSladeBlue">
        <InteractiveCheckbox defaultValue={true} color="mediumSladeBlue" />
      </StoryPart>
    </StoryBlock>
  );
};
