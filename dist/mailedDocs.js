"use strict";
/*

  CHANGE HISTORY:
    2025.02.07 - Converting this package to use typescript.
               - Spun this module off from the main 'constants' module.

  TODOS:
    -
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAILED_REPLY_SENDING_TYPES = exports.MAILED_DOC_STATUS = void 0;
/** Enum defining the supported statuses for an imported email document */
exports.MAILED_DOC_STATUS = {
    PENDING: 0,
    COMPLETE: 1,
    UNIDENTIFIED: 2,
    FAILED: -1,
    BLOCKED_SENDER: -2,
    NO_ATTACHMENTS: -3,
};
/** Enum defining the types of reply the system can send to people who emailed us documents */
exports.MAILED_REPLY_SENDING_TYPES = {
    DO_NOT_SEND_USER_REPLY: 0,
    EMAIL_TO_USER_SUCESSMSG: 1,
    EMAIL_TO_CS: 2,
    EMAIL_TO_BLOCKED_USER: 3,
    EMAIL_TO_USER_FOR_DELAY: 4,
    EMAIL_TO_USER_FOR_SYNTAX: 5,
    EMAIL_TO_USER_FOR_DEACTIVATED_AIRCRAFT: 6,
};
