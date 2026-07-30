import { Fragment, ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { match } from "ts-pattern";
import { backgroundColor, colors, spacings } from "../constants/design";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { LakeText } from "./LakeText";
import { LakeTooltip } from "./LakeTooltip";
import { Space } from "./Space";

const CIRCLE_SIZE = 24;
const CHECKLIST_RING_SIZE = 14;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  rail: {
    width: CIRCLE_SIZE,
    alignItems: "center",
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  circleDone: {
    backgroundColor: colors.positive[500],
  },
  circleActive: {
    backgroundColor: backgroundColor.accented,
    borderWidth: 2,
    borderColor: colors.gray[900],
  },
  circleFuture: {
    backgroundColor: colors.gray[100],
  },
  connector: {
    flexGrow: 1,
    width: 1,
    backgroundColor: colors.gray[200],
  },
  content: {
    flex: 1,
  },
  contentSpacing: {
    paddingBottom: spacings[24],
  },
  labelRow: {
    minHeight: CIRCLE_SIZE,
  },
  checklistRing: {
    width: CHECKLIST_RING_SIZE,
    height: CHECKLIST_RING_SIZE,
    borderRadius: CHECKLIST_RING_SIZE / 2,
    borderWidth: 1,
    borderColor: colors.gray[300],
  },
});

export type ProgressTrackerStepStatus = "done" | "active" | "future";

export type ProgressTrackerChecklistItem = {
  label: string;
  isDone: boolean;
  // string or rich content (e.g. a BulletList — pass contrast colors, the panel is dark)
  help?: ReactNode;
};

export type ProgressTrackerStep = {
  id: string;
  label: string;
  // explicit per-step status (rather than a single active id) keeps the
  // component purely presentational — it derives nothing from step order
  status: ProgressTrackerStepStatus;
  badge?: ReactNode;
  checklist?: ProgressTrackerChecklistItem[];
  message?: ReactNode;
};

type Props = {
  steps: ProgressTrackerStep[];
  style?: StyleProp<ViewStyle>;
};

export const ProgressTracker = ({ steps, style }: Props) => {
  return (
    <View role="list" style={style}>
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <View
            key={step.id}
            role="listitem"
            aria-current={step.status === "active" ? "step" : undefined}
            style={styles.row}
          >
            <View style={styles.rail}>
              {match(step.status)
                .with("done", () => (
                  <View style={[styles.circle, styles.circleDone]}>
                    <Icon name="checkmark-filled" size={14} color={colors.positive.contrast} />
                  </View>
                ))
                .with("active", () => (
                  <View style={[styles.circle, styles.circleActive]}>
                    <LakeText variant="smallSemibold" color={colors.gray[900]}>
                      {index + 1}
                    </LakeText>
                  </View>
                ))
                .with("future", () => (
                  <View style={[styles.circle, styles.circleFuture]}>
                    <LakeText variant="smallSemibold" color={colors.gray[500]}>
                      {index + 1}
                    </LakeText>
                  </View>
                ))
                .exhaustive()}

              {!isLast && <View style={styles.connector} />}
            </View>

            <Space width={12} />

            <View style={[styles.content, !isLast && styles.contentSpacing]}>
              <Box direction="row" alignItems="center" style={styles.labelRow}>
                <LakeText
                  variant="smallMedium"
                  color={step.status === "future" ? colors.gray[500] : colors.gray[900]}
                >
                  {step.label}
                </LakeText>

                {step.badge != null && (
                  <>
                    <Space width={8} />

                    {step.badge}
                  </>
                )}
              </Box>

              {step.checklist != null && step.checklist.length > 0 && (
                <>
                  <Space height={12} />

                  {step.checklist.map((item, itemIndex) => (
                    <Fragment key={itemIndex}>
                      {itemIndex > 0 && <Space height={8} />}

                      <Box direction="row" alignItems="center">
                        {item.isDone ? (
                          <Icon
                            name="checkmark-filled"
                            size={CHECKLIST_RING_SIZE}
                            color={colors.positive[500]}
                          />
                        ) : (
                          <View style={styles.checklistRing} />
                        )}

                        <Space width={8} />

                        <LakeText variant="smallRegular" color={colors.gray[700]}>
                          {item.label}
                        </LakeText>

                        {item.help != null && (
                          <>
                            <Space width={4} />

                            <LakeTooltip
                              content={item.help}
                              placement="center"
                              togglableOnFocus={true}
                              describedBy="copy"
                              width={300}
                            >
                              <Icon
                                name="info-regular"
                                size={CHECKLIST_RING_SIZE}
                                color={colors.gray[900]}
                              />
                            </LakeTooltip>
                          </>
                        )}
                      </Box>
                    </Fragment>
                  ))}
                </>
              )}

              {step.message != null && (
                <>
                  <Space height={12} />

                  {step.message}
                </>
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
};
