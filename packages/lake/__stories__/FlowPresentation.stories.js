import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FlowPresentation } from "../src/components/FlowPresentation";
import { Space } from "../src/components/Space";
import { WithCurrentColor } from "../src/components/WithCurrentColor";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
export default {
    title: "Informations/FlowPresentation",
    component: FlowPresentation,
};
export const Default = () => {
    return (_jsx(WithCurrentColor, { variant: "live", children: _jsxs(StoryBlock, { title: "FlowPresentation", children: [_jsxs(StoryPart, { title: "Desktop", children: [_jsx(FlowPresentation, { steps: [
                                { label: "Enter your e-mail", icon: "mail-regular" },
                                { label: "Fill in the form", icon: "building-multiple-regular" },
                                { label: "Add an owner", icon: "person-add-regular" },
                                { label: "Attach the documents", icon: "document-regular" },
                                { label: "Finalize", icon: "desktop-regular" },
                            ], mode: "desktop" }), _jsx(Space, { height: 32 })] }), _jsxs(StoryPart, { title: "Mobile", children: [_jsx(FlowPresentation, { steps: [
                                { label: "Enter your e-mail", icon: "mail-regular" },
                                { label: "Fill in the form", icon: "building-multiple-regular" },
                                { label: "Add an owner", icon: "person-add-regular" },
                                { label: "Attach the documents", icon: "document-regular" },
                                { label: "Finalize", icon: "desktop-regular" },
                            ], mode: "mobile" }), _jsx(Space, { height: 32 })] })] }) }));
};
