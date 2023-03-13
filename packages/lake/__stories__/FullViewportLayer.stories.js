import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { FullViewportLayer } from "../src/components/FullViewportLayer";
import { Grid } from "../src/components/Grid";
import { LakeButton } from "../src/components/LakeButton";
import { Space } from "../src/components/Space";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";
const styles = StyleSheet.create({
    block: {
        height: 200,
        backgroundColor: colors.gray[100],
        borderRadius: 5,
    },
    grid: {
        padding: 20,
    },
    button: {
        alignSelf: "flex-start",
    },
    buttonClosed: {
        alignSelf: "flex-end",
        paddingRight: 20,
    },
});
export default {
    title: "Layout/FullViewportLayer",
    component: FullViewportLayer,
};
export const Default = () => {
    const [visible, setVisible] = useState(false);
    return (_jsxs(StoryBlock, { title: "FullViewportLayer", description: [
            "This component creates a new layer over all the page with enter and leave animation. ",
            'You can try it by clicking on "Open" button.',
        ], children: [_jsx(LakeButton, { color: "shakespear", size: "small", onPress: () => setVisible(true), style: styles.button, children: "Open" }), _jsxs(FullViewportLayer, { visible: visible, children: [_jsxs(Box, { style: styles.buttonClosed, children: [_jsx(Space, { height: 8 }), _jsx(LakeButton, { color: "shakespear", size: "small", onPress: () => setVisible(false), children: "Close" })] }), _jsx(Space, { height: 8 }), _jsx(ScrollView, { children: _jsxs(Grid, { horizontalSpace: 4, verticalSpace: 4, numColumns: 4, style: styles.grid, children: [_jsx(View, { style: styles.block }), _jsx(View, { style: styles.block }), _jsx(View, { style: styles.block }), _jsx(View, { style: styles.block }), _jsx(View, { style: styles.block }), _jsx(View, { style: styles.block }), _jsx(View, { style: styles.block }), _jsx(View, { style: styles.block }), _jsx(View, { style: styles.block }), _jsx(View, { style: styles.block }), _jsx(View, { style: styles.block }), _jsx(View, { style: styles.block }), _jsx(View, { style: styles.block }), _jsx(View, { style: styles.block }), _jsx(View, { style: styles.block }), _jsx(View, { style: styles.block })] }) })] })] }));
};
