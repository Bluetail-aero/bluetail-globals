/** Enum defining the possible page data path methods.  This is how we construct a path to homogenized page files and thumbnails. */
export declare const PAGE_DATA_PATH_METHOD: {
    /** Legacy path method. */
    readonly PREFIX_PER_FILE: 1;
    /** New path method. See https://bluetail.atlassian.net/browse/BT-7299 */
    readonly PREFIX_PER_PAGE: 2;
};
/** Enum defining the possible metadata processing outcomes for a file. */
export type PageDataPathMethod = (typeof PAGE_DATA_PATH_METHOD)[keyof typeof PAGE_DATA_PATH_METHOD];
/**
 * Forms the S3 object key for a page.
 * @param method - The page data path method.
 * @param companyS3FolderKey - The S3 folder key for the company.
 * @param fileId - The ID of the file.
 * @param pageNo - The page number.
 * @returns The S3 object key for the page.
 */
export declare function formObjectKeyForPage(method: PageDataPathMethod, companyS3FolderKey: string, fileId: number, pageNo: number): string;
/**
 * Forms the S3 object key for a thumbnail.
 * @param method - The page data path method.
 * @param companyS3FolderKey - The S3 folder key for the company.
 * @param fileId - The ID of the file.
 * @param pageNo - The page number.
 * @returns The S3 object key for the thumbnail.
 */
export declare function formObjectKeyForThumbnail(method: PageDataPathMethod, companyS3FolderKey: string, fileId: number, pageNo: number): string;
//# sourceMappingURL=pageDataPathMethodFuncs.d.ts.map