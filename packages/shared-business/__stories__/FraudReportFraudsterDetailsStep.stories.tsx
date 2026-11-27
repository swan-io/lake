import { Meta, StoryObj } from "@storybook/react";
import { WithCurrentColor } from "@swan-io/lake/src/components/WithCurrentColor";
import { noop } from "@swan-io/lake/src/utils/function";
import { ComponentProps } from "react";
import { StyleSheet } from "react-native";
import { expect, fn, waitFor, within } from "storybook/test";
import { FraudReportLayout } from "../src/components/FraudReport/FraudReportLayout";
import { FraudsterDetailsStep } from "../src/components/FraudReport/FraudsterDetailsStep";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Fraud report/FraudReportFraudsterDetailsStep",
  component: FraudsterDetailsStep,
} as Meta<typeof FraudsterDetailsStep>;

const styles = StyleSheet.create({
  mobile: {
    maxWidth: 390,
  },
});

type Props = ComponentProps<typeof FraudsterDetailsStep>;

const answers: Props["values"] = {
  fraudsterChannels: ["Phone"],
  sharedInformationWithFraudster: ["SwanPasscode"],
};

const Step = ({ values = {}, loading, onNext = noop, onPrevious = noop }: Partial<Props>) => (
  <FraudReportLayout activeStep="Fraudster" detailsSteps={["Fraudster"]}>
    <FraudsterDetailsStep
      values={values}
      loading={loading}
      onNext={onNext}
      onPrevious={onPrevious}
    />
  </FraudReportLayout>
);

export const States: StoryObj<typeof FraudsterDetailsStep> = {
  render: () => (
    <WithCurrentColor variant="live">
      <StoryBlock title="Fraudster details step" description={["How the fraudster acted"]}>
        <StoryPart title="No answer yet">
          <Step />
        </StoryPart>

        <StoryPart title="Shared information">
          <Step values={answers} />
        </StoryPart>

        <StoryPart title="Nothing shared">
          <Step
            values={{ fraudsterChannels: ["Email"], sharedInformationWithFraudster: ["None"] }}
          />
        </StoryPart>

        <StoryPart title="Saving">
          <Step values={answers} loading={true} />
        </StoryPart>

        <StoryPart title="No answer yet, mobile" style={styles.mobile}>
          <Step />
        </StoryPart>

        <StoryPart title="Shared information, mobile" style={styles.mobile}>
          <Step values={answers} />
        </StoryPart>
      </StoryBlock>
    </WithCurrentColor>
  ),
};

const render = (args: Props) => (
  <WithCurrentColor variant="live">
    <Step {...args} />
  </WithCurrentColor>
);

export const ShowWhatWasShared: StoryObj<typeof FraudsterDetailsStep> = {
  args: { values: {}, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.queryByText("What did you share?")).toBeNull();

    await userEvent.click(canvas.getByText("Yes"));

    await expect(await canvas.findByText("What did you share?")).toBeVisible();

    await userEvent.click(canvas.getByText("No"));

    await waitFor(() => expect(canvas.queryByText("What did you share?")).toBeNull());
  },
};

export const Answer: StoryObj<typeof FraudsterDetailsStep> = {
  args: { values: {}, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    const list = within(document.body);

    await userEvent.click(canvas.getByRole("button", { name: /How did they contact you\?/ }));
    await userEvent.click(await list.findByText("Phone call"));

    await userEvent.click(canvas.getByText("Yes"));
    await userEvent.click(await canvas.findByRole("button", { name: /What did you share\?/ }));
    await userEvent.click(await list.findByText("Passcode used to confirm payments"));

    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await waitFor(() => expect(args.onNext).toHaveBeenCalledTimes(1));
    await expect(args.onNext).toHaveBeenCalledWith({
      fraudsterChannels: ["Phone"],
      sharedInformationWithFraudster: ["SwanPasscode"],
    });
  },
};

export const NothingShared: StoryObj<typeof FraudsterDetailsStep> = {
  args: { values: answers, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByText("No"));
    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await waitFor(() => expect(args.onNext).toHaveBeenCalledTimes(1));
    await expect(args.onNext).toHaveBeenCalledWith({
      fraudsterChannels: ["Phone"],
      sharedInformationWithFraudster: ["None"],
    });
  },
};

export const NoAnswer: StoryObj<typeof FraudsterDetailsStep> = {
  args: { values: {}, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await waitFor(() => expect(args.onNext).toHaveBeenCalledTimes(1));
    await expect(args.onNext).toHaveBeenCalledWith({
      fraudsterChannels: undefined,
      sharedInformationWithFraudster: undefined,
    });
  },
};

export const Previous: StoryObj<typeof FraudsterDetailsStep> = {
  args: { values: {}, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Previous" }));

    await expect(args.onPrevious).toHaveBeenCalledTimes(1);
    await expect(args.onNext).not.toHaveBeenCalled();
  },
};
