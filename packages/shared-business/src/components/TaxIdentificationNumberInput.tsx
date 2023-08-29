import { Icon } from "@swan-io/lake/src/components/Icon";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeTextInput } from "@swan-io/lake/src/components/LakeTextInput";
import { LakeTooltip } from "@swan-io/lake/src/components/LakeTooltip";
import { colors } from "@swan-io/lake/src/constants/design";
import { forwardRef } from "react";
import { TextInput } from "react-native";
import { t } from "../utils/i18n";
import {
  AccountCountry,
  getCompanyTaxNumberHelp,
  getCompanyTaxNumberPlaceholder,
  getIndividualTaxNumberHelp,
  getIndividualTaxNumberPlaceholder,
  getTaxNumberTooltip,
} from "../utils/templateTranslations";

type Props = {
  value: string;
  error: string | undefined;
  valid: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
  onBlur?: () => void;
  accountCountry: AccountCountry;
  isCompany: boolean;
  required?: boolean;
  label?: string;
};

export const TaxIdentificationNumberInput = forwardRef<TextInput | null, Props>(
  (
    {
      value,
      error,
      valid,
      disabled,
      onChange,
      onBlur,
      accountCountry,
      isCompany,
      required,
      label = t("beneficiaryForm.beneficiary.taxIdentificationNumber"),
    }: Props,
    ref,
  ) => {
    const tooltipContents = getTaxNumberTooltip(accountCountry);
    return (
      <LakeLabel
        label={label}
        optionalLabel={required === true ? undefined : t("common.optional")}
        help={
          tooltipContents != null ? (
            <LakeTooltip
              content={tooltipContents}
              placement="top"
              width={accountCountry === "DEU" ? 800 : undefined}
            >
              <Icon name="question-circle-regular" size={16} color={colors.gray[600]} />
            </LakeTooltip>
          ) : null
        }
        render={id => (
          <LakeTextInput
            id={id}
            ref={ref}
            placeholder={
              isCompany
                ? getCompanyTaxNumberPlaceholder(accountCountry)
                : getIndividualTaxNumberPlaceholder(accountCountry)
            }
            help={
              isCompany
                ? getCompanyTaxNumberHelp(accountCountry)
                : getIndividualTaxNumberHelp(accountCountry)
            }
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
  },
);
