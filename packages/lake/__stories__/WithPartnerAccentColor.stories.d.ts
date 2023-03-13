/// <reference types="react" />
import { ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<({ color, children }: {
    color: string;
    children: import("react").ReactNode;
}) => JSX.Element>;
export default _default;
type StoryArgs = {
    color: string;
};
export declare const Default: ({ color }: StoryArgs) => JSX.Element;
