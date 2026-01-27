/** Generic error message to be used when an IDK error occurs.*/
export declare const GENERIC_ERROR_MESSAGE: string;
export declare const DEFAULT_FLEET_NAME = "All Aircraft";
/** The ID of the standard "HOLD SHORT" logbook_category. */
export declare const HOLD_SHORT = 9;
export declare const SYSTEM_USER_ID = 0;
export declare const DATE_TIME_FORMAT = "YYYY-MM-DD[T]HH:mm:ss";
export declare const DEFAULT_DATE_FORMAT = "MM-DD-YYYY";
export declare const LOCAL_DEFAULT_DATE_FORMAT = "YYYY-MM-DD";
/** Enum defining the types of logbook/category supported. */
export declare const LOGBOOK_CATEGORY_TYPES: {
    readonly LOGBOOK: 1;
    readonly CATEGORY: 2;
};
export type LogbookCategoryType = (typeof LOGBOOK_CATEGORY_TYPES)[keyof typeof LOGBOOK_CATEGORY_TYPES];
/** Enum defining the different upload (source) types */
export declare const UPLOAD_TYPES: {
    readonly COMPUTER: 1;
    readonly GOOGLE_DRIVE: 2;
    readonly DROPBOX: 3;
    readonly ONE_DRIVE: 4;
    readonly WATERMARK: 5;
    readonly E_SIGN: 5;
    readonly WEB_CLIPPER: 6;
    readonly VERYON_INTEGRATION: 7;
    readonly ADMIN_UPLOAD: 9;
    readonly EMAIL: 10;
    readonly PUBLIC_API: 11;
    readonly STRATOLAUNCHER: 12;
};
export type UploadType = (typeof UPLOAD_TYPES)[keyof typeof UPLOAD_TYPES];
/** Enum defining the supported aircraft assignment methods for users. */
export declare const AIRCRAFT_ASSIGNMENT_METHOD: {
    readonly ALL: "all";
    readonly FLEET: "fleet";
    readonly AIRCRAFT: "aircraft";
};
export type AircraftAssignmentMethod = (typeof AIRCRAFT_ASSIGNMENT_METHOD)[keyof typeof AIRCRAFT_ASSIGNMENT_METHOD];
/** Enum defining the system's supported tracked-event types */
export declare const TRACKING_TYPES: {
    readonly UPLOAD: 1;
    readonly DOWNLOAD: 2;
    readonly EMAILED: 3;
    readonly PRINTED: 4;
    readonly SHARED: 5;
};
export type TrackingType = (typeof TRACKING_TYPES)[keyof typeof TRACKING_TYPES];
/** Enum defining the types of notifications the system can send */
export declare const NOTIFICATION_TYPES: {
    readonly DOCUMENT_ADDED: 1;
    readonly DOCUMENT_EDITED: 2;
    readonly DOCUMENT_RATED: 3;
    readonly DOCUMENT_COMMENTED: 4;
    readonly NEW_USER_REGISTER: 5;
    readonly PLANE_ADDED: 6;
    readonly PLANE_REMOVED: 7;
    readonly ENTIRE_LOGBOOK_DOWNLOAD: 8;
    readonly REMOVE_USER: 9;
};
export type NotificationType = (typeof NOTIFICATION_TYPES)[keyof typeof NOTIFICATION_TYPES];
/** Enum defining the types of time-based-tokens that the system can generate. */
export declare const TIME_BASED_TOKEN_TYPE: {
    readonly EMAIL: 1;
    readonly RESET_PASSWORD: 2;
    readonly FORGOT_PASSWORD: 3;
};
export type TimeBasedTokenType = (typeof TIME_BASED_TOKEN_TYPE)[keyof typeof TIME_BASED_TOKEN_TYPE];
/** Enum defining the system's supported aircraft subscription statuses */
export declare const AIRCRAFT_SUBSCRIPTION_STATUS: {
    readonly PROVISIONAL: 0;
    readonly ACTIVE: 1;
    readonly DEACTIVE: 2;
};
export type AircraftSubscriptionStatus = (typeof AIRCRAFT_SUBSCRIPTION_STATUS)[keyof typeof AIRCRAFT_SUBSCRIPTION_STATUS];
/** Enum defining the system's supported account statuses */
export declare const ACCOUNT_STATUS: {
    readonly ACTIVE: "active";
    readonly INACTIVE: "inactive";
};
export type AccountStatus = (typeof ACCOUNT_STATUS)[keyof typeof ACCOUNT_STATUS];
/** Enum defining the system's supported account styles */
export declare const ACCOUNT_STYLE: {
    readonly TRADITIONAL: "traditional";
    readonly PARTS: "parts";
};
export type AccountStyle = (typeof ACCOUNT_STYLE)[keyof typeof ACCOUNT_STYLE];
export declare const LIST_AIRCRAFT_MAKES_GROUP_TYPES: {
    readonly POPULAR: "popular";
    readonly RARE: "rare";
};
export type ListAircraftMakesGroupType = (typeof LIST_AIRCRAFT_MAKES_GROUP_TYPES)[keyof typeof LIST_AIRCRAFT_MAKES_GROUP_TYPES];
/** Constants for file activity log categories */
export declare const FILE_ACTIVITY_CATEGORY: {
    readonly ACCEPT_SUGGESTION: "accept_suggestion";
    readonly AI_SUGGESTIONS_APPLIED: "ai_suggestions_applied";
    readonly ARCHIVE: "archive";
    readonly CREATE: "create";
    readonly HIDE_PAGE: "hide_page";
    readonly MOVE: "move";
    readonly REJECT_SUGGESTION: "reject_suggestion";
    readonly RELATE: "relate";
    readonly RESTORE: "restore";
    readonly ROTATE_PAGE: "rotate_page";
    readonly SHARE: "share";
    readonly UNHIDE_PAGE: "unhide_page";
    readonly UNRELATE: "unrelate";
    readonly UPDATE: "update";
    readonly UPDATE_PAGE: "update_page";
    readonly BOUNDARIES_UPDATED: "boundaries_updated";
};
export type FileActivityCategory = (typeof FILE_ACTIVITY_CATEGORY)[keyof typeof FILE_ACTIVITY_CATEGORY];
/** Constants for document activity log categories */
export declare const DOCUMENT_ACTIVITY_CATEGORY: {
    readonly ACCEPT_SUGGESTION: "accept_suggestion";
    readonly ARCHIVE: "archive";
    readonly CREATE: "create";
    readonly ADD_PAGE: "add_page";
    readonly MOVE: "move";
    readonly REJECT_SUGGESTION: "reject_suggestion";
    readonly RESTORE: "restore";
    readonly SHARE: "share";
    readonly REMOVE_PAGE: "remove_page";
    readonly UPDATE: "update";
};
export type DocumentActivityCategory = (typeof DOCUMENT_ACTIVITY_CATEGORY)[keyof typeof DOCUMENT_ACTIVITY_CATEGORY];
/** Enum defining the possible metadata processing outcomes for a file. */
export declare const FILE_METADATA_STATUS: {
    /** Failed, because the PDF was corrupt or encrypted. */
    readonly CORRUPTED_PDF: -4;
    /** Failed, for some unknown reason. */
    readonly UNKNOWN_ERROR: -3;
    /** Failed, because of a network issue downloading the object from S3. */
    readonly NETWORK_ERROR: -2;
    /** Failed, because the object could not be found on S3. */
    readonly S3_FILE_NOT_EXIST: -1;
    /** Process is pending or in-progress. */
    readonly PENDING: 0;
    /** Successful completion. */
    readonly DONE: 1;
};
/** Enum defining the possible metadata processing outcomes for a file. */
export type FileMetaDataStatus = (typeof FILE_METADATA_STATUS)[keyof typeof FILE_METADATA_STATUS];
/** Enum defining the possible BADASS outcomes for a file. */
export declare const FILE_BADASS_STATUS: {
    /** Failed, because the file contains no OCR data.. */
    readonly NO_OCR_DATA: -8;
    /** Failed, because the PDF was corrupt or encrypted. */
    readonly ENCRYPTED_PDF: -7;
    /** Failed, because we don't know how many pages the PDF contains. */
    readonly PAGE_COUNT_NULL: -6;
    /** Failed, because a doc_master record for the file could not be found. */
    readonly DOC_MASTER_ID_UNKNOWN: -5;
    /** Failed, because the object could not be loaded from S3. */
    readonly FAILED_TO_LOAD: -4;
    /** Failed, because the object was not found on S3. */
    readonly OBJECT_NOT_FOUND: -3;
    /** Failed, because the files type is not supported. */
    readonly NOT_SUPPORTED: -2;
    /** Failed, unspecific reason. */
    readonly FAILED: -1;
    /** Process is pending or in-progress. */
    readonly PENDING: 0;
    /** Successful completion. */
    readonly COMPLETED: 1;
};
/** Enum defining the possible BADASS outcomes for a file. */
export type FileBadassStatus = (typeof FILE_BADASS_STATUS)[keyof typeof FILE_BADASS_STATUS];
/** Enum defining the possible MACH outcomes for a file. */
export declare const TEXTRACT_STATUS: {
    /** Initial (default) value when file is uploaded */
    readonly PENDING: 0;
    /** Indicates that Textract processing issuccessfully complete. In UI we will show M icon for file. */
    readonly COMPLETE: 1;
    /** Indicates there was an error when we tried to process the file */
    readonly ERROR: -1;
    /** Indicates that Textract not supported for this file type */
    readonly NOT_SUPPORTED: -2;
    /** Indicates that this file should not be mach searched (or textracted) */
    readonly NO_TEXTRACT: -3;
};
/** Enum defining the possible Textract outcomes for a file. */
export type TextractStatus = (typeof TEXTRACT_STATUS)[keyof typeof TEXTRACT_STATUS];
/** Enum defining the possible MACH-processing outcomes for a file.
 * TEXTRACT_STATUS tells us the outcome of the operation overall, this field helps us know when a file is in-progress. */
export declare const MACH_STATUS: {
    /** Initial (default) value when file is uploaded */
    readonly PENDING: 0;
    /** Indicates that Textract processing has begun. Essentially this means "PENDING". In UI we will show pending status for file. */
    readonly BEGUN: 1;
};
/** Enum defining the possible MACH outcomes for a file. */
export type MachStatus = (typeof MACH_STATUS)[keyof typeof MACH_STATUS];
/** Enum defining the possible values of juf.delete_status */
export declare const DELETE_STATUS: {
    /** Used when the JUF record has been created, but the upload has not been committed/confirmed. Files in this state are not considered a complete upload. */
    readonly PENDING: -1;
    /** The file is active */
    readonly ACTIVE: 0;
    /** The file is archived (deleted) */
    readonly ARCHIVED: 1;
};
/** Enum defining the possible values of juf.delete_status */
export type DeleteStatus = (typeof DELETE_STATUS)[keyof typeof DELETE_STATUS];
/** Enum defining the possible homogenization outcomes for a file. */
export declare const FILE_HOMOGENIZATION_STATUS: {
    /** Homogenization is not required for this file. */
    readonly NOT_NEEDED: -9;
    /** Failed, because it failed meta-data extraction. */
    readonly NO_META_DATA: -8;
    /** Failed, because the PDF was corrupt or encrypted. */
    readonly ENCRYPTED_PDF: -7;
    /** Failed, because we don't know how many pages the PDF contains. */
    readonly PAGE_COUNT_NULL: -6;
    /** Failed, because a doc_master record for the file could not be found. */
    readonly DOC_MASTER_ID_UNKNOWN: -5;
    /** Failed, because the object could not be loaded from S3. */
    readonly FAILED_TO_LOAD: -4;
    /** Failed, because the object was not found on S3. */
    readonly OBJECT_NOT_FOUND: -3;
    /** Failed, because the files type is not supported. */
    readonly NOT_SUPPORTED: -2;
    /** Failed, unspecific reason. */
    readonly FAILED: -1;
    /** Process is pending or in-progress. */
    readonly PENDING: 0;
    /** Successful completion. */
    readonly COMPLETED: 1;
};
/** Enum defining the possible homogenization outcomes for a file. */
export type FileHomogenizationStatus = (typeof FILE_HOMOGENIZATION_STATUS)[keyof typeof FILE_HOMOGENIZATION_STATUS];
/** Enum defining the possible form_status outcomes for a file. */
export declare const FORM_STATUS: {
    /** Failed, unspecific reason. */
    readonly FAILED: -1;
    /** Initial (default) value when file is uploaded. */
    readonly PENDING: 0;
    /** Successful completion (found a form_type). */
    readonly COMPLETED: 1;
    /** No action needed (form_type not found). */
    readonly NOTHING_FOUND: 2;
};
/** Enum defining the possible form status outcomes for a file. */
export type FormStatus = (typeof FORM_STATUS)[keyof typeof FORM_STATUS];
/** Enum defining the possible form_date_status outcomes for a file. */
export declare const FORM_DATE_STATUS: {
    /** Failed, unspecific reason. */
    readonly FAILED: -1;
    /** Initial (default) value when file is uploaded. */
    readonly PENDING: 0;
    /** Successful completion (found a form_date). */
    readonly COMPLETED: 1;
    /** No action needed (form_date not found). */
    readonly NOTHING_FOUND: 2;
};
/** Enum defining the possible form date status outcomes for a file. */
export type FormDateStatus = (typeof FORM_DATE_STATUS)[keyof typeof FORM_DATE_STATUS];
/** Enum defining the possible OpenSearch indexing statuses for a document. */
export declare const OPENSEARCH_STATUS: {
    /** Indicates that the document was intentionally skipped (not indexed) */
    readonly SKIPPED: -2;
    /** Indicates that the document was not indexed due to an error. */
    readonly FAILED: -1;
    /** Initial (default) value when document has not been added to opensearch index (also used to reindex a document by resetting it back to this state) */
    readonly PENDING: 0;
    /** Indicates that the document has been indexed */
    readonly INDEXED: 1;
};
/** Enum defining the possible OpenSearch indexing statuses for a document. */
export type OpensearchStatus = (typeof OPENSEARCH_STATUS)[keyof typeof OPENSEARCH_STATUS];
/** Enum defining the possible page data path methods.  This is how we construct a path to homogenized page files and thumbnails. */
export declare const PAGE_DATA_PATH_METHOD: {
    /** Legacy path method. */
    readonly PREFIX_PER_FILE: 1;
    /** New path method. See https://bluetail.atlassian.net/browse/BT-7299 */
    readonly PREFIX_PER_PAGE: 2;
};
/** Enum defining the possible metadata processing outcomes for a file. */
export type PageDataPathMethod = (typeof PAGE_DATA_PATH_METHOD)[keyof typeof PAGE_DATA_PATH_METHOD];
/**
 * FilePriority a file or job can take. Allowed values are 1..10 (1=highest 10=lowest).
 */
export type FilePriority = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
/**
 * Default priority for a file or job.
 */
export declare const DEFAULT_FILE_PRIORITY = 6;
/**
 * Backfill status values used when backfilling Textract data into MongoDB.
 */
export declare const MONGO_TEXTRACT_BACKFILL_STATUS: {
    readonly TODO: 0;
    readonly DONE: 1;
    readonly NOTHING_TO_DO: -2;
    readonly FAILED: -1;
};
export type MongoTextractBackfillStatus = typeof MONGO_TEXTRACT_BACKFILL_STATUS[keyof typeof MONGO_TEXTRACT_BACKFILL_STATUS];
/** Constants for account activity log categories (BT-8265) */
export declare const ACCOUNT_ACTIVITY_CATEGORY: {
    readonly USER_CREATED: "user_created";
    readonly USER_UPDATED: "user_updated";
    readonly USER_DELETED: "user_deleted";
    readonly AIRCRAFT_ADDED: "aircraft_added";
    readonly AIRCRAFT_REMOVED: "aircraft_removed";
};
export type AccountActivityCategory = (typeof ACCOUNT_ACTIVITY_CATEGORY)[keyof typeof ACCOUNT_ACTIVITY_CATEGORY];
/** Constants for dashboard activity types (BT-8265) */
export declare const DASHBOARD_ACTIVITY_TYPE: {
    readonly ACCOUNT: "account";
    readonly FILE: "file";
    readonly DOCUMENT: "document";
    readonly COMPLIANCE: "compliance";
};
export type DashboardActivityType = (typeof DASHBOARD_ACTIVITY_TYPE)[keyof typeof DASHBOARD_ACTIVITY_TYPE];
//# sourceMappingURL=constants.d.ts.map