import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { LakeButton } from "../src/components/LakeButton";
import { LakeHeading } from "../src/components/LakeHeading";
import { ListRightPanel } from "../src/components/ListRightPanel";
import { StoryBlock } from "./_StoriesComponents";

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
  },
});

export default {
  title: "Layout/ListRightPanel",
  component: ListRightPanel,
} as Meta<typeof ListRightPanel>;

const resolved: Record<string, boolean> = {};

const Item = ({ item }: { item: string }) => {
  if (resolved[item] !== true) {
    throw new Promise(resolve => {
      setTimeout(() => {
        resolved[item] = true;
        resolve(undefined);
      }, 500);
    });
  }

  return (
    <LakeHeading level={1} variant="h1">
      Item {item}
    </LakeHeading>
  );
};

export const Default = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <StoryBlock
      title="RightPanel"
      description={[
        "RightPanel is a component that allows you to render a panel on the right side of the screen.",
        "To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element",
        "You can open it by clicking on the button below.",
      ]}
    >
      <LakeButton onPress={() => setActiveId("1")} size="small" style={styles.button}>
        Open right panel
      </LakeButton>

      <ListRightPanel
        closeLabel="Close"
        previousLabel="Previous"
        nextLabel="Next"
        keyExtractor={item => item}
        activeId={activeId}
        onActiveIdChange={activeId => setActiveId(activeId)}
        onClose={() => setActiveId(null)}
        items={["1", "2", "3"]}
        render={item => <Item item={item} />}
      />
    </StoryBlock>
  );
};
