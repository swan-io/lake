import { Meta } from "@storybook/react";
import { useState } from "react";
import { Box } from "../src/components/Box";
import { Fill } from "../src/components/Fill";
import { Icon } from "../src/components/Icon";
import { LakeSearchField } from "../src/components/LakeSearchField";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { Tag } from "../src/components/Tag";
import { Toggle } from "../src/components/Toggle";
import { noop } from "../src/utils/function";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Forms/SearchField",
  component: LakeSearchField,
} as Meta<typeof LakeSearchField>;

export const Variations = () => {
  const [text1, setText1] = useState<string>();
  const [text2, setText2] = useState<string>();

  return (
    <StoryBlock title="SearchField">
      <StoryPart title="Default">
        <LakeSearchField initialValue="" placeholder="Placeholder" onChangeText={setText1} />
        <Space height={12} />
        <LakeText>Debounced value: {text1}</LakeText>
      </StoryPart>

      <StoryPart title="With initialValue">
        <Box direction="row">
          <Icon name="add-circle-filled" size={32} />
          <Fill minWidth={96} />

          <LakeSearchField
            initialValue="Initial value"
            placeholder="Placeholder"
            onChangeText={setText2}
          />
        </Box>

        <Space height={12} />
        <LakeText>Debounced value: {text2}</LakeText>
      </StoryPart>

      <StoryPart title="With counter">
        <LakeSearchField
          initialValue="Initial value"
          placeholder="Placeholder"
          onChangeText={setText2}
          renderEnd={() => <Tag>44</Tag>}
        />
      </StoryPart>

      <StoryPart title="With toggle">
        <Box direction="row" alignItems="center">
          <Fill minWidth={8} />

          <LakeSearchField
            initialValue="Initial value"
            placeholder="Placeholder"
            maxWidth={500}
            onChangeText={setText2}
          >
            <Toggle value={true} onLabel="Enabled" offLabel="Disabled" onToggle={noop} />
            <Space width={8} />
          </LakeSearchField>
        </Box>
      </StoryPart>
    </StoryBlock>
  );
};
