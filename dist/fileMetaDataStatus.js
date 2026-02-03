"use strict";
/*
  CHANGE HISTORY:
    2025.05.28 - Reorganize all constants.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE_METADATA_STATUS = void 0;
/** Enum defining the possible metadata processing outcomes for a file. */
exports.FILE_METADATA_STATUS = {
    /** Failed, because the PDF was corrupt or encrypted. */
    CORRUPTED_PDF: -4,
    /** Failed, for some unknown reason. */
    UNKNOWN_ERROR: -3,
    /** Failed, because of a network issue downloading the object from S3. */
    NETWORK_ERROR: -2,
    /** Failed, because the object could not be found on S3. */
    S3_FILE_NOT_EXIST: -1,
    /** Process is pending or in-progress. */
    PENDING: 0,
    /** Successful completion. */
    DONE: 1,
};
