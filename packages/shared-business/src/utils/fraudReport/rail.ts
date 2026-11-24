import { Option } from "@bloodyowl/boxed";
import { match } from "ts-pattern";
import type { FraudReportRail, FraudReportTransaction } from "./types";

export type FraudReportCaseRail = "CardOnly" | "TransferOnly" | "Mixed";

export const getTransactionRail = (transactionType: string): Option<FraudReportRail> =>
  match(transactionType)
    .with("CardOutDebit", () => Option.Some<FraudReportRail>("Card"))
    .with(
      "SepaCreditTransferOut",
      "SepaInstantCreditTransferOut",
      "InternationalCreditTransferOut",
      "InternalCreditTransferOut",
      () => Option.Some<FraudReportRail>("Transfer"),
    )
    .otherwise(() => Option.None());

export const getCaseRail = (
  transactions: Pick<FraudReportTransaction, "rail">[],
): Option<FraudReportCaseRail> =>
  match({
    hasCard: transactions.some(({ rail }) => rail === "Card"),
    hasTransfer: transactions.some(({ rail }) => rail === "Transfer"),
  })
    .with({ hasCard: true, hasTransfer: true }, () => Option.Some<FraudReportCaseRail>("Mixed"))
    .with({ hasCard: true }, () => Option.Some<FraudReportCaseRail>("CardOnly"))
    .with({ hasTransfer: true }, () => Option.Some<FraudReportCaseRail>("TransferOnly"))
    .otherwise(() => Option.None());
