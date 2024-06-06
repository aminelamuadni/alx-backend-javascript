const request = require('request');
const { expect } = require('chai');

describe('aPI integration tests', () => {
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

  describe('/available_payments endpoint', () => {
    it('should return correct payment methods', () => new Promise((done) => {
      request.get('http://localhost:7865/available_payments', (_err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
    }));
  });

  describe('/login endpoint', () => {
    it('should welcome the user by username', () => new Promise((done) => {
      request.post({
        url: 'http://localhost:7865/login',
        json: true,
        body: { userName: 'Betty' },
      }, (_err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    }));
  });
});
