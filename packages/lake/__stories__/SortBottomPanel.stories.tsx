import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { LakeButton } from "../src/components/LakeButton";
import { LakeText } from "../src/components/LakeText";
import { SortBottomPanel, SortField, SortValue } from "../src/components/SortBottomPanel";
import { Space } from "../src/components/Space";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
  },
});

export default {
  title: "Forms/SortBottomPanel",
  component: SortBottomPanel,
} as ComponentMeta<typeof SortBottomPanel>;

type FieldName = "status" | "type" | "amount" | "executionDate";

const fields: SortField<FieldName>[] = [
  {
    name: "status",
    ascLabel: "Status: A-Z",
    descLabel: "Status: Z-A",
  },
  {
    name: "type",
    ascLabel: "Type: A-Z",
    descLabel: "Type: Z-A",
  },
  {
    name: "amount",
    ascLabel: "Amount: lowest to highest",
    descLabel: "Amount: highest to lowest",
  },
  {
    name: "executionDate",
    ascLabel: "Execution date: oldest to newest",
    descLabel: "Execution date: newest to oldest",
  },
];

export const Default = () => {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState<SortValue<FieldName> | undefined>();

  return (
    <StoryBlock title="SortBottomPanel">
      <StoryPart title="Default">
        <LakeButton style={styles.button} onPress={() => setOpened(true)}>
          Open sort panel
        </LakeButton>

        <Space height={24} />

        {value != null && (
          <>
            <LakeText>Sort by: {value.field}</LakeText>
            <LakeText>Direction: {value.direction}</LakeText>
          </>
        )}

        <SortBottomPanel
          visible={opened}
          title="Sort by"
          fields={fields}
          value={value}
          onChange={setValue}
          onClose={() => setOpened(false)}
        />
      </StoryPart>
    </StoryBlock>
  );
};
