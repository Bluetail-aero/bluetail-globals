/* eslint-disable quote-props */
/*
  CHANGE HISTORY:
    2024.08.22 - Initial draft. Created by converting the legacy functions to a class.
    2025.01.17 - Remove magic strings.
    2025.02.07 - Refined the class and added JSDoc comments. Added static aircraftId2Tailnumber and made countryByCode and countryCodes private.
               - Enhanced isValidAircraftId
               - Added support for some crap country codes that made it into production :/

  TODOS:
    - Convert this to Typescript one day.
    - Drop support for hpyhen and underscore once those are cleared out of the prod DB.
*/

/**
 * Class representing an Aircraft ID.
 * Supports validation, construction, and conversion between an Aircraft ID and a tail number.
 *
 * @example
 * const aircraftId = new AircraftId('N', '12345');
 * console.log(aircraftId.toTailNumber()); // "N12345"
 *
 * const parsedTailNumber = AircraftId.parseTailNumber('N12345');
 * console.log(parsedTailNumber); // { country_code: 'N', reg_n_number: '12345', region: 'United States' }
 */
class AircraftId {
  static #countryByCode = {
    'OE': 'DO NOT USE - Supporting some crap data.',
    'VQ-': 'DO NOT USE - Supporting some crap data.  Use VQ-B instead.',
    'C6': 'DO NOT USE - Supporting some crap data.  Use C6- instead.',
    'N': 'United States',
    'VH-': 'Australia',
    'OE-': 'Austria',
    'C6-': 'Bahamas',
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

  static #countryCodes = Object.keys(AircraftId.#countryByCode).sort((a, b) =>
    b.length - a.length);

  /**
   * Constructs an Aircraft ID instance.
   * @param {string} country_code - The country prefix (e.g., "N" for the US).
   * @param {string} reg_n_number - The aircraft's registration number.
   * @throws {Error} If the provided Aircraft ID is invalid.
   */
  constructor(country_code, reg_n_number) {
    const { isValid, errorMessage } = AircraftId.isValidAircraftId({ country_code, reg_n_number });
    if (!isValid) {
      throw new Error(`Invalid aircraft ID: {"${country_code}", "${reg_n_number}"} - ${errorMessage}`);
    }
    this.country_code = country_code.toUpperCase();
    this.reg_n_number = reg_n_number.toUpperCase();
  }

  /**
   * Validates whether an aircraft ID object has the correct format.
   * Returns an object with `isValid` (boolean) and `errorMessage` (string or null).
   *
   * @param {{ country_code: string, reg_n_number: string }} aircraftId - The Aircraft ID object to validate.
   * @returns {{ isValid: boolean, errorMessage: string | null }} - Validation result.
   *
   * @example
   * AircraftId.isValidAircraftId({ country_code: 'N', reg_n_number: '12345' });
   */
  static isValidAircraftId(aircraftId) {
    if (!aircraftId) {
      return { isValid: false, errorMessage: 'Aircraft ID is null' };
    }

    if (!aircraftId.reg_n_number || typeof aircraftId.reg_n_number !== 'string' || aircraftId.reg_n_number.trim() === '') {
      return { isValid: false, errorMessage: 'Bad form: missing reg_n_number' };
    }

    if (!aircraftId.country_code || typeof aircraftId.country_code !== 'string' || aircraftId.country_code.trim() === '') {
      return { isValid: false, errorMessage: 'Bad form: missing country_code' };
    }

    // TODO: Drop support for hpyhen and underscore once those are cleared out of the prod DB.
    if (!/^[a-zA-Z0-9_-]+$/.test(aircraftId.reg_n_number)) {
      return { isValid: false, errorMessage: 'reg_n_number contains invalid characters' };
    }

    if (aircraftId.reg_n_number.startsWith(aircraftId.country_code)) {
      return { isValid: false, errorMessage: 'reg_n_number should not contain the country_code prefix' };
    }

    if (!(aircraftId.country_code in AircraftId.#countryByCode)) {
      return { isValid: false, errorMessage: 'country_code is not a valid country code' };
    }

    return { isValid: true, errorMessage: null };
  }

  /**
   * Parses a tail number into its components: country code, registration number, and region.
   * @param {string} tailnumber - The full aircraft tail number (e.g., "N12345").
   * @returns {{ country_code: string, reg_n_number: string, region: string } | null}
   * An object containing the parsed aircraft ID components, or null if the country code is unrecognized.
   *
   * @example
   * AircraftId.parseTailNumber("N12345");
   */
  static parseTailNumber(tailnumber) {
    if (!tailnumber || typeof tailnumber !== 'string' || tailnumber.trim() === '') {
      return null;
    }
    for (const code of AircraftId.#countryCodes) {
      if (tailnumber.startsWith(code)) {
        return {
          country_code: code,
          reg_n_number: tailnumber.slice(code.length),
          region: AircraftId.#countryByCode[code],
        };
      }
    }
    return null;
  }

  /**
   * Converts an Aircraft ID object to a tail number string.
   * @param {{ country_code: string, reg_n_number: string }} aircraftId - The Aircraft ID object.
   * @returns {string} The formatted tail number (e.g., "N12345").
   * @throws {Error} If the provided Aircraft ID object is invalid.
   *
   * @example
   * AircraftId.aircraftId2Tailnumber({ country_code: 'N', reg_n_number: '12345' });
   */
  static aircraftId2Tailnumber(aircraftId) {
    const { isValid, errorMessage } = AircraftId.isValidAircraftId(aircraftId);
    if (!isValid) {
      throw new Error(`Invalid aircraft ID: {"${aircraftId.country_code}", "${aircraftId.reg_n_number}"} - ${errorMessage}`);
    }
    return `${aircraftId.country_code}${aircraftId.reg_n_number}`;
  }

  /**
   * Returns the tail number representation of the Aircraft ID instance.
   * @returns {string} The full tail number (e.g., "N12345").
   *
   * @example
   * const aircraftId = new AircraftId('N', '12345');
   * aircraftId.toTailNumber();
   */
  toTailNumber() {
    return `${this.country_code}${this.reg_n_number}`;
  }
}

module.exports = AircraftId;
