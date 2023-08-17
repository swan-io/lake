import { Meta } from "@storybook/react";
import { Space } from "../src/components/Space";
import { SwanLogo, SwanLogoProps } from "../src/components/SwanLogo";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";

export default {
  title: "Informations/SwanLogo",
  component: SwanLogo,
} as Meta<typeof SwanLogo>;

type StoryArgs = Pick<SwanLogoProps, "color" | "style">;

export const Colors = ({ color, style }: StoryArgs) => {
  return (
    <StoryBlock title="SwanLogo">
      <SwanLogo color={color} />
      <Space height={32} />
      <SwanLogo color={colors.gray.primary} />
      <Space height={16} />
      <SwanLogo color={colors.live.primary} />
      <Space height={16} />
      <SwanLogo color={colors.sandbox.primary} />
      <Space height={16} />
      <SwanLogo color={colors.positive.primary} />
      <Space height={16} />
      <SwanLogo color={colors.warning.primary} />
      <Space height={16} />
      <SwanLogo color={colors.negative.primary} />
      <Space height={16} />
      <SwanLogo color={colors.current.primary} />
      <Space height={16} />
      <SwanLogo color={colors.partner.primary} />
      <Space height={16} />
      <SwanLogo color={colors.swan.primary} />
      <Space height={16} />
      <SwanLogo color={colors.shakespear.primary} />
      <Space height={16} />
      <SwanLogo color={colors.darkPink.primary} />
      <Space height={16} />
      <SwanLogo color={colors.sunglow.primary} />
      <Space height={16} />
      <SwanLogo color={colors.mediumSladeBlue.primary} />
    </StoryBlock>
  );
};
