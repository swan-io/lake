import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { LakeLabel } from "../src/components/LakeLabel";
import { LakeText } from "../src/components/LakeText";
import { ResponsiveContainer } from "../src/components/ResponsiveContainer";
import { Space } from "../src/components/Space";
import { Switch } from "../src/components/Switch";
import { breakpoints, colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";
const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    containerMobile: {
        maxWidth: 400,
    },
    switchContainer: {
        alignSelf: "flex-start",
    },
    block: {
        width: 120,
        height: 60,
        backgroundColor: colors.gray[0],
        borderRadius: 8,
    },
});
export default {
    title: "Layout/ResponsiveContainer",
    component: ResponsiveContainer,
};
export const Default = () => {
    const [forceMobileWidth, setForceMobileWidth] = useState(false);
    return (_jsxs(StoryBlock, { title: "ResponsiveContainer", description: [
            "ResponsiveContainer is a component that allows you to render different content depending on the screen size.",
            'You can try it by toggling the "Mobile mode" switch',
        ], children: [_jsx(LakeLabel, { label: "Mobile mode", render: () => (_jsx(View, { style: styles.switchContainer, children: _jsx(Switch, { value: forceMobileWidth, onValueChange: setForceMobileWidth }) })) }), _jsx(Space, { height: 16 }), _jsx(View, { style: forceMobileWidth ? styles.containerMobile : styles.container, children: _jsx(ResponsiveContainer, { breakpoint: breakpoints.tiny, children: ({ small }) => (_jsxs(Box, { direction: small ? "column" : "row", children: [_jsx(Box, { justifyContent: "center", alignItems: "center", style: styles.block, children: _jsx(LakeText, { children: small ? "Mobile size" : "Desktop size" }) }), _jsx(Space, { width: 16, height: 16 }), _jsx(Box, { justifyContent: "center", alignItems: "center", style: styles.block, children: _jsx(LakeText, { children: small ? "Mobile size" : "Desktop size" }) }), _jsx(Space, { width: 16, height: 16 }), _jsx(Box, { justifyContent: "center", alignItems: "center", style: styles.block, children: _jsx(LakeText, { children: small ? "Mobile size" : "Desktop size" }) })] })) }) })] }));
};
