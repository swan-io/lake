/// <reference types="react" />
import { ComponentMeta } from "@storybook/react";
import { View } from "react-native";
import { BoxProps } from "../src/components/Box";
declare const _default: ComponentMeta<import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    alignItems?: ("stretch" | "center" | "end" | "start" | "baseline") | undefined;
    children?: import("react").ReactNode;
    direction?: ("column" | "row" | "columnReverse" | "rowReverse") | undefined;
    justifyContent?: ("center" | "end" | "start" | "normal" | "spaceBetween" | "spaceAround" | "spaceEvenly") | undefined;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
} & import("react").RefAttributes<View>>>;
export default _default;
type StoryArgs = Pick<BoxProps, "direction" | "alignItems" | "justifyContent">;
export declare const Interactive: ({ direction, alignItems, justifyContent }: StoryArgs) => JSX.Element;
