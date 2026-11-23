import { Meta } from "@storybook/react";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { colors } from "@swan-io/lake/src/constants/design";
import { fraudReportSteps } from "../src/utils/fraudReport/types";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Fraud report/FraudReport",
} as Meta;

export const Steps = () => (
  <StoryBlock title="Fraud report" description={["Report fraudulent transactions to Swan"]}>
    <StoryPart title="Steps">
      <LakeText color={colors.gray[900]}>{fraudReportSteps.join(" → ")}</LakeText>
    </StoryPart>
  </StoryBlock>
);
