import { Meta } from "@storybook/react";
import { isValidEmail } from "@swan-io/shared-business/src/utils/validation";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Except } from "type-fest";
import { LakeTagInput, LakeTagInputProps } from "../src/components/LakeTagInput";
import { LakeTextInput } from "../src/components/LakeTextInput";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  input: {
    maxWidth: 400,
  },
});

export default {
  title: "Forms/TagInput",
  component: LakeTextInput,
} as Meta<typeof LakeTextInput>;

const EditableTagInput = (
  props: Except<LakeTagInputProps, "onAddValues" | "onRemoveValue" | "values">,
) => {
  const [values, setValues] = useState<string[]>(["toto", "dfghj@iouy.fr"]);

  return (
    <View style={styles.input}>
      <LakeTagInput
        validator={isValidEmail}
        onAddValues={values =>
          setValues(state => [...state, ...values.filter(v => !state.includes(v))])
        }
        onRemoveValue={value => setValues(s => s.filter(v => v !== value))}
        values={values}
        {...props}
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

      <StoryPart title="Disabled">
        <EditableTagInput disabled={true} />
      </StoryPart>

      <StoryPart title="Error">
        <EditableTagInput error="Nop" />
      </StoryPart>

      <StoryPart title="Hidden errors">
        <EditableTagInput error="Nop" hideErrors={true} />
      </StoryPart>

      <StoryPart title="Valid">
        <EditableTagInput valid={true} />
      </StoryPart>

      <StoryPart title="With help">
        <EditableTagInput help="Fill me" />
      </StoryPart>

      <StoryPart title="Read only">
        <EditableTagInput readOnly={true} />
      </StoryPart>
    </StoryBlock>
  );
};
