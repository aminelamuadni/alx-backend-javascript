const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with a specific object when true is passed', () => new Promise((done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.deep.equal({ data: 'Successful response from the API' });
      done(); // Signal Mocha that the test is complete
    }).catch((error) => {
      done(error); // Pass error to Mocha if the promise is rejected
    });
  }));
});
