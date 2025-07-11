import { Meta } from "@storybook/react";
import { invariantColors } from "@swan-io/lake/src/constants/design";
import { AccountStatement, Transaction } from "../src/components/AccountStatement";
import { CountryCCA3 } from "../src/constants/countries";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Informations/AccountStatement",
  component: AccountStatement,
} as Meta<typeof AccountStatement>;

const transactions: Transaction[] = [
  {
    id: "1",
    label: "Sport subscription",
    date: "01/01/2025",
    type: "Card",
    credit: { value: "303.50", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "2",
    label: "Ikea",
    date: "10/01/2025",
    type: "Fees",
    credit: undefined,
    debit: { value: "200.00", currency: "EUR" },
  },
  {
    id: "3",
    label: "Loan repayment",
    date: "24/02/2025",
    type: "InternationalDirectDebit",
    credit: undefined,
    debit: { value: "1006.59", currency: "EUR" },
  },
  {
    id: "4",
    label: "Pet supplies",
    date: "12/03/2025",
    type: "SepaCreditTransfer",
    credit: { value: "322.08", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "5",
    label: "Hotel",
    date: "21/03/2025",
    type: "SepaCreditTransfer",
    credit: { value: "490.76", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "6",
    label: "Medical expenses",
    date: "08/01/2025",
    type: "SepaDirectDebit",
    credit: { value: "754.90", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "7",
    label: "Flight ticket",
    date: "05/01/2025",
    type: "Card",
    credit: undefined,
    debit: { value: "127.96", currency: "EUR" },
  },
  {
    id: "8",
    label: "Gift received",
    date: "02/02/2025",
    type: "Fees",
    credit: { value: "121.97", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "9",
    label: "Flight ticket",
    date: "25/02/2025",
    type: "InternationalDirectDebit",
    credit: { value: "1405.26", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "10",
    label: "Gas station",
    date: "24/01/2025",
    type: "SepaCreditTransfer",
    credit: { value: "1122.84", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "11",
    label: "Electricity bill",
    date: "18/02/2025",
    type: "SepaDirectDebit",
    credit: { value: "738.35", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "12",
    label: "Medical expenses",
    date: "06/03/2025",
    type: "InternationalDirectDebit",
    credit: undefined,
    debit: { value: "331.48", currency: "EUR" },
  },
  {
    id: "13",
    label: "Hotel",
    date: "27/03/2025",
    type: "SepaCreditTransfer",
    credit: undefined,
    debit: { value: "1008.68", currency: "EUR" },
  },
  {
    id: "14",
    label: "Movie ticket",
    date: "16/03/2025",
    type: "InternationalCreditTransfer",
    credit: { value: "820.54", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "15",
    label: "Restaurant",
    date: "28/02/2025",
    type: "InternationalDirectDebit",
    credit: { value: "205.97", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "16",
    label: "Flight ticket",
    date: "19/02/2025",
    type: "Fees",
    credit: { value: "306.71", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "17",
    label: "Pet supplies",
    date: "21/02/2025",
    type: "Fees",
    credit: { value: "318.83", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "18",
    label: "Medical expenses",
    date: "15/02/2025",
    type: "SepaDirectDebit",
    credit: { value: "908.53", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "19",
    label: "Medical expenses",
    date: "01/01/2025",
    type: "Fees",
    credit: { value: "306.32", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "20",
    label: "Medical expenses",
    date: "29/03/2025",
    type: "SepaDirectDebit",
    credit: { value: "321.39", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "21",
    label: "Water bill",
    date: "07/01/2025",
    type: "SepaDirectDebit",
    credit: undefined,
    debit: { value: "459.71", currency: "EUR" },
  },
  {
    id: "22",
    label: "Insurance refund",
    date: "02/01/2025",
    type: "Fees",
    credit: undefined,
    debit: { value: "369.40", currency: "EUR" },
  },
  {
    id: "23",
    label: "Public transport",
    date: "05/02/2025",
    type: "InternationalDirectDebit",
    credit: { value: "1212.65", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "24",
    label: "Bookstore",
    date: "03/01/2025",
    type: "SepaDirectDebit",
    credit: undefined,
    debit: { value: "912.65", currency: "EUR" },
  },
  {
    id: "25",
    label: "Online shopping",
    date: "15/02/2025",
    type: "Card",
    credit: { value: "1372.60", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "26",
    label: "Loan repayment",
    date: "31/03/2025",
    type: "Fees",
    credit: undefined,
    debit: { value: "770.07", currency: "EUR" },
  },
  {
    id: "27",
    label: "Public transport",
    date: "13/02/2025",
    type: "SepaDirectDebit",
    credit: { value: "1129.40", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "28",
    label: "Movie ticket",
    date: "21/02/2025",
    type: "SepaCreditTransfer",
    credit: undefined,
    debit: { value: "1326.92", currency: "EUR" },
  },
  {
    id: "29",
    label: "Water bill",
    date: "14/03/2025",
    type: "Fees",
    credit: undefined,
    debit: { value: "760.94", currency: "EUR" },
  },
  {
    id: "30",
    label: "Hotel",
    date: "13/02/2025",
    type: "InternationalDirectDebit",
    credit: { value: "306.71", currency: "EUR" },
    debit: { value: "274.37", currency: "EUR" },
  },
  {
    id: "31",
    label: "Restaurant",
    date: "16/03/2025",
    type: "SepaDirectDebit",
    credit: undefined,
    debit: { value: "694.41", currency: "EUR" },
  },
  {
    id: "32",
    label: "Pet supplies",
    date: "24/03/2025",
    type: "Card",
    credit: undefined,
    debit: { value: "335.11", currency: "EUR" },
  },
  {
    id: "33",
    label: "Medical expenses",
    date: "28/03/2025",
    type: "SepaCreditTransfer",
    credit: { value: "758.83", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "34",
    label: "Pet supplies",
    date: "12/03/2025",
    type: "SepaDirectDebit",
    credit: { value: "1210.63", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "35",
    label: "Water bill",
    date: "29/03/2025",
    type: "SepaDirectDebit",
    credit: undefined,
    debit: { value: "1171.04", currency: "EUR" },
  },
  {
    id: "36",
    label: "Hotel",
    date: "07/02/2025",
    type: "SepaDirectDebit",
    credit: undefined,
    debit: undefined,
  },
  {
    id: "37",
    label: "Loan repayment",
    date: "23/03/2025",
    type: "SepaDirectDebit",
    credit: undefined,
    debit: { value: "1231.22", currency: "EUR" },
  },
  {
    id: "38",
    label: "Restaurant",
    date: "11/03/2025",
    type: "Fees",
    credit: { value: "186.98", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "39",
    label: "Online shopping",
    date: "21/01/2025",
    type: "SepaDirectDebit",
    credit: undefined,
    debit: undefined,
  },
  {
    id: "40",
    label: "Groceries",
    date: "11/01/2025",
    type: "SepaDirectDebit",
    credit: undefined,
    debit: { value: "10.75", currency: "EUR" },
  },
  {
    id: "41",
    label: "Online shopping",
    date: "06/01/2025",
    type: "InternationalDirectDebit",
    credit: undefined,
    debit: undefined,
  },
  {
    id: "42",
    label: "Freelance income",
    date: "04/03/2025",
    type: "SepaDirectDebit",
    credit: { value: "39.72", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "43",
    label: "Hotel",
    date: "07/03/2025",
    type: "Fees",
    credit: undefined,
    debit: { value: "970.20", currency: "EUR" },
  },
  {
    id: "44",
    label: "Groceries",
    date: "02/01/2025",
    type: "InternationalDirectDebit",
    credit: { value: "542.21", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "45",
    label: "Pet supplies",
    date: "19/01/2025",
    type: "Card",
    credit: { value: "266.02", currency: "EUR" },
    debit: undefined,
  },
  {
    id: "46",
    label: "Freelance income",
    date: "14/03/2025",
    type: "SepaCreditTransfer",
    credit: undefined,
    debit: { value: "983.87", currency: "EUR" },
  },
  {
    id: "47",
    label: "Groceries",
    date: "20/01/2025",
    type: "SepaDirectDebit",
    credit: undefined,
    debit: { value: "832.10", currency: "EUR" },
  },
  {
    id: "48",
    label: "Loan repayment",
    date: "07/02/2025",
    type: "Card",
    credit: undefined,
    debit: { value: "1244.48", currency: "EUR" },
  },
  {
    id: "49",
    label: "Bookstore",
    date: "30/03/2025",
    type: "SepaDirectDebit",
    credit: undefined,
    debit: { value: "79.76", currency: "EUR" },
  },
  {
    id: "50",
    label: "Hotel",
    date: "23/03/2025",
    type: "SepaDirectDebit",
    credit: undefined,
    debit: { value: "1262.17", currency: "EUR" },
  },
  {
    id: "51",
    label: "Concert",
    date: "11/03/2025",
    type: "SepaCreditTransfer",
    credit: undefined,
    debit: { value: "277.51", currency: "EUR" },
  },
  {
    id: "52",
    label: "Concert",
    date: "04/03/2025",
    type: "InternationalDirectDebit",
    credit: { value: "534.40", currency: "EUR" },
    debit: undefined,
  },
];

export const Default = () => {
  const address = {
    street: "1 rue de la Paix",
    city: "75002 Paris",
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
