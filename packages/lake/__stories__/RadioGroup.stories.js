import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { RadioGroup } from "../src/components/RadioGroup";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
export default {
    title: "Forms/RadioGroup",
    component: RadioGroup,
};
function EditableRadioGroup(props) {
    const [value, setValue] = useState();
    return _jsx(RadioGroup, { ...props, value: value, onValueChange: setValue });
}
const items = [
    { name: "Less than €500", value: "LessThan500" },
    { name: "Between €500 and €1,500", value: "Between500And1500" },
    { name: "Between €1,500 and €3,000", value: "Between1500And3000" },
    { name: "Between €3,000 and €4,500", value: "Between3000And4500" },
    { name: "More than €4,500", value: "MoreThan4500" },
];
const itemsWithDisabled = [
    { name: "Less than €500", value: "LessThan500" },
    { name: "Between €500 and €1,500", value: "Between500And1500" },
    { name: "Between €1,500 and €3,000", value: "Between1500And3000", disabled: true },
    { name: "Between €3,000 and €4,500", value: "Between3000And4500" },
    { name: "More than €4,500", value: "MoreThan4500" },
];
export const Default = () => {
    return (_jsxs(StoryBlock, { title: "RadioGroup", children: [_jsx(StoryPart, { title: "Default", children: _jsx(EditableRadioGroup, { items: items }) }), _jsx(StoryPart, { title: "Row direction", children: _jsx(EditableRadioGroup, { items: items, direction: "row" }) }), _jsx(StoryPart, { title: "Disabled", children: _jsx(EditableRadioGroup, { items: items, disabled: true }) }), _jsx(StoryPart, { title: "With disabled item", children: _jsx(EditableRadioGroup, { items: itemsWithDisabled }) }), _jsx(StoryPart, { title: "With color", children: _jsx(EditableRadioGroup, { items: items, color: "live" }) })] }));
};
