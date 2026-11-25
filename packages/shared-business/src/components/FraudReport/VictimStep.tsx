import { Option } from "@bloodyowl/boxed";
import { Box } from "@swan-io/lake/src/components/Box";
import { Icon } from "@swan-io/lake/src/components/Icon";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeSelect } from "@swan-io/lake/src/components/LakeSelect";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { LakeTooltip } from "@swan-io/lake/src/components/LakeTooltip";
import { RadioGroup } from "@swan-io/lake/src/components/RadioGroup";
import { Space } from "@swan-io/lake/src/components/Space";
import { Tile } from "@swan-io/lake/src/components/Tile";
import { colors } from "@swan-io/lake/src/constants/design";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  FraudReportAccountMembership,
  getInitialVictimChoice,
  getOtherAccountMemberships,
  getSelectedAccountMembershipId,
  getVictimAccountMembershipId,
  VictimAnswer,
} from "../../utils/fraudReport/victim";
import { formatNestedMessage, t } from "../../utils/i18n";
import { FraudReportFooter, useFraudReportSmallLayout } from "./FraudReportLayout";

const styles = StyleSheet.create({
  column: {
    flexBasis: 0,
    flexGrow: 1,
  },
});

type Props = {
  currentAccountMembership: Option<FraudReportAccountMembership>;
  accountMemberships: FraudReportAccountMembership[];
  victimAccountMembershipId?: string;
  onNext: (victimAccountMembershipId: string) => void;
};

export const VictimStep = ({
  currentAccountMembership,
  accountMemberships,
  victimAccountMembershipId,
  onNext,
}: Props) => {
  const small = useFraudReportSmallLayout();

  const [choice, setChoice] = useState(() =>
    getInitialVictimChoice({ currentAccountMembership, victimAccountMembershipId }),
  );

  const selectedId = getSelectedAccountMembershipId({
    currentAccountMembership,
    accountMemberships,
    choice,
  });

  const victim = getVictimAccountMembershipId({
    currentAccountMembership,
    accountMemberships,
    choice,
  });

  const answerItems: { name: string; value: VictimAnswer }[] = [
    { name: t("fraudReport.victim.yes"), value: "Myself" },
    { name: t("fraudReport.victim.no"), value: "SomeoneElse" },
  ];

  const memberItems = getOtherAccountMemberships({
    currentAccountMembership,
    accountMemberships,
  }).map(({ id, name }) => ({ name, value: id }));

  const memberPicker = (
    <LakeLabel
      label={t("fraudReport.victim.memberLabel")}
      help={
        small || currentAccountMembership.isNone() ? undefined : (
          <LakeTooltip
            content={t("fraudReport.victim.memberHelp")}
            togglableOnFocus={true}
            placement="right"
            maxWidth={184}
          >
            <Icon
              name="question-circle-regular"
              size={20}
              color={colors.gray[600]}
              tabIndex={0}
              aria-label={t("fraudReport.victim.memberHelp")}
            />
          </LakeTooltip>
        )
      }
      render={id => (
        <LakeSelect
          id={id}
          items={memberItems}
          value={selectedId.toUndefined()}
          onValueChange={value =>
            setChoice(previous => ({ ...previous, selectedId: Option.Some(value) }))
          }
        />
      )}
    />
  );

  return (
    <>
      <Tile
        title={t("fraudReport.victim.title")}
        description={t("fraudReport.victim.description")}
        paddingVertical={small ? 24 : 32}
        paddingHorizontal={small ? 24 : 32}
      >
        {currentAccountMembership.match({
          None: () => memberPicker,
          Some: current => (
            <Box direction={small ? "column" : "row"}>
              <View style={!small && styles.column}>
                <LakeLabel
                  type="radioGroup"
                  label={t("fraudReport.victim.forYourself")}
                  render={() => (
                    <RadioGroup
                      direction={small ? "column" : "row"}
                      hideErrors={true}
                      items={answerItems}
                      value={choice.answer.toUndefined()}
                      onValueChange={answer =>
                        setChoice(previous => ({ ...previous, answer: Option.Some(answer) }))
                      }
                    />
                  )}
                />

                {choice.answer.toUndefined() === "Myself" ? (
                  <>
                    <Space height={40} />

                    <LakeText variant="medium" color={colors.gray[700]}>
                      {formatNestedMessage("fraudReport.victim.reportingFor", {
                        name: current.name,
                        highlight: chunks => (
                          <LakeText variant="medium" color={colors.current[500]}>
                            {chunks}
                          </LakeText>
                        ),
                      })}
                    </LakeText>

                    <Space height={small ? 16 : 24} />
                  </>
                ) : null}
              </View>

              {choice.answer.toUndefined() === "SomeoneElse" ? (
                <>
                  <Space width={24} height={24} />
                  <View style={!small && styles.column}>{memberPicker}</View>
                </>
              ) : null}
            </Box>
          ),
        })}
      </Tile>

      <FraudReportFooter nextDisabled={victim.isNone()} onNext={() => victim.tapSome(onNext)} />
    </>
  );
};
