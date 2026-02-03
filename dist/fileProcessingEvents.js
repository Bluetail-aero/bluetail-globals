"use strict";
/*
  Constants for file processing log event names used for pipeline performance tracking.

  CHANGE HISTORY:
    2026.02.02 - Create these constants.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE_PROCESSING_EVENTS = void 0;
/** Constants for file processing log event names (pipeline performance tracking) */
exports.FILE_PROCESSING_EVENTS = {
    /** This is the UTC timestamp when the upload of the file  completed (not when the upload started, which is what created_dt is) */
    UPLOAD_COMPLETE: 'UPLOAD_COMPLETE',
    /** This is the UTC timestamp when the metadata processing started for this file. */
    METADATA_START: 'METADATA_START',
    /** This is the UTC timestamp when the metadata processing ended for this file. */
    METADATA_END: 'METADATA_END',
    // Homogenization jobs are queued
    /** This is the UTC timestamp when the homogenization job was queued.*/
    HOMOGENIZATION_QUEUED: 'HOMOGENIZATION_QUEUED',
    /** This is the UTC timestamp when the homogenization job started.
     * Can be different to the queued time if there is a backlog of jobs.
    */
    HOMOGENIZATION_START: 'HOMOGENIZATION_START',
    /** This is the UTC timestamp when the homogenization job ended. */
    HOMOGENIZATION_END: 'HOMOGENIZATION_END',
    // Textract jobs are queued and async processed, so there are delays.
    /** This is the UTC timestamp when the Textract job was sent to AWS. */
    TEXTRACT_START: 'TEXTRACT_START',
    /** This is the UTC timestamp when we discovered the Textract results were ready. */
    TEXTRACT_RESULTS: 'TEXTRACT_RESULTS',
    /** This is the UTC timestamp when the Textract job processing ended.
     * The results have been downloaded and written to the database.
     */
    TEXTRACT_END: 'TEXTRACT_END',
    // OpenSearch indexing can be processed "inline" by the backend or as a background job by the daemon.
    /** This is the UTC timestamp when the indexing started. */
    INDEX_START: 'INDEX_START',
    /** This is the UTC timestamp when the indexing ended. */
    INDEX_END: 'INDEX_END',
    /** This is the UTC timestamp of when the file became Mach Searchable
     * (first time it is indexed after Textract has completed) */
    MACH_SEARCHABLE: 'MACH_SEARCHABLE',
    // BADASS jobs are queued and async processed, so there are delays.
    /** This is the UTC timestamp when the BADASS job was queued.*/
    BADASS_QUEUED: 'BADASS_QUEUED',
    /** This is the UTC timestamp when the BADASS agent started working on this job. */
    BADASS_START: 'BADASS_START',
    /** This is the UTC timestamp when the BADASS agent finished working on this job. */
    BADASS_END: 'BADASS_END',
    /** This is the UTC timestamp when the BADASS job was completed. */
    BADASS_COMPLETE: 'BADASS_COMPLETE',
};
