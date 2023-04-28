import { Meta } from "@storybook/react";
import { useState } from "react";
import { match, P } from "ts-pattern";
import { Box } from "../src/components/Box";
import { LakeButton } from "../src/components/LakeButton";
import { LakeStepper, TopLevelStep } from "../src/components/LakeStepper";
import { Space } from "../src/components/Space";
import { WithCurrentColor } from "../src/components/WithCurrentColor";
import { isNullish } from "../src/utils/nullish";
import { StoryBlock } from "./_StoriesComponents";

export default {
  title: "Forms/Stepper",
  component: LakeStepper,
} as Meta<typeof LakeStepper>;

const steps: TopLevelStep[] = [
  {
    id: "enter_your_email",
    label: "Enter your e-mail",
    url: "#",
  },
  {
    label: "Fill in the form",
    children: [
      {
        id: "fill_in_the_form_part_1",
        label: "Fill in the form part 1",
        url: "#",
      },
      {
        id: "fill_in_the_form_part_2",
        label: "Fill in the form part 2",
        url: "#",
      },
    ],
  },
  {
    id: "add_an_owner",
    label: "Add an owner",
    url: "#",
  },
  {
    label: "Attach the documents",
    children: [
      {
        id: "attach_the_documents_part_1",
        label: "Attach the documents part 1",
        url: "#",
      },
      {
        id: "attach_the_documents_part_2",
        label: "Attach the documents part 2",
        url: "#",
      },
      {
        id: "attach_the_documents_part_3",
        label: "Attach the documents part 3",
        url: "#",
      },
    ],
  },
  {
    id: "finalize",
    label: "Finalize",
    url: "#",
  },
];

const stepIds = steps
  .map(step =>
    match(step)
      .with({ id: P.string }, ({ id }) => [id])
      .with({ children: P.array(P.any) }, ({ children }) => children.map(child => child.id))
      .exhaustive(),
  )
  .flat();

export const Interactive = () => {
  const [activeStepId, setActiveStepId] = useState("attach_the_documents_part_2");

  const setPreviousStep = () => {
    const currentIndex = stepIds.indexOf(activeStepId);
    const previousStepId = stepIds[currentIndex - 1];
    if (!isNullish(previousStepId)) {
      setActiveStepId(previousStepId);
    }
  };

  const setNextStep = () => {
    const currentIndex = stepIds.indexOf(activeStepId);
    const nextStepId = stepIds[currentIndex + 1];
    if (!isNullish(nextStepId)) {
      setActiveStepId(nextStepId);
    }
  };

  return (
    <WithCurrentColor variant="live">
      <StoryBlock title="Stepper">
        <LakeStepper steps={steps} activeStepId={activeStepId} />
        <Space height={32} />

        <Box direction="row">
          <LakeButton
            size="small"
            icon="chevron-left-filled"
            color="current"
            onPress={setPreviousStep}
          />

          <Space width={16} />

          <LakeButton
            size="small"
            icon="chevron-right-filled"
            color="current"
            onPress={setNextStep}
          />
        </Box>
      </StoryBlock>
    </WithCurrentColor>
  );
};
