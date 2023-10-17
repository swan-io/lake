import { Meta } from "@storybook/react";
import { useState } from "react";
import { SegmentedControl } from "../src/components/SegmentedControl";
import { TabView } from "../src/components/TabView";
import { StoryBlock } from "./_StoriesComponents";

export default {
  title: "Interactivity/SegmentedControl",
  component: TabView,
} as Meta<typeof TabView>;

export const Default = () => {
  const items = [
    { name: "SEPA Credit Transfer", value: "SEPA Credit Transfer" },
    { name: "SEPA Direct Debit", value: "SEPA Direct Debit" },
    { name: "Card", value: "Card" },
  ];
  const [value, setValue] = useState({ name: "Card", value: "Card" });

  return (
    <StoryBlock
      title="Segmented control"
      description="You can reduce window's width to see behavior when there isn't enough space to display all controls"
    >
      <SegmentedControl items={items} onValueChange={setValue} mode="desktop" value={value} />
    </StoryBlock>
  );
};
