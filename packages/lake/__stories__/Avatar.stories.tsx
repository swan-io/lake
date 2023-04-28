import { Meta } from "@storybook/react";
import dedent from "ts-dedent";
import { Avatar } from "../src/components/Avatar";
import { Box } from "../src/components/Box";
import { Space } from "../src/components/Space";
import { StoryBlock, StoryCodePart, StoryPart } from "./_StoriesComponents";

export default {
  title: "Informations/Avatar",
  component: Avatar,
} as Meta<typeof Avatar>;

export const Variants = () => {
  return (
    <StoryBlock title="Avatar">
      <StoryPart title="Sizes">
        <Box direction="row">
          <Avatar initials="AA" size={32} />
          <Space width={16} />
          <Avatar initials="AA" size={48} />
          <Space width={16} />
          <Avatar initials="AA" size={64} />
        </Box>
      </StoryPart>

      <StoryPart title="Colors">
        <Box direction="row">
          <Avatar initials="AA" size={32} />
          <Space width={16} />
          <Avatar initials="BA" size={32} />
          <Space width={16} />
          <Avatar initials="CA" size={32} />
        </Box>
      </StoryPart>

      <StoryCodePart title="Code example">
        {dedent`
          <Box direction="row">
            <Avatar initials="AA" size={32} />
            <Space width={16} />
            <Avatar initials="BA" size={32} />
            <Space width={16} />
            <Avatar initials="CA" size={32} />
          </Box>`}
      </StoryCodePart>
    </StoryBlock>
  );
};
