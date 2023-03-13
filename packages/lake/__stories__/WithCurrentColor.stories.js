import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { WithCurrentColor } from "../src/components/WithCurrentColor";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";
const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
    },
    blockContainer: {
        width: 60,
        height: 40,
        margin: 8,
    },
    currentColorBlock: {
        width: "100%",
        height: "100%",
        borderRadius: 4,
        backgroundColor: colors.current[400],
    },
});
export default {
    title: "Utilities/WithCurrentColor",
    component: WithCurrentColor,
};
export const Colors = () => {
    return (_jsx(StoryBlock, { title: "WithCurrentColor", description: "This component change the color of all its children using 'colors.current[shade]'", children: _jsxs(Box, { direction: "row", style: styles.container, children: [_jsx(WithCurrentColor, { style: styles.blockContainer, variant: "gray", children: _jsx(View, { style: styles.currentColorBlock }) }), _jsx(WithCurrentColor, { style: styles.blockContainer, variant: "live", children: _jsx(View, { style: styles.currentColorBlock }) }), _jsx(WithCurrentColor, { style: styles.blockContainer, variant: "sandbox", children: _jsx(View, { style: styles.currentColorBlock }) }), _jsx(WithCurrentColor, { style: styles.blockContainer, variant: "positive", children: _jsx(View, { style: styles.currentColorBlock }) }), _jsx(WithCurrentColor, { style: styles.blockContainer, variant: "warning", children: _jsx(View, { style: styles.currentColorBlock }) }), _jsx(WithCurrentColor, { style: styles.blockContainer, variant: "negative", children: _jsx(View, { style: styles.currentColorBlock }) }), _jsx(WithCurrentColor, { style: styles.blockContainer, variant: "swan", children: _jsx(View, { style: styles.currentColorBlock }) }), _jsx(WithCurrentColor, { style: styles.blockContainer, variant: "shakespear", children: _jsx(View, { style: styles.currentColorBlock }) }), _jsx(WithCurrentColor, { style: styles.blockContainer, variant: "darkPink", children: _jsx(View, { style: styles.currentColorBlock }) }), _jsx(WithCurrentColor, { style: styles.blockContainer, variant: "sunglow", children: _jsx(View, { style: styles.currentColorBlock }) }), _jsx(WithCurrentColor, { style: styles.blockContainer, variant: "mediumSladeBlue", children: _jsx(View, { style: styles.currentColorBlock }) })] }) }));
};
