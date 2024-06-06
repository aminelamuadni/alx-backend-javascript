/* eslint-disable jest/prefer-expect-assertions, jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when input is 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when input is 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when input is 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when input is 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 3 when input is 1.2345 and 1.5678', () => {
    assert.strictEqual(calculateNumber(1.2345, 1.5678), 3);
  });

  it('should return 2 when input is 0.9999 and 0.9999', () => {
    assert.strictEqual(calculateNumber(0.9999, 0.9999), 2);
  });

  it('should return 10 when input is 4.9999 and 4.5001', () => {
    assert.strictEqual(calculateNumber(4.9999, 4.5001), 10);
  });

  it('should return 5 when input is 2.4999 and 2.5001', () => {
    assert.strictEqual(calculateNumber(2.4999, 2.5001), 5);
  });

  it('should return 0 when input is 0.0001 and 0.0001', () => {
    assert.strictEqual(calculateNumber(0.0001, 0.0001), 0);
  });

  it('should return 1 when input is 0.5000 and 0.0001', () => {
    assert.strictEqual(calculateNumber(0.5000, 0.0001), 1);
  });
});
