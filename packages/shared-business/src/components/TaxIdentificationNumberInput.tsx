import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeTextInput } from "@swan-io/lake/src/components/LakeTextInput";
import { Ref } from "react";
import { TextInput } from "react-native";
import { CompanyCountryCCA3, IndividualCountryCCA3 } from "../constants/countries";
import { t } from "../utils/i18n";
import {
  getCompanyTaxNumberHelp,
  getCompanyTaxNumberPlaceholder,
  getIndividualTaxNumberHelp,
  getIndividualTaxNumberPlaceholder,
} from "../utils/validation";

type Props = {
  ref?: Ref<TextInput>;
  value: string;
  error: string | undefined;
  valid: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
  onBlur?: () => void;
  country: IndividualCountryCCA3 | CompanyCountryCCA3;
  isCompany: boolean;
  required?: boolean;
  label?: string;
  placeholder?: string;
};

export const TaxIdentificationNumberInput = ({
  ref,
  value,
  error,
  valid,
  disabled,
  onChange,
  onBlur,
  country,
  isCompany,
  required,
  label = t("taxIdentificationNumber.label"),
  placeholder = isCompany
    ? getCompanyTaxNumberPlaceholder(country)
    : getIndividualTaxNumberPlaceholder(country),
}: Props) => {
  return (
    <LakeLabel
      label={label}
      optionalLabel={required === true ? undefined : t("common.optional")}
      render={id => (
        <LakeTextInput
          id={id}
          ref={ref}
          placeholder={placeholder}
          help={isCompany ? getCompanyTaxNumberHelp(country) : getIndividualTaxNumberHelp(country)}
          value={value}
          error={error}
          valid={valid}
          disabled={disabled}
          onChangeText={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};
