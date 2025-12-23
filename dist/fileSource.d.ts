import { UploadType } from './constants';
/** Helper for constructing a FileSource */
export declare const FileSourceFactory: {
    newFileSourceSession: (session_id: bigint, user_id: number, upload_type: UploadType) => FileSourceSession;
    newFileSourceAdmin: (superadmin_id: number) => FileSourceAdmin;
    newFileSourceEmail: (mailed_doc_id: number, sender_email: string) => FileSourceEmail;
    newFileSourceApi: (client_id: string, user_id: number) => FileSourceApi;
    newFileSourceIntegration: (external_system: "VERYON", external_file_id: string) => FileSourceIntegration;
};
/** Defines how the file entered the system */
export type FileSource = FileSourceEmail | FileSourceApi | FileSourceSession | FileSourceAdmin | FileSourceIntegration;
/**  Describes how the file got into the system, when it was from a user session. */
export interface FileSourceSession {
    _type: 'USER_SESSION';
    session_id: bigint;
    user_id: number;
    upload_type: UploadType;
}
/**  Describes how the file got into the system via an Admin upload */
export interface FileSourceAdmin {
    _type: 'ADMIN_UPLOAD';
    superadmin_id: number;
}
/**  Describes how the file got into the system, when it was from email */
export interface FileSourceEmail {
    _type: 'EMAIL';
    mailed_doc_id: number;
    sender_email: string;
}
/**  Describes how the file got into the system, when it came via the API */
export interface FileSourceApi {
    _type: 'PUBLIC_API';
    client_id: string;
    user_id: number;
}
/**  Describes how the file got into the system via an integration */
export interface FileSourceIntegration {
    _type: 'INTEGRATION';
    external_system: 'VERYON';
    external_file_id: string;
}
export declare function getUserIdFromSource(source: FileSource): number | null;
export declare function getUploadedTypeFromSource(source: FileSource): UploadType;
//# sourceMappingURL=fileSource.d.ts.map