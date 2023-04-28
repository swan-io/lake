import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Except } from "type-fest";
import { MultiSelect, MultiSelectItem, MultiSelectProps } from "../src/components/MultiSelect";
import { ColorVariants, colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  select: {
    maxWidth: 400,
  },
});

export default {
  title: "Forms/MultiSelect",
  component: MultiSelect,
} as Meta<typeof MultiSelect>;

const items: MultiSelectItem[] = [
  { label: "Camille", value: "camille", group: "C" },
  { label: "Charlotte", value: "charlotte", group: "C" },
  { label: "Francis", value: "francis", group: "F" },
  { label: "Émilie", value: "emilie", group: "E" },
  { label: "François", value: "francois", group: "F" },
  { label: "Laura", value: "laura", group: "L" },
  { label: "Marie-Anne", value: "marie_anne", group: "M" },
  { label: "Natasha", value: "natasha", group: "N", disabled: true },
  { label: "Nicolas", value: "nicolas", group: "N" },
  { label: "Pierre", value: "pierre", group: "P" },
];

const EditableMultiSelect = ({
  initialValues = [],
  ...props
}: Except<MultiSelectProps<MultiSelectItem>, "onValueChange" | "items" | "values"> & {
  items?: MultiSelectItem[];
  initialValues?: string[];
}) => {
  const [values, setValues] = useState(initialValues);

  return (
    <MultiSelect
      placeholder="Select people..."
      filterPlaceholder="Search..."
      emptyResultText="No result"
      values={values}
      items={items}
      onValueChange={setValues}
      style={styles.select}
      {...props}
    />
  );
};

export const Variations = () => {
  return (
    <StoryBlock title="MultiSelect variations">
      <StoryPart title="Default">
        <EditableMultiSelect />
      </StoryPart>

      <StoryPart title="Without groups">
        <EditableMultiSelect enableGroups={false} />
      </StoryPart>

      <StoryPart title="Disabled">
        <EditableMultiSelect disabled={true} />
      </StoryPart>

      <StoryPart title="Disabled with a value">
        <EditableMultiSelect disabled={true} initialValues={["charlotte"]} />
      </StoryPart>

      <StoryPart title="Without any option">
        <EditableMultiSelect items={[]} />
      </StoryPart>
    </StoryBlock>
  );
};

export const Colors = () => {
  return (
    <StoryBlock title="MultiSelect colors">
      {Object.keys(colors).map(color => (
        <StoryPart key={color} title={color}>
          <EditableMultiSelect color={color as ColorVariants} />
        </StoryPart>
      ))}
    </StoryBlock>
  );
};
