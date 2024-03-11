/* eslint-disable no-magic-numbers */

/*
  A valueable resource that centralizes all the constants and enums used across the Bluetail codebase.

  INSTRUCTIONS TO MAINTAINERS:
  1. BEFORE you make changes, please plan those will all other developers. Changes are hard to reverse. A good place to discuss would be #backends on Slack.
  2. Update the CHANGE HISTORY when you make changes.
  3. Do not introduce breaking changes.  You will need to maintain backward compatability for a while
  4. Do not introduce bugs ;p
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
*/

const DEFAULT_FLEET_NAME = 'All Aircraft';

// The ID of the standard "HOLD SHORT" logbook_category.
const HOLD_SHORT = 9;

// These characters are not allowed in file names. They will be removed and replaced by "_".
const ILLEGAL_FILE_PATH_CHARS = /[^0-9a-zA-Z!\-_.*'()/]/g;
// These characters are allowed in file names.
const ALLOWED_FILE_PATH_CHARS = /[0-9a-zA-Z!\-_.*'()/]/g;
// Since all files are stored in S3 we based this decision on the AWS S3 object key guidelines.
// https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-guidelines

// These are the file extensions that are allowed to be uploaded.
const ALLOWED_EXTENSIONS = ['pdf', 'jpg', 'png', 'jpeg', 'mp4'];

// Enum
const LOGBOOK_CATEGORY_TYPES = {
  LOGBOOK: 1,
  CATEGORY: 2,
};

// Enum
const UPLOAD_TYPES = {
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
};

// Enum
const LOGIN_TYPE = {
  WEB: 0,
  CHROME: 1,
};

// Enum
const ROLE_TYPES = {
  OWNER: 1,
  ADMIN: 2,
  CONTRIBUTOR: 3,
  VIEWER: 4,
  GUEST: 5,
  BUYER: 6,
  MRO: 7,
};

// Enum
const TRACKING_TYPES = {
  UPLOAD: 1,
  DOWNLOAD: 2,
  EMAILED: 3,
  PRINTED: 4,
  SHARED: 5,
};

// Enum
const MAILED_DOC_STATUS = {
  PENDING: 0,
  COMPLETE: 1,
  UNIDENTIFIED: 2,
  FAILED: -1,
  BLOCKED_SENDER: -2,
  NO_ATTACHMENTS: -3,
};

// Enum
const MAILED_REPLY_SENDING_TYPES = {
  DO_NOT_SEND_USER_REPLY: 0,
  EMAIL_TO_USER_SUCESSMSG: 1,
  EMAIL_TO_CS: 2,
  EMAIL_TO_BLOCKED_USER: 3,
  EMAIL_TO_USER_FOR_DELAY: 4,
  EMAIL_TO_USER_FOR_SYNTAX: 5,
  EMAIL_TO_USER_FOR_DEACTIVATED_AIRCRAFT: 6,
};

// Enum
const NOTIFICATION_TYPES = {
  DOCUMENT_ADDED: 1,
  DOCUMENT_EDITED: 2,
  DOCUMENT_RATED: 3, // ?
  DOCUMENT_COMMENTED: 4,
  NEW_USER_REGISTER: 5,
  PLANE_ADDED: 6,
  PLANE_REMOVED: 7,
  ENTIRE_LOGBOOK_DOWNLOAD: 8,
  REMOVE_USER: 9,
};
// TODO: These are inconsistently used throughout the backend (find "notify_type", check and replace with constants).

// Enum
const TIME_BASED_TOKEN_TYPE = {
  EMAIL: 1,
  RESET_PASSWORD: 2,
  FORGOT_PASSWORD: 3,
};

// Enum
const AIRCRAFT_SUBSCRIPTION_STATUS = {
  PROVISIONAL: 0,
  ACTIVE: 1,
  DEACTIVE: 2,
};

// Enum
const ACCOUNT_STYLE = {
  TRADITIONAL: 'traditional',
  PARTS: 'parts',
};

module.exports = {
  DEFAULT_FLEET_NAME,
  HOLD_SHORT,
  ILLEGAL_FILE_PATH_CHARS,
  ALLOWED_EXTENSIONS,
  UPLOAD_TYPES,
  LOGIN_TYPE,
  ROLE_TYPES,
  TRACKING_TYPES,
  LOGBOOK_CATEGORY_TYPES,
  MAILED_DOC_STATUS,
  MAILED_REPLY_SENDING_TYPES,
  NOTIFICATION_TYPES,
  TIME_BASED_TOKEN_TYPE,
  AIRCRAFT_SUBSCRIPTION_STATUS,
  ACCOUNT_STYLE,
};
