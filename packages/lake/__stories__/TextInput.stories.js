import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { LakeTextInput } from "../src/components/LakeTextInput";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
const styles = StyleSheet.create({
    input: {
        maxWidth: 400,
    },
});
export default {
    title: "Forms/TextInput",
    component: LakeTextInput,
};
const EditableInputText = (props) => {
    const [value, setValue] = useState(props.defaultValue ?? "");
    return (_jsx(View, { style: styles.input, children: _jsx(LakeTextInput, { ...props, value: value, onChange: event => setValue(event.currentTarget.value) }) }));
};
export const Variations = () => {
    return (_jsxs(StoryBlock, { title: "Input variations", children: [_jsx(StoryPart, { title: "Default", children: _jsx(EditableInputText, {}) }), _jsx(StoryPart, { title: "Invalid", children: _jsx(EditableInputText, { error: "This input is invalid" }) }), _jsx(StoryPart, { title: "Invalid without error message", children: _jsx(EditableInputText, { error: "This input is invalid", hideErrors: true }) }), _jsx(StoryPart, { title: "Valid", children: _jsx(EditableInputText, { valid: true }) }), _jsx(StoryPart, { title: "Disabled", children: _jsx(EditableInputText, { disabled: true }) }), _jsx(StoryPart, { title: "Readonly", children: _jsx(EditableInputText, { readOnly: true }) }), _jsx(StoryPart, { title: "Multi line", children: _jsx(EditableInputText, { multiline: true }) }), _jsx(StoryPart, { title: "With icon", children: _jsx(EditableInputText, { icon: "chat-help-regular" }) }), _jsx(StoryPart, { title: "With unit", children: _jsx(EditableInputText, { unit: "$" }) })] }));
};
export const ColorVariations = () => {
    return (_jsxs(StoryBlock, { title: "Text input color variation", description: "You can see different colors by focusing each input", children: [_jsx(StoryPart, { title: "Default", children: _jsx(EditableInputText, {}) }), _jsx(StoryPart, { title: "Gray", children: _jsx(EditableInputText, { color: "gray" }) }), _jsx(StoryPart, { title: "Live", children: _jsx(EditableInputText, { color: "live" }) }), _jsx(StoryPart, { title: "Sandbox", children: _jsx(EditableInputText, { color: "sandbox" }) }), _jsx(StoryPart, { title: "Positive", children: _jsx(EditableInputText, { color: "positive" }) }), _jsx(StoryPart, { title: "Warning", children: _jsx(EditableInputText, { color: "warning" }) }), _jsx(StoryPart, { title: "Negative", children: _jsx(EditableInputText, { color: "negative" }) }), _jsx(StoryPart, { title: "Current", children: _jsx(EditableInputText, { color: "current" }) }), _jsx(StoryPart, { title: "Partner", children: _jsx(EditableInputText, { color: "partner" }) }), _jsx(StoryPart, { title: "Swan", children: _jsx(EditableInputText, { color: "swan" }) }), _jsx(StoryPart, { title: "Shakespear", children: _jsx(EditableInputText, { color: "shakespear" }) }), _jsx(StoryPart, { title: "DarkPink", children: _jsx(EditableInputText, { color: "darkPink" }) }), _jsx(StoryPart, { title: "Sunglow", children: _jsx(EditableInputText, { color: "sunglow" }) }), _jsx(StoryPart, { title: "MediumSladeBlue", children: _jsx(EditableInputText, { color: "mediumSladeBlue" }) })] }));
};
export const Numeric = () => {
    return (_jsx(StoryBlock, { title: "Numeric text input", description: "This variation is an example for digit inputs. It displays digits only keyboard on mobile", children: _jsx(EditableInputText, { placeholder: "000000", keyboardType: "numeric", pattern: "[0-9]", maxLength: 6 }) }));
};
