import { Meta } from "@storybook/react";
import { isValidEmail } from "@swan-io/shared-business/src/utils/validation";
import { StyleSheet, View } from "react-native";
import { LakeTagInput, LakeTagInputProps } from "../src/components/LakeTagInput";
import { LakeTextInput } from "../src/components/LakeTextInput";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  input: {
    maxWidth: 400,
  },
  fixedHeightInput: { height: 128 },
});

export default {
  title: "Forms/TagInput",
  component: LakeTextInput,
} as Meta<typeof LakeTextInput>;

const EditableTagInput = (props: LakeTagInputProps) => {
  //   const [value, setValue] = useState(props.defaultValue ?? "");

  return (
    <View style={styles.input}>
      <LakeTagInput
        {...props}
        // value={value}
        validator={isValidEmail}
        onChange={c => console.log("[NC] onChange ?", c)}
      />
    </View>
  );
};

export const Variations = () => {
  return (
    <StoryBlock title="Input variations">
      <StoryPart title="Default">
        <EditableTagInput />
      </StoryPart>
    </StoryBlock>
  );
};
