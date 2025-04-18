"use strict";
/*
  CHANGE HISTORY:
    2024.02.29 - Split constants from bluetail-domain to blueltail-globals.
    2024.04.12 - Introduced a typescript definition file.
    2024.04.23 - Moved the aircraftId functions to this module.
    2024.08.22 - Initial draft of the FolderKey class.
    2025.02.07 - Converting this package to use typescript.
    2025.04.18 - Dropped the use of AircraftId
*/
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
exports.FolderKey = exports.FOLDER_TYPES = void 0;
__exportStar(require("./constants"), exports);
__exportStar(require("./functions"), exports);
__exportStar(require("./roles_and_privileges"), exports);
__exportStar(require("./mailedDocs"), exports);
var FolderKey_1 = require("./FolderKey");
Object.defineProperty(exports, "FOLDER_TYPES", { enumerable: true, get: function () { return FolderKey_1.FOLDER_TYPES; } });
Object.defineProperty(exports, "FolderKey", { enumerable: true, get: function () { return FolderKey_1.FolderKey; } });
