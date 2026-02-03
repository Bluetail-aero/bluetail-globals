"use strict";
/*
  CHANGE HISTORY:
    2025.05.28 - Reorganize all constants.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.OPENSEARCH_STATUS = void 0;
/** Enum defining the possible OpenSearch indexing statuses for a document. */
exports.OPENSEARCH_STATUS = {
    /** Indicates that the document was intentionally skipped (not indexed) */
    SKIPPED: -2,
    /** Indicates that the document was not indexed due to an error. */
    FAILED: -1,
    /** Initial (default) value when document has not been added to opensearch index (also used to reindex a document by resetting it back to this state) */
    PENDING: 0,
    /** Indicates that the document has been indexed */
    INDEXED: 1,
};
