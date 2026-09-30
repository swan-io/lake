import { Meta } from "@storybook/react";
import { useId, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { Switch } from "../src/components/Switch";
import { TransitionView } from "../src/components/TransitionView";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    maxWidth: 400,
  },
  enterAnimation: {
    animationKeyframes: {
      "0%": { opacity: 0, transform: "translateZ(0px) translateX(200px)" },
    },
    animationDuration: "300ms",
  },
  leaveAnimation: {
    animationKeyframes: {
      "100%": { opacity: 0, transform: "translateZ(0px) translateX(200px)" },
    },
    animationDuration: "300ms",
  },
  block: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 60,
    backgroundColor: colors.negative[400],
    borderRadius: 8,
  },
});

export default {
  title: "Animations/TransitionView",
  component: TransitionView,
} as Meta<typeof TransitionView>;

export const Default = () => {
  const [showBlock, setShowBlock] = useState(false);
  const switchLabelId = useId();

  return (
    <StoryBlock
      title="TransitionView"
      description={[
        "TransitionView is component triggers a transition when an element enters or leaves the DOM.",
        "You can try it by toggling the switch",
      ]}
    >
      <Box direction="row" alignItems="center">
        <Switch value={showBlock} onValueChange={setShowBlock} labelledBy={switchLabelId} />
        <Space width={12} />
        <LakeText id={switchLabelId} color={colors.gray[700]}>
          Switch displayed content
        </LakeText>
      </Box>

      <Space height={16} />

      <View style={styles.container}>
        <TransitionView
          style={styles.container}
          enter={styles.enterAnimation}
          leave={styles.leaveAnimation}
        >
          {showBlock ? (
            <Box justifyContent="center" alignItems="center" style={styles.block}>
              <LakeText color={colors.live.contrast} variant="semibold">
                Second block
              </LakeText>
            </Box>
          ) : null}
        </TransitionView>
      </View>
    </StoryBlock>
  );
};
