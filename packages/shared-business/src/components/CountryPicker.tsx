import { Flag } from "@swan-io/lake/src/components/Flag";
import { LakeSelect } from "@swan-io/lake/src/components/LakeSelect";
import { useMemo } from "react";
import { CountryCCA3, getCountryName } from "../constants/countries";

type Props<T extends CountryCCA3> = {
  onValueChange: (country: T) => void;
  value: T | undefined;
  countries: T[];
  error?: string;
  placeholder?: string;
  readOnly?: boolean;
  id?: string;
  disabled?: boolean;
  hideErrors?: boolean;
};

const removeDuplicated = <T,>(items: T[]): T[] => {
  const set = new Set(items);
  return Array.from(set);
};

export function CountryPicker<T extends CountryCCA3>({
  onValueChange,
  value,
  countries,
  readOnly,
  id,
  error,
  placeholder,
  disabled,
  hideErrors,
}: Props<T>) {
  const items = useMemo(() => {
    return removeDuplicated(countries)
      .map(cca3 => ({
        name: getCountryName(cca3),
        icon: <Flag width={14} icon={cca3} />,
        value: cca3,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [countries]);

  return (
    <LakeSelect
      readOnly={readOnly}
      id={id}
      error={error}
      items={items}
      placeholder={placeholder}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      hideErrors={hideErrors}
    />
  );
}
