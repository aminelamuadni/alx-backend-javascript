/* eslint-disable jest/prefer-expect-assertions, jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('sums two positive integers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });
    it('sums two positive floats', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it('sums a positive and a negative integer', () => {
      assert.strictEqual(calculateNumber('SUM', 5, -2), 3);
    });
    it('sums two negative integers', () => {
      assert.strictEqual(calculateNumber('SUM', -1, -3), -4);
    });
    it('sums two negative floats', () => {
      assert.strictEqual(calculateNumber('SUM', -1.2, -3.7), -5);
    });
  });

  describe('SUBTRACT', () => {
    it('subtracts two positive integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
    });
    it('subtracts two positive floats', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
    });
    it('subtracts a positive integer from a negative integer', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1, 3), -4);
    });
    it('subtracts a positive float from a negative float', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, 0.5), -2);
    });
    it('subtracts two negative integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), 2);
    });
    it('subtracts two negative floats', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -3.7, -1.2), -3);
    });
  });

  describe('DIVIDE', () => {
    it('divides two positive integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
    });
    it('divides a positive integer by a negative integer', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, -2), -2);
    });
    it('attempts to divide by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
    });
    it('divides two negative integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -4, -2), 2);
    });
    it('divides two negative floats', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -4.5, -2.5), 2);
    });
  });

  describe('Error Handling', () => {
    it('should throw an error for an invalid operation type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 4, 2), {
        name: 'Error',
        message: 'Invalid type',
      });
    });
  });
});
