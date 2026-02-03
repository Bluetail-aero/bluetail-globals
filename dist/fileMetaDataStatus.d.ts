/** Enum defining the possible metadata processing outcomes for a file. */
export declare const FILE_METADATA_STATUS: {
    /** Failed, because the PDF was corrupt or encrypted. */
    readonly CORRUPTED_PDF: -4;
    /** Failed, for some unknown reason. */
    readonly UNKNOWN_ERROR: -3;
    /** Failed, because of a network issue downloading the object from S3. */
    readonly NETWORK_ERROR: -2;
    /** Failed, because the object could not be found on S3. */
    readonly S3_FILE_NOT_EXIST: -1;
    /** Process is pending or in-progress. */
    readonly PENDING: 0;
    /** Successful completion. */
    readonly DONE: 1;
};
/** Enum defining the possible metadata processing outcomes for a file. */
export type FileMetaDataStatus = (typeof FILE_METADATA_STATUS)[keyof typeof FILE_METADATA_STATUS];
//# sourceMappingURL=fileMetaDataStatus.d.ts.map