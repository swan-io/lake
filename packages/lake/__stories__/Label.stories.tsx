import { ComponentMeta } from "@storybook/react";
import { StyleSheet, Text, View } from "react-native";
import { Grid } from "../src/components/Grid";
import { LakeCopyButton } from "../src/components/LakeCopyButton";
import { LakeLabel } from "../src/components/LakeLabel";
import { LakeTextInput } from "../src/components/LakeTextInput";
import { Space } from "../src/components/Space";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  block: {
    height: 50,
    backgroundColor: colors.gray[100],
    borderRadius: 5,
  },
});

export default {
  title: "Forms/Label",
  component: LakeLabel,
} as ComponentMeta<typeof LakeLabel>;

const label = "Creditor IBAN";
export const ReadOnly = () => {
  return (
    <StoryBlock title="Readonly label">
      <StoryPart title="Color variations">
        <Grid numColumns={5} horizontalSpace={8} verticalSpace={8}>
          <LakeLabel label="Default" render={id => <View nativeID={id} style={styles.block} />} />

          <LakeLabel
            label="Gray"
            readOnly={true}
            color="gray"
            render={id => <View nativeID={id} style={styles.block} />}
          />

          <LakeLabel
            label="Live"
            readOnly={true}
            color="live"
            render={id => <View nativeID={id} style={styles.block} />}
          />

          <LakeLabel
            label="Sandbox"
            readOnly={true}
            color="sandbox"
            render={id => <View nativeID={id} style={styles.block} />}
          />

          <LakeLabel
            label="Positive"
            readOnly={true}
            color="positive"
            render={id => <View nativeID={id} style={styles.block} />}
          />

          <LakeLabel
            label="Warning"
            readOnly={true}
            color="warning"
            render={id => <View nativeID={id} style={styles.block} />}
          />

          <LakeLabel
            label="Negative"
            readOnly={true}
            color="negative"
            render={id => <View nativeID={id} style={styles.block} />}
          />

          <LakeLabel
            label="Current"
            readOnly={true}
            color="current"
            render={id => <View nativeID={id} style={styles.block} />}
          />

          <LakeLabel
            label="Partner"
            readOnly={true}
            color="partner"
            render={id => <View nativeID={id} style={styles.block} />}
          />

          <LakeLabel
            label="Swan"
            readOnly={true}
            color="swan"
            render={id => <View nativeID={id} style={styles.block} />}
          />

          <LakeLabel
            label="Shakespear"
            readOnly={true}
            color="shakespear"
            render={id => <View nativeID={id} style={styles.block} />}
          />

          <LakeLabel
            label="DarkPink"
            readOnly={true}
            color="darkPink"
            render={id => <View nativeID={id} style={styles.block} />}
          />

          <LakeLabel
            label="Sunglow"
            readOnly={true}
            color="sunglow"
            render={id => <View nativeID={id} style={styles.block} />}
          />

          <LakeLabel
            label="MediumSladeBlue"
            readOnly={true}
            color="mediumSladeBlue"
            render={id => <View nativeID={id} style={styles.block} />}
          />
        </Grid>
      </StoryPart>
    </StoryBlock>
  );
};

export const Types = () => {
  return (
    <StoryBlock title="Types labels">
      <View>
        <StoryPart title="Default">
          <LakeLabel label={label} render={id => <LakeTextInput nativeID={id} />} />
        </StoryPart>

        <StoryPart title="Form">
          <LakeLabel label={label} render={id => <LakeTextInput nativeID={id} />} type="form" />
        </StoryPart>

        <StoryPart title="FormSmall">
          <LakeLabel
            label={label}
            render={id => <LakeTextInput nativeID={id} />}
            type="formSmall"
          />
        </StoryPart>

        <StoryPart title="View">
          <LakeLabel
            label={label}
            render={id => <View nativeID={id} style={styles.block} />}
            type="view"
          />

          <Space height={20} />
        </StoryPart>

        <StoryPart title="ViewSmall">
          <LakeLabel
            label={label}
            render={id => <View nativeID={id} style={styles.block} />}
            type="viewSmall"
          />
        </StoryPart>
      </View>
    </StoryBlock>
  );
};

export const Variations = () => {
  return (
    <StoryBlock title="Variations labels">
      <View>
        <StoryPart title="Optional label">
          <LakeLabel
            label={label}
            render={id => <View nativeID={id} style={styles.block} />}
            optionalLabel="Optional label"
          />
        </StoryPart>

        <Space height={20} />

        <StoryPart title="Extra">
          <LakeLabel
            label={label}
            render={id => <View nativeID={id} style={styles.block} />}
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
            render={id => <View nativeID={id} style={styles.block} />}
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
            render={id => <View nativeID={id} style={styles.block} />}
            actions={<LakeCopyButton valueToCopy={""} copyText={"Copy"} copiedText={"Copied"} />}
          />
        </StoryPart>
      </View>
    </StoryBlock>
  );
};
