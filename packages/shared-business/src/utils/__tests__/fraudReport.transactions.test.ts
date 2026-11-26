import { describe, expect, test } from "vitest";
import { createFakeTransaction } from "../fraudReport/fakeApi";
import { getTransactionsTotal, removeDuplicateTransactions } from "../fraudReport/transactions";

const withAmount = (value: string, currency = "EUR") =>
  createFakeTransaction(`card-${value}`, "Card", { amount: { value, currency } });

describe("getTransactionsTotal", () => {
  test("adds the amounts without rounding drift", () => {
    expect(getTransactionsTotal([withAmount("1.15"), withAmount("2.30")])).toEqual({
      value: 3.45,
      currency: "EUR",
    });
  });

  test("shows the total in the first transaction's currency", () => {
    expect(getTransactionsTotal([withAmount("5.00", "GBP"), withAmount("1.00")])).toEqual({
      value: 6,
      currency: "GBP",
    });
  });

  test("is zero euros when nothing is selected", () => {
    expect(getTransactionsTotal([])).toEqual({ value: 0, currency: "EUR" });
  });
});

describe("removeDuplicateTransactions", () => {
  test("keeps the first of rows with the same ID, in order", () => {
    const card = createFakeTransaction("card-1", "Card");
    const transfer = createFakeTransaction("transfer-1", "Transfer");

    expect(
      removeDuplicateTransactions([card, transfer, { ...card, counterparty: "Lidl" }]),
    ).toEqual([card, transfer]);
  });
});
