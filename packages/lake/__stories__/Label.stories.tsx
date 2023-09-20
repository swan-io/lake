import { Meta } from "@storybook/react";
import { Text } from "react-native";
import { Grid } from "../src/components/Grid";
import { LakeCopyButton } from "../src/components/LakeCopyButton";
import { LakeLabel } from "../src/components/LakeLabel";
import { LakeTextInput } from "../src/components/LakeTextInput";
import { Space } from "../src/components/Space";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Forms/Label",
  component: LakeLabel,
} as Meta<typeof LakeLabel>;

const label = "Creditor IBAN";
export const ReadOnly = () => {
  return (
    <StoryBlock title="Readonly label">
      <StoryPart title="Color variations">
        <Grid numColumns={5} horizontalSpace={8} verticalSpace={8}>
          <LakeLabel label="Default" render={id => <LakeTextInput id={id} disabled={true} />} />

          <LakeLabel
            label="Gray"
            readOnly={true}
            color="gray"
            render={id => <LakeTextInput id={id} disabled={true} />}
          />

          <LakeLabel
            label="Live"
            readOnly={true}
            color="live"
            render={id => <LakeTextInput id={id} disabled={true} />}
          />

          <LakeLabel
            label="Sandbox"
            readOnly={true}
            color="sandbox"
            render={id => <LakeTextInput id={id} disabled={true} />}
          />

          <LakeLabel
            label="Positive"
            readOnly={true}
            color="positive"
            render={id => <LakeTextInput id={id} disabled={true} />}
          />

          <LakeLabel
            label="Warning"
            readOnly={true}
            color="warning"
            render={id => <LakeTextInput id={id} disabled={true} />}
          />

          <LakeLabel
            label="Negative"
            readOnly={true}
            color="negative"
            render={id => <LakeTextInput id={id} disabled={true} />}
          />

          <LakeLabel
            label="Current"
            readOnly={true}
            color="current"
            render={id => <LakeTextInput id={id} disabled={true} />}
          />

          <LakeLabel
            label="Partner"
            readOnly={true}
            color="partner"
            render={id => <LakeTextInput id={id} disabled={true} />}
          />

          <LakeLabel
            label="Swan"
            readOnly={true}
            color="swan"
            render={id => <LakeTextInput id={id} disabled={true} />}
          />

          <LakeLabel
            label="Shakespear"
            readOnly={true}
            color="shakespear"
            render={id => <LakeTextInput id={id} disabled={true} />}
          />

          <LakeLabel
            label="DarkPink"
            readOnly={true}
            color="darkPink"
            render={id => <LakeTextInput id={id} disabled={true} />}
          />

          <LakeLabel
            label="Sunglow"
            readOnly={true}
            color="sunglow"
            render={id => <LakeTextInput id={id} disabled={true} />}
          />

          <LakeLabel
            label="MediumSladeBlue"
            readOnly={true}
            color="mediumSladeBlue"
            render={id => <LakeTextInput id={id} disabled={true} />}
          />
        </Grid>
      </StoryPart>
    </StoryBlock>
  );
};

export const Types = () => {
  return (
    <StoryBlock title="Types labels">
      <StoryPart title="Default">
        <LakeLabel label={label} render={id => <LakeTextInput id={id} />} />
      </StoryPart>

      <StoryPart title="Form">
        <LakeLabel label={label} render={id => <LakeTextInput id={id} />} type="form" />
      </StoryPart>

      <StoryPart title="Form Small">
        <LakeLabel label={label} render={id => <LakeTextInput id={id} />} type="formSmall" />
      </StoryPart>

      <StoryPart title="View">
        <LakeLabel
          label={label}
          render={id => <LakeTextInput id={id} disabled={true} />}
          type="view"
        />

        <Space height={20} />
      </StoryPart>

      <StoryPart title="View Small">
        <LakeLabel
          label={label}
          render={id => <LakeTextInput id={id} disabled={true} />}
          type="viewSmall"
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const Variations = () => {
  return (
    <StoryBlock title="Variations labels">
      <StoryPart title="Optional label">
        <LakeLabel
          label={label}
          render={id => <LakeTextInput id={id} disabled={true} />}
          optionalLabel="Optional label"
        />
      </StoryPart>

      <Space height={20} />

      <StoryPart title="Extra">
        <LakeLabel
          label={label}
          render={id => <LakeTextInput id={id} disabled={true} />}
          extra={() => (
            <>
              <Space width={4} />
              <Text>Extra</Text>
            </>
          )}
        />
      </StoryPart>

      <Space height={20} />

      <StoryPart title="Help">
        <LakeLabel
          label={label}
          render={id => <LakeTextInput id={id} disabled={true} />}
          help={
            <>
              <Space width={4} />
              <Text>Help</Text>
            </>
          }
        />
      </StoryPart>

      <Space height={20} />

      <StoryPart title="With actions">
        <LakeLabel
          label={label}
          render={id => <LakeTextInput id={id} disabled={true} />}
          actions={<LakeCopyButton valueToCopy={""} copyText={"Copy"} copiedText={"Copied"} />}
        />
      </StoryPart>
    </StoryBlock>
  );
};
