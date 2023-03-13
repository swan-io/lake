import { ComponentMeta } from "@storybook/react";
import { TileGridPlaceholder, TilePlaceholder } from "../src/components/TilePlaceholder";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Layout/TilePlaceholder",
  component: TilePlaceholder,
} as ComponentMeta<typeof TilePlaceholder>;

export const Default = () => {
  return (
    <StoryBlock title="TilePlaceholder">
      <StoryPart title="Default placeholder">
        <TilePlaceholder />
      </StoryPart>

      <StoryPart title="Grid placeholder">
        <TileGridPlaceholder withTabs={false} />
      </StoryPart>

      <StoryPart title="Grid placeholder with 3 items">
        <TileGridPlaceholder withTabs={false} numberOfItems={3} />
      </StoryPart>
    </StoryBlock>
  );
};
