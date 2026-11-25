import { LakeButton, LakeButtonGroup } from "@swan-io/lake/src/components/LakeButton";
import { LakeStepper, MobileStepper } from "@swan-io/lake/src/components/LakeStepper";
import { ResponsiveContainer } from "@swan-io/lake/src/components/ResponsiveContainer";
import { Space } from "@swan-io/lake/src/components/Space";
import { breakpoints } from "@swan-io/lake/src/constants/design";
import { isNotNullish } from "@swan-io/lake/src/utils/nullish";
import { createContext, ReactNode, useContext } from "react";
import { StyleSheet } from "react-native";
import { match } from "ts-pattern";
import {
  FraudReportLayoutStep,
  FraudReportStepperStep,
  getFraudReportStepper,
} from "../../utils/fraudReport/stepper";
import type { FraudReportFormValues } from "../../utils/fraudReport/toInput";
import { FraudReportDetailsStep } from "../../utils/fraudReport/types";
import { t } from "../../utils/i18n";

export type FraudReportStepProps<K extends keyof FraudReportFormValues> = {
  values: Pick<FraudReportFormValues, K>;
  onNext: (values: Pick<FraudReportFormValues, K>) => void;
};

const styles = StyleSheet.create({
  root: {
    alignSelf: "stretch",
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
            <MobileStepper
              steps={stepper.steps}
              activeStepId={stepper.activeStepId}
              countLabel={t("fraudReport.stepCount", {
                current: stepper.position,
                total: stepper.total,
              })}
            />
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
      <Space height={small ? 8 : 16} />

      <LakeButtonGroup paddingBottom={0}>
        {isNotNullish(onPrevious) ? (
          <LakeButton mode="secondary" color="gray" disabled={loading} onPress={onPrevious}>
            {t("common.previous")}
          </LakeButton>
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
      </LakeButtonGroup>
    </>
  );
};
