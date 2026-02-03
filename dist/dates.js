"use strict";
/*
  CHANGE HISTORY:
    2025.05.28 - Created this type so we can model document_date and form_date
    2025.06.05 - Handle empty string case
    2025.05.28 - Reorganize all constants.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCAL_DEFAULT_DATE_FORMAT = exports.DEFAULT_DATE_FORMAT = exports.DATE_TIME_FORMAT = void 0;
exports.parseJustDate = parseJustDate;
// These date/time formats are used as standards across the application.
exports.DATE_TIME_FORMAT = 'YYYY-MM-DD[T]HH:mm:ss';
exports.DEFAULT_DATE_FORMAT = 'MM-DD-YYYY';
exports.LOCAL_DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';
/**
 * Validates and parses a date string in the format YYYY-MM-DD.
 * @param dateStr - A string representing a date in the format YYYY-MM-DD, or null/undefined.
 * @returns The validated date string as JustDate, or null/undefined if the input was null/undefined.
 * @throws Error if the input is an empty string or invalid date format.
 */
function parseJustDate(dateStr) {
    // Handle null case
    if (dateStr === null || dateStr === '') {
        return null;
    }
    // Handle undefined case
    if (dateStr === undefined) {
        return undefined;
    }
    // Validate format and date validity
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr) || isNaN(Date.parse(dateStr))) {
        throw new Error('Invalid date string format. Expected YYYY-MM-DD');
    }
    return dateStr;
}
