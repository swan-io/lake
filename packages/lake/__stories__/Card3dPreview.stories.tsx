import { Meta } from "@storybook/react";
import Card3dPreview from "../src/components/Card3dPreview";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Informations/Card3dPreview",
  component: Card3dPreview,
} as Meta<typeof Card3dPreview>;

export const Card = () => {
  return (
    <StoryBlock title="Card">
      <StoryPart title="Default">
        <Card3dPreview
          ownerName="John Doe"
          cardNumber="1234 5678 9012 3456"
          expirationDate="12/24"
          cvv="123"
        />
      </StoryPart>
    </StoryBlock>
  );
};
