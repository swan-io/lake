import { Flag } from "@swan-io/lake/src/components/Flag";
import { LakeSelect } from "@swan-io/lake/src/components/LakeSelect";
import { useMemo } from "react";
import { CountryCCA2, CountryCCA3 } from "../constants/countries";

export type CountryItem<T extends CountryCCA3> = { cca3: T; cca2?: CountryCCA2; name: string };

type Props<T extends CountryCCA3> = {
  onValueChange: (country: T) => void;
  value: T | undefined;
  items: CountryItem<T>[];
  error?: string;
  placeholder?: string;
  readOnly?: boolean;
  nativeID?: string;
  disabled?: boolean;
  hideErrors?: boolean;
};

export function CountryPicker<T extends CountryCCA3>({
  onValueChange,
  value,
  items,
  readOnly,
  nativeID,
  error,
  placeholder,
  disabled,
  hideErrors,
}: Props<T>) {
  const countries = useMemo(() => {
    const hasIntl = "Intl" in window && "DisplayNames" in window.Intl;
    const countryResolver =
      hasIntl && Intl.DisplayNames.supportedLocalesOf(["en"]).length
        ? new Intl.DisplayNames(["en"], { type: "region" })
        : undefined;
    const seen = new Set();
    return items
      .filter(item => {
        const hasBeenSeen = seen.has(item.cca3);
        seen.add(item.cca3);
        return !hasBeenSeen;
      })
      .map(country => ({
        name: countryResolver?.of(country.cca2 ?? "") ?? country.name,
        icon: <Flag width={14} icon={country.cca3} />,
        value: country.cca3,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [items]);

  return (
    <LakeSelect
      readOnly={readOnly}
      nativeID={nativeID}
      error={error}
      items={countries}
      placeholder={placeholder}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      hideErrors={hideErrors}
    />
  );
}
