/*
  CHANGE HISTORY:
    2025.05.28 - Reorganize all constants.
*/

/** Enum defining the possible MACH outcomes for a file. */
export const TEXTRACT_STATUS = {
  /** Initial (default) value when file is uploaded */
  PENDING: 0,
  /** Indicates that Textract processing is successfully complete. In UI we will show M icon for file. */
  COMPLETE: 1,
  /** Indicates there was an error when we tried to process the file */
  ERROR: -1,
  /** Indicates that Textract not supported for this file type */
  NOT_SUPPORTED: -2,
  /** Indicates that this file should not be mach searched (or textracted) */
  NO_TEXTRACT: -3,
} as const;
/** Enum defining the possible Textract outcomes for a file. */
export type TextractStatus = (typeof TEXTRACT_STATUS)[keyof typeof TEXTRACT_STATUS];

/** Enum defining the possible MACH-processing outcomes for a file.
 * TEXTRACT_STATUS tells us the outcome of the operation overall, this field helps us know when a file is in-progress. */
export const MACH_STATUS = {
  /** Initial (default) value when file is uploaded */
  PENDING: 0,
  /** Indicates that Textract processing has begun. Essentially this means "PENDING". In UI we will show pending status for file. */
  BEGUN: 1
} as const;
/** Enum defining the possible MACH outcomes for a file. */
export type MachStatus = (typeof MACH_STATUS)[keyof typeof MACH_STATUS];

/**
 * Backfill status values used when backfilling Textract data into MongoDB.
 */
export const MONGO_TEXTRACT_BACKFILL_STATUS = {
  TODO: 0,
  DONE: 1,
  NOTHING_TO_DO: -2,
  FAILED: -1
} as const;
export type MongoTextractBackfillStatus = typeof MONGO_TEXTRACT_BACKFILL_STATUS[keyof typeof MONGO_TEXTRACT_BACKFILL_STATUS];
