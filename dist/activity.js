"use strict";
/*
  CHANGE HISTORY:
    2025.05.28 - Reorganize all constants.
    2026.02.17 - Add LOCATION_ACTIVITY_CATEGORY and LOCATION to DASHBOARD_ACTIVITY_TYPE. BT-8409
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DASHBOARD_ACTIVITY_TYPE = exports.LOCATION_ACTIVITY_CATEGORY = exports.ACCOUNT_ACTIVITY_CATEGORY = exports.DOCUMENT_ACTIVITY_CATEGORY = exports.FILE_ACTIVITY_CATEGORY = void 0;
/** Constants for file activity log categories */
exports.FILE_ACTIVITY_CATEGORY = {
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
};
/** Constants for document activity log categories */
exports.DOCUMENT_ACTIVITY_CATEGORY = {
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
};
/** Constants for account activity log categories (BT-8265) */
exports.ACCOUNT_ACTIVITY_CATEGORY = {
    USER_CREATED: 'user_created',
    USER_UPDATED: 'user_updated',
    USER_DELETED: 'user_deleted',
    USER_BLOCKED: 'user_blocked',
    USER_UNBLOCKED: 'user_unblocked',
    AIRCRAFT_ADDED: 'aircraft_added',
    AIRCRAFT_REMOVED: 'aircraft_removed',
};
/** Constants for location activity log categories (BT-8409) */
exports.LOCATION_ACTIVITY_CATEGORY = {
    CREATE: 'create',
    DELETE: 'delete',
    MOVE: 'move',
    PERMISSIONS_UPDATED: 'permissions_updated',
    UPDATE: 'update',
};
/** Constants for dashboard activity types (BT-8265) */
exports.DASHBOARD_ACTIVITY_TYPE = {
    ACCOUNT: 'account',
    FILE: 'file',
    DOCUMENT: 'document',
    COMPLIANCE: 'compliance',
    LOCATION: 'location',
};
