"use strict";
/* eslint-disable no-magic-numbers */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIST_AIRCRAFT_MAKES_GROUP_TYPES = exports.ACCOUNT_STYLE = exports.ACCOUNT_STATUS = exports.AIRCRAFT_SUBSCRIPTION_STATUS = exports.TIME_BASED_TOKEN_TYPE = exports.NOTIFICATION_TYPES = exports.TRACKING_TYPES = exports.AIRCRAFT_ASSIGNMENT_METHOD = exports.UPLOAD_TYPES = exports.LOGBOOK_CATEGORY_TYPES = exports.LOCAL_DEFAULT_DATE_FORMAT = exports.DEFAULT_DATE_FORMAT = exports.DATE_TIME_FORMAT = exports.SYSTEM_USER_ID = exports.HOLD_SHORT = exports.DEFAULT_FLEET_NAME = exports.GENERIC_ERROR_MESSAGE = void 0;
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
    2024.10.02 - Remove LOGIN_TYPE as it is no longer required.
    2024.11.01 - Add Compliance priviledges.
    2024.11.05 - Remove unused PRIVILEGES.keywordsStatus
    2025.01.24 - Add the AIRCRAFT_ASSIGNMENT_METHOD enum and provided jsdoc for all the enums exported.
    2025.02.07 - Converting this package to use typescript.
*/
/** Generic error message to be used when an IDK error occurs.*/
exports.GENERIC_ERROR_MESSAGE = `
*Well, this is awkward.*
**We're having trouble completing your request.**
Need help now? Email us at <support@bluetail.aero>
`;
exports.DEFAULT_FLEET_NAME = 'All Aircraft';
/** The ID of the standard "HOLD SHORT" logbook_category. */
exports.HOLD_SHORT = 9;
exports.SYSTEM_USER_ID = 0;
// These date/time formats are used as standards across the application.
exports.DATE_TIME_FORMAT = 'YYYY-MM-DD[T]HH:mm:ss';
exports.DEFAULT_DATE_FORMAT = 'MM-DD-YYYY';
exports.LOCAL_DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';
/** Enum defining the types of logbook/category supported. */
exports.LOGBOOK_CATEGORY_TYPES = {
    LOGBOOK: 1,
    CATEGORY: 2,
};
/** Enum defining the different upload (source) types */
exports.UPLOAD_TYPES = {
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
/** Enum defining the supported aircraft assignment methods for users. */
exports.AIRCRAFT_ASSIGNMENT_METHOD = {
    ALL: 'all',
    FLEET: 'fleet',
    AIRCRAFT: 'aircraft',
};
/** Enum defining the system's supported tracked-event types */
exports.TRACKING_TYPES = {
    UPLOAD: 1,
    DOWNLOAD: 2,
    EMAILED: 3,
    PRINTED: 4,
    SHARED: 5,
};
/** Enum defining the types of notifications the system can send */
exports.NOTIFICATION_TYPES = {
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
/** Enum defining the types of time-based-tokens that the system can generate. */
exports.TIME_BASED_TOKEN_TYPE = {
    EMAIL: 1,
    RESET_PASSWORD: 2,
    FORGOT_PASSWORD: 3,
};
/** Enum defining the system's supported aircraft subscription statuses */
exports.AIRCRAFT_SUBSCRIPTION_STATUS = {
    PROVISIONAL: 0,
    ACTIVE: 1,
    DEACTIVE: 2,
};
/** Enum defining the system's supported account statuses */
exports.ACCOUNT_STATUS = {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
};
/** Enum defining the system's supported account styles */
exports.ACCOUNT_STYLE = {
    TRADITIONAL: 'traditional',
    PARTS: 'parts',
};
// Enum
exports.LIST_AIRCRAFT_MAKES_GROUP_TYPES = {
    POPULAR: 'popular',
    RARE: 'rare',
};
