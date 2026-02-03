"use strict";
/*
  CHANGE HISTORY:
    2025.05.28 - Reorganize all constants.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_TEXTRACT_BACKFILL_STATUS = exports.MACH_STATUS = exports.TEXTRACT_STATUS = void 0;
/** Enum defining the possible MACH outcomes for a file. */
exports.TEXTRACT_STATUS = {
    /** Initial (default) value when file is uploaded */
    PENDING: 0,
    /** Indicates that Textract processing is successfully complete. In UI we will show M icon for file. */
    COMPLETE: 1,
    /** Indicates there was an error when we tried to process the file */
    ERROR: -1,
    /** Indicates that Textract not supported for this file type */
    NOT_SUPPORTED: -2,
    /** Indicates that this file should not be mach searched (or textracted) */
    NO_TEXTRACT: -3,
};
/** Enum defining the possible MACH-processing outcomes for a file.
 * TEXTRACT_STATUS tells us the outcome of the operation overall, this field helps us know when a file is in-progress. */
exports.MACH_STATUS = {
    /** Initial (default) value when file is uploaded */
    PENDING: 0,
    /** Indicates that Textract processing has begun. Essentially this means "PENDING". In UI we will show pending status for file. */
    BEGUN: 1
};
/**
 * Backfill status values used when backfilling Textract data into MongoDB.
 */
exports.MONGO_TEXTRACT_BACKFILL_STATUS = {
    TODO: 0,
    DONE: 1,
    NOTHING_TO_DO: -2,
    FAILED: -1
};
