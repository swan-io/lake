import { Meta, StoryObj } from "@storybook/react";
import { WithCurrentColor } from "@swan-io/lake/src/components/WithCurrentColor";
import { noop } from "@swan-io/lake/src/utils/function";
import { ComponentProps } from "react";
import { StyleSheet } from "react-native";
import { expect, fn, waitFor, within } from "storybook/test";
import { FraudReportLayout } from "../src/components/FraudReport/FraudReportLayout";
import { IncidentStep } from "../src/components/FraudReport/IncidentStep";
import { DESCRIPTION_MAX_LENGTH } from "../src/utils/fraudReport/validation";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Fraud report/FraudReportIncidentStep",
  component: IncidentStep,
} as Meta<typeof IncidentStep>;

const styles = StyleSheet.create({
  mobile: {
    maxWidth: 390,
  },
});

type Props = ComponentProps<typeof IncidentStep>;

const answers: Props["values"] = {
  reportedReason: "Manipulated",
  reportedTypology: "FakeAdvisor",
  description:
    "Someone called me pretending to be my bank advisor and asked me to approve a payment.",
  discoveredAt: "2026-10-21",
};

const Step = ({ values = {}, loading, onNext = noop, onPrevious = noop }: Partial<Props>) => (
  <FraudReportLayout activeStep="Incident" detailsSteps={[]}>
    <IncidentStep values={values} loading={loading} onNext={onNext} onPrevious={onPrevious} />
  </FraudReportLayout>
);

export const States = () => (
  <WithCurrentColor variant="live">
    <StoryBlock title="Incident step" description={["What happened during the fraud"]}>
      <StoryPart title="No answer yet">
        <Step />
      </StoryPart>

      <StoryPart title="Tricked into paying">
        <Step values={answers} />
      </StoryPart>

      <StoryPart title="Not tricked, no date">
        <Step
          values={{
            reportedReason: "Unauthorized",
            reportedTypology: "Other",
            description: "I don't recognize this card payment.",
          }}
        />
      </StoryPart>

      <StoryPart title="Saving">
        <Step values={answers} loading={true} />
      </StoryPart>

      <StoryPart title="No answer yet, mobile" style={styles.mobile}>
        <Step />
      </StoryPart>

      <StoryPart title="Tricked into paying, mobile" style={styles.mobile}>
        <Step values={answers} />
      </StoryPart>
    </StoryBlock>
  </WithCurrentColor>
);

const render = (args: Props) => (
  <WithCurrentColor variant="live">
    <Step {...args} />
  </WithCurrentColor>
);

export const MissingAnswers: StoryObj<typeof IncidentStep> = {
  args: { values: {}, onNext: fn(), onPrevious: fn() },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await expect(await canvas.findByText("Select Yes or No.")).toBeVisible();
    await expect(await canvas.findByText("Tell us what happened.")).toBeVisible();
    await expect(await canvas.findByText("Select the type of fraud.")).toBeVisible();
    await expect(args.onNext).not.toHaveBeenCalled();
  },
};

export const InvalidAnswers: StoryObj<typeof IncidentStep> = {
  args: {
    values: {
      ...answers,
      description: "a".repeat(DESCRIPTION_MAX_LENGTH + 1),
      discoveredAt: "2999-01-01",
    },
    onNext: fn(),
    onPrevious: fn(),
  },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await expect(await canvas.findByText("Keep this under 2,000 characters.")).toBeVisible();
    await expect(await canvas.findByText("Enter a date that's today or earlier.")).toBeVisible();
    await expect(args.onNext).not.toHaveBeenCalled();
  },
};

export const InvalidDate: StoryObj<typeof IncidentStep> = {
  args: { values: { ...answers, discoveredAt: undefined }, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.type(canvas.getByPlaceholderText("Day"), "31");
    await userEvent.click(canvas.getByRole("button", { name: "Month" }));
    await userEvent.click(within(document.body).getByRole("option", { name: "February" }));
    await userEvent.type(canvas.getByPlaceholderText("Year"), "2026");
    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await expect(await canvas.findByText("Enter a valid date.")).toBeVisible();
    await expect(args.onNext).not.toHaveBeenCalled();
  },
};

export const Answer: StoryObj<typeof IncidentStep> = {
  args: { values: {}, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByText("Yes"));
    await userEvent.type(canvas.getByRole("textbox", { name: "What happened" }), "A fake advisor");
    await userEvent.click(canvas.getByRole("button", { name: "Type of fraud" }));
    await userEvent.click(within(document.body).getByRole("option", { name: "Fake bank advisor" }));
    await userEvent.type(canvas.getByPlaceholderText("Day"), "21");
    await userEvent.click(canvas.getByRole("button", { name: "Month" }));
    await userEvent.click(within(document.body).getByRole("option", { name: "October" }));
    await userEvent.type(canvas.getByPlaceholderText("Year"), "2026");
    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await waitFor(() => expect(args.onNext).toHaveBeenCalledTimes(1));
    await expect(args.onNext).toHaveBeenCalledWith({
      reportedReason: "Manipulated",
      reportedTypology: "FakeAdvisor",
      description: "A fake advisor",
      discoveredAt: "2026-10-21",
    });
  },
};

export const PreviousAnswers: StoryObj<typeof IncidentStep> = {
  args: { values: answers, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByText("No"));
    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await waitFor(() => expect(args.onNext).toHaveBeenCalledTimes(1));
    await expect(args.onNext).toHaveBeenCalledWith({ ...answers, reportedReason: "Unauthorized" });
  },
};

export const Previous: StoryObj<typeof IncidentStep> = {
  args: { values: {}, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Previous" }));

    await expect(args.onPrevious).toHaveBeenCalledTimes(1);
    await expect(args.onNext).not.toHaveBeenCalled();
    await expect(canvas.queryByText("Tell us what happened.")).toBeNull();
  },
};

export const EmptiedDate: StoryObj<typeof IncidentStep> = {
  args: { values: { ...answers, discoveredAt: undefined }, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.type(canvas.getByPlaceholderText("Day"), "21");
    await userEvent.click(canvas.getByRole("button", { name: "Month" }));
    await userEvent.click(within(document.body).getByRole("option", { name: "October" }));
    await userEvent.type(canvas.getByPlaceholderText("Year"), "2026");
    await userEvent.clear(canvas.getByPlaceholderText("Day"));

    await expect(await canvas.findByText("Enter a valid date.")).toBeVisible();

    await userEvent.clear(canvas.getByPlaceholderText("Year"));

    await waitFor(() => expect(canvas.queryByText("Enter a valid date.")).toBeNull());

    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await waitFor(() => expect(args.onNext).toHaveBeenCalledTimes(1));
    await expect(args.onNext).toHaveBeenCalledWith({ ...answers, discoveredAt: undefined });
  },
};

export const ClearedSavedDate: StoryObj<typeof IncidentStep> = {
  args: { values: answers, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.clear(canvas.getByPlaceholderText("Day"));
    await userEvent.clear(canvas.getByPlaceholderText("Year"));
    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await waitFor(() => expect(args.onNext).toHaveBeenCalledTimes(1));
    await expect(args.onNext).toHaveBeenCalledWith({ ...answers, discoveredAt: undefined });
  },
};
