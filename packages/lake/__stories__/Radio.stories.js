import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LakeRadio } from "../src/components/LakeRadio";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
export default {
    title: "Forms/Radio",
    component: LakeRadio,
};
export const Variations = () => {
    return (_jsxs(StoryBlock, { title: "Variations", description: "Radio component is just the UI pill, for editable Radio with several choice, you can use `ChoicePicker` or implement your own Radio selector with Pressable", children: [_jsx(StoryPart, { title: "Disabled", children: _jsx(LakeRadio, { value: false, disabled: true }) }), _jsx(StoryPart, { title: "Selected and disabled", children: _jsx(LakeRadio, { value: true, disabled: true }) }), _jsx(StoryPart, { title: "Not selected", children: _jsx(LakeRadio, { value: false }) }), _jsx(StoryPart, { title: "Selected", children: _jsx(LakeRadio, { value: true }) })] }));
};
export const Colors = () => {
    return (_jsxs(StoryBlock, { title: "Colors", description: "Radio color impacts only selected state", children: [_jsx(StoryPart, { title: "Default", children: _jsx(LakeRadio, { value: true }) }), _jsx(StoryPart, { title: "gray", children: _jsx(LakeRadio, { value: true, color: "gray" }) }), _jsx(StoryPart, { title: "live", children: _jsx(LakeRadio, { value: true, color: "live" }) }), _jsx(StoryPart, { title: "sandbox", children: _jsx(LakeRadio, { value: true, color: "sandbox" }) }), _jsx(StoryPart, { title: "positive", children: _jsx(LakeRadio, { value: true, color: "positive" }) }), _jsx(StoryPart, { title: "warning", children: _jsx(LakeRadio, { value: true, color: "warning" }) }), _jsx(StoryPart, { title: "negative", children: _jsx(LakeRadio, { value: true, color: "negative" }) }), _jsx(StoryPart, { title: "current", children: _jsx(LakeRadio, { value: true, color: "current" }) }), _jsx(StoryPart, { title: "partner", children: _jsx(LakeRadio, { value: true, color: "partner" }) }), _jsx(StoryPart, { title: "swan", children: _jsx(LakeRadio, { value: true, color: "swan" }) }), _jsx(StoryPart, { title: "shakespear", children: _jsx(LakeRadio, { value: true, color: "shakespear" }) }), _jsx(StoryPart, { title: "darkPink", children: _jsx(LakeRadio, { value: true, color: "darkPink" }) }), _jsx(StoryPart, { title: "sunglow", children: _jsx(LakeRadio, { value: true, color: "sunglow" }) }), _jsx(StoryPart, { title: "mediumSladeBlue", children: _jsx(LakeRadio, { value: true, color: "mediumSladeBlue" }) })] }));
};
