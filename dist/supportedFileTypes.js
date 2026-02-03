"use strict";
/*
  CHANGE HISTORY:
    2024.05.31 - Remove the need for the 'path' module so this will work in a browser.
    2025.01.17 - Fix lint warnings "Unexpected unnamed function"
    2025.01.24 - Add accountStyleText function.
    2025.02.07 - Converting this package to use typescript.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPPORTED_MIME_TYPES = exports.SUPPORTED_EXTENSIONS = void 0;
exports.isSupportedFileExtension = isSupportedFileExtension;
exports.isSupportedMimeType = isSupportedMimeType;
exports.SUPPORTED_EXTENSIONS = ['pdf', 'jpg', 'png', 'jpeg', 'mp4', 'doc', 'docx', 'xls', 'xlsx', 'gif']; // We only need to specify these in lowercase.
exports.SUPPORTED_MIME_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'video/mp4', 'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'image/gif',
];
/**
 * Tests if the given filename has a supported file extension.
 * @param filename - The name of the file to test.
 * @param supportedExtentions - An array of supported file extensions (defaults to SUPPORTED_EXTENSIONS)
 * @returns True if the file has a supported extension, false otherwise. If filename is undefined, null, or not a string, returns false.
 */
function isSupportedFileExtension(filename, supportedExtentions = exports.SUPPORTED_EXTENSIONS) {
    if (!filename || typeof filename !== 'string')
        return false;
    const fileExtension = filename.split('.').pop().toLowerCase();
    return supportedExtentions.includes(fileExtension);
}
/**
 * Tests if the given mime type is supported.
 * @param filename - The name of the file to test.
 * @param  supportedMimetypes - An array of supported mime types (defaults to SUPPORTED_MIME_TYPES)
 * @returns - True if the file has a supported extension, false otherwise. If filename is undefined, null, or not a string, returns false.
 */
function isSupportedMimeType(mimeType, supportedMimetypes = exports.SUPPORTED_MIME_TYPES) {
    return supportedMimetypes.includes(mimeType);
}
