import { expect } from 'chai';
import { removeIllegalCharacters } from '../src/functions';

describe('constants Unit Tests', () => {
  describe('removeIllegalCharacters', () => {
    beforeEach(() => {
      // Setup before each test if needed
    });

    afterEach(() => {
      // Cleanup after each test if needed
    });

    it('should replace illegal characters with _', () => {
      expect(removeIllegalCharacters('Completion 8310 ~ s.pdf')).to.equal('Completion_8310___s.pdf');
    });

    it('should replace illegal characters with _', () => {
      expect(removeIllegalCharacters('-!0#5%^&*()--=00|\\;:\'",.o?+.pdf')).to.equal('-!0_5___*()--_00____\'__.o__.pdf');
    });

    it('should replace illegal colon characters with _', () => {
      expect(removeIllegalCharacters('Fwd: Some;file.pdf')).to.equal('Fwd__Some_file.pdf');
    });

    it('should not replace legal characters like hyphens', () => {
      expect(removeIllegalCharacters('another-file.pdf')).to.equal('another-file.pdf');
    });

    it('should not replace legal characters like parentheses', () => {
      expect(removeIllegalCharacters('another-file(2).pdf')).to.equal('another-file(2).pdf');
    });
  });
});