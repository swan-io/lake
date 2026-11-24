import { Meta } from "@storybook/react";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { Tile } from "@swan-io/lake/src/components/Tile";
import { WithCurrentColor } from "@swan-io/lake/src/components/WithCurrentColor";
import { colors } from "@swan-io/lake/src/constants/design";
import { noop } from "@swan-io/lake/src/utils/function";
import { useState } from "react";
import { StyleSheet } from "react-native";
import {
  FraudReportFooter,
  FraudReportLayout,
} from "../src/components/FraudReport/FraudReportLayout";
import { FraudReportLayoutStep } from "../src/utils/fraudReport/stepper";
import { FraudReportDetailsStep, fraudReportDetailsSteps } from "../src/utils/fraudReport/types";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Fraud report/FraudReportLayout",
  component: FraudReportLayout,
} as Meta<typeof FraudReportLayout>;

const styles = StyleSheet.create({
  mobile: {
    maxWidth: 390,
  },
});

const detailsSteps: FraudReportDetailsStep[] = ["Card", "Transfer"];

const steps: FraudReportLayoutStep[] = [
  "Victim",
  "Transactions",
  "Incident",
  ...detailsSteps,
  "Documents",
  "Submitted",
];

const StepContent = ({ step }: { step: FraudReportLayoutStep }) => (
  <Tile>
    <LakeText color={colors.gray[900]}>{step}</LakeText>
  </Tile>
);

export const Interactive = () => {
  const [index, setIndex] = useState(0);
  const activeStep = steps[index] ?? "Victim";

  const layout = (
    <FraudReportLayout activeStep={activeStep} detailsSteps={detailsSteps}>
      <StepContent step={activeStep} />

      {index < steps.length - 1 ? (
        <FraudReportFooter
          onPrevious={index > 0 ? () => setIndex(index - 1) : undefined}
          onNext={() => setIndex(index + 1)}
        />
      ) : null}
    </FraudReportLayout>
  );

  return (
    <WithCurrentColor variant="live">
      <StoryBlock
        title="Fraud report layout"
        description={["Stepper, step content and footer shared by the fraud report steps"]}
      >
        <StoryPart title="Desktop">{layout}</StoryPart>

        <StoryPart title="Mobile" style={styles.mobile}>
          {layout}
        </StoryPart>
      </StoryBlock>
    </WithCurrentColor>
  );
};

export const States = () => (
  <WithCurrentColor variant="live">
    <StoryBlock title="Fraud report layout" description={["Stepper and footer states"]}>
      <StoryPart title="First step">
        <FraudReportLayout activeStep="Victim" detailsSteps={detailsSteps}>
          <StepContent step="Victim" />
          <FraudReportFooter onNext={noop} />
        </FraudReportLayout>
      </StoryPart>

      <StoryPart title="Steps done">
        <FraudReportLayout activeStep="Incident" detailsSteps={detailsSteps}>
          <StepContent step="Incident" />
          <FraudReportFooter onPrevious={noop} onNext={noop} />
        </FraudReportLayout>
      </StoryPart>

      <StoryPart title="Second of two Details sub-steps">
        <FraudReportLayout activeStep="Transfer" detailsSteps={detailsSteps}>
          <StepContent step="Transfer" />
        </FraudReportLayout>
      </StoryPart>

      <StoryPart title="First of three Details sub-steps">
        <FraudReportLayout activeStep="Card" detailsSteps={fraudReportDetailsSteps}>
          <StepContent step="Card" />
        </FraudReportLayout>
      </StoryPart>

      <StoryPart title="One Details sub-step">
        <FraudReportLayout activeStep="Transfer" detailsSteps={["Transfer"]}>
          <StepContent step="Transfer" />
        </FraudReportLayout>
      </StoryPart>

      <StoryPart title="No Details sub-step">
        <FraudReportLayout activeStep="Victim" detailsSteps={[]}>
          <StepContent step="Victim" />
        </FraudReportLayout>
      </StoryPart>

      <StoryPart title="Last step">
        <FraudReportLayout activeStep="Submitted" detailsSteps={detailsSteps}>
          <StepContent step="Submitted" />
        </FraudReportLayout>
      </StoryPart>

      <StoryPart title="Second of two Details sub-steps, mobile" style={styles.mobile}>
        <FraudReportLayout activeStep="Transfer" detailsSteps={detailsSteps}>
          <StepContent step="Transfer" />
          <FraudReportFooter onPrevious={noop} onNext={noop} />
        </FraudReportLayout>
      </StoryPart>

      <StoryPart title="Footer, loading">
        <FraudReportFooter onPrevious={noop} onNext={noop} loading={true} />
      </StoryPart>

      <StoryPart title="Footer, next disabled">
        <FraudReportFooter onPrevious={noop} onNext={noop} nextDisabled={true} />
      </StoryPart>
    </StoryBlock>
  </WithCurrentColor>
);
