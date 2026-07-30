import { Meta } from "@storybook/react";
import { BulletList } from "../src/components/BulletList";
import { LakeAlert } from "../src/components/LakeAlert";
import { LakeText } from "../src/components/LakeText";
import { ProgressTracker, ProgressTrackerStep } from "../src/components/ProgressTracker";
import { Space } from "../src/components/Space";
import { Tag } from "../src/components/Tag";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Layout/ProgressTracker",
  component: ProgressTracker,
} as Meta<typeof ProgressTracker>;

const labels = [
  "Case creation",
  "Shareholder KYC & Funding",
  "Case review",
  "Notary certification",
  "Company registration and KBIS",
  "Final review and funds release",
];

const makeSteps = (
  activeIndex: number,
  activeExtras?: Pick<ProgressTrackerStep, "badge" | "checklist" | "message">,
): ProgressTrackerStep[] =>
  labels.map((label, index) => ({
    id: String(index + 1),
    label,
    status: index < activeIndex ? "done" : index === activeIndex ? "active" : "future",
    ...(index === activeIndex ? activeExtras : undefined),
  }));

const inProgressTag = <Tag color="warning">In progress</Tag>;
const processingTag = <Tag color="shakespear">In progress</Tag>;

export const Default = () => {
  return (
    <StoryBlock
      title="ProgressTracker"
      description={["A vertical status-driven progress tracker."]}
    >
      <StoryPart title="First step active with checklist">
        <ProgressTracker
          steps={makeSteps(0, {
            badge: inProgressTag,
            checklist: [
              { label: "Company onboarding", isDone: true },
              { label: "Company documents collection 2/3", isDone: false },
              { label: "Shareholders onboarding 0/2", isDone: false },
            ],
          })}
        />
      </StoryPart>

      <StoryPart title="Active step with checklist and help tooltip">
        <ProgressTracker
          steps={makeSteps(1, {
            badge: inProgressTag,
            checklist: [
              { label: "ID verification 2/2", isDone: true },
              { label: "Document collection 1/1", isDone: true },
              {
                label: "Capital transfer 1/2",
                isDone: false,
                help: (
                  <>
                    <LakeText color={colors.gray.contrast} variant="smallMedium">
                      To be accepted, each transfer must:
                    </LakeText>

                    <Space height={8} />

                    <BulletList
                      color={colors.gray.contrast}
                      variant="smallRegular"
                      items={[
                        "Come from a bank account in the shareholder's name",
                        "Come from an authorized bank",
                        "Match the exact capital deposit amount",
                      ]}
                    />
                  </>
                ),
              },
            ],
          })}
        />
      </StoryPart>

      <StoryPart title="Active step with info message">
        <ProgressTracker
          steps={makeSteps(2, {
            badge: processingTag,
            message: (
              <LakeAlert
                anchored={true}
                variant="info"
                title="Swan is reviewing the case. No action needed."
              />
            ),
          })}
        />
      </StoryPart>

      <StoryPart title="Active step with warning message">
        <ProgressTracker
          steps={makeSteps(4, {
            badge: inProgressTag,
            message: (
              <LakeAlert
                anchored={true}
                variant="warning"
                title="Your client needs to register the company at the Greffe, then upload the KBIS extract."
              />
            ),
          })}
        />
      </StoryPart>

      <StoryPart title="Active step with action needed and error message">
        <ProgressTracker
          steps={makeSteps(2, {
            badge: <Tag color="negative">Action needed</Tag>,
            message: (
              <LakeAlert
                anchored={true}
                variant="error"
                title="2 documents refused. Re-upload required."
              >
                <BulletList
                  color={colors.negative[700]}
                  items={[
                    "Company lease agreement: Document refused for compliance reasons.",
                    "Power of attorney: Full document required.",
                  ]}
                />
              </LakeAlert>
            ),
          })}
        />
      </StoryPart>

      <StoryPart title="Last step active with message">
        <ProgressTracker
          steps={makeSteps(labels.length - 1, {
            badge: processingTag,
            message: (
              <LakeAlert
                anchored={true}
                variant="info"
                title="Verification completed. The notary is transferring funds to the company account."
              >
                This usually takes about 3 business days. No action needed.
              </LakeAlert>
            ),
          })}
        />
      </StoryPart>
    </StoryBlock>
  );
};
