import { Meta } from "@storybook/react";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Box } from "../src/components/Box";
import { LakeText } from "../src/components/LakeText";
import {
  SidebarNavigationTracker,
  SidebarNavigationTrackerActiveMarker,
} from "../src/components/SidebarNavigationTracker";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    maxWidth: 200,
  },
  row: {
    height: 32,
    width: "100%",
  },
});

export default {
  title: "Interactivity/SidebarNavigationTracker",
  component: SidebarNavigationTracker,
} as Meta<typeof SidebarNavigationTracker>;

const generateInterval = (start: number, end: number) =>
  new Array(end - start + 1).fill(0).map((_, index) => start + index);

const rows = generateInterval(1, 10).map(id => ({
  id: id.toString(),
  title: `Row ${id}`,
}));

export const Default = () => {
  const [activeRow, setActiveRow] = useState("");

  const selectRow = (id: string) => () => {
    setActiveRow(id);
  };

  return (
    <StoryBlock
      title="SidebarNavigationTracker"
      description="You can click on a row to display the navigation tracker"
    >
      <SidebarNavigationTracker contentContainerStyle={styles.container}>
        {rows.map(row => (
          <Pressable key={row.id} onPress={selectRow(row.id)}>
            <Box style={styles.row} direction="row">
              {activeRow === row.id && (
                <SidebarNavigationTrackerActiveMarker color={colors.positive.primary} />
              )}

              <LakeText
                color={activeRow === row.id ? colors.positive.primary : colors.gray.primary}
                variant={activeRow === row.id ? "semibold" : "regular"}
              >
                {row.title}
              </LakeText>
            </Box>
          </Pressable>
        ))}
      </SidebarNavigationTracker>
    </StoryBlock>
  );
};
