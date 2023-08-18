import { Meta } from "@storybook/react";
import { StyleSheet } from "react-native";
import { Box } from "../src/components/Box";
import { ProjectEnvTag } from "../src/components/ProjectEnvTag";
import { Space } from "../src/components/Space";
import { Tag, TagProps } from "../src/components/Tag";
import { colors, ColorVariants, spacings } from "../src/constants/design";
import { noop } from "../src/utils/function";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
  },
  tag: {
    marginRight: spacings[12],
    marginBottom: spacings[12],
  },
});

export default {
  title: "Informations/Tag",
  component: Tag,
} as Meta<typeof Tag>;

type StoryArgs = Pick<TagProps, "iconSize" | "size" | "color" | "icon">;

export const All = ({ iconSize, size, color, icon }: StoryArgs) => {
  return (
    <StoryBlock title="Tag">
      <StoryPart title="Default">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => (
            <Tag key={color} style={styles.tag} color={color as ColorVariants} size={size} icon={icon} iconSize={iconSize} >
              Value ({color})
            </Tag>
          ))}
        </Box>
      </StoryPart>

      <StoryPart title="With label">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => (
            <Tag key={color} label="Label" style={styles.tag} color={color as ColorVariants}>
              Value ({color})
            </Tag>
          ))}
        </Box>
      </StoryPart>

      <StoryPart title="With dismiss">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => (
            <Tag key={color} onPressRemove={noop} style={styles.tag} color={color as ColorVariants}>
              Value ({color})
            </Tag>
          ))}
        </Box>
      </StoryPart>

      <StoryPart title="With label and dismiss">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => (
            <Tag
              key={color}
              label="Label"
              onPressRemove={noop}
              style={styles.tag}
              color={color as ColorVariants}
            >
              Value ({color})
            </Tag>
          ))}
        </Box>
      </StoryPart>

      <StoryPart title="Env tags">
        <Box direction="row" style={styles.container}>
          <ProjectEnvTag projectEnv="Live" />
          <Space width={12} height={12} />
          <ProjectEnvTag projectEnv="Sandbox" />
          <Space width={12} height={12} />
          <ProjectEnvTag projectEnv="Live" iconOnly={true} />
          <Space width={12} height={12} />
          <ProjectEnvTag projectEnv="Sandbox" iconOnly={true} />
        </Box>
      </StoryPart>
    </StoryBlock>
  );
};
