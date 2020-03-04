import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/index';
import customMessages from '../src/utils/customMessages';
import statusCodes from '../src/utils/statusCodes';
import mockData from './data/mockData';

const { signupData, incompleteData } = mockData;
let generatedToken;
chai.use(chaiHttp);
chai.should();

// Signup
describe('User sign up', () => {
  it('Should return 201', (done) => {
    chai
      .request(server)
      .post('/api/auth/signup')
      .send(signupData)
      .end((err, res) => {
        const { message, token } = res.body;
        expect(res.status).to.equal(statusCodes.created);
        expect(message);
        expect(token);
        expect(message).to.equal(customMessages.userSignupSuccess);
        expect(token).to.be.a('string');
        done();
      });
  });
  it('Should return 400', (done) => {
    chai
      .request(server)
      .post('/api/auth/signup')
      .send(incompleteData)
      .end((err, res) => {
        const { error } = res.body;
        expect(res.status).to.equal(statusCodes.badRequest);
        expect(error);
        expect(error).to.equal(customMessages.userSignupFailed);
        done();
      });
  });
});

// Login
describe('Login', () => {
  // login with real data from db
  it(`Login with real data which are in the db, should return an
   object with a property of message and token`, (done) => {
    chai
      .request(server)
      .post('/api/auth/login')
      .set('Accept', 'Application/json')
      .send(mockData.realLoginDataFromTheDb)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message').to.equal('Successfully logged in');
        expect(res.body).to.have.property('token');
        done();
      });
  });
  // login with empty credentials
  it('Login with empty credentials should return an object with property error', (done) => {
    chai
      .request(server)
      .post('/api/auth/login')
      .set('Accept', 'Application/json')
      .send({})
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('error').to.equal('Please enter your email and your password');
        done();
      });
  });
  // login with empty credentials
  it('Login with empty password', (done) => {
    chai
      .request(server)
      .post('/api/auth/login')
      .set('Accept', 'Application/json')
      .send(mockData.emptyLoginPassword)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('error').to.equal('Please enter your password');
        done();
      });
  });
  // login with empty credentials
  it('Login with empty password', (done) => {
    chai
      .request(server)
      .post('/api/auth/login')
      .set('Accept', 'Application/json')
      .send(mockData.emptyLoginEmail)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('error').to.equal('Please enter your email');
        done();
      });
  });
  // login with wrong password
  it('Login with wrong password', (done) => {
    chai
      .request(server)
      .post('/api/auth/login')
      .set('Accept', 'Application/json')
      .send(mockData.WrongLoginPasswordData)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(401);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('error').to.equal('Email and password mismatch');
        done();
      });
  });
  // login with wrong email
  it('Login with wrong email', (done) => {
    chai
      .request(server)
      .post('/api/auth/login')
      .set('Accept', 'Application/json')
      .send(mockData.WrongLoginEmailData)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('error').to.equal('Unknown credentials');
        done();
      });
  });
});
describe('Reset Email', () => {
  // reset email password sent
  it('reset correct password email', (done) => {
    const user = {
      email: 'ugizwenayodiny@gmail.com'
    };
    chai
      .request(server)
      .post('/api/auth/resetpassword')
      .send(user)
      .end((err, res) => {
        generatedToken = res.body.token;
        res.should.have.status(statusCodes.ok);
        res.body.message.should.be.equal(customMessages.resetEmail);
        done();
      });
  });
  // reset email password not sent
  it('reset wrong password email', (done) => {
    const user = {
      email: 'ugizwenayodiny1@gmail.com'
    };
    chai
      .request(server)
      .post('/api/auth/resetpassword')
      .send(user)
      .end((err, res) => {
        res.should.have.status(statusCodes.forbidden);
        res.body.error.should.be.equal(customMessages.notExistUser);
        done();
      });
  });
  // success update password
  it('update the password', (done) => {
    const pass = {
      password: 'ugizwe'
    };
    chai
      .request(server)
      .post(`/api/auth/resetpassword/${generatedToken}`)
      .send(pass)
      .end((err, res) => {
        res.should.have.status(statusCodes.ok);
        res.body.message.should.be.equal(customMessages.changed);
        done();
      });
  });
  // welcome test
  it('welcome test', (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(statusCodes.ok);
        done();
      });
  });
  // occured an error while sending email
  it('occured reset email', (done) => {
    const user = {
      email: {}
    };
    chai
      .request(server)
      .post('/api/auth/resetpassword')
      .send(user)
      .end((err, res) => {
        res.should.have.status(statusCodes.badRequest);
        res.body.error.should.be.equal(customMessages.errorMessage);
        done();
      });
  });
  // occured an error while updating
  it('errored update of the password ', (done) => {
    const pass = {
      password: 'sesese'
    };
    const wrongToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVnaXp3ZW5heW9kaW55QGdtYWlsLmNvbSIsInVzZXJJZCI6MSwiZmlyc3ROYW1lIjoiRGl2aW5lIiwiaWF0IjoxNTgzNDkyMzcxfQ.NHfHvcHcjVhaTYfrywu0-voW_VdVgH2Qcj4CTMOFhdU';
    chai
      .request(server)
      .post(`/api/auth/resetpassword/${wrongToken}`)
      .send(pass)
      .end((err, res) => {
        res.should.have.status(statusCodes.badRequest);
        res.body.error.should.be.equal(customMessages.errorMessage);
        done();
      });
  });
});