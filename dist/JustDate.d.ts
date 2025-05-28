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
export type JustDate = string & {
    __brand: 'JustDate';
};
/**
 * Validates and parses a date string in the format YYYY-MM-DD.
 * @param dateStr - A string representing a date in the format YYYY-MM-DD, or null/undefined.
 * @returns The validated date string as JustDate, or null/undefined if the input was null/undefined.
 * @throws Error if the input is an empty string or invalid date format.
 */
export declare function parseJustDate(dateStr: string | null | undefined): JustDate | null | undefined;
//# sourceMappingURL=JustDate.d.ts.map