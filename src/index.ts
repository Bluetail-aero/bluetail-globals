/*
  CHANGE HISTORY:
    2024.02.29 - Split constants from bluetail-domain to blueltail-globals.
    2024.04.12 - Introduced a typescript definition file.
    2024.04.23 - Moved the aircraftId functions to this module.
    2024.08.22 - Initial draft of the FolderKey class.
    2025.02.07 - Converting this package to use typescript.
*/

export * from './constants';
export * from './functions';
export * from './roles_and_privileges';
export * from './mailedDocs';
export { AircraftId } from './AircraftId';
export { FOLDER_TYPES, FolderKey } from './FolderKey';
