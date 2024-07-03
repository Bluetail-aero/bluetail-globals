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

  const countryCodes = [
    { region: "Guernsey", prefixCodes: ["2-"] },
    { region: "Monaco", prefixCodes: ["3A-M", "M-O", "CZ-", "MC-"] },
    { region: "Mauritius", prefixCodes: ["3B-", "VQ-M"] },
    { region: "Equatorial Guinea", prefixCodes: ["3C-", "VQ-Z"] },
    { region: "Eswatini", prefixCodes: ["3DC-"] },
    { region: "Guinea", prefixCodes: ["3X-"] },
    { region: "Azerbaijan", prefixCodes: ["4K-"] },
    { region: "Georgia", prefixCodes: ["4L-"] },
    { region: "Montenegro", prefixCodes: ["4O-"] },
    { region: "Sri Lanka", prefixCodes: ["4R-", "VP-C", "CY-"] },
    { region: "United Nations", prefixCodes: ["4U-"] },
    { region: "East Timor", prefixCodes: ["4W-", "CR-T"] },
    { region: "Israel", prefixCodes: ["4X-", "4Z-", "VQ-P"] },
    { region: "Jordan and Iraq", prefixCodes: ["4YB-"] },
    { region: "Libya", prefixCodes: ["5A-"] },
    { region: "Cyprus", prefixCodes: ["5B-D", "VQ-C"] },
    { region: "Tanzania", prefixCodes: ["5H-", "VR-T", "VP-Z"] },
    { region: "Nigeria", prefixCodes: ["5N-", "VR-N"] },
    { region: "Madagascar", prefixCodes: ["5R-"] },
    { region: "Mauritania", prefixCodes: ["5T-"] },
    { region: "Niger", prefixCodes: ["5U-"] },
    { region: "Togo", prefixCodes: ["5V-"] },
    { region: "Samoa", prefixCodes: ["5W-"] },
    { region: "Uganda", prefixCodes: ["5X-", "VP-U"] },
    { region: "Kenya", prefixCodes: ["5Y-", "VP-K"] },
    { region: "Somalia", prefixCodes: ["6O-", "60S-"] },
    { region: "Senegal", prefixCodes: ["6V-", "6W-"] },
    { region: "Jamaica", prefixCodes: ["6Y-"] },
    { region: "Yemen", prefixCodes: ["7O-"] },
    { region: "Lesotho", prefixCodes: ["7P"] },
    { region: "Malawi", prefixCodes: ["7Q-"] },
    { region: "Algeria", prefixCodes: ["7T-"] },
    { region: "Barbados", prefixCodes: ["8P-"] },
    { region: "Maldives", prefixCodes: ["8Q-"] },
    { region: "Guyana", prefixCodes: ["8R-"] },
    { region: "Croatia", prefixCodes: ["9A-"] },
    { region: "Ghana", prefixCodes: ["9G-"] },
    { region: "Malta", prefixCodes: ["9H-"] },
    { region: "Zambia", prefixCodes: ["9J-"] },
    { region: "Kuwait", prefixCodes: ["9K-"] },
    { region: "Sierra Leone", prefixCodes: ["9L-"] },
    { region: "Malaysia", prefixCodes: ["9M-"] },
    { region: "Nepal", prefixCodes: ["9N-"] },
    { region: "Congo", prefixCodes: ["9S-", "9T-"] },
    { region: "Burundi", prefixCodes: ["9U-"] },
    { region: "Singapore", prefixCodes: ["9V-"] },
    { region: "Rwanda", prefixCodes: ["9XR-"] },
    { region: "Trinidad and Tobago", prefixCodes: ["9Y"] },
    { region: "Botswana", prefixCodes: ["A2"] },
    { region: "Tonga", prefixCodes: ["A3"] },
    { region: "Oman", prefixCodes: ["A4"] },
    { region: "Bhutan", prefixCodes: ["A5"] },
    { region: "United Arab Emirates", prefixCodes: ["A6"] },
    { region: "Qatar", prefixCodes: ["A7"] },
    { region: "Liberia", prefixCodes: ["A8"] },
    { region: "Bahrain", prefixCodes: ["A9"] },
    { region: "Pakistan", prefixCodes: ["AP"] },
    { region: "Canada", prefixCodes: ["C-F", "C-G", "C-I", "C-Z"] },
    { region: "Chile", prefixCodes: ["CC"] },
    { region: "Morocco", prefixCodes: ["CN"] },
    { region: "Bolivia", prefixCodes: ["CP"] },
    { region: "Portugal", prefixCodes: ["CS"] },
    { region: "Cuba", prefixCodes: ["CU"] },
    { region: "Uruguay", prefixCodes: ["CX"] },
    { region: "Germany", prefixCodes: ["D"] },
    { region: "Spain", prefixCodes: ["EC"] },
    { region: "Ireland", prefixCodes: ["EI"] },
    { region: "Armenia", prefixCodes: ["EK"] },
    { region: "Liberia", prefixCodes: ["EL"] },
    { region: "Iran", prefixCodes: ["EP"] },
    { region: "Moldova", prefixCodes: ["ER"] },
    { region: "Estonia", prefixCodes: ["ES"] },
    { region: "Ethiopia", prefixCodes: ["ET"] },
    { region: "Belarus", prefixCodes: ["EW"] },
    { region: "Kyrgyzstan", prefixCodes: ["EX"] },
    { region: "Tajikistan", prefixCodes: ["EY"] },
    { region: "Turkmenistan", prefixCodes: ["EZ"] },
    { region: "France", prefixCodes: ["F"] },
    { region: "United Kingdom", prefixCodes: ["G"] },
    { region: "Hungary", prefixCodes: ["HA"] },
    { region: "Switzerland", prefixCodes: ["HB"] },
    { region: "Ecuador", prefixCodes: ["HC"] },
    { region: "Colombia", prefixCodes: ["HK"] },
    { region: "South Korea", prefixCodes: ["HL"] },
    { region: "Panama", prefixCodes: ["HP"] },
    { region: "Thailand", prefixCodes: ["HS"] },
    { region: "Saudi Arabia", prefixCodes: ["HZ"] },
    { region: "Italy", prefixCodes: ["I"] },
    { region: "Japan", prefixCodes: ["J", "JA"] },
    { region: "Bulgaria", prefixCodes: ["LZ"] },
    { region: "United States", prefixCodes: ["N"] },
    { region: "Austria", prefixCodes: ["OE"] },
    { region: "Czech Republic", prefixCodes: ["OK"] },
    { region: "Slovakia", prefixCodes: ["OM"] },
    { region: "Denmark", prefixCodes: ["OY"] },
    { region: "Netherlands", prefixCodes: ["PH"] },
    { region: "Brazil", prefixCodes: ["PP", "PR", "PT", "PU"] },
    { region: "Russia", prefixCodes: ["RA", "RF"] },
    { region: "Sweden", prefixCodes: ["SE"] },
    { region: "Poland", prefixCodes: ["SP"] },
    { region: "Sudan", prefixCodes: ["ST"] },
    { region: "Egypt", prefixCodes: ["SU"] },
    { region: "Turkey", prefixCodes: ["TC"] },
    { region: "Australia", prefixCodes: ["VH"] },
    { region: "New Zealand", prefixCodes: ["ZK"] }
  ];

/**
 * Parse and validate a tailnumber, split it into country_code and reg_n_number and country
 * @param {string} tailnumber - Some internationalized tailnumber that incldues the country code.
 * @retuns {object} - { country_code, reg_n_number, region }
 */
exports.parseTailNumber = (tailnumber) => {
  // Sort country codes by length in descending order to handle subset clashes
  const sortedCountryCodes = countryCodes.sort((a, b) => b.length - a.length);

  for (let codes of sortedCountryCodes) {
    const { region, prefixCodes } = codes;
    
    for (let code of prefixCodes) {
      if (reg_n_number.startsWith(code)) {
        return {
          region,
          country_code: code,
          reg_n_number: reg_n_number.slice(code.length)
        };
      }
    }
  }

  return null;
}
