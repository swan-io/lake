import { Meta } from "@storybook/react";
import { LakeRadio } from "../src/components/LakeRadio";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Forms/Radio",
  component: LakeRadio,
} as Meta<typeof LakeRadio>;

export const Variations = () => {
  return (
    <StoryBlock
      title="Variations"
      description="Radio component is just the UI pill, for editable Radio with several choice, you can use `ChoicePicker` or implement your own Radio selector with Pressable"
    >
      <StoryPart title="Disabled">
        <LakeRadio value={false} disabled={true} />
      </StoryPart>

      <StoryPart title="Selected and disabled">
        <LakeRadio value={true} disabled={true} />
      </StoryPart>

      <StoryPart title="Not selected">
        <LakeRadio value={false} />
      </StoryPart>

      <StoryPart title="Selected">
        <LakeRadio value={true} />
      </StoryPart>

      <StoryPart title="With error">
        <LakeRadio isError={true} value={false} />
      </StoryPart>
    </StoryBlock>
  );
};

export const Colors = () => {
  return (
    <StoryBlock title="Colors" description="Radio color impacts only selected state">
      <StoryPart title="Default">
        <LakeRadio value={true} />
      </StoryPart>

      <StoryPart title="gray">
        <LakeRadio value={true} color="gray" />
      </StoryPart>

      <StoryPart title="live">
        <LakeRadio value={true} color="live" />
      </StoryPart>

      <StoryPart title="sandbox">
        <LakeRadio value={true} color="sandbox" />
      </StoryPart>

      <StoryPart title="positive">
        <LakeRadio value={true} color="positive" />
      </StoryPart>

      <StoryPart title="warning">
        <LakeRadio value={true} color="warning" />
      </StoryPart>

      <StoryPart title="negative">
        <LakeRadio value={true} color="negative" />
      </StoryPart>

      <StoryPart title="current">
        <LakeRadio value={true} color="current" />
      </StoryPart>

      <StoryPart title="partner">
        <LakeRadio value={true} color="partner" />
      </StoryPart>

      <StoryPart title="swan">
        <LakeRadio value={true} color="swan" />
      </StoryPart>

      <StoryPart title="shakespear">
        <LakeRadio value={true} color="shakespear" />
      </StoryPart>

      <StoryPart title="darkPink">
        <LakeRadio value={true} color="darkPink" />
      </StoryPart>

      <StoryPart title="sunglow">
        <LakeRadio value={true} color="sunglow" />
      </StoryPart>

      <StoryPart title="mediumSladeBlue">
        <LakeRadio value={true} color="mediumSladeBlue" />
      </StoryPart>
    </StoryBlock>
  );
};
