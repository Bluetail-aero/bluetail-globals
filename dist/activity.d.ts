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
/** Constants for account activity log categories (BT-8265) */
export declare const ACCOUNT_ACTIVITY_CATEGORY: {
    readonly USER_CREATED: "user_created";
    readonly USER_UPDATED: "user_updated";
    readonly USER_DELETED: "user_deleted";
    readonly USER_BLOCKED: "user_blocked";
    readonly USER_UNBLOCKED: "user_unblocked";
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
//# sourceMappingURL=activity.d.ts.map