import { AsyncData, Option, Result } from "@swan-io/boxed";
import { useMemo } from "react";
import { Rifm } from "rifm";
import { identity, noop } from "../utils/function";
import { isNullish } from "../utils/nullish";
import { getRifmProps } from "../utils/rifm";
import { LakeCombobox } from "./LakeCombobox";

type Time = {
  hour: number;
  minute: number;
};

const DEFAULT_START_TIME: Time = { hour: 0, minute: 0 };
const DEFAULT_END_TIME: Time = { hour: 23, minute: 59 };
const DEFAULT_INTERVAL_IN_MINUTES = 15;

const rifmTimeProps = getRifmProps({
  accept: "numeric",
  charMap: { 2: ":" },
  maxLength: 4,
});

export const parseTime = (time: string): Option<Time> => {
  const [hours, minutes] = time.split(":").map(Number);

  if (isNullish(hours) || isNaN(hours) || isNullish(minutes) || isNaN(minutes)) {
    return Option.None();
  }

  return Option.Some({ hour: hours, minute: minutes });
};

const parseTypingHours = (time: string): Option<number> => {
  const [hours] = time.split(":");

  if (isNullish(hours) || hours?.length !== 2) {
    return Option.None();
  }

  const parsedHours = Number(hours);

  if (parsedHours < 0 || parsedHours > 23) {
    return Option.None();
  }

  if (isNaN(parsedHours)) {
    return Option.None();
  }

  return Option.Some(parsedHours);
};

const stringifyTime = (time: Time): string => {
  return `${time.hour.toString().padStart(2, "0")}:${time.minute.toString().padStart(2, "0")}`;
};

export const validateTime = (time: Time): boolean => {
  return time.hour >= 0 && time.hour <= 23 && time.minute >= 0 && time.minute <= 59;
};

const timeToMinutes = (time: Time): number => {
  return time.hour * 60 + time.minute;
};

const minutesToTime = (minutes: number): Time => {
  return {
    hour: Math.floor(minutes / 60),
    minute: minutes % 60,
  };
};

const generateTimeList = (start: Time, end: Time, intervalInMinutes: number): string[] => {
  const startMinutes = timeToMinutes(start);
  const endMinutes = timeToMinutes(end);

  const timeList = [];
  for (let i = startMinutes; i <= endMinutes; i += intervalInMinutes) {
    const time = minutesToTime(i);
    timeList.push(stringifyTime(time));
  }

  return timeList;
};

export type TimePickerProps = {
  value?: string;
  onChangeText: (value: string) => void;
  start?: Time;
  end?: Time;
  intervalInMinutes?: number;
  nbMaxItems?: number;
  readOnly?: boolean;
  disabled?: boolean;
  error?: string;
  noTimeLabel: string;
};

export const TimePicker = ({
  value,
  onChangeText,
  start = DEFAULT_START_TIME,
  end = DEFAULT_END_TIME,
  intervalInMinutes = DEFAULT_INTERVAL_IN_MINUTES,
  nbMaxItems,
  readOnly,
  disabled,
  error,
  noTimeLabel,
}: TimePickerProps) => {
  const typingHour = parseTypingHours(value ?? "");

  const optionsInterval: [Time, Time] = useMemo(
    () =>
      typingHour.match({
        Some: hour => [
          { hour, minute: 0 },
          { hour, minute: 59 },
        ],
        None: () => [start, end],
      }),
    [typingHour, start, end],
  );

  const options = useMemo(
    () =>
      generateTimeList(optionsInterval[0], optionsInterval[1], intervalInMinutes).slice(
        0,
        nbMaxItems,
      ),
    [optionsInterval, intervalInMinutes, nbMaxItems],
  );

  const items = useMemo(() => AsyncData.Done(Result.Ok(options)), [options]);

  return (
    <Rifm value={value ?? ""} onChange={onChangeText} {...rifmTimeProps}>
      {({ value, onChange }) => (
        <LakeCombobox
          keyExtractor={identity}
          placeholder="HH:MM"
          value={value}
          items={items}
          renderItem={identity}
          readOnly={readOnly}
          disabled={disabled}
          error={error}
          emptyResultText={noTimeLabel}
          onChange={onChange}
          onValueChange={noop}
          onSelectItem={onChangeText}
        />
      )}
    </Rifm>
  );
};
