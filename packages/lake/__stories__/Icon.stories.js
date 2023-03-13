import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { BorderedIcon } from "../src/components/BorderedIcon";
import { Box } from "../src/components/Box";
import { Icon } from "../src/components/Icon";
import { LakeLabel } from "../src/components/LakeLabel";
import { LakeText } from "../src/components/LakeText";
import { LakeTextInput } from "../src/components/LakeTextInput";
import { Space } from "../src/components/Space";
import { colors } from "../src/constants/design";
import customIcons from "../src/icons/custom-icons.json";
import fluentIcons from "../src/icons/fluent-icons.json";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
    },
    iconContainer: {
        width: 200,
        height: 100,
    },
});
export default {
    title: "Informations/Icon",
    component: BorderedIcon,
};
const getKeys = (obj) => Object.keys(obj);
export const Default = () => {
    const [search, setSearch] = useState("");
    return (_jsxs(StoryBlock, { title: "Icon", children: [_jsx(LakeLabel, { label: "Search", render: () => (_jsx(LakeTextInput, { icon: "search-filled", value: search, onChangeText: setSearch })) }), _jsx(StoryPart, { title: "Fluent icons", children: _jsx(Box, { direction: "row", alignItems: "center", style: styles.container, children: getKeys(fluentIcons)
                        .filter(name => name.includes(search))
                        .map(name => (_jsxs(Box, { alignItems: "center", justifyContent: "start", style: styles.iconContainer, children: [_jsx(Icon, { name: name, size: 30, color: colors.gray[800] }), _jsx(Space, { height: 8 }), _jsx(LakeText, { align: "center", children: name })] }, name))) }) }), _jsx(StoryPart, { title: "Custom icons", children: _jsx(Box, { direction: "row", alignItems: "center", style: styles.container, children: getKeys(customIcons)
                        .filter(name => name.includes(search))
                        .map(name => (_jsxs(Box, { alignItems: "center", justifyContent: "start", style: styles.iconContainer, children: [_jsx(Icon, { name: name, size: 30, color: colors.gray[800] }), _jsx(Space, { height: 8 }), _jsx(LakeText, { align: "center", children: name })] }, name))) }) })] }));
};
export const Bordered = ({ color }) => {
    const [search, setSearch] = useState("");
    return (_jsxs(StoryBlock, { title: "BorderedIcon", description: "You can change the color in 'Controls' panel (Press A to open it)", children: [_jsx(LakeLabel, { label: "Search", render: () => (_jsx(LakeTextInput, { icon: "search-filled", value: search, onChangeText: setSearch })) }), _jsx(StoryPart, { title: "Fluent icons", children: _jsx(Box, { direction: "row", alignItems: "center", style: styles.container, children: getKeys(fluentIcons)
                        .filter(name => name.includes(search))
                        .map(name => (_jsxs(Box, { alignItems: "center", justifyContent: "start", style: styles.iconContainer, children: [_jsx(BorderedIcon, { name: name, color: color, size: 40, padding: 8 }), _jsx(Space, { height: 8 }), _jsx(LakeText, { align: "center", children: name })] }, name))) }) }), _jsx(StoryPart, { title: "Custom icons", children: _jsx(Box, { direction: "row", alignItems: "center", style: styles.container, children: getKeys(customIcons)
                        .filter(name => name.includes(search))
                        .map(name => (_jsxs(Box, { alignItems: "center", justifyContent: "start", style: styles.iconContainer, children: [_jsx(BorderedIcon, { name: name, color: color, size: 40, padding: 8 }), _jsx(Space, { height: 8 }), _jsx(LakeText, { align: "center", children: name })] }, name))) }) })] }));
};
