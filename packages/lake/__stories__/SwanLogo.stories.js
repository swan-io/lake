import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Space } from "../src/components/Space";
import { SwanLogo } from "../src/components/SwanLogo";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";
export default {
    title: "Informations/SwanLogo",
    component: SwanLogo,
};
export const Colors = () => {
    return (_jsxs(StoryBlock, { title: "SwanLogo", children: [_jsx(SwanLogo, {}), _jsx(Space, { height: 16 }), _jsx(SwanLogo, { color: colors.gray.primary }), _jsx(Space, { height: 16 }), _jsx(SwanLogo, { color: colors.live.primary }), _jsx(Space, { height: 16 }), _jsx(SwanLogo, { color: colors.sandbox.primary }), _jsx(Space, { height: 16 }), _jsx(SwanLogo, { color: colors.positive.primary }), _jsx(Space, { height: 16 }), _jsx(SwanLogo, { color: colors.warning.primary }), _jsx(Space, { height: 16 }), _jsx(SwanLogo, { color: colors.negative.primary }), _jsx(Space, { height: 16 }), _jsx(SwanLogo, { color: colors.current.primary }), _jsx(Space, { height: 16 }), _jsx(SwanLogo, { color: colors.partner.primary }), _jsx(Space, { height: 16 }), _jsx(SwanLogo, { color: colors.swan.primary }), _jsx(Space, { height: 16 }), _jsx(SwanLogo, { color: colors.shakespear.primary }), _jsx(Space, { height: 16 }), _jsx(SwanLogo, { color: colors.darkPink.primary }), _jsx(Space, { height: 16 }), _jsx(SwanLogo, { color: colors.sunglow.primary }), _jsx(Space, { height: 16 }), _jsx(SwanLogo, { color: colors.mediumSladeBlue.primary })] }));
};
