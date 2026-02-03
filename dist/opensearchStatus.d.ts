/** Enum defining the possible OpenSearch indexing statuses for a document. */
export declare const OPENSEARCH_STATUS: {
    /** Indicates that the document was intentionally skipped (not indexed) */
    readonly SKIPPED: -2;
    /** Indicates that the document was not indexed due to an error. */
    readonly FAILED: -1;
    /** Initial (default) value when document has not been added to opensearch index (also used to reindex a document by resetting it back to this state) */
    readonly PENDING: 0;
    /** Indicates that the document has been indexed */
    readonly INDEXED: 1;
};
/** Enum defining the possible OpenSearch indexing statuses for a document. */
export type OpensearchStatus = (typeof OPENSEARCH_STATUS)[keyof typeof OPENSEARCH_STATUS];
//# sourceMappingURL=opensearchStatus.d.ts.map