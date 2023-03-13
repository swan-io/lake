import { Box } from "@swan-io/lake/src/components/Box";
import { Form } from "@swan-io/lake/src/components/Form";
import { LakeButton, LakeButtonGroup } from "@swan-io/lake/src/components/LakeButton";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeModal } from "@swan-io/lake/src/components/LakeModal";
import { LakeRadio } from "@swan-io/lake/src/components/LakeRadio";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { LakeTooltip } from "@swan-io/lake/src/components/LakeTooltip";
import { Pressable } from "@swan-io/lake/src/components/Pressable";
import { Space } from "@swan-io/lake/src/components/Space";
import { isNotNullish, isNullish } from "@swan-io/lake/src/utils/nullish";
import { UploadArea, UploadFileStatus } from "@swan-io/shared-business/src/components/UploadArea";
import { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { useForm, Validator } from "react-ux-form";
import { CountryCCA3 } from "../constants/countries";
import { MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE } from "../constants/uploads";
import { t, TranslationKey } from "../utils/i18n";

const ACCEPTED_FORMATS = ["application/pdf", "image/png", "image/jpeg"];
const NO_ID_YET = "NO_ID_YET";

export type Document = {
  id: string;
  name?: string;
  downloadUrl?: string;
  purpose: SupportingDocumentPurpose;
};

export type TypeOfRepresentation = "LegalRepresentative" | "PowerOfAttorney";

export type SupportingDocumentPurpose =
  | "AssociationRegistration"
  | "CompanyRegistration"
  | "ProofOfIdentity"
  | "Other"
  | "SignedStatus";

type SupportingDocumentPurposeEnum =
  | "AssociationRegistration"
  | "Banking"
  | "CompanyRegistration"
  | "Other"
  | "PowerOfAttorney"
  | "ProofOfCompanyAddress"
  | "ProofOfCompanyIncome"
  | "ProofOfIdentity"
  | "ProofOfIndividualAddress"
  | "ProofOfIndividualIncome"
  | "ProofOfOriginOfFunds"
  | "SignedStatus"
  | "UBODeclaration";

type FormValue = UploadFileStatus[];

type Form = {
  CompanyRegistration: FormValue;
  AssociationRegistration: FormValue;
  SignedStatus: FormValue;
  ProofOfIdentity: FormValue;
  Other: FormValue;
};

type Props = {
  getAwsUrl: (
    file: File,
    purpose: SupportingDocumentPurpose,
  ) => Promise<{ upload: { url: string; fields: { key: string; value: string }[] }; id: string }>;
  documents: Document[];
  requiredDocumentTypes: SupportingDocumentPurposeEnum[];
  onChange?: (documents: Document[]) => void;
  country?: CountryCCA3;
  typeOfRepresentation?: TypeOfRepresentation;
};

const validateNotEmpty: Validator<FormValue> = value => {
  if (value.length === 0) {
    return t("error.requiredField");
  }
};

const styles = StyleSheet.create({
  button: {
    opacity: 1,
  },
  buttonWithDefaultCursor: {
    opacity: 1,
    cursor: "default",
  },
});

const Help = ({
  text,
  width,
  onPress,
}: {
  text: TranslationKey;
  width?: number;
  onPress?: () => void;
}) => {
  return (
    <LakeTooltip content={t(text)} width={width} togglableOnFocus={true} placement="top">
      <LakeButton
        mode="tertiary"
        color="gray"
        icon="question-circle-regular"
        onPress={onPress}
        disabled={onPress == null}
        style={[styles.button, onPress == null && styles.buttonWithDefaultCursor]}
        accessibilityLabel={t("supportingDoc.whatIsThis")}
      />
    </LakeTooltip>
  );
};

export type SupportingDocumentRef = {
  submit: (callback: (value: boolean) => void) => void;
};

export const SupportingDocument = forwardRef<SupportingDocumentRef, Props>(
  (
    { documents, getAwsUrl, onChange, requiredDocumentTypes, country, typeOfRepresentation },
    externalRef,
  ) => {
    const initialValues: Record<string, FormValue> = useMemo(
      () =>
        documents.reduce<Record<string, FormValue>>((acc, doc) => {
          return {
            ...acc,
            [doc.purpose]: [
              ...(acc[doc.purpose] ?? []),
              {
                id: doc.id,
                name: doc.name,
                fileUrl: doc.downloadUrl,
                finished: true,
              },
            ],
          };
        }, {}),
      [documents],
    );

    const [showPowerOfAttorneyModal, setShowPowerOfAttorneyModal] = useState(false);

    const [isOther, setIsOther] = useState(
      isNotNullish(initialValues["Other"]) || isNotNullish(initialValues["ProofOfIdentity"]),
    );

    const { Field, setFieldValue, getFieldState, listenFields, submitForm } = useForm<Form>({
      CompanyRegistration: {
        initialValue: initialValues["CompanyRegistration"] ?? [],
        validate: validateNotEmpty,
      },
      AssociationRegistration: {
        initialValue: initialValues["AssociationRegistration"] ?? [],
        validate: validateNotEmpty,
      },
      SignedStatus: {
        initialValue: initialValues["SignedStatus"] ?? [],
        validate: validateNotEmpty,
      },
      ProofOfIdentity: {
        initialValue: initialValues["ProofOfIdentity"] ?? [],
        validate: validateNotEmpty,
      },
      Other: {
        initialValue: initialValues["Other"] ?? [],
        validate: validateNotEmpty,
      },
    });

    useImperativeHandle(externalRef, () => {
      return {
        submit: (callback: (value: boolean) => void) => {
          submitForm(
            () => callback(true),
            () => callback(false),
          );
        },
      };
    });

    useEffect(() => {
      const removeListener = listenFields(
        [
          "CompanyRegistration",
          "AssociationRegistration",
          "SignedStatus",
          "Other",
          "ProofOfIdentity",
        ],
        state => {
          let documents: Document[] = [];

          Object.entries(state).forEach(([key, { value: values }]) => {
            documents = [
              ...documents,
              ...(values ?? []).map(v => ({
                id: v.id,
                name: v.name,
                downloadUrl: v.fileUrl,
                purpose: key as SupportingDocumentPurpose,
              })),
            ];
          });

          onChange?.(documents);
        },
      );

      return () => removeListener();
    }, [listenFields, onChange]);

    const handleUpload = (files: File[], fieldName: SupportingDocumentPurpose) => {
      const file = files[0];

      if (isNullish(file)) {
        return;
      }

      getAwsUrl(file, fieldName)
        .then(({ upload: { url, fields }, id }) => {
          const xhr = new XMLHttpRequest();
          xhr.open("POST", url, true);

          const state = getFieldState(fieldName).value;
          setFieldValue(
            fieldName,
            state.map(doc =>
              doc.id === NO_ID_YET
                ? {
                    progress: 0,
                    name: file.name,
                    finished: false,
                    id,
                  }
                : doc,
            ),
          );

          xhr.upload.onprogress = event => {
            const progress = (event.loaded / event.total) * 100;

            const state = getFieldState(fieldName).value;
            setFieldValue(
              fieldName,
              state.map(uploadState =>
                uploadState.id === id ? { ...uploadState, progress } : uploadState,
              ),
            );
          };

          xhr.onload = () => {
            const state = getFieldState(fieldName).value;

            if (xhr.status !== 200 && xhr.status !== 204) {
              setFieldValue(
                fieldName,
                state.filter(uploadState => (uploadState.id === id ? false : true)),
              );
              return;
            }

            setFieldValue(
              fieldName,
              state.map(uploadState =>
                uploadState.id === id
                  ? { ...uploadState, progress: undefined, finished: true }
                  : uploadState,
              ),
            );
          };

          const formData = new FormData();
          fields.forEach(({ key, value }) => {
            formData.append(key, value);
          });
          formData.append("file", file);
          xhr.send(formData);
        })
        .catch(console.error);
    };

    return (
      <Form>
        {typeOfRepresentation == null && (
          <LakeLabel
            label={t("supportingDoc.whoAreYou")}
            render={() => (
              <LakeButtonGroup>
                <Pressable onPress={() => setIsOther(false)}>
                  <Box direction="row" alignItems="center">
                    <LakeRadio value={!isOther} color="current" />
                    <Space width={12} />
                    <LakeText>{t("supportingDoc.legalRepresentative")}</LakeText>
                  </Box>
                </Pressable>

                <Space width={24} />

                <Pressable onPress={() => setIsOther(true)}>
                  <Box direction="row" alignItems="center">
                    <LakeRadio value={isOther} color="current" />
                    <Space width={12} />
                    <LakeText>{t("supportingDoc.other")}</LakeText>
                  </Box>
                </Pressable>
              </LakeButtonGroup>
            )}
          />
        )}

        {requiredDocumentTypes.some(t => t === "CompanyRegistration") && (
          <>
            <LakeLabel
              label={t("supportingDoc.companyRegistration")}
              help={<Help text="supportingDoc.companyRegistration.description" />}
              render={() => (
                <Field name="CompanyRegistration">
                  {({ value, onChange, error }) => (
                    <UploadArea
                      layout="horizontal"
                      error={error}
                      onDropAccepted={files => {
                        onChange([...value, { id: NO_ID_YET }]);
                        handleUpload(files, "CompanyRegistration");
                      }}
                      documents={value}
                      accept={ACCEPTED_FORMATS}
                      icon="document-regular"
                      description={t("supportingDoc.documentTypes")}
                      maxSize={MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE}
                    />
                  )}
                </Field>
              )}
            />

            <Space height={24} />
          </>
        )}

        {requiredDocumentTypes.some(t => t === "AssociationRegistration") && (
          <>
            <LakeLabel
              label={t("supportingDoc.associationRegistration")}
              help={<Help text="supportingDoc.associationRegistration.description" />}
              render={() => (
                <Field name="AssociationRegistration">
                  {({ value, onChange, error }) => (
                    <UploadArea
                      layout="horizontal"
                      onDropAccepted={files => {
                        onChange([...value, { id: NO_ID_YET }]);
                        handleUpload(files, "AssociationRegistration");
                      }}
                      error={error}
                      documents={value}
                      accept={ACCEPTED_FORMATS}
                      icon="document-regular"
                      description={t("supportingDoc.documentTypes")}
                      maxSize={MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE}
                    />
                  )}
                </Field>
              )}
            />

            <Space height={24} />
          </>
        )}

        {requiredDocumentTypes.some(t => t === "SignedStatus") && (
          <>
            <LakeLabel
              label={t("supportingDoc.signedStatus")}
              help={<Help text="supportingDoc.signedStatus.description" />}
              render={() => (
                <Field name="SignedStatus">
                  {({ value, onChange, error }) => (
                    <UploadArea
                      layout="horizontal"
                      onDropAccepted={files => {
                        onChange([...value, { id: NO_ID_YET }]);
                        handleUpload(files, "SignedStatus");
                      }}
                      error={error}
                      documents={value}
                      accept={ACCEPTED_FORMATS}
                      icon="document-regular"
                      description={t("supportingDoc.documentTypes")}
                      maxSize={MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE}
                    />
                  )}
                </Field>
              )}
            />

            <Space height={24} />
          </>
        )}

        {requiredDocumentTypes.length === 0 && !isOther ? (
          <>
            <Space height={24} />
            <LakeText>{t("supportingDoc.noRequiredDocuments")}</LakeText>
            <Space height={24} />
          </>
        ) : null}

        {typeOfRepresentation === "LegalRepresentative" || isOther ? (
          <>
            <LakeLabel
              label={t("supportingDoc.proofOfIdentity")}
              help={<Help width={600} text="supportingDoc.proofOfIdentity.description" />}
              render={() => (
                <Field name="ProofOfIdentity">
                  {({ value, onChange, error }) => (
                    <UploadArea
                      layout="horizontal"
                      onDropAccepted={files => {
                        onChange([...value, { id: NO_ID_YET }]);
                        handleUpload(files, "ProofOfIdentity");
                      }}
                      error={error}
                      documents={value}
                      accept={ACCEPTED_FORMATS}
                      icon="document-regular"
                      description={t("supportingDoc.documentTypes")}
                      maxSize={MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE}
                    />
                  )}
                </Field>
              )}
            />

            <Space height={24} />

            <LakeLabel
              label={t("supportingDoc.powerAttornySigned")}
              help={
                <Help
                  text="supportingDoc.powerAttornySigned.description"
                  onPress={() => setShowPowerOfAttorneyModal(true)}
                />
              }
              render={() => (
                <Field name="Other">
                  {({ value, onChange, error }) => (
                    <UploadArea
                      layout="horizontal"
                      onDropAccepted={files => {
                        onChange([...value, { id: NO_ID_YET }]);
                        handleUpload(files, "Other");
                      }}
                      error={error}
                      documents={value}
                      accept={ACCEPTED_FORMATS}
                      icon="document-regular"
                      description={t("supportingDoc.documentTypes")}
                      maxSize={MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE}
                    />
                  )}
                </Field>
              )}
            />

            <LakeModal
              visible={showPowerOfAttorneyModal}
              title={t("supportingDoc.powerAttorney")}
              icon="document-regular"
              onPressClose={() => setShowPowerOfAttorneyModal(false)}
            >
              <LakeText>{t("supportingDoc.powerAttornySigned.description")}</LakeText>
              <Space height={16} />

              <LakeButtonGroup paddingBottom={0}>
                <LakeButton
                  grow={true}
                  color="current"
                  onPress={() =>
                    window.open(
                      `/power-of-attorney-template/${country === "FRA" ? "fr" : "en"}.pdf`,
                    )
                  }
                >
                  {t("supportingDoc.downloadTemplate")}
                </LakeButton>
              </LakeButtonGroup>
            </LakeModal>
          </>
        ) : null}
      </Form>
    );
  },
);
