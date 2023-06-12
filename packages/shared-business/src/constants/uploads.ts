export const MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE_MB = 20;

// just below 20MB (* 1000 instead of * 1024) in bytes to account for the rest of the payload
export const MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE =
  MAX_SUPPORTING_DOCUMENT_UPLOAD_SIZE_MB * 1000 * 1000;
