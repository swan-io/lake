import { jsx as _jsx } from "react/jsx-runtime";
import { StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { WithPartnerAccentColor } from "../src/components/WithPartnerAccentColor";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";
const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
    },
    colorBlock: {
        width: 60,
        height: 40,
        margin: 8,
        borderRadius: 4,
    },
});
export default {
    title: "Utilities/WithPartnerAccentColor",
    component: WithPartnerAccentColor,
};
export const Default = ({ color = "black" }) => {
    return (_jsx(StoryBlock, { title: "WithPartnerAccentColor", description: [
            "This component generate from a color palette with different shades and change the color of all its children using 'colors.partner[shade]'",
            "You can edit the color in 'Controls' panel. (Press A to open it)",
        ], children: _jsx(WithPartnerAccentColor, { color: color, children: _jsx(Box, { direction: "row", style: styles.container, children: Object.keys(colors.partner).map(colorShade => (_jsx(View, { style: [
                        styles.colorBlock,
                        { backgroundColor: colors.partner[colorShade] },
                    ] }, colorShade))) }) }) }));
};
