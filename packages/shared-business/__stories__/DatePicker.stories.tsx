import { Meta } from "@storybook/react";
import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { Space } from "@swan-io/lake/src/components/Space";
import { WithPartnerAccentColor } from "@swan-io/lake/src/components/WithPartnerAccentColor";
import { isNotNullish, isNotNullishOrEmpty } from "@swan-io/lake/src/utils/nullish";
import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Except } from "type-fest";
import { BirthdatePicker } from "../src/components/BirthdatePicker";
import {
  DatePicker,
  DatePickerModal,
  DatePickerProps,
  DateRangePicker,
  DateRangePickerModal,
  DateRangePickerProps,
  isDateInRange,
  isTodayOrFutureDate,
  validateDateRangeOrder,
} from "../src/components/DatePicker";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    maxWidth: 430,
  },
  button: {
    alignSelf: "flex-start",
  },
});

const FIFTEEN_DAYS_AGO = new Date();
FIFTEEN_DAYS_AGO.setDate(FIFTEEN_DAYS_AGO.getDate() - 15);

const FIFTEEN_DAYS_LATER = new Date();
FIFTEEN_DAYS_LATER.setDate(FIFTEEN_DAYS_LATER.getDate() + 15);

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
  const isRangeValid = validateDateRangeOrder(value, props.format);

  return (
    <DateRangePicker
      {...props}
      value={value}
      error={isRangeValid ? undefined : "End date can't be before start date"}
      onChange={setValue}
    />
  );
};

export const Default = () => {
  return (
    <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DatePicker">
        <StoryPart title="Default">
          <View style={styles.container}>
            <InteractiveDatePicker
              label="Select a date"
              firstWeekDay="monday"
              format="DD/MM/YYYY"
            />
          </View>
        </StoryPart>

        <StoryPart title="Week starting sunday">
          <View style={styles.container}>
            <InteractiveDatePicker
              label="Select a date"
              firstWeekDay="sunday"
              format="DD/MM/YYYY"
            />
          </View>
        </StoryPart>

        <StoryPart title="Selectable only in the future">
          <View style={styles.container}>
            <InteractiveDatePicker
              label="Select a date"
              firstWeekDay="sunday"
              format="DD/MM/YYYY"
              isSelectable={isTodayOrFutureDate}
            />
          </View>
        </StoryPart>

        <StoryPart title="Selectable only in a range (15 days before or after today)">
          <View style={styles.container}>
            <InteractiveDatePicker
              label="Select a date"
              firstWeekDay="sunday"
              format="DD/MM/YYYY"
              isSelectable={isDateInRange(FIFTEEN_DAYS_AGO, FIFTEEN_DAYS_LATER)}
            />
          </View>
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>
  );
};

export const ButtonWithModal = () => {
  const buttonRef = useRef<View>(null);
  const [value, setValue] = useState("");
  const [isOpened, setIsOpened] = useState(false);

  return (
    <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DatePicker Modal">
        <StoryPart title="Default">
          <LakeText>Selected date: {value}</LakeText>
          <Space height={20} />

          <LakeButton ref={buttonRef} style={styles.button} onPress={() => setIsOpened(true)}>
            Open date picker
          </LakeButton>

          <DatePickerModal
            visible={isOpened}
            value={value}
            firstWeekDay="monday"
            format="DD/MM/YYYY"
            label="Select a date"
            confirmLabel="Select"
            cancelLabel="Cancel"
            onChange={setValue}
            onDismiss={() => setIsOpened(false)}
          />
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
          <View style={styles.container}>
            <InteractiveDateRangePicker
              startLabel="Start date"
              endLabel="End date"
              firstWeekDay="monday"
              format="DD/MM/YYYY"
            />
          </View>
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>
  );
};

export const ButtonWithRangePopover = () => {
  const [value, setValue] = useState({ start: "", end: "" });
  const [isOpened, setIsOpened] = useState(false);

  return (
    <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DatePicker Popover">
        <StoryPart title="Default">
          <LakeText>
            Selected date: {value.start} - {value.end}
          </LakeText>

          <Space height={20} />

          <LakeButton style={styles.button} onPress={() => setIsOpened(true)}>
            Open date range picker
          </LakeButton>

          <DateRangePickerModal
            visible={isOpened}
            value={value}
            firstWeekDay="monday"
            format="DD/MM/YYYY"
            startLabel="Start date"
            endLabel="End date"
            confirmLabel="Select"
            cancelLabel="Cancel"
            onChange={setValue}
            onDismiss={() => setIsOpened(false)}
          />
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>
  );
};

export const Inline = () => {
  const initialValue = "";

  const [birthdate, setBirthdate] = useState<string | undefined>(initialValue);

  return (
    <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="Inline picker">
        <StoryPart title="Default">
          <View style={styles.container}>
            {isNotNullishOrEmpty(birthdate) && <LakeText>Selected date: {birthdate}</LakeText>}

            <BirthdatePicker
              label={"Birthdate"}
              value={initialValue}
              onValueChange={setBirthdate}
            />
          </View>
        </StoryPart>

        <StoryPart title="Readonly">
          <View style={styles.container}>
            {isNotNullish(birthdate) && <LakeText>Selected date: {birthdate}</LakeText>}

            <BirthdatePicker
              label={"Birthdate"}
              value={initialValue}
              readOnly={true}
              onValueChange={setBirthdate}
            />
          </View>
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>
  );
};
