const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Before each test, replace console.log with a spy
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // After each test, restore the original console.log function
    consoleSpy.restore();
  });

  it('logs "The total is: 120" when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('logs "The total is: 20" when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
