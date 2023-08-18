import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Except } from "type-fest";
import {
  TimePicker,
  TimePickerProps,
  TimeRangePicker,
  TimeRangePickerProps,
  parseTimeRange,
  validateTimeRange,
} from "../src/components/TimePicker";
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

type StoryArgs = Pick<TimePickerProps, "disabled" | "error">;

const InteractiveTimePicker = (props: Except<TimePickerProps, "value" | "onChangeText">) => {
  const [value, setValue] = useState<string>();

  return <TimePicker {...props} value={value} onChangeText={setValue} />;
};

const InteractiveTimeRangePicker = (props: Except<TimeRangePickerProps, "value" | "onChange">) => {
  const [value, setValue] = useState<TimeRangePickerProps["value"]>({});
  const parsed = parseTimeRange(value);
  const error = validateTimeRange(parsed) ? undefined : "Start time must be before end time";

  return <TimeRangePicker {...props} value={value} onChange={setValue} error={error} />;
};

export const Default = ({ disabled, error }: StoryArgs) => {
  return (
    <StoryBlock title="TimePicker">
      <StoryPart title="Default">
        <View style={styles.container} >
          <InteractiveTimePicker noSuggestionLabel="No time available" disabled={disabled} error={error} />
        </View>
      </StoryPart>
    </StoryBlock>
  );
};

export const RangePicker = ({ disabled, error }: TimeRangePickerProps) => {
  return (
    <StoryBlock title="TimeRangePicker">
      <StoryPart title="Default">
        <View style={styles.container}>
          <InteractiveTimeRangePicker
            disabled={disabled}
            error={error}
            startLabel="Start"
            endLabel="End"
            minutesLabel="Mins"
            hoursLabel="Hours"
            noSuggestionLabel="No time available"
            intervalInMinutes={15}
          />
        </View>
      </StoryPart>
    </StoryBlock>
  );
};
