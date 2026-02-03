"use strict";
/*
  CHANGE HISTORY:
    2025.05.28 - Reorganize all constants.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.FORM_DATE_STATUS = exports.FORM_STATUS = void 0;
/** Enum defining the possible form_status outcomes for a file. */
exports.FORM_STATUS = {
    /** Failed, unspecific reason. */
    FAILED: -1,
    /** Initial (default) value when file is uploaded. */
    PENDING: 0,
    /** Successful completion (found a form_type). */
    COMPLETED: 1,
    /** No action needed (form_type not found). */
    NOTHING_FOUND: 2
};
/** Enum defining the possible form_date_status outcomes for a file. */
exports.FORM_DATE_STATUS = {
    /** Failed, unspecific reason. */
    FAILED: -1,
    /** Initial (default) value when file is uploaded. */
    PENDING: 0,
    /** Successful completion (found a form_date). */
    COMPLETED: 1,
    /** No action needed (form_date not found). */
    NOTHING_FOUND: 2
};
