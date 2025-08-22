import { Meta } from "@storybook/react";
import { useState } from "react";
import { Box } from "../src/components/Box";
import { Toggle } from "../src/components/Toggle";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Forms/Toggle",
  component: Toggle,
} as Meta<typeof Toggle>;

export const Variations = () => {
  const [value, setValue] = useState(false);

  return (
    <StoryBlock title="Variations" description="Toggle component">
      <StoryPart title="Normal">
        <Box alignItems="start">
          <Toggle
            value={value}
            onToggle={setValue}
            compact={false}
            labelOff="Canceled"
            labelOn="Active"
          />
        </Box>
      </StoryPart>

      <StoryPart title="Compact">
        <Box alignItems="start">
          <Toggle
            value={value}
            onToggle={setValue}
            compact={true}
            labelOff="Canceled"
            labelOn="Active"
          />
        </Box>
      </StoryPart>
    </StoryBlock>
  );
};
