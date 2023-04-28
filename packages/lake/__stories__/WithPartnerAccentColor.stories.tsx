import { Meta } from "@storybook/react";
import { StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { WithPartnerAccentColor } from "../src/components/WithPartnerAccentColor";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
  },
  colorBlock: {
    width: 60,
    height: 40,
    margin: 8,
    borderRadius: 4,
  },
});

export default {
  title: "Utilities/WithPartnerAccentColor",
  component: WithPartnerAccentColor,
} as Meta<typeof WithPartnerAccentColor>;

type StoryArgs = {
  color: string;
};

export const Default = ({ color = "black" }: StoryArgs) => {
  return (
    <StoryBlock
      title="WithPartnerAccentColor"
      description={[
        "This component generate from a color palette with different shades and change the color of all its children using 'colors.partner[shade]'",
        "You can edit the color in 'Controls' panel. (Press A to open it)",
      ]}
    >
      <WithPartnerAccentColor color={color}>
        <Box direction="row" style={styles.container}>
          {Object.keys(colors.partner).map(colorShade => (
            <View
              key={colorShade}
              style={[
                styles.colorBlock,
                { backgroundColor: colors.partner[colorShade as keyof typeof colors.partner] },
              ]}
            />
          ))}
        </Box>
      </WithPartnerAccentColor>
    </StoryBlock>
  );
};
