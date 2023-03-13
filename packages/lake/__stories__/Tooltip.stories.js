import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyleSheet } from "react-native";
import { Box } from "../src/components/Box";
import { LakeText } from "../src/components/LakeText";
import { LakeTooltip } from "../src/components/LakeTooltip";
import { Pressable } from "../src/components/Pressable";
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
};
export const Placements = () => {
    return (_jsxs(StoryBlock, { title: "Tooltip placements", children: [_jsx(StoryPart, { title: "Top", children: _jsx(Box, { direction: "row", justifyContent: "center", children: _jsx(LakeTooltip, { content: "Tooltip content", placement: "top", children: _jsx(Box, { style: styles.target, direction: "row", justifyContent: "center", alignItems: "center", children: _jsx(LakeText, { children: "Hover to display tooltip at top" }) }) }) }) }), _jsx(StoryPart, { title: "Bottom", children: _jsx(Box, { direction: "row", justifyContent: "center", children: _jsx(LakeTooltip, { content: "Tooltip content", placement: "bottom", children: _jsx(Box, { style: styles.target, direction: "row", justifyContent: "center", alignItems: "center", children: _jsx(LakeText, { children: "Hover to display tooltip at bottom" }) }) }) }) }), _jsx(StoryPart, { title: "Left", children: _jsx(Box, { direction: "row", justifyContent: "center", children: _jsx(LakeTooltip, { content: "Tooltip content", placement: "left", children: _jsx(Box, { style: styles.target, direction: "row", justifyContent: "center", alignItems: "center", children: _jsx(LakeText, { children: "Hover to display tooltip at left" }) }) }) }) }), _jsx(StoryPart, { title: "Right", children: _jsx(Box, { direction: "row", justifyContent: "center", children: _jsx(LakeTooltip, { content: "Tooltip content", placement: "right", children: _jsx(Box, { style: styles.target, direction: "row", justifyContent: "center", alignItems: "center", children: _jsx(LakeText, { children: "Hover to display tooltip at right" }) }) }) }) })] }));
};
export const Behaviors = () => {
    return (_jsxs(StoryBlock, { title: "Tooltip behaviors", children: [_jsx(StoryPart, { title: "Match Reference Width", children: _jsx(Box, { direction: "row", justifyContent: "center", children: _jsx(LakeTooltip, { content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", placement: "bottom", matchReferenceWidth: true, children: _jsx(Box, { style: styles.target, direction: "row", justifyContent: "center", alignItems: "center", children: _jsx(LakeText, { children: "Hover to display tooltip at bottom" }) }) }) }) }), _jsx(StoryPart, { title: "Without arrow", children: _jsx(Box, { direction: "row", justifyContent: "center", children: _jsx(LakeTooltip, { content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", placement: "bottom", hideArrow: true, children: _jsx(Box, { style: styles.target, direction: "row", justifyContent: "center", alignItems: "center", children: _jsx(LakeText, { children: "Hover to display tooltip at bottom" }) }) }) }) }), _jsx(StoryPart, { title: "Display onfocus", children: _jsx(Box, { direction: "row", justifyContent: "center", children: _jsx(LakeTooltip, { content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", placement: "bottom", togglableOnFocus: true, children: _jsx(Pressable, { children: _jsx(Box, { style: styles.target, direction: "row", justifyContent: "center", alignItems: "center", children: _jsx(LakeText, { children: "Focus or hover to display tooltip at bottom" }) }) }) }) }) })] }));
};
