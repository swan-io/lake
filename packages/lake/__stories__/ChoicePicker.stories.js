import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { match } from "ts-pattern";
import { ChoicePicker } from "../src/components/ChoicePicker";
import { Tag } from "../src/components/Tag";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
const styles = StyleSheet.create({
    largePart: {
        padding: 10, // adds some padding to avoid overflow hidden caused by storybook canvas
    },
});
export default {
    title: "Forms/ChoicePicker",
    component: ChoicePicker,
};
export const Default = () => {
    const items = [
        "Virtual",
        "VirtualAndPhysical",
        "SingleUseVirtual",
    ];
    const [value, setValue] = useState();
    const [largeValue, setLargeValue] = useState();
    return (_jsxs(StoryBlock, { title: "Choice Picker", children: [_jsx(StoryPart, { title: "Default", children: _jsx(ChoicePicker, { items: items, value: value, onChange: setValue, renderItem: item => match(item)
                        .with("Virtual", () => (_jsx(Tag, { icon: "phone-regular", color: "mediumSladeBlue", children: "Virtual" })))
                        .with("VirtualAndPhysical", () => (_jsx(Tag, { icon: "payment-regular", color: "shakespear", children: "Virtual & physical" })))
                        .with("SingleUseVirtual", () => (_jsx(Tag, { icon: "phone-regular", color: "darkPink", children: "Single use" })))
                        .exhaustive() }) }), _jsx(StoryPart, { title: "Large", style: styles.largePart, children: _jsx(ChoicePicker, { items: items, value: largeValue, large: true, onChange: setLargeValue, renderItem: item => match(item)
                        .with("Virtual", () => (_jsx(Tag, { icon: "phone-regular", color: "mediumSladeBlue", children: "Virtual" })))
                        .with("VirtualAndPhysical", () => (_jsx(Tag, { icon: "payment-regular", color: "shakespear", children: "Virtual & physical" })))
                        .with("SingleUseVirtual", () => (_jsx(Tag, { icon: "phone-regular", color: "darkPink", children: "Single use" })))
                        .exhaustive() }) })] }));
};
