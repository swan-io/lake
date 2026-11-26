import { Meta, StoryObj } from "@storybook/react";
import { Box } from "@swan-io/lake/src/components/Box";
import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { Space } from "@swan-io/lake/src/components/Space";
import { WithCurrentColor } from "@swan-io/lake/src/components/WithCurrentColor";
import { noop } from "@swan-io/lake/src/utils/function";
import { ComponentProps } from "react";
import { StyleSheet } from "react-native";
import { expect, fn, waitFor } from "storybook/test";
import { FraudReportLayout } from "../src/components/FraudReport/FraudReportLayout";
import {
  FraudReportTransactionPickerProps,
  TransactionsStep,
} from "../src/components/FraudReport/TransactionsStep";
import { createFakeTransaction } from "../src/utils/fraudReport/fakeApi";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Fraud report/FraudReportTransactionsStep",
  component: TransactionsStep,
} as Meta<typeof TransactionsStep>;

const styles = StyleSheet.create({
  mobile: {
    maxWidth: 390,
  },
});

type Props = ComponentProps<typeof TransactionsStep>;

const rewe = createFakeTransaction("abe8df9b-1877-46ac-8535-ed01d88be739", "Card", {
  executionDate: "2026-11-04T09:12:00.000Z",
  counterparty: "REWE",
  amount: { value: "3010.99", currency: "EUR" },
});

const edeka = createFakeTransaction("1de6ae7d-d05e-4dc0-8ed8-7c98c9849d69", "Transfer", {
  type: "SepaCreditTransferOut",
  executionDate: "2026-05-27T14:30:00.000Z",
  counterparty: "Edeka",
  amount: { value: "657.75", currency: "EUR" },
});

const ikea = createFakeTransaction("79a640cb-6223-423c-8321-4192f73f668b", "Transfer", {
  type: "SepaInstantCreditTransferOut",
  executionDate: "2026-07-26T08:05:00.000Z",
  counterparty: "IKEA",
  amount: { value: "8506.00", currency: "EUR" },
});

const lidl = createFakeTransaction("c3f1a2b4-5d6e-4f70-8a9b-0c1d2e3f4a5b", "Card", {
  executionDate: "2026-10-12T17:45:00.000Z",
  counterparty: "Lidl",
  amount: { value: "9434.69", currency: "EUR" },
});

const selection = [rewe, edeka, ikea];

const PlaceholderPicker = ({
  visible,
  selected,
  onConfirm,
  onClose,
}: FraudReportTransactionPickerProps) =>
  visible ? (
    <Box direction="row">
      <LakeButton size="small" color="current" onPress={() => onConfirm([...selected, lidl, lidl])}>
        Add Lidl
      </LakeButton>

      <Space width={12} />

      <LakeButton size="small" color="current" onPress={() => onConfirm([edeka, lidl])}>
        Keep Edeka and Lidl
      </LakeButton>

      <Space width={12} />

      <LakeButton size="small" color="current" onPress={() => onConfirm([])}>
        Clear selection
      </LakeButton>

      <Space width={12} />

      <LakeButton size="small" mode="secondary" onPress={onClose}>
        Close picker
      </LakeButton>
    </Box>
  ) : null;

const renderPicker = (props: FraudReportTransactionPickerProps) => <PlaceholderPicker {...props} />;

const Step = ({
  values = { transactions: selection },
  loading,
  onNext = noop,
  onPrevious = noop,
}: Partial<Props>) => (
  <FraudReportLayout activeStep="Transactions" detailsSteps={[]}>
    <TransactionsStep
      values={values}
      loading={loading}
      onNext={onNext}
      onPrevious={onPrevious}
      renderPicker={renderPicker}
    />
  </FraudReportLayout>
);

export const States = () => (
  <WithCurrentColor variant="live">
    <StoryBlock title="Transactions step" description={["The transactions the user reports"]}>
      <StoryPart title="Selected transactions">
        <Step />
      </StoryPart>

      <StoryPart title="No transaction selected">
        <Step values={{ transactions: [] }} />
      </StoryPart>

      <StoryPart title="Saving">
        <Step loading={true} />
      </StoryPart>

      <StoryPart title="Selected transactions, mobile" style={styles.mobile}>
        <Step />
      </StoryPart>

      <StoryPart title="No transaction selected, mobile" style={styles.mobile}>
        <Step values={{ transactions: [] }} />
      </StoryPart>
    </StoryBlock>
  </WithCurrentColor>
);

const render = (args: Props) => (
  <WithCurrentColor variant="live">
    <Step {...args} />
  </WithCurrentColor>
);

export const RemoveTransaction: StoryObj<typeof TransactionsStep> = {
  args: { values: { transactions: selection }, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await expect(await canvas.findByText("€12,174.74")).toBeVisible();
    await expect(canvas.getAllByText("3")).toHaveLength(2);

    await userEvent.click(
      canvas.getByRole("button", { name: "Remove IKEA, €8,506.00, 26/07/2026" }),
    );

    await waitFor(() => expect(canvas.queryByText("IKEA")).toBeNull());
    await expect(await canvas.findByText("€3,668.74")).toBeVisible();
    await expect(canvas.getAllByText("2")).toHaveLength(2);

    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await expect(args.onNext).toHaveBeenCalledTimes(1);
    await expect(args.onNext).toHaveBeenCalledWith({ transactions: [rewe, edeka] });
  },
};

export const RemoveLastTransaction: StoryObj<typeof TransactionsStep> = {
  args: { values: { transactions: [rewe] }, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole("button", { name: "Remove REWE, €3,010.99, 04/11/2026" }),
    );

    await expect(await canvas.findByText("No transactions")).toBeVisible();
    await expect(canvas.getByText("Select at least one transaction to continue.")).toBeVisible();
    await expect(canvas.getByRole("button", { name: "Continue" })).toHaveAttribute(
      "aria-disabled",
      "true",
    );

    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await expect(args.onNext).not.toHaveBeenCalled();
  },
};

export const EmptySelection: StoryObj<typeof TransactionsStep> = {
  args: { values: { transactions: [] }, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await expect(await canvas.findByText("No transactions")).toBeVisible();
    await expect(canvas.getByRole("button", { name: "Continue" })).toHaveAttribute(
      "aria-disabled",
      "true",
    );

    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await expect(args.onNext).not.toHaveBeenCalled();
  },
};

export const SelectTransactions: StoryObj<typeof TransactionsStep> = {
  args: { values: { transactions: selection }, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await expect(canvas.queryByRole("button", { name: "Add Lidl" })).toBeNull();

    await userEvent.click(
      canvas.getByRole("button", { name: "Remove IKEA, €8,506.00, 26/07/2026" }),
    );
    await userEvent.click(canvas.getByRole("button", { name: "Select transactions" }));
    await userEvent.click(await canvas.findByRole("button", { name: "Add Lidl" }));

    await expect(await canvas.findByText("Lidl")).toBeVisible();
    await expect(canvas.getAllByText("Lidl")).toHaveLength(1);
    await expect(canvas.queryByRole("button", { name: "Add Lidl" })).toBeNull();

    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await expect(args.onNext).toHaveBeenCalledWith({ transactions: [rewe, edeka, lidl] });
  },
};

export const ReplaceSelection: StoryObj<typeof TransactionsStep> = {
  args: { values: { transactions: selection }, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Select transactions" }));
    await userEvent.click(await canvas.findByRole("button", { name: "Keep Edeka and Lidl" }));

    await waitFor(() => expect(canvas.queryByText("REWE")).toBeNull());
    await expect(canvas.queryByText("IKEA")).toBeNull();
    await expect(await canvas.findByText("€10,092.44")).toBeVisible();

    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await expect(args.onNext).toHaveBeenCalledWith({ transactions: [edeka, lidl] });
  },
};

export const ClearSelection: StoryObj<typeof TransactionsStep> = {
  args: { values: { transactions: selection }, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Select transactions" }));
    await userEvent.click(await canvas.findByRole("button", { name: "Clear selection" }));

    await expect(await canvas.findByText("No transactions")).toBeVisible();
    await expect(canvas.getByRole("button", { name: "Continue" })).toHaveAttribute(
      "aria-disabled",
      "true",
    );

    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await expect(args.onNext).not.toHaveBeenCalled();
  },
};

export const Saving: StoryObj<typeof TransactionsStep> = {
  args: { values: { transactions: selection }, loading: true, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ canvas, userEvent }) => {
    const remove = canvas.getByRole("button", { name: "Remove IKEA, €8,506.00, 26/07/2026" });

    await expect(remove).toHaveAttribute("aria-disabled", "true");
    await expect(canvas.getByRole("button", { name: "Select transactions" })).toHaveAttribute(
      "aria-disabled",
      "true",
    );

    await userEvent.click(remove);

    await expect(canvas.getByText("IKEA")).toBeVisible();
  },
};

export const ClosePicker: StoryObj<typeof TransactionsStep> = {
  args: { values: { transactions: selection }, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Select transactions" }));
    await userEvent.click(await canvas.findByRole("button", { name: "Close picker" }));

    await waitFor(() => expect(canvas.queryByRole("button", { name: "Close picker" })).toBeNull());

    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await expect(args.onNext).toHaveBeenCalledWith({ transactions: selection });
  },
};

export const Previous: StoryObj<typeof TransactionsStep> = {
  args: { values: { transactions: selection }, onNext: fn(), onPrevious: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Previous" }));

    await expect(args.onPrevious).toHaveBeenCalledTimes(1);
    await expect(args.onNext).not.toHaveBeenCalled();
  },
};
