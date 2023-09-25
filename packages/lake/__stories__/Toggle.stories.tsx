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
          labels={{
            false: "Canceled",
            true: "Active",
          }}
        />
      </StoryPart>

      <StoryPart title="Desktop Disabled">
        <Toggle
          value={value}
          onToggle={setValue}
          mode="desktop"
          disabled={true}
          labels={{
            false: "Canceled",
            true: "Active",
          }}
        />
      </StoryPart>

      <StoryPart title="Mobile">
        <Toggle
          value={value}
          onToggle={setValue}
          mode="mobile"
          labels={{
            false: "Canceled",
            true: "Active",
          }}
        />
      </StoryPart>

      <StoryPart title="Mobile Disabled">
        <Toggle
          value={value}
          disabled={true}
          onToggle={setValue}
          mode="mobile"
          labels={{
            false: "Canceled",
            true: "Active",
          }}
        />
      </StoryPart>
    </StoryBlock>
  );
};
