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
*/

export * from './constants';
export * from './functions';
export * from './roles_and_privileges';
export { MAILED_DOC_STATUS, MAILED_REPLY_SENDING_TYPES } from './mailedDocs';
export type { MailedDocStatus, MailedReplySendingType, IMailedDocsEmail, IMailedDocs } from './mailedDocs';
export { FOLDER_TYPES, FolderType, FolderKey } from './FolderKey';
export type { JustDate } from './JustDate';
export * from './JustDate';
export * from './pageDataPathMethodFuncs';
export { FileSourceFactory, getUserIdFromSource, getUploadedTypeFromSource } from './fileSource';
export type { FileSource, FileSourceSession, FileSourceAdmin, FileSourceEmail, FileSourceApi, FileSourceIntegration } from './fileSource';
