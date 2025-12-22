import { PAGE_DATA_PATH_METHOD, PageDataPathMethod } from './constants';

/*
  CHANGE HISTORY:
    2025.07.07 - Moved formObjectKeyForPage to its own file for exporting (use in homogenizer-lambda). BT-7304
    2025.12.22 - Moved these functions from bluetail-domain PageDataService to here BT-8021
*/

// Functions created to handle transition to new page data path method.
// See https://bluetail.atlassian.net/browse/BT-7299

/**
 * Forms the S3 object key for a page.
 * @param method - The page data path method.
 * @param companyS3FolderKey - The S3 folder key for the company.
 * @param fileId - The ID of the file.
 * @param pageNo - The page number.
 * @returns The S3 object key for the page.
 */
export function formObjectKeyForPage(
  method: PageDataPathMethod,
  companyS3FolderKey: string,
  fileId: number,
  pageNo: number
): string {
  switch (method) {
    case PAGE_DATA_PATH_METHOD.PREFIX_PER_FILE:
      // This is the legacy method where all pages of a file are in the same folder.
      return [
        companyS3FolderKey,
        'pages',
        fileId.toString(),
        `${pageNo}.pdf`
      ].join('/');
    case PAGE_DATA_PATH_METHOD.PREFIX_PER_PAGE:
      // This is the new method where each page has its own folder.
      return [
        companyS3FolderKey,
        'pages',
        fileId.toString(),
        pageNo.toString(),
        `page_${fileId}_${pageNo}.pdf`
      ].join('/');
    default:
      throw new Error(`Unknown page_data_path_method: ${method}`);
  }
}

/**
 * Forms the S3 object key for a thumbnail.
 * @param method - The page data path method.
 * @param companyS3FolderKey - The S3 folder key for the company.
 * @param fileId - The ID of the file.
 * @param pageNo - The page number.
 * @returns The S3 object key for the thumbnail.
 */
export function formObjectKeyForThumbnail(
  method: PageDataPathMethod,
  companyS3FolderKey: string,
  fileId: number,
  pageNo: number
): string {
  switch (method) {
    case PAGE_DATA_PATH_METHOD.PREFIX_PER_FILE:
      // This is the legacy method where all pages of a file are in the same folder.
      return [
        companyS3FolderKey,
        'pages',
        fileId.toString(),
        `${pageNo}.200.jpeg`
      ].join('/');
    case PAGE_DATA_PATH_METHOD.PREFIX_PER_PAGE:
      // This is the new method where each page has its own folder.
      return [
        companyS3FolderKey,
        'pages',
        fileId.toString(),
        pageNo.toString(),
        `thumbnail_${fileId}_${pageNo}.200.jpeg`
      ].join('/');
    default:
      throw new Error(`Unknown page_data_path_method: ${method}`);
  }
}