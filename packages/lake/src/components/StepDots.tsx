import { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../constants/design";
import { Box } from "./Box";
import { Space } from "./Space";

const styles = StyleSheet.create({
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.gray[200],
  },
  dotActive: {
    backgroundColor: colors.gray[500],
  },
});

type Props<T extends string> = {
  steps: T[];
  currentStep: T;
};

export const StepDots = <T extends string>({ steps, currentStep }: Props<T>) => {
  return (
    <Box direction="row" alignItems="center" justifyContent="center">
      {steps.map((step, index) => {
        const isCurrent = step === currentStep;
        const isLast = index === steps.length - 1;

        return (
          <Fragment key={step}>
            <View style={[styles.dot, isCurrent && styles.dotActive]} />

            {!isLast && <Space width={12} />}
          </Fragment>
        );
      })}
    </Box>
  );
};
