import { AccountStyle, ACCOUNT_STYLE } from './constants';
/*

  CHANGE HISTORY:
    2024.05.31 - Remove the need for the 'path' module so this will work in a browser.
    2025.01.17 - Fix lint warnings "Unexpected unnamed function"
    2025.01.24 - Add accountStyleText function.
    2025.02.07 - Converting this package to use typescript.

  TODOS:
    -
*/

// These characters are not allowed in file names. They will be removed and replaced by "_".
export const ILLEGAL_FILE_PATH_CHARS = /[^0-9a-zA-Z!\-_\.'()/]/g;

// These characters are allowed in file names.
export const ALLOWED_FILE_PATH_CHAR = /[0-9a-zA-Z!\-_\.'()/]/g;
// Since all files are stored in S3 we based this decision on the AWS S3 object key guidelines.
// https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-guidelines

export const SUPPORTED_EXTENSIONS = ['pdf', 'jpg', 'png', 'jpeg', 'mp4', 'doc', 'docx', 'xls', 'xlsx', 'gif']; // We only need to specify these in lowercase.
export const SUPPORTED_MIME_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'video/mp4', 'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'image/gif',
];

/**
 * Checks if a string (usually a filename) contains any illegal characters.
 * @param someString A string to test for illegal characters.
 * @returns null if no illegal characters are found, or an array of the unique illegal characters found.
 */
export function containsIllegalCharacters(someString: string): string[] | null {
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
}

/**
 * Replaces illegal characters in a string (usually a filename) with a replacement character.
 * @param someString A string to test replace illegal characters from.
 * @param replacementChar The character to replace illegal characters with. Default is '_'.
 * @returns  The sanitized string.
 */
export function removeIllegalCharacters(someString: string, replacementChar: string = '_'): string | null {
  if (!someString) return null;
  if (!someString || typeof someString !== 'string') throw new Error('Expected someString to be a string');
  // Replace illegal characters with '_' = any chracters NOT in this reg ex FILE_NAME_ALLOWED_CHARS
  return someString.replace(ILLEGAL_FILE_PATH_CHARS, replacementChar);
}

/**
 * Tests if the given filename has a supported file extension.
 * @param filename - The name of the file to test.
 * @param supportedExtentions - An array of supported file extensions (defaults to SUPPORTED_EXTENSIONS)
 * @returns True if the file has a supported extension, false otherwise. If filename is undefined, null, or not a string, returns false.
 */
export function isSupportedFileExtension(filename: string, supportedExtentions: string[] = SUPPORTED_EXTENSIONS): boolean {
  if (!filename || typeof filename !== 'string') return false;
  const fileExtension = filename.split('.').pop().toLowerCase();
  return supportedExtentions.includes(fileExtension);
}

/**
 * Tests if the given mime type is supported.
 * @param filename - The name of the file to test.
 * @param  supportedMimetypes - An array of supported mime types (defaults to SUPPORTED_MIME_TYPES)
 * @returns - True if the file has a supported extension, false otherwise. If filename is undefined, null, or not a string, returns false.
 */
export function isSupportedMimeType(mimeType: string, supportedMimetypes: string[] = SUPPORTED_MIME_TYPES): boolean {
  return supportedMimetypes.includes(mimeType);
}

interface IAuthenticatedUser {
  company: {
    style: AccountStyle;
  };
}

/**
 * Returns the appropriate style verbiage based on the account style.
 * @param authenticatedUser_or_accountStyle Either the account_style string, or an authenticated user object.
 * @param tradStyle The traditional style verbiage.
 * @param partStyle The parts style verbiage.
 * @returns The appropriate style verbiage.
 */
export function accountStyleText(
  authenticatedUser_or_accountStyle: AccountStyle | IAuthenticatedUser,
  tradStyle: string,
  partStyle: string
): string {
  // Determine if input is an AccountStyle string or an IAuthenticatedUser object
  const accountStyle =
    typeof authenticatedUser_or_accountStyle === 'string'
      ? authenticatedUser_or_accountStyle
      : authenticatedUser_or_accountStyle.company.style;

  return accountStyle === ACCOUNT_STYLE.PARTS ? partStyle : tradStyle;
}