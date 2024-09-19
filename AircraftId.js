/* eslint-disable quote-props */
/*
  Class to represent an AircraftId.
  Supporting validation, construction and converting to/from a tailnumber (parsing).

  USAGE EXAMPLE:

    const aircraftId = AircraftId.newAircraftId('N', '12345');
    console.log(aircraftId.toTailNumber()); // "N12345"

    const parsedTailNumber = AircraftId.parseTailNumber('N12345');
    console.log(parsedTailNumber); // { country_code: 'N', reg_n_number: '12345', region: 'United States' }

  CHANGE HISTORY:
    2024.08.22 - Initial draft. Created by converting the legacy functions to a class.

  TODOS:
    -
*/

class AircraftId {
  static countryByCode = {
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

  static countryCodes = Object.keys(AircraftId.countryByCode).sort((a, b) =>
    b.length - a.length);

  constructor(country_code, reg_n_number) {
    if (!AircraftId.isValidAircraftId({ country_code, reg_n_number })) {
      throw new Error('Invalid aircraft ID');
    }
    this.country_code = country_code;
    this.reg_n_number = reg_n_number;
  }

  static isValidAircraftId(aircraftId) {
    if (!aircraftId) return false;
    if (!aircraftId.reg_n_number || typeof aircraftId.reg_n_number !== 'string' || aircraftId.reg_n_number.trim().length === 0) return false;
    if (!aircraftId.country_code || typeof aircraftId.country_code !== 'string' || aircraftId.country_code.trim().length === 0) return false;
    return true;
  }

  static parseTailNumber(tailnumber) {
    for (const code of AircraftId.countryCodes) {
      if (tailnumber.startsWith(code)) {
        return {
          country_code: code,
          reg_n_number: tailnumber.slice(code.length),
          region: AircraftId.countryByCode[code],
        };
      }
    }
    return null;
  }

  toTailNumber() {
    return `${this.country_code}${this.reg_n_number}`;
  }
}

exports.AircraftId = AircraftId;
