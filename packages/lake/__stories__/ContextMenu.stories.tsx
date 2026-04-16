import { Meta } from "@storybook/react";
import { ContextMenu, ContextMenuItem } from "../src/components/ContextMenu";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Interactivity/ContextMenu",
  component: ContextMenu,
} as Meta<typeof ContextMenu>;

export const Default = () => {
  return (
    <StoryBlock title="ContextMenu">
      <StoryPart title="Default">
        <ContextMenu ariaLabel="Actions">
          <ContextMenuItem onPress={() => console.log("Edit")}>Edit</ContextMenuItem>
          <ContextMenuItem onPress={() => console.log("Remove")}>Remove</ContextMenuItem>
        </ContextMenu>
      </StoryPart>

      <StoryPart title="With missing info">
        <ContextMenu ariaLabel="Actions" withPill={true}>
          <ContextMenuItem withPill={true} onPress={() => console.log("Edit")}>
            Edit
          </ContextMenuItem>
          <ContextMenuItem onPress={() => console.log("Remove")}>Remove</ContextMenuItem>
        </ContextMenu>
      </StoryPart>
    </StoryBlock>
  );
};
