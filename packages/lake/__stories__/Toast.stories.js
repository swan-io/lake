import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { LakeButton } from "../src/components/LakeButton";
import { Space } from "../src/components/Space";
import { ToastStack } from "../src/components/ToastStack";
import { showToast } from "../src/state/toasts";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
const styles = {
    button: {
        width: 200,
    },
};
export default {
    title: "Interactivity/Toast",
    component: ToastStack,
};
export const Default = () => {
    return (_jsxs(_Fragment, { children: [_jsx(ToastStack, {}), _jsxs(StoryBlock, { title: "Toast", children: [_jsxs(StoryPart, { title: "With only title", children: [_jsx(LakeButton, { color: "positive", style: styles.button, onPress: () => showToast({ variant: "success", title: "Successfully copy to clipboard !" }), children: "Open success toast" }), _jsx(Space, { height: 16 }), _jsx(LakeButton, { color: "negative", style: styles.button, onPress: () => showToast({ variant: "error", title: "Oops ! Something went wrong" }), children: "Open error toast" }), _jsx(Space, { height: 16 }), _jsx(LakeButton, { color: "shakespear", style: styles.button, onPress: () => showToast({ variant: "info", title: "Successfully copy to clipboard !" }), children: "Open success toast" }), _jsx(Space, { height: 16 }), _jsx(LakeButton, { color: "warning", style: styles.button, onPress: () => showToast({ variant: "warning", title: "Oops ! Something went wrong" }), children: "Open warning toast" })] }), _jsxs(StoryPart, { title: "With title and description", children: [_jsx(LakeButton, { color: "positive", style: styles.button, onPress: () => showToast({
                                    variant: "success",
                                    title: "Successfully copy to clipboard !",
                                    description: "You can now paste it anywhere",
                                }), children: "Open success toast" }), _jsx(Space, { height: 16 }), _jsx(LakeButton, { color: "negative", style: styles.button, onPress: () => showToast({
                                    variant: "error",
                                    title: "Oops ! Something went wrong",
                                    description: "Please retry or contact us",
                                }), children: "Open error toast" }), _jsx(Space, { height: 16 }), _jsx(LakeButton, { color: "shakespear", style: styles.button, onPress: () => showToast({
                                    variant: "info",
                                    title: "Successfully copy to clipboard !",
                                    description: "You can now paste it anywhere",
                                }), children: "Open success toast" }), _jsx(Space, { height: 16 }), _jsx(LakeButton, { color: "warning", style: styles.button, onPress: () => showToast({
                                    variant: "warning",
                                    title: "Oops ! Something went wrong",
                                    description: "Talk to an expert",
                                }), children: "Open warning toast" })] }), _jsxs(StoryPart, { title: "With long title and description", children: [_jsx(LakeButton, { color: "positive", style: styles.button, onPress: () => showToast({
                                    variant: "success",
                                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",
                                }), children: "Open success toast" }), _jsx(Space, { height: 16 }), _jsx(LakeButton, { color: "positive", style: styles.button, onPress: () => showToast({
                                    variant: "success",
                                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",
                                }), children: "Open success toast" })] })] })] }));
};
