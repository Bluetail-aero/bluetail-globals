
/*
  CHANGE HISTORY:
    2024.02.29 - Split constants from bluetail-domain to blueltail-globals.
    2024.04.12 - Introduced a typescript definition file.
    2024.04.23 - Moved the aircraftId functions to this module.
*/

const constants = require('./constants');
const functions = require('./functions');
const aircraftId = require('./aircraftId');

// This exports the constants as top-level exports.
module.exports = {
  ...constants,
  ...functions,
  aircraftId,
};

//! This is really here for legacy code that was expecting to have to uppack the constants.
module.exports.constants = constants;

