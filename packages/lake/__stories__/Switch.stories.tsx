import { Meta } from "@storybook/react";
import { useCallback, useId, useState } from "react";
import { Box } from "../src/components/Box";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { Switch } from "../src/components/Switch";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Forms/Switch",
  component: Switch,
} as Meta<typeof Switch>;

export const Default = () => {
  const [value, setValue] = useState<boolean>(true);
  const defaultLabelId = useId();
  const disabledLabelId = useId();

  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  return (
    <StoryBlock title="Switch">
      <StoryPart title="Default">
        <Box direction="row" alignItems="center">
          <Switch value={value} onValueChange={toggle} labelledBy={defaultLabelId} />
          <Space width={12} />
          <LakeText id={defaultLabelId} color={colors.gray[700]}>
            Allow physical cards
          </LakeText>
        </Box>
      </StoryPart>

      <StoryPart title="Disabled">
        <Box direction="row" alignItems="center">
          <Switch value={true} disabled={true} labelledBy={disabledLabelId} />
          <Space width={12} />
          <LakeText id={disabledLabelId} color={colors.gray[700]}>
            Allow physical cards
          </LakeText>
        </Box>
      </StoryPart>
    </StoryBlock>
  );
};
