import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { StyleSheet, Text, View } from "react-native";
import { Grid } from "../src/components/Grid";
import { LakeCopyButton } from "../src/components/LakeCopyButton";
import { LakeLabel } from "../src/components/LakeLabel";
import { LakeTextInput } from "../src/components/LakeTextInput";
import { Space } from "../src/components/Space";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
const styles = StyleSheet.create({
    block: {
        height: 50,
        backgroundColor: colors.gray[100],
        borderRadius: 5,
    },
});
export default {
    title: "Forms/Label",
    component: LakeLabel,
};
const label = "Creditor IBAN";
export const ReadOnly = () => {
    return (_jsx(StoryBlock, { title: "Readonly label", children: _jsx(StoryPart, { title: "Color variations", children: _jsxs(Grid, { numColumns: 5, horizontalSpace: 8, verticalSpace: 8, children: [_jsx(LakeLabel, { label: "Default", render: id => _jsx(View, { nativeID: id, style: styles.block }) }), _jsx(LakeLabel, { label: "Gray", readOnly: true, color: "gray", render: id => _jsx(View, { nativeID: id, style: styles.block }) }), _jsx(LakeLabel, { label: "Live", readOnly: true, color: "live", render: id => _jsx(View, { nativeID: id, style: styles.block }) }), _jsx(LakeLabel, { label: "Sandbox", readOnly: true, color: "sandbox", render: id => _jsx(View, { nativeID: id, style: styles.block }) }), _jsx(LakeLabel, { label: "Positive", readOnly: true, color: "positive", render: id => _jsx(View, { nativeID: id, style: styles.block }) }), _jsx(LakeLabel, { label: "Warning", readOnly: true, color: "warning", render: id => _jsx(View, { nativeID: id, style: styles.block }) }), _jsx(LakeLabel, { label: "Negative", readOnly: true, color: "negative", render: id => _jsx(View, { nativeID: id, style: styles.block }) }), _jsx(LakeLabel, { label: "Current", readOnly: true, color: "current", render: id => _jsx(View, { nativeID: id, style: styles.block }) }), _jsx(LakeLabel, { label: "Partner", readOnly: true, color: "partner", render: id => _jsx(View, { nativeID: id, style: styles.block }) }), _jsx(LakeLabel, { label: "Swan", readOnly: true, color: "swan", render: id => _jsx(View, { nativeID: id, style: styles.block }) }), _jsx(LakeLabel, { label: "Shakespear", readOnly: true, color: "shakespear", render: id => _jsx(View, { nativeID: id, style: styles.block }) }), _jsx(LakeLabel, { label: "DarkPink", readOnly: true, color: "darkPink", render: id => _jsx(View, { nativeID: id, style: styles.block }) }), _jsx(LakeLabel, { label: "Sunglow", readOnly: true, color: "sunglow", render: id => _jsx(View, { nativeID: id, style: styles.block }) }), _jsx(LakeLabel, { label: "MediumSladeBlue", readOnly: true, color: "mediumSladeBlue", render: id => _jsx(View, { nativeID: id, style: styles.block }) })] }) }) }));
};
export const Types = () => {
    return (_jsx(StoryBlock, { title: "Types labels", children: _jsxs(View, { children: [_jsx(StoryPart, { title: "Default", children: _jsx(LakeLabel, { label: label, render: id => _jsx(LakeTextInput, { nativeID: id }) }) }), _jsx(StoryPart, { title: "Form", children: _jsx(LakeLabel, { label: label, render: id => _jsx(LakeTextInput, { nativeID: id }), type: "form" }) }), _jsx(StoryPart, { title: "FormSmall", children: _jsx(LakeLabel, { label: label, render: id => _jsx(LakeTextInput, { nativeID: id }), type: "formSmall" }) }), _jsxs(StoryPart, { title: "View", children: [_jsx(LakeLabel, { label: label, render: id => _jsx(View, { nativeID: id, style: styles.block }), type: "view" }), _jsx(Space, { height: 20 })] }), _jsx(StoryPart, { title: "ViewSmall", children: _jsx(LakeLabel, { label: label, render: id => _jsx(View, { nativeID: id, style: styles.block }), type: "viewSmall" }) })] }) }));
};
export const Variations = () => {
    return (_jsx(StoryBlock, { title: "Variations labels", children: _jsxs(View, { children: [_jsx(StoryPart, { title: "Optional label", children: _jsx(LakeLabel, { label: label, render: id => _jsx(View, { nativeID: id, style: styles.block }), optionalLabel: "Optional label" }) }), _jsx(Space, { height: 20 }), _jsx(StoryPart, { title: "Extra", children: _jsx(LakeLabel, { label: label, render: id => _jsx(View, { nativeID: id, style: styles.block }), extra: () => (_jsxs(_Fragment, { children: [_jsx(Space, { width: 4 }), _jsx(Text, { children: "Extra" })] })) }) }), _jsx(Space, { height: 20 }), _jsx(StoryPart, { title: "Help", children: _jsx(LakeLabel, { label: label, render: id => _jsx(View, { nativeID: id, style: styles.block }), help: _jsxs(_Fragment, { children: [_jsx(Space, { width: 4 }), _jsx(Text, { children: "Help" })] }) }) }), _jsx(Space, { height: 20 }), _jsx(StoryPart, { title: "With actions", children: _jsx(LakeLabel, { label: label, render: id => _jsx(View, { nativeID: id, style: styles.block }), actions: _jsx(LakeCopyButton, { valueToCopy: "", copyText: "Copy", copiedText: "Copied" }) }) })] }) }));
};
