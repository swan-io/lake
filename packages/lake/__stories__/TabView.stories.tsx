import { Meta } from "@storybook/react";
import { TabView } from "../src/components/TabView";
import { Tag } from "../src/components/Tag";
import { StoryBlock } from "./_StoriesComponents";

export default {
  title: "Interactivity/TabView",
  component: TabView,
} as Meta<typeof TabView>;

export const Default = () => {
  return (
    <StoryBlock
      title="TabView"
      description="You can reduce window's width to see behavior when there isn't enough space to display all tabs"
    >
      <TabView
        tabs={[
          {
            label: "SEPA Credit Transfers",
            url: "/simulator/sct",
            count: 2,
          },
          {
            label: "Physical card",
            url: "/simulator/endElement",
            endElement: (
              <Tag size="small" color="shakespear">
                Expiring soon
              </Tag>
            ),
          },
          {
            label: "SEPA Direct Debits",
            url: "/simulator/sdd",
            icon: "building-regular",
          },
          {
            label: "Cards",
            url: "/simulator/cards",
            withSeparator: true,
          },
          {
            label: "Apple Pay/Google Pay",
            url: "/simulator/apple-pay-google-pay",
          },
          {
            label: "Account holders",
            url: "/simulator/account-holders",
          },
          {
            label: "Merchant acquiring",
            url: "/simulator/merchant-acquiring",
          },
        ]}
        otherLabel="More"
      />
    </StoryBlock>
  );
};
