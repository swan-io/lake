import { Meta } from "@storybook/react";
import { invariantColors } from "@swan-io/lake/src/constants/design";
import { AccountStatement, TransactionType } from "../src/components/AccountStatement";
import { CountryCCA3 } from "../src/constants/countries";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Informations/AccountStatement",
  component: AccountStatement,
} as Meta<typeof AccountStatement>;

export const transactions = [
  {
    transactionId: "1",
    transactionAmount: {
      value: "303.50",
      currency: "EUR",
    },
    transactionDate: "01/01/2025",
    transactionLabel: "Sport subscription",
    transactionType: "CheckIn" as TransactionType,
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
  {
    transactionId: "3",
    transactionAmount: {
      value: "1006.59",
      currency: "EUR",
    },
    transactionDate: "24/02/2025",
    transactionLabel: "Loan repayment",
    transactionType: "FeesOut" as TransactionType,
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
    transactionType: "InternationalCreditTransferOut" as TransactionType,
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
    transactionType: "SepaDirectDebitIn" as TransactionType,
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
    transactionType: "SepaCreditTransferInRecall" as TransactionType,
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
    transactionId: "7",
    transactionAmount: {
      value: "127.96",
      currency: "EUR",
    },
    transactionDate: "05/01/2025",
    transactionLabel: "Flight ticket",
    transactionType: "CardOutCreditReversal" as TransactionType,
    transactionSide: "Debit" as const,
  },
  {
    transactionId: "8",
    transactionAmount: {
      value: "121.97",
      currency: "EUR",
    },
    transactionDate: "02/02/2025",
    transactionLabel: "Gift received",
    transactionType: "CardInChargebackReversal" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "9",
    transactionAmount: {
      value: "1405.26",
      currency: "EUR",
    },
    transactionDate: "25/02/2025",
    transactionLabel: "Flight ticket",
    transactionType: "InternalCreditTransferInReturn" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "10",
    transactionAmount: {
      value: "1122.84",
      currency: "EUR",
    },
    transactionDate: "24/01/2025",
    transactionLabel: "Gas station",
    transactionType: "InternationalCreditTransferInReturn" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "11",
    transactionAmount: {
      value: "738.35",
      currency: "EUR",
    },
    transactionDate: "18/02/2025",
    transactionLabel: "Electricity bill",
    transactionType: "SepaCreditTransferIn" as TransactionType,
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
      value: "1713.11",
      currency: "EUR",
    },
  },
  {
    transactionId: "12",
    transactionAmount: {
      value: "331.48",
      currency: "EUR",
    },
    transactionDate: "06/03/2025",
    transactionLabel: "Medical expenses",
    transactionType: "InternalDirectDebitInReturn" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "13",
    transactionAmount: {
      value: "1008.68",
      currency: "EUR",
    },
    transactionDate: "27/03/2025",
    transactionLabel: "Hotel",
    transactionType: "InternalDirectDebitOutReturn" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "14",
    transactionAmount: {
      value: "820.54",
      currency: "EUR",
    },
    transactionDate: "16/03/2025",
    transactionLabel: "Movie ticket",
    transactionType: "InternationalCreditTransferIn" as TransactionType,
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
      value: "387.06",
      currency: "EUR",
    },
  },
  {
    transactionId: "15",
    transactionAmount: {
      value: "205.97",
      currency: "EUR",
    },
    transactionDate: "28/02/2025",
    transactionLabel: "Restaurant",
    transactionType: "InternationalCreditTransferInReturn" as TransactionType,
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
      value: "1837.51",
      currency: "EUR",
    },
  },
  {
    transactionId: "16",
    transactionAmount: {
      value: "306.71",
      currency: "EUR",
    },
    transactionDate: "19/02/2025",
    transactionLabel: "Flight ticket",
    transactionType: "FeesIn" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "17",
    transactionAmount: {
      value: "318.83",
      currency: "EUR",
    },
    transactionDate: "21/02/2025",
    transactionLabel: "Pet supplies",
    transactionType: "FeesIn" as TransactionType,
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
      value: "1616.70",
      currency: "EUR",
    },
  },
  {
    transactionId: "18",
    transactionAmount: {
      value: "908.53",
      currency: "EUR",
    },
    transactionDate: "15/02/2025",
    transactionLabel: "Medical expenses",
    transactionType: "SepaInstantCreditTransferIn" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "19",
    transactionAmount: {
      value: "306.32",
      currency: "EUR",
    },
    transactionDate: "01/01/2025",
    transactionLabel: "Medical expenses",
    transactionType: "FeesIn" as TransactionType,
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
      value: "480.99",
      currency: "EUR",
    },
  },
  {
    transactionId: "20",
    transactionAmount: {
      value: "321.39",
      currency: "EUR",
    },
    transactionDate: "29/03/2025",
    transactionLabel: "Medical expenses",
    transactionType: "InternalCreditTransferInRecall" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "21",
    transactionAmount: {
      value: "459.71",
      currency: "EUR",
    },
    transactionDate: "07/01/2025",
    transactionLabel: "Water bill",
    transactionType: "SepaCreditTransferOutRecall" as TransactionType,
    transactionSide: "Debit" as const,
  },
  {
    transactionId: "22",
    transactionAmount: {
      value: "369.40",
      currency: "EUR",
    },
    transactionDate: "02/01/2025",
    transactionLabel: "Insurance refund",
    transactionType: "SepaDirectDebitInReversal" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "23",
    transactionAmount: {
      value: "1212.65",
      currency: "EUR",
    },
    transactionDate: "05/02/2025",
    transactionLabel: "Public transport",
    transactionType: "CheckInReturn" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "24",
    transactionAmount: {
      value: "912.65",
      currency: "EUR",
    },
    transactionDate: "03/01/2025",
    transactionLabel: "Bookstore",
    transactionType: "SepaCreditTransferOut" as TransactionType,
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
      value: "1965.81",
      currency: "EUR",
    },
  },
  {
    transactionId: "25",
    transactionAmount: {
      value: "1372.60",
      currency: "EUR",
    },
    transactionDate: "15/02/2025",
    transactionLabel: "Online shopping",
    transactionType: "CardOutAuthorization" as TransactionType,
    transactionSide: "Debit" as const,
  },
  {
    transactionId: "26",
    transactionAmount: {
      value: "770.07",
      currency: "EUR",
    },
    transactionDate: "31/03/2025",
    transactionLabel: "Loan repayment",
    transactionType: "CardInChargeback" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "27",
    transactionAmount: {
      value: "1129.40",
      currency: "EUR",
    },
    transactionDate: "13/02/2025",
    transactionLabel: "Public transport",
    transactionType: "SepaInstantCreditTransferInRecall" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "28",
    transactionAmount: {
      value: "1326.92",
      currency: "EUR",
    },
    transactionDate: "21/02/2025",
    transactionLabel: "Movie ticket",
    transactionType: "SepaDirectDebitOutReturn" as TransactionType,
    transactionSide: "Debit" as const,
  },
  {
    transactionId: "29",
    transactionAmount: {
      value: "760.94",
      currency: "EUR",
    },
    transactionDate: "14/03/2025",
    transactionLabel: "Water bill",
    transactionType: "CardInChargeback" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "30",
    transactionAmount: {
      value: "274.37",
      currency: "EUR",
    },
    transactionDate: "13/02/2025",
    transactionLabel: "Hotel",
    transactionType: "InternalCreditTransferIn" as TransactionType,
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
      value: "750.32",
      currency: "EUR",
    },
  },
  {
    transactionId: "31",
    transactionAmount: {
      value: "694.41",
      currency: "EUR",
    },
    transactionDate: "16/03/2025",
    transactionLabel: "Restaurant",
    transactionType: "SepaCreditTransferOutRecall" as TransactionType,
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
      value: "1243.97",
      currency: "EUR",
    },
  },
  {
    transactionId: "32",
    transactionAmount: {
      value: "335.11",
      currency: "EUR",
    },
    transactionDate: "24/03/2025",
    transactionLabel: "Pet supplies",
    transactionType: "CardOutDebitReversal" as TransactionType,
    transactionSide: "Debit" as const,
  },
  {
    transactionId: "33",
    transactionAmount: {
      value: "758.83",
      currency: "EUR",
    },
    transactionDate: "28/03/2025",
    transactionLabel: "Medical expenses",
    transactionType: "InternalDirectDebitOut" as TransactionType,
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
      value: "1589.36",
      currency: "EUR",
    },
  },
  {
    transactionId: "34",
    transactionAmount: {
      value: "1210.63",
      currency: "EUR",
    },
    transactionDate: "12/03/2025",
    transactionLabel: "Pet supplies",
    transactionType: "SepaInstantCreditTransferIn" as TransactionType,
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
      value: "1058.32",
      currency: "EUR",
    },
  },
  {
    transactionId: "35",
    transactionAmount: {
      value: "1171.04",
      currency: "EUR",
    },
    transactionDate: "29/03/2025",
    transactionLabel: "Water bill",
    transactionType: "SepaCreditTransferInRecall" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "36",
    transactionAmount: {
      value: "639.10",
      currency: "EUR",
    },
    transactionDate: "07/02/2025",
    transactionLabel: "Hotel",
    transactionType: "SepaCreditTransferInRecall" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "37",
    transactionAmount: {
      value: "1231.22",
      currency: "EUR",
    },
    transactionDate: "23/03/2025",
    transactionLabel: "Loan repayment",
    transactionType: "SepaCreditTransferIn" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "38",
    transactionAmount: {
      value: "186.98",
      currency: "EUR",
    },
    transactionDate: "11/03/2025",
    transactionLabel: "Restaurant",
    transactionType: "CardInChargeback" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "39",
    transactionAmount: {
      value: "183.70",
      currency: "EUR",
    },
    transactionDate: "21/01/2025",
    transactionLabel: "Online shopping",
    transactionType: "SepaCreditTransferIn" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "40",
    transactionAmount: {
      value: "10.75",
      currency: "EUR",
    },
    transactionDate: "11/01/2025",
    transactionLabel: "Groceries",
    transactionType: "SepaInstantCreditTransferOutRecall" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "41",
    transactionAmount: {
      value: "258.83",
      currency: "EUR",
    },
    transactionDate: "06/01/2025",
    transactionLabel: "Online shopping",
    transactionType: "InternalCreditTransferInReturn" as TransactionType,
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
      value: "1744.93",
      currency: "EUR",
    },
  },
  {
    transactionId: "42",
    transactionAmount: {
      value: "39.72",
      currency: "EUR",
    },
    transactionDate: "04/03/2025",
    transactionLabel: "Freelance income",
    transactionType: "InternationalCreditTransferOutReturn" as TransactionType,
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
      value: "1856.35",
      currency: "EUR",
    },
  },
  {
    transactionId: "43",
    transactionAmount: {
      value: "970.20",
      currency: "EUR",
    },
    transactionDate: "07/03/2025",
    transactionLabel: "Hotel",
    transactionType: "SepaDirectDebitInReversal" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "44",
    transactionAmount: {
      value: "542.21",
      currency: "EUR",
    },
    transactionDate: "02/01/2025",
    transactionLabel: "Groceries",
    transactionType: "InternalCreditTransferInRecall" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "45",
    transactionAmount: {
      value: "266.02",
      currency: "EUR",
    },
    transactionDate: "19/01/2025",
    transactionLabel: "Pet supplies",
    transactionType: "CheckIn" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "46",
    transactionAmount: {
      value: "983.87",
      currency: "EUR",
    },
    transactionDate: "14/03/2025",
    transactionLabel: "Freelance income",
    transactionType: "SepaDirectDebitOutReversal" as TransactionType,
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
      value: "945.33",
      currency: "EUR",
    },
  },
  {
    transactionId: "47",
    transactionAmount: {
      value: "832.10",
      currency: "EUR",
    },
    transactionDate: "20/01/2025",
    transactionLabel: "Groceries",
    transactionType: "SepaInstantCreditTransferOutRecall" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "48",
    transactionAmount: {
      value: "1244.48",
      currency: "EUR",
    },
    transactionDate: "07/02/2025",
    transactionLabel: "Loan repayment",
    transactionType: "CardOutAuthorization" as TransactionType,
    transactionSide: "Debit" as const,
  },
  {
    transactionId: "49",
    transactionAmount: {
      value: "79.76",
      currency: "EUR",
    },
    transactionDate: "30/03/2025",
    transactionLabel: "Bookstore",
    transactionType: "InternationalCreditTransferOutReturn" as TransactionType,
    transactionSide: "Credit" as const,
  },
  {
    transactionId: "50",
    transactionAmount: {
      value: "1262.17",
      currency: "EUR",
    },
    transactionDate: "23/03/2025",
    transactionLabel: "Hotel",
    transactionType: "SepaCreditTransferOutReturn" as TransactionType,
    transactionSide: "Debit" as const,
  },
  {
    transactionId: "51",
    transactionAmount: {
      value: "277.51",
      currency: "EUR",
    },
    transactionDate: "11/03/2025",
    transactionLabel: "Concert",
    transactionType: "SepaDirectDebitOut" as TransactionType,
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
      value: "414.45",
      currency: "EUR",
    },
  },
  {
    transactionId: "52",
    transactionAmount: {
      value: "534.40",
      currency: "EUR",
    },
    transactionDate: "04/03/2025",
    transactionLabel: "Concert",
    transactionType: "InternalCreditTransferInReturn" as TransactionType,
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
      value: "389.09",
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
    <StoryBlock title="Account statement">
      <StoryPart title="Default">
        <AccountStatement
          version="v1"
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
