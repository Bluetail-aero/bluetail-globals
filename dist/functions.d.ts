import { AccountStyle } from './constants';
export declare const ILLEGAL_FILE_PATH_CHARS: RegExp;
export declare const ALLOWED_FILE_PATH_CHAR: RegExp;
export declare const SUPPORTED_EXTENSIONS: string[];
export declare const SUPPORTED_MIME_TYPES: string[];
/**
 * Checks if a string (usually a filename) contains any illegal characters.
 * @param someString A string to test for illegal characters.
 * @returns null if no illegal characters are found, or an array of the unique illegal characters found.
 */
export declare function containsIllegalCharacters(someString: string): string[] | null;
/**
 * Replaces illegal characters in a string (usually a filename) with a replacement character.
 * @param someString A string to test replace illegal characters from.
 * @param replacementChar The character to replace illegal characters with. Default is '_'.
 * @returns  The sanitized string.
 */
export declare function removeIllegalCharacters(someString: string, replacementChar?: string): string | null;
/**
 * Tests if the given filename has a supported file extension.
 * @param filename - The name of the file to test.
 * @param supportedExtentions - An array of supported file extensions (defaults to SUPPORTED_EXTENSIONS)
 * @returns True if the file has a supported extension, false otherwise. If filename is undefined, null, or not a string, returns false.
 */
export declare function isSupportedFileExtension(filename: string, supportedExtentions?: string[]): boolean;
/**
 * Tests if the given mime type is supported.
 * @param filename - The name of the file to test.
 * @param  supportedMimetypes - An array of supported mime types (defaults to SUPPORTED_MIME_TYPES)
 * @returns - True if the file has a supported extension, false otherwise. If filename is undefined, null, or not a string, returns false.
 */
export declare function isSupportedMimeType(mimeType: string, supportedMimetypes?: string[]): boolean;
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
export declare function accountStyleText(authenticatedUser_or_accountStyle: AccountStyle | IAuthenticatedUser, tradStyle: string, partStyle: string): string;
export {};
//# sourceMappingURL=functions.d.ts.map