import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { MultiSelect } from "../src/components/MultiSelect";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
const styles = StyleSheet.create({
    select: {
        maxWidth: 400,
    },
});
export default {
    title: "Forms/MultiSelect",
    component: MultiSelect,
};
const items = [
    { label: "Camille", value: "camille", group: "C" },
    { label: "Charlotte", value: "charlotte", group: "C" },
    { label: "Francis", value: "francis", group: "F" },
    { label: "Émilie", value: "emilie", group: "E" },
    { label: "François", value: "francois", group: "F" },
    { label: "Laura", value: "laura", group: "L" },
    { label: "Marie-Anne", value: "marie_anne", group: "M" },
    { label: "Natasha", value: "natasha", group: "N", disabled: true },
    { label: "Nicolas", value: "nicolas", group: "N" },
    { label: "Pierre", value: "pierre", group: "P" },
];
const EditableMultiSelect = ({ initialValues = [], ...props }) => {
    const [values, setValues] = useState(initialValues);
    return (_jsx(MultiSelect, { placeholder: "Select people...", filterPlaceholder: "Search...", emptyResultText: "No result", values: values, items: items, onValueChange: setValues, style: styles.select, ...props }));
};
export const Variations = () => {
    return (_jsxs(StoryBlock, { title: "MultiSelect variations", children: [_jsx(StoryPart, { title: "Default", children: _jsx(EditableMultiSelect, {}) }), _jsx(StoryPart, { title: "Without groups", children: _jsx(EditableMultiSelect, { enableGroups: false }) }), _jsx(StoryPart, { title: "Disabled", children: _jsx(EditableMultiSelect, { disabled: true }) }), _jsx(StoryPart, { title: "Disabled with a value", children: _jsx(EditableMultiSelect, { disabled: true, initialValues: ["charlotte"] }) }), _jsx(StoryPart, { title: "Without any option", children: _jsx(EditableMultiSelect, { items: [] }) })] }));
};
export const Colors = () => {
    return (_jsx(StoryBlock, { title: "MultiSelect colors", children: Object.keys(colors).map(color => (_jsx(StoryPart, { title: color, children: _jsx(EditableMultiSelect, { color: color }) }, color))) }));
};
