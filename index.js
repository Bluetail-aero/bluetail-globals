
/*
  CHANGE HISTORY:
    2024.02.29 - Split constants from bluetail-domain to blueltail-globals.
    2024.04.12 - Introduced a typescript definition file.
*/

const constants = require('./constants');

// This exports the constants as top-level exports.
module.exports = {
  ...constants,
};

//! This is really here for legacy code that was expecting to have to uppack the constants.
module.exports.constants = constants;

