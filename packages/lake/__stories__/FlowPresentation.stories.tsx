import { Meta } from "@storybook/react";
import { FlowPresentation } from "../src/components/FlowPresentation";
import { Space } from "../src/components/Space";
import { WithCurrentColor } from "../src/components/WithCurrentColor";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Informations/FlowPresentation",
  component: FlowPresentation,
} as Meta<typeof FlowPresentation>;

export const Default = () => {
  return (
    <WithCurrentColor variant="live">
      <StoryBlock title="FlowPresentation">
        <StoryPart title="Desktop">
          <FlowPresentation
            steps={[
              { label: "Enter your e-mail", icon: "mail-regular" },
              { label: "Fill in the form", icon: "building-multiple-regular" },
              { label: "Add an owner", icon: "person-add-regular" },
              { label: "Attach the documents", icon: "document-regular" },
              { label: "Finalize", icon: "desktop-regular" },
            ]}
            mode="desktop"
          />

          <Space height={32} />
        </StoryPart>

        <StoryPart title="Mobile">
          <FlowPresentation
            steps={[
              { label: "Enter your e-mail", icon: "mail-regular" },
              { label: "Fill in the form", icon: "building-multiple-regular" },
              { label: "Add an owner", icon: "person-add-regular" },
              { label: "Attach the documents", icon: "document-regular" },
              { label: "Finalize", icon: "desktop-regular" },
            ]}
            mode="mobile"
          />

          <Space height={32} />
        </StoryPart>
      </StoryBlock>
    </WithCurrentColor>
  );
};
