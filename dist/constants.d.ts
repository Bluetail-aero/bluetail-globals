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
    readonly ARCHIVE: "archive";
    readonly CREATE: "create";
    readonly HIDE_PAGE: "hide_page";
    readonly MOVE: "move";
    readonly RELATE: "relate";
    readonly RESTORE: "restore";
    readonly SHARE: "share";
    readonly UNHIDE_PAGE: "unhide_page";
    readonly UNRELATE: "unrelate";
    readonly UPDATE: "update";
    readonly UPDATE_PAGE: "update_page";
};
export type FileActivityCategory = (typeof FILE_ACTIVITY_CATEGORY)[keyof typeof FILE_ACTIVITY_CATEGORY];
//# sourceMappingURL=constants.d.ts.map