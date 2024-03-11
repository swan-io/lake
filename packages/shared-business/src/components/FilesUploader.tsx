import { Future, Result } from "@swan-io/boxed";
import { Box } from "@swan-io/lake/src/components/Box";
import { IconName } from "@swan-io/lake/src/components/Icon";
import { Space } from "@swan-io/lake/src/components/Space";
import { Fragment, useEffect, useRef } from "react";
import { Config, useFilesUploader } from "../hooks/useFilesUploader";
import { SwanFile } from "../utils/SwanFile";
import { FileInput } from "./FileInput";
import { FileTile } from "./FileTile";

type Props<UploadInput, UploadOutput, GenerateUploadError, UploadFileError> = Config<
  UploadInput,
  UploadOutput,
  GenerateUploadError,
  UploadFileError
> & {
  getUploadConfig: (file: File) => UploadInput;
  accept: string[];
  maxSize: number;
  icon: IconName;
  formatAndSizeDescription?: string;
  onRemoveFile?: (file: SwanFile) => Future<Result<unknown, unknown>>;
  onChange?: (files: SwanFile[]) => void;
  canUpload?: boolean;
};

export const FilesUploader = <UploadInput, UploadOutput, GenerateUploadError, UploadFileError>({
  maxSize,
  accept,
  icon,
  getUploadConfig,
  onRemoveFile,
  onChange,
  formatAndSizeDescription,
  canUpload = true,
  ...config
}: Props<UploadInput, UploadOutput, GenerateUploadError, UploadFileError>) => {
  const { files, upload, remove } = useFilesUploader(config);

  // Keep the `onChange` callback as a ref to avoid running the effect
  // every time the function updates
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Avoid calling `onChange` on first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const onChange = onChangeRef.current;
    if (onChange != undefined) {
      onChange(files);
    }
  }, [files]);

  return (
    <Box>
      {canUpload ? (
        <>
          <FileInput
            layout="horizontal"
            onFiles={files => {
              files.forEach(file => {
                upload(getUploadConfig(file), file);
              });
            }}
            accept={accept}
            icon={icon}
            description={formatAndSizeDescription}
            maxSize={maxSize}
          />

          <Space height={12} />
        </>
      ) : null}

      {files.map((file, index) => (
        <Fragment key={file.id}>
          {index > 0 ? <Space height={12} /> : null}

          <FileTile
            file={file}
            onRemove={
              onRemoveFile != undefined && file.statusInfo.status === "Uploaded"
                ? () =>
                    onRemoveFile(file).tapOk(() => {
                      remove(file.id);
                    })
                : undefined
            }
          />
        </Fragment>
      ))}
    </Box>
  );
};
