const request = require('request');
const { expect } = require('chai');

describe('API integration tests', () => {
  it('should return the correct result for the index page', () => new Promise((done) => {
    request.get('http://localhost:7865/', (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));

  describe('cart page', () => {
    it('should return correct response when id is a number', () => new Promise((done) => {
      request.get('http://localhost:7865/cart/12', (_err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    }));

    it('should return 404 when id is NOT a number', () => new Promise((done) => {
      request.get('http://localhost:7865/cart/hello', (_err, res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    }));
  });
});
