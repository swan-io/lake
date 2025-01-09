import { ComponentProps } from "react";
import { Rifm } from "rifm";
import { isNotNullish, isNullish } from "./nullish";

export type RifmProps = Required<
  Pick<ComponentProps<typeof Rifm>, "accept" | "append" | "format" | "mask">
>;

const accepted = {
  alpha: /[a-z]/gi,
  numeric: /\d+/g,
  alphanumeric: /[a-z\d]+/gi,
};

export const getRifmProps = ({
  accept,
  charMap,
  maxLength,
}: {
  accept: keyof typeof accepted;
  maxLength: number;
  charMap: Record<number, string>;
}): RifmProps => {
  const charIndexes = Object.keys(charMap).map(Number);

  if (process.env.NODE_ENV === "development") {
    const maxCharIndex = maxLength - 1;

    charIndexes.forEach(charMapIndex => {
      const char = charMap[charMapIndex];

      if (isNullish(char)) {
        throw new Error("Invalid mask character value");
      }
      if (char.length !== 1) {
        throw new Error(`Invalid mask character value: "${char}"`);
      }
      if (charMapIndex > maxCharIndex) {
        throw new Error(`Invalid mask character index: "${charMapIndex}"`);
      }
    });
  }

  const maxFormattedLength = maxLength + charIndexes.length;
  const regExp = accepted[accept];

  const shiftedCharMap = charIndexes.reduce<Record<number, string>>((acc, charIndex, index) => {
    const char = charMap[charIndex] ?? "";
    return { ...acc, [charIndex + index]: char };
  }, {});

  const shiftedCharIndexes = Object.keys(shiftedCharMap).map(Number);

  return {
    accept: regExp,
    mask: false,

    append: (str: string) => {
      const right = shiftedCharIndexes.includes(str.length) ? shiftedCharMap[str.length] : "";
      return str + (right ?? "");
    },

    format: (str: string) => {
      const chars = (str.match(regExp) ?? []).join("").split("");

      const res = chars
        .reduce((acc, char, index) => {
          const center = charIndexes.includes(index) ? charMap[index] : "";
          return acc + (center ?? "") + char;
        }, "")
        .substr(0, maxFormattedLength);

      const char = shiftedCharMap[res.length];
      return (
        res +
        (isNotNullish(char) && str.endsWith(char) && shiftedCharIndexes.includes(res.length)
          ? char
          : "")
      );
    },
  };
};
