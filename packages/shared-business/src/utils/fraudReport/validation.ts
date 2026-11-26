import type { Validator } from "@swan-io/use-form";
import dayjs from "dayjs";
import type { SharedInformationWithFraudster } from "./types";

export type FraudReportValidationError =
  | "Required"
  | "Duplicates"
  | "InvalidDate"
  | "DateInFuture"
  | "NoneWithOtherValues"
  | "TooLong"
  | "InvalidCharacters";

type FraudReportValidator<Value> = Validator<Value, FraudReportValidationError>;

export const DESCRIPTION_MAX_LENGTH = 2000;
export const DISCOVERY_DETAILS_MAX_LENGTH = 1000;
export const EXTERNAL_REFERENCE_MAX_LENGTH = 255;
const PRINTABLE_ASCII_REGEX = /^[\x20-\x7E]*$/;

export const validateTransactionIds: FraudReportValidator<string[]> = transactionIds => {
  if (transactionIds.length === 0) {
    return "Required";
  }
  if (new Set(transactionIds).size !== transactionIds.length) {
    return "Duplicates";
  }
};

export const validateSelected = <T>(
  value: T | undefined,
): FraudReportValidationError | undefined => (value == null ? "Required" : undefined);

export const validateNotInFuture: FraudReportValidator<string | undefined> = value => {
  if (value == null || value === "") {
    return;
  }
  const date = dayjs.utc(value, "YYYY-MM-DD", true);
  if (!date.isValid()) {
    return "InvalidDate";
  }
  if (date.isAfter(dayjs.utc(), "day")) {
    return "DateInFuture";
  }
};

export const validateSharedInformation: FraudReportValidator<
  SharedInformationWithFraudster[] | undefined
> = values => {
  if (values != null && values.length > 1 && values.includes("None")) {
    return "NoneWithOtherValues";
  }
};

export const validateDescription: FraudReportValidator<string | undefined> = value => {
  if (value == null || value.trim() === "") {
    return "Required";
  }
  if (value.length > DESCRIPTION_MAX_LENGTH) {
    return "TooLong";
  }
};

export const validateDiscoveryDetails: FraudReportValidator<string | undefined> = value => {
  if (value != null && value.length > DISCOVERY_DETAILS_MAX_LENGTH) {
    return "TooLong";
  }
};

export const validateExternalReference: FraudReportValidator<string | undefined> = value => {
  if (value == null) {
    return;
  }
  if (!PRINTABLE_ASCII_REGEX.test(value)) {
    return "InvalidCharacters";
  }
  if (value.length > EXTERNAL_REFERENCE_MAX_LENGTH) {
    return "TooLong";
  }
};
