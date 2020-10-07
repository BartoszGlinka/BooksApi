const fullName = require('../formatFullname.js');
const expect = require('chai').expect;

describe('fullName', () => {

    it('should return an error if "fullName" arg is not a string or is undefined', () => {
        expect(fullName(undefined)).to.equal('Error');
        expect(fullName()).to.equal('Error');
        expect(fullName(12)).to.equal('Error');
        expect(fullName({})).to.equal('Error');
        expect(fullName([])).to.equal('Error');
        expect(fullName('')).to.equal('Error');
        expect(fullName(function() {})).to.equal('Error');
    });
    it('should return an error if "fullName" is in bad format', () => {
        expect(fullName('John Doe Test')).to.equal('Error');
        expect(fullName('JOHN Doe Test')).to.equal('Error');
        expect(fullName('JOHN')).to.equal('Error');
        expect(fullName('Doe')).to.equal('Error');
    });
  });