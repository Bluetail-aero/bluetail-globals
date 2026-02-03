/** Constants for file processing log event names (pipeline performance tracking) */
export declare const FILE_PROCESSING_EVENTS: {
    /** This is the UTC timestamp when the upload of the file  completed (not when the upload started, which is what created_dt is) */
    readonly UPLOAD_COMPLETE: "UPLOAD_COMPLETE";
    /** This is the UTC timestamp when the metadata processing started for this file. */
    readonly METADATA_START: "METADATA_START";
    /** This is the UTC timestamp when the metadata processing ended for this file. */
    readonly METADATA_END: "METADATA_END";
    /** This is the UTC timestamp when the homogenization job was queued.*/
    readonly HOMOGENIZATION_QUEUED: "HOMOGENIZATION_QUEUED";
    /** This is the UTC timestamp when the homogenization job started.
     * Can be different to the queued time if there is a backlog of jobs.
    */
    readonly HOMOGENIZATION_START: "HOMOGENIZATION_START";
    /** This is the UTC timestamp when the homogenization job ended. */
    readonly HOMOGENIZATION_END: "HOMOGENIZATION_END";
    /** This is the UTC timestamp when the Textract job was sent to AWS. */
    readonly TEXTRACT_START: "TEXTRACT_START";
    /** This is the UTC timestamp when we discovered the Textract results were ready. */
    readonly TEXTRACT_RESULTS: "TEXTRACT_RESULTS";
    /** This is the UTC timestamp when the Textract job processing ended.
     * The results have been downloaded and written to the database.
     */
    readonly TEXTRACT_END: "TEXTRACT_END";
    /** This is the UTC timestamp when the indexing started. */
    readonly INDEX_START: "INDEX_START";
    /** This is the UTC timestamp when the indexing ended. */
    readonly INDEX_END: "INDEX_END";
    /** This is the UTC timestamp of when the file became Mach Searchable
     * (first time it is indexed after Textract has completed) */
    readonly MACH_SEARCHABLE: "MACH_SEARCHABLE";
    /** This is the UTC timestamp when the BADASS job was queued.*/
    readonly BADASS_QUEUED: "BADASS_QUEUED";
    /** This is the UTC timestamp when the BADASS agent started working on this job. */
    readonly BADASS_START: "BADASS_START";
    /** This is the UTC timestamp when the BADASS agent finished working on this job. */
    readonly BADASS_END: "BADASS_END";
    /** This is the UTC timestamp when the BADASS job was completed. */
    readonly BADASS_COMPLETE: "BADASS_COMPLETE";
};
export type FileProcessingEvent = (typeof FILE_PROCESSING_EVENTS)[keyof typeof FILE_PROCESSING_EVENTS];
//# sourceMappingURL=fileProcessingEvents.d.ts.map