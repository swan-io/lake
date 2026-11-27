import { match, P } from "ts-pattern";
import type { SharedInformationWithFraudster } from "./types";

export type SharedInformationAnswer = "Yes" | "No";

export type SharedInformationItem = Exclude<SharedInformationWithFraudster, "None">;

type SharedInformationChoice = {
  answer: SharedInformationAnswer | undefined;
  items: SharedInformationItem[];
};

export const getSharedInformationChoice = (
  shared: SharedInformationWithFraudster[] | undefined,
): SharedInformationChoice =>
  match(shared)
    .returnType<SharedInformationChoice>()
    .with(P.nullish, [], () => ({ answer: undefined, items: [] }))
    .with(P.array(P.not("None")), items => ({ answer: "Yes", items }))
    .otherwise(() => ({ answer: "No", items: [] }));

export const toSharedInformation = ({
  answer,
  items,
}: SharedInformationChoice): SharedInformationWithFraudster[] | undefined =>
  match(answer)
    .with("No", () => ["None" as const])
    .with("Yes", () => (items.length > 0 ? items : undefined))
    .with(undefined, () => undefined)
    .exhaustive();
