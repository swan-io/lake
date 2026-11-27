import type { FraudReportTransaction } from "./types";

export const removeDuplicateTransactions = (transactions: FraudReportTransaction[]) =>
  transactions.filter(
    (transaction, index) => transactions.findIndex(({ id }) => id === transaction.id) === index,
  );

export const getTransactionsTotal = (transactions: Pick<FraudReportTransaction, "amount">[]) => {
  const cents = transactions.reduce(
    (total, { amount }) => total + Math.round(Number(amount.value) * 100),
    0,
  );

  return { value: cents / 100, currency: transactions[0]?.amount.currency ?? "EUR" };
};
