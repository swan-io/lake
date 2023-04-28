import { Meta } from "@storybook/react";
import { StyleSheet } from "react-native";
import { Icon } from "../src/components/Icon";
import { LakeAlert } from "../src/components/LakeAlert";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { Tile, TileGrid } from "../src/components/Tile";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  part: {
    padding: 6,
  },
  footer: {
    padding: 12,
  },
});

export default {
  title: "Layout/Tile",
  component: Tile,
} as Meta<typeof Tile>;

export const Default = () => {
  return (
    <StoryBlock title="Tile" description={["This component creates a tile. "]}>
      <StoryPart title="Default" style={styles.part}>
        <Tile />
      </StoryPart>

      <StoryPart title="With anchored alert" style={styles.part}>
        <Tile
          footer={<LakeAlert anchored={true} variant="error" title="It is an anchored alert" />}
        />
      </StoryPart>

      <StoryPart title="With icon and title" style={styles.part}>
        <Tile icon={<Icon name="document-regular" size={20} />} title="Tile title" />
      </StoryPart>

      <StoryPart title="With description" style={styles.part}>
        <Tile title="Tile title" description="It is a description" />
      </StoryPart>

      <StoryPart title="With header end" style={styles.part}>
        <Tile title="Tile title" headerEnd={<LakeText>It is a text</LakeText>} />
      </StoryPart>

      <StoryPart title="With footer" style={styles.part}>
        <Tile
          title="Tile title"
          footer={
            <>
              <Space width={48} />
              <LakeText style={styles.footer}>It is a text</LakeText>
            </>
          }
        />
      </StoryPart>

      <StoryPart title="Hovered" style={styles.part}>
        <Tile hovered={true} />
      </StoryPart>

      <StoryPart title="Selected" style={styles.part}>
        <Tile selected={true} />
      </StoryPart>

      <StoryPart title="Disabled" style={styles.part}>
        <Tile title="Tile title" disabled={true} />
      </StoryPart>

      <StoryPart title="With 2 tiles" style={styles.part}>
        <TileGrid>
          <Tile title="Tile title" />
          <Tile title="Tile title" />
        </TileGrid>
      </StoryPart>

      <StoryPart title="With 3 tiles" style={styles.part}>
        <TileGrid>
          <Tile title="Tile title" />
          <Tile title="Tile title" />
          <Tile title="Tile title" />
        </TileGrid>
      </StoryPart>
    </StoryBlock>
  );
};
