/** The ID of the standard "HOLD SHORT" logbook_category. */
export declare const HOLD_SHORT = 9;
/** Enum defining the types of logbook/category supported. */
export declare const LOGBOOK_CATEGORY_TYPES: {
    readonly LOGBOOK: 1;
    readonly CATEGORY: 2;
};
export type LogbookCategoryType = (typeof LOGBOOK_CATEGORY_TYPES)[keyof typeof LOGBOOK_CATEGORY_TYPES];
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
 *
 *
  USAGE EXAMPLE:

  if (!FolderKey.isValidKey("L:1:1045")) {
    console.log("String was invalid");
  } else {
    const f = new FolderKey("L:1:1045");
    console.log("The FolderKey f is of type: " + f.type);
    switch (f.type) {
      case "logbook":
        console.log("The FolderKey f is a logbook with id: " + f.logbookCategoryId);
        break;
      case "category":
        console.log("The FolderKey f is a category with id: " + f.logbookCategoryId);
        break;
      case "logbook_folder":
        console.log("The FolderKey f is a logbook-subfolder with id: " + f.subFolderId);
        break;
      case "category_folder":
        console.log("The FolderKey f is a category-subfolder with id: " + f.subFolderId);
        break;
      default:
        console.log("Unknown type");
    }
  }
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
//# sourceMappingURL=folders.d.ts.map