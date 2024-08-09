import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Except } from "type-fest";
import { Box } from "../src/components/Box";
import { ButtonProps, LakeButton } from "../src/components/LakeButton";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { Stack } from "../src/components/Stack";
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
} as Meta<typeof LakeButton>;

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const ButtonWithCounter = (props: Except<ButtonProps, "onPress" | "style">) => {
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

const LoadingButton = (props: Except<ButtonProps, "loading" | "onPress">) => {
  const [loading, setLoading] = useState(false);

  return (
    <LakeButton
      color="live"
      {...props}
      loading={loading}
      onPress={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
      }}
    />
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
  const [endDate, setEndDate] = useState<string | undefined>(undefined);

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
        <Stack alignItems="center" direction="row" space={12}>
          <LoadingButton size="large" mode="primary">
            Refresh
          </LoadingButton>

          <LoadingButton size="small" mode="primary">
            Refresh
          </LoadingButton>

          <LoadingButton size="large" mode="secondary">
            Refresh
          </LoadingButton>

          <LoadingButton size="small" mode="secondary">
            Refresh
          </LoadingButton>

          <LoadingButton size="large" mode="tertiary">
            Refresh
          </LoadingButton>

          <LoadingButton size="small" mode="tertiary">
            Refresh
          </LoadingButton>
        </Stack>

        <Space height={12} />

        <Stack alignItems="center" direction="row" space={12}>
          <LoadingButton
            ariaLabel="Refresh"
            icon="arrow-clockwise-filled"
            size="large"
            mode="primary"
          />

          <LoadingButton
            ariaLabel="Refresh"
            icon="arrow-clockwise-filled"
            size="small"
            mode="primary"
          />

          <LoadingButton
            ariaLabel="Refresh"
            icon="arrow-clockwise-filled"
            size="large"
            mode="secondary"
          />

          <LoadingButton
            ariaLabel="Refresh"
            icon="arrow-clockwise-filled"
            size="small"
            mode="secondary"
          />

          <LoadingButton
            ariaLabel="Refresh"
            icon="arrow-clockwise-filled"
            size="large"
            mode="tertiary"
          />

          <LoadingButton
            ariaLabel="Refresh"
            icon="arrow-clockwise-filled"
            size="small"
            mode="tertiary"
          />
        </Stack>

        <Space height={12} />

        <Stack alignItems="center" direction="row" space={12}>
          <LoadingButton icon="arrow-clockwise-filled" size="large" mode="primary">
            Refresh
          </LoadingButton>

          <LoadingButton icon="arrow-clockwise-filled" size="small" mode="primary">
            Refresh
          </LoadingButton>

          <LoadingButton icon="arrow-clockwise-filled" size="large" mode="secondary">
            Refresh
          </LoadingButton>

          <LoadingButton icon="arrow-clockwise-filled" size="small" mode="secondary">
            Refresh
          </LoadingButton>

          <LoadingButton icon="arrow-clockwise-filled" size="large" mode="tertiary">
            Refresh
          </LoadingButton>

          <LoadingButton icon="arrow-clockwise-filled" size="small" mode="tertiary">
            Refresh
          </LoadingButton>
        </Stack>

        <Space height={12} />

        <Stack alignItems="center" direction="row" space={12}>
          <LoadingButton
            icon="arrow-clockwise-filled"
            iconPosition="end"
            size="large"
            mode="primary"
          >
            Refresh
          </LoadingButton>

          <LoadingButton
            icon="arrow-clockwise-filled"
            iconPosition="end"
            size="small"
            mode="primary"
          >
            Refresh
          </LoadingButton>

          <LoadingButton
            icon="arrow-clockwise-filled"
            iconPosition="end"
            size="large"
            mode="secondary"
          >
            Refresh
          </LoadingButton>

          <LoadingButton
            icon="arrow-clockwise-filled"
            iconPosition="end"
            size="small"
            mode="secondary"
          >
            Refresh
          </LoadingButton>

          <LoadingButton
            icon="arrow-clockwise-filled"
            iconPosition="end"
            size="large"
            mode="tertiary"
          >
            Refresh
          </LoadingButton>

          <LoadingButton
            icon="arrow-clockwise-filled"
            iconPosition="end"
            size="small"
            mode="tertiary"
          >
            Refresh
          </LoadingButton>
        </Stack>
      </StoryPart>

      <StoryPart title="Disabled until">
        <Box direction="row">
          <LakeButton
            mode="secondary"
            size="small"
            onPress={() => {
              const now = Date.now();
              const inTenSeconds = now + 10_000;
              const date = new Date(inTenSeconds);
              setEndDate(date.toISOString());
            }}
          >
            Set for 10s
          </LakeButton>
        </Box>

        <Space height={12} />

        <ButtonWithCounter color="live" disabledUntil={endDate}>
          Disabled until
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

      <StoryPart title="Vertical">
        <Box direction="row" style={styles.buttons}>
          <ButtonWithCounter
            icon="add-circle-regular"
            color="positive"
            direction="column"
            mode="secondary"
          >
            Add
          </ButtonWithCounter>

          <ButtonWithCounter
            icon="delete-regular"
            iconPosition="end"
            color="negative"
            direction="column"
            size="small"
            mode="secondary"
          >
            Remove
          </ButtonWithCounter>
        </Box>
      </StoryPart>
    </StoryBlock>
  );
};
