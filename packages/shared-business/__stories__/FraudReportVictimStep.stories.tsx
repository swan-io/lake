import { Option } from "@bloodyowl/boxed";
import { Meta, StoryObj } from "@storybook/react";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { Space } from "@swan-io/lake/src/components/Space";
import { WithCurrentColor } from "@swan-io/lake/src/components/WithCurrentColor";
import { noop } from "@swan-io/lake/src/utils/function";
import { ComponentProps, useState } from "react";
import { StyleSheet } from "react-native";
import { expect, fn, waitFor, within } from "storybook/test";
import { FraudReportLayout } from "../src/components/FraudReport/FraudReportLayout";
import { VictimStep } from "../src/components/FraudReport/VictimStep";
import type { FraudReportTransaction } from "../src/utils/fraudReport/types";
import { FraudReportAccountMembership } from "../src/utils/fraudReport/victim";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Fraud report/FraudReportVictimStep",
  component: VictimStep,
} as Meta<typeof VictimStep>;

const styles = StyleSheet.create({
  mobile: {
    maxWidth: 390,
  },
});

const julia: FraudReportAccountMembership = {
  id: "member-1",
  name: "Julia Fox",
  phoneNumber: "+33 6 12 34 56 78",
};

const accountMemberships: FraudReportAccountMembership[] = [
  julia,
  { id: "member-2", name: "Nicolas Saison", phoneNumber: "+33 6 98 76 54 32" },
  { id: "member-3", name: "Ada Lovelace" },
];

const asMember = Option.Some(julia);
const asOperator = Option.None<FraudReportAccountMembership>();

const Step = ({
  currentAccountMembership,
  victimAccountMembershipId,
  onNext = noop,
}: {
  currentAccountMembership: Option<FraudReportAccountMembership>;
  victimAccountMembershipId?: string;
  onNext?: ComponentProps<typeof VictimStep>["onNext"];
}) => (
  <FraudReportLayout activeStep="Victim" detailsSteps={[]}>
    <VictimStep
      currentAccountMembership={currentAccountMembership}
      accountMemberships={accountMemberships}
      transactions={[]}
      values={{ victimAccountMembershipId }}
      onNext={onNext}
    />
  </FraudReportLayout>
);

const InteractivePart = ({
  title,
  currentAccountMembership,
}: {
  title: string;
  currentAccountMembership: Option<FraudReportAccountMembership>;
}) => {
  const [sent, setSent] = useState<string>();

  return (
    <StoryPart title={title}>
      <Step
        currentAccountMembership={currentAccountMembership}
        onNext={values => setSent(JSON.stringify(values))}
      />
      <Space height={16} />
      <LakeText>onNext: {sent ?? "not called"}</LakeText>
    </StoryPart>
  );
};

export const Interactive = () => (
  <WithCurrentColor variant="live">
    <StoryBlock title="Victim step" description={["Who the fraud was committed against"]}>
      <InteractivePart title="Member" currentAccountMembership={asMember} />
      <InteractivePart title="Operator" currentAccountMembership={asOperator} />
    </StoryBlock>
  </WithCurrentColor>
);

export const States = () => (
  <WithCurrentColor variant="live">
    <StoryBlock title="Victim step" description={["Victim step states"]}>
      <StoryPart title="Member, no answer yet">
        <Step currentAccountMembership={asMember} />
      </StoryPart>

      <StoryPart title="Member, reporting for themselves">
        <Step currentAccountMembership={asMember} victimAccountMembershipId="member-1" />
      </StoryPart>

      <StoryPart title="Member, reporting for another member">
        <Step currentAccountMembership={asMember} victimAccountMembershipId="member-2" />
      </StoryPart>

      <StoryPart title="Member, previous victim no longer listed">
        <Step currentAccountMembership={asMember} victimAccountMembershipId="member-9" />
      </StoryPart>

      <StoryPart title="Operator, no member picked">
        <Step currentAccountMembership={asOperator} />
      </StoryPart>

      <StoryPart title="Operator, a member picked">
        <Step currentAccountMembership={asOperator} victimAccountMembershipId="member-3" />
      </StoryPart>

      <StoryPart title="Member, reporting for themselves, mobile" style={styles.mobile}>
        <Step currentAccountMembership={asMember} victimAccountMembershipId="member-1" />
      </StoryPart>

      <StoryPart title="Member, reporting for another member, mobile" style={styles.mobile}>
        <Step currentAccountMembership={asMember} victimAccountMembershipId="member-2" />
      </StoryPart>

      <StoryPart title="Operator, a member picked, mobile" style={styles.mobile}>
        <Step currentAccountMembership={asOperator} victimAccountMembershipId="member-3" />
      </StoryPart>
    </StoryBlock>
  </WithCurrentColor>
);

type Props = ComponentProps<typeof VictimStep>;

const card: FraudReportTransaction = { id: "card-1", rail: "Card" };
const transfer: FraudReportTransaction = { id: "transfer-1", rail: "Transfer" };

const render = (args: Props) => (
  <WithCurrentColor variant="live">
    <FraudReportLayout activeStep="Victim" detailsSteps={[]}>
      <VictimStep {...args} />
    </FraudReportLayout>
  </WithCurrentColor>
);

const reportedForJulia = {
  currentAccountMembership: asMember,
  accountMemberships,
  values: { victimAccountMembershipId: "member-1" },
};

const pickNicolas = async ({
  canvas,
  userEvent,
}: {
  canvas: ReturnType<typeof within>;
  userEvent: { click: (element: Element) => Promise<void> };
}) => {
  await userEvent.click(canvas.getByText("No"));
  await userEvent.click(
    await canvas.findByRole("button", { name: /For whom are you reporting for\?/ }),
  );
  await userEvent.click(within(document.body).getByRole("option", { name: /Nicolas Saison/ }));
};

export const ChangeVictim: StoryObj<typeof VictimStep> = {
  args: { ...reportedForJulia, transactions: [card, transfer], onNext: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await pickNicolas({ canvas, userEvent });
    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    const modal = within(document.body);
    await expect(await modal.findByText("Change the victim?")).toBeVisible();
    await expect(args.onNext).not.toHaveBeenCalled();

    await userEvent.click(modal.getByRole("button", { name: "Change victim" }));

    await expect(args.onNext).toHaveBeenCalledWith({ victimAccountMembershipId: "member-2" });
  },
};

export const ChangeVictimCardsOnly: StoryObj<typeof VictimStep> = {
  args: { ...reportedForJulia, transactions: [card], onNext: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ canvas, userEvent }) => {
    await pickNicolas({ canvas, userEvent });
    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    const modal = within(document.body);
    await expect(
      await modal.findByText(
        "The card transactions you selected belong to the previous victim and will be removed from this report.",
      ),
    ).toBeVisible();
    await expect(modal.queryByText(/Transfers stay selected/)).toBeNull();
  },
};

export const CancelVictimChange: StoryObj<typeof VictimStep> = {
  args: { ...reportedForJulia, transactions: [card, transfer], onNext: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await pickNicolas({ canvas, userEvent });
    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    const modal = within(document.body);
    await userEvent.click(await modal.findByRole("button", { name: "Cancel" }));

    await waitFor(() =>
      expect(modal.queryByRole("heading", { name: "Change the victim?" })).toBeNull(),
    );
    await expect(await canvas.findByText("Julia Fox")).toBeVisible();
    await expect(args.onNext).not.toHaveBeenCalled();
  },
};

export const ChangeVictimWithoutCards: StoryObj<typeof VictimStep> = {
  args: { ...reportedForJulia, transactions: [transfer], onNext: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await pickNicolas({ canvas, userEvent });
    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await expect(args.onNext).toHaveBeenCalledWith({ victimAccountMembershipId: "member-2" });
    await expect(within(document.body).queryByText("Change the victim?")).toBeNull();
  },
};

export const KeepVictim: StoryObj<typeof VictimStep> = {
  args: { ...reportedForJulia, transactions: [card, transfer], onNext: fn() },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ args, canvas, userEvent }) => {
    await pickNicolas({ canvas, userEvent });
    await userEvent.click(canvas.getByText("Yes"));
    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));

    await expect(args.onNext).toHaveBeenCalledWith({ victimAccountMembershipId: "member-1" });
    await expect(within(document.body).queryByText("Change the victim?")).toBeNull();
  },
};

export const SearchMembers: StoryObj<typeof VictimStep> = {
  args: {
    currentAccountMembership: asOperator,
    accountMemberships,
    transactions: [],
    values: {},
    onNext: fn(),
  },
  parameters: { a11y: { test: "off" } },
  render,
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      await canvas.findByRole("button", { name: /For whom are you reporting for\?/ }),
    );

    const list = within(document.body);
    await expect(await list.findByText("+33 6 98 76 54 32")).toBeVisible();

    await userEvent.type(list.getByPlaceholderText("Search for a member"), "Ada");

    await waitFor(() => expect(list.queryByRole("option", { name: /Nicolas Saison/ })).toBeNull());
    await expect(list.getByRole("option", { name: "Ada Lovelace" })).toBeVisible();

    await userEvent.clear(list.getByPlaceholderText("Search for a member"));
    await userEvent.type(list.getByPlaceholderText("Search for a member"), "+33 6 98 76 54 32");

    await expect(await list.findByRole("option", { name: /Nicolas Saison/ })).toBeVisible();

    await userEvent.clear(list.getByPlaceholderText("Search for a member"));
    await userEvent.type(list.getByPlaceholderText("Search for a member"), "+33698765432");

    await expect(await list.findByRole("option", { name: /Nicolas Saison/ })).toBeVisible();
  },
};
