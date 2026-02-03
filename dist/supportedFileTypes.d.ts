export declare const SUPPORTED_EXTENSIONS: string[];
export declare const SUPPORTED_MIME_TYPES: string[];
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
//# sourceMappingURL=supportedFileTypes.d.ts.map