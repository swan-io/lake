import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { LakeSelect } from "../src/components/LakeSelect";
import { LakeText } from "../src/components/LakeText";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
const styles = StyleSheet.create({
    select: {
        maxWidth: 250,
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 8,
        backgroundColor: colors.gray[0],
    },
});
export default {
    title: "Forms/Select",
    component: LakeSelect,
};
const items = [
    { name: "Camille", value: 1 },
    { name: "Charlotte", value: 2 },
    { name: "Francis", value: 3 },
    { name: "Émilie", value: 4 },
    { name: "François", value: 5 },
    { name: "Laura", value: 6 },
    { name: "Marie-Anne", value: 7 },
    { name: "Natasha", value: 8 },
    { name: "Nicolas", value: 9 },
    { name: "Pierre", value: 10 },
    { name: "Thomas", value: 11 },
    { name: "Valérie", value: 12 },
    { name: "Yann", value: 13 },
    { name: "Zoé", value: 14 },
    { name: "Jérôme", value: 15 },
    { name: "Thomas", value: 16 },
];
const EditableSelect = ({ initialValue, ...props }) => {
    const [value, setValue] = useState(initialValue);
    return (_jsx(LakeSelect, { placeholder: "Select someone...", value: value, onValueChange: setValue, items: items, style: styles.select, ...props }));
};
export const Variations = () => {
    return (_jsxs(StoryBlock, { title: "Select variations", children: [_jsx(StoryPart, { title: "Default", children: _jsx(EditableSelect, {}) }), _jsx(StoryPart, { title: "Small", children: _jsx(EditableSelect, { size: "small" }) }), _jsx(StoryPart, { title: "Borderless", children: _jsx(EditableSelect, { mode: "borderless", initialValue: 1 }) }), _jsx(StoryPart, { title: "With icon", children: _jsx(EditableSelect, { icon: "building-bank-regular" }) }), _jsx(StoryPart, { title: "With footer", children: _jsx(EditableSelect, { PopoverFooter: _jsx(LakeText, { style: styles.footer, children: "List of random people" }) }) }), _jsx(StoryPart, { title: "With error", children: _jsx(EditableSelect, { error: "Required field" }) }), _jsx(StoryPart, { title: "Disabled", children: _jsx(EditableSelect, { disabled: true }) }), _jsx(StoryPart, { title: "Disabled with value", children: _jsx(EditableSelect, { disabled: true, initialValue: 2 }) })] }));
};
export const Colors = () => {
    return (_jsx(StoryBlock, { title: "Select colors", description: "Color prop change only icon color", children: Object.keys(colors).map(color => (_jsx(StoryPart, { title: color, children: _jsx(EditableSelect, { icon: "building-bank-filled", color: color }) }, color))) }));
};
