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
      chai.request(server)
        .get('/available_payments')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.deep.equal({
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
      chai.request(server)
        .post('/login')
        .send({ userName: 'Betty' })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Welcome Betty');
          done();
        });
    }));
  });
});
