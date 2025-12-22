import { PageDataPathMethod } from './constants';
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