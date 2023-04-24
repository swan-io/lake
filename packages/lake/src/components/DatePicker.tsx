import { Option } from "@swan-io/boxed";
import dayjs from "dayjs";
import { useCallback, useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Rifm } from "rifm";
import { P, match } from "ts-pattern";
import { colors, invariantColors, radii, spacings } from "../constants/design";
import { noop } from "../utils/function";
import { isNotNullish, isNotNullishOrEmpty, isNullishOrEmpty } from "../utils/nullish";
import { getRifmProps } from "../utils/rifm";
import { Box } from "./Box";
import { Fill } from "./Fill";
import { Icon } from "./Icon";
import { LakeButton } from "./LakeButton";
import { Item, LakeSelect } from "./LakeSelect";
import { LakeText } from "./LakeText";
import { LakeTextInput } from "./LakeTextInput";
import { Pressable } from "./Pressable";
import { Separator } from "./Separator";
import { Space } from "./Space";

const styles = StyleSheet.create({
  popoverContainer: {
    width: 430,
    padding: spacings[24],
    backgroundColor: invariantColors.white,
    borderRadius: radii[8],
  },
  rangePopoverContainer: {
    alignSelf: "flex-start", // to remove when popover is setup
    padding: spacings[24],
    backgroundColor: invariantColors.white,
    borderRadius: radii[8],
  },
  rangePopoverPart: {
    width: 330,
  },
  button: {
    flex: 1,
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
    flex: 1,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  dayContainer: {
    flex: 1,
    alignItems: "center",
  },
  dayRangeIndicator: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: colors.current[100],
  },
  dayStartRangeIndicator: {
    left: "50%",
  },
  dayEndRangeIndicator: {
    right: "50%",
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

type YearMonth = {
  year: number;
  month: number;
};

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

export type DatePickerRange = {
  start: Option<DatePickerDate>;
  end: Option<DatePickerDate>;
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

const parseRange = (value: { start: string; end: string }, format: DateFormat): DatePickerRange => {
  return {
    start: parseDate(value.start, format),
    end: parseDate(value.end, format),
  };
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

export const isDateInRange =
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

const isDateEquals = (date1: DatePickerDate, date2: DatePickerDate): boolean => {
  return date1.day === date2.day && date1.month === date2.month && date1.year === date2.year;
};

const isDateBefore = (date1: DatePickerDate, date2: DatePickerDate): boolean => {
  return (
    date1.year < date2.year ||
    (date1.year === date2.year && date1.month < date2.month) ||
    (date1.year === date2.year && date1.month === date2.month && date1.day < date2.day)
  );
};

const isDateAfter = (date1: DatePickerDate, date2: DatePickerDate): boolean => {
  return (
    date1.year > date2.year ||
    (date1.year === date2.year && date1.month > date2.month) ||
    (date1.year === date2.year && date1.month === date2.month && date1.day > date2.day)
  );
};

const isDateRange = (value: Option<DatePickerDate> | DatePickerRange): value is DatePickerRange => {
  return match(value)
    .with({ start: P._, end: P._ }, () => true)
    .otherwise(() => false);
};

const isSelectedDate = (date: DatePickerDate, value: Option<DatePickerDate> | DatePickerRange) => {
  return match(value)
    .with(Option.pattern.Some(P.select()), value => isDateEquals(value, date))
    .with(Option.pattern.None, () => false)
    .with(
      P.when(isDateRange),
      ({ start, end }) =>
        start.match({
          Some: start => isDateEquals(start, date),
          None: () => false,
        }) ||
        end.match({
          Some: end => isDateEquals(end, date),
          None: () => false,
        }),
    )
    .exhaustive();
};

const getRangeIndicatorType = (
  date: DatePickerDate,
  value: Option<DatePickerDate> | DatePickerRange,
): "none" | "start" | "end" | "between" => {
  if (!isDateRange(value)) {
    return "none";
  }

  const { start, end } = value;
  if (start.isNone() || end.isNone()) {
    return "none";
  }

  const startDate = start.value;
  const endDate = end.value;

  if (isDateEquals(startDate, endDate)) {
    return "none";
  }
  if (isDateEquals(date, startDate)) {
    return "start";
  }
  if (isDateEquals(date, endDate)) {
    return "end";
  }
  if (isDateAfter(date, startDate) && isDateBefore(date, endDate)) {
    return "between";
  }
  return "none";
};

const computeDateDistanceInDays = (date1: DatePickerDate, date2: DatePickerDate): number => {
  const date1Date = new Date(date1.year, date1.month, date1.day);
  const date2Date = new Date(date2.year, date2.month, date2.day);

  const diffInMs = Math.abs(date2Date.getTime() - date1Date.getTime());
  return Math.round(diffInMs / (1000 * 3600 * 24));
};

const getNewDateRange = (
  currentRange: DatePickerRange,
  selectedDate: DatePickerDate,
): DatePickerRange => {
  const { start, end } = currentRange;
  if (start.isNone()) {
    return { start: Option.Some(selectedDate), end: Option.None() };
  }

  if (end.isNone()) {
    if (isDateAfter(selectedDate, start.value)) {
      return { start, end: Option.Some(selectedDate) };
    }

    return { start: Option.Some(selectedDate), end: currentRange.start };
  }

  const startDistance = computeDateDistanceInDays(start.value, selectedDate);
  const endDistance = computeDateDistanceInDays(end.value, selectedDate);

  // If both dates are already selected, we change the closest one to the new date
  if (startDistance < endDistance) {
    return { start: Option.Some(selectedDate), end: currentRange.end };
  }
  return { start: currentRange.start, end: Option.Some(selectedDate) };
};

const getTodayYearMonth = (): YearMonth => ({
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
});

const getYearMonth = (value: string | undefined, format: DateFormat): Option<YearMonth> => {
  if (isNullishOrEmpty(value)) {
    return Option.None();
  }
  return parseDate(value, format);
};

const isYearMonthBefore = (date1: YearMonth, date2: YearMonth): boolean => {
  return date1.year < date2.year || (date1.year === date2.year && date1.month < date2.month);
};

const isYearMonthEquals = (date1: YearMonth, date2: YearMonth): boolean => {
  return date1.year === date2.year && date1.month === date2.month;
};

const minYearMonth = (date1: YearMonth, date2: YearMonth): YearMonth => {
  return isYearMonthBefore(date1, date2) ? date1 : date2;
};

const maxYearMonth = (date1: YearMonth, date2: YearMonth): YearMonth => {
  return isYearMonthBefore(date1, date2) ? date2 : date1;
};

const incrementYearMonth = ({ month, year }: YearMonth): YearMonth => {
  if (month === 11) {
    return { month: 0, year: year + 1 };
  }
  return { month: month + 1, year };
};

const decrementYearMonth = ({ month, year }: YearMonth): YearMonth => {
  if (month === 0) {
    return { month: 11, year: year - 1 };
  }
  return { month: month - 1, year };
};

type YearMonthSelectProps = {
  monthNames: MonthNames;
  value: YearMonth;
  arrowsPosition?: "around" | "right";
  minValue?: YearMonth;
  maxValue?: YearMonth;
  onChange: (value: YearMonth) => void;
};

const YearMonthSelect = ({
  monthNames,
  value,
  minValue,
  maxValue,
  arrowsPosition = "right",
  onChange,
}: YearMonthSelectProps) => {
  const monthItems = useMemo<Item<number>[]>(
    () => monthNames.map((name, index) => ({ name, value: index })),
    [monthNames],
  );

  const yearItems = useMemo<Item<number>[]>(
    () =>
      range(value.year - 5, value.year + 5).map(year => ({
        name: year.toString(),
        value: year,
      })),
    [value.year],
  );

  const selectMonth = (month: number) => {
    onChange({ year: value.year, month });
  };

  const selectYear = (year: number) => {
    onChange({ year, month: value.month });
  };

  const setPreviousMonth = () => {
    onChange(decrementYearMonth(value));
  };

  const setNextMonth = () => {
    onChange(incrementYearMonth(value));
  };

  const isPreviousDisabled = !minValue
    ? false
    : value.year <= minValue.year && value.month <= minValue.month;
  const isNextDisabled = !maxValue
    ? false
    : value.year >= maxValue.year && value.month >= maxValue.month;

  return (
    <Box direction="row" alignItems="center">
      {arrowsPosition === "around" && (
        <>
          <LakeButton
            size="small"
            mode="tertiary"
            icon="arrow-left-filled"
            disabled={isPreviousDisabled}
            onPress={setPreviousMonth}
          />

          <Fill minWidth={12} />
        </>
      )}

      <LakeSelect
        items={monthItems}
        value={value.month}
        onValueChange={selectMonth}
        mode="borderless"
        size="small"
        hideErrors={true}
        style={styles.monthSelect}
      />

      <LakeSelect
        items={yearItems}
        value={value.year}
        onValueChange={selectYear}
        mode="borderless"
        size="small"
        hideErrors={true}
        style={styles.yearSelect}
      />

      <Fill minWidth={12} />

      {arrowsPosition === "right" && (
        <>
          <LakeButton
            size="small"
            mode="tertiary"
            icon="arrow-left-filled"
            disabled={isPreviousDisabled}
            onPress={setPreviousMonth}
          />

          <Space width={12} />
        </>
      )}

      <LakeButton
        size="small"
        mode="tertiary"
        icon="arrow-right-filled"
        disabled={isNextDisabled}
        onPress={setNextMonth}
      />
    </Box>
  );
};

type MonthCalendarProps = {
  month: number;
  year: number;
  value: Option<DatePickerDate> | DatePickerRange;
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
      <Box direction="row" alignItems="center" style={styles.weekRow}>
        {dayNames.map(dayName => (
          <View key={dayName} style={styles.dayName}>
            <LakeText variant="medium" color={colors.gray[600]}>
              {dayName.substring(0, 1)}
            </LakeText>
          </View>
        ))}
      </Box>

      {weeks.map((week, weekIndex) => (
        <Box key={weekIndex} direction="row" alignItems="center" style={styles.weekRow}>
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
            const rangeIndicator = date.match({
              Some: date => getRangeIndicatorType(date, value),
              None: () => "none" as const,
            });

            return (
              <View style={styles.dayContainer}>
                {rangeIndicator !== "none" && (
                  <View
                    style={[
                      styles.dayRangeIndicator,
                      rangeIndicator === "start" && styles.dayStartRangeIndicator,
                      rangeIndicator === "end" && styles.dayEndRangeIndicator,
                    ]}
                  />
                )}

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
              </View>
            );
          })}
        </Box>
      ))}
    </View>
  );
};

export type DatePickerProps = {
  value?: string;
  error?: string;
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
  const [monthYear, setMonthYear] = useState(() =>
    getYearMonth(value, format).getWithDefault(getTodayYearMonth()),
  );

  // Automatically change displayed year and month when user change the value with text input
  useEffect(() => {
    const yearMonth = getYearMonth(value, format);
    if (yearMonth.isSome()) {
      setMonthYear(yearMonth.value);
    }
  }, [value, format]);

  const handleChange = useCallback(
    (date: DatePickerDate) => {
      const formatted = stringifyDate(date, format);
      onChange(formatted);
    },
    [format, onChange],
  );

  return (
    <View style={styles.popoverContainer}>
      <YearMonthSelect monthNames={monthNames} value={monthYear} onChange={setMonthYear} />
      <Space height={24} />

      <MonthCalendar
        month={monthYear.month}
        year={monthYear.year}
        value={isNotNullishOrEmpty(value) ? parseDate(value, format) : Option.None()}
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
  error,
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
          <LakeTextInput placeholder={format} value={value} error={error} onChange={onChange} />
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

export type DateRangePickerProps = {
  value: { start: string; end: string };
  error?: string;
  format: DateFormat;
  firstWeekDay: keyof typeof weekDayIndex;
  monthNames: MonthNames;
  weekDayNames: WeekDayNames;
  isSelectable?: (date: DatePickerDate) => boolean;
  minDurationinDays?: number;
  maxDurationinDays?: number;
  onChange: (date: { start: string; end: string }) => void;
  cancelLabel: string;
  confirmLabel: string;
};

const DateRangePickerPopover = ({
  value,
  format,
  firstWeekDay,
  monthNames,
  weekDayNames,
  isSelectable,
  // minDurationinDays,
  // maxDurationinDays,
  onChange,
  cancelLabel,
  confirmLabel,
}: DateRangePickerProps) => {
  const [periods, setPeriods] = useState(() => {
    const startYearMonth = getYearMonth(value.start, format).getWithDefault(getTodayYearMonth());
    const endYearMonth = getYearMonth(value.end, format).getWithDefault(
      incrementYearMonth(startYearMonth),
    );
    return { start: startYearMonth, end: endYearMonth };
  });

  // Automatically change displayed year and month when start date changes
  useEffect(() => {
    const startYearMonth = getYearMonth(value.start, format);

    if (startYearMonth.isSome()) {
      setPeriods(periods => {
        // change end period if it becomes before start period
        const endPeriod = maxYearMonth(periods.end, incrementYearMonth(startYearMonth.value));

        return {
          start: startYearMonth.value,
          end: endPeriod,
        };
      });
    }
  }, [value.start, format]);

  // Automatically change displayed year and month when end date changes
  useEffect(() => {
    const endYearMonth = getYearMonth(value.end, format);

    if (endYearMonth.isSome()) {
      setPeriods(periods => {
        const isStartAndEndSameMonth = isYearMonthEquals(periods.start, endYearMonth.value);
        if (isStartAndEndSameMonth) {
          return {
            start: periods.start,
            end: incrementYearMonth(periods.start),
          };
        }

        // change start period if it becomes after end period
        const startPeriod = minYearMonth(periods.start, decrementYearMonth(endYearMonth.value));

        return {
          start: startPeriod,
          end: endYearMonth.value,
        };
      });
    }
  }, [value.end, format]);

  const setStartPeriod = useCallback((yearMonth: YearMonth) => {
    setPeriods(periods => ({
      ...periods,
      start: yearMonth,
    }));
  }, []);

  const setEndPeriod = useCallback((yearMonth: YearMonth) => {
    setPeriods(periods => ({
      ...periods,
      end: yearMonth,
    }));
  }, []);

  const dateRange = useMemo(() => parseRange(value, format), [value, format]);

  const handleSelectDate = (date: DatePickerDate) => {
    const newRange = getNewDateRange(dateRange, date);
    const newValue = {
      start: newRange.start.match({
        Some: date => stringifyDate(date, format),
        None: () => value.start,
      }),
      end: newRange.end.match({
        Some: date => stringifyDate(date, format),
        None: () => value.end,
      }),
    };
    onChange(newValue);
  };

  return (
    <View style={styles.rangePopoverContainer}>
      <Box direction="row" alignItems="start">
        <View style={styles.rangePopoverPart}>
          <YearMonthSelect
            monthNames={monthNames}
            value={periods.start}
            maxValue={decrementYearMonth(periods.end)}
            arrowsPosition="around"
            onChange={setStartPeriod}
          />

          <Space height={24} />

          <MonthCalendar
            month={periods.start.month}
            year={periods.start.year}
            value={dateRange}
            firstWeekDay={firstWeekDay}
            weekDayNames={weekDayNames}
            isSelectable={isSelectable}
            onChange={handleSelectDate}
          />
        </View>

        <Separator space={24} horizontal={true} />

        <View style={styles.rangePopoverPart}>
          <YearMonthSelect
            monthNames={monthNames}
            value={periods.end}
            minValue={incrementYearMonth(periods.start)}
            arrowsPosition="around"
            onChange={setEndPeriod}
          />

          <Space height={24} />

          <MonthCalendar
            month={periods.end.month}
            year={periods.end.year}
            value={dateRange}
            firstWeekDay={firstWeekDay}
            weekDayNames={weekDayNames}
            isSelectable={isSelectable}
            onChange={handleSelectDate}
          />
        </View>
      </Box>

      <Space height={24} />

      <Box direction="row" alignItems="start">
        <LakeButton size="small" mode="secondary" style={styles.button}>
          {cancelLabel}
        </LakeButton>

        <Space width={48} />

        <LakeButton size="small" mode="primary" color="current" style={styles.button}>
          {confirmLabel}
        </LakeButton>
      </Box>
    </View>
  );
};

export const DateRangePicker = ({
  value,
  error,
  format,
  firstWeekDay,
  monthNames,
  weekDayNames,
  isSelectable,
  minDurationinDays,
  maxDurationinDays,
  onChange,
  cancelLabel,
  confirmLabel,
}: DateRangePickerProps) => {
  const handleStartChange = useCallback(
    (start: string) => {
      onChange({ start, end: value.end });
    },
    [value, onChange],
  );

  const handleEndChange = useCallback(
    (end: string) => {
      onChange({ start: value.start, end });
    },
    [value, onChange],
  );

  return (
    <>
      <Box direction="row" alignItems="center">
        <Rifm value={value.start} onChange={handleStartChange} {...rifmDateProps}>
          {({ value, onChange }) => (
            <LakeTextInput
              placeholder={format}
              value={value}
              onChange={onChange}
              hideErrors={true}
            />
          )}
        </Rifm>

        <Space width={12} />
        <Icon name="arrow-right-filled" size={20} />
        <Space width={12} />

        <Rifm value={value.end} onChange={handleEndChange} {...rifmDateProps}>
          {({ value, onChange }) => (
            <LakeTextInput
              placeholder={format}
              value={value}
              onChange={onChange}
              hideErrors={true}
            />
          )}
        </Rifm>
      </Box>

      <LakeText variant="smallRegular" color={colors.negative[500]}>
        {error ?? " "}
      </LakeText>

      <DateRangePickerPopover
        value={value}
        format={format}
        firstWeekDay={firstWeekDay}
        monthNames={monthNames}
        weekDayNames={weekDayNames}
        isSelectable={isSelectable}
        minDurationinDays={minDurationinDays}
        maxDurationinDays={maxDurationinDays}
        onChange={onChange}
        cancelLabel={cancelLabel}
        confirmLabel={confirmLabel}
      />
    </>
  );
};
