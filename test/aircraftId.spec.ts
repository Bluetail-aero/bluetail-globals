import { expect } from 'chai';
import { AircraftId } from '../dist/index';

describe('AircraftId Class', () => {
  describe('Constructor', () => {
    it('should create an instance with valid parameters', () => {
      const aircraftId = new AircraftId('N', '12345');
      expect(aircraftId.country_code).to.equal('N');
      expect(aircraftId.reg_n_number).to.equal('12345');
    });

    it('should create an instance with an empty string country_code', () => {
      const aircraftId = new AircraftId('', 'N12345');
      expect(aircraftId.country_code).to.equal('');
      expect(aircraftId.reg_n_number).to.equal('N12345');
    });

    it('should throw an error for invalid country_code', () => {
      expect(() => new AircraftId('INVALID', '12345')).to.throw(Error, /country_code is not a valid country code/);
    });

    it('should throw an error for invalid reg_n_number', () => {
      expect(() => new AircraftId('N', 'N12345')).to.throw(Error, /reg_n_number should not contain the country_code prefix/);
    });
  });

  describe('isValidAircraftId', () => {
    it('should return valid for a correct aircraft ID', () => {
      const result = AircraftId.isValidAircraftId({ country_code: 'N', reg_n_number: '12345' });
      expect(result.isValid).to.be.true;
      expect(result.errorMessage).to.be.null;
    });

    it('should return invalid for a missing reg_n_number', () => {
      const result = AircraftId.isValidAircraftId({ country_code: 'N', reg_n_number: '' });
      expect(result.isValid).to.be.false;
      expect(result.errorMessage).to.equal('Bad form: missing reg_n_number');
    });

    it('should return invalid for an unknown country_code', () => {
      const result = AircraftId.isValidAircraftId({ country_code: 'XX', reg_n_number: '12345' });
      expect(result.isValid).to.be.false;
      expect(result.errorMessage).to.equal('country_code is not a valid country code');
    });
  });

  describe('parseTailNumber', () => {
    it('should correctly parse a valid tail number', () => {
      const result = AircraftId.parseTailNumber('N12345');
      expect(result).to.deep.equal({ country_code: 'N', reg_n_number: '12345', region: 'United States' });
    });

    it('should return null for an unrecognized tail number', () => {
      expect(AircraftId.parseTailNumber('XX12345')).to.be.null;
    });
  });

  describe('aircraftId2Tailnumber', () => {
    it('should convert a valid Aircraft ID object to a tail number', () => {
      const tailNumber = AircraftId.aircraftId2Tailnumber({ country_code: 'N', reg_n_number: '12345' });
      expect(tailNumber).to.equal('N12345');
    });

    it('should throw an error for an invalid aircraft ID', () => {
      expect(() => AircraftId.aircraftId2Tailnumber({ country_code: 'XX', reg_n_number: '12345' }))
        .to.throw(Error, /country_code is not a valid country code/);
    });
  });

  describe('toTailNumber', () => {
    it('should return the correct tail number for an AircraftId instance', () => {
      const aircraftId = new AircraftId('N', '12345');
      expect(aircraftId.toTailNumber()).to.equal('N12345');
    });
  });
});