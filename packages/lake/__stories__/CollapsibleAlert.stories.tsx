import { Meta } from "@storybook/react";
import { CollapsibleLakeAlert } from "@swan-io/shared-business/src/components/CollapsibleLakeAlert";
import { StyleSheet } from "react-native";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  part: {
    padding: 10,
    maxWidth: 600,
  },
});

export default {
  title: "Informations/CollapsibleAlert",
  component: CollapsibleLakeAlert,
} as Meta<typeof CollapsibleLakeAlert>;

export const Defaults = () => {
  return (
    <StoryBlock title="Initially collapsed">
      <StoryPart title="info" style={styles.part}>
        <CollapsibleLakeAlert variant="info" title="Title" subtitle="This is a subtitle">
          This alert is initially closed
        </CollapsibleLakeAlert>
      </StoryPart>

      <StoryPart title="Initially open" style={styles.part}>
        <CollapsibleLakeAlert
          variant="warning"
          title="Title"
          subtitle="This is a subtitle"
          initialCollapsed={true}
        >
          This alert is initially open
        </CollapsibleLakeAlert>
      </StoryPart>

      <StoryPart title="Custom labels" style={styles.part}>
        <CollapsibleLakeAlert
          variant="error"
          title="Title"
          subtitle="This is a subtitle"
          showLessLabel="Give me less"
          showMoreLabel="Give me more"
        >
          With custom labels
        </CollapsibleLakeAlert>
      </StoryPart>

      <StoryPart title="Without children" style={styles.part}>
        <CollapsibleLakeAlert variant="info" title="Title" subtitle="This is a subtitle" />
      </StoryPart>
    </StoryBlock>
  );
};
