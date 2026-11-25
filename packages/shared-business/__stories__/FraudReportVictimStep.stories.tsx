import { Option } from "@bloodyowl/boxed";
import { Meta } from "@storybook/react";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { Space } from "@swan-io/lake/src/components/Space";
import { WithCurrentColor } from "@swan-io/lake/src/components/WithCurrentColor";
import { noop } from "@swan-io/lake/src/utils/function";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { FraudReportLayout } from "../src/components/FraudReport/FraudReportLayout";
import { VictimStep } from "../src/components/FraudReport/VictimStep";
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

const julia: FraudReportAccountMembership = { id: "member-1", name: "Julia Fox" };

const accountMemberships: FraudReportAccountMembership[] = [
  julia,
  { id: "member-2", name: "Nicolas Saison" },
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
  onNext?: (victimAccountMembershipId: string) => void;
}) => (
  <FraudReportLayout activeStep="Victim" detailsSteps={[]}>
    <VictimStep
      currentAccountMembership={currentAccountMembership}
      accountMemberships={accountMemberships}
      victimAccountMembershipId={victimAccountMembershipId}
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
      <Step currentAccountMembership={currentAccountMembership} onNext={setSent} />
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
