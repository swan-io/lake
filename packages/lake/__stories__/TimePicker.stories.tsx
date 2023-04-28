import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Except } from "type-fest";
import { TimePicker, TimePickerProps } from "../src/components/TimePicker";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    maxWidth: 430,
  },
});

const FIFTEEN_DAYS_AGO = new Date();
FIFTEEN_DAYS_AGO.setDate(FIFTEEN_DAYS_AGO.getDate() - 15);

const FIFTEEN_DAYS_LATER = new Date();
FIFTEEN_DAYS_LATER.setDate(FIFTEEN_DAYS_LATER.getDate() + 15);

export default {
  title: "Forms/TimePicker",
  component: TimePicker,
} as Meta<typeof TimePicker>;

const InteractiveTimePicker = ({ ...props }: Except<TimePickerProps, "value" | "onChangeText">) => {
  const [value, setValue] = useState<string>();

  return <TimePicker {...props} value={value} onChangeText={setValue} />;
};

export const Default = () => {
  return (
    <StoryBlock title="TimePicker">
      <StoryPart title="Default">
        <View style={styles.container}>
          <InteractiveTimePicker noTimeLabel="No time available" />
        </View>
      </StoryPart>
    </StoryBlock>
  );
};
