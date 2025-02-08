export interface IAircraftId {
    country_code: string;
    reg_n_number: string;
    region?: string;
}
export interface ValidationResult {
    isValid: boolean;
    errorMessage: string | null;
}
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
export default class AircraftId {
    country_code: string;
    reg_n_number: string;
    /**
     * Constructs an Aircraft ID instance.
     * @param country_code - The country prefix (e.g., "N" for the US).
     * @param reg_n_number - The aircraft's registration number.
     * @throws Error If the provided Aircraft ID is invalid.
     */
    constructor(country_code: string, reg_n_number: string);
    /**
     * Validates whether an aircraft ID object has the correct format.
     * @param aircraftId - The Aircraft ID object to validate.
     * @returns ValidationResult object with `isValid` (boolean) and `errorMessage` (string or null).
     */
    static isValidAircraftId(aircraftId: IAircraftId): ValidationResult;
    /**
     * Parses a tail number into its components: country code, registration number, and region.
     * @param tailnumber - The full aircraft tail number (e.g., "N12345").
     * @returns An object containing the parsed aircraft ID components, or null if the country code is unrecognized.
     */
    static parseTailNumber(tailnumber: string): IAircraftId | null;
    /**
     * Converts an Aircraft ID object to a tail number string.
     * @param aircraftId - The Aircraft ID object.
     * @returns The formatted tail number (e.g., "N12345").
     * @throws Error If the provided Aircraft ID object is invalid.
     */
    static aircraftId2Tailnumber(aircraftId: IAircraftId): string;
    /**
     * Returns the tail number representation of the Aircraft ID instance.
     * @returns The full tail number (e.g., "N12345").
     */
    toTailNumber(): string;
}
//# sourceMappingURL=AircraftId.d.ts.map