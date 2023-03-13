import { ComponentMeta } from "@storybook/react";
import { LakeCopyButton } from "../src/components/LakeCopyButton";
import { LakeLabel } from "../src/components/LakeLabel";
import { LakeText } from "../src/components/LakeText";
import { ReadOnlyFieldList } from "../src/components/ReadOnlyFieldList";
import { Tag } from "../src/components/Tag";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";

export default {
  title: "Forms/ReadOnlyFieldList",
  component: ReadOnlyFieldList,
} as ComponentMeta<typeof ReadOnlyFieldList>;

export const Default = () => {
  return (
    <StoryBlock title="Readonly field list">
      <ReadOnlyFieldList>
        <LakeLabel
          label="Card holder"
          type="view"
          render={() => <LakeText color={colors.gray[900]}>John Doe</LakeText>}
        />

        <LakeLabel
          label="Account"
          type="view"
          render={() => <LakeText color={colors.gray[900]}>Compte courant</LakeText>}
        />

        <LakeLabel
          label="Account holder"
          type="view"
          render={() => <LakeText color={colors.gray[900]}>John Doe</LakeText>}
        />

        <LakeLabel
          label="Type"
          type="view"
          render={() => <LakeText color={colors.gray[900]}>Single use</LakeText>}
        />

        <LakeLabel
          label="Name"
          type="view"
          render={() => <LakeText color={colors.gray[900]}>John Doe</LakeText>}
        />

        <LakeLabel
          label="Status"
          type="view"
          render={() => (
            <LakeText color={colors.gray[900]}>
              <Tag color="positive">Enabled</Tag>
            </LakeText>
          )}
        />

        <LakeLabel
          label="Contract expiry date"
          type="view"
          render={() => (
            <LakeText color={colors.gray[900]}>
              <Tag color="gray">Unlimited</Tag>
            </LakeText>
          )}
        />

        <LakeLabel
          label="ID"
          type="view"
          render={() => <LakeText color={colors.gray[900]}>123456789</LakeText>}
          actions={
            <LakeCopyButton
              valueToCopy="123456789"
              copyText="Click to copy"
              copiedText="Copied to clipboard!"
            />
          }
        />

        <LakeLabel
          label="Created"
          type="view"
          render={() => <LakeText color={colors.gray[900]}>16-01-2023</LakeText>}
        />

        <LakeLabel
          label="Updated"
          type="view"
          render={() => <LakeText color={colors.gray[900]}>17-01-2023</LakeText>}
        />
      </ReadOnlyFieldList>
    </StoryBlock>
  );
};
