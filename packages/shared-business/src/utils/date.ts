import dayjs from "dayjs";

export const decodeBirthDate = (value: string) => {
  const date = dayjs.utc(value, "YYYY-MM-DD", true);
  return date.isValid() ? date.format("DD/MM/YYYY") : "";
};

export const encodeBirthDate = (value: string) => {
  const date = dayjs.utc(value, "DD/MM/YYYY", true);
  return date.isValid() ? date.format("YYYY-MM-DD") : "";
};

export type ExtractedDate = {
  day: string;
  month: string;
  year: string;
};

export const extractDate = (value: string): ExtractedDate | undefined => {
  const date = dayjs.utc(value, "YYYY-MM-DD", true);

  if (date.isValid()) {
    return {
      day: date.format("DD"),
      month: date.format("MM"),
      year: date.format("YYYY"),
    };
  }
};

export const formatExtractedDate = (date: ExtractedDate): string => {
  const day = date.day.trim().padStart(2, "0");
  const month = date.month.trim().padStart(2, "0");
  const year = date.year.trim().padStart(4, "0");

  return `${year}-${month}-${day}`;
};
