import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Box } from "../src/components/Box";
import { Fill } from "../src/components/Fill";
import { Icon } from "../src/components/Icon";
import { LakeSearchField, SearchFieldProps } from "../src/components/LakeSearchField";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { Tag } from "../src/components/Tag";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    maxWidth: 600,
  },
});

export default {
  title: "Forms/SearchField",
  component: LakeSearchField,
} as Meta<typeof LakeSearchField>;

type StoryArgs = Pick<SearchFieldProps, "initialValue" | "placeholder" | "maxWidth">;

export const Variations = ({ initialValue, placeholder, maxWidth }: StoryArgs) => {
  const [text1, setText1] = useState<string>();
  const [text2, setText2] = useState<string>();
  console.log(initialValue)
  return (
    <StoryBlock title="SearchField">
      <StoryPart title="Default" style={styles.container}>
        <LakeSearchField initialValue={initialValue} placeholder={placeholder} maxWidth={maxWidth} onChangeText={setText1} />
        <Space height={12} />
        <LakeText>Debounced value: {text1}</LakeText>
      </StoryPart>

      <StoryPart title="With initialValue">
        <Box direction="row">
          <Icon name="add-circle-filled" size={32} />
          <Fill minWidth={96} />

          <LakeSearchField
            initialValue={initialValue}
            placeholder={placeholder}
            maxWidth={maxWidth}
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
    </StoryBlock>
  );
};
