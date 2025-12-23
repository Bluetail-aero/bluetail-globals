"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSourceFactory = void 0;
exports.getUserIdFromSource = getUserIdFromSource;
exports.getUploadedTypeFromSource = getUploadedTypeFromSource;
const constants_1 = require("./constants");
/*
  CHANGE HISTORY:
    2025.04.22 - [2.0.0] Complete overhaul of the whole package:
                 - 100% conversion to Typescript.
                 - Folder-ized the services.
                 - All the modules pretending to be a DataAdapter that weren't have been refactored as service layer functions.
                 - Some of the service layer functions have been reorganized according to a module naming strategy.
    2025.12.23 - [1.5.0] Moved FileSourceFactory, FileSource, getUserIdFromSource, getUploadedTypeFromSource etc from bluetail-domain.
*/
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
const VALID_USER_SESSION_UPLOAD_TYPES = [constants_1.UPLOAD_TYPES.COMPUTER, constants_1.UPLOAD_TYPES.GOOGLE_DRIVE, constants_1.UPLOAD_TYPES.DROPBOX, constants_1.UPLOAD_TYPES.ONE_DRIVE];
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
            return constants_1.UPLOAD_TYPES.ADMIN_UPLOAD;
        case 'EMAIL':
            return constants_1.UPLOAD_TYPES.EMAIL;
        case 'PUBLIC_API':
            return constants_1.UPLOAD_TYPES.PUBLIC_API;
        case 'INTEGRATION':
            return constants_1.UPLOAD_TYPES.VERYON_INTEGRATION;
        default:
            throw new Error('Unknown source type');
    }
}
