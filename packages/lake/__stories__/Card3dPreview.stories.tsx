import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Card3dPreview from "../src/components/Card3dPreview";
import { LakeLabel } from "../src/components/LakeLabel";
import { LakeTextInput } from "../src/components/LakeTextInput";
import { RadioGroup } from "../src/components/RadioGroup";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  canvasContainer: {
    height: 500,
  },
});

export default {
  title: "Informations/Card3dPreview",
  component: Card3dPreview,
} as Meta<typeof Card3dPreview>;

export const Card = () => {
  const [name, setName] = useState("John Doe");
  const [color, setColor] = useState<"Silver" | "Black">("Silver");

  return (
    <StoryBlock title="Card">
      <StoryPart title="Default">
        <LakeLabel
          label="Name"
          render={() => <LakeTextInput value={name} onChangeText={setName} />}
        />

        <LakeLabel
          label="Color"
          render={() => (
            <RadioGroup
              value={color}
              onValueChange={setColor}
              items={[
                { name: "Silver", value: "Silver" },
                { name: "Black", value: "Black" },
              ]}
            />
          )}
        />

        <View style={styles.canvasContainer}>
          <Card3dPreview
            color={color}
            ownerName={name}
            cardNumber="1234 5678 9012 3456"
            expirationDate="12/24"
            cvv="123"
          />
        </View>
      </StoryPart>
    </StoryBlock>
  );
};

export const AutoRotation = () => {
  const [name, setName] = useState("John Doe");
  const [color, setColor] = useState<"Silver" | "Black">("Silver");

  return (
    <StoryBlock title="Card">
      <StoryPart title="Default">
        <LakeLabel
          label="Name"
          render={() => <LakeTextInput value={name} onChangeText={setName} />}
        />

        <LakeLabel
          label="Color"
          render={() => (
            <RadioGroup
              value={color}
              onValueChange={setColor}
              items={[
                { name: "Silver", value: "Silver" },
                { name: "Black", value: "Black" },
              ]}
            />
          )}
        />

        <View style={styles.canvasContainer}>
          <Card3dPreview
            autoRotationDuration={10}
            color={color}
            ownerName={name}
            cardNumber="1234 5678 9012 3456"
            expirationDate="12/24"
            cvv="123"
          />
        </View>
      </StoryPart>
    </StoryBlock>
  );
};
