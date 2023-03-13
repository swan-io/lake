import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TileGridPlaceholder, TilePlaceholder } from "../src/components/TilePlaceholder";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
export default {
    title: "Layout/TilePlaceholder",
    component: TilePlaceholder,
};
export const Default = () => {
    return (_jsxs(StoryBlock, { title: "TilePlaceholder", children: [_jsx(StoryPart, { title: "Default placeholder", children: _jsx(TilePlaceholder, {}) }), _jsx(StoryPart, { title: "Grid placeholder", children: _jsx(TileGridPlaceholder, { withTabs: false }) }), _jsx(StoryPart, { title: "Grid placeholder with 3 items", children: _jsx(TileGridPlaceholder, { withTabs: false, numberOfItems: 3 }) })] }));
};
