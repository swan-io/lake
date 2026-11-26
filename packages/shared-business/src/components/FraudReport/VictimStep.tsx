import { Option } from "@bloodyowl/boxed";
import { Box } from "@swan-io/lake/src/components/Box";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeSelect } from "@swan-io/lake/src/components/LakeSelect";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { InformationTooltip } from "@swan-io/lake/src/components/LakeTooltip";
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
import {
  FraudReportFooter,
  FraudReportStepProps,
  useFraudReportSmallLayout,
} from "./FraudReportLayout";

const styles = StyleSheet.create({
  column: {
    flexBasis: 0,
    flexGrow: 1,
  },
});

type Props = FraudReportStepProps<"victimAccountMembershipId"> & {
  currentAccountMembership: Option<FraudReportAccountMembership>;
  accountMemberships: FraudReportAccountMembership[];
};

export const VictimStep = ({
  currentAccountMembership,
  accountMemberships,
  values,
  onNext,
}: Props) => {
  const small = useFraudReportSmallLayout();

  const [choice, setChoice] = useState(() =>
    getInitialVictimChoice({
      currentAccountMembership,
      victimAccountMembershipId: values.victimAccountMembershipId,
    }),
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
    { name: t("common.yes"), value: "Myself" },
    { name: t("common.no"), value: "SomeoneElse" },
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
          <InformationTooltip text={t("fraudReport.victim.memberHelp")} focusable={true} />
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
      <Tile title={t("fraudReport.victim.title")} description={t("fraudReport.victim.description")}>
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

      <FraudReportFooter
        nextDisabled={victim.isNone()}
        onNext={() =>
          victim.tapSome(victimAccountMembershipId => onNext({ victimAccountMembershipId }))
        }
      />
    </>
  );
};
