/*
  CHANGE HISTORY:
    2024.08.22 - Initial draft.
    2025.02.07 - Converting this package to use typescript.
               - Also, updated it to support office categories and subcategories.
    2025.05.28 - Reorganize all constants.
*/

/** The ID of the standard "HOLD SHORT" logbook_category. */
export const HOLD_SHORT = 9;

/** Enum defining the types of logbook/category supported. */
export const LOGBOOK_CATEGORY_TYPES = {
  LOGBOOK: 1,
  CATEGORY: 2,
} as const;
export type LogbookCategoryType = (typeof LOGBOOK_CATEGORY_TYPES)[keyof typeof LOGBOOK_CATEGORY_TYPES];


export const FOLDER_TYPES = {
  LOGBOOK: 'logbook',
  CATEGORY: 'category',
  OFFICE_CATEGORY: 'office_category',
  LOGBOOK_FOLDER: 'logbook_folder',
  CATEGORY_FOLDER: 'category_folder',
  OFFICE_SUB_CATEGORY: 'office_sub_category',
} as const;
export type FolderType = (typeof FOLDER_TYPES)[keyof typeof FOLDER_TYPES];

const FOLDER_KEY_REGEX = /^[LCO]:\d+(:\d+)?$/;
const LEVEL_1_FOLDER = 1;
const LEVEL_2_FOLDER = 2;

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
export class FolderKey {
  private key: string;
  private parts: string[];
  public type: FolderType;

  constructor(key: string) {
    if (!FolderKey.isValidKey(key)) {
      throw new Error(`Invalid folder key: ${key}`);
    }
    this.key = key;
    this.parts = key.split(':');
    this.type = this.determineType();
  }

  /**
   * Is this a valid folder key?
   * @param key The key to validate.
   * @returns True if the key is valid, false otherwise.
   */
  static isValidKey(key: string): boolean {
    return FOLDER_KEY_REGEX.test(key);
  }

  /**
   * What type of folder does this key represent?
   * @returns The type of the folder key.
   */
  private determineType(): FolderType {
    const [prefix, , secondPart] = this.parts;
    if (prefix === 'L') {
      return secondPart ? 'logbook_folder' : 'logbook';
    }
    if (prefix === 'C') {
      return secondPart ? 'category_folder' : 'category';
    }
    if (prefix === 'O') {
      return secondPart ? 'office_sub_category' : 'office_category';
    }
    throw new Error('Unknown type');
  }

  /**
   * Returns the ID of the top-level folder.
   */
  get topFolderId(): number | undefined {
    return Number(this.parts[LEVEL_1_FOLDER]);
  }

  /**
   * Returns the ID of the subfolder, of level-2 folder. If this is one.
   */
  get subFolderId(): number | undefined {
    return this.parts.length > LEVEL_2_FOLDER ? Number(this.parts[LEVEL_2_FOLDER]) : undefined;
  }

  /**
   * DEPRECATED: Use topFolderId instead.
   */
  get logbookCategoryId(): number | undefined {
    return this.topFolderId;
  }
}