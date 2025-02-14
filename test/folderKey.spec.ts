import { expect } from 'chai';
import { FolderKey, FOLDER_TYPES } from '../dist/index';

describe('FolderKey', () => {
  describe('isValidKey', () => {
    it('should return true for valid folder keys', () => {
      expect(FolderKey.isValidKey('L:1')).to.be.true;
      expect(FolderKey.isValidKey('C:1')).to.be.true;
      expect(FolderKey.isValidKey('O:1')).to.be.true;
      expect(FolderKey.isValidKey('L:1:1045')).to.be.true;
      expect(FolderKey.isValidKey('C:1:1045')).to.be.true;
      expect(FolderKey.isValidKey('O:1:1045')).to.be.true;
    });

    it('should return false for invalid folder keys', () => {
      expect(FolderKey.isValidKey('X:1')).to.be.false; // Invalid prefix
      expect(FolderKey.isValidKey('L:')).to.be.false; // Missing ID
      expect(FolderKey.isValidKey(':1')).to.be.false; // Missing prefix
      expect(FolderKey.isValidKey('L1:1')).to.be.false; // Incorrect format
      expect(FolderKey.isValidKey('L:1:')).to.be.false; // Missing subfolder ID
      expect(FolderKey.isValidKey('C-1-1045')).to.be.false; // Incorrect delimiter
    });
  });

  describe('constructor', () => {
    it('should throw an error for invalid folder keys', () => {
      expect(() => new FolderKey('X:1')).to.throw(Error, 'Invalid folder key: X:1');
      expect(() => new FolderKey('L:')).to.throw(Error, 'Invalid folder key: L:');
    });

    it('should correctly parse valid folder keys', () => {
      const logbook = new FolderKey('L:1');
      expect(logbook.type).to.equal(FOLDER_TYPES.LOGBOOK);
      expect(logbook.topFolderId).to.equal(1);
      expect(logbook.subFolderId).to.be.undefined;

      const categoryFolder = new FolderKey('C:1:1045');
      expect(categoryFolder.type).to.equal(FOLDER_TYPES.CATEGORY_FOLDER);
      expect(categoryFolder.topFolderId).to.equal(1);
      expect(categoryFolder.subFolderId).to.equal(1045);
    });
  });

  describe('determineType', () => {
    it('should return correct types for different keys', () => {
      expect(new FolderKey('L:1').type).to.equal(FOLDER_TYPES.LOGBOOK);
      expect(new FolderKey('C:1').type).to.equal(FOLDER_TYPES.CATEGORY);
      expect(new FolderKey('O:1').type).to.equal(FOLDER_TYPES.OFFICE_CATEGORY);
      expect(new FolderKey('L:1:1045').type).to.equal(FOLDER_TYPES.LOGBOOK_FOLDER);
      expect(new FolderKey('C:1:1045').type).to.equal(FOLDER_TYPES.CATEGORY_FOLDER);
      expect(new FolderKey('O:1:1045').type).to.equal(FOLDER_TYPES.OFFICE_SUB_CATEGORY);
    });

    it('should throw an error for unknown types', () => {
      expect(() => new FolderKey('X:1')).to.throw('Invalid folder key: X:1');
    });
  });

  describe('topFolderId', () => {
    it('should return the correct top-level folder ID', () => {
      expect(new FolderKey('L:2').topFolderId).to.equal(2);
      expect(new FolderKey('C:123').topFolderId).to.equal(123);
    });
  });

  describe('subFolderId', () => {
    it('should return undefined if no subfolder exists', () => {
      expect(new FolderKey('L:1').subFolderId).to.be.undefined;
    });

    it('should return the correct subfolder ID', () => {
      expect(new FolderKey('L:1:1045').subFolderId).to.equal(1045);
      expect(new FolderKey('C:5:999').subFolderId).to.equal(999);
    });
  });

  describe('logbookCategoryId (DEPRECATED)', () => {
    it('should return the same value as topFolderId', () => {
      const folder = new FolderKey('L:1');
      expect(folder.logbookCategoryId).to.equal(folder.topFolderId);
    });
  });
});