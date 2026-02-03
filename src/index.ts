/*
  CHANGE HISTORY:
    2024.02.29 - Split constants from bluetail-domain to blueltail-globals.
    2024.04.12 - Introduced a typescript definition file.
    2024.04.23 - Moved the aircraftId functions to this module.
    2024.08.22 - Initial draft of the FolderKey class.
    2025.02.07 - Converting this package to use typescript.
    2025.04.18 - Dropped the use of AircraftId.  Export the type FolderType.
    2025.05.28 - Created the JustDate type so we can model document_date and form_date
    2025.12.22 - Moved pageDataPathMethodFuncs from bluetail-domain PageDataService to here BT-8021
    2025.12.23 - Moved FileSourceFactory, FileSource, getUserIdFromSource, getUploadedTypeFromSource etc from bluetail-domain.
    2026.02.02 - Added export for fileProcessingEvents.ts and textract.ts
    2025.05.28 - Reorganize all constants.
*/
export * from './account';
export * from './activity';
export * from './constants';
export * from './fileBadassStatus';
export * from './fileDeleteStatus';
export * from './fileFormStatus';
export * from './fileHomogenizationStatus';
export * from './fileMetaDataStatus';
export * from './filePriority';
export * from './fileProcessingEvents';

// fileSource
export type {
  UploadType,
  FileSource,
  FileSourceSession,
  FileSourceAdmin,
  FileSourceEmail,
  FileSourceApi,
  FileSourceIntegration
} from './fileSource';
export {
  UPLOAD_TYPES,
  FileSourceFactory,
  getUserIdFromSource,
  getUploadedTypeFromSource
} from './fileSource';

// folderKey
export type { LogbookCategoryType, FolderType } from './FolderKey';
export { HOLD_SHORT, LOGBOOK_CATEGORY_TYPES, FOLDER_TYPES, FolderKey } from './FolderKey';

export * from './functions';

export type { JustDate } from './JustDate';
export {
  DATE_TIME_FORMAT,
  DEFAULT_DATE_FORMAT,
  LOCAL_DEFAULT_DATE_FORMAT,
  parseJustDate
} from './JustDate';

export * from './mailedDocs';
export * from './opensearchStatus';
export * from './roles_and_privileges';
export * from './pageDataPathMethodFuncs';
export * from './textract';
