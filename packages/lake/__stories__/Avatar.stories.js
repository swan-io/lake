import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import dedent from "ts-dedent";
import { Avatar } from "../src/components/Avatar";
import { Box } from "../src/components/Box";
import { Space } from "../src/components/Space";
import { StoryBlock, StoryCodePart, StoryPart } from "./_StoriesComponents";
export default {
    title: "Informations/Avatar",
    component: Avatar,
};
export const Variants = () => {
    return (_jsxs(StoryBlock, { title: "Avatar", children: [_jsx(StoryPart, { title: "Sizes", children: _jsxs(Box, { direction: "row", children: [_jsx(Avatar, { initials: "AA", size: 32 }), _jsx(Space, { width: 16 }), _jsx(Avatar, { initials: "AA", size: 48 }), _jsx(Space, { width: 16 }), _jsx(Avatar, { initials: "AA", size: 64 })] }) }), _jsx(StoryPart, { title: "Colors", children: _jsxs(Box, { direction: "row", children: [_jsx(Avatar, { initials: "AA", size: 32 }), _jsx(Space, { width: 16 }), _jsx(Avatar, { initials: "BA", size: 32 }), _jsx(Space, { width: 16 }), _jsx(Avatar, { initials: "CA", size: 32 })] }) }), _jsx(StoryCodePart, { title: "Code example", children: dedent `
          <Box direction="row">
            <Avatar initials="AA" size={32} />
            <Space width={16} />
            <Avatar initials="BA" size={32} />
            <Space width={16} />
            <Avatar initials="CA" size={32} />
          </Box>` })] }));
};
