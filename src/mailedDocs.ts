/*

  CHANGE HISTORY:
    2025.02.07 - Converting this package to use typescript.
               - Spun this module off from the main 'constants' module.
    2025.02.21 - Added DUPLICATE to MAILED_DOC_STATUS.
    2025.02.27 - Added SMALL_IMAGE to MAILED_DOC_STATUS.
    2025.03.27 - Renaming SMALL_IMAGE to EMAIL_SIGNATURE in MAILED_DOC_STATUS.

  TODOS:
    -
*/

/** Enum defining the supported statuses for an imported email document */
export const MAILED_DOC_STATUS = {
  PENDING: 0,
  COMPLETE: 1,
  UNIDENTIFIED: 2,
  FAILED: -1,
  BLOCKED_SENDER: -2,
  NO_ATTACHMENTS: -3,
  DUPLICATE: -4,
  EMAIL_SIGNATURE: -5, // Use this instead of SMALL_IMAGE
  SMALL_IMAGE: -5,
} as const;
export type MailedDocStatus = (typeof MAILED_DOC_STATUS)[keyof typeof MAILED_DOC_STATUS];

/** Enum defining the types of reply the system can send to people who emailed us documents */
export const MAILED_REPLY_SENDING_TYPES = {
  DO_NOT_SEND_USER_REPLY: 0,
  EMAIL_TO_USER_SUCESSMSG: 1,
  EMAIL_TO_CS: 2,
  EMAIL_TO_BLOCKED_USER: 3,
  EMAIL_TO_USER_FOR_DELAY: 4,
  EMAIL_TO_USER_FOR_SYNTAX: 5,
  EMAIL_TO_USER_FOR_DEACTIVATED_AIRCRAFT: 6,
} as const;
export type MailedReplySendingType = (typeof MAILED_REPLY_SENDING_TYPES)[keyof typeof MAILED_REPLY_SENDING_TYPES];