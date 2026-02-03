/*
  CHANGE HISTORY:
    2025.05.28 - Reorganize all constants.
*/

/**
 * FilePriority a file or job can take. Allowed values are 1..10 (1=highest 10=lowest).
 */
export type FilePriority = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * Default priority for a file or job.
 */
export const DEFAULT_FILE_PRIORITY = 6;
