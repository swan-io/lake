/// <reference types="react" />
import { ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<({ label, optionalLabel, extra, readOnly, color, readOnlyColor, type, help, render, actions, style, }: {
    label: string;
    optionalLabel?: string | undefined;
    readOnlyColor?: string | undefined;
    color?: "warning" | "current" | "gray" | "live" | "sandbox" | "positive" | "negative" | "partner" | "swan" | "shakespear" | "darkPink" | "sunglow" | "mediumSladeBlue" | undefined;
    type?: "form" | "view" | "formSmall" | "viewSmall" | undefined;
    extra?: (() => import("react").ReactNode) | undefined;
    help?: import("react").ReactNode;
    render: (id: string) => import("react").ReactNode;
    actions?: import("react").ReactNode;
    readOnly?: boolean | undefined;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
}) => JSX.Element>;
export default _default;
export declare const ReadOnly: () => JSX.Element;
export declare const Types: () => JSX.Element;
export declare const Variations: () => JSX.Element;
