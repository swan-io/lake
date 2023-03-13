import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { LakeButton, LakeButtonGroup } from "../src/components/LakeButton";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { TransitionGroupView } from "../src/components/TransitionGroupView";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    maxWidth: 400,
  },
  enterAnimation: {
    animationKeyframes: {
      "0%": { opacity: 0, transform: [{ translateZ: 0 }, { translateX: 200 }] },
    },
    animationDuration: "200ms",
  },
  leaveAnimation: {
    animationKeyframes: {
      "100%": { opacity: 0, transform: [{ translateZ: 0 }, { translateX: 200 }] },
    },
    animationDuration: "200ms",
  },
  block: {
    position: "absolute",
    left: 0,
    width: 300,
    height: 40,
    backgroundColor: colors.negative[400],
    borderRadius: 8,
    transition: "200ms ease-in-out top",
  },
});

export default {
  title: "Animations/TransitionGroupView",
  component: TransitionGroupView,
} as ComponentMeta<typeof TransitionGroupView>;

export const Default = () => {
  const [items, setItems] = useState<string[]>([]);

  return (
    <StoryBlock
      title="TransitionGroupView"
      description={[
        "TransitionView is component triggers a transition when its children enter or leave the DOM.",
        "You can try it by adding & removing elements",
      ]}
    >
      <LakeButtonGroup>
        <LakeButton onPress={() => setItems(items => [...items, String(Math.random())])}>
          Append
        </LakeButton>

        <LakeButton onPress={() => setItems(items => [String(Math.random()), ...items])}>
          Prepend
        </LakeButton>

        <LakeButton
          onPress={() =>
            setItems(items => {
              return items.slice(1);
            })
          }
        >
          Remove first
        </LakeButton>

        <LakeButton
          onPress={() =>
            setItems(items => {
              return items.slice(0, -1);
            })
          }
        >
          Remove last
        </LakeButton>
      </LakeButtonGroup>

      <Space height={16} />

      <View style={styles.container}>
        <TransitionGroupView
          childStyle={styles.container}
          enter={styles.enterAnimation}
          leave={styles.leaveAnimation}
        >
          {items.map((item, index) => (
            <Box
              justifyContent="center"
              alignItems="center"
              style={[styles.block, { top: index * 60 }]}
              key={item}
            >
              <LakeText color={colors.live.contrast} variant="semibold">
                {item}
              </LakeText>
            </Box>
          ))}
        </TransitionGroupView>
      </View>
    </StoryBlock>
  );
};
