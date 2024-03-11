import { Meta } from "@storybook/react";
import { Future, Result } from "@swan-io/boxed";
import { FilesUploader } from "@swan-io/shared-business/src/components/FilesUploader";
import { SwanFile } from "@swan-io/shared-business/src/utils/SwanFile";
import { StyleSheet } from "react-native";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  storyPart: {
    maxWidth: 600,
  },
});

const ACCEPTED_FORMATS = ["application/pdf", "image/png", "image/jpeg", "image/svg+xml"];

export default {
  title: "Forms/FilesUploader",
  component: FilesUploader,
} as Meta<typeof FilesUploader>;

let idCounter = 0;

export const WithSeveralDocuments = () => {
  const documents: SwanFile[] = [
    {
      id: String(++idCounter),
      name: "first-document.pdf",
      url: "https://swan.io",
      statusInfo: { status: "Validated" },
    },
    {
      id: String(++idCounter),
      name: "second-document.png",
      statusInfo: { status: "Pending" },
    },
    {
      id: String(++idCounter),
      name: "third-document.jpg",
      statusInfo: { status: "Refused", reason: "Quality of the document was too low" },
    },
    {
      id: String(++idCounter),
      name: "fourth-document.xls",
      statusInfo: { status: "Uploaded" },
    },
    {
      id: String(++idCounter),
      name: "last-document.png",
      statusInfo: { status: "Uploaded" },
    },
  ];
  return (
    <StoryBlock title="UploadArea with several documents">
      <StoryPart title="" style={styles.storyPart}>
        <FilesUploader
          maxSize={20_000_000}
          icon="document-regular"
          accept={ACCEPTED_FORMATS}
          initialFiles={documents}
          getUploadConfig={() => {}}
          generateUpload={() => Future.value(Result.Ok({ id: String(++idCounter), upload: {} }))}
          onRemoveFile={() =>
            Future.make<Result<unknown, unknown>>(resolve => {
              setTimeout(() => resolve(Result.Ok(undefined)), 1_000);
            })
          }
          uploadFile={({ onLoadStart, onProgress }) => {
            return Future.make<Result<unknown, unknown>>(resolve => {
              onLoadStart({
                loaded: 0,
                total: 1000,
              } as ProgressEvent<XMLHttpRequestEventTarget>);
              setTimeout(
                () =>
                  onProgress({
                    loaded: 100,
                    total: 1000,
                  } as ProgressEvent<XMLHttpRequestEventTarget>),
                100,
              );
              setTimeout(
                () =>
                  onProgress({
                    loaded: 600,
                    total: 1000,
                  } as ProgressEvent<XMLHttpRequestEventTarget>),
                500,
              );
              setTimeout(() => {
                resolve(Result.Ok(undefined));
              }, 1_000);
            });
          }}
          formatAndSizeDescription={"20MB max"}
        />
      </StoryPart>
    </StoryBlock>
  );
};
