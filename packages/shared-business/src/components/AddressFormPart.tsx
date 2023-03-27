import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeTextInput } from "@swan-io/lake/src/components/LakeTextInput";
import { Space } from "@swan-io/lake/src/components/Space";
import { useBoolean } from "@swan-io/lake/src/hooks/useBoolean";
import { useCallback, useEffect } from "react";
import { Form } from "react-ux-form";
import { CountryCCA3 } from "../constants/countries";
import { PlaceDetail } from "../hooks/useGoogleMapSDK";
import { locale, t } from "../utils/i18n";
import { AddressSearchInput } from "./AddressSearchInput";

type AddressField = {
  address: string;
  city: string;
  postalCode: string;
};

type FormProps = Pick<Form<AddressField>, "Field" | "setFieldValue" | "listenFields">;

type Props = {
  initialAddress: string;
  initialCity: string;
  initialPostalCode: string;
  country: CountryCCA3;
  label: string;
  optionalLabel?: string;
  placeholder?: string;
  isLarge: boolean;
  apiKey: string;
} & FormProps;

export const AddressFormPart = ({
  initialAddress,
  initialCity,
  initialPostalCode,
  country,
  label,
  optionalLabel,
  placeholder,
  Field,
  setFieldValue,
  listenFields,
  isLarge,
  apiKey,
}: Props) => {
  const [manualModeEnabled, setManualMode] = useBoolean(
    initialAddress !== "" || initialCity !== "" || initialPostalCode !== "",
  );

  useEffect(() => {
    if (!manualModeEnabled) {
      return listenFields(["city", "postalCode"], () => {
        setManualMode.on();
      });
    }
  }, [manualModeEnabled, listenFields, setManualMode]);

  const onSuggestion = useCallback(
    (place: PlaceDetail) => {
      setFieldValue("address", place.completeAddress);
      setFieldValue("city", place.city);
      setFieldValue("postalCode", place.postalCode);
      setManualMode.on();
    },
    [setManualMode, setFieldValue],
  );

  return (
    <>
      <Field name="address">
        {({ ref, value, onChange, error }) => (
          <LakeLabel
            label={label ?? t("addressFormPart.addressLabel")}
            optionalLabel={optionalLabel}
            render={id => (
              <AddressSearchInput
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
            actions={
              !manualModeEnabled && isLarge ? (
                <LakeButton mode="secondary" size="small" onPress={setManualMode.on}>
                  {t("addressFormPart.setManual")}
                </LakeButton>
              ) : null
            }
          />
        )}
      </Field>

      {!manualModeEnabled && !isLarge ? (
        <LakeButton mode="secondary" size="small" onPress={setManualMode.on}>
          {t("addressFormPart.setManual")}
        </LakeButton>
      ) : null}

      {manualModeEnabled ? (
        <>
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
      ) : null}
    </>
  );
};
