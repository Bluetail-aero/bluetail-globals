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
*/

module.exports = {

  // Generic error message to be used when an IDK error occurs.
  GENERIC_ERROR_MESSAGE: `
*Well, this is awkward.*
**We're having trouble completing your request.**
Need help now? Email us at <support@bluetail.aero>
`,

  DEFAULT_FLEET_NAME: 'All Aircraft',

  // The ID of the standard "HOLD SHORT" logbook_category.
  HOLD_SHORT: 9,

  // These characters are not allowed in file names. They will be removed and replaced by "_".
  ILLEGAL_FILE_PATH_CHARS: /[^0-9a-zA-Z!\-_.*"()/]/g,
  // These characters are allowed in file names.
  ALLOWED_FILE_PATH_CHARS: /[0-9a-zA-Z!\-_.*'()/]/g,
  // Since all files are stored in S3 we based this decision on the AWS S3 object key guidelines.
  // https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-guidelines

  // These date/time formats are used as standards across the application.
  DATE_TIME_FORMAT: 'YYYY-MM-DD[T]HH:mm:ss',
  DEFAULT_DATE_FORMAT: 'MM-DD-YYYY',
  LOCAL_DEFAULT_DATE_FORMAT: 'YYYY-MM-DD',

  SUPPORTED_EXTENSIONS: ['pdf', 'jpg', 'png', 'jpeg', 'mp4', 'doc', 'docx', 'xls', 'xlsx', 'gif'], // We only need to specify these in lowercase.
  SUPPORTED_MIME_TYPES: ['application/pdf', 'image/jpeg', 'image/png', 'video/mp4', 'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'image/gif',
  ],

  // Enum
  LOGBOOK_CATEGORY_TYPES: {
    LOGBOOK: 1,
    CATEGORY: 2,
  },

  // Enum
  UPLOAD_TYPES: {
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
  },

  // Enum
  LOGIN_TYPE: {
    WEB: 0,
    CHROME: 1,
  },

  // Enum
  ROLE_TYPES: {
    OWNER: 1,
    ADMIN: 2,
    CONTRIBUTOR: 3,
    VIEWER: 4,
    GUEST: 5,
    BUYER: 6,
    MRO: 7,
  },

  // Enum
  TRACKING_TYPES: {
    UPLOAD: 1,
    DOWNLOAD: 2,
    EMAILED: 3,
    PRINTED: 4,
    SHARED: 5,
  },

  // Enum
  MAILED_DOC_STATUS: {
    PENDING: 0,
    COMPLETE: 1,
    UNIDENTIFIED: 2,
    FAILED: -1,
    BLOCKED_SENDER: -2,
    NO_ATTACHMENTS: -3,
  },

  // Enum
  MAILED_REPLY_SENDING_TYPES: {
    DO_NOT_SEND_USER_REPLY: 0,
    EMAIL_TO_USER_SUCESSMSG: 1,
    EMAIL_TO_CS: 2,
    EMAIL_TO_BLOCKED_USER: 3,
    EMAIL_TO_USER_FOR_DELAY: 4,
    EMAIL_TO_USER_FOR_SYNTAX: 5,
    EMAIL_TO_USER_FOR_DEACTIVATED_AIRCRAFT: 6,
  },

  // Enum
  NOTIFICATION_TYPES: {
    DOCUMENT_ADDED: 1,
    DOCUMENT_EDITED: 2,
    DOCUMENT_RATED: 3, // ?
    DOCUMENT_COMMENTED: 4,
    NEW_USER_REGISTER: 5,
    PLANE_ADDED: 6,
    PLANE_REMOVED: 7,
    ENTIRE_LOGBOOK_DOWNLOAD: 8,
    REMOVE_USER: 9,
  },
  // TODO: These are inconsistently used throughout the backend (find "notify_type", check and replace with constants).

  // Enum
  TIME_BASED_TOKEN_TYPE: {
    EMAIL: 1,
    RESET_PASSWORD: 2,
    FORGOT_PASSWORD: 3,
  },

  /*
  Note:

  We have 2 types of reminders for the createReminder endpoint:

  1. Threshold reminders:
    - For threshold reminders, we utilize threshold data related to aircraft, e.g., []. In this scenario, we send an email to the user based on the percentage of the threshold value.
    Note: For threshold reminders, input validation for start_date, end_date, file_name, file_id, frequency, search word, and page is not necessary.

  2. Normal reminders:
    - These can be further categorized into:
      a. Reminder for documents.
      b. Normal reminder from the notification tab.
    Note: For normal reminders created from the notifications tab, page, filename, and search word inputs are not required.
  */
  REMINDER_TYPE: {
    NORMAL: 1,
    THRESHOLD: 2,
  },

  // Enum
  AIRCRAFT_SUBSCRIPTION_STATUS: {
    PROVISIONAL: 0,
    ACTIVE: 1,
    DEACTIVE: 2,
  },

  // Enum
  ACCOUNT_STATUS: {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
  },

  // Enum
  ACCOUNT_STYLE: {
    TRADITIONAL: 'traditional',
    PARTS: 'parts',
  },

  // Enum
  LIST_AIRCRAFT_MAKES_GROUP_TYPES: {
    POPULAR: 'popular',
    RARE: 'rare',
  },

  // Enum
  PRIVILEGES: { //! Note: The string value must precisely match the key name.
    accountStatus: 'accountStatus',
    planeStatus: 'planeStatus',
    paymentStatus: 'paymentStatus',
    myProfileStatus: 'myProfileStatus',
    settingsStatus: 'settingsStatus',
    logbookStatus: 'logbookStatus',
    keywordsStatus: 'keywordsStatus',
    uploadsStatus: 'uploadsStatus',
    integrationStatus: 'integrationStatus',
    esignatureStatus: 'esignatureStatus',
    dashboardStatus: 'dashboardStatus',
    usersStatus: 'usersStatus',
    removeUsersStatus: 'removeUsersStatus',
    userStatus: 'userStatus',
    groupsStatus: 'groupsStatus',
    logoutStatus: 'logoutStatus',
    watermarkStatus: 'watermarkStatus',
    setPrivilegesStatus: 'setPrivilegesStatus',
    integreateApps: 'integreateApps',
    DownloadRecordStatus: 'DownloadRecordStatus',
    DownloadRecordL90DStatus: 'DownloadRecordL90DStatus',
    UploadRecordStatus: 'UploadRecordStatus',
    AssignRecordToLogbookStatus: 'AssignRecordToLogbookStatus',
    AddcommentStatus: 'AddcommentStatus',
    AddNotificationStatus: 'AddNotificationStatus',
    PrintStatus: 'PrintStatus',
    StampStatus: 'StampStatus',
    ViewPlaneProfileStatus: 'ViewPlaneProfileStatus',
    ViewTagsStatus: 'ViewTagsStatus',
    ViewCommentsStatus: 'ViewCommentsStatus',
    ViewNotificationsStatus: 'ViewNotificationsStatus',
    ViewKeywordsStatus: 'ViewKeywordsStatus',
    ViewNotesStatus: 'ViewNotesStatus',
    ShareByUrlStatus: 'ShareByUrlStatus',
    ShareByEmailStatus: 'ShareByEmailStatus',
    shareOneDriveStatus: 'shareOneDriveStatus',
    reportsStatus: 'reportsStatus',
    shareDropboxStatus: 'shareDropboxStatus',
    shareGdriveStatus: 'shareGdriveStatus',
    editRecordStatus: 'editRecordStatus',
    uploadStatus: 'uploadStatus',
    printLast30days: 'printLast30days',
    addEditViewKeywords: 'addEditViewKeywords',
    timelineEvents: 'timelineEvents',
    settingStatusInner: 'settingStatusInner',
    categoryStatus: 'categoryStatus',
    printDownloadStatus: 'printDownloadStatus',
    addPlaneStatus: 'addPlaneStatus',
    addFormStatus: 'addFormStatus',
    privateCategoryStatus: 'privateCategoryStatus',
    CreateFolderStatus: 'CreateFolderStatus',
    ViewFleetStatus: 'ViewFleetStatus',
    companyStatus: 'companyStatus',
    officeCategoryStatus: 'officeCategoryStatus',
  },
};
