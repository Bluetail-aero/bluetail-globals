/** Enum defining the possible values of juf.delete_status */
export declare const DELETE_STATUS: {
    /** Used when the JUF record has been created, but the upload has not been committed/confirmed. Files in this state are not considered a complete upload. */
    readonly PENDING: -1;
    /** The file is active */
    readonly ACTIVE: 0;
    /** The file is archived (deleted) */
    readonly ARCHIVED: 1;
};
/** Enum defining the possible values of juf.delete_status */
export type DeleteStatus = (typeof DELETE_STATUS)[keyof typeof DELETE_STATUS];
//# sourceMappingURL=fileDeleteStatus.d.ts.map