import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { LakeCheckbox, LakeLabelledCheckbox, } from "../src/components/LakeCheckbox";
import { Pressable } from "../src/components/Pressable";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
const styles = StyleSheet.create({
    container: {
        alignSelf: "flex-start",
    },
});
export default {
    title: "Forms/Checkbox",
    component: LakeCheckbox,
};
const InteractiveCheckbox = ({ defaultValue = false, ...props }) => {
    const [value, setValue] = useState(defaultValue);
    const toggle = () => {
        setValue(v => !v);
    };
    return (_jsx(Pressable, { style: styles.container, onPress: toggle, disabled: props.disabled, children: _jsx(LakeCheckbox, { value: value, ...props }) }));
};
const InteractiveLabelledCheckbox = ({ defaultValue = false, ...props }) => {
    const [value, setValue] = useState(defaultValue);
    const toggle = () => {
        setValue(v => !v);
    };
    return (_jsx(View, { style: styles.container, children: _jsx(LakeLabelledCheckbox, { value: value, onValueChange: toggle, ...props }) }));
};
export const Variations = () => {
    return (_jsxs(StoryBlock, { title: "Variations", children: [_jsx(StoryPart, { title: "Default", children: _jsx(InteractiveCheckbox, {}) }), _jsx(StoryPart, { title: "Lablelled", children: _jsx(InteractiveLabelledCheckbox, { label: "Enabled" }) }), _jsx(StoryPart, { title: "Disabled", children: _jsx(InteractiveCheckbox, { disabled: true }) }), _jsx(StoryPart, { title: "Disabled checked", children: _jsx(InteractiveCheckbox, { defaultValue: true, disabled: true }) }), _jsx(StoryPart, { title: "Error", children: _jsx(InteractiveCheckbox, { isError: true }) })] }));
};
export const Colors = () => {
    return (_jsxs(StoryBlock, { title: "Colors", description: "Checkbox color impacts only checked state", children: [_jsx(StoryPart, { title: "Default", children: _jsx(InteractiveCheckbox, { defaultValue: true }) }), _jsx(StoryPart, { title: "gray", children: _jsx(InteractiveCheckbox, { defaultValue: true, color: "gray" }) }), _jsx(StoryPart, { title: "live", children: _jsx(InteractiveCheckbox, { defaultValue: true, color: "live" }) }), _jsx(StoryPart, { title: "sandbox", children: _jsx(InteractiveCheckbox, { defaultValue: true, color: "sandbox" }) }), _jsx(StoryPart, { title: "positive", children: _jsx(InteractiveCheckbox, { defaultValue: true, color: "positive" }) }), _jsx(StoryPart, { title: "warning", children: _jsx(InteractiveCheckbox, { defaultValue: true, color: "warning" }) }), _jsx(StoryPart, { title: "negative", children: _jsx(InteractiveCheckbox, { defaultValue: true, color: "negative" }) }), _jsx(StoryPart, { title: "current", children: _jsx(InteractiveCheckbox, { defaultValue: true, color: "current" }) }), _jsx(StoryPart, { title: "partner", children: _jsx(InteractiveCheckbox, { defaultValue: true, color: "partner" }) }), _jsx(StoryPart, { title: "swan", children: _jsx(InteractiveCheckbox, { defaultValue: true, color: "swan" }) }), _jsx(StoryPart, { title: "shakespear", children: _jsx(InteractiveCheckbox, { defaultValue: true, color: "shakespear" }) }), _jsx(StoryPart, { title: "darkPink", children: _jsx(InteractiveCheckbox, { defaultValue: true, color: "darkPink" }) }), _jsx(StoryPart, { title: "sunglow", children: _jsx(InteractiveCheckbox, { defaultValue: true, color: "sunglow" }) }), _jsx(StoryPart, { title: "mediumSladeBlue", children: _jsx(InteractiveCheckbox, { defaultValue: true, color: "mediumSladeBlue" }) })] }));
};
