/*
  CHANGE HISTORY:
    2025.05.28 - Reorganize all constants.
*/

/** Enum defining the possible values of juf.delete_status */
export const DELETE_STATUS = {
  /** Used when the JUF record has been created, but the upload has not been committed/confirmed. Files in this state are not considered a complete upload. */
  PENDING: -1,
  /** The file is active */
  ACTIVE: 0,
  /** The file is archived (deleted) */
  ARCHIVED: 1
} as const;
/** Enum defining the possible values of juf.delete_status */
export type DeleteStatus = (typeof DELETE_STATUS)[keyof typeof DELETE_STATUS];
