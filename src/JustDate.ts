/*

  CHANGE HISTORY:
    2025.05.28 - Created this type so we can model document_date and form_date

  TODOS:
    -
*/

/** A branded type for ISO date strings (YYYY-MM-DD) 
 * 
 * Usage:
 * ```typescript
 * const date1: JustDate = parseJustDate('2023-10-01');
 * ```
 * or
 * ```typescript
 * const date2: JustDate = '2023-10-01' as JustDate;
 * ```
*/
export type JustDate = string & { __brand: 'JustDate' };

/**
 * Validates and parses a date string in the format YYYY-MM-DD.
 * @param dateStr - A string representing a date in the format YYYY-MM-DD, or null/undefined.
 * @returns The validated date string as JustDate, or null/undefined if the input was null/undefined.
 * @throws Error if the input is an empty string or invalid date format.
 */
export function parseJustDate(dateStr: string | null | undefined): JustDate | null | undefined {
  // Handle null case
  if (dateStr === null) {
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

  return dateStr as JustDate;
}
