const {
  ILLEGAL_FILE_PATH_CHARS, SUPPORTED_EXTENSIONS, SUPPORTED_MIME_TYPES, ACCOUNT_STYLE,
} = require('./constants');

/*
  exports {
    containsIllegalCharacters,
    removeIllegalCharacters,
    isSupportedFileExtension,
    isSupportedMimeType,
  }

  CHANGE HISTORY:
    2024.05.31 - Remove the need for the 'path' module so this will work in a browser.
    2025.01.17 - Fix lint warnings "Unexpected unnamed function"
    2025.01.24 - Add accountStyleVerbage function.

  TODOS:
    -
*/

/**
 * Checks if a string (usually a filename) contains any illegal characters.
 * @param {string} someString A string to test for illegal characters.
 * @returns null if no illegal characters are found, or an array of the unique illegal characters found.
 */
exports.containsIllegalCharacters = (someString) => {
  if (!someString) return null;
  if (!someString || typeof someString !== 'string') throw new Error('Expected someString to be a string');
  const illegalCharsInKey = someString.match(ILLEGAL_FILE_PATH_CHARS);
  if (illegalCharsInKey == null) {
    // No illegal characters found, so return null
    return null;
  }
  // Return just the unique illegal characters found.
  return illegalCharsInKey.filter((value, index, array) =>
    array.indexOf(value) === index);
};

/**
 * Replaces illegal characters in a string (usually a filename) with a replacement character.
 * @param {string} someString A string to test replace illegal characters from.
 * @param {string} replacementChar The character to replace illegal characters with. Default is '_'.
 * @returns {string} The sanitized string.
 */
exports.removeIllegalCharacters = (someString, replacementChar = '_') => {
  if (!someString) return null;
  if (!someString || typeof someString !== 'string') throw new Error('Expected someString to be a string');
  // Replace illegal characters with '_' = any chracters NOT in this reg ex FILE_NAME_ALLOWED_CHARS
  return someString.replace(ILLEGAL_FILE_PATH_CHARS, replacementChar);
};

/**
 * Tests if the given filename has a supported file extension.
 * @param {string} filename - The name of the file to test.
 * @param {string[]} supportedExtentions - An array of supported file extensions (defaults to SUPPORTED_EXTENSIONS)
 * @returns {boolean} - True if the file has a supported extension, false otherwise. If filename is undefined, null, or not a string, returns false.
 */
exports.isSupportedFileExtension = (filename, supportedExtentions = SUPPORTED_EXTENSIONS) => {
  if (!filename || typeof filename !== 'string') return false;
  const fileExtension = filename.split('.').pop().toLowerCase();
  return supportedExtentions.includes(fileExtension);
};

/**
 * Tests if the given mime type is supported.
 * @param {string} filename - The name of the file to test.
 * @param {string[]} supportedMimetypes - An array of supported mime types (defaults to SUPPORTED_MIME_TYPES)
 * @returns {boolean} - True if the file has a supported extension, false otherwise. If filename is undefined, null, or not a string, returns false.
 */
exports.isSupportedMimeType = (mimeType, supportedMimetypes = SUPPORTED_MIME_TYPES) =>
  supportedMimetypes.includes(mimeType);

/**
 * Returns the appropriate style verbiage based on the account style.
 * @param {ACCOUNT_STYLE | IAuthenticatedUser} accountStyle  Either the account_style string, or the authenticatedUser object. This supports us passing in `res.locals.authenticatedUser` (in the backend) or the account_style string (in the frontent).
 * @param {string} tradStyle The traditional style verbiage.
 * @param {string} partStyle The parts style verbiage.
 * @returns {string} The appropriate style verbiage.
 */
exports.accountStyleVerbage = (authenticatedUser_or_accountStyle, tradStyle, partStyle) => {
  // This supports us passing in `res.locals.authenticatedUser` (in the backend)
  const accountStyle = typeof authenticatedUser_or_accountStyle === 'string'
    ? authenticatedUser_or_accountStyle
    : authenticatedUser_or_accountStyle.company.style;
  switch (accountStyle) {
    case ACCOUNT_STYLE.PARTS:
      return partStyle;
    case ACCOUNT_STYLE.TRADITIONAL:
    default:
      return tradStyle;
  }
};
