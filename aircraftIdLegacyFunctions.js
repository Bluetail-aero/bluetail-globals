/* eslint-disable quote-props */
const AircraftId = require('./AircraftId');
/*
  LEGACY FUNCTIONS: These have been rewritten to leverage the AircraftId class.

  exports {
    aircraftId2Tailnumber,
    isValidAircraftId,
    newAircraftId,
    parseTailNumber,
  }

  CHANGE HISTORY:
    2024.02.22 - Create this module with the tailnumber and isValidAircraftId functions.
    2024.03.28 - Rename tailnumber to aircraftId2Tailnumber to avoid name collisions elsewhere; introduced newAircraftId function.
    2024.04.23 - Relocated this from bluetail-domain to bluetail-globals.
    2024.07.09 - Added implementation of parseTailNumber
    2024.08.22 - Refactored to leverage the AircraftId class.

  TODOS:
    -
*/

/**
 * Forms a full country_code specified tailnumber from the aircraftId.
 * @param {object} aircraftId
 * @returns {string}
 */
exports.aircraftId2Tailnumber = (aircraftId) => {
  const instance = new AircraftId(aircraftId.country_code, aircraftId.reg_n_number);
  return instance.toTailNumber();
};

/**
  * Tests if the aircraftId is in valid form.
  * @param {object} aircraftId
  * @returns {boolean}
  */
exports.isValidAircraftId = (aircraftId) =>
  AircraftId.isValidAircraftId(aircraftId);

/**
 * Creates a new aircraftId object.
 * @param {string} country_code - The country code of the aircraft.
 * @param {string} reg_n_number - The registration number of the aircraft.
 * @returns {object} - { country_code, reg_n_number }
 */
exports.newAircraftId = (country_code, reg_n_number) =>
  new AircraftId(country_code, reg_n_number);

/**
 * Parse and validate a tailnumber, split it into country_code and reg_n_number and country
 * @param {string} tailnumber - Some internationalized tailnumber that incldues the country code.
 * @returns {object} - { country_code, reg_n_number, region } or null if the country_code of the tailnumber is not recognized.
 */
exports.parseTailNumber = (tailnumber) =>
  AircraftId.parseTailNumber(tailnumber);
