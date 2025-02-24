export declare const FOLDER_TYPES: {
    readonly LOGBOOK: "logbook";
    readonly CATEGORY: "category";
    readonly OFFICE_CATEGORY: "office_category";
    readonly LOGBOOK_FOLDER: "logbook_folder";
    readonly CATEGORY_FOLDER: "category_folder";
    readonly OFFICE_SUB_CATEGORY: "office_sub_category";
};
export type FolderType = (typeof FOLDER_TYPES)[keyof typeof FOLDER_TYPES];
/**
 * Class to represent a FolderKey.
 * Supporting format validation and type determination.
 * Formats supported:
 *  L:1 - Logbook with id 1
 *  C:1 - Category with id 1
 *  O:1 - Office category with id 1
 *  L:1:1045 - Logbook with id 1 and subfolder with id 1045
 *  C:1:1045 - Category with id 1 and subfolder with id 1045
 *  O:1:1045 - Office category with id 1 and subfolder with id 1045
 */
export declare class FolderKey {
    private key;
    private parts;
    type: FolderType;
    constructor(key: string);
    /**
     * Is this a valid folder key?
     * @param key The key to validate.
     * @returns True if the key is valid, false otherwise.
     */
    static isValidKey(key: string): boolean;
    /**
     * What type of folder does this key represent?
     * @returns The type of the folder key.
     */
    private determineType;
    /**
     * Returns the ID of the top-level folder.
     */
    get topFolderId(): number | undefined;
    /**
     * Returns the ID of the subfolder, of level-2 folder. If this is one.
     */
    get subFolderId(): number | undefined;
    /**
     * DEPRECATED: Use topFolderId instead.
     */
    get logbookCategoryId(): number | undefined;
}
//# sourceMappingURL=FolderKey.d.ts.map