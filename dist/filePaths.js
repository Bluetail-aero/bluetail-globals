"use strict";
/*
  CHANGE HISTORY:
    2024.05.31 - Remove the need for the 'path' module so this will work in a browser.
    2025.01.17 - Fix lint warnings "Unexpected unnamed function"
    2025.01.24 - Add accountStyleText function.
    2025.02.07 - Converting this package to use typescript.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALLOWED_FILE_PATH_CHAR = exports.ILLEGAL_FILE_PATH_CHARS = void 0;
exports.containsIllegalCharacters = containsIllegalCharacters;
exports.removeIllegalCharacters = removeIllegalCharacters;
// These characters are not allowed in file names. They will be removed and replaced by "_".
exports.ILLEGAL_FILE_PATH_CHARS = /[^0-9a-zA-Z!\-_\.'()/]/g;
// These characters are allowed in file names.
exports.ALLOWED_FILE_PATH_CHAR = /[0-9a-zA-Z!\-_\.'()/]/g;
// Since all files are stored in S3 we based this decision on the AWS S3 object key guidelines.
// https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-guidelines
/**
 * Checks if a string (usually a filename) contains any illegal characters.
 * @param someString A string to test for illegal characters.
 * @returns null if no illegal characters are found, or an array of the unique illegal characters found.
 */
function containsIllegalCharacters(someString) {
    if (!someString)
        return null;
    if (!someString || typeof someString !== 'string')
        throw new Error('Expected someString to be a string');
    const illegalCharsInKey = someString.match(exports.ILLEGAL_FILE_PATH_CHARS);
    if (illegalCharsInKey == null) {
        // No illegal characters found, so return null
        return null;
    }
    // Return just the unique illegal characters found.
    return illegalCharsInKey.filter((value, index, array) => array.indexOf(value) === index);
}
/**
 * Replaces illegal characters in a string (usually a filename) with a replacement character.
 * @param someString A string to test replace illegal characters from.
 * @param replacementChar The character to replace illegal characters with. Default is '_'.
 * @returns  The sanitized string.
 */
function removeIllegalCharacters(someString, replacementChar = '_') {
    if (!someString)
        return null;
    if (!someString || typeof someString !== 'string')
        throw new Error('Expected someString to be a string');
    // Replace illegal characters with '_' = any chracters NOT in this reg ex FILE_NAME_ALLOWED_CHARS
    return someString.replace(exports.ILLEGAL_FILE_PATH_CHARS, replacementChar);
}
