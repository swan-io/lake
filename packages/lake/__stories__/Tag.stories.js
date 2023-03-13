import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid } from "../src/components/Grid";
import { ProjectEnvTag } from "../src/components/ProjectEnvTag";
import { Tag } from "../src/components/Tag";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
export default {
    title: "Informations/Tag",
    component: Tag,
};
export const All = () => {
    return (_jsxs(StoryBlock, { title: "Tag", children: [_jsx(StoryPart, { title: "Tag colors", children: _jsxs(Grid, { numColumns: 5, verticalSpace: 4, children: [_jsx(Tag, { color: "live", children: "Simple" }), _jsx(Tag, { color: "sandbox", children: "Sandbox" }), _jsx(Tag, { color: "negative", onPressRemove: console.log, children: "Dismiss" }), _jsx(Tag, { color: "warning", label: "Label", children: "O_o" }), _jsx(Tag, { color: "gray", onPressRemove: console.log, label: "Label", children: "All" })] }) }), _jsx(StoryPart, { title: "Env tags", children: _jsxs(Grid, { numColumns: 5, verticalSpace: 4, children: [_jsx(ProjectEnvTag, { projectEnv: "Live" }), _jsx(ProjectEnvTag, { projectEnv: "Sandbox" }), _jsx(ProjectEnvTag, { projectEnv: "Live", iconOnly: true }), _jsx(ProjectEnvTag, { projectEnv: "Sandbox", iconOnly: true })] }) })] }));
};
