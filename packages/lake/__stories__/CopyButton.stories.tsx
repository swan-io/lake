import { ComponentMeta } from "@storybook/react";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Box } from "../src/components/Box";
import { copyButtondefaultSize, LakeCopyButton } from "../src/components/LakeCopyButton";
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
} as ComponentMeta<typeof LakeCopyButton>;

const getTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${hours}:${minutes}:${seconds}`;
};

export const Variations = () => {
  const [pastedValue, setPastedValue] = useState("");
  const [valueToCopy, setValueToCopy] = useState(() => getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setValueToCopy(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StoryBlock title="CopyButton">
      <StoryPart title="Sizes">
        <Box direction="row" alignItems="start">
          <LakeLabel
            label={`Default size (${copyButtondefaultSize})`}
            render={() => (
              <LakeCopyButton
                copyText="Copy"
                copiedText={`Copied ${valueToCopy}`}
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
                copyText="Copy"
                copiedText={`Copied ${valueToCopy}`}
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
                copyText="Copy"
                copiedText={`Copied ${valueToCopy}`}
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
                copyText="Copy"
                copiedText={`Copied ${valueToCopy}`}
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
