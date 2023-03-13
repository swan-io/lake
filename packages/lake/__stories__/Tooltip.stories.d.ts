/// <reference types="react" />
import { ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<{
    children: import("react").ReactNode;
    content: import("react").ReactNode;
    describedBy?: string | undefined;
    matchReferenceWidth?: boolean | undefined;
    hideArrow?: boolean | undefined;
    onHide?: (() => void) | undefined;
    onShow?: (() => void) | undefined;
    placement: "bottom" | "left" | "right" | "top";
    width?: number | undefined;
    togglableOnFocus?: boolean | undefined;
    containerStyle?: import("react-native").ViewStyle | undefined;
} & import("react").RefAttributes<{
    show: () => void;
    hide: () => void;
}>>>>;
export default _default;
export declare const Placements: () => JSX.Element;
export declare const Behaviors: () => JSX.Element;
