import { Option } from "@bloodyowl/boxed";
import { describe, expect, test } from "vitest";
import {
  FraudReportAccountMembership,
  getInitialVictimChoice,
  getOtherAccountMemberships,
  getSelectedAccountMembershipId,
  getTransactionsRemovedByVictimChange,
  getVictimAccountMembershipId,
  VictimAnswer,
} from "../fraudReport/victim";

const julia: FraudReportAccountMembership = { id: "member-1", name: "Julia Fox" };
const nicolas: FraudReportAccountMembership = { id: "member-2", name: "Nicolas Saison" };
const ada: FraudReportAccountMembership = { id: "member-3", name: "Ada Lovelace" };

const accountMemberships = [julia, nicolas, ada];
const asMember = Option.Some(julia);
const asOperator = Option.None<FraudReportAccountMembership>();

const choiceOf = (answer: VictimAnswer | undefined, selectedId: string | undefined) => ({
  answer: Option.fromUndefined(answer),
  selectedId: Option.fromUndefined(selectedId),
});

describe("getOtherAccountMemberships", () => {
  test("leaves the current member out of the picker", () => {
    expect(
      getOtherAccountMemberships({ currentAccountMembership: asMember, accountMemberships }),
    ).toEqual([nicolas, ada]);
  });

  test("lists every member for an operator", () => {
    expect(
      getOtherAccountMemberships({ currentAccountMembership: asOperator, accountMemberships }),
    ).toEqual(accountMemberships);
  });
});

describe("getInitialVictimChoice", () => {
  test.each([
    {
      name: "nothing chosen yet",
      victimAccountMembershipId: undefined,
      answer: undefined,
      victim: undefined,
    },
    {
      name: "the member themselves",
      victimAccountMembershipId: "member-1",
      answer: "Myself",
      victim: "member-1",
    },
    {
      name: "another member",
      victimAccountMembershipId: "member-2",
      answer: "SomeoneElse",
      victim: "member-2",
    },
    {
      name: "a member no longer listed",
      victimAccountMembershipId: "member-9",
      answer: "SomeoneElse",
      victim: undefined,
    },
  ])(
    "gives back $name when a member comes back",
    ({ victimAccountMembershipId, answer, victim }) => {
      const choice = getInitialVictimChoice({
        currentAccountMembership: asMember,
        victimAccountMembershipId,
      });

      expect(choice.answer.toUndefined()).toBe(answer);

      expect(
        getVictimAccountMembershipId({
          currentAccountMembership: asMember,
          accountMemberships,
          choice,
        }).toUndefined(),
      ).toBe(victim);
    },
  );

  test.each([
    { name: "nothing chosen yet", victimAccountMembershipId: undefined, victim: undefined },
    { name: "a listed member", victimAccountMembershipId: "member-1", victim: "member-1" },
    { name: "a member no longer listed", victimAccountMembershipId: "member-9", victim: undefined },
  ])(
    "gives back $name when an operator comes back, with no answer",
    ({ victimAccountMembershipId, victim }) => {
      const choice = getInitialVictimChoice({
        currentAccountMembership: asOperator,
        victimAccountMembershipId,
      });

      expect(choice.answer.isNone()).toBe(true);

      expect(
        getVictimAccountMembershipId({
          currentAccountMembership: asOperator,
          accountMemberships,
          choice,
        }).toUndefined(),
      ).toBe(victim);
    },
  );
});

describe("getSelectedAccountMembershipId", () => {
  test.each([
    { name: "another listed member", selectedId: "member-2", shown: "member-2" },
    { name: "the member themselves", selectedId: "member-1", shown: undefined },
  ])("shows $name in a member's picker", ({ selectedId, shown }) => {
    expect(
      getSelectedAccountMembershipId({
        currentAccountMembership: asMember,
        accountMemberships,
        choice: choiceOf("SomeoneElse", selectedId),
      }).toUndefined(),
    ).toBe(shown);
  });

  test("drops a pick once the member leaves the list", () => {
    const choice = choiceOf("SomeoneElse", "member-2");

    expect(
      getSelectedAccountMembershipId({
        currentAccountMembership: asMember,
        accountMemberships,
        choice,
      }).toUndefined(),
    ).toBe("member-2");

    expect(
      getSelectedAccountMembershipId({
        currentAccountMembership: asMember,
        accountMemberships: [julia, ada],
        choice,
      }).toUndefined(),
    ).toBeUndefined();
  });
});

describe("getVictimAccountMembershipId", () => {
  test.each([
    { name: "no answer", answer: undefined, selectedId: "member-2", victim: undefined },
    { name: "Myself", answer: "Myself", selectedId: "member-2", victim: "member-1" },
    {
      name: "SomeoneElse with a member picked",
      answer: "SomeoneElse",
      selectedId: "member-2",
      victim: "member-2",
    },
    {
      name: "SomeoneElse with no member picked",
      answer: "SomeoneElse",
      selectedId: undefined,
      victim: undefined,
    },
    {
      name: "SomeoneElse with a member no longer listed",
      answer: "SomeoneElse",
      selectedId: "member-9",
      victim: undefined,
    },
  ] as const)("gives the victim for a member answering $name", ({ answer, selectedId, victim }) => {
    expect(
      getVictimAccountMembershipId({
        currentAccountMembership: asMember,
        accountMemberships,
        choice: choiceOf(answer, selectedId),
      }).toUndefined(),
    ).toBe(victim);
  });

  test.each([
    { name: "a member picked", selectedId: "member-2", victim: "member-2" },
    { name: "no member picked", selectedId: undefined, victim: undefined },
    { name: "a member no longer listed", selectedId: "member-9", victim: undefined },
  ])("gives the victim for an operator with $name", ({ selectedId, victim }) => {
    expect(
      getVictimAccountMembershipId({
        currentAccountMembership: asOperator,
        accountMemberships,
        choice: choiceOf(undefined, selectedId),
      }).toUndefined(),
    ).toBe(victim);
  });
});

describe("getTransactionsRemovedByVictimChange", () => {
  const card = { id: "card-1", rail: "Card" } as const;
  const transfer = { id: "transfer-1", rail: "Transfer" } as const;

  test("removes the card transactions when the victim changes", () => {
    expect(
      getTransactionsRemovedByVictimChange({
        transactions: [card, transfer],
        previousVictimAccountMembershipId: "member-1",
        victimAccountMembershipId: "member-2",
      }),
    ).toEqual([card]);
  });

  test("removes nothing when the victim stays the same", () => {
    expect(
      getTransactionsRemovedByVictimChange({
        transactions: [card, transfer],
        previousVictimAccountMembershipId: "member-1",
        victimAccountMembershipId: "member-1",
      }),
    ).toEqual([]);
  });

  test("removes the card transactions when the previous victim isn't known", () => {
    expect(
      getTransactionsRemovedByVictimChange({
        transactions: [card, transfer],
        previousVictimAccountMembershipId: undefined,
        victimAccountMembershipId: "member-2",
      }),
    ).toEqual([card]);
  });
});
