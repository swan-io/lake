import { MonthNames, WeekDayNames } from "@swan-io/shared-business/src/components/DatePicker";
import dayjs from "dayjs";
import { t } from "./i18n";

export const decodeBirthDate = (value: string) => {
  const date = dayjs.utc(value, "YYYY-MM-DD");
  return date.isValid() ? date.format("DD/MM/YYYY") : "";
};

export const encodeBirthDate = (value: string) => {
  const date = dayjs.utc(value, "DD/MM/YYYY");
  return date.isValid() ? date.format("YYYY-MM-DD") : "";
};

export const weekDayNames: WeekDayNames = [
  t("datePicker.day.sunday"),
  t("datePicker.day.monday"),
  t("datePicker.day.tuesday"),
  t("datePicker.day.wednesday"),
  t("datePicker.day.thursday"),
  t("datePicker.day.friday"),
  t("datePicker.day.saturday"),
];

export const monthNames: MonthNames = [
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
