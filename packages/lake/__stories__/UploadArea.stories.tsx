import { Meta } from "@storybook/react";
import { UploadArea, UploadFileStatus } from "@swan-io/shared-business/src/components/UploadArea";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  storyPart: {
    maxWidth: 600,
  },
});

const ACCEPTED_FORMATS = ["application/pdf", "image/png", "image/jpeg"];

export default {
  title: "Forms/UploadArea",
  component: UploadArea,
} as Meta<typeof UploadArea>;

type StoryArgs = {
  layout: "vertical" | "horizontal";
};

export const Variations = ({ layout }: StoryArgs) => {
  return (
    <StoryBlock
      title="UploadArea"
      description="You check design with vertical and horizontal layout, you can edit it in 'Controls' panel. (Press A to open it)"
    >
      <StoryPart title="Default" style={styles.storyPart}>
        <UploadArea icon="document-regular" layout={layout} accept={ACCEPTED_FORMATS} />
      </StoryPart>

      <StoryPart title="With custom icon" style={styles.storyPart}>
        <UploadArea icon="image-regular" layout={layout} accept={ACCEPTED_FORMATS} />
      </StoryPart>

      <StoryPart title="With description" style={styles.storyPart}>
        <UploadArea
          icon="document-regular"
          layout={layout}
          accept={ACCEPTED_FORMATS}
          description="Supported documents: .pdf, .png, .jpg"
        />
      </StoryPart>

      <StoryPart title="With error" style={styles.storyPart}>
        <UploadArea
          icon="document-regular"
          layout={layout}
          accept={ACCEPTED_FORMATS}
          description="Supported documents: .pdf, .png, .jpg"
          error="This document is required"
        />
      </StoryPart>

      <StoryPart title="Disabled" style={styles.storyPart}>
        <UploadArea
          icon="document-regular"
          layout={layout}
          accept={ACCEPTED_FORMATS}
          description="Supported documents: .pdf, .png, .jpg"
          disabled={true}
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const WithOneFile = ({ layout }: StoryArgs) => {
  return (
    <StoryBlock
      title="UploadArea with one file"
      description="Here is different file icons depending on file extension"
    >
      <StoryPart title="PDF" style={styles.storyPart}>
        <UploadArea
          icon="document-regular"
          layout={layout}
          accept={ACCEPTED_FORMATS}
          // @ts-expect-error we don't need more field for UploadArea
          value={{
            name: "document.pdf",
            size: 1000,
            type: "application/pdf",
          }}
        />
      </StoryPart>

      <StoryPart title="PNG" style={styles.storyPart}>
        <UploadArea
          icon="document-regular"
          layout={layout}
          accept={ACCEPTED_FORMATS}
          // @ts-expect-error we don't need more field for UploadArea
          value={{
            name: "document.png",
            size: 1000,
            type: "image/png",
          }}
        />
      </StoryPart>

      <StoryPart title="JPG" style={styles.storyPart}>
        <UploadArea
          icon="document-regular"
          layout={layout}
          accept={ACCEPTED_FORMATS}
          // @ts-expect-error we don't need more field for UploadArea
          value={{
            name: "document.jpg",
            size: 1000,
            type: "image/jpeg",
          }}
        />
      </StoryPart>

      <StoryPart title="XLS" style={styles.storyPart}>
        <UploadArea
          icon="document-regular"
          layout={layout}
          accept={ACCEPTED_FORMATS}
          // @ts-expect-error we don't need more field for UploadArea
          value={{
            name: "document.xls",
            size: 1000,
            type: "application/vnd.ms-excel",
          }}
        />
      </StoryPart>

      <StoryPart title="Unknown" style={styles.storyPart}>
        <UploadArea
          icon="document-regular"
          layout={layout}
          accept={ACCEPTED_FORMATS}
          // @ts-expect-error we don't need more field for UploadArea
          value={{
            name: "document.unknown",
            size: 1000,
            type: "unknown",
          }}
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const WithSeveralDocuments = ({ layout }: StoryArgs) => {
  const documents: UploadFileStatus[] = [
    {
      id: "1",
      name: "first-document.pdf",
      status: "finished",
    },
    {
      id: "2",
      name: "second-document.png",
      status: "finished",
    },
    {
      id: "3",
      name: "third-document.jpg",
      status: "finished",
    },
    {
      id: "4",
      name: "fourth-document.xls",
      status: "finished",
    },
    {
      id: "5",
      name: "last-document.png",
      progress: 60,
      status: "uploading",
    },
  ];
  return (
    <StoryBlock title="UploadArea with several documents">
      <StoryPart title="" style={styles.storyPart}>
        <UploadArea
          icon="document-regular"
          layout={layout}
          accept={ACCEPTED_FORMATS}
          documents={documents}
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const Interactive = ({ layout }: StoryArgs) => {
  const [documents, setDocuments] = useState<UploadFileStatus[]>([]);
  const [file, setFile] = useState<File>();

  const addDocuments = (files: File[]) => {
    const newDocuments: UploadFileStatus[] = files.map((file, index) => ({
      id: (new Date().getTime() + index).toString(),
      name: file.name,
      status: "finished",
    }));
    setDocuments(currentDocuments => [...currentDocuments, ...newDocuments]);
  };

  const removeDocument = (fileId: string) => {
    setDocuments(currentDocuments => currentDocuments.filter(d => d.id !== fileId));
  };

  const selectFile = (files: File[]) => {
    setFile(files[0]);
  };

  const removeFile = () => {
    setFile(undefined);
  };

  return (
    <StoryBlock
      title="Interactive UploadArea"
      description="You can try to select files, drag and drop and remove selected files."
    >
      <StoryPart title="With several documents" style={styles.storyPart}>
        <UploadArea
          icon="document-regular"
          layout={layout}
          accept={ACCEPTED_FORMATS}
          documents={documents}
          onDropAccepted={addDocuments}
          onRemoveFile={removeDocument}
        />
      </StoryPart>

      <StoryPart title="With one file" style={styles.storyPart}>
        <UploadArea
          icon="document-regular"
          layout={layout}
          accept={ACCEPTED_FORMATS}
          value={file}
          onDropAccepted={selectFile}
          onDropRejected={removeFile}
        />
      </StoryPart>
    </StoryBlock>
  );
};
