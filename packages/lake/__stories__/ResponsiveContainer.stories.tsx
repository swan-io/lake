import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { LakeLabel } from "../src/components/LakeLabel";
import { LakeText } from "../src/components/LakeText";
import { ResponsiveContainer } from "../src/components/ResponsiveContainer";
import { Space } from "../src/components/Space";
import { Switch } from "../src/components/Switch";
import { breakpoints, colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  containerMobile: {
    maxWidth: 400,
  },
  switchContainer: {
    alignSelf: "flex-start",
  },
  block: {
    width: 120,
    height: 60,
    backgroundColor: colors.gray[0],
    borderRadius: 8,
  },
});

export default {
  title: "Layout/ResponsiveContainer",
  component: ResponsiveContainer,
} as Meta<typeof ResponsiveContainer>;

export const Default = () => {
  const [forceMobileWidth, setForceMobileWidth] = useState(false);

  return (
    <StoryBlock
      title="ResponsiveContainer"
      description={[
        "ResponsiveContainer is a component that allows you to render different content depending on the screen size.",
        'You can try it by toggling the "Mobile mode" switch',
      ]}
    >
      <LakeLabel
        label="Mobile mode"
        render={() => (
          <View style={styles.switchContainer}>
            <Switch value={forceMobileWidth} onValueChange={setForceMobileWidth} />
          </View>
        )}
      />

      <Space height={16} />

      <View style={forceMobileWidth ? styles.containerMobile : styles.container}>
        <ResponsiveContainer breakpoint={breakpoints.tiny}>
          {({ small }) => (
            <Box direction={small ? "column" : "row"}>
              <Box justifyContent="center" alignItems="center" style={styles.block}>
                <LakeText>{small ? "Mobile size" : "Desktop size"}</LakeText>
              </Box>

              <Space width={16} height={16} />

              <Box justifyContent="center" alignItems="center" style={styles.block}>
                <LakeText>{small ? "Mobile size" : "Desktop size"}</LakeText>
              </Box>

              <Space width={16} height={16} />

              <Box justifyContent="center" alignItems="center" style={styles.block}>
                <LakeText>{small ? "Mobile size" : "Desktop size"}</LakeText>
              </Box>
            </Box>
          )}
        </ResponsiveContainer>
      </View>
    </StoryBlock>
  );
};
