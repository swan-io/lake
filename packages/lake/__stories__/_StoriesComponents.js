import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Highlight, { Prism } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";
import { memo, useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { match, P } from "ts-pattern";
import { Box } from "../src/components/Box";
import { LakeText } from "../src/components/LakeText";
import { Separator } from "../src/components/Separator";
import { Space } from "../src/components/Space";
import { colors, radii, texts } from "../src/constants/design";
const styles = StyleSheet.create({
    storyTitle: {
        ...texts.h1,
    },
    partTitle: {
        ...texts.smallSemibold,
        textTransform: "uppercase",
    },
    codeBlock: {
        backgroundColor: colors.gray[0],
        borderRadius: radii[8],
        padding: 16,
    },
});
export const StoryBlock = ({ title, description, children }) => {
    return (_jsxs(ScrollView, { children: [_jsx(LakeText, { style: styles.storyTitle, children: title }), _jsx(Space, { height: 8 }), match(description)
                .with(P.string, description => _jsx(LakeText, { children: description }))
                .with(P.array(P.string), description => description.map((description, index) => (_jsx(View, { children: _jsx(LakeText, { children: description }) }, index))))
                .with(P.nullish, () => null)
                .exhaustive(), _jsx(Space, { height: 32 }), children] }));
};
export const StoryPart = ({ title, children, style }) => {
    return (_jsxs(Box, { children: [_jsx(LakeText, { style: styles.partTitle, children: title }), _jsx(Space, { height: 24 }), _jsx(View, { style: style, children: children }), _jsx(Space, { height: 12 }), _jsx(Separator, {}), _jsx(Space, { height: 24 })] }));
};
export const StoryCodePart = ({ title, description, children }) => {
    const code = useMemo(() => {
        // remove first line if empty
        if (children.startsWith("\n")) {
            return children.slice(1);
        }
        return children;
    }, [children]);
    return (_jsxs(Box, { children: [_jsx(LakeText, { style: styles.partTitle, children: title }), _jsx(Space, { height: 8 }), match(description)
                .with(P.string, description => _jsx(LakeText, { children: description }))
                .with(P.array(P.string), description => description.map((description, index) => (_jsx(View, { children: _jsx(LakeText, { children: description }) }, index))))
                .with(P.nullish, () => null)
                .exhaustive(), _jsx(TsCodeBlock, { children: code }), _jsx(Space, { height: 12 }), _jsx(Separator, {}), _jsx(Space, { height: 24 })] }));
};
const TsCodeBlock = memo(({ children }) => {
    return (_jsx(Highlight, { Prism: Prism, theme: theme, code: children, language: "tsx", children: ({ tokens, getLineProps, getTokenProps }) => (_jsx(View, { style: styles.codeBlock, children: tokens.map((line, i) => (_jsx(Text, { ...getLineProps({ line, key: i }), children: line.map((token, key) => (_jsx(Text, { ...getTokenProps({ token, key }) }))) }))) })) }));
});
