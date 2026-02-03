/*
  CHANGE HISTORY:
    2023.08.03 - Copied ILLEGAL_FILE_PATH_CHARS and ALLOWED_EXTENSIONS to here.
    2023.12.29 - Adeded MAILED_DOC_STATUS
    2024.01.04 - New service: mailImportService
    2024.01.30 - ESLINT cleanup
    2024.02.05 - Add ROLE_TYPES
               - Add DO_NOT_SEND_USER_REPLY to MAILED_REPLY_SENDING_TYPES
    2024.02.06 - Add EXTRA UPLOAD_TYPES (ADMIN, EMAIL, PUBLIC_API, STRATOLAUNCHER)
    2024.02.13 - Add DEFAULT_FLEET_NAME
    2024.02.21 - Add TIME_BASED_TOKEN_TYPE enum.
    2024.02.22 - Add AIRCRAFT_STATUS enum.
    2024.02.27 - Add ACCOUNT_STYLE enum and HOLD_SHORT constant.
    2024.02.28 - Add option to parse to int in validateEnum.
    2024.02.29 - Moved validateEnum to bluetail-utils/validationUtils.
    2024.02.29 - Add LOGIN_TYPE enum.
    2024.02.29 - Moved from bluetail-domain to bluetail-globals.
    2024.03.11 - Introduce ALLOWED_FILE_PATH_CHARS constant.
    2024.03.14 - Added listAircraftMakes GROUP_TYPE enum.
    2024.03.14 - Added ACCOUNT_STATUS enum.
    2024.04.07 - Added REMINDER_TYPE enum.
    2024.04.12 - Update SUPPORTED_EXTENSIONS and SUPPORTED_MIME_TYPES, and add isSupportedFileExtension(..) and isSupportedMimeType(..).
    2024.04.12 - Add GENERIC_ERROR_MESSAGE and date format constants.
    2024.04.12 - Grandfather in an enum for the PRIVILEGES.
    2024.04.23 - Relocate containsIllegalCharacters and removeIllegalCharacters from fileUtils.js.
    2024.04.25 - Spaces should also be in the illegal character list.
    2024.07.09 - Expanded the list of SUPPORTED_EXTENSIONS and SUPPORTED_MIME_TYPES to include doc,docx,xls,xlsx and gif.
    2024.10.02 - Remove LOGIN_TYPE as it is no longer required.
    2024.11.01 - Add Compliance priviledges.
    2024.11.05 - Remove unused PRIVILEGES.keywordsStatus
    2025.01.24 - Add the AIRCRAFT_ASSIGNMENT_METHOD enum and provided jsdoc for all the enums exported.
    2025.02.07 - Converting this package to use typescript.
    2025.07.11 - Add FILE_ACTIVITY_CATEGORY enum
    2025.07.24 - Add rotate_page to FILE_ACTIVITY_CATEGORY
    2025.08.08 - Added constants and types for OPENSEARCH_STATUS, FORM_STATUS, FORM_DATE_STATUS, FILE_METADATA_STATUS, FILE_BADASS_STATUS, TEXTRACT_STATUS, MACH_STATUS, DELETE_STATUS, FILE_HOMOGENIZATION_STATUS
    2025.09.28 - Made a non-breaking alteration to OPENSEARCH_STATUS to differentiate between SKIPPED and FAILED states.
    2025.11.07 - Add DOCUMENT_ACTIVITY_CATEGORY enum
    2025.11.25 - Added AI_SUGGESTIONS_APPLIED to FILE_ACTIVITY_CATEGORY
    2025.12.22 - Add PAGE_DATA_PATH_METHOD and PageDataPathMethod type BT-8021
    2026.01.08 - Add FilePriority type and DEFAULT_FILE_PRIORITY constants. BT-8025
    2026.01.22 - Add NO_OCR_DATA to FILE_BADASS_STATUS. BT-8245
    2026.01.27 - Add ACCOUNT_ACTIVITY_CATEGORY and DASHBOARD_ACTIVITY_TYPE constants. BT-8265
    2026.02.02 - Split FILE_PROCESSING_EVENTS and FileProcessingEvent to fileProcessingEvents.ts
    2026.02.02 - Split TEXTRACT_STATUS, MACH_STATUS, and MONGO_TEXTRACT_BACKFILL_STATUS to textract.ts
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

