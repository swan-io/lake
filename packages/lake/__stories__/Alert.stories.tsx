import { Meta } from "@storybook/react";
import { StyleSheet } from "react-native";
import { LakeAlert } from "../src/components/LakeAlert";
import { LakeButton } from "../src/components/LakeButton";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  part: {
    padding: 10,
    maxWidth: 600,
  },
});

export default {
  title: "Informations/Alert",
  component: LakeAlert,
} as Meta<typeof LakeAlert>;

export const Variants = () => {
  return (
    <StoryBlock title="Alert variations">
      <StoryPart title="info" style={styles.part}>
        <LakeAlert variant="info" title="Title" subtitle="This is a subtitle">
          This is a children
        </LakeAlert>
      </StoryPart>

      <StoryPart title="warning" style={styles.part}>
        <LakeAlert variant="warning" title="Title" subtitle="This is a subtitle">
          This is a children
        </LakeAlert>
      </StoryPart>

      <StoryPart title="error" style={styles.part}>
        <LakeAlert variant="error" title="Title" subtitle="This is a subtitle">
          This is a children
        </LakeAlert>
      </StoryPart>

      <StoryPart title="success" style={styles.part}>
        <LakeAlert variant="success" title="Title" subtitle="This is a subtitle">
          This is a children
        </LakeAlert>
      </StoryPart>

      <StoryPart title="neutral" style={styles.part}>
        <LakeAlert variant="neutral" title="Title" subtitle="This is a subtitle">
          This is a children
        </LakeAlert>
      </StoryPart>

      <StoryPart title="With tag" style={styles.part}>
        <LakeAlert
          variant="warning"
          title="Title"
          subtitle="This is a subtitle"
          tag="Action required"
        >
          This is a children
        </LakeAlert>
      </StoryPart>
    </StoryBlock>
  );
};

export const Formats = () => {
  return (
    <StoryBlock title="Alert formats">
      <StoryPart title="Anchored" style={styles.part}>
        <LakeAlert anchored={true} variant="info" title="Title" />
      </StoryPart>

      <StoryPart title="With subtitle" style={styles.part}>
        <LakeAlert variant="info" title="Title" subtitle="This is a subtitle" />
      </StoryPart>

      <StoryPart title="With call to action" style={styles.part}>
        <LakeAlert
          variant="info"
          title="Title"
          callToAction={
            <LakeButton size="small" color="shakespear" icon="add-filled" ariaLabel="Action !" />
          }
        />
      </StoryPart>

      <StoryPart title="With children" style={styles.part}>
        <LakeAlert variant="info" title="Title">
          This is a children
        </LakeAlert>
      </StoryPart>

      <StoryPart title="With subtitle and children" style={styles.part}>
        <LakeAlert variant="info" title="Title" subtitle="This is a subtitle">
          This is a children
        </LakeAlert>
      </StoryPart>
    </StoryBlock>
  );
};
