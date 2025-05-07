import { Meta } from "@storybook/react";
import { invariantColors } from "@swan-io/lake/src/constants/design";
import { AccountStatement, TransactionType } from "../src/components/AccountStatement";
import { CountryCCA3 } from "../src/constants/countries";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Informations/AccountStatement",
  component: AccountStatement,
} as Meta<typeof AccountStatement>;

export const Default = () => {
  const address = {
    addressLine1: "1 rue de Joey",
    addressLine2: "wesh",
    city: "toulouse",
    postalCode: "31200",
    country: "FRA" as CountryCCA3,
  };

  const openingBalance = {
    value: "30503",
    currency: "EUR",
  };

  const transactions = [
    {
      transactionAmount: {
        value: "303.00",
        currency: "EUR",
      },
      transactionDate: "01/01/2025",
      transactionLabel: "This is a description",
      transactionType: "CheckIn" as TransactionType,
      transactionSide: "Credit" as const,
    },
    {
      transactionAmount: {
        value: "200.00",
        currency: "EUR",
      },
      transactionDate: "10/01/2025",
      transactionLabel: "This is a description",
      transactionType: "CardOutDebit" as TransactionType,
      transactionSide: "Debit" as const,

      totalsCredit: {
        value: "0.00",
        currency: "EUR",
      },
      totalsDebit: {
        value: "0.00",
        currency: "EUR",
      },
      closingBalance: {
        value: "234.00",
        currency: "EUR",
      },
    },
  ];

  const fees = {
    value: "0.00",
    currency: "EUR",
  };

  const totalsDebit = {
    value: "19.00",
    currency: "EUR",
  };

  const totalsCredit = {
    value: "2.00",
    currency: "EUR",
  };

  const closingBalance = {
    value: "3456.00",
    currency: "EUR",
  };

  return (
    <StoryBlock title="Account statement">
      <StoryPart title="Default">
        <AccountStatement
          // version="v1"
          partnerLogoUrl="https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png"
          accountHolderType="Individual"
          accountHolderName="Sandrine Da Silva"
          accountHolderAddress={address}
          style={{ backgroundColor: invariantColors.white }}
          iban={"DE63 1111 1111 8189 3774 57"}
          bic={"SWNBDEBB"}
          openingDate="01/01/2025"
          closingDate="31/01/2025"
          openingBalance={openingBalance}
          transactions={transactions}
          fees={fees}
          totalsCredit={totalsCredit}
          totalsDebit={totalsDebit}
          closingBalance={closingBalance}
        />
      </StoryPart>
    </StoryBlock>
  );
};
