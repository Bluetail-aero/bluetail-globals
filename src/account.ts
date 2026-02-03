/*
  CHANGE HISTORY:
    2025.05.28 - Reorganize all constants.
*/

export const DEFAULT_FLEET_NAME = 'All Aircraft';

// Enum
export const LIST_AIRCRAFT_MAKES_GROUP_TYPES = {
  POPULAR: 'popular',
  RARE: 'rare',
} as const;
export type ListAircraftMakesGroupType = (typeof LIST_AIRCRAFT_MAKES_GROUP_TYPES)[keyof typeof LIST_AIRCRAFT_MAKES_GROUP_TYPES];

/** Enum defining the supported aircraft assignment methods for users. */
export const AIRCRAFT_ASSIGNMENT_METHOD = {
  ALL: 'all',
  FLEET: 'fleet',
  AIRCRAFT: 'aircraft',
} as const;
export type AircraftAssignmentMethod = (typeof AIRCRAFT_ASSIGNMENT_METHOD)[keyof typeof AIRCRAFT_ASSIGNMENT_METHOD];

/** Enum defining the system's supported aircraft subscription statuses */
export const AIRCRAFT_SUBSCRIPTION_STATUS = {
  PROVISIONAL: 0,
  ACTIVE: 1,
  DEACTIVE: 2,
} as const;
export type AircraftSubscriptionStatus = (typeof AIRCRAFT_SUBSCRIPTION_STATUS)[keyof typeof AIRCRAFT_SUBSCRIPTION_STATUS];

/** Enum defining the system's supported account statuses */
export const ACCOUNT_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
} as const;
export type AccountStatus = (typeof ACCOUNT_STATUS)[keyof typeof ACCOUNT_STATUS];

/** Enum defining the system's supported account styles */
export const ACCOUNT_STYLE = {
  TRADITIONAL: 'traditional',
  PARTS: 'parts',
} as const;
export type AccountStyle = (typeof ACCOUNT_STYLE)[keyof typeof ACCOUNT_STYLE];

/** Enum defining the types of time-based-tokens that the system can generate. */
export const TIME_BASED_TOKEN_TYPE = {
  EMAIL: 1,
  RESET_PASSWORD: 2,
  FORGOT_PASSWORD: 3,
} as const;
export type TimeBasedTokenType = (typeof TIME_BASED_TOKEN_TYPE)[keyof typeof TIME_BASED_TOKEN_TYPE];

interface IAuthenticatedUser {
  company: {
    style: AccountStyle;
  };
}

/**
 * Returns the appropriate style verbiage based on the account style.
 * @param authenticatedUser_or_accountStyle Either the account_style string, or an authenticated user object.
 * @param tradStyle The traditional style verbiage.
 * @param partStyle The parts style verbiage.
 * @returns The appropriate style verbiage.
 */
export function accountStyleText(
  authenticatedUser_or_accountStyle: AccountStyle | IAuthenticatedUser,
  tradStyle: string,
  partStyle: string
): string {
  // Determine if input is an AccountStyle string or an IAuthenticatedUser object
  const accountStyle =
    typeof authenticatedUser_or_accountStyle === 'string'
      ? authenticatedUser_or_accountStyle
      : authenticatedUser_or_accountStyle.company.style;

  return accountStyle === ACCOUNT_STYLE.PARTS ? partStyle : tradStyle;
}