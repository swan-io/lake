import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Box } from "../src/components/Box";
import { ButtonProps, LakeButton } from "../src/components/LakeButton";
import { LakeText } from "../src/components/LakeText";
import { ColorVariants, colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  buttons: {
    flexWrap: "wrap",
  },
  buttonWrapper: {
    marginRight: 32,
    marginBottom: 16,
  },
  button: {
    minWidth: 200,
  },
  countValue: {
    width: 24,
  },
});

export default {
  title: "Interactivity/Button",
  component: LakeButton,
} as ComponentMeta<typeof LakeButton>;

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const ButtonWithCounter = ({ ...props }: Omit<ButtonProps, "onPress" | "style">) => {
  const [counter, setCounter] = useState(0);

  return (
    <Box direction="row" alignItems="center" style={styles.buttonWrapper}>
      <LakeButton {...props} style={styles.button} onPress={() => setCounter(c => c + 1)} />

      <LakeText align="right" style={styles.countValue}>
        {counter}
      </LakeText>
    </Box>
  );
};

export const Colors = () => {
  return (
    <StoryBlock title="Button colors">
      <StoryPart title="Primary">
        <Box direction="row" style={styles.buttons}>
          {Object.keys(colors).map(color => (
            <ButtonWithCounter key={color} mode="primary" color={color as ColorVariants}>
              {capitalize(color)}
            </ButtonWithCounter>
          ))}
        </Box>
      </StoryPart>

      <StoryPart title="Secondary">
        <Box direction="row" style={styles.buttons}>
          {Object.keys(colors).map(color => (
            <ButtonWithCounter mode="secondary" key={color} color={color as ColorVariants}>
              {capitalize(color)}
            </ButtonWithCounter>
          ))}
        </Box>
      </StoryPart>

      <StoryPart title="Tertiary">
        <Box direction="row" style={styles.buttons}>
          {Object.keys(colors).map(color => (
            <ButtonWithCounter mode="tertiary" key={color} color={color as ColorVariants}>
              {capitalize(color)}
            </ButtonWithCounter>
          ))}
        </Box>
      </StoryPart>
    </StoryBlock>
  );
};

export const ButtonStates = () => {
  return (
    <StoryBlock title="Button states">
      <StoryPart title="Small">
        <ButtonWithCounter size="small" color="live">
          Small button
        </ButtonWithCounter>
      </StoryPart>

      <StoryPart title="Disabled">
        <ButtonWithCounter disabled={true} color="live">
          Disabled
        </ButtonWithCounter>
      </StoryPart>

      <StoryPart title="Loading">
        <ButtonWithCounter loading={true} color="live">
          Loading
        </ButtonWithCounter>
      </StoryPart>

      <StoryPart title="With pill">
        <ButtonWithCounter pill={true} color="live">
          Pill
        </ButtonWithCounter>
      </StoryPart>

      <StoryPart title="With icon">
        <Box direction="row" style={styles.buttons}>
          <ButtonWithCounter icon="add-circle-filled" color="positive">
            Add
          </ButtonWithCounter>

          <ButtonWithCounter icon="delete-filled" iconPosition="end" color="negative">
            Remove
          </ButtonWithCounter>
        </Box>
      </StoryPart>
    </StoryBlock>
  );
};
