import { Future, Result } from "@swan-io/boxed";
import { useCallback, useState } from "react";
import { SwanFile } from "../utils/SwanFile";

export type UploadFileInput<UploadOutput> = {
  id: string;
  upload: UploadOutput;
  file: File;
  onLoadStart: (event: ProgressEvent<XMLHttpRequestEventTarget>) => void;
  onProgress: (event: ProgressEvent<XMLHttpRequestEventTarget>) => void;
};

export type UploadOutputWithId<UploadOutput> = { id: string; upload: UploadOutput };

export type Config<UploadInput, UploadOutput, GenerateUploadError, UploadFileError> = {
  initialFiles: SwanFile[];
  // Takes a configuration and outputs the needed input for the actual upload
  // It also provides an ID that's required to keep track of the file
  generateUpload: (
    config: UploadInput,
  ) => Future<Result<UploadOutputWithId<UploadOutput>, GenerateUploadError>>;
  // Effectively uploads the file
  uploadFile: (config: UploadFileInput<UploadOutput>) => Future<Result<unknown, UploadFileError>>;
  onError?: (error: GenerateUploadError | UploadFileError) => void;
};

export const useFilesUploader = <UploadInput, UploadOutput, GenerateUploadError, UploadFileError>(
  config: Config<UploadInput, UploadOutput, GenerateUploadError, UploadFileError>,
) => {
  const [files, setFiles] = useState(config.initialFiles);

  const add = useCallback((fileToAdd: SwanFile) => {
    setFiles(files => {
      if (files.some(item => item.id === fileToAdd.id)) {
        return files.map(item => (item.id === fileToAdd.id ? fileToAdd : item));
      } else {
        return [...files, fileToAdd];
      }
    });
  }, []);

  const upload = useCallback(
    (uploadInput: UploadInput, file: File) => {
      return config
        .generateUpload(uploadInput)
        .tapError(error => {
          if (config.onError != undefined) {
            config.onError(error);
          }
        })
        .flatMapOk(({ upload, id }) => {
          setFiles(files => [
            ...files.filter(file => file.id !== id),
            {
              id,
              statusInfo: { status: "Uploading", progress: 0 },
              name: file.name,
            },
          ]);

          const onProgress = (event: ProgressEvent<XMLHttpRequestEventTarget>) => {
            setFiles(files =>
              files.map(file => {
                if (file.id !== id) {
                  return file;
                }
                return {
                  ...file,
                  statusInfo: { status: "Uploading", progress: event.loaded / event.total },
                };
              }),
            );
          };

          return config
            .uploadFile({
              id,
              upload,
              file,
              onLoadStart: onProgress,
              onProgress,
            })
            .tapOk(() => {
              setFiles(files =>
                files.map(file => {
                  if (file.id !== id) {
                    return file;
                  }
                  return {
                    ...file,
                    statusInfo: { status: "Uploaded" },
                  };
                }),
              );
            })
            .tapError(error => {
              if (config.onError != undefined) {
                config.onError(error);
              }
              setFiles(files => files.filter(file => file.id !== id));
            });
        });
    },
    [config],
  );

  const remove = useCallback((id: string) => {
    setFiles(files => files.filter(file => file.id !== id));
  }, []);

  return {
    files,
    upload,
    remove,
    add,
  };
};
