import { Form } from "@swan-io/lake/src/components/Form";
import { LakeButton, LakeButtonGroup } from "@swan-io/lake/src/components/LakeButton";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeModal } from "@swan-io/lake/src/components/LakeModal";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { LakeTooltip } from "@swan-io/lake/src/components/LakeTooltip";
import { Space } from "@swan-io/lake/src/components/Space";
import { isNullish } from "@swan-io/lake/src/utils/nullish";
import { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { Validator, useForm } from "react-ux-form";
import { match } from "ts-pattern";
import {
  MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE,
  MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE_MB,
} from "../constants/uploads";
import { TranslationKey, locale, t } from "../utils/i18n";
import { UploadArea, UploadFileStatus } from "./UploadArea";

const ACCEPTED_FORMATS = ["application/pdf", "image/png", "image/jpeg"];
const NO_ID_YET = "NO_ID_YET";

export type Document = {
  id: string;
  name?: string;
  downloadUrl?: string;
  purpose: SupportingDocumentPurpose;
};

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
  | "SwornStatement"
  | "UBODeclaration";

export const uploadableDocumentTypes = [
  "AssociationRegistration",
  "CompanyRegistration",
  "ProofOfIdentity",
  "SignedStatus",
  "PowerOfAttorney",
  "SwornStatement",
  "UBODeclaration",
] satisfies SupportingDocumentPurposeEnum[];

export type SupportingDocumentPurpose = (typeof uploadableDocumentTypes)[number];

type FormValue = UploadFileStatus[];

type FormValues = {
  CompanyRegistration: FormValue;
  AssociationRegistration: FormValue;
  SignedStatus: FormValue;
  ProofOfIdentity: FormValue;
  PowerOfAttorney: FormValue;
  SwornStatement: FormValue;
  UBODeclaration: FormValue;
};

type Props = {
  getAwsUrl: (
    file: File,
    purpose: SupportingDocumentPurpose,
  ) => Promise<{ upload: { url: string; fields: { key: string; value: string }[] }; id: string }>;
  documents: Document[];
  requiredDocumentTypes: SupportingDocumentPurposeEnum[];
  onChange?: (documents: Document[]) => void;
  onboardingLanguage?: string;
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

type HelpProps =
  | {
      type: "tooltip";
      text: TranslationKey;
      width?: number;
    }
  | {
      type: "button";
      label: string;
      onPress: () => void;
    };

const Help = (props: HelpProps) => {
  return match(props)
    .with({ type: "tooltip" }, ({ text, width }) => (
      <LakeTooltip content={t(text)} width={width} togglableOnFocus={true} placement="top">
        <LakeButton
          mode="tertiary"
          size="small"
          color="gray"
          icon="question-circle-regular"
          disabled={true}
          style={[styles.button, styles.buttonWithDefaultCursor]}
          ariaLabel={t("supportingDoc.whatIsThis")}
        />
      </LakeTooltip>
    ))
    .with({ type: "button" }, ({ label, onPress }) => (
      <LakeButton
        mode="tertiary"
        size="small"
        color="gray"
        icon="question-circle-regular"
        onPress={onPress}
        style={styles.button}
        ariaLabel={t("supportingDoc.whatIsThis")}
      >
        {label}
      </LakeButton>
    ))
    .exhaustive();
};

export type SupportingDocumentRef = {
  submit: (callback: (value: boolean) => void) => void;
};

export const SupportingDocument = forwardRef<SupportingDocumentRef, Props>(
  (
    { documents, getAwsUrl, onChange, requiredDocumentTypes, onboardingLanguage = locale.language },
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
                status: "finished",
                id: doc.id,
                name: doc.name,
                fileUrl: doc.downloadUrl,
              },
            ],
          };
        }, {}),
      [documents],
    );

    const [showPowerOfAttorneyModal, setShowPowerOfAttorneyModal] = useState(false);
    const [showSwornStatementModal, setShowSwornStatementModal] = useState(false);

    const { Field, setFieldValue, getFieldState, listenFields, submitForm } = useForm<FormValues>({
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
      UBODeclaration: {
        initialValue: initialValues["UBODeclaration"] ?? [],
        validate: validateNotEmpty,
      },
      PowerOfAttorney: {
        initialValue: initialValues["PowerOfAttorney"] ?? [],
        validate: validateNotEmpty,
      },
      SwornStatement: {
        initialValue: initialValues["SwornStatement"] ?? [],
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
      const removeListener = listenFields(uploadableDocumentTypes, state => {
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
      });

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
                    status: "uploading",
                    progress: 0,
                    name: file.name,
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

          xhr.onerror = () => {
            const state = getFieldState(fieldName).value;
            setFieldValue(
              fieldName,
              state.map(uploadState =>
                uploadState.id === id
                  ? {
                      status: "failed",
                      id: uploadState.id,
                      name: uploadState.name,
                      fileUrl: uploadState.fileUrl,
                      error: t("supportingDoc.errorUpload"),
                    }
                  : uploadState,
              ),
            );
          };

          xhr.onload = () => {
            const state = getFieldState(fieldName).value;

            if (xhr.status !== 200 && xhr.status !== 204) {
              setFieldValue(
                fieldName,
                state.map(uploadState =>
                  uploadState.id === id
                    ? {
                        status: "failed",
                        id: uploadState.id,
                        name: uploadState.name,
                        fileUrl: uploadState.fileUrl,
                        error: t("supportingDoc.errorUpload"),
                      }
                    : uploadState,
                ),
              );
              return;
            }

            setFieldValue(
              fieldName,
              state.map(uploadState =>
                uploadState.id === id ? { ...uploadState, status: "finished" } : uploadState,
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
        .catch(() => {
          const state = getFieldState(fieldName).value;
          setFieldValue(
            fieldName,
            state.map(uploadState =>
              uploadState.id === NO_ID_YET
                ? {
                    status: "failed",
                    id: uploadState.id,
                    name: uploadState.name,
                    fileUrl: uploadState.fileUrl,
                    error: t("supportingDoc.errorUpload"),
                  }
                : uploadState,
            ),
          );
        });
    };

    return (
      <Form>
        {requiredDocumentTypes.includes("CompanyRegistration") && (
          <>
            <LakeLabel
              label={t("supportingDoc.companyRegistration")}
              help={<Help type="tooltip" text="supportingDoc.companyRegistration.description" />}
              render={() => (
                <Field name="CompanyRegistration">
                  {({ value, onChange, error }) => (
                    <UploadArea
                      layout="horizontal"
                      error={error}
                      onDropAccepted={files => {
                        onChange([...value, { id: NO_ID_YET, status: "uploading", progress: 0 }]);
                        handleUpload(files, "CompanyRegistration");
                      }}
                      documents={value}
                      accept={ACCEPTED_FORMATS}
                      icon="document-regular"
                      description={t("supportingDoc.documentTypes", {
                        maxSizeMB: MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE_MB,
                      })}
                      maxSize={MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE}
                    />
                  )}
                </Field>
              )}
            />

            <Space height={24} />
          </>
        )}

        {requiredDocumentTypes.includes("AssociationRegistration") && (
          <>
            <LakeLabel
              label={t("supportingDoc.associationRegistration")}
              help={
                <Help type="tooltip" text="supportingDoc.associationRegistration.description" />
              }
              render={() => (
                <Field name="AssociationRegistration">
                  {({ value, onChange, error }) => (
                    <UploadArea
                      layout="horizontal"
                      onDropAccepted={files => {
                        onChange([...value, { id: NO_ID_YET, status: "uploading", progress: 0 }]);
                        handleUpload(files, "AssociationRegistration");
                      }}
                      error={error}
                      documents={value}
                      accept={ACCEPTED_FORMATS}
                      icon="document-regular"
                      description={t("supportingDoc.documentTypes", {
                        maxSizeMB: MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE_MB,
                      })}
                      maxSize={MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE}
                    />
                  )}
                </Field>
              )}
            />

            <Space height={24} />
          </>
        )}

        {requiredDocumentTypes.includes("SignedStatus") && (
          <>
            <LakeLabel
              label={t("supportingDoc.signedStatus")}
              help={<Help type="tooltip" text="supportingDoc.signedStatus.description" />}
              render={() => (
                <Field name="SignedStatus">
                  {({ value, onChange, error }) => (
                    <UploadArea
                      layout="horizontal"
                      onDropAccepted={files => {
                        onChange([...value, { id: NO_ID_YET, status: "uploading", progress: 0 }]);
                        handleUpload(files, "SignedStatus");
                      }}
                      error={error}
                      documents={value}
                      accept={ACCEPTED_FORMATS}
                      icon="document-regular"
                      description={t("supportingDoc.documentTypes", {
                        maxSizeMB: MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE_MB,
                      })}
                      maxSize={MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE}
                    />
                  )}
                </Field>
              )}
            />

            <Space height={24} />
          </>
        )}

        {requiredDocumentTypes.includes("UBODeclaration") && (
          <>
            <LakeLabel
              label={t("supportingDoc.UBODeclaration")}
              help={<Help type="tooltip" text="supportingDoc.UBODeclaration.description" />}
              render={() => (
                <Field name="UBODeclaration">
                  {({ value, onChange, error }) => (
                    <UploadArea
                      layout="horizontal"
                      onDropAccepted={files => {
                        onChange([...value, { id: NO_ID_YET, status: "uploading", progress: 0 }]);
                        handleUpload(files, "UBODeclaration");
                      }}
                      error={error}
                      documents={value}
                      accept={ACCEPTED_FORMATS}
                      icon="document-regular"
                      description={t("supportingDoc.documentTypes", {
                        maxSizeMB: MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE_MB,
                      })}
                      maxSize={MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE}
                    />
                  )}
                </Field>
              )}
            />

            <Space height={24} />
          </>
        )}

        {requiredDocumentTypes.includes("ProofOfIdentity") && (
          <>
            <LakeLabel
              label={t("supportingDoc.proofOfIdentity")}
              help={
                <Help type="tooltip" width={600} text="supportingDoc.proofOfIdentity.description" />
              }
              render={() => (
                <Field name="ProofOfIdentity">
                  {({ value, onChange, error }) => (
                    <UploadArea
                      layout="horizontal"
                      onDropAccepted={files => {
                        onChange([...value, { id: NO_ID_YET, status: "uploading", progress: 0 }]);
                        handleUpload(files, "ProofOfIdentity");
                      }}
                      error={error}
                      documents={value}
                      accept={ACCEPTED_FORMATS}
                      icon="document-regular"
                      description={t("supportingDoc.documentTypes", {
                        maxSizeMB: MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE_MB,
                      })}
                      maxSize={MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE}
                    />
                  )}
                </Field>
              )}
            />

            <Space height={24} />
          </>
        )}

        {requiredDocumentTypes.includes("PowerOfAttorney") && (
          <>
            <LakeLabel
              label={t("supportingDoc.powerAttornySigned")}
              help={
                <Help
                  type="button"
                  label={t("supportingDoc.whatIsThis")}
                  onPress={() => setShowPowerOfAttorneyModal(true)}
                />
              }
              render={() => (
                <Field name="PowerOfAttorney">
                  {({ value, onChange, error }) => (
                    <UploadArea
                      layout="horizontal"
                      onDropAccepted={files => {
                        onChange([...value, { id: NO_ID_YET, status: "uploading", progress: 0 }]);
                        handleUpload(files, "PowerOfAttorney");
                      }}
                      error={error}
                      documents={value}
                      accept={ACCEPTED_FORMATS}
                      icon="document-regular"
                      description={t("supportingDoc.documentTypes", {
                        maxSizeMB: MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE_MB,
                      })}
                      maxSize={MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE}
                    />
                  )}
                </Field>
              )}
            />

            <Space height={24} />
          </>
        )}

        {requiredDocumentTypes.includes("SwornStatement") && (
          <>
            <LakeLabel
              label={t("supportingDoc.swornStatementDeclaration")}
              help={
                <Help
                  type="button"
                  label={t("supportingDoc.whatIsThis")}
                  onPress={() => setShowSwornStatementModal(true)}
                />
              }
              render={() => (
                <Field name="SwornStatement">
                  {({ value, onChange, error }) => (
                    <UploadArea
                      layout="horizontal"
                      onDropAccepted={files => {
                        onChange([...value, { id: NO_ID_YET, status: "uploading", progress: 0 }]);
                        handleUpload(files, "SwornStatement");
                      }}
                      error={error}
                      documents={value}
                      accept={ACCEPTED_FORMATS}
                      icon="document-regular"
                      description={t("supportingDoc.documentTypes", {
                        maxSizeMB: MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE_MB,
                      })}
                      maxSize={MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE}
                    />
                  )}
                </Field>
              )}
            />

            <Space height={24} />
          </>
        )}

        {requiredDocumentTypes.length === 0 ? (
          <>
            <Space height={24} />
            <LakeText>{t("supportingDoc.noRequiredDocuments")}</LakeText>
            <Space height={24} />
          </>
        ) : null}

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
                  `/power-of-attorney-template/${match(onboardingLanguage)
                    .with("fr", () => "fr")
                    .with("de", () => "de")
                    .with("es", () => "es")
                    .otherwise(() => "en")}.pdf`,
                )
              }
            >
              {t("supportingDoc.downloadTemplate")}
            </LakeButton>
          </LakeButtonGroup>
        </LakeModal>

        <LakeModal
          visible={showSwornStatementModal}
          title={t("supportingDoc.swornStatementDeclaration")}
          icon="document-regular"
          onPressClose={() => setShowSwornStatementModal(false)}
        >
          <LakeText>{t("supportingDoc.swornStatementDeclaration.description")}</LakeText>
          <Space height={16} />

          <LakeButtonGroup paddingBottom={0}>
            <LakeButton
              grow={true}
              color="current"
              onPress={() => window.open("/sworn-statement-template/es.pdf")}
            >
              {t("supportingDoc.downloadTemplate")}
            </LakeButton>
          </LakeButtonGroup>
        </LakeModal>
      </Form>
    );
  },
);
