/*
  Class to represent a FolderKey.
  Supporting format validation and type determination.

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

  CHANGE HISTORY:
    2024.08.22 - Initial draft.

  TODOS:
    -
*/

const LOGBOOK_CATEGORY_ID_PART = 1;
const FOLDER_ID_PART = 2;

/**
 * Class to represent a FolderKey.
 * Supporting format validation and type determination.
 */
class FolderKey {
  static keyRegex = /^[LC]:\d+(:\d+)?$/;

  constructor(key) {
    if (!FolderKey.isValidKey(key)) {
      throw new Error(`Invalid folder key: ${key}`);
    }
    this.key = key;
    this.parts = key.split(':');
    this.type = this.determineType();
  }

  static isValidKey(key) {
    return FolderKey.keyRegex.test(key);
  }

  determineType() {
    const [prefix, , secondPart] = this.parts;
    if (prefix === 'L') {
      return secondPart ? 'logbook_folder' : 'logbook';
    } if (prefix === 'C') {
      return secondPart ? 'category_folder' : 'category';
    }
    throw new Error('Unknown type');
  }

  get logbookCategoryId() {
    return this.parts[LOGBOOK_CATEGORY_ID_PART];
  }

  get subFolderId() {
    return this.parts[FOLDER_ID_PART];
  }
}

exports.FolderKey = FolderKey;
