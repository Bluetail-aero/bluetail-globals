/* eslint-disable quote-props */
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
    2024.07.09 - Added implementation of parseTailNumber

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

const countryByCode = {
  'N': 'United States',
  'VH-': 'Australia',
  'OE-': 'Austria',
  'OO-': 'Belgium',
  'VQ-B': 'Bermuda',
  'VP-B': 'Bermuda',
  'PP-': 'Brazil',
  'PT-': 'Brazil',
  'PR-': 'Brazil',
  'PU-': 'Brazil',
  'PS-': 'Brazil',
  'C-': 'Canada',
  'B-': 'China',
  'OY-': 'Denmark',
  'F-': 'France',
  'D-': 'Germany',
  'SX-': 'Greece',
  'VT-': 'India',
  'EI-': 'Ireland',
  'EJ-': 'Ireland',
  'I-': 'Italy',
  'JA': 'Japan',
  'JR': 'Japan',
  'LX-': 'Luxembourg',
  '9H-': 'Malta',
  'XA-': 'Mexico',
  'XB-': 'Mexico',
  'XC-': 'Mexico',
  'PH-': 'Netherlands',
  'ZK-': 'New Zealand',
  'ZL-': 'New Zealand',
  'ZM-': 'New Zealand',
  'RP-': 'Philippines',
  'CS-': 'Portugal',
  'RA-': 'Russia',
  'RF-': 'Russia',
  '9V-': 'Singapore',
  'ZS-': 'South Africa',
  'ZT-': 'South Africa',
  'ZU-': 'South Africa',
  'EC-': 'Spain',
  'EM-': 'Spain',
  'HB-': 'Switzerland',
  'G-': 'United Kingdom',
};

const countryCodes = Object.keys(countryByCode).sort((a, b) =>
  b.length - a.length);

/**
 * Parse and validate a tailnumber, split it into country_code and reg_n_number and country
 * @param {string} tailnumber - Some internationalized tailnumber that incldues the country code.
 * @returns {object} - { country_code, reg_n_number, region } or null if the country_code of the tailnumber is not recognized.
 */
exports.parseTailNumber = (tailnumber) => {
  for (const code of countryCodes) {
    if (tailnumber.startsWith(code)) {
      return {
        country_code: code,
        reg_n_number: tailnumber.slice(code.length),
        region: countryByCode[code],
      };
    }
  }

  return null;
};
