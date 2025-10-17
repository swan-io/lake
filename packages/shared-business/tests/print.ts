import react from "@vitejs/plugin-react-swc";
import { chromium } from "playwright";
import { createServer } from "vite";
import { TransactionType } from "../src/components/CreditStatement";

const data = {
  version: "v1",
  templateDataType: "CreditStatement",
  language: "fr",
  partnerLogoUrl: "string",
  accountHolderType: "Individual",
  accountHolderName: "Jean Dupont",
  accountHolderAddress: {
    street: "1 rue de la Paix",
    city: "75002 Paris",
    country: "FRA",
  },
  iban: "1234567890",
  bic: "ABCD",
  openingDate: "01/04/2024",
  closingDate: "30/04/2024",
  openingBalance: { value: "2000", currency: "EUR" },
  transactions: [
    {
      transactionId: "2",
      transactionAmount: {
        value: "200.00",
        currency: "EUR",
      },
      transactionDate: "10/01/2025",
      transactionLabel: "Ikea",
      transactionType: "Card" as TransactionType,
      counterparty: "Intermarché",
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
  ],
  feesDebit: { value: "10", currency: "EUR" },
  feesCredit: { value: "5", currency: "EUR" },
  totalsCredit: { value: "400", currency: "EUR" },
  totalsDebit: { value: "600", currency: "EUR" },
  closingBalance: { value: "1800", currency: "EUR" },
};

const main = async () => {
  const devServer = await createServer({
    optimizeDeps: { force: true },
    root: __dirname,
    resolve: { alias: { "react-native": "react-native-web" } },
    plugins: [react()],
  });

  await devServer.listen(3000);

  const browser = await chromium.launch({
    args: ["--font-render-hinting=none"],
    headless: true,
  });

  const page = await browser.newPage({
    locale: "en",
    bypassCSP: true,
  });

  page.addInitScript(data => {
    window.data = data;
  }, data);

  await page.emulateMedia({ media: "print" });

  await page.goto(`http://localhost:3000`);

  await page.waitForLoadState("networkidle");

  // await page.pause();
  const fileContent = await page.pdf({
    path: "output.pdf",
    format: "A4",
    margin: { top: "50px", bottom: "100px" },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: `<div> </div>`,
    footerTemplate: `<div style="width:100%; margin:0; padding: 24px 48px;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        -webkit-print-color-adjust: exact; color:#737276; font-size:10.5px; line-height:1.5; box-sizing:border-box;">

      <div style="border-top:1px solid #d9d9d9; margin-bottom: 24px;"></div>

      <div style="display:flex; justify-content:space-between; align-items:flex-start; width:100%;">

        <div style="flex:1; text-align:justify; padding-right:24px">
          SWAN est une société par actions simplifiée (SAS) immatriculée sous le numéro 853 827 103 0054,
          avec un capital de €951 164,50, numéro de TVA FR90853827103 et dont le siège social est situé
          au 91 rue du Faubourg Saint-Honoré, 75008 Paris, FRANCE.
          En tant qu’établissement de monnaie électronique offrant des services de paiement en vertu du droit français
          approuvé par l’ACPR, SWAN est inscrite auprès de ce dernier sous le numéro 17328.
        </div>

        <div style="text-align:right;">
          <div style="font-size:12px; font-weight:600; margin-bottom:3px;">Need help?</div>
          <div>
            <a href="https://support.swan.io" style="font-weight:400; font-size:12px; color:#737276; text-decoration:none;">support.swan.io</a>
          </div>
          <div style="margin-top:8px; font-size:10px; color:#737276;">
            Page <span class="pageNumber"></span> de <span class="totalPages"></span>
          </div>
        </div>
      </div>
    </div>`,
  });
  return fileContent;
};

main();
