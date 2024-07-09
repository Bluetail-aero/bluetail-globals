/*
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

  TODOS:
    -
*/

/**
 * Forms a full country_code specified tailnumber from the aircraftId.
 * @param {object} aircraftId
 * @returns {string}
 */
exports.aircraftId2Tailnumber = (aircraftId) =>
  `${aircraftId.country_code}${aircraftId.reg_n_number}`;

/**
  * Tests if the aircraftId is in valid form.
  * @param {object} aircraftId
  * @returns {boolean}
  */
exports.isValidAircraftId = (aircraftId) => {
  if (!aircraftId) return false;
  if (!aircraftId.reg_n_number || typeof aircraftId.reg_n_number !== 'string' || aircraftId.reg_n_number.trim().length === 0) return false;
  if (!aircraftId.country_code || typeof aircraftId.country_code !== 'string' || aircraftId.country_code.trim().length === 0) return false;
  return true;
};

/**
 * Creates a new aircraftId object.
 * @param {string} country_code - The country code of the aircraft.
 * @param {string} reg_n_number - The registration number of the aircraft.
 * @returns {object} - { country_code, reg_n_number }
 */
exports.newAircraftId = (country_code, reg_n_number) =>
  ({ country_code, reg_n_number });

/**
 *
 * @param {string} tailnumber - Some internationalized tailnumber that includes the country code.
 * @returns {object} - { country_code, reg_n_number
 */
exports.parseTailNumber = (tailnumber) =>
// TODO: https://bluetail.atlassian.net/browse/BT-5266

  null;
