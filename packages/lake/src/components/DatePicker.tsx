import { Option } from "@swan-io/boxed";
import dayjs from "dayjs";
import { useCallback, useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Rifm } from "rifm";
import { colors, invariantColors, radii, spacings } from "../constants/design";
import { noop } from "../utils/function";
import { isNotNullish, isNullish } from "../utils/nullish";
import { getRifmProps } from "../utils/rifm";
import { Box } from "./Box";
import { Fill } from "./Fill";
import { LakeButton } from "./LakeButton";
import { Item, LakeSelect } from "./LakeSelect";
import { LakeText } from "./LakeText";
import { LakeTextInput } from "./LakeTextInput";
import { Pressable } from "./Pressable";
import { Space } from "./Space";

const styles = StyleSheet.create({
  popoverContainer: {
    width: 430,
    padding: spacings[24],
    backgroundColor: invariantColors.white,
    borderRadius: radii[8],
  },
  monthSelect: {
    width: 130,
  },
  yearSelect: {
    width: 100,
  },
  weekRow: {
    paddingVertical: spacings[4],
  },
  dayName: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  dayNumber: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  dayNumberFocused: {},
  dayNumberHover: {
    backgroundColor: colors.current[100],
  },
  dayNumberPressed: {},
  dayNumberSelected: {
    backgroundColor: colors.current[500],
  },
  todayIndicator: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    width: 4,
    height: 4,
    marginHorizontal: "auto",
    borderRadius: 2,
    backgroundColor: colors.current[500],
  },
});

const NB_DAYS_IN_WEEK = 7;

type MonthNames = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];
type WeekDayNames = readonly [string, string, string, string, string, string, string];

const weekDayIndex = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

export type DatePickerDate = {
  day: number;
  month: number;
  year: number;
};

type DateFormat = "DD/MM/YYYY" | "MM/DD/YYYY";

const rifmDateProps = getRifmProps({
  accept: "numeric",
  charMap: { 2: "/", 4: "/" },
  maxLength: 8,
});

const parseDate = (value: string, format: DateFormat): Option<DatePickerDate> => {
  const date = dayjs.utc(value, format);
  return date.isValid()
    ? Option.Some({ day: date.date(), month: date.month(), year: date.year() })
    : Option.None();
};

const stringifyDate = (value: DatePickerDate, format: DateFormat): string => {
  const date = dayjs.utc().date(value.day).month(value.month).year(value.year);
  return date.format(format);
};

const range = (start: number, end: number): number[] => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

const groupEvery = <T,>(input: T[], groupSize: number): T[][] => {
  const result = [];
  const nbGroups = Math.ceil(input.length / groupSize);
  for (let i = 0; i < nbGroups; i++) {
    result.push(input.slice(i * groupSize, (i + 1) * groupSize));
  }

  return result;
};

const padEnd = <T,>(input: T[], length: number, value: T): T[] => {
  const itemsToAppend = new Array(length - input.length).fill(value) as T[];
  return [...input, ...itemsToAppend];
};

export const isTodayOrFutureDate = (date: DatePickerDate): boolean => {
  const today = new Date();

  return (
    date.year >= today.getFullYear() &&
    date.month >= today.getMonth() &&
    date.day >= today.getDate()
  );
};

export const isInRangeDate =
  (minDate: Date, maxDate: Date) =>
  (date: DatePickerDate): boolean => {
    const minDay = minDate.getDate();
    const minMonth = minDate.getMonth();
    const minYear = minDate.getFullYear();

    const maxDay = maxDate.getDate();
    const maxMonth = maxDate.getMonth();
    const maxYear = maxDate.getFullYear();

    return (
      date.day >= minDay &&
      date.month >= minMonth &&
      date.year >= minYear &&
      date.day <= maxDay &&
      date.month <= maxMonth &&
      date.year <= maxYear
    );
  };

const isDateToday = (date: DatePickerDate): boolean => {
  const today = new Date();
  return (
    date.day === today.getDate() &&
    date.month === today.getMonth() &&
    date.year === today.getFullYear()
  );
};

const getMonthDates = (month: number, year: number): DatePickerDate[] => {
  const aggregate = (acc: DatePickerDate[], date: Date): DatePickerDate[] => {
    const dateDay = date.getDate();
    const dateMonth = date.getMonth();
    const dateYear = date.getFullYear();

    if (date.getMonth() !== month) {
      return acc;
    }

    return aggregate(
      [...acc, { day: dateDay, month: dateMonth, year: dateYear }],
      new Date(year, month, dateDay + 1),
    );
  };

  return aggregate([], new Date(year, month, 1));
};

const getMonthWeeks = (
  month: number,
  year: number,
  firstWeekDay: keyof typeof weekDayIndex,
): Option<DatePickerDate>[][] => {
  const firstWeekDayIndex = weekDayIndex[firstWeekDay];
  const monthFirstWeekDay = new Date(year, month, 1).getDay();
  const monthDates = getMonthDates(month, year).map(date => Option.Some(date));

  const nbDaysToPrepend =
    monthFirstWeekDay >= firstWeekDayIndex
      ? monthFirstWeekDay - firstWeekDayIndex
      : NB_DAYS_IN_WEEK - firstWeekDayIndex + monthFirstWeekDay;

  // TODO Fix this when first week day if monday
  for (let i = 0; i < nbDaysToPrepend; i++) {
    monthDates.unshift(Option.None());
  }
  const weeks = groupEvery(monthDates, NB_DAYS_IN_WEEK);
  const lastWeek = weeks[weeks.length - 1];

  if (!lastWeek) {
    return weeks;
  }
  weeks[weeks.length - 1] = padEnd(lastWeek, NB_DAYS_IN_WEEK, Option.None());

  return weeks;
};

const getWeekDayNames = (
  dayNames: WeekDayNames,
  firstWeekDay: keyof typeof weekDayIndex = "sunday",
): WeekDayNames => {
  const firstWeekDayIndex = weekDayIndex[firstWeekDay];
  const firstWeekDayNames = dayNames.slice(firstWeekDayIndex);
  const lastWeekDayNames = dayNames.slice(0, firstWeekDayIndex);

  // @ts-expect-error
  return [...firstWeekDayNames, ...lastWeekDayNames];
};

const isSelectedDate = (date: DatePickerDate, value: Option<DatePickerDate>) => {
  return value.match({
    Some: value => value.day === date.day && value.month === date.month && value.year === date.year,
    None: () => false,
  });
};

type MonthCalendarProps = {
  month: number;
  year: number;
  value: Option<DatePickerDate>;
  firstWeekDay: keyof typeof weekDayIndex;
  weekDayNames: WeekDayNames;
  isSelectable?: (date: DatePickerDate) => boolean;
  onChange: (date: DatePickerDate) => void;
};

const MonthCalendar = ({
  month,
  year,
  value,
  firstWeekDay,
  weekDayNames,
  isSelectable,
  onChange,
}: MonthCalendarProps) => {
  const dayNames = useMemo(
    () => getWeekDayNames(weekDayNames, firstWeekDay),
    [weekDayNames, firstWeekDay],
  );
  const weeks = useMemo(
    () => getMonthWeeks(month, year, firstWeekDay),
    [month, year, firstWeekDay],
  );

  return (
    <View>
      <Box direction="row" alignItems="center" justifyContent="spaceAround" style={styles.weekRow}>
        {dayNames.map(dayName => (
          <View key={dayName} style={styles.dayName}>
            <LakeText variant="medium" color={colors.gray[600]}>
              {dayName.substring(0, 1)}
            </LakeText>
          </View>
        ))}
      </Box>

      {weeks.map((week, weekIndex) => (
        <Box
          key={weekIndex}
          direction="row"
          alignItems="center"
          justifyContent="spaceAround"
          style={styles.weekRow}
        >
          {week.map((date, dateIndex) => {
            const isDisabled = date.match({
              Some: date => isNotNullish(isSelectable) && !isSelectable(date),
              None: () => true,
            });
            const isSelected = date.match({
              Some: date => isSelectedDate(date, value),
              None: () => false,
            });
            const isToday = date.match({
              Some: date => isDateToday(date),
              None: () => false,
            });

            return (
              <Pressable
                key={dateIndex}
                disabled={isDisabled}
                onPress={() => date.match({ Some: onChange, None: noop })}
                style={({ focused, hovered, pressed }) => [
                  styles.dayNumber,
                  focused && styles.dayNumberFocused,
                  hovered && styles.dayNumberHover,
                  pressed && styles.dayNumberPressed,
                  isSelected && styles.dayNumberSelected,
                ]}
              >
                <LakeText
                  variant="smallRegular"
                  color={
                    isSelected
                      ? colors.current.contrast
                      : isDisabled
                      ? colors.gray[300]
                      : isToday
                      ? colors.current[500]
                      : colors.gray[900]
                  }
                >
                  {date.match({ Some: ({ day }) => day.toString(), None: () => " " })}
                </LakeText>

                {isToday && <View style={styles.todayIndicator} />}
              </Pressable>
            );
          })}
        </Box>
      ))}
    </View>
  );
};

export type DatePickerProps = {
  value?: string;
  format: DateFormat;
  firstWeekDay: keyof typeof weekDayIndex;
  monthNames: MonthNames;
  weekDayNames: WeekDayNames;
  isSelectable?: (date: DatePickerDate) => boolean;
  onChange: (date: string) => void;
};

const DatePickerPopover = ({
  value,
  format,
  firstWeekDay,
  monthNames,
  weekDayNames,
  isSelectable,
  onChange,
}: DatePickerProps) => {
  const [{ month, year }, setMonthYear] = useState(() => {
    if (isNullish(value)) {
      return {
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
      };
    }
    const parsed = parseDate(value, format);
    return parsed.match({
      Some: ({ month, year }) => ({ month, year }),
      None: () => ({
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
      }),
    });
  });

  useEffect(() => {
    if (isNullish(value)) {
      return;
    }
    const parsed = parseDate(value, format);
    if (parsed.isNone()) {
      return;
    }
    const { month, year } = parsed.value;
    setMonthYear({ month, year });
  }, [value, format]);

  const monthItems = useMemo<Item<number>[]>(
    () => monthNames.map((name, index) => ({ name, value: index })),
    [monthNames],
  );

  const yearItems = useMemo<Item<number>[]>(
    () =>
      range(year - 5, year + 5).map(year => ({
        name: year.toString(),
        value: year,
      })),
    [year],
  );

  const selectMonth = useCallback((month: number) => {
    setMonthYear(({ year }) => ({ month, year }));
  }, []);

  const selectYear = useCallback((year: number) => {
    setMonthYear(({ month }) => ({ month, year }));
  }, []);

  const setPreviousMonth = useCallback(() => {
    setMonthYear(({ month, year }) => {
      if (month === 0) {
        return { month: 11, year: year - 1 };
      }
      return { month: month - 1, year };
    });
  }, []);

  const setNextMonth = useCallback(() => {
    setMonthYear(({ month, year }) => {
      if (month === 11) {
        return { month: 0, year: year + 1 };
      }
      return { month: month + 1, year };
    });
  }, []);

  const handleChange = useCallback(
    (date: DatePickerDate) => {
      const formatted = stringifyDate(date, format);
      onChange(formatted);
    },
    [format, onChange],
  );

  return (
    <View style={styles.popoverContainer}>
      <Box direction="row" alignItems="center">
        <LakeSelect
          items={monthItems}
          value={month}
          onValueChange={selectMonth}
          mode="borderless"
          size="small"
          hideErrors={true}
          style={styles.monthSelect}
        />

        <LakeSelect
          items={yearItems}
          value={year}
          onValueChange={selectYear}
          mode="borderless"
          size="small"
          hideErrors={true}
          style={styles.yearSelect}
        />

        <Fill minWidth={12} />

        <LakeButton
          size="small"
          mode="tertiary"
          icon="arrow-left-filled"
          onPress={setPreviousMonth}
        />

        <Space width={12} />
        <LakeButton size="small" mode="tertiary" icon="arrow-right-filled" onPress={setNextMonth} />
      </Box>

      <Space height={24} />

      <MonthCalendar
        month={month}
        year={year}
        value={isNotNullish(value) ? parseDate(value, format) : Option.None()}
        firstWeekDay={firstWeekDay}
        weekDayNames={weekDayNames}
        isSelectable={isSelectable}
        onChange={handleChange}
      />
    </View>
  );
};

export const DatePicker = ({
  value,
  format,
  firstWeekDay,
  monthNames,
  weekDayNames,
  isSelectable,
  onChange,
}: DatePickerProps) => {
  return (
    <>
      <Rifm value={value ?? ""} onChange={onChange} {...rifmDateProps}>
        {({ value, onChange }) => (
          <LakeTextInput placeholder={format} value={value} onChange={onChange} />
        )}
      </Rifm>

      <DatePickerPopover
        value={value}
        format={format}
        firstWeekDay={firstWeekDay}
        monthNames={monthNames}
        weekDayNames={weekDayNames}
        isSelectable={isSelectable}
        onChange={onChange}
      />
    </>
  );
};
