"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderKey = exports.FOLDER_TYPES = exports.LOGBOOK_CATEGORY_TYPES = exports.MAX_NESTING_DEPTH = exports.HOLD_SHORT = exports.getUploadedTypeFromSource = exports.getUserIdFromSource = exports.FileSourceFactory = exports.UPLOAD_TYPES = exports.parseJustDate = exports.LOCAL_DEFAULT_DATE_FORMAT = exports.DEFAULT_DATE_FORMAT = exports.DATE_TIME_FORMAT = void 0;
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
__exportStar(require("./account"), exports);
__exportStar(require("./activity"), exports);
var dates_1 = require("./dates");
Object.defineProperty(exports, "DATE_TIME_FORMAT", { enumerable: true, get: function () { return dates_1.DATE_TIME_FORMAT; } });
Object.defineProperty(exports, "DEFAULT_DATE_FORMAT", { enumerable: true, get: function () { return dates_1.DEFAULT_DATE_FORMAT; } });
Object.defineProperty(exports, "LOCAL_DEFAULT_DATE_FORMAT", { enumerable: true, get: function () { return dates_1.LOCAL_DEFAULT_DATE_FORMAT; } });
Object.defineProperty(exports, "parseJustDate", { enumerable: true, get: function () { return dates_1.parseJustDate; } });
__exportStar(require("./fileBadassStatus"), exports);
__exportStar(require("./fileDeleteStatus"), exports);
__exportStar(require("./fileFormStatus"), exports);
__exportStar(require("./fileHomogenizationStatus"), exports);
__exportStar(require("./fileMetaDataStatus"), exports);
__exportStar(require("./filePaths"), exports);
__exportStar(require("./filePriority"), exports);
__exportStar(require("./fileProcessingEvents"), exports);
var fileSource_1 = require("./fileSource");
Object.defineProperty(exports, "UPLOAD_TYPES", { enumerable: true, get: function () { return fileSource_1.UPLOAD_TYPES; } });
Object.defineProperty(exports, "FileSourceFactory", { enumerable: true, get: function () { return fileSource_1.FileSourceFactory; } });
Object.defineProperty(exports, "getUserIdFromSource", { enumerable: true, get: function () { return fileSource_1.getUserIdFromSource; } });
Object.defineProperty(exports, "getUploadedTypeFromSource", { enumerable: true, get: function () { return fileSource_1.getUploadedTypeFromSource; } });
var folders_1 = require("./folders");
Object.defineProperty(exports, "HOLD_SHORT", { enumerable: true, get: function () { return folders_1.HOLD_SHORT; } });
Object.defineProperty(exports, "MAX_NESTING_DEPTH", { enumerable: true, get: function () { return folders_1.MAX_NESTING_DEPTH; } });
Object.defineProperty(exports, "LOGBOOK_CATEGORY_TYPES", { enumerable: true, get: function () { return folders_1.LOGBOOK_CATEGORY_TYPES; } });
Object.defineProperty(exports, "FOLDER_TYPES", { enumerable: true, get: function () { return folders_1.FOLDER_TYPES; } });
Object.defineProperty(exports, "FolderKey", { enumerable: true, get: function () { return folders_1.FolderKey; } });
__exportStar(require("./mailedDocs"), exports);
__exportStar(require("./misc"), exports);
__exportStar(require("./opensearchStatus"), exports);
__exportStar(require("./rolesAndPrivileges"), exports);
__exportStar(require("./pageDataPathMethodFuncs"), exports);
__exportStar(require("./supportedFileTypes"), exports);
__exportStar(require("./textract"), exports);
