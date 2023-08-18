import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Box } from "../src/components/Box";
import { CopyButtonProps, LakeCopyButton } from "../src/components/LakeCopyButton";
import { LakeLabel } from "../src/components/LakeLabel";
import { LakeTextInput } from "../src/components/LakeTextInput";
import { Space } from "../src/components/Space";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  inputPart: {
    maxWidth: 400,
  },
});

export default {
  title: "Interactivity/CopyButton",
  component: LakeCopyButton,
  args: {
    valueToCopy: "Helloworld",
    copyText: "Copy Helloworld",
    copiedText: "Copied Helloworld!",
  },
} as Meta<typeof LakeCopyButton>;

type StoryArgs = Pick<CopyButtonProps, "size" | "valueToCopy" | "copyText" | "copiedText">;

export const Variations = ({ size, valueToCopy, copyText, copiedText }: StoryArgs) => {
  const [pastedValue, setPastedValue] = useState("");
  return (
    <StoryBlock title="CopyButton">
      <StoryPart title="Sizes">
        <Box direction="row" alignItems="start">
          <LakeLabel
            label={`Choosen size (${size})`}
            render={() => (
              <LakeCopyButton
                size={size}
                copyText={copyText}
                copiedText={copiedText}
                valueToCopy={valueToCopy}
              />
            )}
          />

          <Space width={32} />

          <LakeLabel
            label="Size 16"
            render={() => (
              <LakeCopyButton
                size={16}
                copyText={copyText}
                copiedText={copiedText}
                valueToCopy={valueToCopy}
              />
            )}
          />

          <Space width={32} />

          <LakeLabel
            label="Size 21"
            render={() => (
              <LakeCopyButton
                size={21}
                copyText={copyText}
                copiedText={copiedText}
                valueToCopy={valueToCopy}
              />
            )}
          />

          <Space width={32} />

          <LakeLabel
            label="Size 26"
            render={() => (
              <LakeCopyButton
                size={26}
                copyText={copyText}
                copiedText={copiedText}
                valueToCopy={valueToCopy}
              />
            )}
          />
        </Box>
      </StoryPart>

      <StoryPart
        title="You can test if value is well copied by paste it in this input"
        style={styles.inputPart}
      >
        <LakeLabel
          label="Paste here"
          render={() => (
            <LakeTextInput
              value={pastedValue}
              onChange={event => setPastedValue(event.currentTarget.value)}
            />
          )}
        />
      </StoryPart>
    </StoryBlock>
  );
};
