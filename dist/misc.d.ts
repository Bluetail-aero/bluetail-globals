/** Generic error message to be used when an IDK error occurs.*/
export declare const GENERIC_ERROR_MESSAGE: string;
export declare const SYSTEM_USER_ID = 0;
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
//# sourceMappingURL=misc.d.ts.map