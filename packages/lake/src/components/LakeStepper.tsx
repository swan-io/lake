import { Option } from "@swan-io/boxed";
import { Link } from "@swan-io/chicane";
import { CSSProperties, ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { P, match } from "ts-pattern";
import { colors } from "../constants/design";
import { Box } from "./Box";
import { Grid } from "./Grid";
import { LakeHeading } from "./LakeHeading";
import { LakeText } from "./LakeText";
import { Space } from "./Space";

const linkStyle: CSSProperties = {
  textDecoration: "none",
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
  },
  bar: {
    width: "100%",
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.gray[100],
    overflow: "hidden",
    transformOrigin: "bottom",
    transform: "scaleY(0.5)",
    transitionDuration: "300ms",
    transitionProperty: "transform",
  },
  barActive: {
    transform: "scaleY(1)",
  },
  progressBar: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.current[500],
    transformOrigin: "left",
    transform: "scaleX(0)",
    transitionDuration: "300ms",
  },
  progressBarDone: {
    transform: "scaleX(1)",
  },
  progressBarError: {
    backgroundColor: colors.negative[500],
  },

  mobileContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
    paddingBottom: 10,
  },
  mobileNumber: {
    minWidth: 28,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.current[100],
    backgroundColor: colors.current[50],
  },
  mobileNumberError: {
    borderColor: colors.negative[100],
    backgroundColor: colors.negative[50],
  },
});

type StepLinkProps = {
  to: string;
  disabled: boolean;
  style?: CSSProperties;
  children: ReactNode;
};

const StepLink = ({ to, disabled, style, children }: StepLinkProps) => {
  return disabled ? (
    <span style={style}>{children}</span>
  ) : (
    <Link to={to} style={style}>
      {children}
    </Link>
  );
};

export type Step = {
  id: string;
  label: string;
  url: string;
  hasErrors?: boolean;
};

export type StepWithChildren = { label: string; children: Step[] };
export type TopLevelStep = Step | StepWithChildren;

type Props = {
  steps: TopLevelStep[];
  activeStepId: string;
  style?: StyleProp<ViewStyle>;
};

export const LakeStepper = ({ steps, activeStepId, style }: Props) => {
  const stepIds = steps
    .map(step =>
      match(step)
        .with({ id: P.string }, ({ id }) => [id])
        .with({ children: P.array(P.any) }, ({ children }) => children.map(({ id }) => id))
        .exhaustive(),
    )
    .flat();
  const activeStepIndex = stepIds.indexOf(activeStepId);

  return (
    <Grid numColumns={steps.length} horizontalSpace={12} style={[styles.container, style]}>
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const currentId = match(step)
          .with({ id: P.string }, ({ id }) => id)
          .with({ children: P.array(P.any) }, ({ children }) => children[0]?.id ?? "")
          .exhaustive();

        const isActive = match(step)
          .with({ id: activeStepId }, () => true)
          .with({ children: P.array(P.any) }, ({ children }) =>
            children.some(({ id }) => id === activeStepId),
          )
          .otherwise(() => false);
        const isDone = match(step)
          .with({ id: P.string }, ({ id }) => stepIds.indexOf(id) < activeStepIndex)
          .with({ children: P.array(P.any) }, ({ children }) =>
            children.every(({ id }) => stepIds.indexOf(id) < activeStepIndex),
          )
          .exhaustive();

        const hasErrors = match(step)
          .with({ hasErrors: true }, () => true)
          .with({ children: P.array(P.any) }, ({ children }) =>
            children.some(({ hasErrors }) => hasErrors === true),
          )
          .otherwise(() => false);

        const stepUrl = match(step)
          .with({ id: P.string }, ({ url }) => url)
          .with({ children: P.array(P.any) }, ({ children }) => children[0]?.url ?? "")
          .exhaustive();

        const subSteps = match(step)
          .with({ id: P.string }, step => [step])
          .with({ children: P.array(P.any) }, ({ children }) => children)
          .exhaustive();

        return (
          <StepLink key={currentId} to={stepUrl} disabled={!isDone} style={linkStyle}>
            <LakeText
              variant={isActive ? "medium" : "regular"}
              color={
                hasErrors && (isDone || isActive)
                  ? colors.negative[500]
                  : isActive || isDone
                    ? colors.current[500]
                    : colors.gray[300]
              }
            >
              {stepNumber}. {step.label}
            </LakeText>

            <Space height={12} />

            <Grid numColumns={subSteps.length} horizontalSpace={12}>
              {subSteps.map(subStep => {
                const isActive = subStep.id === activeStepId;
                const isDone = stepIds.indexOf(subStep.id) < activeStepIndex;
                const hasErrors = subStep.hasErrors === true;

                return (
                  <View key={subStep.id} style={[styles.bar, isActive && styles.barActive]}>
                    <View
                      style={[
                        styles.progressBar,
                        (isActive || isDone) && styles.progressBarDone,
                        hasErrors && styles.progressBarError,
                      ]}
                    />
                  </View>
                );
              })}
            </Grid>
          </StepLink>
        );
      })}
    </Grid>
  );
};

export const MobileStepTitle = ({ steps, activeStepId }: Props) => {
  const currentStep = Option.fromNullable(
    steps
      .map((step, index) =>
        match(step)
          .with({ id: P.string }, step => ({ ...step, number: `${index + 1}` }))
          .with({ children: P.array(P.any) }, ({ children }) =>
            children.map((child, subIndex) => ({
              ...child,
              number: `${index + 1}.${subIndex + 1}`,
            })),
          )
          .exhaustive(),
      )
      .flat()
      .find(({ id }) => id === activeStepId),
  ).map(({ label, hasErrors, number }) => ({
    number,
    label,
    isErrorState: hasErrors === true,
  }));

  return currentStep.match({
    Some: ({ number, label, isErrorState }) => (
      <Box
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={styles.mobileContainer}
      >
        <Box
          alignItems="center"
          justifyContent="center"
          style={[styles.mobileNumber, isErrorState && styles.mobileNumberError]}
        >
          <LakeText
            variant="smallMedium"
            color={isErrorState ? colors.negative[500] : colors.current[500]}
          >
            {number}
          </LakeText>
        </Box>

        <Space width={8} />

        <LakeHeading
          level={4}
          variant="h4"
          color={isErrorState ? colors.negative[500] : colors.current[500]}
        >
          {label}
        </LakeHeading>
      </Box>
    ),
    None: () => null,
  });
};
