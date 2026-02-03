export declare const DEFAULT_FLEET_NAME = "All Aircraft";
export declare const LIST_AIRCRAFT_MAKES_GROUP_TYPES: {
    readonly POPULAR: "popular";
    readonly RARE: "rare";
};
export type ListAircraftMakesGroupType = (typeof LIST_AIRCRAFT_MAKES_GROUP_TYPES)[keyof typeof LIST_AIRCRAFT_MAKES_GROUP_TYPES];
/** Enum defining the supported aircraft assignment methods for users. */
export declare const AIRCRAFT_ASSIGNMENT_METHOD: {
    readonly ALL: "all";
    readonly FLEET: "fleet";
    readonly AIRCRAFT: "aircraft";
};
export type AircraftAssignmentMethod = (typeof AIRCRAFT_ASSIGNMENT_METHOD)[keyof typeof AIRCRAFT_ASSIGNMENT_METHOD];
/** Enum defining the system's supported aircraft subscription statuses */
export declare const AIRCRAFT_SUBSCRIPTION_STATUS: {
    readonly PROVISIONAL: 0;
    readonly ACTIVE: 1;
    readonly DEACTIVE: 2;
};
export type AircraftSubscriptionStatus = (typeof AIRCRAFT_SUBSCRIPTION_STATUS)[keyof typeof AIRCRAFT_SUBSCRIPTION_STATUS];
/** Enum defining the system's supported account statuses */
export declare const ACCOUNT_STATUS: {
    readonly ACTIVE: "active";
    readonly INACTIVE: "inactive";
};
export type AccountStatus = (typeof ACCOUNT_STATUS)[keyof typeof ACCOUNT_STATUS];
/** Enum defining the system's supported account styles */
export declare const ACCOUNT_STYLE: {
    readonly TRADITIONAL: "traditional";
    readonly PARTS: "parts";
};
export type AccountStyle = (typeof ACCOUNT_STYLE)[keyof typeof ACCOUNT_STYLE];
/** Enum defining the types of time-based-tokens that the system can generate. */
export declare const TIME_BASED_TOKEN_TYPE: {
    readonly EMAIL: 1;
    readonly RESET_PASSWORD: 2;
    readonly FORGOT_PASSWORD: 3;
};
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
export declare function accountStyleText(authenticatedUser_or_accountStyle: AccountStyle | IAuthenticatedUser, tradStyle: string, partStyle: string): string;
export {};
//# sourceMappingURL=account.d.ts.map