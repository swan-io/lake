/// <reference types="react" />
import { ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<(<T>({ items, getId, large, renderItem, value, onChange, }: {
    items: T[];
    large?: boolean | undefined;
    renderItem: (value: T) => import("react").ReactNode;
    value?: T | undefined;
    getId?: ((item: T) => unknown) | undefined;
    onChange: (value: T) => void;
}) => JSX.Element)>;
export default _default;
export declare const Default: () => JSX.Element;
