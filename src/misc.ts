/*
  CHANGE HISTORY:
    2025.05.28 - Reorganize all constants.
*/

/** Generic error message to be used when an IDK error occurs.*/
export const GENERIC_ERROR_MESSAGE: string = `
*Well, this is awkward.*
**We're having trouble completing your request.**
Need help now? Email us at <support@bluetail.aero>
`;

export const SYSTEM_USER_ID = 0;

/** Enum defining the system's supported tracked-event types */
export const TRACKING_TYPES = {
  UPLOAD: 1,
  DOWNLOAD: 2,
  EMAILED: 3,
  PRINTED: 4,
  SHARED: 5,
} as const;
export type TrackingType = (typeof TRACKING_TYPES)[keyof typeof TRACKING_TYPES];

/** Enum defining the types of notifications the system can send */
export const NOTIFICATION_TYPES = { // TODO: These are inconsistently used throughout the backend (find "notify_type", check and replace with constants).
  DOCUMENT_ADDED: 1,
  DOCUMENT_EDITED: 2,
  DOCUMENT_RATED: 3, // ?
  DOCUMENT_COMMENTED: 4,
  NEW_USER_REGISTER: 5,
  PLANE_ADDED: 6,
  PLANE_REMOVED: 7,
  ENTIRE_LOGBOOK_DOWNLOAD: 8,
  REMOVE_USER: 9,
} as const;
export type NotificationType = (typeof NOTIFICATION_TYPES)[keyof typeof NOTIFICATION_TYPES];

