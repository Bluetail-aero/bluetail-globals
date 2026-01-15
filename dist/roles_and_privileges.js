"use strict";
/*

  CHANGE HISTORY:
    2025.02.07 - Converting this package to use typescript.
               - Spun this module off from the main 'constants' module.

  TODOS:
    -
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRIVILEGES = exports.ROLE_TYPES = void 0;
/** Enum defining the system's supported role types */
exports.ROLE_TYPES = {
    OWNER: 1,
    ADMIN: 2,
    CONTRIBUTOR: 3,
    VIEWER: 4,
    GUEST: 5,
    BUYER: 6,
    MRO: 7,
};
/** Enum defining the system's supported privileges (privileges are bestowed on users via their role) */
exports.PRIVILEGES = {
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
    DOCUMENT_ACTIVITY_VIEW: 'DOCUMENT_ACTIVITY_VIEW',
    OPERATIONS_VIEW: 'OPERATIONS_VIEW',
    LOGBOOKS_VIEW: 'LOGBOOKS_VIEW',
    LOGBOOKS_EDIT: 'LOGBOOKS_EDIT',
};
