import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Except } from "type-fest";
import { LakeSelect, SelectProps } from "../src/components/LakeSelect";
import { LakeText } from "../src/components/LakeText";
import { ColorVariants, colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  select: {
    maxWidth: 250,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: colors.gray[0],
  },
});

export default {
  title: "Forms/Select",
  component: LakeSelect,
} as ComponentMeta<typeof LakeSelect>;

const items = [
  { name: "Camille", value: 1 },
  { name: "Charlotte", value: 2 },
  { name: "Francis", value: 3 },
  { name: "Émilie", value: 4 },
  { name: "Marie-Laure-Natasha-Valérie-Émilie", value: 17 },
  { name: "François", value: 5 },
  { name: "Laura", value: 6 },
  { name: "Marie-Anne", value: 7 },
  { name: "Natasha", value: 8 },
  { name: "Nicolas", value: 9 },
  { name: "Pierre", value: 10 },
  { name: "Thomas", value: 11 },
  { name: "Valérie", value: 12 },
  { name: "Yann", value: 13 },
  { name: "Zoé", value: 14 },
  { name: "Jérôme", value: 15 },
  { name: "Thomas", value: 16 },
];

const EditableSelect = ({
  initialValue,
  ...props
}: Except<SelectProps<number>, "value" | "onValueChange" | "items"> & {
  initialValue?: number;
}) => {
  const [value, setValue] = useState(initialValue);

  return (
    <LakeSelect
      placeholder="Select someone..."
      value={value}
      onValueChange={setValue}
      items={items}
      style={styles.select}
      {...props}
    />
  );
};

export const Variations: ComponentStory<typeof LakeSelect> = () => {
  return (
    <StoryBlock title="Select variations">
      <StoryPart title="Default">
        <EditableSelect />
      </StoryPart>

      <StoryPart title="Small">
        <EditableSelect size="small" />
      </StoryPart>

      <StoryPart title="Borderless">
        <EditableSelect mode="borderless" initialValue={1} />
      </StoryPart>

      <StoryPart title="With icon">
        <EditableSelect icon="building-bank-regular" />
      </StoryPart>

      <StoryPart title="With footer">
        <EditableSelect
          PopoverFooter={<LakeText style={styles.footer}>List of random people</LakeText>}
        />
      </StoryPart>

      <StoryPart title="With error">
        <EditableSelect error="Required field" />
      </StoryPart>

      <StoryPart title="Disabled">
        <EditableSelect disabled={true} />
      </StoryPart>

      <StoryPart title="Disabled with value">
        <EditableSelect disabled={true} initialValue={2} />
      </StoryPart>
    </StoryBlock>
  );
};

export const Colors = () => {
  return (
    <StoryBlock title="Select colors" description="Color prop change only icon color">
      {Object.keys(colors).map(color => (
        <StoryPart key={color} title={color}>
          <EditableSelect icon="building-bank-filled" color={color as ColorVariants} />
        </StoryPart>
      ))}
    </StoryBlock>
  );
};
