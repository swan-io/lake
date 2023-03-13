/// <reference types="react" />
import { ComponentMeta } from "@storybook/react";
import { TopLevelStep } from "../src/components/LakeStepper";
declare const _default: ComponentMeta<({ steps, activeStepId, style }: {
    steps: TopLevelStep[];
    activeStepId: string;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
}) => JSX.Element>;
export default _default;
export declare const Interactive: () => JSX.Element;
