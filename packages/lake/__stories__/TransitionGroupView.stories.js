import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { LakeButton, LakeButtonGroup } from "../src/components/LakeButton";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { TransitionGroupView } from "../src/components/TransitionGroupView";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";
const styles = StyleSheet.create({
    container: {
        position: "relative",
        maxWidth: 400,
    },
    enterAnimation: {
        animationKeyframes: {
            "0%": { opacity: 0, transform: [{ translateZ: 0 }, { translateX: 200 }] },
        },
        animationDuration: "200ms",
    },
    leaveAnimation: {
        animationKeyframes: {
            "100%": { opacity: 0, transform: [{ translateZ: 0 }, { translateX: 200 }] },
        },
        animationDuration: "200ms",
    },
    block: {
        position: "absolute",
        left: 0,
        width: 300,
        height: 40,
        backgroundColor: colors.negative[400],
        borderRadius: 8,
        transition: "200ms ease-in-out top",
    },
});
export default {
    title: "Animations/TransitionGroupView",
    component: TransitionGroupView,
};
export const Default = () => {
    const [items, setItems] = useState([]);
    return (_jsxs(StoryBlock, { title: "TransitionGroupView", description: [
            "TransitionView is component triggers a transition when its children enter or leave the DOM.",
            "You can try it by adding & removing elements",
        ], children: [_jsxs(LakeButtonGroup, { children: [_jsx(LakeButton, { onPress: () => setItems(items => [...items, String(Math.random())]), children: "Append" }), _jsx(LakeButton, { onPress: () => setItems(items => [String(Math.random()), ...items]), children: "Prepend" }), _jsx(LakeButton, { onPress: () => setItems(items => {
                            return items.slice(1);
                        }), children: "Remove first" }), _jsx(LakeButton, { onPress: () => setItems(items => {
                            return items.slice(0, -1);
                        }), children: "Remove last" })] }), _jsx(Space, { height: 16 }), _jsx(View, { style: styles.container, children: _jsx(TransitionGroupView, { childStyle: styles.container, enter: styles.enterAnimation, leave: styles.leaveAnimation, children: items.map((item, index) => (_jsx(Box, { justifyContent: "center", alignItems: "center", style: [styles.block, { top: index * 60 }], children: _jsx(LakeText, { color: colors.live.contrast, variant: "semibold", children: item }) }, item))) }) })] }));
};
