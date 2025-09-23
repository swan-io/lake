import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Except } from "type-fest";
import { LakeCopyButton } from "../src/components/LakeCopyButton";
import { LakeTextInput, LakeTextInputProps } from "../src/components/LakeTextInput";
import { Tag } from "../src/components/Tag";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  input: {
    maxWidth: 400,
  },
  fixedHeightInput: { height: 128 },
});

export default {
  title: "Forms/TextInput",
  component: LakeTextInput,
} as Meta<typeof LakeTextInput>;

const EditableInputText = (props: Except<LakeTextInputProps, "value" | "onChange">) => {
  const [value, setValue] = useState(props.defaultValue ?? "");

  return (
    <View style={styles.input}>
      <LakeTextInput
        {...props}
        value={value}
        onChange={event => setValue(event.currentTarget.value)}
      />
    </View>
  );
};

const EditableInputTextWithUnitChooser = (
  props: Except<LakeTextInputProps, "value" | "onChange">,
) => {
  const [value, setValue] = useState(props.defaultValue ?? "");
  const [unit, setUnit] = useState(props.unit);
  return (
    <View style={styles.input}>
      <LakeTextInput
        {...props}
        unit={unit}
        value={value}
        onUnitChange={setUnit}
        onChange={event => setValue(event.currentTarget.value)}
      />
    </View>
  );
};

export const Variations = () => {
  return (
    <StoryBlock title="Input variations">
      <StoryPart title="Default">
        <EditableInputText />
      </StoryPart>

      <StoryPart title="Validating">
        <EditableInputText validating={true} />
      </StoryPart>

      <StoryPart title="Valid">
        <EditableInputText valid={true} />
      </StoryPart>

      <StoryPart title="Info">
        <EditableInputText info={true} />
      </StoryPart>

      <StoryPart title="Warning">
        <EditableInputText warning={true} />
      </StoryPart>

      <StoryPart title="Warning + error">
        <EditableInputText warning={true} error="This input is invalid" />
      </StoryPart>

      <StoryPart title="Invalid">
        <EditableInputText icon="chat-help-regular" error="This input is invalid" />
      </StoryPart>

      <StoryPart title="Invalid without error message">
        <EditableInputText error="This input is invalid" hideErrors={true} />
      </StoryPart>

      <StoryPart title="With character counter">
        <EditableInputText maxCharCount={15} />
      </StoryPart>

      <StoryPart title="Character counter with error message">
        <EditableInputText
          error="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit semper ornare. "
          maxCharCount={15}
        />
      </StoryPart>

      <StoryPart title="With help">
        <EditableInputText help="9 characters" />
      </StoryPart>

      <StoryPart title="With help and error">
        <EditableInputText help="9 characters" error="Invalid" />
      </StoryPart>

      <StoryPart title="Disabled">
        <EditableInputText disabled={true} />
      </StoryPart>

      <StoryPart title="Readonly">
        <EditableInputText readOnly={true} />
      </StoryPart>

      <StoryPart title="Multi line">
        <EditableInputText multiline={true} />
      </StoryPart>

      <StoryPart title="Multi line">
        <EditableInputText
          multiline={true}
          style={styles.fixedHeightInput}
          placeholder="Placeholder"
        />
      </StoryPart>

      <StoryPart title="With icon">
        <EditableInputText icon="chat-help-regular" />
      </StoryPart>

      <StoryPart title="With unit">
        <EditableInputText unit="$" />
      </StoryPart>

      <StoryPart title="With unit chooser">
        <EditableInputTextWithUnitChooser
          units={["EUR", "PLN", "USD"]}
          unit="USD"
          inputMode="numeric"
        />
      </StoryPart>

      <StoryPart title="With end icon and custom injected component">
        <EditableInputText
          error="Hey"
          renderEnd={() => (
            <>
              <LakeCopyButton copyText="Copy" copiedText="Copied" valueToCopy="Copy me" />
              <Tag>Example tag</Tag>
            </>
          )}
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const ColorVariations = () => {
  return (
    <StoryBlock
      title="Text input color variation"
      description="You can see different colors by focusing each input"
    >
      <StoryPart title="Default">
        <EditableInputText />
      </StoryPart>

      <StoryPart title="Gray">
        <EditableInputText color="gray" />
      </StoryPart>

      <StoryPart title="Live">
        <EditableInputText color="live" />
      </StoryPart>

      <StoryPart title="Sandbox">
        <EditableInputText color="sandbox" />
      </StoryPart>

      <StoryPart title="Positive">
        <EditableInputText color="positive" />
      </StoryPart>

      <StoryPart title="Warning">
        <EditableInputText color="warning" />
      </StoryPart>

      <StoryPart title="Negative">
        <EditableInputText color="negative" />
      </StoryPart>

      <StoryPart title="Current">
        <EditableInputText color="current" />
      </StoryPart>

      <StoryPart title="Partner">
        <EditableInputText color="partner" />
      </StoryPart>

      <StoryPart title="Swan">
        <EditableInputText color="swan" />
      </StoryPart>

      <StoryPart title="Shakespear">
        <EditableInputText color="shakespear" />
      </StoryPart>

      <StoryPart title="DarkPink">
        <EditableInputText color="darkPink" />
      </StoryPart>

      <StoryPart title="Sunglow">
        <EditableInputText color="sunglow" />
      </StoryPart>

      <StoryPart title="MediumSladeBlue">
        <EditableInputText color="mediumSladeBlue" />
      </StoryPart>
    </StoryBlock>
  );
};

export const Numeric = () => {
  return (
    <StoryBlock
      title="Numeric text input"
      description="This variation is an example for digit inputs. It displays digits only keyboard on mobile"
    >
      <EditableInputText placeholder="000000" inputMode="numeric" pattern="[0-9]" maxLength={6} />
    </StoryBlock>
  );
};
