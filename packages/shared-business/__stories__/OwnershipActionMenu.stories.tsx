import { Meta } from "@storybook/react";
import { OwnershipActionMenu } from "../src/components/OwnershipActionMenu";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Onboarding/OwnershipActionMenu",
  component: OwnershipActionMenu,
} as Meta<typeof OwnershipActionMenu>;

export const Default = () => {
  return (
    <StoryBlock title="OwnershipActionMenu">
      <StoryPart title="Default — no action required (click to open menu)">
        <OwnershipActionMenu
          onEdit={() => console.log("Edit")}
          onRemove={() => console.log("Remove")}
        />
      </StoryPart>

      <StoryPart title="With missing info — red dot signals the user must edit (click to open menu)">
        <OwnershipActionMenu
          hasMissingInfo={true}
          onEdit={() => console.log("Edit")}
          onRemove={() => console.log("Remove")}
        />
      </StoryPart>
    </StoryBlock>
  );
};
