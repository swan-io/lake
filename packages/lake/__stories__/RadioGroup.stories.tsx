import { Meta } from "@storybook/react";
import { useState } from "react";
import { Except } from "type-fest";
import { LakeText } from "../src/components/LakeText";
import { RadioGroup, RadioGroupItem, RadioGroupProps } from "../src/components/RadioGroup";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Forms/RadioGroup",
  component: RadioGroup,
} as Meta<typeof RadioGroup>;

function EditableRadioGroup<T>(props: Except<RadioGroupProps<T>, "value" | "onValueChange">) {
  const [value, setValue] = useState<T>();

  return <RadioGroup {...props} value={value} onValueChange={setValue} />;
}

function RadioItemWithDescription({ label, description }: { label: string; description: string }) {
  return (
    <LakeText>
      <LakeText color={colors.gray[900]}>{label}</LakeText>

      {": "}

      <LakeText color={colors.gray[500]}>{description}</LakeText>
    </LakeText>
  );
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

const itemsWithDescription: RadioGroupItem<ItemValue>[] = [
  {
    name: (
      <RadioItemWithDescription
        label="Less than €500"
        description="Suitable for occasional small purchases"
      />
    ),
    value: "LessThan500",
  },
  {
    name: (
      <RadioItemWithDescription
        label="Between €500 and €1,500"
        description="Ideal for regular everyday spending"
      />
    ),
    value: "Between500And1500",
  },
  {
    name: (
      <RadioItemWithDescription
        label="Between €1,500 and €3,000"
        description="For moderate to high monthly expenses"
      />
    ),
    value: "Between1500And3000",
  },
  {
    name: (
      <RadioItemWithDescription
        label="Between €3,000 and €4,500"
        description="For high spending needs"
      />
    ),
    value: "Between3000And4500",
  },
  {
    name: (
      <RadioItemWithDescription label="More than €4,500" description="No practical upper limit" />
    ),
    value: "MoreThan4500",
  },
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

      <StoryPart title="With help">
        <EditableRadioGroup items={items} help="Select a value" />
      </StoryPart>

      <StoryPart title="With error">
        <EditableRadioGroup items={items} error="This is an error" />
      </StoryPart>

      <StoryPart title="With hidden error">
        <EditableRadioGroup items={items} error="I'm hidden :(" hideErrors={true} />
      </StoryPart>

      <StoryPart title="With description">
        <EditableRadioGroup items={itemsWithDescription} />
      </StoryPart>
    </StoryBlock>
  );
};
