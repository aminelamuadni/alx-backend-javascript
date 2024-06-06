const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy; let
    stub;

  beforeEach(() => {
    // Stub Utils.calculateNumber to always return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log to check if it logs the expected output
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and spy to their original functions
    stub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with "SUM", 100, 20 and log "The total is: 10"', () => {
    sendPaymentRequestToApi(100, 20); // Ensure arguments match what we expect to spy/stub

    // Validate that Utils.calculateNumber was called with correct arguments
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.calledOnce).to.be.true;

    // Validate that console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
