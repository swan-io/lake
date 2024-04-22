import { Option } from "@swan-io/boxed";
import { BottomPanel } from "@swan-io/lake/src/components/BottomPanel";
import { Box } from "@swan-io/lake/src/components/Box";
import { Fill } from "@swan-io/lake/src/components/Fill";
import { Icon } from "@swan-io/lake/src/components/Icon";
import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { Item, LakeSelect } from "@swan-io/lake/src/components/LakeSelect";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { LakeTextInput } from "@swan-io/lake/src/components/LakeTextInput";
import { Popover } from "@swan-io/lake/src/components/Popover";
import { Pressable } from "@swan-io/lake/src/components/Pressable";
import { Separator } from "@swan-io/lake/src/components/Separator";
import { Space } from "@swan-io/lake/src/components/Space";
import { colors, spacings } from "@swan-io/lake/src/constants/design";
import { useDisclosure } from "@swan-io/lake/src/hooks/useDisclosure";
import { useFirstMountState } from "@swan-io/lake/src/hooks/useFirstMountState";
import { useResponsive } from "@swan-io/lake/src/hooks/useResponsive";
import { noop } from "@swan-io/lake/src/utils/function";
import {
  isNotEmpty,
  isNotNullish,
  isNotNullishOrEmpty,
  isNullishOrEmpty,
} from "@swan-io/lake/src/utils/nullish";
import { getRifmProps } from "@swan-io/lake/src/utils/rifm";
import { ValidatorResult, useForm } from "@swan-io/use-form";
import dayjs from "dayjs";
import { ReactNode, useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Rifm } from "rifm";
import { P, match } from "ts-pattern";
import { Except } from "type-fest";
import { t } from "../utils/i18n";
import { LakeModal } from "./LakeModal";

const styles = StyleSheet.create({
  label: {
    flex: 1,
  },
  arrowContainer: {
    height: 40, // input height
  },
  popover: {
    padding: spacings[12],
  },
  popoverDesktop: {
    padding: spacings[24],
  },
  rangeCalendarSide: {
    flex: 1,
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

const MODALE_MOBILE_THRESHOLD = 600;
const DATE_PICKER_MOBILE_THRESHOLD = 400;
const DATE_RANGE_PICKER_THRESHOLD = 800;

const NB_DAYS_IN_WEEK = 7;

export type MonthNames = readonly [
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
export type WeekDayNames = readonly [string, string, string, string, string, string, string];

const weekDayNames: WeekDayNames = [
  t("datePicker.day.sunday"),
  t("datePicker.day.monday"),
  t("datePicker.day.tuesday"),
  t("datePicker.day.wednesday"),
  t("datePicker.day.thursday"),
  t("datePicker.day.friday"),
  t("datePicker.day.saturday"),
];

const monthNames: MonthNames = [
  t("datePicker.month.january"),
  t("datePicker.month.february"),
  t("datePicker.month.march"),
  t("datePicker.month.april"),
  t("datePicker.month.may"),
  t("datePicker.month.june"),
  t("datePicker.month.july"),
  t("datePicker.month.august"),
  t("datePicker.month.september"),
  t("datePicker.month.october"),
  t("datePicker.month.november"),
  t("datePicker.month.december"),
];

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

export type DateFormat = "DD/MM/YYYY" | "MM/DD/YYYY";

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
  const date = dayjs.utc().year(value.year).month(value.month).date(value.day);
  return date.format(format);
};

export const validateDateRangeOrder = (
  value: { start: string; end: string },
  format: DateFormat,
) => {
  const range = parseRange(value, format);

  if (range.start.isNone() || range.end.isNone()) {
    return true;
  }

  if (isDateAfter(range.start.value, range.end.value)) {
    return false;
  }

  return true;
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
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const yesterdayDate: DatePickerDate = {
    day: yesterday.getDate(),
    month: yesterday.getMonth(),
    year: yesterday.getFullYear(),
  };

  return isDateAfter(date, yesterdayDate);
};

export const isDateInRange =
  (minDate: Date, maxDate: Date) =>
  (date: DatePickerDate): boolean => {
    const min: DatePickerDate = {
      day: minDate.getDate(),
      month: minDate.getMonth(),
      year: minDate.getFullYear(),
    };
    const max: DatePickerDate = {
      day: maxDate.getDate(),
      month: maxDate.getMonth(),
      year: maxDate.getFullYear(),
    };

    return isDateAfter(date, min) && isDateBefore(date, max);
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
    .with(Option.P.Some(P.select()), value => isDateEquals(value, date))
    .with(Option.P.None, () => false)
    .with(P.when(isDateRange), ({ start, end }) => {
      // if range is invalid, we don't display any selection
      if (start.isSome() && end.isSome() && isDateAfter(start.value, end.value)) {
        return false;
      }

      return (
        start.match({
          Some: start => isDateEquals(start, date),
          None: () => false,
        }) ||
        end.match({
          Some: end => isDateEquals(end, date),
          None: () => false,
        })
      );
    })
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

  // no interval indicator if range is invalid
  if (isDateAfter(startDate, endDate)) {
    return "none";
  }
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

  // Handle initial selection
  if (start.isNone()) {
    return { start: Option.Some(selectedDate), end: Option.None() };
  }
  if (end.isNone()) {
    if (isDateAfter(selectedDate, start.value)) {
      return { start, end: Option.Some(selectedDate) };
    }

    return { start: Option.Some(selectedDate), end: currentRange.start };
  }

  // Handle selection outside of the current range
  if (isDateBefore(selectedDate, start.value)) {
    return { start: Option.Some(selectedDate), end: currentRange.end };
  }
  if (isDateAfter(selectedDate, end.value)) {
    return { start: currentRange.start, end: Option.Some(selectedDate) };
  }

  // We change the closest date to the new date
  const startDistance = computeDateDistanceInDays(start.value, selectedDate);
  const endDistance = computeDateDistanceInDays(end.value, selectedDate);

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
  hideArrows?: boolean;
  minValue?: YearMonth;
  maxValue?: YearMonth;
  onChange: (value: YearMonth) => void;
};

const YearMonthSelect = ({
  monthNames,
  value,
  arrowsPosition = "right",
  hideArrows,
  minValue,
  maxValue,
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
      {arrowsPosition === "around" && hideArrows !== true && (
        <>
          <LakeButton
            size="small"
            mode="tertiary"
            icon="arrow-left-filled"
            disabled={isPreviousDisabled}
            onPress={setPreviousMonth}
            ariaLabel={t("datePicker.month.previous")}
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

      {hideArrows !== true && (
        <>
          <Fill minWidth={12} />

          {arrowsPosition === "right" && (
            <>
              <LakeButton
                size="small"
                mode="tertiary"
                icon="arrow-left-filled"
                disabled={isPreviousDisabled}
                onPress={setPreviousMonth}
                ariaLabel={t("datePicker.month.previous")}
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
            ariaLabel={t("datePicker.month.next")}
          />
        </>
      )}
    </Box>
  );
};

type MonthCalendarProps = {
  month: number;
  year: number;
  value: Option<DatePickerDate> | DatePickerRange;
  firstWeekDay: keyof typeof weekDayIndex;
  isSelectable?: (date: DatePickerDate) => boolean;
  onChange: (date: DatePickerDate) => void;
};

const MonthCalendar = ({
  month,
  year,
  value,
  firstWeekDay,
  isSelectable,
  onChange,
}: MonthCalendarProps) => {
  const dayNames = useMemo(() => getWeekDayNames(weekDayNames, firstWeekDay), [firstWeekDay]);
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
              <View key={dateIndex} style={styles.dayContainer}>
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
  label: string;
  value?: string;
  error?: string;
  format: DateFormat;
  firstWeekDay: keyof typeof weekDayIndex;
  isSelectable?: (date: DatePickerDate) => boolean;
  onChange: (date: string) => void;
};

type DatePickerPopoverContentProps = Except<DatePickerProps, "label" | "error"> & {
  desktop: boolean;
};

const DatePickerPopoverContent = ({
  value,
  format,
  firstWeekDay,
  desktop,
  isSelectable,
  onChange,
}: DatePickerPopoverContentProps) => {
  const [monthYear, setMonthYear] = useState(() =>
    getYearMonth(value, format).getOr(getTodayYearMonth()),
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
    <>
      <YearMonthSelect
        monthNames={monthNames}
        value={monthYear}
        hideArrows={!desktop}
        onChange={setMonthYear}
      />

      <Space height={24} />

      <MonthCalendar
        month={monthYear.month}
        year={monthYear.year}
        value={isNotNullishOrEmpty(value) ? parseDate(value, format) : Option.None()}
        firstWeekDay={firstWeekDay}
        isSelectable={isSelectable}
        onChange={handleChange}
      />
    </>
  );
};

export const DatePicker = ({
  label,
  value,
  error,
  format,
  firstWeekDay,
  isSelectable,
  onChange,
}: DatePickerProps) => {
  const { desktop } = useResponsive(DATE_PICKER_MOBILE_THRESHOLD);
  const ref = useRef<TextInput>(null);
  const [isOpened, { open, close }] = useDisclosure(false);
  const popoverId = useId();

  return (
    <>
      <Box direction="row" alignItems="end">
        <LakeLabel
          label={label}
          style={styles.label}
          actions={
            <LakeButton
              mode="secondary"
              icon="calendar-ltr-regular"
              size="small"
              onPress={open}
              ariaLabel={t("common.open")}
            />
          }
          render={id => (
            <Rifm value={value ?? ""} onChange={onChange} {...rifmDateProps}>
              {({ value, onChange }) => (
                <LakeTextInput
                  ref={ref}
                  id={id}
                  placeholder={format}
                  value={value}
                  error={error}
                  onChange={onChange}
                  ariaExpanded={isOpened}
                />
              )}
            </Rifm>
          )}
        />
      </Box>

      <Popover id={popoverId} role="dialog" onDismiss={close} referenceRef={ref} visible={isOpened}>
        <View style={desktop ? styles.popoverDesktop : styles.popover}>
          <DatePickerPopoverContent
            value={value}
            format={format}
            firstWeekDay={firstWeekDay}
            desktop={desktop}
            isSelectable={isSelectable}
            onChange={onChange}
          />
        </View>
      </Popover>
    </>
  );
};

type DatePickerModalProps = Except<DatePickerProps, "error"> & {
  visible: boolean;
  cancelLabel: string;
  confirmLabel: string;
  validate?: (value: string) => ValidatorResult;
  onDismiss: () => void;
};

export const DatePickerModal = ({
  value,
  format,
  firstWeekDay,
  isSelectable,
  onChange,
  visible,
  label,
  cancelLabel,
  confirmLabel,
  validate,
  onDismiss,
}: DatePickerModalProps) => {
  const { desktop } = useResponsive(DATE_PICKER_MOBILE_THRESHOLD);
  const { Field, submitForm, setFieldValue, resetField } = useForm({
    date: {
      initialValue: value ?? "",
      validate,
    },
  });

  const handleCancel = () => {
    setFieldValue("date", value ?? "");
    onDismiss();
  };

  const handleConfirm = () => {
    submitForm({
      onSuccess: values => {
        const date = values.date.getOr("");

        if (isNotEmpty(date)) {
          onChange(date);
        }

        onDismiss();
      },
    });
  };

  useEffect(() => {
    if (!visible) {
      resetField("date");
    }
  }, [visible, resetField]);

  return (
    <DateModal visible={visible} maxWidth={500} onPressClose={handleCancel}>
      <Field name="date">
        {({ ref, value, error, onBlur, onChange }) => (
          <>
            <LakeLabel
              label={label}
              render={id => (
                <Rifm value={value} onChange={onChange} {...rifmDateProps}>
                  {({ value, onChange }) => (
                    <LakeTextInput
                      ref={ref}
                      id={id}
                      placeholder={format}
                      value={value}
                      error={error}
                      onBlur={onBlur}
                      onChange={onChange}
                    />
                  )}
                </Rifm>
              )}
            />

            <DatePickerPopoverContent
              value={value}
              format={format}
              firstWeekDay={firstWeekDay}
              desktop={desktop}
              isSelectable={isSelectable}
              onChange={onChange}
            />
          </>
        )}
      </Field>

      <Space height={24} />

      <Box direction="row" alignItems="center">
        <LakeButton mode="secondary" size="small" onPress={handleCancel} style={styles.button}>
          {cancelLabel}
        </LakeButton>

        <Space width={24} />

        <LakeButton color="current" size="small" onPress={handleConfirm} style={styles.button}>
          {confirmLabel}
        </LakeButton>
      </Box>
    </DateModal>
  );
};

type DateModalProps = {
  children: ReactNode;
  visible: boolean;
  maxWidth: number;
  withCloseButton?: boolean;
  onPressClose: () => void;
};

const DateModal = ({
  children,
  visible,
  maxWidth,
  withCloseButton,
  onPressClose,
}: DateModalProps) => {
  const { desktop } = useResponsive(MODALE_MOBILE_THRESHOLD);

  if (desktop) {
    return (
      <LakeModal
        visible={visible}
        maxWidth={maxWidth}
        onPressClose={withCloseButton === true ? onPressClose : undefined}
      >
        {children}
      </LakeModal>
    );
  }

  return (
    <BottomPanel visible={visible} onPressClose={onPressClose}>
      <View style={styles.popover}>{children}</View>
    </BottomPanel>
  );
};

export type DateRangePickerProps = {
  value: { start: string; end: string };
  error?: string;
  format: DateFormat;
  startLabel: string;
  endLabel: string;
  firstWeekDay: keyof typeof weekDayIndex;
  isSelectable?: (date: DatePickerDate) => boolean;
  onChange: (date: { start: string; end: string }) => void;
};

type DateRangePickerModalContentProps = Except<
  DateRangePickerProps,
  "startLabel" | "endLabel" | "error"
> & {
  desktop: boolean;
  displayTwoCalendar: boolean;
};

const DateRangePickerModalContent = ({
  value,
  format,
  firstWeekDay,
  desktop,
  displayTwoCalendar,
  isSelectable,
  onChange,
}: DateRangePickerModalContentProps) => {
  const isFirstMount = useFirstMountState();
  const [periods, setPeriods] = useState(() => {
    const startYearMonth = getYearMonth(value.start, format).getOr(getTodayYearMonth());
    const endYearMonth = getYearMonth(value.end, format).getOr(incrementYearMonth(startYearMonth));
    return {
      start: startYearMonth,
      end: isYearMonthEquals(startYearMonth, endYearMonth)
        ? incrementYearMonth(startYearMonth)
        : endYearMonth,
    };
  });

  // Automatically change displayed year and month when start date changes
  useEffect(() => {
    if (isFirstMount) {
      return;
    }

    const startYearMonth = getYearMonth(value.start, format);

    if (startYearMonth.isSome()) {
      setPeriods(periods => {
        const isStartAndEndSameMonth = isYearMonthEquals(startYearMonth.value, periods.end);
        if (isStartAndEndSameMonth) {
          return {
            start: decrementYearMonth(periods.end),
            end: periods.end,
          };
        }

        // change end period if it becomes before start period
        const endPeriod = maxYearMonth(periods.end, incrementYearMonth(startYearMonth.value));

        return {
          start: startYearMonth.value,
          end: endPeriod,
        };
      });
    }
  }, [isFirstMount, value.start, format]);

  // Automatically change displayed year and month when end date changes
  useEffect(() => {
    if (isFirstMount) {
      return;
    }

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
  }, [isFirstMount, value.end, format]);

  const setStartPeriod = useCallback((yearMonth: YearMonth) => {
    setPeriods(periods => ({
      start: yearMonth,
      end: maxYearMonth(periods.end, incrementYearMonth(yearMonth)),
    }));
  }, []);

  const setEndPeriod = useCallback((yearMonth: YearMonth) => {
    setPeriods(periods => ({
      start: minYearMonth(periods.start, decrementYearMonth(yearMonth)),
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

  if (!displayTwoCalendar) {
    return (
      <>
        <YearMonthSelect
          monthNames={monthNames}
          value={periods.start}
          hideArrows={!desktop}
          onChange={setStartPeriod}
        />

        <Space height={24} />

        <MonthCalendar
          month={periods.start.month}
          year={periods.start.year}
          value={dateRange}
          firstWeekDay={firstWeekDay}
          isSelectable={isSelectable}
          onChange={handleSelectDate}
        />
      </>
    );
  }

  return (
    <View>
      <Box direction="row" alignItems="start">
        <View style={styles.rangeCalendarSide}>
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
            isSelectable={isSelectable}
            onChange={handleSelectDate}
          />
        </View>

        <Separator space={24} horizontal={true} />

        <View style={styles.rangeCalendarSide}>
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
            isSelectable={isSelectable}
            onChange={handleSelectDate}
          />
        </View>
      </Box>
    </View>
  );
};

export const DateRangePicker = ({
  value,
  error,
  format,
  startLabel,
  endLabel,
  firstWeekDay,
  isSelectable,
  onChange,
}: DateRangePickerProps) => {
  const { desktop } = useResponsive(DATE_PICKER_MOBILE_THRESHOLD);
  const { desktop: displayTwoCalendar } = useResponsive(DATE_RANGE_PICKER_THRESHOLD);
  const ref = useRef<TextInput>(null);
  const [isOpened, { open, close }] = useDisclosure(false);

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
    <View>
      <Box direction="row" alignItems="end">
        <LakeLabel
          label={startLabel}
          style={styles.label}
          render={id => (
            <Rifm value={value.start} onChange={handleStartChange} {...rifmDateProps}>
              {({ value, onChange }) => (
                <LakeTextInput
                  ref={ref}
                  id={id}
                  placeholder={format}
                  value={value}
                  onChange={onChange}
                  error={error}
                  hideErrors={true}
                  ariaExpanded={isOpened}
                />
              )}
            </Rifm>
          )}
        />

        <Space width={12} />

        <Box style={styles.arrowContainer} justifyContent="center">
          <Icon name="arrow-right-filled" size={20} />
        </Box>

        <Space width={12} />

        <LakeLabel
          label={endLabel}
          style={styles.label}
          render={id => (
            <Rifm value={value.end} onChange={handleEndChange} {...rifmDateProps}>
              {({ value, onChange }) => (
                <LakeTextInput
                  id={id}
                  placeholder={format}
                  value={value}
                  onChange={onChange}
                  error={error}
                  hideErrors={true}
                  ariaExpanded={isOpened}
                />
              )}
            </Rifm>
          )}
        />

        <Space width={12} />

        <LakeButton
          mode="secondary"
          icon="calendar-ltr-regular"
          size="small"
          onPress={open}
          ariaLabel={t("common.open")}
        />
      </Box>

      <Space height={4} />

      <LakeText variant="smallRegular" color={colors.negative[500]}>
        {error ?? " "}
      </LakeText>

      <DateModal visible={isOpened} maxWidth={900} withCloseButton={true} onPressClose={close}>
        <DateRangePickerModalContent
          value={value}
          format={format}
          firstWeekDay={firstWeekDay}
          desktop={desktop}
          displayTwoCalendar={displayTwoCalendar}
          isSelectable={isSelectable}
          onChange={onChange}
        />
      </DateModal>
    </View>
  );
};

type DateRangePickerModalProps = DateRangePickerProps & {
  visible: boolean;
  cancelLabel: string;
  confirmLabel: string;
  onDismiss: () => void;
};

export const DateRangePickerModal = ({
  value,
  error,
  format,
  firstWeekDay,
  isSelectable,
  onChange,
  visible,
  startLabel,
  endLabel,
  cancelLabel,
  confirmLabel,
  onDismiss,
}: DateRangePickerModalProps) => {
  const { desktop } = useResponsive(MODALE_MOBILE_THRESHOLD);
  const { desktop: displayTwoCalendar } = useResponsive(DATE_RANGE_PICKER_THRESHOLD);
  const [localeValue, setLocaleValue] = useState(value);

  useEffect(() => {
    setLocaleValue(value);
  }, [value]);

  const handleStartChange = (start: string) => {
    setLocaleValue({ start, end: localeValue.end });
  };

  const handleEndChange = (end: string) => {
    setLocaleValue({ start: localeValue.start, end });
  };

  const handleCancel = () => {
    setLocaleValue(value);
    onDismiss();
  };

  const handleConfirm = () => {
    onChange(localeValue);
    onDismiss();
  };

  return (
    <DateModal visible={visible} maxWidth={900} onPressClose={handleCancel}>
      <View>
        <Box direction="row" alignItems="end">
          <LakeLabel
            label={startLabel}
            style={styles.label}
            render={id => (
              <Rifm value={localeValue.start} onChange={handleStartChange} {...rifmDateProps}>
                {({ value, onChange }) => (
                  <LakeTextInput
                    id={id}
                    placeholder={format}
                    value={value}
                    onChange={onChange}
                    error={error}
                    hideErrors={true}
                  />
                )}
              </Rifm>
            )}
          />

          <Space width={12} />

          <Box style={styles.arrowContainer} justifyContent="center">
            <Icon name="arrow-right-filled" size={20} />
          </Box>

          <Space width={12} />

          <LakeLabel
            label={endLabel}
            style={styles.label}
            render={id => (
              <Rifm value={localeValue.end} onChange={handleEndChange} {...rifmDateProps}>
                {({ value, onChange }) => (
                  <LakeTextInput
                    id={id}
                    placeholder={format}
                    value={value}
                    onChange={onChange}
                    error={error}
                    hideErrors={true}
                  />
                )}
              </Rifm>
            )}
          />
        </Box>

        <Space height={4} />

        <LakeText variant="smallRegular" color={colors.negative[500]}>
          {error ?? " "}
        </LakeText>
      </View>

      <DateRangePickerModalContent
        value={localeValue}
        format={format}
        firstWeekDay={firstWeekDay}
        desktop={desktop}
        displayTwoCalendar={displayTwoCalendar}
        isSelectable={isSelectable}
        onChange={setLocaleValue}
      />

      <Space height={24} />

      <Box direction="row" alignItems="center">
        <LakeButton mode="secondary" size="small" onPress={handleCancel} style={styles.button}>
          {cancelLabel}
        </LakeButton>

        <Space width={24} />

        <LakeButton color="current" size="small" onPress={handleConfirm} style={styles.button}>
          {confirmLabel}
        </LakeButton>
      </Box>
    </DateModal>
  );
};
