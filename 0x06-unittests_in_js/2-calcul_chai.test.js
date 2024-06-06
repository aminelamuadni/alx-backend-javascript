const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('sums two positive integers', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('sums two positive floats', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
    it('sums a positive and a negative integer', () => {
      expect(calculateNumber('SUM', 5, -2)).to.equal(3);
    });
    it('sums two negative integers', () => {
      expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
    });
    it('sums two negative floats', () => {
      expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
    });
  });

  describe('SUBTRACT', () => {
    it('subtracts two positive integers', () => {
      expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    });
    it('subtracts two positive floats', () => {
      expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
    });
    it('subtracts a positive integer from a negative integer', () => {
      expect(calculateNumber('SUBTRACT', -1, 3)).to.equal(-4);
    });
    it('subtracts a positive float from a negative float', () => {
      expect(calculateNumber('SUBTRACT', -1.5, 0.5)).to.equal(-2);
    });
    it('subtracts two negative integers', () => {
      expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
    });
    it('subtracts two negative floats', () => {
      expect(calculateNumber('SUBTRACT', -3.7, -1.2)).to.equal(-3);
    });
  });

  describe('DIVIDE', () => {
    it('divides two positive integers', () => {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });
    it('divides a positive integer by a negative integer', () => {
      expect(calculateNumber('DIVIDE', 4, -2)).to.equal(-2);
    });
    it('attempts to divide by zero', () => {
      expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    });
    it('divides two negative integers', () => {
      expect(calculateNumber('DIVIDE', -4, -2)).to.equal(2);
    });
    it('divides two negative floats', () => {
      expect(calculateNumber('DIVIDE', -4.5, -2.5)).to.equal(2);
    });
  });

  describe('Error Handling', () => {
    it('should throw an error for an invalid operation type', () => {
      expect(() => calculateNumber('MULTIPLY', 4, 2)).to.throw('Invalid type');
    });
  });
});
