/*
  CHANGE HISTORY:
    2025.05.28 - Reorganize all constants.
*/

/** Enum defining the possible OpenSearch indexing statuses for a document. */
export const OPENSEARCH_STATUS = {
  /** Indicates that the document was intentionally skipped (not indexed) */
  SKIPPED: -2,

  /** Indicates that the document was not indexed due to an error. */
  FAILED: -1,

  /** Initial (default) value when document has not been added to opensearch index (also used to reindex a document by resetting it back to this state) */
  PENDING: 0,

  /** Indicates that the document has been indexed */
  INDEXED: 1,
} as const;
/** Enum defining the possible OpenSearch indexing statuses for a document. */
export type OpensearchStatus = (typeof OPENSEARCH_STATUS)[keyof typeof OPENSEARCH_STATUS];
