import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { LakeSearchField } from "../src/components/LakeSearchField";
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

export const Variations = () => {
  const [text1, setText1] = useState<string>();
  const [text2, setText2] = useState<string>();
  return (
    <StoryBlock title="SearchField">
      <StoryPart title="Default" style={styles.container}>
        <LakeSearchField initialValue="" placeholder="Placeholder" onChangeText={setText1} />
        <Space height={12} />
        <LakeText>Debounced value: {text1}</LakeText>
      </StoryPart>

      <StoryPart title="With initialValue" style={styles.container}>
        <LakeSearchField
          initialValue="Initial value"
          placeholder="Placeholder"
          onChangeText={setText2}
        />

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
