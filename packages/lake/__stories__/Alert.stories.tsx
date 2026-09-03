import { Meta } from "@storybook/react";
import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { BulletList } from "../src/components/BulletList";
import { LakeAlert } from "../src/components/LakeAlert";
import { LakeButton } from "../src/components/LakeButton";
import { Popover } from "../src/components/Popover";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  part: {
    padding: 10,
    maxWidth: 600,
  },
  button: {
    alignSelf: "flex-start",
  },
  alertInPopover: {
    width: 500,
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

const AlertInPopover = ({ anchored = false }: { anchored?: boolean }) => {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef<View>(null);

  return (
    <>
      <LakeButton
        ref={buttonRef}
        size="small"
        style={styles.button}
        onPress={() => setVisible(true)}
      >
        Open popover
      </LakeButton>

      <Popover referenceRef={buttonRef} visible={visible} onDismiss={() => setVisible(false)}>
        <LakeAlert
          anchored={anchored}
          inPopover={true}
          variant="warning"
          style={styles.alertInPopover}
          title="Onboarding incomplete"
          callToAction={
            <LakeButton
              onPress={() => setVisible(false)}
              icon="lake-close"
              mode="tertiary"
              size="small"
              color="warning"
              ariaLabel="Close"
            />
          }
        >
          <BulletList
            color={colors.warning[700]}
            items={["Email", "Name", "Business Activity", "Monthly Payment Volume"]}
          />
        </LakeAlert>
      </Popover>
    </>
  );
};

export const InPopover = () => {
  return (
    <StoryBlock
      title="Alert in a popover"
      description="Popover clips its content with an 8px border radius. Set `inPopover={true}` on the alert so its corners match."
    >
      <StoryPart title="With popover" style={styles.part}>
        <AlertInPopover />
      </StoryPart>

      <StoryPart title="Anchored" style={styles.part}>
        <AlertInPopover anchored={true} />
      </StoryPart>
    </StoryBlock>
  );
};
