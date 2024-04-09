import { Meta } from "@storybook/react";
import { StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { Icon } from "../src/components/Icon";
import { LakeText } from "../src/components/LakeText";
import { ProjectEnvTag } from "../src/components/ProjectEnvTag";
import { Space } from "../src/components/Space";
import { Tag } from "../src/components/Tag";
import { ColorVariants, colors, spacings } from "../src/constants/design";
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
  rightsIcon: {
    marginHorizontal: spacings[4],
  },
  separator: {
    width: 1,
    alignSelf: "stretch",
    backgroundColor: colors.gray[200],
    marginHorizontal: spacings[4],
  },
});

export default {
  title: "Informations/Tag",
  component: Tag,
} as Meta<typeof Tag>;

export const All = () => {
  return (
    <StoryBlock title="Tag">
      <StoryPart title="Default">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => (
            <Tag key={color} style={styles.tag} color={color as ColorVariants}>
              Value ({color})
            </Tag>
          ))}
        </Box>
      </StoryPart>

      <StoryPart title="Large">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => (
            <Tag key={color} size="large" style={styles.tag} color={color as ColorVariants}>
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

      <StoryPart title="With icon">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => (
            <Tag
              key={color}
              style={styles.tag}
              icon="arrow-down-filled"
              color={color as ColorVariants}
            >
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

      <StoryPart title="With max width">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => (
            <Tag
              key={color}
              label="Label"
              onPressRemove={noop}
              style={[styles.tag, { maxWidth: 150 }]}
              color={color as ColorVariants}
            >
              Value with long long text and ellipsis ({color})
            </Tag>
          ))}
        </Box>
      </StoryPart>

      <StoryPart title="With icon only">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => (
            <Tag
              key={color}
              icon="arrow-down-filled"
              style={styles.tag}
              color={color as ColorVariants}
            ></Tag>
          ))}
        </Box>
      </StoryPart>

      <StoryPart title="With icon only (large)">
        <Box direction="row" style={styles.container}>
          {Object.keys(colors).map(color => (
            <Tag
              key={color}
              icon="arrow-down-filled"
              style={styles.tag}
              color={color as ColorVariants}
              size="large"
            ></Tag>
          ))}
        </Box>
      </StoryPart>

      <StoryPart title="With elements inside">
        <Tag color="gray">
          <>
            <Icon name="eye-regular" size={16} color={colors.swan[500]} style={styles.rightsIcon} />

            <Icon
              name="arrow-swap-regular"
              size={16}
              color={colors.swan[500]}
              style={styles.rightsIcon}
            />

            <Icon
              name="person-add-regular"
              size={16}
              color={colors.swan[500]}
              style={styles.rightsIcon}
            />

            <Icon
              name="settings-regular"
              size={16}
              color={colors.swan[500]}
              style={styles.rightsIcon}
            />

            <View style={styles.separator} />

            <>
              <Icon
                name="payment-regular"
                size={16}
                color={colors.swan[500]}
                style={styles.rightsIcon}
              />

              <LakeText color={colors.swan[500]} variant="smallRegular">
                12
              </LakeText>
            </>
          </>
        </Tag>
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
