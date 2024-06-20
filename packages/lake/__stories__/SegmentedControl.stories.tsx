import { Meta } from "@storybook/react";
import { useState } from "react";
import { Icon } from "../src/components/Icon";
import { SegmentedControl } from "../src/components/SegmentedControl";
import { Path, Svg } from "../src/components/Svg";
import { TabView } from "../src/components/TabView";
import { StoryBlock } from "./_StoriesComponents";

export default {
  title: "Interactivity/SegmentedControl",
  component: TabView,
} as Meta<typeof TabView>;

const icon = (
  <Svg height={20} viewBox="0 0 256 159">
    <Path fill="#FF5F00" d="M162.448 16.903h-69.15v124.251h69.15V16.904z" />

    <Path
      fill="#EB001B"
      d="M97.689 79.029c0-25.245 11.854-47.637 30.074-62.126C114.372 6.366 97.469 0 79.029 0 35.344 0 0 35.343 0 79.029c0 43.685 35.343 79.029 79.029 79.029 18.44 0 35.343-6.366 48.734-16.904-18.22-14.269-30.075-36.88-30.075-62.125z"
    />

    <Path
      fill="#F79E1B"
      d="M255.746 79.029c0 43.685-35.343 79.029-79.029 79.029-18.44 0-35.343-6.366-48.734-16.904 18.44-14.488 30.075-36.88 30.075-62.125 0-25.245-11.855-47.637-30.075-62.126C141.374 6.366 158.277 0 176.717 0c43.686 0 79.029 35.563 79.029 79.029z"
    />
  </Svg>
);

const items = [
  { id: "sct", name: "SEPA Credit Transfer", icon: <Icon name="arrow-swap-regular" size={24} /> },
  {
    id: "check",
    name: "Check",
    icon: <Icon name="check-regular" size={24} />,
    activeIcon: <Icon name="check-filled" size={24} />,
  },
  { id: "card", name: "Card", icon },
] as const;

type ItemId = (typeof items)[number]["id"];

export const Default = () => {
  const [selected, setSelected] = useState<ItemId>(items[0].id);

  return (
    <StoryBlock
      title="Segmented control"
      description="You can reduce window's width to see behavior when there isn't enough space to display all controls"
    >
      <SegmentedControl selected={selected} items={items} onValueChange={setSelected} />
    </StoryBlock>
  );
};
