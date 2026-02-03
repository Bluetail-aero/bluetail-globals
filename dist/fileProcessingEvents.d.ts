/** Constants for file processing log event names (pipeline performance tracking) */
export declare const FILE_PROCESSING_EVENTS: {
    readonly UPLOAD_COMPLETE: "UPLOAD_COMPLETE";
    readonly METADATA_START: "METADATA_START";
    readonly METADATA_END: "METADATA_END";
    readonly HOMOGENIZATION_QUEUED: "HOMOGENIZATION_QUEUED";
    readonly HOMOGENIZATION_START: "HOMOGENIZATION_START";
    readonly HOMOGENIZATION_END: "HOMOGENIZATION_END";
    readonly TEXTRACT_START: "TEXTRACT_START";
    readonly TEXTRACT_RESULTS: "TEXTRACT_RESULTS";
    readonly TEXTRACT_END: "TEXTRACT_END";
    readonly INDEX_START: "INDEX_START";
    readonly INDEX_END: "INDEX_END";
    readonly MACH_SEARCHABLE: "MACH_SEARCHABLE";
    readonly BADASS_QUEUED: "BADASS_QUEUED";
    readonly BADASS_START: "BADASS_START";
    readonly BADASS_END: "BADASS_END";
    readonly BADASS_COMPLETE: "BADASS_COMPLETE";
};
export type FileProcessingEvent = (typeof FILE_PROCESSING_EVENTS)[keyof typeof FILE_PROCESSING_EVENTS];
//# sourceMappingURL=fileProcessingEvents.d.ts.map