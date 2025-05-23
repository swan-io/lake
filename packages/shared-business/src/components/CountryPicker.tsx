import { LakeSelect } from "@swan-io/lake/src/components/LakeSelect";
import { Ref, useMemo } from "react";
import { View } from "react-native";
import { Flag } from "../components/Flag";
import { CountryCCA3, getCountryByCCA3 } from "../constants/countries";

type Props<T extends CountryCCA3> = {
  ref?: Ref<View>;
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

export const CountryPicker = <T extends CountryCCA3>({
  ref,
  onValueChange,
  value,
  countries,
  readOnly,
  id,
  error,
  placeholder,
  disabled,
  hideErrors,
}: Props<T>) => {
  const items = useMemo(() => {
    return countries
      .filter((item, index, array) => array.indexOf(item) === index) // deduplicate
      .map(cca3 => {
        const country = getCountryByCCA3(cca3);

        return {
          name: country.name,
          icon: <Flag width={14} code={country.cca2} />,
          value: cca3,
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [countries]);

  return (
    <LakeSelect
      readOnly={readOnly}
      id={id}
      ref={ref}
      error={error}
      items={items}
      placeholder={placeholder}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      hideErrors={hideErrors}
    />
  );
};
