import { expect, test } from "vitest";
import { validateIndividualTaxNumber } from "../validation";

test("validateIndividualTaxNumber", () => {
  expect(validateIndividualTaxNumber("NLD")("923456788")).toBe(undefined);
  expect(validateIndividualTaxNumber("NLD")("999999999")).not.toBe(undefined);
  expect(validateIndividualTaxNumber("NLD")("99999999")).not.toBe(undefined);
  expect(validateIndividualTaxNumber("NLD")("123456789")).not.toBe(undefined);
});
