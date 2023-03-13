import { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { colors, spacings } from "../constants/design";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { LakeHeading } from "./LakeHeading";
import { LakeText } from "./LakeText";

type Props = {
  steps: { label: string }[];
  activeStep: number;
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: spacings[24],
  },
  circle: {
    width: spacings[32],
    height: spacings[32],
    borderColor: colors.gray[100],
    borderWidth: 1,
    borderRadius: 16,
    color: colors.gray[400],
    alignItems: "center",
    justifyContent: "center",
  },
  activeCircle: {
    width: spacings[32],
    height: spacings[32],
    borderColor: colors.current[500],
    backgroundColor: colors.current[500],
    borderWidth: 1,
    borderRadius: 16,
    color: colors.current.contrast,
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    lineHeight: 0.8,
  },
  item: {
    paddingHorizontal: spacings[12],
  },
  textContainer: {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: 5 }],
  },
  text: {
    whiteSpace: "nowrap",
  },
  separator: {
    height: spacings[4],
    borderRadius: 2,
    backgroundColor: colors.gray[100],
    flexGrow: 1,
  },
  doneSeparator: {
    backgroundColor: colors.current[500],
  },
});

export const Stepper = ({ steps, activeStep }: Props) => {
  return (
    <Box direction="row" alignItems="center" style={styles.container}>
      {steps.map((item, index) => {
        const isActive = index === activeStep;
        const isDone = index < activeStep;
        const color = isActive || isDone ? colors.current.contrast : colors.gray[300];
        const textColor = isActive || isDone ? colors.current[500] : colors.gray[300];

        return (
          <Fragment key={index}>
            {index > 0 ? (
              <View style={[styles.separator, (isActive || isDone) && styles.doneSeparator]} />
            ) : null}

            <View style={styles.item}>
              <View style={isActive || isDone ? styles.activeCircle : styles.circle}>
                {isDone ? (
                  <Icon size={20} name="checkmark-filled" color={color} />
                ) : (
                  <LakeHeading level={3} variant="h3" color={color} style={styles.counter}>
                    {String(index + 1)}
                  </LakeHeading>
                )}
              </View>

              <View style={styles.textContainer}>
                <LakeText
                  style={styles.text}
                  color={textColor}
                  variant={isDone || isActive ? "semibold" : "regular"}
                >
                  {item.label}
                </LakeText>
              </View>
            </View>
          </Fragment>
        );
      })}
    </Box>
  );
};
