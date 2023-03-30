import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Box } from "../src/components/Box";
import { Breadcrumbs, BreadcrumbsRoot, Crumb, useCrumb } from "../src/components/Breadcrumbs";
import { LakeButton } from "../src/components/LakeButton";
import { LakeLabel } from "../src/components/LakeLabel";
import { LakeTextInput } from "../src/components/LakeTextInput";
import { Space } from "../src/components/Space";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Interactivity/Breadcrumbs",
  component: BreadcrumbsRoot,
} as ComponentMeta<typeof BreadcrumbsRoot>;

export const Variations = () => {
  return (
    <StoryBlock title="Breadcrumbs">
      <StoryPart title="With 1 element">
        <BreadcrumbsRoot
          rootLevelCrumbs={[
            {
              label: "All simulator events",
              link: "/simulator",
            },
          ]}
        >
          <Breadcrumbs />
        </BreadcrumbsRoot>
      </StoryPart>

      <StoryPart title="With 2 elements">
        <BreadcrumbsRoot
          rootLevelCrumbs={[
            {
              label: "All simulator events",
              link: "/simulator",
            },
            {
              label: "SEPA Credit Transfers",
              link: "/simulator/sct",
            },
          ]}
        >
          <Breadcrumbs />
        </BreadcrumbsRoot>
      </StoryPart>

      <StoryPart title="With siblings">
        <BreadcrumbsRoot
          rootLevelCrumbs={[
            {
              label: "All simulator events",
              link: "/simulator",
            },
            {
              label: "SEPA Credit Transfers",
              link: "/simulator/sct",
              siblings: [
                {
                  label: "SEPA Credit Transfers",
                  url: "/simulator/sct",
                  isMatching: true,
                },
                {
                  label: "SEPA Direct Debits",
                  url: "/simulator/sdd",
                  isMatching: false,
                },
                {
                  label: "Cards",
                  url: "/simulator/cards",
                  isMatching: false,
                },
                {
                  label: "Apple Pay/Google Pay",
                  url: "/simulator/apple-pay-google-pay",
                  isMatching: false,
                },
                {
                  label: "Account holders",
                  url: "/simulator/account-holders",
                  isMatching: false,
                },
                {
                  label: "Merchant acquiring",
                  url: "/simulator/merchant-acquiring",
                  isMatching: false,
                },
              ],
            },
          ]}
        >
          <Breadcrumbs />
        </BreadcrumbsRoot>
      </StoryPart>
    </StoryBlock>
  );
};

// We use this component to trigger breadcrumbs animations when we add/remove crumbs
// Because updating `rootLevelCrumbs` on `BreadcrumbsRoot` doesn't trigger animations
const InteractiveCrumb = ({ crumb }: { crumb: Crumb }) => {
  useCrumb(crumb);
  return null;
};

export const Interactive = () => {
  const [newCrumbLabel, setNewCrumbLabel] = useState("");
  const [crumbs, setCrumbs] = useState<Crumb[]>([]);

  const addCrumb = () => {
    const crumb: Crumb = {
      label: newCrumbLabel,
      link: newCrumbLabel,
    };

    setCrumbs(crumbs => [...crumbs, crumb]);
    setNewCrumbLabel("");
  };

  const addSibling = () => {
    const sibling: NonNullable<Crumb["siblings"]>[number] = {
      label: newCrumbLabel,
      url: newCrumbLabel,
      isMatching: false,
    };

    setCrumbs(crumbs => {
      const lastCrumb = crumbs[crumbs.length - 1];
      if (!lastCrumb) {
        return crumbs;
      }

      const lastCrumbSiblings = lastCrumb?.siblings ?? [];
      const newLastCrumb = { ...lastCrumb, siblings: [...lastCrumbSiblings, sibling] };
      return [...crumbs.slice(0, -1), newLastCrumb];
    });
    setNewCrumbLabel("");
  };

  const removeLastCrumb = () => {
    setCrumbs(crumbs => crumbs.slice(0, -1));
  };

  return (
    <StoryBlock
      title="Interactive"
      description="You can add/remove crumbs to see breadcrumbs animations during navigation in apps"
    >
      <Box direction="row">
        <LakeLabel
          label="New crumb label"
          actions={
            <>
              <Space width={8} />

              <LakeButton
                size="small"
                color="positive"
                onPress={addCrumb}
                disabled={!newCrumbLabel}
              >
                Add crumb
              </LakeButton>

              <Space width={8} />

              <LakeButton
                size="small"
                color="gray"
                onPress={addSibling}
                disabled={!newCrumbLabel || crumbs.length === 0}
              >
                Add sibling
              </LakeButton>

              <Space width={8} />

              <LakeButton
                size="small"
                color="negative"
                onPress={removeLastCrumb}
                disabled={crumbs.length === 0}
              >
                Remove last crumb
              </LakeButton>
            </>
          }
          render={id => (
            <LakeTextInput
              id={id}
              value={newCrumbLabel}
              onChange={event => setNewCrumbLabel(event.currentTarget.value)}
            />
          )}
        />
      </Box>

      <Space height={16} />

      <BreadcrumbsRoot>
        {crumbs.map(crumb => (
          <InteractiveCrumb crumb={crumb} />
        ))}

        <Breadcrumbs />
      </BreadcrumbsRoot>
    </StoryBlock>
  );
};
