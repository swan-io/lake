import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Box } from "../src/components/Box";
import { LakeButton } from "../src/components/LakeButton";
import { LakeText } from "../src/components/LakeText";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
const styles = StyleSheet.create({
    buttons: {
        flexWrap: "wrap",
    },
    buttonWrapper: {
        marginRight: 32,
        marginBottom: 16,
    },
    button: {
        minWidth: 200,
    },
    countValue: {
        width: 24,
    },
});
export default {
    title: "Interactivity/Button",
    component: LakeButton,
};
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const ButtonWithCounter = ({ ...props }) => {
    const [counter, setCounter] = useState(0);
    return (_jsxs(Box, { direction: "row", alignItems: "center", style: styles.buttonWrapper, children: [_jsx(LakeButton, { ...props, style: styles.button, onPress: () => setCounter(c => c + 1) }), _jsx(LakeText, { align: "right", style: styles.countValue, children: counter })] }));
};
export const Colors = () => {
    return (_jsxs(StoryBlock, { title: "Button colors", children: [_jsx(StoryPart, { title: "Primary", children: _jsx(Box, { direction: "row", style: styles.buttons, children: Object.keys(colors).map(color => (_jsx(ButtonWithCounter, { mode: "primary", color: color, children: capitalize(color) }, color))) }) }), _jsx(StoryPart, { title: "Secondary", children: _jsx(Box, { direction: "row", style: styles.buttons, children: Object.keys(colors).map(color => (_jsx(ButtonWithCounter, { mode: "secondary", color: color, children: capitalize(color) }, color))) }) }), _jsx(StoryPart, { title: "Tertiary", children: _jsx(Box, { direction: "row", style: styles.buttons, children: Object.keys(colors).map(color => (_jsx(ButtonWithCounter, { mode: "tertiary", color: color, children: capitalize(color) }, color))) }) })] }));
};
export const ButtonStates = () => {
    return (_jsxs(StoryBlock, { title: "Button states", children: [_jsx(StoryPart, { title: "Small", children: _jsx(ButtonWithCounter, { size: "small", color: "live", children: "Small button" }) }), _jsx(StoryPart, { title: "Disabled", children: _jsx(ButtonWithCounter, { disabled: true, color: "live", children: "Disabled" }) }), _jsx(StoryPart, { title: "Loading", children: _jsx(ButtonWithCounter, { loading: true, color: "live", children: "Loading" }) }), _jsx(StoryPart, { title: "With pill", children: _jsx(ButtonWithCounter, { pill: true, color: "live", children: "Pill" }) }), _jsx(StoryPart, { title: "With icon", children: _jsxs(Box, { direction: "row", style: styles.buttons, children: [_jsx(ButtonWithCounter, { icon: "add-circle-filled", color: "positive", children: "Add" }), _jsx(ButtonWithCounter, { icon: "delete-filled", iconPosition: "end", color: "negative", children: "Remove" })] }) })] }));
};
