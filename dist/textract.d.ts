/** Enum defining the possible MACH outcomes for a file. */
export declare const TEXTRACT_STATUS: {
    /** Initial (default) value when file is uploaded */
    readonly PENDING: 0;
    /** Indicates that Textract processing is successfully complete. In UI we will show M icon for file. */
    readonly COMPLETE: 1;
    /** Indicates there was an error when we tried to process the file */
    readonly ERROR: -1;
    /** Indicates that Textract not supported for this file type */
    readonly NOT_SUPPORTED: -2;
    /** Indicates that this file should not be mach searched (or textracted) */
    readonly NO_TEXTRACT: -3;
};
/** Enum defining the possible Textract outcomes for a file. */
export type TextractStatus = (typeof TEXTRACT_STATUS)[keyof typeof TEXTRACT_STATUS];
/** Enum defining the possible MACH-processing outcomes for a file.
 * TEXTRACT_STATUS tells us the outcome of the operation overall, this field helps us know when a file is in-progress. */
export declare const MACH_STATUS: {
    /** Initial (default) value when file is uploaded */
    readonly PENDING: 0;
    /** Indicates that Textract processing has begun. Essentially this means "PENDING". In UI we will show pending status for file. */
    readonly BEGUN: 1;
};
/** Enum defining the possible MACH outcomes for a file. */
export type MachStatus = (typeof MACH_STATUS)[keyof typeof MACH_STATUS];
/**
 * Backfill status values used when backfilling Textract data into MongoDB.
 */
export declare const MONGO_TEXTRACT_BACKFILL_STATUS: {
    readonly TODO: 0;
    readonly DONE: 1;
    readonly NOTHING_TO_DO: -2;
    readonly FAILED: -1;
};
export type MongoTextractBackfillStatus = typeof MONGO_TEXTRACT_BACKFILL_STATUS[keyof typeof MONGO_TEXTRACT_BACKFILL_STATUS];
//# sourceMappingURL=textract.d.ts.map