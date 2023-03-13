import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { LakeSearchField } from "../src/components/LakeSearchField";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
const styles = StyleSheet.create({
    container: {
        maxWidth: 600,
    },
});
export default {
    title: "Forms/SearchField",
    component: LakeSearchField,
};
export const Variations = () => {
    const [text1, setText1] = useState();
    const [text2, setText2] = useState();
    return (_jsxs(StoryBlock, { title: "SearchField", children: [_jsxs(StoryPart, { title: "Default", style: styles.container, children: [_jsx(LakeSearchField, { initialValue: "", placeholder: "Placeholder", onChangeText: setText1 }), _jsx(Space, { height: 12 }), _jsxs(LakeText, { children: ["Debounced value: ", text1] })] }), _jsxs(StoryPart, { title: "With initialValue", style: styles.container, children: [_jsx(LakeSearchField, { initialValue: "Initial value", placeholder: "Placeholder", onChangeText: setText2 }), _jsx(Space, { height: 12 }), _jsxs(LakeText, { children: ["Debounced value: ", text2] })] })] }));
};
