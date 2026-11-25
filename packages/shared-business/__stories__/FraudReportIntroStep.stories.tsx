import { Meta, StoryObj } from "@storybook/react";
import { WithCurrentColor } from "@swan-io/lake/src/components/WithCurrentColor";
import { noop } from "@swan-io/lake/src/utils/function";
import { StyleSheet } from "react-native";
import { expect, fn } from "storybook/test";
import { IntroStep } from "../src/components/FraudReport/IntroStep";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Fraud report/FraudReportIntroStep",
  component: IntroStep,
} as Meta<typeof IntroStep>;

const styles = StyleSheet.create({
  mobile: {
    maxWidth: 390,
  },
});

export const States = () => (
  <WithCurrentColor variant="live">
    <StoryBlock title="Intro step" description={["What the user reads before starting a report"]}>
      <StoryPart title="Desktop">
        <IntroStep onStart={noop} />
      </StoryPart>

      <StoryPart title="Mobile" style={styles.mobile}>
        <IntroStep onStart={noop} />
      </StoryPart>
    </StoryBlock>
  </WithCurrentColor>
);

export const Start: StoryObj<typeof IntroStep> = {
  args: { onStart: fn() },
  // States runs the a11y checks on the same screen
  parameters: { a11y: { test: "off" } },
  render: args => (
    <WithCurrentColor variant="live">
      <IntroStep {...args} />
    </WithCurrentColor>
  ),
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Start" }));
    await expect(args.onStart).toHaveBeenCalledTimes(1);
  },
};
