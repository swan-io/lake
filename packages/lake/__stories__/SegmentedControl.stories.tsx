import { Meta } from "@storybook/react";
import { useState } from "react";
import { SegmentedControl } from "../src/components/SegmentedControl";
import { TabView } from "../src/components/TabView";
import { StoryBlock } from "./_StoriesComponents";

export default {
  title: "Interactivity/SegmentedControl",
  component: TabView,
} as Meta<typeof TabView>;

const items = [
  { id: "sct", name: "SEPA Credit Transfer" },
  { id: "sdd", name: "SEPA Direct Debit" },
  { id: "card", name: "Card" },
] as const;

type ItemId = (typeof items)[number]["id"];

export const Default = () => {
  const [selected, setSelected] = useState<ItemId>(items[0].id);

  return (
    <StoryBlock
      title="Segmented control"
      description="You can reduce window's width to see behavior when there isn't enough space to display all controls"
    >
      <SegmentedControl
        mode="desktop"
        selected={selected}
        items={items}
        onValueChange={setSelected}
      />
    </StoryBlock>
  );
};
