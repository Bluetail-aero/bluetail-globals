// bluetail-globals.d.ts

export * from './aircraftId.d.ts';

declare module 'bluetail-globals' {
  // Define constants as they appear
  const GENERIC_ERROR_MESSAGE: string;
  const DEFAULT_FLEET_NAME: string;
  const HOLD_SHORT: number;
  const ILLEGAL_FILE_PATH_CHARS: RegExp;
  const ALLOWED_FILE_PATH_CHARS: RegExp;
  const DATE_TIME_FORMAT: string;
  const DEFAULT_DATE_FORMAT: string;
  const LOCAL_DEFAULT_DATE_FORMAT: string;
  const SUPPORTED_EXTENSIONS: string[];
  const SUPPORTED_MIME_TYPES: string[];

  // Define functions with parameters and return types
  function containsIllegalCharacters(someString: string): null | string[];
  function removeIllegalCharacters(someString: string, replacementChar?: string): null | string;
  function isSupportedFileExtension(filename: string, supportedExtensions?: string[]): boolean;
  function isSupportedMimeType(mimeType: string, supportedMimeTypes?: string[]): boolean;

  // Define Enums
  enum LOGBOOK_CATEGORY_TYPES {
    LOGBOOK = 1,
    CATEGORY = 2,
  }

  enum UPLOAD_TYPES {
    COMPUTER = 1,
    GOOGLE_DRIVE = 2,
    DROPBOX = 3,
    ONE_DRIVE = 4,
    WATERMARK = 5,
    E_SIGN = 5,
    WEB_CLIPPER = 6,
    VERYON_INTEGRATION = 7,
    ADMIN_UPLOAD = 9,
    EMAIL = 10,
    PUBLIC_API = 11,
    STRATOLAUNCHER = 12,
  }

  enum LOGIN_TYPE {
    WEB = 0,
    CHROME = 1,
  }

  enum ROLE_TYPES {
    OWNER = 1,
    ADMIN = 2,
    CONTRIBUTOR = 3,
    VIEWER = 4,
    GUEST = 5,
    BUYER = 6,
    MRO = 7,
  }

  enum TRACKING_TYPES {
    UPLOAD = 1,
    DOWNLOAD = 2,
    EMAILED = 3,
    PRINTED = 4,
    SHARED = 5,
  }

  enum MAILED_DOC_STATUS {
    PENDING = 0,
    COMPLETE = 1,
    UNIDENTIFIED = 2,
    FAILED = -1,
    BLOCKED_SENDER = -2,
    NO_ATTACHMENTS = -3,
  }

  enum MAILED_REPLY_SENDING_TYPES {
    DO_NOT_SEND_USER_REPLY = 0,
    EMAIL_TO_USER_SUCESSMSG = 1,
    EMAIL_TO_CS = 2,
    EMAIL_TO_BLOCKED_USER = 3,
    EMAIL_TO_USER_FOR_DELAY = 4,
    EMAIL_TO_USER_FOR_SYNTAX = 5,
    EMAIL_TO_USER_FOR_DEACTIVATED_AIRCRAFT = 6,
  }

  enum NOTIFICATION_TYPES {
    DOCUMENT_ADDED = 1,
    DOCUMENT_EDITED = 2,
    DOCUMENT_RATED = 3,
    DOCUMENT_COMMENTED = 4,
    NEW_USER_REGISTER = 5,
    PLANE_ADDED = 6,
    PLANE_REMOVED = 7,
    ENTIRE_LOGBOOK_DOWNLOAD = 8,
    REMOVE_USER = 9,
  }

  enum TIME_BASED_TOKEN_TYPE {
    EMAIL = 1,
    RESET_PASSWORD = 2,
    FORGOT_PASSWORD = 3,
  }

  enum REMINDER_TYPE {
    NORMAL = 1,
    THRESHOLD = 2,
  }

  enum AIRCRAFT_SUBSCRIPTION_STATUS {
    PROVISIONAL = 0,
    ACTIVE = 1,
    DEACTIVE = 2,
  }

  enum ACCOUNT_STATUS {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
  }

  enum ACCOUNT_STYLE {
    TRADITIONAL = 'traditional',
    PARTS = 'parts',
  }

  enum LIST_AIRCRAFT_MAKES_GROUP_TYPES {
    POPULAR = 'popular',
    RARE = 'rare',
  }

  enum PRIVILEGES {
    accountStatus = 'accountStatus',
    planeStatus = 'planeStatus',
    paymentStatus = 'paymentStatus',
    myProfileStatus = 'myProfileStatus',
    settingsStatus = 'settingsStatus',
    logbookStatus = 'logbookStatus',
    keywordsStatus = 'keywordsStatus',
    uploadsStatus = 'uploadsStatus',
    integrationStatus = 'integrationStatus',
    esignatureStatus = 'esignatureStatus',
    dashboardStatus = 'dashboardStatus',
    usersStatus = 'usersStatus',
    removeUsersStatus = 'removeUsersStatus',
    userStatus = 'userStatus',
    groupsStatus = 'groupsStatus',
    logoutStatus = 'logoutStatus',
    watermarkStatus = 'watermarkStatus',
    setPrivilegesStatus = 'setPrivilegesStatus',
    integreateApps = 'integreateApps',
    DownloadRecordStatus = 'DownloadRecordStatus',
    DownloadRecordL90DStatus = 'DownloadRecordL90DStatus',
    UploadRecordStatus = 'UploadRecordStatus',
    AssignRecordToLogbookStatus = 'AssignRecordToLogbookStatus',
    AddcommentStatus = 'AddcommentStatus',
    AddNotificationStatus = 'AddNotificationStatus',
    PrintStatus = 'PrintStatus',
    StampStatus = 'StampStatus',
    ViewPlaneProfileStatus = 'ViewPlaneProfileStatus',
    ViewTagsStatus = 'ViewTagsStatus',
    ViewCommentsStatus = 'ViewCommentsStatus',
    ViewNotificationsStatus = 'ViewNotificationsStatus',
    ViewKeywordsStatus = 'ViewKeywordsStatus',
    ViewNotesStatus = 'ViewNotesStatus',
    ShareByUrlStatus = 'ShareByUrlStatus',
    ShareByEmailStatus = 'ShareByEmailStatus',
    shareOneDriveStatus = 'shareOneDriveStatus',
    reportsStatus = 'reportsStatus',
    shareDropboxStatus = 'shareDropboxStatus',
    shareGdriveStatus = 'shareGdriveStatus',
    editRecordStatus = 'editRecordStatus',
    uploadStatus = 'uploadStatus',
    printLast30days = 'printLast30days',
    addEditViewKeywords = 'addEditViewKeywords',
    timelineEvents = 'timelineEvents',
    settingStatusInner = 'settingStatusInner',
    categoryStatus = 'categoryStatus',
    printDownloadStatus = 'printDownloadStatus',
    addPlaneStatus = 'addPlaneStatus',
    addFormStatus = 'addFormStatus',
    privateCategoryStatus = 'privateCategoryStatus',
    CreateFolderStatus = 'CreateFolderStatus',
    ViewFleetStatus = 'ViewFleetStatus',
    companyStatus = 'companyStatus',
    officeCategoryStatus = 'officeCategoryStatus',
  };
}
