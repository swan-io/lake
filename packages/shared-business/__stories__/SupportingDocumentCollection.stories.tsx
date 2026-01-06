import { Meta } from "@storybook/react";
import { Future, Option, Result } from "@swan-io/boxed";
import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { NetworkError, Response, TimeoutError } from "@swan-io/request";
import { useRef, useState } from "react";
import {
  Document,
  SupportingDocumentCollection,
  SupportingDocumentCollectionRef,
  UploadOutput,
} from "../src/components/SupportingDocumentCollection";
import { UploadFileInput, UploadOutputWithId } from "../src/hooks/useFilesUploader";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Onboarding/SupportingDocumentCollection",
  component: SupportingDocumentCollection,
} as Meta<typeof SupportingDocumentCollection>;

const generateUpload = () =>
  Future.make<Result<UploadOutputWithId<UploadOutput>, unknown>>(resolve => {
    setTimeout(() => {
      resolve(
        Result.Ok({
          id: crypto.randomUUID(),
          upload: {
            url: window.location.href,
            fields: [],
          },
        }),
      );
    }, 500);
  });

const uploadFile = (_config: UploadFileInput<UploadOutput>) =>
  Future.make<Result<Response<string>, NetworkError | TimeoutError>>(resolve => {
    setTimeout(() => {
      resolve(
        Result.Ok({
          headers: new Headers(),
          status: 200,
          ok: true,
          url: "",
          response: Option.None(),
        }),
      );
    }, 500);
  });

export const WaitingForDocument = () => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  const ref = useRef<SupportingDocumentCollectionRef<string>>(null);

  return (
    <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection
          ref={ref}
          status="WaitingForDocument"
          generateUpload={generateUpload}
          uploadFile={uploadFile}
          documents={documents}
          onChange={setDocuments}
          requiredDocumentPurposes={[
            "CompanyRegistration",
            "ProofOfIdentity",
            "SwornStatement",
            "PowerOfAttorney",
            "UnknownDocumentType",
          ]}
          getPurposeMetadata={purpose => ({
            title: "Show metadata",
            values: [
              {
                title: "Purpose",
                value: purpose,
              },
              {
                title: "ID",
                value: "666",
                type: "copy",
              },
              {
                title: "Lorem ipsum",
                value: "dolor sit amet",
              },
            ],
          })}
        />

        <LakeButton
          onPress={() => {
            if (ref.current != null) {
              ref.current.addDocument({
                purpose: "UltimateBeneficialOwnerProofOfAddress",
                file: {
                  id: crypto.randomUUID(),
                  name: "toto.jpg",
                  statusInfo: { status: "Uploaded" },
                },
              });
            }
          }}
        >
          Add other document from outside
        </LakeButton>
      </StoryPart>
    </StoryBlock>
  );
};

export const WaitingForDocumentShowIds = () => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);

  return (
    <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection
          status="WaitingForDocument"
          generateUpload={generateUpload}
          uploadFile={uploadFile}
          documents={documents}
          onChange={setDocuments}
          requiredDocumentPurposes={[
            "CompanyRegistration",
            "ProofOfIdentity",
            "SwornStatement",
            "PowerOfAttorney",
            "UnknownDocumentType",
          ]}
          showIds={true}
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const WaitingForDocumentWithApprovedAndRejected = () => {
  const [documents, setDocuments] = useState<Document<string>[]>([
    {
      purpose: "CompanyRegistration",
      file: {
        id: "id",
        name: "CompanyRegistration.pdf",
        statusInfo: { status: "Validated" },
      },
    },
    {
      purpose: "ProofOfIdentity",
      file: {
        id: "id",
        name: "IdCard.pdf",
        statusInfo: { status: "Validated" },
      },
    },
    {
      purpose: "SwornStatement",
      file: {
        id: "sworn",
        name: "SwornStatement.pdf",
        statusInfo: { status: "Uploaded" },
      },
    },
    {
      purpose: "PowerOfAttorney",
      file: {
        id: "power",
        name: "power.pdf",
        url: "https://swan.io",
        statusInfo: { status: "Refused", reason: "Invalid document" },
      },
    },
  ]);
  return (
    <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection
          status="WaitingForDocument"
          generateUpload={generateUpload}
          uploadFile={uploadFile}
          documents={documents}
          onChange={setDocuments}
          requiredDocumentPurposes={[
            "CompanyRegistration",
            "ProofOfIdentity",
            "SwornStatement",
            "PowerOfAttorney",
            "UnknownDocumentType",
          ]}
          onRemoveFile={() =>
            Future.make(resolve => {
              setTimeout(() => {
                resolve(Result.Ok(undefined));
              }, 1_000);
            })
          }
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const Pending = () => {
  return (
    <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection
          status="PendingReview"
          generateUpload={generateUpload}
          uploadFile={uploadFile}
          documents={[
            {
              purpose: "ProofOfIdentity",
              file: {
                id: "id",
                name: "IdCard.pdf",
                url: "https://swan.io",
                statusInfo: { status: "Pending" },
              },
            },
          ]}
          requiredDocumentPurposes={["ProofOfIdentity"]}
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const Approved = () => {
  return (
    <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection
          status="Approved"
          generateUpload={generateUpload}
          uploadFile={uploadFile}
          documents={[
            {
              purpose: "ProofOfIdentity",
              file: {
                id: "id",
                name: "IdCard.pdf",
                url: "https://swan.io",
                statusInfo: { status: "Validated" },
              },
            },
          ]}
          requiredDocumentPurposes={["ProofOfIdentity"]}
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const ApprovedWithoutDownload = () => {
  return (
    <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection
          status="Approved"
          generateUpload={generateUpload}
          uploadFile={uploadFile}
          documents={[
            {
              purpose: "ProofOfIdentity",
              file: {
                id: "id",
                name: "IdCard.pdf",
                statusInfo: { status: "Validated" },
              },
            },
          ]}
          requiredDocumentPurposes={["ProofOfIdentity"]}
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const Rejected = () => {
  return (
    <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection
          status="Rejected"
          generateUpload={generateUpload}
          uploadFile={uploadFile}
          documents={[
            {
              purpose: "ProofOfIdentity",
              file: {
                id: "id",
                name: "IdCard.pdf",
                url: "https://swan.io",
                statusInfo: { status: "Refused", reason: "Invalid document" },
              },
            },
          ]}
          requiredDocumentPurposes={["ProofOfIdentity"]}
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const ReadOnlyEmpty = () => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return (
    <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection
          status="WaitingForDocument"
          generateUpload={generateUpload}
          uploadFile={uploadFile}
          documents={documents}
          onChange={setDocuments}
          requiredDocumentPurposes={[]}
          showIds={true}
          readOnly={true}
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const ReadOnlyWithDocs = () => {
  return (
    <StoryBlock title="WaitingForDocumentShowIds" description="Supporting document collection">
      <StoryPart title="Default">
        <SupportingDocumentCollection
          status="WaitingForDocument"
          generateUpload={generateUpload}
          uploadFile={uploadFile}
          documents={[
            {
              purpose: "ProofOfIdentity",
              file: {
                id: "id",
                name: "IdCard.pdf",
                url: "https://swan.io",
                statusInfo: {
                  status: "Refused",
                  reason: "Invalid document",
                  reasonCode: "InvalidDocument",
                },
              },
            },
          ]}
          onChange={() => {}}
          requiredDocumentPurposes={[]}
          showIds={true}
          readOnly={true}
        />
      </StoryPart>
    </StoryBlock>
  );
};
