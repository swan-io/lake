import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { Separator } from "../src/components/Separator";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
const styles = StyleSheet.create({
    block: {
        width: 60,
        height: 60,
        backgroundColor: colors.gray[200],
        borderRadius: 8,
    },
});
export default {
    title: "Layout/Separator",
    component: Separator,
};
export const Directions = () => {
    return (_jsxs(StoryBlock, { title: "Separator", children: [_jsx(StoryPart, { title: "Horizontal", children: _jsxs(Box, { direction: "row", alignItems: "center", children: [_jsx(View, { style: styles.block }), _jsx(Separator, { horizontal: true, space: 16 }), _jsx(View, { style: styles.block })] }) }), _jsx(StoryPart, { title: "Vertical", children: _jsxs(Box, { direction: "column", alignItems: "start", children: [_jsx(View, { style: styles.block }), _jsx(Separator, { horizontal: false, space: 16 }), _jsx(View, { style: styles.block })] }) })] }));
};
