import { Meta, Story } from "@storybook/react";
import { useCallback, useState } from "react";
import { Box } from "../src/components/Box";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { Switch, SwitchProps } from "../src/components/Switch";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Forms/Switch",
  component: Switch,
} as Meta<typeof Switch>;

type StoryArgs = Pick<SwitchProps, "value" | "disabled">;

export const Default = ({ disabled }: StoryArgs) => {
  const [value, setValue] = useState<boolean>(true);

  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  return (
    <StoryBlock title="Switch">
      <StoryPart title="Default">
        <Box direction="row" alignItems="center">
          <Switch value={value} onValueChange={toggle} disabled={disabled} />
          <Space width={12} />
          <LakeText color={colors.gray[700]}>Allow physical cards</LakeText>
        </Box>
      </StoryPart>

      <StoryPart title="Disabled">
        <Box direction="row" alignItems="center">
          <Switch value={true} disabled={true} />
          <Space width={12} />
          <LakeText color={colors.gray[700]}>Allow physical cards</LakeText>
        </Box>
      </StoryPart>
    </StoryBlock>
  );
};
