import { Box } from "@swan-io/lake/src/components/Box";
import { LakeLabelledCheckbox } from "@swan-io/lake/src/components/LakeCheckbox";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { LakeTextInput } from "@swan-io/lake/src/components/LakeTextInput";
import { RadioGroup, RadioGroupItem } from "@swan-io/lake/src/components/RadioGroup";
import { ResponsiveContainer } from "@swan-io/lake/src/components/ResponsiveContainer";
import { Space } from "@swan-io/lake/src/components/Space";
import { StepDots } from "@swan-io/lake/src/components/StepDots";
import { breakpoints, colors } from "@swan-io/lake/src/constants/design";
import { noop } from "@swan-io/lake/src/utils/function";
import { isNotNullish, isNotNullishOrEmpty } from "@swan-io/lake/src/utils/nullish";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Validator, combineValidators, hasDefinedKeys, useForm } from "react-ux-form";
import { Rifm } from "rifm";
import { match } from "ts-pattern";
import { v4 as uuid } from "uuid";
import { CountryCCA3, allCountries, isCountryCCA3 } from "../constants/countries";
import { decodeBirthDate, encodeBirthDate } from "../utils/date";
import { locale, rifmDateProps, t } from "../utils/i18n";
import {
  validateBooleanRequired,
  validateIndividualTaxNumber,
  validateNullableRequired,
  validateRequired,
} from "../utils/validation";
import { AddressFormPart } from "./AddressFormPart";
import { CountryPicker } from "./CountryPicker";
import { GMapCityInput } from "./GMapCityInput";
import { TaxIdentificationNumberInput } from "./TaxIdentificationNumberInput";

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
});

type BeneficiaryType = "HasCapital" | "LegalRepresentative" | "Other";
type AccountCountry = "DEU" | "ESP" | "FRA";

export type BeneficiaryFormStep = "common" | "address";

export type EditorState = {
  reference: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  birthCountryCode: CountryCCA3 | undefined;
  birthCity: string;
  birthCityPostalCode: string;
  type: BeneficiaryType;
  indirect: boolean;
  direct: boolean;
  totalCapitalPercentage?: number;
  residencyAddressLine1?: string;
  residencyAddressCity?: string;
  residencyAddressCountry?: string;
  residencyAddressPostalCode?: string;
  taxIdentificationNumber?: string;
};

type Props = {
  initialState?: EditorState;
  accountCountry: AccountCountry;
  step: BeneficiaryFormStep;
  googleMapApiKey: string;
  onStepChange: (step: BeneficiaryFormStep) => void;
  onSave: (editorState: EditorState) => void | Promise<void>;
  onClose: () => void;
  onCityLoadError: (error: unknown) => void;
};

const beneficiaryTypes: RadioGroupItem<BeneficiaryType>[] = [
  {
    value: "LegalRepresentative",
    name: t("beneficiaryForm.beneficiary.legalRepresentative"),
  },
  { value: "HasCapital", name: t("beneficiaryForm.beneficiary.ownershipOfCapital") },
  { value: "Other", name: t("beneficiaryForm.beneficiary.other") },
];

export type BeneficiaryFormRef = { cancel: () => void; submit: () => void };

type SyncValidationResult = string | undefined;

const validateCca3CountryCode: Validator<string | undefined> = value => {
  if (value == null) {
    return t("error.requiredField");
  }
  if (!isCountryCCA3(value)) {
    // no need to set an error message because country picker contains only valid values
    // this is used only for validateUbo function to display an error indicator without opening UBO modal
    return " ";
  }
};

export const validateUbo = (
  editorState: EditorState,
  accountCountry: AccountCountry,
): Partial<Record<keyof EditorState, string | undefined>> => {
  const isAddressRequired = accountCountry === "DEU" || accountCountry === "ESP";
  const isBirthInfoRequired = accountCountry !== "DEU";
  const isTaxIdentificationNumberRequired =
    accountCountry === "DEU" && editorState.residencyAddressCountry === "DEU";

  const validateTaxNumber = isTaxIdentificationNumberRequired
    ? combineValidators(validateNullableRequired, validateIndividualTaxNumber(accountCountry))
    : validateIndividualTaxNumber(accountCountry);

  return {
    firstName: validateNullableRequired(editorState.firstName) as SyncValidationResult,
    lastName: validateNullableRequired(editorState.lastName) as SyncValidationResult,
    birthDate: isBirthInfoRequired
      ? (validateNullableRequired(editorState.birthDate) as SyncValidationResult)
      : undefined,
    birthCountryCode: validateCca3CountryCode(editorState.birthCountryCode) as SyncValidationResult,
    birthCity: isBirthInfoRequired
      ? (validateNullableRequired(editorState.birthCity) as SyncValidationResult)
      : undefined,
    birthCityPostalCode: isBirthInfoRequired
      ? (validateNullableRequired(editorState.birthCityPostalCode) as SyncValidationResult)
      : undefined,
    type: validateNullableRequired(editorState.type) as SyncValidationResult,
    totalCapitalPercentage:
      editorState.type === "HasCapital"
        ? (validateNullableRequired(
            editorState.totalCapitalPercentage?.toString(),
          ) as SyncValidationResult)
        : undefined,
    residencyAddressLine1: isAddressRequired
      ? (validateNullableRequired(editorState.residencyAddressLine1) as SyncValidationResult)
      : undefined,
    residencyAddressCity: isAddressRequired
      ? (validateNullableRequired(editorState.residencyAddressCity) as SyncValidationResult)
      : undefined,
    residencyAddressCountry: isAddressRequired
      ? (validateNullableRequired(editorState.residencyAddressCountry) as SyncValidationResult)
      : undefined,
    residencyAddressPostalCode: isAddressRequired
      ? (validateNullableRequired(editorState.residencyAddressPostalCode) as SyncValidationResult)
      : undefined,
    taxIdentificationNumber: validateTaxNumber(
      editorState.taxIdentificationNumber ?? "",
    ) as SyncValidationResult,
    indirect:
      editorState.type !== "HasCapital" || editorState.direct === true
        ? undefined
        : (validateBooleanRequired(editorState.indirect) as SyncValidationResult),
    direct:
      editorState.type !== "HasCapital" || editorState.indirect === true
        ? undefined
        : (validateBooleanRequired(editorState.direct) as SyncValidationResult),
  };
};

type CapitalType = "none" | "direct" | "indirect" | "both";

const getCapitalType = (
  direct: boolean | undefined,
  indirect: boolean | undefined,
): CapitalType => {
  if (direct === true && indirect === true) {
    return "both";
  }
  if (direct === true) {
    return "direct";
  }
  if (indirect === true) {
    return "indirect";
  }
  return "none";
};

const getDirectAndIndirect = (capitalType: CapitalType): [boolean, boolean] => {
  return match(capitalType)
    .returnType<[boolean, boolean]>()
    .with("both", () => [true, true])
    .with("direct", () => [true, false])
    .with("indirect", () => [false, true])
    .with("none", () => [false, false])
    .exhaustive();
};

type CapitalTypeCheckboxesProps = {
  value: CapitalType;
  onChange: (value: CapitalType) => void;
  error?: string;
};

/**
 * This component was created to handle validation easily with react-ux-form
 * Without this component, we have to validate direct and indirect checkboxes separately
 * But validation is run only onChange or onSubmit, so when both checkboxes were unchecked, check one of them doesn't revalidate the other one
 * Another way is combining direct and indirect values with `formStatus` but the error appears or disappears too early
 * So with this component we need only 1 validator making possible the best UX without caveats
 */
const CapitalTypeCheckboxes = ({ value, error, onChange }: CapitalTypeCheckboxesProps) => {
  return (
    <View>
      <Box direction="row" alignItems="center">
        <LakeLabelledCheckbox
          value={value === "direct" || value === "both"}
          onValueChange={direct => {
            match({ direct, value })
              .with({ direct: true, value: "none" }, () => onChange("direct"))
              .with({ direct: true, value: "indirect" }, () => onChange("both"))
              .with({ direct: false, value: "direct" }, () => onChange("none"))
              .with({ direct: false, value: "both" }, () => onChange("indirect"))
              // other cases are impossible so we don't need to handle them
              .otherwise(noop);
          }}
          label={t("beneficiaryForm.beneficiary.directly")}
          isError={error != null}
        />

        <Space width={24} />

        <LakeLabelledCheckbox
          value={value === "indirect" || value === "both"}
          onValueChange={indirect => {
            match({ indirect, value })
              .with({ indirect: true, value: "none" }, () => onChange("indirect"))
              .with({ indirect: true, value: "direct" }, () => onChange("both"))
              .with({ indirect: false, value: "indirect" }, () => onChange("none"))
              .with({ indirect: false, value: "both" }, () => onChange("direct"))
              // other cases are impossible so we don't need to handle them
              .otherwise(noop);
          }}
          label={t("beneficiaryForm.beneficiary.indirectly")}
          isError={error != null}
        />
      </Box>

      <Space height={4} />
      <LakeText color={colors.negative[400]}>{error ?? " "}</LakeText>
    </View>
  );
};

const formSteps: BeneficiaryFormStep[] = ["common", "address"];

type FormValues = {
  firstName: string;
  lastName: string;
  birthDate: string;
  birthCountryCode: CountryCCA3;
  birthCity: string;
  birthCityPostalCode: string;
  type: BeneficiaryType;
  capitalType?: CapitalType;
  totalCapitalPercentage?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country?: CountryCCA3;
  taxIdentificationNumber?: string;
};

const requiredStepFields = [
  "firstName",
  "lastName",
  "birthDate",
  "birthCountryCode",
  "birthCity",
  "birthCityPostalCode",
  "type",
] satisfies (keyof FormValues)[];

export const BeneficiaryForm = forwardRef<BeneficiaryFormRef | undefined, Props>(
  (
    {
      initialState,
      accountCountry,
      step,
      googleMapApiKey,
      onStepChange,
      onClose,
      onSave,
      onCityLoadError,
    }: Props,
    ref,
  ) => {
    const [reference] = useState(() => initialState?.reference ?? uuid());
    const isAddressRequired = accountCountry === "DEU" || accountCountry === "ESP";
    const isBirthInfoRequired = accountCountry !== "DEU";
    const initialAddress = useRef({
      residencyAddressLine1: initialState?.residencyAddressLine1,
      residencyAddressCity: initialState?.residencyAddressCity,
      residencyAddressPostalCode: initialState?.residencyAddressPostalCode,
    });

    const commonStepValues = useRef<FormValues>();

    const initialBirthDate = initialState?.birthDate;
    const { Field, FieldsListener, setFieldValue, submitForm, listenFields, validateField } =
      useForm<FormValues>({
        firstName: {
          initialValue: initialState?.firstName ?? "",
          validate: validateNullableRequired,
          sanitize: value => value?.trim(),
        },
        lastName: {
          initialValue: initialState?.lastName ?? "",
          validate: validateNullableRequired,
          sanitize: value => value?.trim(),
        },
        birthDate: {
          initialValue: isNotNullishOrEmpty(initialBirthDate)
            ? decodeBirthDate(initialBirthDate)
            : "",
          validate: isBirthInfoRequired ? validateNullableRequired : undefined,
          sanitize: value => value?.trim(),
        },
        birthCountryCode: {
          initialValue: initialState?.birthCountryCode ?? accountCountry,
          validate: validateNullableRequired,
        },
        birthCity: {
          initialValue: initialState?.birthCity ?? "",
          validate: isBirthInfoRequired ? validateNullableRequired : undefined,
          sanitize: value => value?.trim(),
        },
        birthCityPostalCode: {
          initialValue: initialState?.birthCityPostalCode ?? "",
          validate: isBirthInfoRequired ? validateNullableRequired : undefined,
          sanitize: value => value?.trim(),
        },
        type: {
          initialValue: initialState?.type ?? "LegalRepresentative",
          validate: validateRequired,
        },
        capitalType: {
          initialValue: getCapitalType(initialState?.direct, initialState?.indirect),
          validate: (value, { getFieldState }) => {
            const type = getFieldState("type");
            if (type.value === "HasCapital" && value === "none") {
              return t("beneficiaryForm.beneficiary.directOrIndirect");
            }
            return undefined;
          },
        },
        totalCapitalPercentage: {
          initialValue: initialState?.totalCapitalPercentage?.toString(),
          validate: validateNullableRequired,
          sanitize: value => value?.trim(),
        },
        address: {
          initialValue: initialState?.residencyAddressLine1,
          validate: isAddressRequired ? validateNullableRequired : undefined,
          sanitize: value => value?.trim(),
        },
        city: {
          initialValue: initialState?.residencyAddressCity,
          validate: isAddressRequired ? validateNullableRequired : undefined,
          sanitize: value => value?.trim(),
        },
        postalCode: {
          initialValue: initialState?.residencyAddressPostalCode,
          validate: isAddressRequired ? validateNullableRequired : undefined,
          sanitize: value => value?.trim(),
        },
        country: {
          initialValue: isCountryCCA3(initialState?.residencyAddressCountry)
            ? initialState?.residencyAddressCountry
            : accountCountry,
          validate: isAddressRequired ? validateNullableRequired : undefined,
        },
        taxIdentificationNumber: {
          initialValue: initialState?.taxIdentificationNumber,
          validate: (value, { getFieldState }) => {
            const uboCountry = getFieldState("country").value;
            if (accountCountry === "DEU" && uboCountry === "DEU") {
              return combineValidators(
                validateNullableRequired,
                validateIndividualTaxNumber(accountCountry),
              )(value);
            }

            return validateIndividualTaxNumber(accountCountry)(value);
          },
          sanitize: value => value?.trim(),
        },
      });

    const hasBeenSubmittedOnce = useRef(false);

    useEffect(() => {
      if (initialState != null) {
        // submit form to validate all fields
        submitForm(noop);
      }
    }, [initialState, submitForm]);

    useEffect(() => {
      // store address values on change to set initial values when user use cancel button and go back
      // without this, address form part initial values stays empty and city and postal code aren't automatically mounted
      return listenFields(["address", "city", "postalCode"], ({ address, city, postalCode }) => {
        initialAddress.current = {
          residencyAddressLine1: address?.value,
          residencyAddressCity: city?.value,
          residencyAddressPostalCode: postalCode?.value,
        };
      });
    });

    useEffect(() => {
      return listenFields(["type"], () => {
        if (hasBeenSubmittedOnce.current) {
          // The setTimeout is needed here so that the `validateField`
          // runs *after* the <Field /> mounts, as it's a no-op if not mounted
          setTimeout(() => {
            void validateField("totalCapitalPercentage");
          }, 100);
        }
      });
    }, [listenFields, validateField]);

    useImperativeHandle(ref, () => {
      return {
        cancel: () => {
          match(step)
            .with("common", () => onClose())
            .with("address", () => onStepChange("common"))
            .exhaustive();
        },
        submit: () => {
          hasBeenSubmittedOnce.current = true;

          submitForm(values => {
            if (
              step === "common" &&
              isAddressRequired &&
              hasDefinedKeys(values, requiredStepFields)
            ) {
              commonStepValues.current = values;
              onStepChange("address");
              return;
            }

            const allStepsValues = { ...commonStepValues.current, ...values };

            if (hasDefinedKeys(allStepsValues, requiredStepFields)) {
              const [direct, indirect] = getDirectAndIndirect(allStepsValues.capitalType ?? "none");
              return onSave({
                reference,
                firstName: allStepsValues.firstName,
                lastName: allStepsValues.lastName,
                birthDate: encodeBirthDate(allStepsValues.birthDate),
                birthCountryCode: allStepsValues.birthCountryCode,
                birthCity: allStepsValues.birthCity,
                birthCityPostalCode: allStepsValues.birthCityPostalCode,
                type: allStepsValues.type,
                indirect,
                direct,
                totalCapitalPercentage: isNotNullish(allStepsValues.totalCapitalPercentage)
                  ? parseInt(allStepsValues.totalCapitalPercentage, 10)
                  : undefined,

                residencyAddressLine1: allStepsValues.address,
                residencyAddressCity: allStepsValues.city,
                residencyAddressCountry: allStepsValues.country,
                residencyAddressPostalCode: allStepsValues.postalCode,
                taxIdentificationNumber: allStepsValues.taxIdentificationNumber,
              });
            }
          });
        },
      };
    });

    return (
      <ResponsiveContainer breakpoint={breakpoints.tiny}>
        {({ small, large }) => (
          <>
            {match(step)
              .with("common", () => (
                <View role="form">
                  <Box direction={small ? "column" : "row"}>
                    <Field name="firstName">
                      {({ value, onChange, error }) => (
                        <LakeLabel
                          label={t("beneficiaryForm.beneficiary.firstName")}
                          style={styles.inputContainer}
                          render={id => (
                            <LakeTextInput
                              error={error}
                              placeholder={t("beneficiaryForm.beneficiary.firstNamePlaceholder")}
                              id={id}
                              value={value}
                              onChangeText={onChange}
                            />
                          )}
                        />
                      )}
                    </Field>

                    <Space width={12} />

                    <Field name="lastName">
                      {({ value, onChange, error }) => (
                        <LakeLabel
                          label={t("beneficiaryForm.beneficiary.lastName")}
                          style={styles.inputContainer}
                          render={id => (
                            <LakeTextInput
                              error={error}
                              placeholder={t("beneficiaryForm.beneficiary.lastNamePlaceholder")}
                              id={id}
                              value={value}
                              onChangeText={onChange}
                            />
                          )}
                        />
                      )}
                    </Field>
                  </Box>

                  <Box direction={small ? "column" : "row"}>
                    <Field name="birthDate">
                      {({ value, onChange, error }) => (
                        <LakeLabel
                          label={t("beneficiaryForm.beneficiary.birthDate")}
                          optionalLabel={isBirthInfoRequired ? undefined : t("common.optional")}
                          style={styles.inputContainer}
                          render={id => (
                            <Rifm value={value ?? ""} onChange={onChange} {...rifmDateProps}>
                              {({ value, onChange }) => (
                                <LakeTextInput
                                  error={error}
                                  placeholder={locale.datePlaceholder}
                                  id={id}
                                  value={value}
                                  onChange={onChange}
                                />
                              )}
                            </Rifm>
                          )}
                        />
                      )}
                    </Field>

                    <Space width={12} />

                    <Field name="birthCountryCode">
                      {({ value, onChange, error }) => (
                        <LakeLabel
                          label={t("beneficiaryForm.beneficiary.birthCountry")}
                          style={styles.inputContainer}
                          render={id => (
                            <CountryPicker
                              id={id}
                              error={error}
                              value={value}
                              placeholder={t("beneficiaryForm.beneficiary.birthCountryPlaceholder")}
                              countries={allCountries}
                              onValueChange={onChange}
                            />
                          )}
                        />
                      )}
                    </Field>
                  </Box>

                  <Box direction={small ? "column" : "row"}>
                    <FieldsListener names={["birthCountryCode"]}>
                      {({ birthCountryCode }) => (
                        <>
                          <Field name="birthCity">
                            {({ value, onChange, error }) => (
                              <LakeLabel
                                label={t("beneficiaryForm.beneficiary.birthCity")}
                                optionalLabel={
                                  isBirthInfoRequired ? undefined : t("common.optional")
                                }
                                style={styles.inputContainer}
                                render={id => (
                                  <GMapCityInput
                                    id={id}
                                    apiKey={googleMapApiKey}
                                    error={error}
                                    country={birthCountryCode.value}
                                    value={value ?? ""}
                                    onValueChange={onChange}
                                    placeholder={
                                      birthCountryCode.value == null
                                        ? t("beneficiaryForm.beneficiary.fillBirthCountry")
                                        : t("beneficiaryForm.beneficiary.birthCityPlaceholder")
                                    }
                                    onSuggestion={place => {
                                      onChange(place.city);
                                      setFieldValue("birthCityPostalCode", place.postalCode);
                                    }}
                                    onLoadError={onCityLoadError}
                                  />
                                )}
                              />
                            )}
                          </Field>

                          <Space width={12} />

                          <Field name="birthCityPostalCode">
                            {({ value, onChange, error }) => (
                              <LakeLabel
                                label={t("beneficiaryForm.beneficiary.birthPostalCode")}
                                optionalLabel={
                                  isBirthInfoRequired ? undefined : t("common.optional")
                                }
                                style={styles.inputContainer}
                                render={id => (
                                  <LakeTextInput
                                    error={error}
                                    placeholder={
                                      birthCountryCode.value == null
                                        ? t("beneficiaryForm.beneficiary.fillBirthCountry")
                                        : t(
                                            "beneficiaryForm.beneficiary.birthPostalCodePlaceholder",
                                          )
                                    }
                                    id={id}
                                    disabled={birthCountryCode.value === undefined}
                                    value={value}
                                    onChangeText={onChange}
                                  />
                                )}
                              />
                            )}
                          </Field>
                        </>
                      )}
                    </FieldsListener>
                  </Box>

                  <Field name="type">
                    {({ value, onChange }) => (
                      <LakeLabel
                        label={t("beneficiaryForm.beneficiary.type")}
                        type="radioGroup"
                        render={() => (
                          <RadioGroup
                            direction="row"
                            value={value}
                            onValueChange={onChange}
                            items={beneficiaryTypes}
                          />
                        )}
                      />
                    )}
                  </Field>

                  <FieldsListener names={["type"]}>
                    {({ type }) =>
                      type.value === "HasCapital" ? (
                        <>
                          <Field name="totalCapitalPercentage">
                            {({ value, onChange, error }) => (
                              <LakeLabel
                                label={t("beneficiaryForm.beneficiary.totalCapitalPercentage")}
                                render={id => (
                                  <LakeTextInput
                                    error={error}
                                    unit="%"
                                    inputMode="decimal"
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    id={id}
                                    value={value}
                                    onChangeText={onChange}
                                  />
                                )}
                              />
                            )}
                          </Field>

                          <Space height={12} />

                          <Field name="capitalType">
                            {({ value, error, onChange }) => (
                              <CapitalTypeCheckboxes
                                value={value ?? "none"}
                                error={error}
                                onChange={onChange}
                              />
                            )}
                          </Field>
                        </>
                      ) : null
                    }
                  </FieldsListener>
                </View>
              ))
              .with("address", () => (
                <View role="form">
                  <Field name="country">
                    {({ value, onChange }) => (
                      <LakeLabel
                        label={t("beneficiaryForm.beneficiary.country")}
                        render={id => (
                          <CountryPicker
                            id={id}
                            value={value}
                            countries={allCountries}
                            onValueChange={onChange}
                          />
                        )}
                      />
                    )}
                  </Field>

                  <Space height={12} />

                  <FieldsListener names={["country"]}>
                    {({ country }) => (
                      <>
                        <AddressFormPart
                          apiKey={googleMapApiKey}
                          initialAddress={initialAddress.current.residencyAddressLine1 ?? ""}
                          initialCity={initialAddress.current.residencyAddressCity ?? ""}
                          initialPostalCode={
                            initialAddress.current.residencyAddressPostalCode ?? ""
                          }
                          country={country?.value ?? accountCountry}
                          label={t("beneficiaryForm.beneficiary.address")}
                          Field={Field}
                          setFieldValue={setFieldValue}
                          listenFields={listenFields}
                          isLarge={large}
                        />

                        {((accountCountry === "DEU" && country?.value === "DEU") ||
                          accountCountry === "ESP") && (
                          <>
                            <Space height={12} />

                            <Field name="taxIdentificationNumber">
                              {({ value, error, valid, onChange }) => (
                                <TaxIdentificationNumberInput
                                  value={value ?? ""}
                                  error={error}
                                  valid={valid}
                                  onChange={onChange}
                                  accountCountry={accountCountry}
                                  isCompany={false}
                                  // is mandatory for German accounts and UBO living in Germany
                                  required={accountCountry === "DEU" && country?.value === "DEU"}
                                />
                              )}
                            </Field>
                          </>
                        )}
                      </>
                    )}
                  </FieldsListener>
                </View>
              ))
              .exhaustive()}

            {isAddressRequired && (
              <>
                <Space height={12} />
                <StepDots currentStep={step} steps={formSteps} />
              </>
            )}
          </>
        )}
      </ResponsiveContainer>
    );
  },
);
