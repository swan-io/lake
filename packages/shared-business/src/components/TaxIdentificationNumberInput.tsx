import { Icon } from "@swan-io/lake/src/components/Icon";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeTextInput } from "@swan-io/lake/src/components/LakeTextInput";
import { LakeTooltip } from "@swan-io/lake/src/components/LakeTooltip";
import { colors } from "@swan-io/lake/src/constants/design";
import { t } from "../utils/i18n";
import {
  AccountCountry,
  getIndividualTaxNumberHelp,
  getIndividualTaxNumberPlaceholder,
  getTaxNumberTooltip,
} from "../utils/templateTranslations";

type Props = {
  value: string;
  error: string | undefined;
  valid: boolean;
  onChange: (value: string) => void;
  accountCountry: AccountCountry;
};

export const TaxIdentificationNumberInput = ({
  value,
  error,
  valid,
  onChange,
  accountCountry,
}: Props) => {
  return (
    <LakeLabel
      label={t("beneficiaryForm.beneficiary.taxIdentificationNumber")}
      optionalLabel={t("common.optional")}
      help={
        <LakeTooltip
          content={getTaxNumberTooltip(accountCountry)}
          placement="top"
          width={accountCountry === 'DEU' ? 800 : undefined}
        >
          <Icon
            name="question-circle-regular"
            size={16}
            color={colors.gray[600]}
          />
        </LakeTooltip>
      }
      render={id => (
        <LakeTextInput
          id={id}
          placeholder={getIndividualTaxNumberPlaceholder(accountCountry)}
          help={getIndividualTaxNumberHelp(accountCountry)}
          value={value}
          error={error}
          valid={valid}
          onChangeText={onChange}
        />
      )}
    />
  );
};
