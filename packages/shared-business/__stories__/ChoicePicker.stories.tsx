import { Meta } from "@storybook/react";
import { Tag } from "@swan-io/lake/src/components/Tag";
import { spacings } from "@swan-io/lake/src/constants/design";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { match } from "ts-pattern";
import { ChoicePicker } from "../src/components/ChoicePicker";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  part: {
    padding: spacings[32], // adds some padding to avoid overflow hidden caused by storybook canvas
  },
});

export default {
  title: "Forms/ChoicePicker",
  component: ChoicePicker,
} as Meta<typeof ChoicePicker>;

export const Default = () => {
  const items: ["Virtual", "VirtualAndPhysical", "SingleUseVirtual"] = [
    "Virtual",
    "VirtualAndPhysical",
    "SingleUseVirtual",
  ];
  const [value, setValue] = useState<(typeof items)[number]>();
  const [largeValue, setLargeValue] = useState<(typeof items)[number]>();

  return (
    <StoryBlock title="Choice Picker">
      <StoryPart title="Default" style={styles.part}>
        <ChoicePicker
          items={items}
          value={value}
          onChange={setValue}
          renderItem={item =>
            match(item)
              .with("Virtual", () => (
                <Tag icon="phone-regular" color="mediumSladeBlue">
                  Virtual
                </Tag>
              ))
              .with("VirtualAndPhysical", () => (
                <Tag icon="payment-regular" color="shakespear">
                  Virtual & physical
                </Tag>
              ))
              .with("SingleUseVirtual", () => (
                <Tag icon="phone-regular" color="darkPink">
                  Single use
                </Tag>
              ))
              .exhaustive()
          }
        />
      </StoryPart>

      <StoryPart title="Large" style={styles.part}>
        <ChoicePicker
          items={items}
          value={largeValue}
          large={true}
          onChange={setLargeValue}
          renderItem={item =>
            match(item)
              .with("Virtual", () => (
                <Tag icon="phone-regular" color="mediumSladeBlue">
                  Virtual
                </Tag>
              ))
              .with("VirtualAndPhysical", () => (
                <Tag icon="payment-regular" color="shakespear">
                  Virtual & physical
                </Tag>
              ))
              .with("SingleUseVirtual", () => (
                <Tag icon="phone-regular" color="darkPink">
                  Single use
                </Tag>
              ))
              .exhaustive()
          }
        />
      </StoryPart>

      <StoryPart title="Without tile" style={styles.part}>
        <ChoicePicker
          tile={false}
          items={items}
          value={largeValue}
          onChange={setLargeValue}
          renderItem={item =>
            match(item)
              .with("Virtual", () => (
                <Tag icon="phone-regular" color="mediumSladeBlue">
                  Virtual
                </Tag>
              ))
              .with("VirtualAndPhysical", () => (
                <Tag icon="payment-regular" color="shakespear">
                  Virtual & physical
                </Tag>
              ))
              .with("SingleUseVirtual", () => (
                <Tag icon="phone-regular" color="darkPink">
                  Single use
                </Tag>
              ))
              .exhaustive()
          }
        />
      </StoryPart>
    </StoryBlock>
  );
};
