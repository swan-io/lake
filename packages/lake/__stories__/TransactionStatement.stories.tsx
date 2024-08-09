import { Meta } from "@storybook/react";
import { TransactionStatement } from "@swan-io/shared-business/src/components/TransactionStatement";
import { invariantColors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Informations/TransactionStatement",
  component: TransactionStatement,
} as Meta<typeof TransactionStatement>;

export const Default = () => {
  return (
    <StoryBlock title="Transaction statement">
      <StoryPart title="Default">
        <TransactionStatement
          version="v1"
          partnerColor="#0f6fde"
          partnerLogoUrl="https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png"
          style={{
            backgroundColor: invariantColors.white,
          }}
        />
      </StoryPart>
    </StoryBlock>
  );
};
