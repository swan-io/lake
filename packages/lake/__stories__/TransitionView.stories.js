import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { LakeLabel } from "../src/components/LakeLabel";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { Switch } from "../src/components/Switch";
import { TransitionView } from "../src/components/TransitionView";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";
const styles = StyleSheet.create({
    switchContainer: {
        alignSelf: "flex-start",
    },
    container: {
        position: "relative",
        maxWidth: 400,
    },
    enterAnimation: {
        animationKeyframes: {
            "0%": { opacity: 0, transform: [{ translateZ: 0 }, { translateX: 200 }] },
        },
        animationDuration: "300ms",
    },
    leaveAnimation: {
        animationKeyframes: {
            "100%": { opacity: 0, transform: [{ translateZ: 0 }, { translateX: 200 }] },
        },
        animationDuration: "300ms",
    },
    block: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 60,
        backgroundColor: colors.negative[400],
        borderRadius: 8,
    },
});
export default {
    title: "Animations/TransitionView",
    component: TransitionView,
};
export const Default = () => {
    const [showBlock, setShowBlock] = useState(false);
    return (_jsxs(StoryBlock, { title: "TransitionView", description: [
            "TransitionView is component triggers a transition when an element enters or leaves the DOM.",
            "You can try it by toggling the switch",
        ], children: [_jsx(LakeLabel, { label: "Switch displayed content", render: () => (_jsx(View, { style: styles.switchContainer, children: _jsx(Switch, { value: showBlock, onValueChange: setShowBlock }) })) }), _jsx(Space, { height: 16 }), _jsx(View, { style: styles.container, children: _jsx(TransitionView, { style: styles.container, enter: styles.enterAnimation, leave: styles.leaveAnimation, children: showBlock ? (_jsx(Box, { justifyContent: "center", alignItems: "center", style: styles.block, children: _jsx(LakeText, { color: colors.live.contrast, variant: "semibold", children: "Second block" }) })) : null }) })] }));
};
