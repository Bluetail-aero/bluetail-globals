/** Enum defining the possible form_status outcomes for a file. */
export declare const FORM_STATUS: {
    /** Failed, unspecific reason. */
    readonly FAILED: -1;
    /** Initial (default) value when file is uploaded. */
    readonly PENDING: 0;
    /** Successful completion (found a form_type). */
    readonly COMPLETED: 1;
    /** No action needed (form_type not found). */
    readonly NOTHING_FOUND: 2;
};
/** Enum defining the possible form status outcomes for a file. */
export type FormStatus = (typeof FORM_STATUS)[keyof typeof FORM_STATUS];
/** Enum defining the possible form_date_status outcomes for a file. */
export declare const FORM_DATE_STATUS: {
    /** Failed, unspecific reason. */
    readonly FAILED: -1;
    /** Initial (default) value when file is uploaded. */
    readonly PENDING: 0;
    /** Successful completion (found a form_date). */
    readonly COMPLETED: 1;
    /** No action needed (form_date not found). */
    readonly NOTHING_FOUND: 2;
};
/** Enum defining the possible form date status outcomes for a file. */
export type FormDateStatus = (typeof FORM_DATE_STATUS)[keyof typeof FORM_DATE_STATUS];
//# sourceMappingURL=fileFormStatus.d.ts.map