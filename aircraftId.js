/*
  exports {
    aircraftId2Tailnumber,
    isValidAircraftId,
    newAircraftId,
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

const countryCodes = {
  codes: [
    "N", // United States
    "VH-", // Australia
    "OE-", // Austria
    "OO-", // Belgium
    "VP-B, VQ-B", // Bermuda
    "PP-, PT-, PR-, PU-, PS-", // Brazil
    "C-", // Canada
    "B-", // China
    "OY-", // Denmark
    "F-", // France
    "D-", // Germany
    "SX-", // Greece
    "VT-", // India
    "EI-, EJ-", // Ireland
    "I-", // Italy
    "JA, JR", // Japan
    "LX-", // Luxembourg
    "9H-", // Malta
    "XA-, XB-, XC-", // Mexico
    "PH-", // Netherlands
    "ZK-, ZL-, ZM-", // New Zealand
    "RP-", // Philippines
    "CS-", // Portugal
    "RA-, RF-", // Russia
    "9V-", // Singapore
    "ZS-, ZT-, ZU-", // South Africa
    "EC-, EM-", // Spain
    "HB-", // Switzerland
    "G-", // United Kingdom
  // Sort country codes by length in descending order to handle subset clashes
  ].sort((a, b) => b.length - a.length),
  countryByCode: {
    N: "United States",
    ["VH-"]: "Australia",
    ["OE-"]: "Austria",
    ["OO-"]: "Belgium",
    ["VQ-B"]: "Bermuda",
    ["VP-B"]: "Bermuda",
    ["PP-"]: "Brazil",
    ["PT-"]: "Brazil",
    ["PR-"]: "Brazil",
    ["PU-"]: "Brazil",
    ["PS-"]: "Brazil",
    ["C-"]: "Canada",
    ["B-"]: "China",
    ["OY-"]: "Denmark",
    ["F-"]: "France",
    ["D-"]: "Germany",
    ["SX-"]: "Greece",
    ["VT-"]: "India",
    ["EI-"]: "Ireland",
    ["EJ-"]: "Ireland",
    ["I-"]: "Italy",
    ["JA, JR"]: "Japan",
    ["LX-"]: "Luxembourg",
    ["9H-"]: "Malta",
    ["XA-"]: "Mexico",
    ["XB-"]: "Mexico",
    ["XC-"]: "Mexico",
    ["PH-"]: "Netherlands",
    ["ZK-"]: "New Zealand",
    ["ZL-"]: "New Zealand",
    ["ZM-"]: "New Zealand",
    ["RP-"]: "Philippines",
    ["CS-"]: "Portugal",
    ["RA-"]: "Russia",
    ["RF-"]: "Russia",
    ["9V-"]: "Singapore",
    ["ZS-"]: "South Africa",
    ["ZT-"]: "South Africa",
    ["ZU-"]: "South Africa",
    ["EC-"]: "Spain",
    ["EM-"]: "Spain",
    ["HB-"]: "Switzerland",
    ["G-"]: "United Kingdom",
  }
};

/**
 * Parse and validate a tailnumber, split it into country_code and reg_n_number and country
 * @param {string} tailnumber - Some internationalized tailnumber that incldues the country code.
 * @retuns {object} - { country_code, reg_n_number, region }
 */
exports.parseTailNumber = (tailnumber) => {
  for (let code of countryCodes.codes) {    
      if (tailnumber.startsWith(code)) {
        return {
          region: countryCodes.countryByCode[code],
          country_code: code,
          reg_n_number: tailnumber.slice(code.length),
          fullTailNumber: tailnumber,
        };
      }
  }

  return null;
}
