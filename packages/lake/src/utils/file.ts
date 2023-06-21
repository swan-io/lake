import { match } from "ts-pattern";
import type { IconName } from "../components/Icon";

export const getIconNameFromFilename = (filename: string): IconName => {
  const ext = filename.split(".").pop()?.toLowerCase();

  return match(ext)
    .returnType<IconName>()
    .with("png", () => "lake-document-png")
    .with("xls", () => "lake-document-xls")
    .with("pdf", () => "lake-document-pdf")
    .with("jpg", () => "lake-document-jpg")
    .otherwise(() => "document-regular");
};
