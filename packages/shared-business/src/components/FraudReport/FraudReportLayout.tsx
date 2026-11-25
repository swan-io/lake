import { Box } from "@swan-io/lake/src/components/Box";
import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { LakeStepper } from "@swan-io/lake/src/components/LakeStepper";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { ResponsiveContainer } from "@swan-io/lake/src/components/ResponsiveContainer";
import { Space } from "@swan-io/lake/src/components/Space";
import { breakpoints, colors } from "@swan-io/lake/src/constants/design";
import { isNotNullish } from "@swan-io/lake/src/utils/nullish";
import { createContext, ReactNode, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { match } from "ts-pattern";
import {
  FraudReportLayoutStep,
  FraudReportStepperStep,
  getFraudReportStepper,
} from "../../utils/fraudReport/stepper";
import { FraudReportDetailsStep } from "../../utils/fraudReport/types";
import { t } from "../../utils/i18n";

const styles = StyleSheet.create({
  root: {
    alignSelf: "stretch",
  },
  progress: {
    height: 3,
    borderRadius: 10,
    backgroundColor: colors.gray[100],
  },
  progressFill: {
    height: "100%",
    borderRadius: 10,
    backgroundColor: colors.current[500],
    transitionDuration: "300ms",
    transitionProperty: "width",
  },
});

const SmallLayoutContext = createContext(false);

export const useFraudReportSmallLayout = () => useContext(SmallLayoutContext);

const getStepLabel = (step: FraudReportStepperStep) =>
  match(step)
    .with("Victim", () => t("fraudReport.step.victim"))
    .with("Transactions", () => t("fraudReport.step.transactions"))
    .with("Incident", () => t("fraudReport.step.incident"))
    .with("Details", () => t("fraudReport.step.details"))
    .with("Documents", () => t("fraudReport.step.documents"))
    .with("Submitted", () => t("fraudReport.step.confirmation"))
    .exhaustive();

type Props = {
  activeStep: FraudReportLayoutStep;
  detailsSteps: readonly FraudReportDetailsStep[];
  children: ReactNode;
};

export const FraudReportLayout = ({ activeStep, detailsSteps, children }: Props) => {
  const stepper = getFraudReportStepper({ activeStep, detailsSteps, getLabel: getStepLabel });

  return (
    <ResponsiveContainer breakpoint={breakpoints.medium} style={styles.root}>
      {({ small }) => (
        <SmallLayoutContext.Provider value={small}>
          {small ? (
            <View>
              <LakeText variant="smallMedium" color={colors.current[500]}>
                {stepper.currentLabel}
              </LakeText>

              <LakeText variant="smallRegular" color={colors.gray[500]}>
                {t("fraudReport.stepCount", { current: stepper.position, total: stepper.total })}
              </LakeText>

              <Space height={12} />

              <View style={styles.progress}>
                <View style={[styles.progressFill, { width: `${stepper.progress * 100}%` }]} />
              </View>
            </View>
          ) : (
            <LakeStepper steps={stepper.steps} activeStepId={stepper.activeStepId} />
          )}

          <Space height={small ? 24 : 48} />

          {children}
        </SmallLayoutContext.Provider>
      )}
    </ResponsiveContainer>
  );
};

type FooterProps = {
  onPrevious?: () => void;
  onNext: () => void;
  loading?: boolean;
  nextDisabled?: boolean;
};

export const FraudReportFooter = ({ onPrevious, onNext, loading, nextDisabled }: FooterProps) => {
  const small = useFraudReportSmallLayout();

  return (
    <>
      <Space height={small ? 24 : 32} />

      <Box direction="row">
        {isNotNullish(onPrevious) ? (
          <>
            <LakeButton mode="secondary" color="gray" disabled={loading} onPress={onPrevious}>
              {t("common.previous")}
            </LakeButton>

            <Space width={12} />
          </>
        ) : null}

        <LakeButton
          color="current"
          ariaLabel={loading === true ? t("fraudReport.continue") : undefined}
          loading={loading}
          disabled={nextDisabled}
          onPress={onNext}
        >
          {t("fraudReport.continue")}
        </LakeButton>
      </Box>
    </>
  );
};
