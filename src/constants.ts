/* eslint-disable no-magic-numbers */

/*
  A valueable resource that centralizes all the constants and enums used across the Bluetail codebase.

  INSTRUCTIONS TO MAINTAINERS:
  1. BEFORE you make changes, please plan those will all other developers. Changes are hard to reverse. A good place to discuss would be #backends on Slack.
  2. Update the CHANGE HISTORY when you make changes.
  3. Do not introduce breaking changes.  You will need to maintain backward compatability for a while
  4. Do not introduce bugs ,p
  5. Notify everyone of changes made once they are committed to the repo.

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
    2026.01.20 - Export MONGO_TEXTRACT_BACKFILL_STATUS and MongoTextractBackfillStatus type. BT-8025
*/


/** Generic error message to be used when an IDK error occurs.*/
export const GENERIC_ERROR_MESSAGE: string = `
*Well, this is awkward.*
**We're having trouble completing your request.**
Need help now? Email us at <support@bluetail.aero>
`;

export const DEFAULT_FLEET_NAME = 'All Aircraft';

/** The ID of the standard "HOLD SHORT" logbook_category. */
export const HOLD_SHORT = 9;

export const SYSTEM_USER_ID = 0;

// These date/time formats are used as standards across the application.
export const DATE_TIME_FORMAT = 'YYYY-MM-DD[T]HH:mm:ss';
export const DEFAULT_DATE_FORMAT = 'MM-DD-YYYY';
export const LOCAL_DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';

/** Enum defining the types of logbook/category supported. */
export const LOGBOOK_CATEGORY_TYPES = {
  LOGBOOK: 1,
  CATEGORY: 2,
} as const;
export type LogbookCategoryType = (typeof LOGBOOK_CATEGORY_TYPES)[keyof typeof LOGBOOK_CATEGORY_TYPES];

/** Enum defining the different upload (source) types */
export const UPLOAD_TYPES = {
  COMPUTER: 1,
  GOOGLE_DRIVE: 2,
  DROPBOX: 3,
  ONE_DRIVE: 4,
  WATERMARK: 5, // when applying a watermark ?? unclear if we are uploading a new file or modifying existing one.
  E_SIGN: 5, //  when applying a e-signature ?? unclear if we are uploading a new file or modifying existing one.
  WEB_CLIPPER: 6,
  VERYON_INTEGRATION: 7,
  // Note: 8 was used once, but is now deprecated.
  ADMIN_UPLOAD: 9,
  EMAIL: 10,
  PUBLIC_API: 11,
  STRATOLAUNCHER: 12,
} as const;
export type UploadType = (typeof UPLOAD_TYPES)[keyof typeof UPLOAD_TYPES];

/** Enum defining the supported aircraft assignment methods for users. */
export const AIRCRAFT_ASSIGNMENT_METHOD = {
  ALL: 'all',
  FLEET: 'fleet',
  AIRCRAFT: 'aircraft',
} as const;
export type AircraftAssignmentMethod = (typeof AIRCRAFT_ASSIGNMENT_METHOD)[keyof typeof AIRCRAFT_ASSIGNMENT_METHOD];


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


/** Enum defining the types of time-based-tokens that the system can generate. */
export const TIME_BASED_TOKEN_TYPE = {
  EMAIL: 1,
  RESET_PASSWORD: 2,
  FORGOT_PASSWORD: 3,
} as const;
export type TimeBasedTokenType = (typeof TIME_BASED_TOKEN_TYPE)[keyof typeof TIME_BASED_TOKEN_TYPE];

/** Enum defining the system's supported aircraft subscription statuses */
export const AIRCRAFT_SUBSCRIPTION_STATUS = {
  PROVISIONAL: 0,
  ACTIVE: 1,
  DEACTIVE: 2,
} as const;
export type AircraftSubscriptionStatus = (typeof AIRCRAFT_SUBSCRIPTION_STATUS)[keyof typeof AIRCRAFT_SUBSCRIPTION_STATUS];

/** Enum defining the system's supported account statuses */
export const ACCOUNT_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
} as const;
export type AccountStatus = (typeof ACCOUNT_STATUS)[keyof typeof ACCOUNT_STATUS];

/** Enum defining the system's supported account styles */
export const ACCOUNT_STYLE = {
  TRADITIONAL: 'traditional',
  PARTS: 'parts',
} as const;
export type AccountStyle = (typeof ACCOUNT_STYLE)[keyof typeof ACCOUNT_STYLE];

// Enum
export const LIST_AIRCRAFT_MAKES_GROUP_TYPES = {
  POPULAR: 'popular',
  RARE: 'rare',
} as const;
export type ListAircraftMakesGroupType = (typeof LIST_AIRCRAFT_MAKES_GROUP_TYPES)[keyof typeof LIST_AIRCRAFT_MAKES_GROUP_TYPES];

/** Constants for file activity log categories */
export const FILE_ACTIVITY_CATEGORY = {
  ACCEPT_SUGGESTION: 'accept_suggestion',
  AI_SUGGESTIONS_APPLIED: 'ai_suggestions_applied',
  ARCHIVE: 'archive',
  CREATE: 'create',
  HIDE_PAGE: 'hide_page',
  MOVE: 'move',
  REJECT_SUGGESTION: 'reject_suggestion',
  RELATE: 'relate',
  RESTORE: 'restore',
  ROTATE_PAGE: 'rotate_page',
  SHARE: 'share',
  UNHIDE_PAGE: 'unhide_page',
  UNRELATE: 'unrelate',
  UPDATE: 'update',
  UPDATE_PAGE: 'update_page',
  BOUNDARIES_UPDATED: 'boundaries_updated',
} as const;
export type FileActivityCategory = (typeof FILE_ACTIVITY_CATEGORY)[keyof typeof FILE_ACTIVITY_CATEGORY];

/** Constants for document activity log categories */
export const DOCUMENT_ACTIVITY_CATEGORY = {
  ACCEPT_SUGGESTION: 'accept_suggestion',
  ARCHIVE: 'archive',
  CREATE: 'create',
  ADD_PAGE: 'add_page',
  MOVE: 'move',
  REJECT_SUGGESTION: 'reject_suggestion',
  RESTORE: 'restore',
  SHARE: 'share',
  REMOVE_PAGE: 'remove_page',
  UPDATE: 'update',
} as const;
export type DocumentActivityCategory = (typeof DOCUMENT_ACTIVITY_CATEGORY)[keyof typeof DOCUMENT_ACTIVITY_CATEGORY];

/** Enum defining the possible metadata processing outcomes for a file. */
export const FILE_METADATA_STATUS = {
  /** Failed, because the PDF was corrupt or encrypted. */
  CORRUPTED_PDF: -4,
  /** Failed, for some unknown reason. */
  UNKNOWN_ERROR: -3,
  /** Failed, because of a network issue downloading the object from S3. */
  NETWORK_ERROR: -2,
  /** Failed, because the object could not be found on S3. */
  S3_FILE_NOT_EXIST: -1,

  /** Process is pending or in-progress. */
  PENDING: 0,

  /** Successful completion. */
  DONE: 1,
} as const;
/** Enum defining the possible metadata processing outcomes for a file. */
export type FileMetaDataStatus = (typeof FILE_METADATA_STATUS)[keyof typeof FILE_METADATA_STATUS];


/** Enum defining the possible BADASS outcomes for a file. */
export const FILE_BADASS_STATUS = {
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


/** Enum defining the possible MACH outcomes for a file. */
export const TEXTRACT_STATUS = {
  /** Initial (default) value when file is uploaded */
  PENDING: 0,
  /** Indicates that Textract processing issuccessfully complete. In UI we will show M icon for file. */
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


/** Enum defining the possible homogenization outcomes for a file. */
export const FILE_HOMOGENIZATION_STATUS = {
  /** Homogenization is not required for this file. */
  NOT_NEEDED: -9,
  /** Failed, because it failed meta-data extraction. */
  NO_META_DATA: -8,
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
/** Enum defining the possible homogenization outcomes for a file. */
export type FileHomogenizationStatus = (typeof FILE_HOMOGENIZATION_STATUS)[keyof typeof FILE_HOMOGENIZATION_STATUS];


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


/** Enum defining the possible OpenSearch indexing statuses for a document. */
export const OPENSEARCH_STATUS = {
  /** Indicates that the document was intentionally skipped (not indexed) */
  SKIPPED: -2,

  /** Indicates that the document was not indexed due to an error. */
  FAILED: -1,

  /** Initial (default) value when document has not been added to opensearch index (also used to reindex a document by resetting it back to this state) */
  PENDING: 0,

  /** Indicates that the document has been indexed */
  INDEXED: 1,
} as const;
/** Enum defining the possible OpenSearch indexing statuses for a document. */
export type OpensearchStatus = (typeof OPENSEARCH_STATUS)[keyof typeof OPENSEARCH_STATUS];

/** Enum defining the possible page data path methods.  This is how we construct a path to homogenized page files and thumbnails. */
export const PAGE_DATA_PATH_METHOD = {
  /** Legacy path method. */
  PREFIX_PER_FILE: 1,
  /** New path method. See https://bluetail.atlassian.net/browse/BT-7299 */
  PREFIX_PER_PAGE: 2,
} as const;
/** Enum defining the possible metadata processing outcomes for a file. */
export type PageDataPathMethod = (typeof PAGE_DATA_PATH_METHOD)[keyof typeof PAGE_DATA_PATH_METHOD];

/**
 * FilePriority a file or job can take. Allowed values are 1..10 (1=highest 10=lowest).
 */
export type FilePriority = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * Default priority for a file or job.
 */
export const DEFAULT_FILE_PRIORITY = 6;

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
