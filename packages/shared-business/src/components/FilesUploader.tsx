import { Future, Result } from "@swan-io/boxed";
import { Box } from "@swan-io/lake/src/components/Box";
import { IconName } from "@swan-io/lake/src/components/Icon";
import { Space } from "@swan-io/lake/src/components/Space";
import {
  ForwardedRef,
  Fragment,
  Ref,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
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
  showIds?: boolean;
};

export type FilesUploaderRef = {
  add: (file: SwanFile) => void;
};

const FilesUploaderWithRef = <UploadInput, UploadOutput, GenerateUploadError, UploadFileError>(
  {
    maxSize,
    accept,
    icon,
    getUploadConfig,
    onRemoveFile,
    onChange,
    formatAndSizeDescription,
    canUpload = true,
    showIds = false,
    ...config
  }: Props<UploadInput, UploadOutput, GenerateUploadError, UploadFileError>,
  ref: Ref<FilesUploaderRef>,
) => {
  const { files, upload, remove, add } = useFilesUploader(config);

  // Keep the `onChange` callback as a ref to avoid running the effect
  // every time the function updates
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const isFirstRender = useRef(true);

  useImperativeHandle(ref, () => ({
    add,
  }));

  useEffect(() => {
    // Avoid calling `onChange` on first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const onChange = onChangeRef.current;
    if (onChange != null) {
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
            showId={showIds}
            onRemove={
              onRemoveFile != null && file.statusInfo.status === "Uploaded"
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

export const FilesUploader = forwardRef(FilesUploaderWithRef) as <
  UploadInput,
  UploadOutput,
  GenerateUploadError,
  UploadFileError,
>(
  props: Props<UploadInput, UploadOutput, GenerateUploadError, UploadFileError> & {
    ref?: ForwardedRef<FilesUploaderRef>;
  },
) => ReturnType<typeof FilesUploaderWithRef>;
