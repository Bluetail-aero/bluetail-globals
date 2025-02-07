// Test dev dependency setup:
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
const should = chai.should();

/* TO test

TEST=constants npm run test

*/

const { removeIllegalCharacters } = require('../functions');

// These characters allowed in file names. They will be removed and replaced by "_".
//
// ALLOWED_FILE_PATH_CHARS : [0-9a-zA-Z!\-_.*'()/]
//
// This is just here for reference.

describe('constants Unit Tests', () => {
  describe('removeIllegalCharacters', () => {
    beforeEach(() => {
    });

    afterEach(() => {
    });

    it('should replace illegal characters with _', () => {
      removeIllegalCharacters('Completion 8310 ~ s.pdf').should.equal('Completion_8310___s.pdf');
    });

    it('should replace illegal characters with _', () => {
      removeIllegalCharacters('-!0#5%^&*()--=00|\\;:\'",.o?+.pdf').should.equal('-!0_5___*()--_00____\'__.o__.pdf');
    });

    it('should replace illegal colon characters with _', () => {
      removeIllegalCharacters('Fwd: Some;file.pdf').should.equal('Fwd__Some_file.pdf');
    });

    it('should not replace legal characters like hyphens', () => {
      removeIllegalCharacters('another-file.pdf').should.equal('another-file.pdf');
    });

    it('should not replace legal characters like parentheses', () => {
      removeIllegalCharacters('another-file(2).pdf').should.equal('another-file(2).pdf');
    });
  });
});
