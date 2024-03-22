import { Meta } from "@storybook/react";
import { StyleSheet } from "react-native";
import { Fragment } from "react/jsx-runtime";
import { Box } from "../src/components/Box";
import { LakeText } from "../src/components/LakeText";
import { InformationTooltip, LakeTooltip } from "../src/components/LakeTooltip";
import { Pressable } from "../src/components/Pressable";
import { Space } from "../src/components/Space";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  target: {
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: colors.gray[100],
    borderRadius: 6,
  },
});

export default {
  title: "Interactivity/Tooltip",
  component: LakeTooltip,
} as Meta<typeof LakeTooltip>;

export const Placements = () => {
  return (
    <StoryBlock title="Tooltip placements">
      <StoryPart title="Left">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Tooltip content" placement="left">
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Hover to display tooltip at top</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>

      <StoryPart title="Center">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Tooltip content" placement="center">
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Hover to display tooltip at bottom</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>

      <StoryPart title="Right">
        <Box direction="row" justifyContent="center">
          <LakeTooltip content="Tooltip content" placement="right">
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Hover to display tooltip at left</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>

      <StoryPart title="Auto">
        <Box direction="row" justifyContent="center">
          {Array.from({ length: 10 }, (_, index) => (
            <Fragment key={String(index)}>
              {index > 0 ? <Space width={12} /> : null}

              <LakeTooltip content="Tooltip content">
                <Box
                  style={styles.target}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <LakeText>Hover</LakeText>
                </Box>
              </LakeTooltip>
            </Fragment>
          ))}
        </Box>
      </StoryPart>
    </StoryBlock>
  );
};

export const InfoTooltip = () => {
  return (
    <StoryBlock title="Information Tooltip">
      <StoryPart title="Default">
        <Box direction="row" justifyContent="center">
          <InformationTooltip text="Default information tooltip" />
        </Box>
      </StoryPart>

      <StoryPart title="With custom icon">
        <Box direction="row" justifyContent="center">
          <InformationTooltip
            icon="building-shop-regular"
            text="Information tooltip with custom icon"
          />
        </Box>
      </StoryPart>
    </StoryBlock>
  );
};

export const Behaviors = () => {
  return (
    <StoryBlock title="Tooltip behaviors">
      <StoryPart title="Match Reference Width">
        <Box direction="row" justifyContent="center">
          <LakeTooltip
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            placement="center"
            matchReferenceWidth={true}
          >
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Hover to display tooltip at bottom</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>

      <StoryPart title="Without arrow">
        <Box direction="row" justifyContent="center">
          <LakeTooltip
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            placement="center"
            hideArrow={true}
          >
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Hover to display tooltip at bottom</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>

      <StoryPart title="Display onfocus">
        <Box direction="row" justifyContent="center">
          <LakeTooltip
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            placement="center"
            togglableOnFocus={true}
          >
            <Pressable>
              <Box
                style={styles.target}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <LakeText>Focus or hover to display tooltip at bottom</LakeText>
              </Box>
            </Pressable>
          </LakeTooltip>
        </Box>
      </StoryPart>

      <StoryPart title="Disabled">
        <Box direction="row" justifyContent="center">
          <LakeTooltip
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            placement="center"
            disabled={true}
          >
            <Box style={styles.target} direction="row" justifyContent="center" alignItems="center">
              <LakeText>Tooltip should not be displayed on hover</LakeText>
            </Box>
          </LakeTooltip>
        </Box>
      </StoryPart>
    </StoryBlock>
  );
};
