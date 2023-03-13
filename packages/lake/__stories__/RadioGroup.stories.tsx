import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { RadioGroup, RadioGroupItem, RadioGroupProps } from "../src/components/RadioGroup";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Forms/RadioGroup",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

function EditableRadioGroup<T>(props: Omit<RadioGroupProps<T>, "value" | "onValueChange">) {
  const [value, setValue] = useState<T>();

  return <RadioGroup {...props} value={value} onValueChange={setValue} />;
}

type ItemValue =
  | "LessThan500"
  | "Between500And1500"
  | "Between1500And3000"
  | "Between3000And4500"
  | "MoreThan4500";

const items: RadioGroupItem<ItemValue>[] = [
  { name: "Less than €500", value: "LessThan500" },
  { name: "Between €500 and €1,500", value: "Between500And1500" },
  { name: "Between €1,500 and €3,000", value: "Between1500And3000" },
  { name: "Between €3,000 and €4,500", value: "Between3000And4500" },
  { name: "More than €4,500", value: "MoreThan4500" },
];

const itemsWithDisabled: RadioGroupItem<ItemValue>[] = [
  { name: "Less than €500", value: "LessThan500" },
  { name: "Between €500 and €1,500", value: "Between500And1500" },
  { name: "Between €1,500 and €3,000", value: "Between1500And3000", disabled: true },
  { name: "Between €3,000 and €4,500", value: "Between3000And4500" },
  { name: "More than €4,500", value: "MoreThan4500" },
];

export const Default = () => {
  return (
    <StoryBlock title="RadioGroup">
      <StoryPart title="Default">
        <EditableRadioGroup items={items} />
      </StoryPart>

      <StoryPart title="Row direction">
        <EditableRadioGroup items={items} direction="row" />
      </StoryPart>

      <StoryPart title="Disabled">
        <EditableRadioGroup items={items} disabled={true} />
      </StoryPart>

      <StoryPart title="With disabled item">
        <EditableRadioGroup items={itemsWithDisabled} />
      </StoryPart>

      <StoryPart title="With color">
        <EditableRadioGroup items={items} color="live" />
      </StoryPart>
    </StoryBlock>
  );
};
