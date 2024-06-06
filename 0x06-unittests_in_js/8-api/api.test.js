const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./api');

const { expect } = chai;

chai.use(chaiHttp);

describe('index page', () => {
  it('should return the correct status code', () => new Promise((done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  }));

  it('should return the correct result', () => new Promise((done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  }));
});
