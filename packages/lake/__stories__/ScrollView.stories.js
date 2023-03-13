import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { StyleSheet, View } from "react-native";
import { LakeScrollView } from "../src/components/LakeScrollView";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { colors, texts } from "../src/constants/design";
const styles = StyleSheet.create({
    storyTitle: {
        ...texts.h1,
    },
    blockSmall: {
        width: 400,
        height: 200,
        backgroundColor: colors.gray[200],
        borderRadius: 8,
    },
    blockMedium: {
        width: 600,
        height: 300,
        backgroundColor: colors.gray[200],
        borderRadius: 8,
    },
    blockLarge: {
        width: 800,
        height: 400,
        backgroundColor: colors.gray[200],
        borderRadius: 8,
    },
});
export default {
    title: "Layout/ScrollView",
    component: LakeScrollView,
};
export const Default = () => {
    return (_jsxs(_Fragment, { children: [_jsxs(View, { children: [_jsx(LakeText, { style: styles.storyTitle, children: "ScrollView" }), _jsx(Space, { height: 8 }), _jsx(LakeText, { children: "You can scroll to see gradient appear at top" })] }), _jsx(Space, { height: 16 }), _jsxs(LakeScrollView, { children: [_jsx(View, { style: styles.blockSmall }), _jsx(Space, { height: 16 }), _jsx(View, { style: styles.blockLarge }), _jsx(Space, { height: 16 }), _jsx(View, { style: styles.blockMedium }), _jsx(Space, { height: 16 }), _jsx(View, { style: styles.blockLarge }), _jsx(Space, { height: 16 }), _jsx(View, { style: styles.blockSmall }), _jsx(Space, { height: 16 }), _jsx(View, { style: styles.blockMedium })] })] }));
};
