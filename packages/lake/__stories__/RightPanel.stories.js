import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { LakeButton } from "../src/components/LakeButton";
import { RightPanel } from "../src/components/RightPanel";
import { Space } from "../src/components/Space";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";
const styles = StyleSheet.create({
    button: {
        alignSelf: "flex-start",
    },
    panelContent: {
        padding: 16,
    },
    block1: {
        width: 120,
        height: 60,
        backgroundColor: colors.gray[200],
        borderRadius: 8,
    },
    block2: {
        width: 200,
        height: 60,
        backgroundColor: colors.gray[200],
        borderRadius: 8,
    },
    block3: {
        width: 180,
        height: 60,
        backgroundColor: colors.gray[200],
        borderRadius: 8,
    },
});
export default {
    title: "Layout/RightPanel",
    component: RightPanel,
};
export const Default = () => {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => {
        setIsOpen(true);
    };
    return (_jsxs(StoryBlock, { title: "RightPanel", description: [
            "RightPanel is a component that allows you to render a panel on the right side of the screen.",
            "To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element",
            "You can open it by clicking on the button below.",
        ], children: [_jsx(LakeButton, { onPress: open, size: "small", style: styles.button, children: "Open right panel" }), _jsx(RightPanel, { visible: isOpen, onPressClose: () => setIsOpen(false), children: _jsxs(Box, { style: styles.panelContent, children: [_jsx(View, { style: styles.block1 }), _jsx(Space, { height: 16 }), _jsx(View, { style: styles.block2 }), _jsx(Space, { height: 16 }), _jsx(View, { style: styles.block3 })] }) })] }));
};
