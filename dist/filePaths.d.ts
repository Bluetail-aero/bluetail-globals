export declare const ILLEGAL_FILE_PATH_CHARS: RegExp;
export declare const ALLOWED_FILE_PATH_CHAR: RegExp;
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
//# sourceMappingURL=filePaths.d.ts.map