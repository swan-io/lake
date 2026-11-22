import { Meta } from "@storybook/react";
import { CreditStatement, TransactionType } from "../src/components/CreditStatement";
import { CountryCCA3 } from "../src/constants/countries";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Informations/CreditStatement",
  component: CreditStatement,
} as Meta<typeof CreditStatement>;

const transactions = [
  {
    transactionId: "1",
    transactionAmount: {
      value: "303.50",
      currency: "EUR",
    },
    transactionDate: "2025-01-01",
    transactionLabel: "Sport subscription",
    transactionType: "Card" as TransactionType,
    counterparty: "Carrefour",
    maskedPan: "123412XXXXXX1234",
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "2",
    transactionAmount: {
      value: "200.00",
      currency: "EUR",
    },
    transactionDate: "2025-01-10",
    transactionLabel: "Ikea",
    transactionType: "Card" as TransactionType,
    counterparty: "Leclerc",
    maskedPan: "123412XXXXXX1234",
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
  {
    transactionId: "3",
    transactionAmount: {
      value: "1006.59",
      currency: "EUR",
    },
    transactionDate: "2025-02-24",
    transactionLabel: "Loan repayment",
    transactionType: "Card" as TransactionType,
    counterparty: "Auchan",
    maskedPan: "123412XXXXXX1234",
    transactionSide: "Debit" as const,
  },
  {
    transactionId: "4",
    transactionAmount: {
      value: "322.08",
      currency: "EUR",
    },
    transactionDate: "2025-03-12",
    transactionLabel: "Pet supplies",
    transactionType: "SepaCreditTransfer" as TransactionType,
    transactionSide: "Credit" as const,
    counterparty: "Marie Dupont",
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "2025-03-21",
    transactionLabel: "Hotel",
    transactionType: "SepaDirectDebit" as TransactionType,
    transactionSide: "Credit" as const,
    totalsCredit: {
      value: "0.00",
      currency: "EUR",
    },
    totalsDebit: {
      value: "0.00",
      currency: "EUR",
    },
    closingBalance: {
      value: "1593.13",
      currency: "EUR",
    },
    counterparty: "Marie Martin",
  },

  {
    transactionId: "6",
    transactionAmount: {
      value: "754.90",
      currency: "EUR",
    },
    transactionDate: "2025-01-08",
    transactionLabel: "Medical expenses",
    transactionType: "SepaCreditTransfer" as TransactionType,
    transactionSide: "Credit" as const,
    totalsCredit: {
      value: "0.00",
      currency: "EUR",
    },
    totalsDebit: {
      value: "0.00",
      currency: "EUR",
    },
    closingBalance: {
      value: "1136.70",
      currency: "EUR",
    },
    counterparty: "Marie Martin",
  },
  {
    transactionId: "7",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "2025-03-21",
    transactionLabel: "Hotel",
    transactionType: "SepaDirectDebit" as TransactionType,
    transactionSide: "Credit" as const,
    totalsCredit: {
      value: "0.00",
      currency: "EUR",
    },
    totalsDebit: {
      value: "0.00",
      currency: "EUR",
    },
    closingBalance: {
      value: "1593.13",
      currency: "EUR",
    },
    counterparty: "Paul Durand",
  },
  {
    transactionId: "8",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "2025-03-21",
    transactionLabel: "Hotel",
    transactionType: "SepaDirectDebit" as TransactionType,
    transactionSide: "Credit" as const,
    totalsCredit: {
      value: "0.00",
      currency: "EUR",
    },
    totalsDebit: {
      value: "0.00",
      currency: "EUR",
    },
    closingBalance: {
      value: "1593.13",
      currency: "EUR",
    },
    counterparty: "Sophie Leroy",
  },
  {
    transactionId: "9",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "2025-03-21",
    transactionLabel: "Hotel",
    transactionType: "SepaDirectDebit" as TransactionType,
    transactionSide: "Credit" as const,
    totalsCredit: {
      value: "0.00",
      currency: "EUR",
    },
    totalsDebit: {
      value: "0.00",
      currency: "EUR",
    },
    closingBalance: {
      value: "1593.13",
      currency: "EUR",
    },
    counterparty: "Sophie Leroy",
  },
  {
    transactionId: "10",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "2025-03-21",
    transactionLabel: "Hotel",
    transactionType: "SepaDirectDebit" as TransactionType,
    transactionSide: "Credit" as const,
    totalsCredit: {
      value: "0.00",
      currency: "EUR",
    },
    totalsDebit: {
      value: "0.00",
      currency: "EUR",
    },
    closingBalance: {
      value: "1593.13",
      currency: "EUR",
    },
    counterparty: "Lucie Bernard",
  },
  {
    transactionId: "11",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "2025-03-21",
    transactionLabel: "Hotel",
    transactionType: "SepaDirectDebit" as TransactionType,
    transactionSide: "Credit" as const,
    totalsCredit: {
      value: "0.00",
      currency: "EUR",
    },
    totalsDebit: {
      value: "0.00",
      currency: "EUR",
    },
    closingBalance: {
      value: "1593.13",
      currency: "EUR",
    },
    counterparty: "Sophie Leroy",
  },
  {
    transactionId: "12",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "2025-03-21",
    transactionLabel: "Hotel",
    transactionType: "SepaDirectDebit" as TransactionType,
    transactionSide: "Credit" as const,
    totalsCredit: {
      value: "0.00",
      currency: "EUR",
    },
    totalsDebit: {
      value: "0.00",
      currency: "EUR",
    },
    closingBalance: {
      value: "1593.13",
      currency: "EUR",
    },
    counterparty: "Sophie Leroy",
  },
  {
    transactionId: "13",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "2025-03-21",
    transactionLabel: "Hotel",
    transactionType: "SepaDirectDebit" as TransactionType,
    transactionSide: "Credit" as const,
    totalsCredit: {
      value: "0.00",
      currency: "EUR",
    },
    totalsDebit: {
      value: "0.00",
      currency: "EUR",
    },
    closingBalance: {
      value: "1593.13",
      currency: "EUR",
    },
    counterparty: "Sophie Leroy",
  },
  {
    transactionId: "14",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "2025-03-21",
    transactionLabel: "Hotel",
    transactionType: "SepaDirectDebit" as TransactionType,
    transactionSide: "Credit" as const,
    totalsCredit: {
      value: "0.00",
      currency: "EUR",
    },
    totalsDebit: {
      value: "0.00",
      currency: "EUR",
    },
    closingBalance: {
      value: "1593.13",
      currency: "EUR",
    },
    counterparty: "Lucie Bernard",
  },
  {
    transactionId: "15",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "2025-03-21",
    transactionLabel: "Hotel",
    transactionType: "SepaDirectDebit" as TransactionType,
    transactionSide: "Credit" as const,
    totalsCredit: {
      value: "0.00",
      currency: "EUR",
    },
    totalsDebit: {
      value: "0.00",
      currency: "EUR",
    },
    closingBalance: {
      value: "1593.13",
      currency: "EUR",
    },
    counterparty: "Sophie Leroy",
  },
  {
    transactionId: "16",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "2025-03-21",
    transactionLabel: "Hotel",
    transactionType: "SepaDirectDebit" as TransactionType,
    transactionSide: "Credit" as const,
    totalsCredit: {
      value: "0.00",
      currency: "EUR",
    },
    totalsDebit: {
      value: "0.00",
      currency: "EUR",
    },
    closingBalance: {
      value: "1593.13",
      currency: "EUR",
    },
    counterparty: "Lucie Bernard",
  },
  {
    transactionId: "17",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "2025-03-21",
    transactionLabel: "Hotel",
    transactionType: "SepaDirectDebit" as TransactionType,
    transactionSide: "Credit" as const,
    totalsCredit: {
      value: "0.00",
      currency: "EUR",
    },
    totalsDebit: {
      value: "0.00",
      currency: "EUR",
    },
    closingBalance: {
      value: "1593.13",
      currency: "EUR",
    },
    counterparty: "Lucie Bernard",
  },
];

export const Default = () => {
  const address = {
    addressLine1: "1 rue de la Paix",
    city: "Paris",
    postalCode: "75002",
    country: "FRA" as CountryCCA3,
  };

  return (
    <StoryBlock title="Credit statement">
      <StoryPart title="Default">
        <CreditStatement
          version="v1"
          partnerLogoUrl="https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png"
          partnerLogoAlt="Acme Bank"
          accountHolderType="Individual"
          accountHolderName="Sandrine Da Silva"
          accountHolderAddress={address}
          iban={"DE63111111118189377457"}
          bic={"SWNBDEBB"}
          openingDate="2025-09-01T14:41:50.308Z"
          closingDate="2025-09-30T14:41:50.308Z"
          transactions={transactions}
          issueDate="2025-10-16T14:41:50.308Z"
          issuerName="Aria"
          siret="362 521 879 00034"
          repaymentDate="2025-10-03T14:41:50.308Z"
          closingBalance={{ currency: "EUR", value: "150" }}
        />
      </StoryPart>
    </StoryBlock>
  );
};
