/// <reference types="react" />
import { ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<({ enter, leave, style, children, pointerEvents, onLeave, }: {
    enter?: import("react-native").AnimationStyles | undefined;
    leave?: import("react-native").AnimationStyles | undefined;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    pointerEvents?: "auto" | "none" | "box-none" | "box-only" | undefined;
    children: import("react").ReactNode;
    onLeave?: (() => void) | undefined;
}) => JSX.Element | null>;
export default _default;
export declare const Default: () => JSX.Element;
