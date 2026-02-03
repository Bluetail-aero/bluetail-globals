"use strict";
/*
  CHANGE HISTORY:
    2025.05.28 - Reorganize all constants.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_STATUS = void 0;
/** Enum defining the possible values of juf.delete_status */
exports.DELETE_STATUS = {
    /** Used when the JUF record has been created, but the upload has not been committed/confirmed. Files in this state are not considered a complete upload. */
    PENDING: -1,
    /** The file is active */
    ACTIVE: 0,
    /** The file is archived (deleted) */
    ARCHIVED: 1
};
