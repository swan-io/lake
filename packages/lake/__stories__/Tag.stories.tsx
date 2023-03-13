import { ComponentMeta } from "@storybook/react";
import { Grid } from "../src/components/Grid";
import { ProjectEnvTag } from "../src/components/ProjectEnvTag";
import { Tag } from "../src/components/Tag";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Informations/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const All = () => {
  return (
    <StoryBlock title="Tag">
      <StoryPart title="Tag colors">
        <Grid numColumns={5} verticalSpace={4}>
          <Tag color="live">Simple</Tag>
          <Tag color="sandbox">Sandbox</Tag>

          <Tag color="negative" onPressRemove={console.log}>
            Dismiss
          </Tag>

          <Tag color="warning" label="Label">
            O_o
          </Tag>

          <Tag color="gray" onPressRemove={console.log} label="Label">
            All
          </Tag>
        </Grid>
      </StoryPart>

      <StoryPart title="Env tags">
        <Grid numColumns={5} verticalSpace={4}>
          <ProjectEnvTag projectEnv="Live" />
          <ProjectEnvTag projectEnv="Sandbox" />
          <ProjectEnvTag projectEnv="Live" iconOnly={true} />
          <ProjectEnvTag projectEnv="Sandbox" iconOnly={true} />
        </Grid>
      </StoryPart>
    </StoryBlock>
  );
};
