import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyleSheet } from "react-native";
import { LakeAlert } from "../src/components/LakeAlert";
import { LakeButton } from "../src/components/LakeButton";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
const styles = StyleSheet.create({
    part: {
        padding: 10,
        maxWidth: 600,
    },
});
export default {
    title: "Informations/Alert",
    component: LakeAlert,
};
export const Variants = () => {
    return (_jsxs(StoryBlock, { title: "Alert variations", children: [_jsx(StoryPart, { title: "info", style: styles.part, children: _jsx(LakeAlert, { variant: "info", title: "Title", subtitle: "This is a subtitle", children: "This is a children" }) }), _jsx(StoryPart, { title: "warning", style: styles.part, children: _jsx(LakeAlert, { variant: "warning", title: "Title", subtitle: "This is a subtitle", children: "This is a children" }) }), _jsx(StoryPart, { title: "error", style: styles.part, children: _jsx(LakeAlert, { variant: "error", title: "Title", subtitle: "This is a subtitle", children: "This is a children" }) }), _jsx(StoryPart, { title: "success", style: styles.part, children: _jsx(LakeAlert, { variant: "success", title: "Title", subtitle: "This is a subtitle", children: "This is a children" }) })] }));
};
export const Formats = () => {
    return (_jsxs(StoryBlock, { title: "Alert formats", children: [_jsx(StoryPart, { title: "Anchored", style: styles.part, children: _jsx(LakeAlert, { anchored: true, variant: "info", title: "Title" }) }), _jsx(StoryPart, { title: "With subtitle", style: styles.part, children: _jsx(LakeAlert, { variant: "info", title: "Title", subtitle: "This is a subtitle" }) }), _jsx(StoryPart, { title: "With call to action", style: styles.part, children: _jsx(LakeAlert, { variant: "info", title: "Title", callToAction: _jsx(LakeButton, { size: "small", color: "shakespear", icon: "add-filled" }) }) }), _jsx(StoryPart, { title: "With children", style: styles.part, children: _jsx(LakeAlert, { variant: "info", title: "Title", children: "This is a children" }) }), _jsx(StoryPart, { title: "With subtitle and children", style: styles.part, children: _jsx(LakeAlert, { variant: "info", title: "Title", subtitle: "This is a subtitle", children: "This is a children" }) })] }));
};
