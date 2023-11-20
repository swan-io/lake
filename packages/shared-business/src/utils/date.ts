import dayjs from "dayjs";

export const decodeBirthDate = (value: string) => {
  const date = dayjs.utc(value, "YYYY-MM-DD");
  return date.isValid() ? date.format("DD/MM/YYYY") : "";
};

export const encodeBirthDate = (value: string) => {
  const date = dayjs.utc(value, "DD/MM/YYYY");
  return date.isValid() ? date.format("YYYY-MM-DD") : "";
};
