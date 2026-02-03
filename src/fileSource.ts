/*
  CHANGE HISTORY:
    2025.04.22 - [2.0.0] Complete overhaul of the whole package:
                 - 100% conversion to Typescript.
                 - Folder-ized the services.
                 - All the modules pretending to be a DataAdapter that weren't have been refactored as service layer functions.
                 - Some of the service layer functions have been reorganized according to a module naming strategy.
    2025.12.23 - [1.5.0] Moved FileSourceFactory, FileSource, getUserIdFromSource, getUploadedTypeFromSource etc from bluetail-domain.
    2025.05.28 - Reorganize all constants.
*/

/** Enum defining the different upload (source) types */
export const UPLOAD_TYPES = {
  COMPUTER: 1,
  GOOGLE_DRIVE: 2,
  DROPBOX: 3,
  ONE_DRIVE: 4,
  WATERMARK: 5, // when applying a watermark ?? unclear if we are uploading a new file or modifying existing one.
  E_SIGN: 5, //  when applying a e-signature ?? unclear if we are uploading a new file or modifying existing one.
  WEB_CLIPPER: 6,
  VERYON_INTEGRATION: 7,
  // Note: 8 was used once, but is now deprecated.
  ADMIN_UPLOAD: 9,
  EMAIL: 10,
  PUBLIC_API: 11,
  STRATOLAUNCHER: 12,
} as const;
export type UploadType = (typeof UPLOAD_TYPES)[keyof typeof UPLOAD_TYPES];

/** Helper for constructing a FileSource */
export const FileSourceFactory = {
  newFileSourceSession: (session_id: bigint, user_id: number, upload_type: UploadType): FileSourceSession => ({
    _type: 'USER_SESSION',
    session_id,
    user_id,
    upload_type,
  }),
  newFileSourceAdmin: (superadmin_id: number): FileSourceAdmin => ({
    _type: 'ADMIN_UPLOAD',
    superadmin_id,
  }),
  newFileSourceEmail: (mailed_doc_id: number, sender_email: string): FileSourceEmail => ({
    _type: 'EMAIL',
    mailed_doc_id,
    sender_email,
  }),
  newFileSourceApi: (client_id: string, user_id: number): FileSourceApi => ({
    _type: 'PUBLIC_API',
    client_id,
    user_id,
  }),
  newFileSourceIntegration: (external_system: 'VERYON', external_file_id: string): FileSourceIntegration => ({
    _type: 'INTEGRATION',
    external_system,
    external_file_id,
  }),
};

/** Defines how the file entered the system */
export type FileSource =
  | FileSourceEmail
  | FileSourceApi
  | FileSourceSession
  | FileSourceAdmin
  | FileSourceIntegration;

/**  Describes how the file got into the system, when it was from a user session. */
export interface FileSourceSession {
  _type: 'USER_SESSION';
  session_id: bigint;
  user_id: number;
  upload_type: UploadType;  // COMPUTER, GOOGLE_DRIVE, DROPBOX, etc.
}

// These are the only valid types that can be used for a user session upload
const VALID_USER_SESSION_UPLOAD_TYPES: number[] = [UPLOAD_TYPES.COMPUTER, UPLOAD_TYPES.GOOGLE_DRIVE, UPLOAD_TYPES.DROPBOX, UPLOAD_TYPES.ONE_DRIVE];

/**  Describes how the file got into the system via an Admin upload */
export interface FileSourceAdmin {
  _type: 'ADMIN_UPLOAD';
  superadmin_id: number; // ID of the admin user performing the upload
}

/**  Describes how the file got into the system, when it was from email */
export interface FileSourceEmail {
  _type: 'EMAIL';
  mailed_doc_id: number;  // ID linking to the email record
  sender_email: string;   // Email sender address (to help determine user)
}

/**  Describes how the file got into the system, when it came via the API */
export interface FileSourceApi {
  _type: 'PUBLIC_API';
  client_id: string;  // Which API client uploaded (e.g., 'Traxall', 'Stratolauncher')
  user_id: number; // Which user did the uploading.
}

/**  Describes how the file got into the system via an integration */
export interface FileSourceIntegration {
  _type: 'INTEGRATION';
  external_system: 'VERYON';  // Can expand this in the future
  external_file_id: string;   // File ID in the external system
}

const SYSTEM_USER_ID = 0;

export function getUserIdFromSource(source: FileSource): number | null {
  switch (source._type) {
    case 'USER_SESSION':
      return source.user_id;
    case 'PUBLIC_API':
      return source.user_id;
    default:
      return SYSTEM_USER_ID; // Default when there's no direct user association
  }
}

export function getUploadedTypeFromSource(source: FileSource): UploadType {
  switch (source._type) {
    case 'USER_SESSION':
      return source.upload_type;
    case 'ADMIN_UPLOAD':
      return UPLOAD_TYPES.ADMIN_UPLOAD;
    case 'EMAIL':
      return UPLOAD_TYPES.EMAIL;
    case 'PUBLIC_API':
      return UPLOAD_TYPES.PUBLIC_API;
    case 'INTEGRATION':
      return UPLOAD_TYPES.VERYON_INTEGRATION;
    default:
      throw new Error('Unknown source type');
  }
}