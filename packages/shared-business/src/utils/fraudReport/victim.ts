import { Option } from "@bloodyowl/boxed";
import { match } from "ts-pattern";
import type { FraudReportTransaction } from "./types";

export type FraudReportAccountMembership = { id: string; name: string; phoneNumber?: string };

export type VictimAnswer = "Myself" | "SomeoneElse";

type VictimChoice = {
  answer: Option<VictimAnswer>;
  selectedId: Option<string>;
};

type CurrentAccountMembership = Option<FraudReportAccountMembership>;

export const getOtherAccountMemberships = ({
  currentAccountMembership,
  accountMemberships,
}: {
  currentAccountMembership: CurrentAccountMembership;
  accountMemberships: FraudReportAccountMembership[];
}) =>
  accountMemberships.filter(({ id }) =>
    currentAccountMembership.match({
      Some: current => id !== current.id,
      None: () => true,
    }),
  );

export const getInitialVictimChoice = ({
  currentAccountMembership,
  victimAccountMembershipId,
}: {
  currentAccountMembership: CurrentAccountMembership;
  victimAccountMembershipId: string | undefined;
}): VictimChoice => {
  const victim = Option.fromUndefined(victimAccountMembershipId);

  return {
    answer: currentAccountMembership.flatMap(current =>
      victim.map(id => (id === current.id ? "Myself" : "SomeoneElse")),
    ),
    selectedId: victim,
  };
};

export const getSelectedAccountMembershipId = ({
  currentAccountMembership,
  accountMemberships,
  choice,
}: {
  currentAccountMembership: CurrentAccountMembership;
  accountMemberships: FraudReportAccountMembership[];
  choice: VictimChoice;
}) =>
  choice.selectedId.filter(id =>
    getOtherAccountMemberships({ currentAccountMembership, accountMemberships }).some(
      item => item.id === id,
    ),
  );

export const getVictimAccountMembershipId = ({
  currentAccountMembership,
  accountMemberships,
  choice,
}: {
  currentAccountMembership: CurrentAccountMembership;
  accountMemberships: FraudReportAccountMembership[];
  choice: VictimChoice;
}): Option<string> => {
  const selectedId = getSelectedAccountMembershipId({
    currentAccountMembership,
    accountMemberships,
    choice,
  });

  return currentAccountMembership.match({
    None: () => selectedId,
    Some: current =>
      choice.answer.flatMap(answer =>
        match(answer)
          .with("Myself", () => Option.Some(current.id))
          .with("SomeoneElse", () => selectedId)
          .exhaustive(),
      ),
  });
};

export const getVictimChange = ({
  transactions,
  previousVictimAccountMembershipId,
  victimAccountMembershipId,
}: {
  transactions: FraudReportTransaction[];
  previousVictimAccountMembershipId: string | undefined;
  victimAccountMembershipId: string | undefined;
}) => {
  const changed =
    victimAccountMembershipId != null &&
    previousVictimAccountMembershipId !== victimAccountMembershipId;

  return {
    removed: changed ? transactions.filter(({ rail }) => rail === "Card") : [],
    kept: changed ? transactions.filter(({ rail }) => rail !== "Card") : transactions,
  };
};
