import { Meta } from "@storybook/react";
import { BulletList } from "../src/components/BulletList";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Informations/BulletList",
  component: BulletList,
} as Meta<typeof BulletList>;

export const Default = () => {
  return (
    <StoryBlock
      title="BulletList"
      description={["A semantic bullet list (role list/listitem) with hanging indent."]}
    >
      <StoryPart title="Default">
        <BulletList
          items={[
            "First item",
            "Second item with a long enough label to wrap on narrow containers and demonstrate the hanging indent alignment.",
            "Third item",
          ]}
        />
      </StoryPart>

      <StoryPart title="Small variant">
        <BulletList
          variant="smallRegular"
          items={["Legal representative details required", "Supporting documents required"]}
        />
      </StoryPart>

      <StoryPart title="Colored (error tone)">
        <BulletList
          color={colors.negative[700]}
          items={[
            "Company lease agreement: Document refused for compliance reasons.",
            "Power of attorney: Full document required.",
          ]}
        />
      </StoryPart>
    </StoryBlock>
  );
};
