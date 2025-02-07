const chai = require('chai');
const sinon = require('sinon');
const AircraftId = require('../AircraftId');
// Adjust the path as needed
const should = chai.should();

describe('AircraftId Class', () => {
  describe('Constructor', () => {
    it('should create an instance with valid parameters', () => {
      const aircraftId = new AircraftId('N', '12345');
      aircraftId.country_code.should.equal('N');
      aircraftId.reg_n_number.should.equal('12345');
    });

    it('should throw an error for invalid country_code', () => {
      (() =>
        new AircraftId('INVALID', '12345')).should.throw(Error, /country_code is not a valid country code/);
    });

    it('should throw an error for invalid reg_n_number', () => {
      (() =>
        new AircraftId('N', 'N12345')).should.throw(Error, /reg_n_number should not contain the country_code prefix/);
    });
  });

  describe('isValidAircraftId', () => {
    it('should return valid for a correct aircraft ID', () => {
      const result = AircraftId.isValidAircraftId({ country_code: 'N', reg_n_number: '12345' });
      result.isValid.should.be.true;
      should.not.exist(result.errorMessage);
    });

    it('should return invalid for a missing reg_n_number', () => {
      const result = AircraftId.isValidAircraftId({ country_code: 'N', reg_n_number: '' });
      result.isValid.should.be.false;
      result.errorMessage.should.equal('Bad form: missing reg_n_number');
    });

    it('should return invalid for an unknown country_code', () => {
      const result = AircraftId.isValidAircraftId({ country_code: 'XX', reg_n_number: '12345' });
      result.isValid.should.be.false;
      result.errorMessage.should.equal('country_code is not a valid country code');
    });
  });

  describe('parseTailNumber', () => {
    it('should correctly parse a valid tail number', () => {
      const result = AircraftId.parseTailNumber('N12345');
      result.should.deep.equal({ country_code: 'N', reg_n_number: '12345', region: 'United States' });
    });

    it('should return null for an unrecognized tail number', () => {
      should.not.exist(AircraftId.parseTailNumber('XX12345'));
    });
  });

  describe('aircraftId2Tailnumber', () => {
    it('should convert a valid Aircraft ID object to a tail number', () => {
      const tailNumber = AircraftId.aircraftId2Tailnumber({ country_code: 'N', reg_n_number: '12345' });
      tailNumber.should.equal('N12345');
    });

    it('should throw an error for an invalid aircraft ID', () => {
      (() =>
        AircraftId.aircraftId2Tailnumber({ country_code: 'XX', reg_n_number: '12345' }))
        .should.throw(Error, /country_code is not a valid country code/);
    });
  });

  describe('toTailNumber', () => {
    it('should return the correct tail number for an AircraftId instance', () => {
      const aircraftId = new AircraftId('N', '12345');
      aircraftId.toTailNumber().should.equal('N12345');
    });
  });
});
