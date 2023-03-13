import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { Box } from "../src/components/Box";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { Switch } from "../src/components/Switch";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
export default {
    title: "Forms/Switch",
    component: Switch,
};
export const Default = () => {
    const [value, setValue] = useState(true);
    const toggle = useCallback(() => {
        setValue(v => !v);
    }, []);
    return (_jsxs(StoryBlock, { title: "Switch", children: [_jsx(StoryPart, { title: "Default", children: _jsxs(Box, { direction: "row", alignItems: "center", children: [_jsx(Switch, { value: value, onValueChange: toggle }), _jsx(Space, { width: 12 }), _jsx(LakeText, { color: colors.gray[700], children: "Allow physical cards" })] }) }), _jsx(StoryPart, { title: "Disabled", children: _jsxs(Box, { direction: "row", alignItems: "center", children: [_jsx(Switch, { value: true, disabled: true }), _jsx(Space, { width: 12 }), _jsx(LakeText, { color: colors.gray[700], children: "Allow physical cards" })] }) })] }));
};
