import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { LakeSlider, sliderBreakpoint } from "../src/components/LakeSlider";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
const styles = StyleSheet.create({
    desktop: {
        padding: 10,
        maxWidth: 800,
    },
    mobile: {
        maxWidth: 400,
    },
});
export default {
    title: "Forms/Slider",
    component: LakeSlider,
};
const EditableSlider = ({ mobileSize = false, ...props }) => {
    const [value, setValue] = useState(0);
    return (_jsx(View, { style: mobileSize ? styles.mobile : styles.desktop, children: _jsx(LakeSlider, { ...props, value: value, onChange: setValue }) }));
};
export const Ranges = () => {
    return (_jsxs(StoryBlock, { title: "Ranges", children: [_jsx(StoryPart, { title: "from 0 to 100", children: _jsx(EditableSlider, { label: "Range", min: 0, max: 100, step: 1, unit: "$" }) }), _jsx(StoryPart, { title: "from -20 to 50", children: _jsx(EditableSlider, { label: "Range", min: -20, max: 50, step: 1, unit: "$" }) }), _jsx(StoryPart, { title: "with steps 10 by 10", children: _jsx(EditableSlider, { label: "Range", min: 0, max: 100, step: 10, unit: "$" }) })] }));
};
export const Sizes = () => {
    return (_jsxs(StoryBlock, { title: "Slider sizes", description: `UI of slider depends on container width. If width is lower than ${sliderBreakpoint}, there is only a text input without slider`, children: [_jsx(StoryPart, { title: "Mobile", children: _jsx(EditableSlider, { label: "Range", min: 0, max: 100, step: 1, unit: "$", mobileSize: true }) }), _jsx(StoryPart, { title: "Desktop", children: _jsx(EditableSlider, { label: "Range", min: 0, max: 100, step: 1, unit: "$" }) })] }));
};
