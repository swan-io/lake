import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Except } from "type-fest";
import {
  DatePicker,
  DatePickerProps,
  DateRangePicker,
  DateRangePickerProps,
  isTodayOrFutureDate,
} from "../src/components/DatePicker";
import { WithPartnerAccentColor } from "../src/components/WithPartnerAccentColor";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    width: 430,
  },
});

export default {
  title: "Forms/DatePicker",
  component: DatePicker,
} as Meta<typeof DatePicker>;

const InteractiveDatePicker = ({ ...props }: Except<DatePickerProps, "value" | "onChange">) => {
  const [value, setValue] = useState<string>();

  return <DatePicker {...props} value={value} onChange={setValue} />;
};

const InteractiveDateRangePicker = ({
  ...props
}: Except<DateRangePickerProps, "value" | "onChange">) => {
  const [value, setValue] = useState({ start: "", end: "" });

  return <DateRangePicker {...props} value={value} onChange={setValue} />;
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export const Default = () => {
  return (
    <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DatePicker">
        <StoryPart title="Default">
          <View style={styles.container}>
            <InteractiveDatePicker
              firstWeekDay="monday"
              monthNames={monthNames}
              weekDayNames={dayNames}
              format="DD/MM/YYYY"
            />
          </View>
        </StoryPart>

        <StoryPart title="Week starting sunday">
          <View style={styles.container}>
            <InteractiveDatePicker
              firstWeekDay="sunday"
              monthNames={monthNames}
              weekDayNames={dayNames}
              format="DD/MM/YYYY"
            />
          </View>
        </StoryPart>

        <StoryPart title="Selectable only in the future">
          <View style={styles.container}>
            <InteractiveDatePicker
              firstWeekDay="sunday"
              monthNames={monthNames}
              weekDayNames={dayNames}
              format="DD/MM/YYYY"
              isSelectable={isTodayOrFutureDate}
            />
          </View>
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>
  );
};

export const Range = () => {
  return (
    <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DateRangePicker">
        <StoryPart title="Default">
          <InteractiveDateRangePicker
            firstWeekDay="monday"
            monthNames={monthNames}
            weekDayNames={dayNames}
            format="DD/MM/YYYY"
            cancelLabel="Cancel"
            confirmLabel="Select"
          />
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>
  );
};
