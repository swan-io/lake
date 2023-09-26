import { Meta } from "@storybook/react";
import { useState } from "react";
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
      <StoryPart title="Desktop">
        <Toggle
          value={value}
          onToggle={setValue}
          mode="desktop"
          offLabel="Canceled"
          onLabel="Active"
        />
      </StoryPart>

      <StoryPart title="Desktop Disabled">
        <Toggle
          value={value}
          onToggle={setValue}
          mode="desktop"
          disabled={true}
          offLabel="Canceled"
          onLabel="Active"
        />
      </StoryPart>

      <StoryPart title="Mobile">
        <Toggle
          value={value}
          onToggle={setValue}
          mode="mobile"
          offLabel="Canceled"
          onLabel="Active"
        />
      </StoryPart>

      <StoryPart title="Mobile Disabled">
        <Toggle
          value={value}
          disabled={true}
          onToggle={setValue}
          mode="mobile"
          offLabel="Canceled"
          onLabel="Active"
        />
      </StoryPart>
    </StoryBlock>
  );
};
