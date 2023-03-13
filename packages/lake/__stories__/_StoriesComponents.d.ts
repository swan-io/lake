import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
type StoryIntroductionProps = {
    title: string;
    description?: string | string[];
    children: ReactNode;
};
export declare const StoryBlock: ({ title, description, children }: StoryIntroductionProps) => JSX.Element;
type StoryPartProps = {
    title: string;
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
};
export declare const StoryPart: ({ title, children, style }: StoryPartProps) => JSX.Element;
type StoryCodeBlockProps = {
    title: string;
    description?: string | string[];
    children: string;
};
export declare const StoryCodePart: ({ title, description, children }: StoryCodeBlockProps) => JSX.Element;
export {};
