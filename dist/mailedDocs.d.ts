/** Enum defining the supported statuses for an imported email document */
export declare const MAILED_DOC_STATUS: {
    readonly PENDING: 0;
    readonly COMPLETE: 1;
    readonly UNIDENTIFIED: 2;
    readonly FAILED: -1;
    readonly BLOCKED_SENDER: -2;
    readonly NO_ATTACHMENTS: -3;
    readonly DUPLICATE: -4;
    readonly SMALL_IMAGE: -5;
};
export type MailedDocStatus = (typeof MAILED_DOC_STATUS)[keyof typeof MAILED_DOC_STATUS];
/** Enum defining the types of reply the system can send to people who emailed us documents */
export declare const MAILED_REPLY_SENDING_TYPES: {
    readonly DO_NOT_SEND_USER_REPLY: 0;
    readonly EMAIL_TO_USER_SUCESSMSG: 1;
    readonly EMAIL_TO_CS: 2;
    readonly EMAIL_TO_BLOCKED_USER: 3;
    readonly EMAIL_TO_USER_FOR_DELAY: 4;
    readonly EMAIL_TO_USER_FOR_SYNTAX: 5;
    readonly EMAIL_TO_USER_FOR_DEACTIVATED_AIRCRAFT: 6;
};
export type MailedReplySendingType = (typeof MAILED_REPLY_SENDING_TYPES)[keyof typeof MAILED_REPLY_SENDING_TYPES];
//# sourceMappingURL=mailedDocs.d.ts.map