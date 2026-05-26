import { describe, expect, it } from "vitest";
import { getIconNameFromFilename } from "../file";

describe("getIconNameFromFilename returns the file type icon based on filename", () => {
  it("returns lake-document-png for a .png file", () => {
    expect(getIconNameFromFilename("photo.png")).toBe("lake-document-png");
  });

  it("returns lake-document-xls for a .xls file", () => {
    expect(getIconNameFromFilename("sheet.xls")).toBe("lake-document-xls");
  });

  it("returns lake-document-pdf for a .pdf file", () => {
    expect(getIconNameFromFilename("report.pdf")).toBe("lake-document-pdf");
  });

  it("returns lake-document-jpg for a .jpg file", () => {
    expect(getIconNameFromFilename("photo.jpg")).toBe("lake-document-jpg");
  });

  it("is case-insensitive on the extension", () => {
    expect(getIconNameFromFilename("REPORT.PDF")).toBe("lake-document-pdf");
  });

  it("uses the last extension when the filename contains multiple dots", () => {
    expect(getIconNameFromFilename("archive.tar.pdf")).toBe("lake-document-pdf");
  });

  it("returns document-regular for an unknown extension", () => {
    expect(getIconNameFromFilename("notes.txt")).toBe("document-regular");
  });

  it("returns document-regular for a filename with no extension", () => {
    expect(getIconNameFromFilename("README")).toBe("document-regular");
  });

  it("returns document-regular for an empty filename", () => {
    expect(getIconNameFromFilename("")).toBe("document-regular");
  });
});
