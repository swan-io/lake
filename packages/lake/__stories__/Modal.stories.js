import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Grid } from "../src/components/Grid";
import { LakeButton } from "../src/components/LakeButton";
import { LakeModal } from "../src/components/LakeModal";
import { Space } from "../src/components/Space";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
const styles = StyleSheet.create({
    block: {
        height: 200,
        backgroundColor: colors.gray[100],
        borderRadius: 5,
    },
    grid: {
        paddingBottom: 20,
    },
    button: {
        alignSelf: "flex-start",
    },
});
export default {
    title: "Layout/Modal",
    component: LakeModal,
};
const ButtonModal = ({ withCloseCross = false, ...props }) => {
    const [visible, setVisible] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx(LakeButton, { color: "live", size: "small", onPress: () => setVisible(true), style: styles.button, children: "Open" }), _jsxs(LakeModal, { ...props, visible: visible, onPressClose: withCloseCross ? () => setVisible(false) : undefined, children: [_jsx(Space, { height: 8 }), _jsx(ScrollView, { children: _jsxs(Grid, { horizontalSpace: 4, verticalSpace: 4, numColumns: 4, style: styles.grid, children: [_jsx(View, { style: styles.block }), _jsx(View, { style: styles.block }), _jsx(View, { style: styles.block }), _jsx(View, { style: styles.block })] }) }), _jsx(LakeButton, { color: "live", size: "small", onPress: () => setVisible(false), children: "Close" })] })] }));
};
export const All = () => {
    return (_jsxs(StoryBlock, { title: "Modal", description: [
            "This component creates a modal with enter and leave animation. ",
            'You can try it by clicking on "Open" button.',
        ], children: [_jsx(StoryPart, { title: "Default", children: _jsx(ButtonModal, {}) }), _jsx(StoryPart, { title: "With title", children: _jsx(ButtonModal, { title: "A title" }) }), _jsx(StoryPart, { title: "With title and icon", children: _jsx(ButtonModal, { title: "Title and icon", icon: "add-circle-filled", color: "live" }) }), _jsx(StoryPart, { title: "Closable with click outside and top right cross", children: _jsx(ButtonModal, { title: "Title and icon", icon: "add-circle-filled", color: "live", withCloseCross: true }) })] }));
};
