import { Box } from "@swan-io/lake/src/components/Box";
import { Grid } from "@swan-io/lake/src/components/Grid";
import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { ResponsiveContainer } from "@swan-io/lake/src/components/ResponsiveContainer";
import { Space } from "@swan-io/lake/src/components/Space";
import { breakpoints, colors } from "@swan-io/lake/src/constants/design";
import { isNotNullish } from "@swan-io/lake/src/utils/nullish";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { match } from "ts-pattern";
import {
  FraudReportDetailsStep,
  FraudReportStep,
  fraudReportSteps,
} from "../../utils/fraudReport/types";
import { t } from "../../utils/i18n";

const styles = StyleSheet.create({
  root: {
    alignSelf: "stretch",
  },
  steps: {
    alignItems: "flex-end",
  },
  bar: {
    width: "100%",
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.gray[200],
    overflow: "hidden",
    transformOrigin: "bottom",
    transform: "scaleY(0.5)",
    transitionDuration: "300ms",
    transitionProperty: "transform",
  },
  barActive: {
    transform: "scaleY(1)",
  },
  barFill: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.current[500],
    transformOrigin: "left",
    transform: "scaleX(0)",
    transitionDuration: "300ms",
    transitionProperty: "transform",
  },
  barFilled: {
    transform: "scaleX(1)",
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

type LayoutStep = Exclude<FraudReportStep, "Intro">;

export type FraudReportLayoutStep = Exclude<LayoutStep, "Details"> | FraudReportDetailsStep;

type StepState = "Done" | "Active" | "Upcoming";

const layoutSteps = fraudReportSteps.filter((step): step is LayoutStep => step !== "Intro");

const getStepLabel = (step: LayoutStep) =>
  match(step)
    .with("Victim", () => t("fraudReport.step.victim"))
    .with("Transactions", () => t("fraudReport.step.transactions"))
    .with("Incident", () => t("fraudReport.step.incident"))
    .with("Details", () => t("fraudReport.step.details"))
    .with("Documents", () => t("fraudReport.step.documents"))
    .with("Submitted", () => t("fraudReport.step.confirmation"))
    .exhaustive();

const getStepState = (index: number, activeIndex: number): StepState =>
  index < activeIndex ? "Done" : index === activeIndex ? "Active" : "Upcoming";

type Props = {
  activeStep: FraudReportLayoutStep;
  detailsSteps: readonly FraudReportDetailsStep[];
  children: ReactNode;
};

export const FraudReportLayout = ({ activeStep, detailsSteps, children }: Props) => {
  const active = match(activeStep)
    .returnType<{ step: LayoutStep; barIndex: number }>()
    .with("Card", "Transfer", "Fraudster", step => ({
      step: "Details",
      barIndex: Math.max(detailsSteps.indexOf(step), 0),
    }))
    .with("Victim", "Transactions", "Incident", "Documents", "Submitted", step => ({
      step,
      barIndex: 0,
    }))
    .exhaustive();

  const activeIndex = layoutSteps.indexOf(active.step);

  const getBarCount = (step: LayoutStep) =>
    step === "Details" ? Math.max(detailsSteps.length, 1) : 1;

  const progress =
    (activeIndex + (active.barIndex + 1) / getBarCount(active.step)) / layoutSteps.length;

  return (
    <ResponsiveContainer breakpoint={breakpoints.medium} style={styles.root}>
      {({ small }) => (
        <>
          {small ? (
            <View>
              <LakeText variant="smallMedium" color={colors.current[500]}>
                {getStepLabel(active.step)}
              </LakeText>

              <LakeText variant="smallRegular" color={colors.gray[500]}>
                {t("fraudReport.stepCount", {
                  current: activeIndex + 1,
                  total: layoutSteps.length,
                })}
              </LakeText>

              <Space height={12} />

              <View style={styles.progress}>
                <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
              </View>
            </View>
          ) : (
            <View role="list">
              <Grid numColumns={layoutSteps.length} horizontalSpace={12} style={styles.steps}>
                {layoutSteps.map((step, index) => {
                  const state = getStepState(index, activeIndex);
                  const barCount = getBarCount(step);

                  const barStates = Array.from({ length: barCount }, (_, barIndex) =>
                    state === "Active" ? getStepState(barIndex, active.barIndex) : state,
                  );

                  return (
                    <View
                      key={step}
                      role="listitem"
                      aria-current={state === "Active" ? "step" : undefined}
                    >
                      <LakeText
                        variant={state === "Active" ? "medium" : "regular"}
                        color={state === "Upcoming" ? colors.gray[500] : colors.current[500]}
                      >
                        {index + 1}. {getStepLabel(step)}
                      </LakeText>

                      <Space height={12} />

                      <Grid numColumns={barCount} horizontalSpace={12}>
                        {barStates.map((barState, barIndex) => (
                          <View
                            key={barIndex}
                            style={[styles.bar, barState === "Active" && styles.barActive]}
                          >
                            <View
                              style={[styles.barFill, barState !== "Upcoming" && styles.barFilled]}
                            />
                          </View>
                        ))}
                      </Grid>
                    </View>
                  );
                })}
              </Grid>
            </View>
          )}

          <Space height={small ? 24 : 48} />

          {children}
        </>
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

export const FraudReportFooter = ({ onPrevious, onNext, loading, nextDisabled }: FooterProps) => (
  <ResponsiveContainer breakpoint={breakpoints.medium} style={styles.root}>
    {({ small }) => (
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
            ariaLabel={t("fraudReport.continue")}
            loading={loading}
            disabled={nextDisabled}
            onPress={onNext}
          >
            {t("fraudReport.continue")}
          </LakeButton>
        </Box>
      </>
    )}
  </ResponsiveContainer>
);
