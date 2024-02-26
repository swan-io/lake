import { Dict } from "@swan-io/boxed";
import { Form } from "@swan-io/lake/src/components/Form";
import { LakeButton, LakeButtonGroup } from "@swan-io/lake/src/components/LakeButton";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { LakeTooltip } from "@swan-io/lake/src/components/LakeTooltip";
import { Space } from "@swan-io/lake/src/components/Space";
import { isNotNullishOrEmpty, isNullish } from "@swan-io/lake/src/utils/nullish";
import {
  ForwardedRef,
  Fragment,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { StyleSheet } from "react-native";
import { FormConfig, Validator, useForm } from "react-ux-form";
import { match } from "ts-pattern";
import {
  MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE,
  MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE_MB,
} from "../constants/uploads";
import { isTranslationKey, locale, t } from "../utils/i18n";
import { LakeModal } from "./LakeModal";
import { UploadArea, UploadFileStatus } from "./UploadArea";

const ACCEPTED_FORMATS = ["application/pdf", "image/png", "image/jpeg"];
const NO_ID_YET = "NO_ID_YET";

export type Document<Purpose extends string> = {
  id: string;
  name?: string;
  downloadUrl?: string;
  purpose: Purpose;
};

type FormValue = UploadFileStatus[];

type FormValues<Purpose extends string> = Record<Purpose, FormValue>;

type Props<Purpose extends string> = {
  getAwsUrl: (
    file: File,
    purpose: Purpose,
  ) => Promise<{ upload: { url: string; fields: { key: string; value: string }[] }; id: string }>;
  documents: Document<Purpose>[];
  requiredDocumentPurposes: Purpose[];
  onChange?: (documents: Document<Purpose>[]) => void;
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
      text: string;
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
      <LakeTooltip content={text} width={width} togglableOnFocus={true} placement="top">
        <LakeButton
          mode="tertiary"
          size="small"
          color="gray"
          icon="question-circle-regular"
          disabled={true}
          style={[styles.button, styles.buttonWithDefaultCursor]}
          ariaLabel={t("supportingDocuments.help.whatIsThis")}
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
        ariaLabel={t("supportingDocuments.help.whatIsThis")}
      >
        {label}
      </LakeButton>
    ))
    .exhaustive();
};

export type SupportingDocumentRef = {
  submit: (callback: (value: boolean) => void) => void;
};

export const getSupportingDocumentPurposeLabel = (purpose: string) => {
  const key = `supportingDocuments.purpose.${purpose}`;
  if (isTranslationKey(key)) {
    return t(key);
  } else {
    return purpose;
  }
};

export const getSupportingDocumentPurposeDescriptionLabel = (purpose: string) => {
  const key = `supportingDocuments.purpose.${purpose}.description`;
  if (isTranslationKey(key)) {
    return t(key);
  } else {
    return "";
  }
};

const SupportingDocumentWithRef = <Purpose extends string>(
  {
    documents,
    getAwsUrl,
    onChange,
    requiredDocumentPurposes,
    onboardingLanguage = locale.language,
  }: Props<Purpose>,
  externalRef: ForwardedRef<SupportingDocumentRef>,
) => {
  const initialValues = useMemo(
    () =>
      documents.reduce<Partial<FormValues<Purpose>>>((acc, doc) => {
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

  const { Field, setFieldValue, getFieldState, listenFields, submitForm } = useForm<
    FormValues<Purpose>
  >(
    requiredDocumentPurposes.reduce<FormConfig<FormValues<Purpose>>>(
      (acc, purpose) => ({
        ...acc,
        [purpose]: {
          initialValue: initialValues[purpose] ?? [],
          validate: validateNotEmpty,
        },
      }),
      {} as FormConfig<FormValues<Purpose>>,
    ),
  );

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
    const removeListener = listenFields(requiredDocumentPurposes, state => {
      let documents: Document<Purpose>[] = [];

      Dict.entries(state).forEach(([key, { value: values = [] }]) => {
        documents = [
          ...documents,
          ...values.map(v => ({
            id: v.id,
            name: v.name,
            downloadUrl: v.fileUrl,
            purpose: key,
          })),
        ];
      });

      onChange?.(documents);
    });

    return () => removeListener();
  }, [listenFields, onChange, requiredDocumentPurposes]);

  const handleUpload = (files: File[], fieldName: Purpose) => {
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
                    error: t("supportingDocuments.errorUpload"),
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
                      error: t("supportingDocuments.errorUpload"),
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
                  error: t("supportingDocuments.errorUpload"),
                }
              : uploadState,
          ),
        );
      });
  };

  return (
    <Form>
      {requiredDocumentPurposes.map(purpose => {
        return (
          <Fragment key={purpose}>
            <LakeLabel
              label={getSupportingDocumentPurposeLabel(purpose)}
              help={match(purpose as string)
                .with("PowerOfAttorney", () => (
                  <Help
                    type="button"
                    label={t("supportingDocuments.help.whatIsThis")}
                    onPress={() => setShowPowerOfAttorneyModal(true)}
                  />
                ))
                .with("SwornStatement", () => (
                  <Help
                    type="button"
                    label={t("supportingDocuments.help.whatIsThis")}
                    onPress={() => setShowSwornStatementModal(true)}
                  />
                ))
                .otherwise(() => {
                  const label = getSupportingDocumentPurposeDescriptionLabel(purpose);
                  return isNotNullishOrEmpty(label) ? <Help type="tooltip" text={label} /> : null;
                })}
              render={() => (
                <Field name={purpose}>
                  {({ value, onChange, error }) => (
                    <UploadArea
                      layout="horizontal"
                      error={error}
                      onDropAccepted={files => {
                        onChange([...value, { id: NO_ID_YET, status: "uploading", progress: 0 }]);
                        handleUpload(files, purpose);
                      }}
                      documents={value}
                      accept={ACCEPTED_FORMATS}
                      icon="document-regular"
                      description={t("supportingDocuments.documentTypes", {
                        maxSizeMB: MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE_MB,
                      })}
                      maxSize={MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE}
                    />
                  )}
                </Field>
              )}
            />

            <Space height={24} />
          </Fragment>
        );
      })}

      {requiredDocumentPurposes.length === 0 ? (
        <>
          <Space height={24} />
          <LakeText>{t("supportingDocuments.noRequiredDocuments")}</LakeText>
          <Space height={24} />
        </>
      ) : null}

      <LakeModal
        visible={showPowerOfAttorneyModal}
        title={t("supportingDocuments.powerOfAttorneyModal.title")}
        icon="document-regular"
        onPressClose={() => setShowPowerOfAttorneyModal(false)}
      >
        <LakeText>{t("supportingDocuments.powerOfAttorneyModal.description")}</LakeText>
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
            {t("supportingDocuments.downloadTemplate")}
          </LakeButton>
        </LakeButtonGroup>
      </LakeModal>

      <LakeModal
        visible={showSwornStatementModal}
        title={t("supportingDocuments.purpose.SwornStatement")}
        icon="document-regular"
        onPressClose={() => setShowSwornStatementModal(false)}
      >
        <LakeText>{t("supportingDocuments.purpose.SwornStatement.description")}</LakeText>
        <Space height={16} />

        <LakeButtonGroup paddingBottom={0}>
          <LakeButton
            grow={true}
            color="current"
            onPress={() => window.open("/sworn-statement-template/es.pdf")}
          >
            {t("supportingDocuments.downloadTemplate")}
          </LakeButton>
        </LakeButtonGroup>
      </LakeModal>
    </Form>
  );
};

export const SupportingDocument = forwardRef(SupportingDocumentWithRef) as <I extends string>(
  props: Props<I> & { ref?: ForwardedRef<SupportingDocumentRef> },
) => ReturnType<typeof SupportingDocumentWithRef>;
