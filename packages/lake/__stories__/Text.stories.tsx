import { Meta } from "@storybook/react";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Typography/Text",
  component: LakeText,
} as Meta<typeof LakeText>;

export const Variations = () => {
  return (
    <StoryBlock title="Text">
      <StoryPart title="Variations">
        <LakeText>
          Default: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <Space height={16} />

        <LakeText variant="light">
          Light: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <LakeText variant="regular">
          Regular: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <LakeText variant="medium">
          Medium: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <LakeText variant="semibold">
          Semibold: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <Space height={16} />

        <LakeText variant="smallRegular">
          SmallRegular: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl
          nec
        </LakeText>

        <LakeText variant="smallMedium">
          SmallMedium: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl
          nec
        </LakeText>

        <LakeText variant="smallSemibold">
          SmallSemibold: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl
          nec
        </LakeText>
      </StoryPart>

      <StoryPart title="With loading parts">
        <LakeText variant="light">
          Light: Lorem ipsum dolor sit amet, <LakeText refreshing={true}>consectetur</LakeText>{" "}
          adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <Space height={16} />

        <LakeText variant="smallSemibold">
          SmallSemibold:{" "}
          <LakeText refreshing={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </LakeText>{" "}
          Sed euismod, nisl nec
        </LakeText>
      </StoryPart>

      <StoryPart title="Colors">
        <LakeText color={colors.gray.primary}>
          gray: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <LakeText color={colors.live.primary}>
          live: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <LakeText color={colors.sandbox.primary}>
          sandbox: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <LakeText color={colors.positive.primary}>
          positive: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <LakeText color={colors.warning.primary}>
          warning: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <LakeText color={colors.negative.primary}>
          negative: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <LakeText color={colors.current.primary}>
          current: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <LakeText color={colors.partner.primary}>
          partner: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <LakeText color={colors.swan.primary}>
          swan: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <LakeText color={colors.shakespear.primary}>
          shakespear: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <LakeText color={colors.darkPink.primary}>
          darkPink: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <LakeText color={colors.sunglow.primary}>
          sunglow: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
        </LakeText>

        <LakeText color={colors.mediumSladeBlue.primary}>
          mediumSladeBlue: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl nec
        </LakeText>
      </StoryPart>
    </StoryBlock>
  );
};
