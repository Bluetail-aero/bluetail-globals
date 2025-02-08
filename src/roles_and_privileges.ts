/*

  CHANGE HISTORY:
    2025.02.07 - Converting this package to use typescript.
               - Spun this module off from the main 'constants' module.

  TODOS:
    -
*/

/** Enum defining the system's supported role types */
export const ROLE_TYPES = {
  OWNER: 1,
  ADMIN: 2,
  CONTRIBUTOR: 3,
  VIEWER: 4,
  GUEST: 5,
  BUYER: 6,
  MRO: 7,
} as const;
export type RoleType = (typeof ROLE_TYPES)[keyof typeof ROLE_TYPES];

/** Enum defining the system's supported privileges (privileges are bestowed on users via their role) */
export const PRIVILEGES = { //! Note: The string value must precisely match the key name.
  AddNotificationStatus: 'AddNotificationStatus',
  AddcommentStatus: 'AddcommentStatus',
  AssignRecordToLogbookStatus: 'AssignRecordToLogbookStatus',
  CreateFolderStatus: 'CreateFolderStatus',
  DownloadRecordStatus: 'DownloadRecordStatus',
  PrintStatus: 'PrintStatus',
  RESEARCH_PROJECT_CONTRIBUTE: 'RESEARCH_PROJECT_CONTRIBUTE',
  RESEARCH_PROJECT_CREATE: 'RESEARCH_PROJECT_CREATE',
  RESEARCH_PROJECT_MANAGE: 'RESEARCH_PROJECT_MANAGE',
  RESEARCH_PROJECT_SHARE: 'RESEARCH_PROJECT_SHARE',
  RESEARCH_PROJECT_VIEW: 'RESEARCH_PROJECT_VIEW',
  ShareByEmailStatus: 'ShareByEmailStatus',
  ShareByUrlStatus: 'ShareByUrlStatus',
  StampStatus: 'StampStatus',
  UploadRecordStatus: 'UploadRecordStatus',
  ViewCommentsStatus: 'ViewCommentsStatus',
  ViewFleetStatus: 'ViewFleetStatus',
  ViewKeywordsStatus: 'ViewKeywordsStatus',
  ViewNotesStatus: 'ViewNotesStatus',
  ViewNotificationsStatus: 'ViewNotificationsStatus',
  ViewPlaneProfileStatus: 'ViewPlaneProfileStatus',
  ViewTagsStatus: 'ViewTagsStatus',
  accountStatus: 'accountStatus',
  addEditViewKeywords: 'addEditViewKeywords',
  addFormStatus: 'addFormStatus',
  categoryStatus: 'categoryStatus',
  editRecordStatus: 'editRecordStatus',
  esignatureStatus: 'esignatureStatus',
  groupsStatus: 'groupsStatus',
  integrationStatus: 'integrationStatus',
  integreateApps: 'integreateApps',
  logbookStatus: 'logbookStatus',
  logoutStatus: 'logoutStatus',
  myProfileStatus: 'myProfileStatus',
  officeCategoryStatus: 'officeCategoryStatus',
  paymentStatus: 'paymentStatus',
  planeStatus: 'planeStatus',
  printDownloadStatus: 'printDownloadStatus',
  privateCategoryStatus: 'privateCategoryStatus',
  removeUsersStatus: 'removeUsersStatus',
  reportsStatus: 'reportsStatus',
  setPrivilegesStatus: 'setPrivilegesStatus',
  settingStatusInner: 'settingStatusInner',
  settingsStatus: 'settingsStatus',
  shareDropboxStatus: 'shareDropboxStatus',
  shareGdriveStatus: 'shareGdriveStatus',
  shareOneDriveStatus: 'shareOneDriveStatus',
  timelineEvents: 'timelineEvents',
  uploadStatus: 'uploadStatus',
  uploadsStatus: 'uploadsStatus',
  usersStatus: 'usersStatus',
  watermarkStatus: 'watermarkStatus',
} as const;
export type PrivilegeEnum = (typeof PRIVILEGES)[keyof typeof PRIVILEGES];
