"use strict";
/*
  CHANGE HISTORY:
    2025.05.28 - Reorganize all constants.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOTIFICATION_TYPES = exports.TRACKING_TYPES = exports.SYSTEM_USER_ID = exports.GENERIC_ERROR_MESSAGE = void 0;
/** Generic error message to be used when an IDK error occurs.*/
exports.GENERIC_ERROR_MESSAGE = `
*Well, this is awkward.*
**We're having trouble completing your request.**
Need help now? Email us at <support@bluetail.aero>
`;
exports.SYSTEM_USER_ID = 0;
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
