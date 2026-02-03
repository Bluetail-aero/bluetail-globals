/*
  Constants for file processing log event names used for pipeline performance tracking.

  CHANGE HISTORY:
    2026.02.02 - Create these constants.
*/

/** Constants for file processing log event names (pipeline performance tracking) */
export const FILE_PROCESSING_EVENTS = {
  // Upload
  UPLOAD_COMPLETE: 'UPLOAD_COMPLETE',

  // Metadata stage
  METADATA_START: 'METADATA_START',
  METADATA_END: 'METADATA_END',

  // Homogenization stage
  HOMOGENIZATION_QUEUED: 'HOMOGENIZATION_QUEUED',
  HOMOGENIZATION_START: 'HOMOGENIZATION_START',
  HOMOGENIZATION_END: 'HOMOGENIZATION_END',

  // Textract stage
  TEXTRACT_START: 'TEXTRACT_START',
  TEXTRACT_RESULTS: 'TEXTRACT_RESULTS',
  TEXTRACT_END: 'TEXTRACT_END',

  // OpenSearch indexing
  INDEX_START: 'INDEX_START',
  INDEX_END: 'INDEX_END',

  // Mach Searchable milestone (first index with OCR)
  MACH_SEARCHABLE: 'MACH_SEARCHABLE',

  // BADASS stage
  BADASS_QUEUED: 'BADASS_QUEUED',
  BADASS_START: 'BADASS_START',
  BADASS_END: 'BADASS_END',

  // BADASS Complete milestone
  BADASS_COMPLETE: 'BADASS_COMPLETE',
} as const;
export type FileProcessingEvent = (typeof FILE_PROCESSING_EVENTS)[keyof typeof FILE_PROCESSING_EVENTS];
