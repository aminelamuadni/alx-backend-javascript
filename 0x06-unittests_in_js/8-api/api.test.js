const request = require('request');
const { expect } = require('chai');

describe('index page', () => {
  it('should return the correct result', () => new Promise((done) => {
    request.get('http://localhost:7865/', (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  }));
});
