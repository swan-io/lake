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
    transactionDate: "01/01/2025",
    transactionLabel: "Sport subscription",
    transactionType: "Check" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "2",
    transactionAmount: {
      value: "200.00",
      currency: "EUR",
    },
    transactionDate: "10/01/2025",
    transactionLabel: "Ikea",
    transactionType: "Card" as TransactionType,
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
    transactionDate: "24/02/2025",
    transactionLabel: "Loan repayment",
    transactionType: "Fees" as TransactionType,
    transactionSide: "Debit" as const,
  },
  {
    transactionId: "4",
    transactionAmount: {
      value: "322.08",
      currency: "EUR",
    },
    transactionDate: "12/03/2025",
    transactionLabel: "Pet supplies",
    transactionType: "SepaCreditTransfer" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "6",
    transactionAmount: {
      value: "754.90",
      currency: "EUR",
    },
    transactionDate: "08/01/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
    transactionLabel: "Hotel",
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
      value: "1593.13",
      currency: "EUR",
    },
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
    transactionLabel: "Hotel",
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
      value: "1593.13",
      currency: "EUR",
    },
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
    transactionLabel: "Hotel",
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
      value: "1593.13",
      currency: "EUR",
    },
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
    transactionLabel: "Hotel",
    transactionType: "Card" as TransactionType,
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
    transactionLabel: "Hotel",
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
      value: "1593.13",
      currency: "EUR",
    },
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
    transactionLabel: "Hotel",
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
      value: "1593.13",
      currency: "EUR",
    },
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
    transactionLabel: "Hotel",
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
      value: "1593.13",
      currency: "EUR",
    },
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
  {
    transactionId: "5",
    transactionAmount: {
      value: "490.76",
      currency: "EUR",
    },
    transactionDate: "21/03/2025",
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
  },
];

export const Default = () => {
  const address = {
    addressLine1: "1 rue de la Paix",
    city: "Paris",
    postalCode: "75002",
    country: "FRA" as CountryCCA3,
  };

  const openingBalance = {
    value: "10000",
    currency: "EUR",
  };

  const feesDebit = {
    value: "4.00",
    currency: "EUR",
  };

  const feesCredit = {
    value: "1.00",
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
    <StoryBlock title="Credit statement">
      <StoryPart title="Default">
        <CreditStatement
          version="v1"
          partnerLogoUrl="https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png"
          accountHolderType="Individual"
          accountHolderName="Sandrine Da Silva"
          accountHolderAddress={address}
          iban={"DE63 1111 1111 8189 3774 57"}
          bic={"SWNBDEBB"}
          openingDate="01/01/2025"
          closingDate="31/01/2025"
          openingBalance={openingBalance}
          transactions={transactions}
          feesDebit={feesDebit}
          feesCredit={feesCredit}
          totalsCredit={totalsCredit}
          totalsDebit={totalsDebit}
          closingBalance={closingBalance}
        />
      </StoryPart>
    </StoryBlock>
  );
};
