import { Meta, StoryObj } from "@storybook/react";
import { WithCurrentColor } from "@swan-io/lake/src/components/WithCurrentColor";
import { noop } from "@swan-io/lake/src/utils/function";
import { ComponentProps } from "react";
import { StyleSheet, View } from "react-native";
import { expect, fn, waitFor, within } from "storybook/test";
import { CardDetailsStep } from "../src/components/FraudReport/CardDetailsStep";
import { FraudReportLayout } from "../src/components/FraudReport/FraudReportLayout";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Fraud report/FraudReportCardDetailsStep",
  component: CardDetailsStep,
} as Meta<typeof CardDetailsStep>;

const styles = StyleSheet.create({
  mobile: {
    maxWidth: 390,
  },
});

type Props = ComponentProps<typeof CardDetailsStep>;

const answers: Props["values"] = {
  isLostOrStolen: true,
  lostOrStolenNoticedAt: "2026-10-21",
  hasContactedMerchant: true,
  hasFiledPoliceComplaint: true,
};

const Step = ({ values = {}, loading, onNext = noop, onPrevious = noop }: Partial<Props>) => (
  <FraudReportLayout activeStep="Card" detailsSteps={["Card"]}>
    <CardDetailsStep values={values} loading={loading} onNext={onNext} onPrevious={onPrevious} />
  </FraudReportLayout>
);

export const States: StoryObj<typeof CardDetailsStep> = {
  render: () => (
    <WithCurrentColor variant="live">
      <StoryBlock title="Card details step" description={["Card status and actions taken"]}>
        <StoryPart title="Date in the future">
          <View testID="dateInFuture">
            <Step values={{ ...answers, lostOrStolenNoticedAt: "2999-01-01" }} />
          </View>
        </StoryPart>

        <StoryPart title="No answer yet">
          <Step />
        </StoryPart>

        <StoryPart title="Lost or stolen">
          <Step values={answers} />
        </StoryPart>

        <StoryPart title="Not lost or stolen">
          <Step values={{ isLostOrStolen: false }} />
        </StoryPart>

        <StoryPart title="Saving">
          <Step values={answers} loading={true} />
        </StoryPart>

        <StoryPart title="No answer yet, mobile" style={styles.mobile}>
          <Step />
        </StoryPart>

        <StoryPart title="Lost or stolen, mobile" style={styles.mobile}>
          <Step values={answers} />
        </StoryPart>
      </StoryBlock>
    </WithCurrentColor>
  ),
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      within(canvas.getByTestId("dateInFuture")).getByRole("button", { name: "Continue" }),
    );

    await canvas.findByText("Enter a date that's today or earlier.");
  },
};

const render = (args: Props) => (
  <WithCurrentColor variant="live">
    <Step {...args} />
  </WithCurrentColor>
);

export const LostOrStolen: StoryObj<typeof CardDetailsStep> = {
  args: { values: {}, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.queryByText("When did you first notice a card was missing?")).toBeNull();

    await userEvent.click(canvas.getByText("Yes"));

    await expect(
      await canvas.findByText("When did you first notice a card was missing?"),
    ).toBeVisible();
    await expect(canvas.getByText("If you haven't already, block your cards now.")).toBeVisible();

    await userEvent.click(canvas.getByText("No"));

    await waitFor(() =>
      expect(canvas.queryByText("When did you first notice a card was missing?")).toBeNull(),
    );
    await expect(canvas.queryByText("If you haven't already, block your cards now.")).toBeNull();
  },
};

export const DateInFuture: StoryObj<typeof CardDetailsStep> = {
  args: {
    values: { isLostOrStolen: true, lostOrStolenNoticedAt: "2999-01-01" },
    onNext: fn(),
    onPrevious: fn(),
  },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await expect(await canvas.findByText("Enter a date that's today or earlier.")).toBeVisible();
    await expect(args.onNext).not.toHaveBeenCalled();
  },
};

export const InvalidDate: StoryObj<typeof CardDetailsStep> = {
  args: { values: { isLostOrStolen: true }, onNext: fn(), onPrevious: fn() },
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

export const Answer: StoryObj<typeof CardDetailsStep> = {
  args: { values: {}, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByText("Yes"));
    await userEvent.type(await canvas.findByPlaceholderText("Day"), "21");
    await userEvent.click(canvas.getByRole("button", { name: "Month" }));
    await userEvent.click(within(document.body).getByRole("option", { name: "October" }));
    await userEvent.type(canvas.getByPlaceholderText("Year"), "2026");

    const actions = canvas.getByRole("button", { name: /Select all that apply/ });
    await userEvent.click(actions);
    await userEvent.click(await within(document.body).findByText("Merchant"));
    await userEvent.click(actions);
    await userEvent.click(await within(document.body).findByText("Police"));

    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await waitFor(() => expect(args.onNext).toHaveBeenCalledTimes(1));
    await expect(args.onNext).toHaveBeenCalledWith({
      isLostOrStolen: true,
      lostOrStolenNoticedAt: "2026-10-21",
      hasContactedMerchant: true,
      hasFiledPoliceComplaint: true,
    });
  },
};

export const NotLostOrStolen: StoryObj<typeof CardDetailsStep> = {
  args: {
    values: { ...answers, lostOrStolenNoticedAt: "2999-01-01" },
    onNext: fn(),
    onPrevious: fn(),
  },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByText("No"));
    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await waitFor(() => expect(args.onNext).toHaveBeenCalledTimes(1));
    await expect(args.onNext).toHaveBeenCalledWith({
      isLostOrStolen: false,
      lostOrStolenNoticedAt: undefined,
      hasContactedMerchant: true,
      hasFiledPoliceComplaint: true,
    });
  },
};

export const RemoveAction: StoryObj<typeof CardDetailsStep> = {
  args: { values: answers, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getAllByRole("button", { name: "dismiss" })[0] as HTMLElement);
    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await waitFor(() => expect(args.onNext).toHaveBeenCalledTimes(1));
    await expect(args.onNext).toHaveBeenCalledWith({
      ...answers,
      hasContactedMerchant: undefined,
    });
  },
};

export const Previous: StoryObj<typeof CardDetailsStep> = {
  args: { values: {}, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Previous" }));

    await expect(args.onPrevious).toHaveBeenCalledTimes(1);
    await expect(args.onNext).not.toHaveBeenCalled();
  },
};
