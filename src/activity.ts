/*
  CHANGE HISTORY:
    2025.05.28 - Reorganize all constants.
    2026.02.17 - Add LOCATION_ACTIVITY_CATEGORY and LOCATION to DASHBOARD_ACTIVITY_TYPE. BT-8409
*/

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

/** Constants for account activity log categories (BT-8265) */
export const ACCOUNT_ACTIVITY_CATEGORY = {
  USER_CREATED: 'user_created',
  USER_UPDATED: 'user_updated',
  USER_DELETED: 'user_deleted',
  USER_BLOCKED: 'user_blocked',
  USER_UNBLOCKED: 'user_unblocked',
  AIRCRAFT_ADDED: 'aircraft_added',
  AIRCRAFT_REMOVED: 'aircraft_removed',
} as const;
export type AccountActivityCategory = (typeof ACCOUNT_ACTIVITY_CATEGORY)[keyof typeof ACCOUNT_ACTIVITY_CATEGORY];

/** Constants for location activity log categories (BT-8409) */
export const LOCATION_ACTIVITY_CATEGORY = {
  CREATE: 'create',
  DELETE: 'delete',
  MOVE: 'move',
  PERMISSIONS_UPDATED: 'permissions_updated',
  UPDATE: 'update',
} as const;
export type LocationActivityCategory = (typeof LOCATION_ACTIVITY_CATEGORY)[keyof typeof LOCATION_ACTIVITY_CATEGORY];

/** Constants for dashboard activity types (BT-8265) */
export const DASHBOARD_ACTIVITY_TYPE = {
  ACCOUNT: 'account',
  FILE: 'file',
  DOCUMENT: 'document',
  COMPLIANCE: 'compliance',
  LOCATION: 'location',
} as const;
export type DashboardActivityType = (typeof DASHBOARD_ACTIVITY_TYPE)[keyof typeof DASHBOARD_ACTIVITY_TYPE];

