import { ComponentMeta } from "@storybook/react";
import { LakeHeading } from "../src/components/LakeHeading";
import { Space } from "../src/components/Space";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Typography/Heading",
  component: LakeHeading,
} as ComponentMeta<typeof LakeHeading>;

export const Variations = () => {
  return (
    <StoryBlock title="Text">
      <StoryPart title="Variations">
        <LakeHeading level={1} variant="h1">
          Lorem ipsum dolor sit amet
        </LakeHeading>

        <Space height={16} />

        <LakeHeading level={2} variant="h2">
          Lorem ipsum dolor sit amet
        </LakeHeading>

        <Space height={16} />

        <LakeHeading level={3} variant="h3">
          Lorem ipsum dolor sit amet
        </LakeHeading>

        <Space height={16} />

        <LakeHeading level={4} variant="h4">
          Lorem ipsum dolor sit amet
        </LakeHeading>

        <Space height={16} />

        <LakeHeading level={5} variant="h5">
          Lorem ipsum dolor sit amet
        </LakeHeading>

        <Space height={16} />

        <LakeHeading level={6} variant="h6">
          Lorem ipsum dolor sit amet
        </LakeHeading>
      </StoryPart>

      <StoryPart title="Colors">
        <LakeHeading level={4} variant="h4" color={colors.gray.primary}>
          gray: Lorem ipsum dolor sit amet
        </LakeHeading>

        <Space height={8} />

        <LakeHeading level={4} variant="h4" color={colors.live.primary}>
          live: Lorem ipsum dolor sit amet
        </LakeHeading>

        <Space height={8} />

        <LakeHeading level={4} variant="h4" color={colors.sandbox.primary}>
          sandbox: Lorem ipsum dolor sit amet
        </LakeHeading>

        <Space height={8} />

        <LakeHeading level={4} variant="h4" color={colors.positive.primary}>
          positive: Lorem ipsum dolor sit amet
        </LakeHeading>

        <Space height={8} />

        <LakeHeading level={4} variant="h4" color={colors.warning.primary}>
          warning: Lorem ipsum dolor sit amet
        </LakeHeading>

        <Space height={8} />

        <LakeHeading level={4} variant="h4" color={colors.negative.primary}>
          negative: Lorem ipsum dolor sit amet
        </LakeHeading>

        <Space height={8} />

        <LakeHeading level={4} variant="h4" color={colors.current.primary}>
          current: Lorem ipsum dolor sit amet
        </LakeHeading>

        <Space height={8} />

        <LakeHeading level={4} variant="h4" color={colors.partner.primary}>
          partner: Lorem ipsum dolor sit amet
        </LakeHeading>

        <Space height={8} />

        <LakeHeading level={4} variant="h4" color={colors.swan.primary}>
          swan: Lorem ipsum dolor sit amet
        </LakeHeading>

        <Space height={8} />

        <LakeHeading level={4} variant="h4" color={colors.shakespear.primary}>
          shakespear: Lorem ipsum dolor sit amet
        </LakeHeading>

        <Space height={8} />

        <LakeHeading level={4} variant="h4" color={colors.darkPink.primary}>
          darkPink: Lorem ipsum dolor sit amet
        </LakeHeading>

        <Space height={8} />

        <LakeHeading level={4} variant="h4" color={colors.sunglow.primary}>
          sunglow: Lorem ipsum dolor sit amet
        </LakeHeading>

        <Space height={8} />

        <LakeHeading level={4} variant="h4" color={colors.mediumSladeBlue.primary}>
          mediumSladeBlue: Lorem ipsum dolor sit amet
        </LakeHeading>
      </StoryPart>
    </StoryBlock>
  );
};
