"use strict";
/*
  CHANGE HISTORY:
    2025.05.28 - Reorganize all constants.
    2026.02.06 - Drop DEFAULT_FLEET_NAME constant.  no longer needed BT-7817
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.TIME_BASED_TOKEN_TYPE = exports.ACCOUNT_STYLE = exports.ACCOUNT_STATUS = exports.AIRCRAFT_SUBSCRIPTION_STATUS = exports.AIRCRAFT_ASSIGNMENT_METHOD = exports.LIST_AIRCRAFT_MAKES_GROUP_TYPES = void 0;
exports.accountStyleText = accountStyleText;
// Enum
exports.LIST_AIRCRAFT_MAKES_GROUP_TYPES = {
    POPULAR: 'popular',
    RARE: 'rare',
};
/** Enum defining the supported aircraft assignment methods for users. */
exports.AIRCRAFT_ASSIGNMENT_METHOD = {
    ALL: 'all',
    FLEET: 'fleet',
    AIRCRAFT: 'aircraft',
};
/** Enum defining the system's supported aircraft subscription statuses */
exports.AIRCRAFT_SUBSCRIPTION_STATUS = {
    PROVISIONAL: 0,
    ACTIVE: 1,
    DEACTIVE: 2,
};
/** Enum defining the system's supported account statuses */
exports.ACCOUNT_STATUS = {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
};
/** Enum defining the system's supported account styles */
exports.ACCOUNT_STYLE = {
    TRADITIONAL: 'traditional',
    PARTS: 'parts',
};
/** Enum defining the types of time-based-tokens that the system can generate. */
exports.TIME_BASED_TOKEN_TYPE = {
    EMAIL: 1,
    RESET_PASSWORD: 2,
    FORGOT_PASSWORD: 3,
};
/**
 * Returns the appropriate style verbiage based on the account style.
 * @param authenticatedUser_or_accountStyle Either the account_style string, or an authenticated user object.
 * @param tradStyle The traditional style verbiage.
 * @param partStyle The parts style verbiage.
 * @returns The appropriate style verbiage.
 */
function accountStyleText(authenticatedUser_or_accountStyle, tradStyle, partStyle) {
    // Determine if input is an AccountStyle string or an IAuthenticatedUser object
    const accountStyle = typeof authenticatedUser_or_accountStyle === 'string'
        ? authenticatedUser_or_accountStyle
        : authenticatedUser_or_accountStyle.company.style;
    return accountStyle === exports.ACCOUNT_STYLE.PARTS ? partStyle : tradStyle;
}
