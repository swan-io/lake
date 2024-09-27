import { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { match } from "ts-pattern";
import { colors } from "../constants/design";
import { BorderedIcon } from "./BorderedIcon";
import { Box } from "./Box";
import { IconName } from "./Icon";
import { LakeText } from "./LakeText";
import { Space } from "./Space";

const desktopIconSize = 100;
const borderHeight = 2;
const desktopPadding = 40;

const mobileNumberSize = 24;
const mobileBorderWidth = 2;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  textContainer: {
    width: desktopIconSize + desktopPadding,
  },
  lastTextContainer: {
    width: desktopIconSize,
  },
  desktopBarContainer: {
    flex: 1,
    paddingRight: 40,
    height: desktopIconSize,
  },
  desktopBar: {
    width: "100%",
    height: borderHeight,
    borderRadius: borderHeight / 2,
    backgroundColor: colors.gray[100],
  },

  mobileNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: colors.current[100],
    borderWidth: 1,
    backgroundColor: colors.current[50],
  },
  mobileNumberActive: {
    borderColor: colors.current[500],
  },
  mobileNumberText: {
    position: "relative",
  },
  mobileBarContainer: {
    width: mobileNumberSize,
    paddingVertical: 4,
  },
  mobileBar: {
    width: mobileBorderWidth,
    height: 12,
    borderRadius: mobileBorderWidth / 2,
    backgroundColor: colors.gray[100],
  },
  completeMobileBar: {
    backgroundColor: colors.current[500],
  },
});

export type FlowStep = {
  label: string;
  icon: IconName;
  isComplete?: boolean;
};

type Props = {
  steps: FlowStep[];
  mode: "desktop" | "mobile";
};

export const FlowPresentation = ({ steps, mode }: Props) => {
  return match(mode)
    .with("desktop", () => (
      <Box direction="row" style={styles.container}>
        {steps.map(({ label, icon }, index) => {
          const isLast = index === steps.length - 1;

          return (
            <Fragment key={index}>
              <Box>
                <BorderedIcon name={icon} size={100} padding={16} />
                <Space height={32} />

                <View style={isLast ? styles.lastTextContainer : styles.textContainer}>
                  <LakeText color={colors.gray[900]} variant="medium">
                    {index + 1}. {label}
                  </LakeText>
                </View>
              </Box>

              {!isLast && (
                <Box direction="row" alignItems="center" style={styles.desktopBarContainer}>
                  <View style={styles.desktopBar} />
                </Box>
              )}
            </Fragment>
          );
        })}
      </Box>
    ))
    .with("mobile", () => (
      <Box direction="column">
        {steps.map(({ label, isComplete }, index) => {
          return (
            <Fragment key={index}>
              {index > 0 && (
                <Box alignItems="center" style={styles.mobileBarContainer}>
                  <View
                    style={[
                      styles.mobileBar,
                      isComplete === true ? styles.completeMobileBar : null,
                    ]}
                  />
                </Box>
              )}

              <Box direction="row" alignItems="center">
                <Box
                  alignItems="center"
                  justifyContent="center"
                  style={[
                    styles.mobileNumber,
                    isComplete === true ? styles.mobileNumberActive : null,
                  ]}
                >
                  <LakeText
                    color={colors.current.primary}
                    variant="smallMedium"
                    style={styles.mobileNumberText}
                  >
                    {index + 1}
                  </LakeText>
                </Box>

                <Space width={12} />

                <LakeText color={colors.gray[700]} variant="smallMedium">
                  {label}
                </LakeText>
              </Box>
            </Fragment>
          );
        })}
      </Box>
    ))
    .exhaustive();
};
