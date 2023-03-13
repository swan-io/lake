import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Box } from "../src/components/Box";
import { LakeText } from "../src/components/LakeText";
import { SidebarNavigationTracker, SidebarNavigationTrackerActiveMarker, } from "../src/components/SidebarNavigationTracker";
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
};
const generateInterval = (start, end) => new Array(end - start + 1).fill(0).map((_, index) => start + index);
const rows = generateInterval(1, 10).map(id => ({
    id: id.toString(),
    title: `Row ${id}`,
}));
export const Default = () => {
    const [activeRow, setActiveRow] = useState("");
    const selectRow = (id) => () => {
        setActiveRow(id);
    };
    return (_jsx(StoryBlock, { title: "SidebarNavigationTracker", description: "You can click on a row to display the navigation tracker", children: _jsx(SidebarNavigationTracker, { contentContainerStyle: styles.container, children: rows.map(row => (_jsx(Pressable, { onPress: selectRow(row.id), children: _jsxs(Box, { style: styles.row, direction: "row", children: [activeRow === row.id && (_jsx(SidebarNavigationTrackerActiveMarker, { color: colors.positive.primary })), _jsx(LakeText, { color: activeRow === row.id ? colors.positive.primary : colors.gray.primary, variant: activeRow === row.id ? "semibold" : "regular", children: row.title })] }) }, row.id))) }) }));
};
