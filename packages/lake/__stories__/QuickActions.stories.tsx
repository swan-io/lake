import { Meta } from "@storybook/react";
import { QuickAction, Props, QuickActions } from "../src/components/QuickActions";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Interactivity/QuickActions",
  component: QuickActions,
} as Meta<typeof QuickActions>;

const actions: QuickAction[] = [
  {
    icon: "building-bank-regular",
    label: "Bank",
    onPress: () => console.log("Click on Bank"),
  },
  {
    icon: "database-regular",
    label: "Database",
    onPress: () => console.log("Click on Database"),
    backgroundColor: colors.positive.primary,
    color: colors.positive.contrast,
  },
  {
    icon: "document-regular",
    label: "Document",
    tooltipText: "Add a new document",
    disabled: true,
    onPress: () => console.log("Click on Document"),
    backgroundColor: colors.live.primary,
    color: colors.live.contrast,
  },
  {
    icon: "document-regular",
    label: "Document",
    tooltipText: "Add a new document",
    tooltipDisabled: true,
    disabled: false,
    onPress: () => console.log("Click on Document"),
    backgroundColor: colors.live.primary,
    color: colors.live.contrast,
  },
  {
    icon: "desktop-regular",
    label: "Desktop",
    onPress: () => console.log("Click on Desktop"),
    isLoading: true,
    backgroundColor: colors.sandbox.primary,
    color: colors.sandbox.contrast,
  },
];

type StoryArgs = Pick<QuickAction, "icon" | "label" | "color">;

export const Default = ({ icon, label, color }: StoryArgs) => {
  return (
    <StoryBlock title="QuickActions">
      <StoryPart title="With several actions">
        <QuickActions actions={actions} />
      </StoryPart>
    </StoryBlock>
  );
};
