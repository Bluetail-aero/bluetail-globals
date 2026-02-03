/*
  CHANGE HISTORY:
    2025.05.28 - Reorganize all constants.
*/

/** Enum defining the possible BADASS outcomes for a file. */
export const FILE_BADASS_STATUS = {
  /** Failed, because the file contains no OCR data.. */
  NO_OCR_DATA: -8,
  /** Failed, because the PDF was corrupt or encrypted. */
  ENCRYPTED_PDF: -7,
  /** Failed, because we don't know how many pages the PDF contains. */
  PAGE_COUNT_NULL: -6,
  /** Failed, because a doc_master record for the file could not be found. */
  DOC_MASTER_ID_UNKNOWN: -5,
  /** Failed, because the object could not be loaded from S3. */
  FAILED_TO_LOAD: -4,
  /** Failed, because the object was not found on S3. */
  OBJECT_NOT_FOUND: -3,
  /** Failed, because the files type is not supported. */
  NOT_SUPPORTED: -2,
  /** Failed, unspecific reason. */
  FAILED: -1,

  /** Process is pending or in-progress. */
  PENDING: 0,

  /** Successful completion. */
  COMPLETED: 1,
} as const;
/** Enum defining the possible BADASS outcomes for a file. */
export type FileBadassStatus = (typeof FILE_BADASS_STATUS)[keyof typeof FILE_BADASS_STATUS];
