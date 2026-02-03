"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSourceFactory = exports.UPLOAD_TYPES = void 0;
exports.getUserIdFromSource = getUserIdFromSource;
exports.getUploadedTypeFromSource = getUploadedTypeFromSource;
/** Enum defining the different upload (source) types */
exports.UPLOAD_TYPES = {
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
};
/** Helper for constructing a FileSource */
exports.FileSourceFactory = {
    newFileSourceSession: (session_id, user_id, upload_type) => ({
        _type: 'USER_SESSION',
        session_id,
        user_id,
        upload_type,
    }),
    newFileSourceAdmin: (superadmin_id) => ({
        _type: 'ADMIN_UPLOAD',
        superadmin_id,
    }),
    newFileSourceEmail: (mailed_doc_id, sender_email) => ({
        _type: 'EMAIL',
        mailed_doc_id,
        sender_email,
    }),
    newFileSourceApi: (client_id, user_id) => ({
        _type: 'PUBLIC_API',
        client_id,
        user_id,
    }),
    newFileSourceIntegration: (external_system, external_file_id) => ({
        _type: 'INTEGRATION',
        external_system,
        external_file_id,
    }),
};
// These are the only valid types that can be used for a user session upload
const VALID_USER_SESSION_UPLOAD_TYPES = [exports.UPLOAD_TYPES.COMPUTER, exports.UPLOAD_TYPES.GOOGLE_DRIVE, exports.UPLOAD_TYPES.DROPBOX, exports.UPLOAD_TYPES.ONE_DRIVE];
const SYSTEM_USER_ID = 0;
function getUserIdFromSource(source) {
    switch (source._type) {
        case 'USER_SESSION':
            return source.user_id;
        case 'PUBLIC_API':
            return source.user_id;
        default:
            return SYSTEM_USER_ID; // Default when there's no direct user association
    }
}
function getUploadedTypeFromSource(source) {
    switch (source._type) {
        case 'USER_SESSION':
            return source.upload_type;
        case 'ADMIN_UPLOAD':
            return exports.UPLOAD_TYPES.ADMIN_UPLOAD;
        case 'EMAIL':
            return exports.UPLOAD_TYPES.EMAIL;
        case 'PUBLIC_API':
            return exports.UPLOAD_TYPES.PUBLIC_API;
        case 'INTEGRATION':
            return exports.UPLOAD_TYPES.VERYON_INTEGRATION;
        default:
            throw new Error('Unknown source type');
    }
}
