/*
  CHANGE HISTORY:
    2025.05.28 - Reorganize all constants.
*/

/** Enum defining the possible form_status outcomes for a file. */
export const FORM_STATUS = {
  /** Failed, unspecific reason. */
  FAILED: -1,

  /** Initial (default) value when file is uploaded. */
  PENDING: 0,

  /** Successful completion (found a form_type). */
  COMPLETED: 1,

  /** No action needed (form_type not found). */
  NOTHING_FOUND: 2
} as const;
/** Enum defining the possible form status outcomes for a file. */
export type FormStatus = (typeof FORM_STATUS)[keyof typeof FORM_STATUS];


/** Enum defining the possible form_date_status outcomes for a file. */
export const FORM_DATE_STATUS = {
  /** Failed, unspecific reason. */
  FAILED: -1,

  /** Initial (default) value when file is uploaded. */
  PENDING: 0,

  /** Successful completion (found a form_date). */
  COMPLETED: 1,

  /** No action needed (form_date not found). */
  NOTHING_FOUND: 2
} as const;
/** Enum defining the possible form date status outcomes for a file. */
export type FormDateStatus = (typeof FORM_DATE_STATUS)[keyof typeof FORM_DATE_STATUS];
