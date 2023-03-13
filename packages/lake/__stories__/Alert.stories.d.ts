/// <reference types="react" />
import { ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<({ anchored, variant, title, subtitle, children, style, callToAction, }: {
    anchored?: boolean | undefined;
    variant: "info" | "warning" | "error" | "success";
    children?: import("react").ReactNode;
    callToAction?: import("react").ReactNode;
    title: import("react").ReactNode;
    subtitle?: string | undefined;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
}) => JSX.Element>;
export default _default;
export declare const Variants: () => JSX.Element;
export declare const Formats: () => JSX.Element;
