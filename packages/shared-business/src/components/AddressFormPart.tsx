import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeTextInput } from "@swan-io/lake/src/components/LakeTextInput";
import { Space } from "@swan-io/lake/src/components/Space";
import { Form } from "@swan-io/use-form";
import { useCallback } from "react";
import { CountryCCA3 } from "../constants/countries";
import { locale, t } from "../utils/i18n";
import { AddressDetail, PlacekitAddressSearchInput } from "./PlacekitAddressSearchInput";

type AddressField = {
  address: string;
  city: string;
  postalCode: string;
};

type FormProps = Pick<Form<AddressField>, "Field" | "setFieldValue">;

type Props = {
  country: CountryCCA3;
  label: string;
  optionalLabel?: string;
  placeholder?: string;
  apiKey: string;
} & FormProps;

export const AddressFormPart = ({
  country,
  label,
  optionalLabel,
  placeholder,
  Field,
  setFieldValue,
  apiKey,
}: Props) => {
  const onSuggestion = useCallback(
    (place: AddressDetail) => {
      setFieldValue("address", place.completeAddress);
      setFieldValue("city", place.city);
      if (place.postalCode != null) {
        setFieldValue("postalCode", place.postalCode);
      }
    },
    [setFieldValue],
  );

  return (
    <>
      <Field name="address">
        {({ ref, value, onChange, error }) => (
          <LakeLabel
            label={label ?? t("addressFormPart.addressLabel")}
            optionalLabel={optionalLabel}
            render={id => (
              <PlacekitAddressSearchInput
                inputRef={ref}
                apiKey={apiKey}
                emptyResultText={t("common.noResult")}
                placeholder={placeholder ?? t("addressFormPart.placeholder")}
                language={locale.language}
                id={id}
                country={country}
                value={value}
                error={error}
                onValueChange={onChange}
                onSuggestion={onSuggestion}
              />
            )}
          />
        )}
      </Field>

      <Space height={12} />

      <Field name="city">
        {({ ref, value, valid, error, onChange }) => (
          <LakeLabel
            label={t("addressFormPart.cityLabel")}
            render={id => (
              <LakeTextInput
                ref={ref}
                id={id}
                value={value}
                valid={valid}
                error={error}
                onChangeText={onChange}
              />
            )}
          />
        )}
      </Field>

      <Space height={12} />

      <Field name="postalCode">
        {({ ref, value, valid, error, onChange }) => (
          <LakeLabel
            label={t("addressFormPart.postCodeLabel")}
            render={id => (
              <LakeTextInput
                ref={ref}
                id={id}
                value={value}
                valid={valid}
                error={error}
                onChangeText={onChange}
              />
            )}
          />
        )}
      </Field>
    </>
  );
};
