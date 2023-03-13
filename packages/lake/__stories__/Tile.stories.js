import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { StyleSheet } from "react-native";
import { Icon } from "../src/components/Icon";
import { LakeAlert } from "../src/components/LakeAlert";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { Tile, TileGrid } from "../src/components/Tile";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
const styles = StyleSheet.create({
    part: {
        padding: 6,
    },
    footer: {
        padding: 12,
    },
});
export default {
    title: "Layout/Tile",
    component: Tile,
};
export const Default = () => {
    return (_jsxs(StoryBlock, { title: "Tile", description: ["This component creates a tile. "], children: [_jsx(StoryPart, { title: "Default", style: styles.part, children: _jsx(Tile, {}) }), _jsx(StoryPart, { title: "With anchored alert", style: styles.part, children: _jsx(Tile, { footer: _jsx(LakeAlert, { anchored: true, variant: "error", title: "It is an anchored alert" }) }) }), _jsx(StoryPart, { title: "With icon and title", style: styles.part, children: _jsx(Tile, { icon: _jsx(Icon, { name: "document-regular", size: 20 }), title: "Tile title" }) }), _jsx(StoryPart, { title: "With description", style: styles.part, children: _jsx(Tile, { title: "Tile title", description: "It is a description" }) }), _jsx(StoryPart, { title: "With header end", style: styles.part, children: _jsx(Tile, { title: "Tile title", headerEnd: _jsx(LakeText, { children: "It is a text" }) }) }), _jsx(StoryPart, { title: "With footer", style: styles.part, children: _jsx(Tile, { title: "Tile title", footer: _jsxs(_Fragment, { children: [_jsx(Space, { width: 48 }), _jsx(LakeText, { style: styles.footer, children: "It is a text" })] }) }) }), _jsx(StoryPart, { title: "Hovered", style: styles.part, children: _jsx(Tile, { hovered: true }) }), _jsx(StoryPart, { title: "Selected", style: styles.part, children: _jsx(Tile, { selected: true }) }), _jsx(StoryPart, { title: "Disabled", style: styles.part, children: _jsx(Tile, { title: "Tile title", disabled: true }) }), _jsx(StoryPart, { title: "With 2 tiles", style: styles.part, children: _jsxs(TileGrid, { children: [_jsx(Tile, { title: "Tile title" }), _jsx(Tile, { title: "Tile title" })] }) }), _jsx(StoryPart, { title: "With 3 tiles", style: styles.part, children: _jsxs(TileGrid, { children: [_jsx(Tile, { title: "Tile title" }), _jsx(Tile, { title: "Tile title" }), _jsx(Tile, { title: "Tile title" })] }) })] }));
};
