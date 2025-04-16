import { Meta } from "@storybook/react";
import { Avatar } from "../src/components/Avatar";
import { Box } from "../src/components/Box";
import { Space } from "../src/components/Space";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Informations/Avatar",
  component: Avatar,
} as Meta<typeof Avatar>;

const AA = { firstName: "Aaron", lastName: "Aaronson" };
const BA = { firstName: "Bernard", lastName: "Arthus" };
const CA = { firstName: "Chloe", lastName: "Arthus" };

export const Variants = () => {
  return (
    <StoryBlock title="Avatar">
      <StoryPart title="Sizes">
        <Box direction="row">
          <Avatar user={AA} size={32} />
          <Space width={16} />
          <Avatar user={AA} size={48} />
          <Space width={16} />
          <Avatar user={AA} size={64} />
        </Box>
      </StoryPart>

      <StoryPart title="Colors">
        <Box direction="row">
          <Avatar user={AA} size={32} />
          <Space width={16} />
          <Avatar user={BA} size={32} />
          <Space width={16} />
          <Avatar user={CA} size={32} />
        </Box>
      </StoryPart>
    </StoryBlock>
  );
};
