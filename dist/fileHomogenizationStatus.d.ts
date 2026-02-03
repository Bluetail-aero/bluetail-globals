/** Enum defining the possible homogenization outcomes for a file. */
export declare const FILE_HOMOGENIZATION_STATUS: {
    /** Homogenization is not required for this file. */
    readonly NOT_NEEDED: -9;
    /** Failed, because it failed meta-data extraction. */
    readonly NO_META_DATA: -8;
    /** Failed, because the PDF was corrupt or encrypted. */
    readonly ENCRYPTED_PDF: -7;
    /** Failed, because we don't know how many pages the PDF contains. */
    readonly PAGE_COUNT_NULL: -6;
    /** Failed, because a doc_master record for the file could not be found. */
    readonly DOC_MASTER_ID_UNKNOWN: -5;
    /** Failed, because the object could not be loaded from S3. */
    readonly FAILED_TO_LOAD: -4;
    /** Failed, because the object was not found on S3. */
    readonly OBJECT_NOT_FOUND: -3;
    /** Failed, because the files type is not supported. */
    readonly NOT_SUPPORTED: -2;
    /** Failed, unspecific reason. */
    readonly FAILED: -1;
    /** Process is pending or in-progress. */
    readonly PENDING: 0;
    /** Successful completion. */
    readonly COMPLETED: 1;
};
/** Enum defining the possible homogenization outcomes for a file. */
export type FileHomogenizationStatus = (typeof FILE_HOMOGENIZATION_STATUS)[keyof typeof FILE_HOMOGENIZATION_STATUS];
//# sourceMappingURL=fileHomogenizationStatus.d.ts.map