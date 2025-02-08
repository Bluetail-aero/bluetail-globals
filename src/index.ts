/*
  CHANGE HISTORY:
    2024.02.29 - Split constants from bluetail-domain to blueltail-globals.
    2024.04.12 - Introduced a typescript definition file.
    2024.04.23 - Moved the aircraftId functions to this module.
    2024.08.22 - Initial draft of the FolderKey class.
*/

const constants = require('./constants');
const functions = require('./functions');
const AircraftId = require('./AircraftId');
const aircraftIdLegacyFunctions = require('./aircraftIdLegacyFunctions');
const FolderKey = require('./FolderKey');

// This exports the constants as top-level exports.
module.exports = {
  ...constants,
  ...functions,
  AircraftId,
  aircraftId: aircraftIdLegacyFunctions,
  FolderKey,
};

//! LEGACY: This is really here for legacy code that was expecting to have to unpack the constants.
module.exports.constants = constants;
